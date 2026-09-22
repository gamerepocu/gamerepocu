const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
(async () => {
 const browser = await chromium.launch({headless:true});
 const page = await browser.newPage({viewport:{width:1440,height:1000}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173');
 await page.waitForSelector('.card');
 assert.equal(await page.locator('.card').count(),11);
 await page.screenshot({path:'/private/tmp/game-library-desktop-th.png',fullPage:true});
 await page.click('[data-lang="en"]');assert.equal(await page.locator('html').getAttribute('lang'),'en');
 await page.click('[data-category="urban"]');assert.equal(await page.locator('.card').count(),3);
 await page.click('#clear-filters');
 await page.fill('#search','ถ้ำ');assert.equal(await page.locator('.card').count(),1);
 await page.fill('#search','zzzznomatch');assert.equal(await page.locator('.empty').count(),1);
 await page.click('#reset-empty');assert.equal(await page.locator('.card').count(),11);
 await page.selectOption('#sort','name');
 const names=await page.locator('.card h3').allTextContents();assert.equal(names[0],'Coco Green Space');
 await page.screenshot({path:'/private/tmp/game-library-desktop-en.png',fullPage:true});
 for (const lang of ['en','th']) {
  await page.click(`[data-lang="${lang}"]`);
  for (let i=1;i<=11;i++) {
   await page.goto('http://127.0.0.1:5173/#game/'+String(i).padStart(2,'0'));
   await page.waitForSelector('.detail-hero');
   assert.ok(await page.locator('#overview').textContent());
   assert.ok(await page.locator('#materials').textContent());
   assert.ok(await page.locator('#play').textContent());
   assert.ok(await page.locator('#debrief').textContent());
   const href=await page.locator('.detail-hero a[download]').getAttribute('href');
   const response=await page.request.head('http://127.0.0.1:5173/'+href);assert.equal(response.status(),200);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  }
 }
 await page.click('[data-lang="en"]');
 await page.click('[data-section="gallery"]');await page.waitForURL('**/gallery');
 const photo=page.locator('#gallery button[data-image]').first();await photo.click();
 assert.equal(await page.locator('dialog').evaluate(el=>el.open),true);
 await page.keyboard.press('Escape');assert.equal(await page.locator('dialog').evaluate(el=>el.open),false);
 await page.goto('http://127.0.0.1:5173/#game/11');
 await page.screenshot({path:'/private/tmp/game-library-detail.png',fullPage:true});
 await page.reload();assert.equal(await page.locator('html').getAttribute('lang'),'en');
 await page.setViewportSize({width:390,height:844});
 await page.goto('http://127.0.0.1:5173/');await page.waitForSelector('.card');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 await page.screenshot({path:'/private/tmp/game-library-mobile.png',fullPage:true});
 for(const lang of ['en','th']){
  await page.click(`[data-lang="${lang}"]`);
  for(let i=1;i<=11;i++){
   await page.goto('http://127.0.0.1:5173/#game/'+String(i).padStart(2,'0'));await page.waitForSelector('.detail-hero');
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`mobile overflow ${lang}/${i}`);
  }
 }
 await page.goto('http://127.0.0.1:5173/#game/99');assert.equal(await page.locator('.not-found').count(),1);
 await page.goto('http://127.0.0.1:5173/#about');
 const compilation=await page.locator('.about a[download]').getAttribute('href');assert.equal((await page.request.head('http://127.0.0.1:5173/'+compilation)).status(),200);
 // Verify all generated media paths and downloads are local files.
 const base=path.resolve(__dirname,'..');const context={};require('node:vm').runInNewContext(fs.readFileSync(path.join(base,'data.js'),'utf8'),{window:context});
 for(const g of context.GAMES) for(const file of [g.file,g.cover,...g.images]) assert.ok(fs.existsSync(path.join(base,file)),file);
 assert.deepEqual(errors,[]);
 console.log('PASS: 11 games, both languages, 44 desktop/mobile detail checks, search, filters, sorting, downloads, dialog, persistence, missing route and all media paths.');
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
