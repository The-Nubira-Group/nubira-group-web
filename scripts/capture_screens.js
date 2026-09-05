const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const TARGET_DIR_TYPO = path.resolve(__dirname, "../../product iamegs");
const TARGET_DIR_CLEAN = path.resolve(__dirname, "../../product images");

// Ensure directories exist
if (!fs.existsSync(TARGET_DIR_TYPO)) fs.mkdirSync(TARGET_DIR_TYPO, { recursive: true });
if (!fs.existsSync(TARGET_DIR_CLEAN)) fs.mkdirSync(TARGET_DIR_CLEAN, { recursive: true });

async function saveScreenshot(page, filename, options = {}) {
  const file1 = path.join(TARGET_DIR_TYPO, filename);
  const file2 = path.join(TARGET_DIR_CLEAN, filename);
  await page.screenshot({ path: file1, ...options });
  fs.copyFileSync(file1, file2);
  console.log(`Saved: ${filename}`);
}

async function saveElementScreenshot(locator, filename) {
  const file1 = path.join(TARGET_DIR_TYPO, filename);
  const file2 = path.join(TARGET_DIR_CLEAN, filename);
  await locator.screenshot({ path: file1 });
  fs.copyFileSync(file1, file2);
  console.log(`Saved element: ${filename}`);
}

