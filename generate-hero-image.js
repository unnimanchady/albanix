const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function createHeroImage() {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    executablePath: 'C:\\Users\\hp\\.cache\\puppeteer\\chrome\\win64-152.0.7977.42\\chrome-win64\\chrome.exe'
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1200, deviceScaleFactor: 2 });

  // Get absolute paths to images
  const basePath = path.join(__dirname, 'public', 'images');
  
  // Helper to get image as data uri
  const getAsDataURI = (filename) => {
    try {
      const p = path.join(basePath, filename);
      if (!fs.existsSync(p)) return '';
      const b64 = fs.readFileSync(p).toString('base64');
      const ext = path.extname(filename).substring(1);
      return `data:image/${ext};base64,${b64}`;
    } catch(e) {
      console.log('Error reading', filename, e);
      return '';
    }
  };

  const treatImg = getAsDataURI('product-treatanywhere.png');
  const gymImg = getAsDataURI('product-gym.png');
  const restImg = getAsDataURI('product-restaurant.png');
  const vanImg = getAsDataURI('product-van-sales.png');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Oswald:wght@700&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          width: 1600px;
          height: 1200px;
          background: transparent; /* Or white, but transparent allows it to blend better */
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
        }

        .container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .ambient-glow {
          position: absolute;
          width: 1200px;
          height: 1000px;
          background: radial-gradient(circle, rgba(23,107,255,0.15) 0%, rgba(0,194,232,0.05) 50%, transparent 70%);
          z-index: 0;
        }

        .center-platform {
          position: absolute;
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #07111F 0%, #0B1B32 100%);
          border-radius: 50%;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 30px 60px rgba(7, 17, 31, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.1),
            0 0 80px rgba(23, 107, 255, 0.3);
          border: 2px solid rgba(23, 107, 255, 0.4);
        }

        .center-platform h1 {
          font-family: 'Oswald', sans-serif;
          font-size: 80px;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: 0.1em;
          text-shadow: 0 0 20px rgba(0, 194, 232, 0.8);
        }
        
        .center-platform p {
          color: #00C2E8;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0.2em;
          margin-top: 10px;
          text-transform: uppercase;
        }

        .module {
          position: absolute;
          width: 480px;
          height: 320px;
          background: #FFFFFF;
          border-radius: 24px;
          z-index: 20;
          box-shadow: 
            0 40px 80px rgba(0,0,0,0.15),
            0 10px 20px rgba(23,107,255,0.1);
          border: 1px solid #E4EAF1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .module-header {
          height: 60px;
          background: #F5F8FC;
          border-bottom: 1px solid #E4EAF1;
          display: flex;
          align-items: center;
          padding: 0 24px;
          font-weight: 800;
          font-size: 18px;
          color: #07111F;
          letter-spacing: 0.05em;
        }
        
        .module-header span {
          color: #176BFF;
          margin-right: 12px;
        }

        .module-content {
          flex: 1;
          background-size: cover;
          background-position: top center;
          background-repeat: no-repeat;
        }

        /* Connecting lines */
        .svg-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 5;
        }
        
        path {
          stroke: rgba(23, 107, 255, 0.3);
          stroke-width: 4;
          stroke-dasharray: 10 10;
          fill: none;
        }

        /* Positions */
        .mod-tl { top: 80px; left: 80px; }
        .mod-tr { top: 80px; right: 80px; }
        .mod-bl { bottom: 80px; left: 80px; }
        .mod-br { bottom: 80px; right: 80px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="ambient-glow"></div>
        
        <svg class="svg-lines">
          <!-- Lines connecting center to modules -->
          <path d="M800 600 L320 240" />
          <path d="M800 600 L1280 240" />
          <path d="M800 600 L320 960" />
          <path d="M800 600 L1280 960" />
        </svg>

        <div class="center-platform">
          <h1>ALBANIX</h1>
          <p>Ecosystem</p>
        </div>

        <div class="module mod-tl">
          <div class="module-header"><span>01</span> HEALTHCARE (TreatAnywhere)</div>
          <div class="module-content" style="background-image: url('${treatImg}')"></div>
        </div>

        <div class="module mod-tr">
          <div class="module-header"><span>02</span> FITNESS (Gym Mate)</div>
          <div class="module-content" style="background-image: url('${gymImg}')"></div>
        </div>

        <div class="module mod-bl">
          <div class="module-header"><span>03</span> RESTAURANT (MenuPilot)</div>
          <div class="module-content" style="background-image: url('${restImg}')"></div>
        </div>

        <div class="module mod-br">
          <div class="module-header"><span>04</span> DISTRIBUTION (RouteX)</div>
          <div class="module-content" style="background-image: url('${vanImg}')"></div>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: 'networkidle0' });
  const outPath = path.join(basePath, 'products-hero.png');
  await page.screenshot({ path: outPath, omitBackground: true });
  console.log('Saved image to', outPath);
  await browser.close();
}

createHeroImage().catch(console.error);
