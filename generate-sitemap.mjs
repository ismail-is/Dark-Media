import fs from "fs";
import path from "path";

const routesDir = path.join("src", "routes");
const publicDir = "public";
const sitemapPath = path.join(publicDir, "sitemap.xml");
const robotsPath = path.join(publicDir, "robots.txt");

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Get all route files
const files = fs.readdirSync(routesDir);

const urls = [];
const today = new Date().toISOString().split("T")[0];

for (const file of files) {
  if (file.endsWith(".tsx") && !file.startsWith("__")) {
    let slug = file.replace(".tsx", "");
    if (slug === "index") {
      slug = "";
    } else {
      slug = slug;
    }

    // Add to sitemap urls
    urls.push(
      "  <url>\n    <loc>https://darkmedia.tech/" +
        slug +
        "</loc>\n    <lastmod>" +
        today +
        "</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>" +
        (slug === "" ? "1.0" : "0.8") +
        "</priority>\n  </url>",
    );
  }
}

const sitemapXML =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.join("\n") +
  "\n</urlset>";

fs.writeFileSync(sitemapPath, sitemapXML);
console.log("Sitemap generated with " + urls.length + " URLs at " + sitemapPath);

const robotsTXT = "User-agent: *\nAllow: /\n\nSitemap: https://darkmedia.tech/sitemap.xml";

fs.writeFileSync(robotsPath, robotsTXT);
console.log("Robots.txt generated at " + robotsPath);