(async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: true });

  // 1. DESKTOP CONTEXT
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await desktopContext.newPage();

  console.log("--- Capturing Desktop Pages & Sections ---");

  // === HOME PAGE ===
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  // Full page
  await saveScreenshot(page, "01_page_home_full.png", { fullPage: true });

  // Navbar transparent top
  const navTransparent = page.locator("header");
  await saveElementScreenshot(navTransparent, "01_navbar_desktop_transparent.png");

  // Navbar scrolled navy state
  await page.evaluate(() => window.scrollTo(0, 300));
  await page.waitForTimeout(400);
  await saveElementScreenshot(navTransparent, "02_navbar_desktop_scrolled_navy.png");

  // Reset scroll to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  // Mega-menu open state
  await page.hover("text=Our Businesses");
  await page.waitForTimeout(400);
  await saveScreenshot(page, "03_navbar_desktop_mega_menu_open.png", { clip: { x: 0, y: 0, width: 1440, height: 500 } });

  // Close mega menu by moving mouse away
  await page.mouse.move(10, 10);
  await page.waitForTimeout(300);

  // Home Section 1: Hero
  const heroSec = page.locator("section").first();
  await saveElementScreenshot(heroSec, "04_home_section_1_hero.png");

  // Home Section 2: Group Stats Strip
  const statsSec = page.locator("section:has-text('05')").first();
  await saveElementScreenshot(statsSec, "05_home_section_2_group_stats.png");

  // Home Section 3: Our Businesses Asymmetric Grid
  const businessesSec = page.locator("#our-businesses");
  await saveElementScreenshot(businessesSec, "06_home_section_3_asymmetric_business_cards.png");

  // Home Section 4: Operating Principles
  const principlesSec = page.locator("section:has-text('Why one group')");
  await saveElementScreenshot(principlesSec, "07_home_section_4_operating_principles.png");

  // Home Section 5: Leadership Quote
  const quoteSec = page.locator("section:has-text('True holding value is created')");
  await saveElementScreenshot(quoteSec, "08_home_section_5_leadership_quote.png");

  // Home Section 6: Closing CTA
  const ctaSec = page.locator("section:has-text('Looking to partner, invest, or work with us?')");
  await saveElementScreenshot(ctaSec, "09_home_section_6_closing_cta.png");

  // Footer Desktop
  const footerEl = page.locator("footer");
  await saveElementScreenshot(footerEl, "10_footer_desktop.png");

  // === BUSINESSES INDEX PAGE ===
  await page.goto("http://localhost:3000/businesses", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await saveScreenshot(page, "11_page_businesses_index_full.png", { fullPage: true });

  // Businesses Index Header & Tag Pills
  const busHeader = page.locator("section:has-text('Five industries. One operating standard.')");
  await saveElementScreenshot(busHeader, "12_businesses_index_header_and_filter.png");

  // Individual alternating rows
  const rowAnga9 = page.locator("#anga9");
  await saveElementScreenshot(rowAnga9, "13_businesses_index_row_anga9.png");

  const rowRiksho = page.locator("#riksho");
  await saveElementScreenshot(rowRiksho, "14_businesses_index_row_riksho.png");

  const rowZigza = page.locator("#zigza");
  await saveElementScreenshot(rowZigza, "15_businesses_index_row_zigza.png");

  const rowGargi = page.locator("#house-of-gargi");
  await saveElementScreenshot(rowGargi, "16_businesses_index_row_house_of_gargi.png");

  const rowCreation = page.locator("#nubira-creation");
  await saveElementScreenshot(rowCreation, "17_businesses_index_row_nubira_creation.png");

  // === BUSINESS DETAIL PAGES (ALL 5 SLUGS) ===
  const slugs = ["anga9", "riksho", "zigza", "house-of-gargi", "nubira-creation"];
  for (const slug of slugs) {
    await page.goto(`http://localhost:3000/businesses/${slug}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    await saveScreenshot(page, `18_page_business_${slug}_full.png`, { fullPage: true });
  }

  // Deep dive on Anga9 specific sections
  await page.goto("http://localhost:3000/businesses/anga9", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const angaHero = page.locator("section:has-text('B2B wholesale, without the middleman markup.')");
  await saveElementScreenshot(angaHero, "19_business_detail_hero_and_ctas.png");

  const angaScreenshot = page.locator("section:has-text('Official Record')");
  await saveElementScreenshot(angaScreenshot, "20_business_detail_framed_screenshot.png");

  const angaWhat = page.locator("section:has-text('What it does')");
  await saveElementScreenshot(angaWhat, "21_business_detail_what_it_does.png");

  const angaWho = page.locator("section:has-text('Who it’s for')");
  await saveElementScreenshot(angaWho, "22_business_detail_who_its_for.png");

  const angaRelated = page.locator("section:has-text('Other Nubira Group businesses')");
  await saveElementScreenshot(angaRelated, "23_business_detail_related_strip.png");

  // === ABOUT PAGE ===
  await page.goto("http://localhost:3000/about", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await saveScreenshot(page, "24_page_about_full.png", { fullPage: true });

  const aboutTimeline = page.locator("section:has-text('Our story')");
  await saveElementScreenshot(aboutTimeline, "25_about_section_trajectory_timeline.png");

  const aboutPrinciples = page.locator("section:has-text('Mission, vision, and principles')");
  await saveElementScreenshot(aboutPrinciples, "26_about_section_mission_vision_values.png");

  const aboutHoldings = page.locator("section:has-text('The Nubira portfolio')");
  await saveElementScreenshot(aboutHoldings, "27_about_section_portfolio_recap.png");

  // === CONTACT PAGE ===
  await page.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await saveScreenshot(page, "28_page_contact_full.png", { fullPage: true });

  const contactFormSection = page.locator("section:has-text('Send an inquiry')");
  await saveElementScreenshot(contactFormSection, "29_contact_section_form_and_office_directory.png");

  const contactFaqSection = page.locator("section:has-text('Frequently asked questions')");
  await saveElementScreenshot(contactFaqSection, "30_contact_section_faq_accordion.png");

  // Contact Page with Prefill: /contact?business=zigza
  await page.goto("http://localhost:3000/contact?business=zigza", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await saveScreenshot(page, "31_contact_page_prefilled_zigza.png");

  // === LEGAL PAGES ===
  await page.goto("http://localhost:3000/privacy", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  await saveScreenshot(page, "32_page_privacy_policy.png");

  await page.goto("http://localhost:3000/terms", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  await saveScreenshot(page, "33_page_terms_of_service.png");

  await desktopContext.close();

  // 2. MOBILE CONTEXT (iPhone 14 / standard 390x844 mobile viewport)
  console.log("--- Capturing Mobile Views & Navigation ---");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();

  // Mobile Home Page
  await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(400);
  await saveScreenshot(mobilePage, "34_mobile_home_full.png", { fullPage: true });

  // Mobile Hamburger Menu Open
  await mobilePage.click("button[aria-label='Open Navigation Menu']");
  await mobilePage.waitForTimeout(500);
  await saveScreenshot(mobilePage, "35_mobile_navbar_overlay_open.png");

  // Expand "Our Businesses" accordion inside mobile menu (target visible element)
  await mobilePage.locator("button:visible:has-text('Our Businesses')").click();
  await mobilePage.waitForTimeout(500);
  await saveScreenshot(mobilePage, "36_mobile_navbar_accordion_expanded.png");

  // Close mobile menu
  await mobilePage.click("button[aria-label='Close Navigation Menu']");
  await mobilePage.waitForTimeout(400);

  // Mobile Footer with expanded accordion
  await mobilePage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await mobilePage.waitForTimeout(500);
  await mobilePage.locator("footer button:visible:has-text('Businesses')").click();
  await mobilePage.waitForTimeout(500);
  const mobileFooter = mobilePage.locator("footer");
  await saveElementScreenshot(mobileFooter, "37_mobile_footer_accordion_expanded.png");

  await mobileContext.close();
  await browser.close();

  console.log("--- All screenshots captured successfully! ---");
})();
