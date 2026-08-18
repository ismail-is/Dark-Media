import fs from "fs";
import path from "path";

function getFiles(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });
  return Array.prototype.concat(...files);
}

const files = getFiles("src/routes").filter((f) => f.endsWith(".tsx"));

let updated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");

  let found = false;
  let newContent = content;

  // Check if we've already added these tags to avoid duplicates
  if (content.includes('name: "robots"')) {
    console.log(`Skipped (already has tags): ${path.basename(file)}`);
    continue;
  }

  if (content.includes("head: () => ({")) {
    // If meta block exists, append to it
    if (content.match(/meta:\s*\[/)) {
      newContent = content.replace(/meta:\s*\[/, (match) => {
        found = true;
        return (
          match +
          `
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Mangalore" },
      { name: "geo.position", content: "12.9141;74.8560" },
      { name: "ICBM", content: "12.9141, 74.8560" },`
        );
      });
    } else {
      // If head exists but no meta: [], we should insert meta
      newContent = content.replace(/head:\s*\(\)\s*=>\s*\(\s*\{/, (match) => {
        found = true;
        return (
          match +
          `
    meta: [
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Mangalore" },
      { name: "geo.position", content: "12.9141;74.8560" },
      { name: "ICBM", content: "12.9141, 74.8560" },
    ],`
        );
      });
    }
  } else if (content.includes("createFileRoute(")) {
    // No head block, add one after createFileRoute(..)({
    newContent = content.replace(/createFileRoute\([^)]*\)\(\{/, (match) => {
      found = true;
      return (
        match +
        `
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Mangalore" },
      { name: "geo.position", content: "12.9141;74.8560" },
      { name: "ICBM", content: "12.9141, 74.8560" },
    ],
  }),`
      );
    });
  }

  if (found) {
    fs.writeFileSync(file, newContent, "utf8");
    updated++;
    console.log(`Updated: ${path.basename(file)}`);
  } else {
    console.log(`Skipped (could not parse): ${path.basename(file)}`);
  }
}

console.log(`Done! Updated ${updated} files.`);
