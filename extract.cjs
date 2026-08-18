const fs = require("fs");

const indexCode = fs.readFileSync("src/routes/index.tsx", "utf8");
const layoutCode = fs.readFileSync("src/components/SharedLayout.tsx", "utf8");

// 1. Extract Nav from index.tsx
const navRegex = /function Nav\(\) \{[\s\S]*?^}\n/m;
const navMatch = indexCode.match(navRegex);
if (!navMatch) {
  console.error("Nav not found in index.tsx");
  process.exit(1);
}
let navStr = navMatch[0];

// 2. Modify Nav to export and use absolute paths
navStr = navStr.replace("function Nav() {", "export function Nav() {");
navStr = navStr.replace(/"#top"/g, '"/"');
navStr = navStr.replace(/"#services"/g, '"/#services"');
navStr = navStr.replace(/"#contact"/g, '"/#contact"');

// 3. Add useScroll to imports in SharedLayout.tsx if missing
let newLayoutCode = layoutCode.replace(
  "export function Nav() {",
  navStr + "\n// OLD NAV WAS HERE\n/*",
);
newLayoutCode = newLayoutCode.replace(
  "export function Footer() {",
  "*/\nexport function Footer() {",
);
newLayoutCode = newLayoutCode.replace(
  'import { motion, useInView, useSpring } from "motion/react";',
  'import { motion, useInView, useSpring, useScroll } from "motion/react";',
);

// 4. Remove Nav from index.tsx
let newIndexCode = indexCode.replace(navRegex, "");
// Add import Nav from SharedLayout if not present
if (!newIndexCode.includes("import { Nav }")) {
  newIndexCode = newIndexCode.replace(
    "import whiteLogo",
    'import { Nav } from "@/components/SharedLayout";\nimport whiteLogo',
  );
}

fs.writeFileSync("src/components/SharedLayout.tsx", newLayoutCode);
fs.writeFileSync("src/routes/index.tsx", newIndexCode);

console.log("Extraction complete!");
