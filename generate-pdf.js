const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set full desktop viewport
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  const filePath = 'file:///C:/Users/Toni/Desktop/Jag1910/Waydean%20Nursery/Index.html';
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for fonts
  await page.evaluateHandle('document.fonts.ready');

  // Scroll through the full page to trigger all lazy-loaded images
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });

  // Wait for all images to fully load
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    await Promise.all(images.map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }));
  });

  await new Promise(r => setTimeout(r, 1000));

  // Get full page height
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);

  // Generate single-page PDF at exact website width & full height
  await page.pdf({
    path: 'C:/Users/Toni/Desktop/Jag1910/Waydean Nursery/WaydeanNursery_Final.pdf',
    printBackground: true,
    width: '1440px',
    height: pageHeight + 'px',
  });

  await browser.close();
  console.log('PDF generated successfully!');
})();
