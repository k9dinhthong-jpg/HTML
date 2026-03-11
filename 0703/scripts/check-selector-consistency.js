#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");

function listFiles(dir, extensions) {
  const output = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      output.push(...listFiles(fullPath, extensions));
      continue;
    }

    if (extensions.includes(path.extname(entry.name).toLowerCase())) {
      output.push(fullPath);
    }
  }

  return output;
}

function toRelative(filePath) {
  return path.relative(projectRoot, filePath).replaceAll(path.sep, "/");
}

function collectHtmlMeta(htmlFiles) {
  const htmlIds = new Set();
  const htmlClasses = new Set();
  const htmlNames = new Set();

  const idRegex = /\bid\s*=\s*"([^"]+)"|\bid\s*=\s*'([^']+)'/gi;
  const classRegex = /\bclass\s*=\s*"([^"]+)"|\bclass\s*=\s*'([^']+)'/gi;
  const nameRegex = /\bname\s*=\s*"([^"]+)"|\bname\s*=\s*'([^']+)'/gi;

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, "utf8");

    for (const m of content.matchAll(idRegex)) {
      const id = (m[1] || m[2] || "").trim();
      if (id) {
        htmlIds.add(id);
      }
    }

    for (const m of content.matchAll(classRegex)) {
      const classAttr = (m[1] || m[2] || "").trim();
      if (!classAttr) {
        continue;
      }
      classAttr
        .split(/\s+/)
        .map((item) => item.trim())
        .filter(Boolean)
        .forEach((item) => htmlClasses.add(item));
    }

    for (const m of content.matchAll(nameRegex)) {
      const name = (m[1] || m[2] || "").trim();
      if (name) {
        htmlNames.add(name);
      }
    }
  }

  return { htmlIds, htmlClasses, htmlNames };
}

function collectCssRefs(cssFiles) {
  const refs = [];
  const idRegex = /#([a-zA-Z_][\w-]*)/g;
  const classRegex = /\.([a-zA-Z_][\w-]*)/g;

  for (const file of cssFiles) {
    const content = fs.readFileSync(file, "utf8");

    for (const m of content.matchAll(idRegex)) {
      refs.push({
        kind: "id",
        value: m[1],
        file: toRelative(file),
      });
    }

    for (const m of content.matchAll(classRegex)) {
      refs.push({
        kind: "class",
        value: m[1],
        file: toRelative(file),
      });
    }
  }

  return refs;
}

function collectJsRefs(jsFiles) {
  const refs = [];

  const stringSelectorRegex =
    /querySelector(?:All)?\s*\(\s*(["'`])([^"'`]+)\1\s*\)/g;

  for (const file of jsFiles) {
    const content = fs.readFileSync(file, "utf8");

    for (const m of content.matchAll(stringSelectorRegex)) {
      const selector = (m[2] || "").trim();
      if (!selector) {
        continue;
      }

      const idDirect = selector.match(/^#([a-zA-Z_][\w-]*)$/);
      if (idDirect) {
        refs.push({ kind: "id", value: idDirect[1], file: toRelative(file) });
      }

      const classDirect = selector.match(/^\.([a-zA-Z_][\w-]*)$/);
      if (classDirect) {
        refs.push({
          kind: "class",
          value: classDirect[1],
          file: toRelative(file),
        });
      }

      const nameAttr = selector.match(
        /^\w+\[name=["']([^"']+)["']\](?::checked)?$/,
      );
      if (nameAttr) {
        refs.push({
          kind: "name",
          value: nameAttr[1],
          file: toRelative(file),
        });
      }
    }
  }

  return refs;
}

function uniqueRefs(refs) {
  const seen = new Set();
  const output = [];

  for (const ref of refs) {
    const key = `${ref.kind}|${ref.value}|${ref.file}`;
    if (!seen.has(key)) {
      seen.add(key);
      output.push(ref);
    }
  }

  return output;
}

function main() {
  const htmlFiles = listFiles(projectRoot, [".html"]);
  const cssFiles = listFiles(projectRoot, [".css"]);
  const jsFiles = listFiles(projectRoot, [".js"]);

  const { htmlIds, htmlClasses, htmlNames } = collectHtmlMeta(htmlFiles);
  const cssRefs = collectCssRefs(cssFiles);
  const jsRefs = collectJsRefs(jsFiles);

  const allRefs = uniqueRefs([...cssRefs, ...jsRefs]);

  const issues = allRefs.filter((ref) => {
    if (ref.kind === "id") {
      return !htmlIds.has(ref.value);
    }
    if (ref.kind === "class") {
      return !htmlClasses.has(ref.value);
    }
    if (ref.kind === "name") {
      return !htmlNames.has(ref.value);
    }
    return false;
  });

  if (issues.length === 0) {
    console.log("OK: Khong tim thay selector/name lech giua HTML, CSS, JS.");
    process.exit(0);
  }

  console.error("Loi: Phat hien selector/name khong ton tai trong HTML:");
  for (const issue of issues) {
    console.error(`- [${issue.kind}] ${issue.value} (${issue.file})`);
  }
  process.exit(1);
}

main();
