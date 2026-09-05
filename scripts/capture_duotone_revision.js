const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const REVIEW_DIR = path.resolve(__dirname, "../../duotone_review");
const PRODUCT_IMAGES_DIR = path.resolve(__dirname, "../../product images");
const ARTIFACTS_DIR = "C:/Users/shaws/.gemini/antigravity-ide/brain/5052de41-bdd6-40f7-bc0f-819ab400c586";

[REVIEW_DIR, PRODUCT_IMAGES_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

(async () => {
  console.log("Launching browser to capture duotone revision screenshots...");
  const browser = await chromium.launch({ channel: "msedge", headless: true });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);

  // 1. Full Home Page Screenshot
  const fullPagePath1 = path.join(REVIEW_DIR, "homepage_duotone_revision.png");
  const fullPagePath2 = path.join(PRODUCT_IMAGES_DIR, "01_page_home_full_duotone.png");
  const fullPagePathArtifact = path.join(ARTIFACTS_DIR, "homepage_duotone_revision.png");

  await page.screenshot({ path: fullPagePath1, fullPage: true });
  fs.copyFileSync(fullPagePath1, fullPagePath2);
  try {
    fs.copyFileSync(fullPagePath1, fullPagePathArtifact);
  } catch (e) {
    console.error("Artifact copy error:", e);
  }
  console.log("Saved full page screenshot: homepage_duotone_revision.png");

  // 2. Hero Section alone (Option b: architectural gold line motif on ink-navy)
  const heroLocator = page.locator("section").first();
  const heroPath = path.join(REVIEW_DIR, "hero_option_b_navy_gold.png");
  await heroLocator.screenshot({ path: heroPath });
  console.log("Saved hero section screenshot: hero_option_b_navy_gold.png");

  // 3. Section 3: Businesses Cards at Rest (Navy Duotone + 4px thin accent tabs)
  const cardsSection = page.locator("#our-businesses");
  const cardsRestPath = path.join(REVIEW_DIR, "business_cards_rest_duotone.png");
  await cardsSection.screenshot({ path: cardsRestPath });
  console.log("Saved business cards rest state: business_cards_rest_duotone.png");

  // 4. Hover state over Riksho card to show color reveal
  // Scroll to #our-businesses
  await cardsSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);

  // Find Riksho card
  const rikshoCard = page.locator("h4:has-text('Riksho')").locator("xpath=ancestor::div[contains(@class, 'group')]").first();
  await rikshoCard.hover();
  await page.waitForTimeout(400); // allow 300ms transition to complete

  const cardsHoverPath = path.join(REVIEW_DIR, "business_card_hover_color_reveal.png");
  await rikshoCard.screenshot({ path: cardsHoverPath });
  console.log("Saved business card hover state: business_card_hover_color_reveal.png");

  await context.close();
  await browser.close();
  console.log("Capture completed successfully!");
})();
