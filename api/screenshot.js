import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const timeOut = 60;
const ENV = process.env;
const isVercel = ENV.VERCEL_URL;
const isVercelDev = ENV.NOW_REGION?.indexOf('dev') > -1;

export const maxDuration = timeOut;

function getDevChromPath() {
  const platform = process.platform;
  const chromePaths = {
    win32: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    linux: '/usr/bin/google-chrome'
  };
  return chromePaths[platform] || '';
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body;

  const urlReg = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  if (!urlReg.test(data.url)) {
    return res.status(400).json({ error: "Invalid URL parameter" });
  }

  let browser = null;

  try {
    const startTime = Date.now();

    browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--font-render-hinting=medium',
        '--force-color-profile=srgb',
        '--disable-extensions',
        '--disable-gpu',
        '--no-zygote',
      ],
      defaultViewport: chromium.defaultViewport,
      executablePath: (isVercel && !isVercelDev) ? await chromium.executablePath() : getDevChromPath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    await page.setUserAgent(data.userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    await page.setViewport({
      width: parseInt(data.width) || 1920,
      height: parseInt(data.height) || 1080,
      deviceScaleFactor: parseFloat(data.scale) || 1,
      isMobile: data.device === 'mobile',
    });

    await page.goto(data.url, {
      waitUntil: ["networkidle2"],
      timeout: timeOut * 1000
    });

    await page.evaluate(() => {
      // 对中文网站的支持
      const style = document.createElement('style');
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap');
        body, div, span, p, h1, h2, h3, h4, h5, h6, em, i {
          font-family: 'Noto Sans SC', sans-serif;
        }
      `;
      document.head.appendChild(style);
    });

    await page.waitForFunction(() => document.fonts.ready);

    // 处理 data.selector
    if (data.selector) {
      const selectors = data.selector.split(',').map(s => s.trim());
      await page.evaluate((selectors) => {
        const selectorRegex = /^(?:[a-zA-Z][a-zA-Z0-9]*|[#.][_a-zA-Z][_a-zA-Z0-9-]*|#[_a-zA-Z][_a-zA-Z0-9-]*(?:\[[a-zA-Z][a-zA-Z0-9-]*(?:=["\'][^"\']*["\'])?\])*)((?:\s*[>,+~]\s*|\s+)(?:[a-zA-Z][a-zA-Z0-9]*|[#.][_a-zA-Z][_a-zA-Z0-9-]*|#[_a-zA-Z][_a-zA-Z0-9-]*(?:\[[a-zA-Z][a-zA-Z0-9-]*(?:=["\'][^"\']*["\'])?\])*))*$/;

        selectors.forEach(selector => {
          if (selectorRegex.test(selector)) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
              el.style.visibility = 'hidden';
            });
          } else {
            console.warn(`Invalid selector: ${selector}`);
          }
        });
      }, selectors);
    }

    let screenshot = await page.screenshot({
      type: data.format || "jpeg",
      quality: data.format === 'jpeg' ? 100 : undefined,
      fullPage: data.fullPage || false,
    });

    const base64Prefix = `data:image/${data.format || 'jpeg'};base64,`;

    res.json({
      code: 0,
      img: base64Prefix + screenshot.toString('base64'),
      duration: Date.now() - startTime,
      msg: 'ok'
    });
  } catch (error) {
    res.status(500).json({
      error: "Error generating screenshot",
      msg: error.message,
      data
    });
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}