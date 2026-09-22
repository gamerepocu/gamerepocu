(() => {
'use strict';
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let lang = 'th';
try { lang = localStorage.getItem('tenrm-language') === 'en' ? 'en' : 'th'; } catch {}
const documentUrl = file => location.hostname === 'gamerepocu.github.io'
 ? `https://github.com/gamerepocu/gamerepocu/releases/download/learning-materials/${file.split('/').pop().slice(0, 2)}.docx`
 : encodeURI(file);
const state = { query: '', category: 'all', sort: 'number' };
const copy = {
 th: {library:'คลังเกม',about:'เกี่ยวกับคลังเกม',footer:'เรียนรู้ผ่านการเล่น สู่การดูแลทรัพยากรธรรมชาติร่วมกัน',footerNote:'คลังเกมเพื่อการเรียนรู้ · ภาษาไทย / English',eyebrow:'เกมเพื่อการเรียนรู้ด้านสิ่งแวดล้อม',hero:'เล่น เรียนรู้<br><em>เติบโตไปด้วยกัน</em>',intro:'สำรวจเกมจากงานวิจัยที่เชื่อมโยงผู้คนกับธรรมชาติ เครื่องมือสำหรับครู ผู้นำกิจกรรม และชุมชน เพื่อเปิดบทสนทนาและร่วมสร้างการเปลี่ยนแปลง',explore:'สำรวจคลังเกม',researchBased:'พัฒนาจากงานวิจัย',twoLanguages:'ภาษาไทยและอังกฤษ',featured:'เกมแนะนำ',featuredSub:'ร่วมออกแบบพื้นที่สีเขียว',statGames:'เกมเพื่อการเรียนรู้',statTopics:'ประเด็นสิ่งแวดล้อม',statLanguages:'ภาษา · ไทยและอังกฤษ',collection:'ค้นพบเกมสำหรับการเรียนรู้',collectionSub:'เลือกประเด็นที่สนใจ แล้วเริ่มต้นการเรียนรู้ร่วมกัน',search:'ค้นหาชื่อเกม ประเด็น หรือคำสำคัญ…',searchLabel:'ค้นหาเกม',sortLabel:'เรียงลำดับเกม',sortNumber:'ลำดับเอกสาร',sortName:'ชื่อเกม ก–ฮ / A–Z',all:'ทั้งหมด',biodiversity:'ความหลากหลายทางชีวภาพ',agriculture:'เกษตรและภูมิอากาศ',water:'น้ำและพื้นที่ชุ่มน้ำ',forest:'ป่าและชุมชน',urban:'พื้นที่สีเขียวในเมือง',results:n=>`แสดง ${n} จาก 11 เกม`,clear:'ล้างตัวกรอง',empty:'ไม่พบเกมที่ตรงกับการค้นหา',emptyHelp:'ลองใช้คำอื่น หรือเลือกดูเกมทั้งหมด',aboutTitle:'ความรู้จากงานวิจัย<br>สู่การเรียนรู้ร่วมกัน',aboutBody:'คลังนี้รวบรวมเกม 11 เกมจากเอกสารที่ให้มา เพื่อสนับสนุนการเรียนรู้เรื่องทรัพยากรธรรมชาติ ระบบนิเวศ และการตัดสินใจร่วมกัน แต่ละเกมมีแนวทางการใช้งาน อุปกรณ์ และประเด็นสำหรับสรุปบทเรียน',aboutNote:'เนื้อหาภาษาไทยคงข้อความจากต้นฉบับ ภาษาอังกฤษเป็นบทสรุปเรียบเรียงตามหัวข้อ ภาพและข้อความบนอุปกรณ์คงภาษาของต้นฉบับ เอกสารรวมฉบับที่ 12 มีเกมชุดเดียวกัน จึงไม่แสดงซ้ำในคลัง',compilation:'ดาวน์โหลดภาคผนวกรวม (.docx) ↗',back:'กลับไปคลังเกม',onPage:'เนื้อหาในหน้านี้',research:'ชื่อเรื่อง / งานวิจัย',overview:'สรุป',materials:'อุปกรณ์',play:'วิธีการใช้งาน',learning:'องค์ความรู้สอดแทรก',debrief:'แนวทางการสรุปผลการใช้งาน',gallery:'ภาพและสื่อจากต้นฉบับ',resources:'เอกสารต้นฉบับ',download:'ดาวน์โหลดเอกสาร',print:'พิมพ์หน้านี้',source:'ที่มา',original:'อ่านข้อความภาษาไทยจากต้นฉบับ',enNote:'',galleryNote:'คลิกภาพเพื่อขยาย ภาพอุปกรณ์และกิจกรรมมาจากเอกสารต้นฉบับ และคงข้อความตามภาพเดิม',activityPhotos:'ภาพบรรยากาศการใช้งาน',materialsPhotos:'ภาพอุปกรณ์และสื่อประกอบ',noPhotos:'เอกสารนี้ไม่มีภาพบรรยากาศการใช้งานแยกไว้ ภาพด้านล่างเป็นอุปกรณ์และสื่อประกอบ',image:'ภาพ',docNote:'เอกสาร Word ภาษาไทย รวมรายละเอียดกติกา ตาราง และภาพต้นฉบับ',missingFiles:'เอกสารบางเกมอ้างถึงไฟล์ Excel และชุดพิมพ์แยก ซึ่งไม่ได้อยู่ในโฟลเดอร์ที่ได้รับ ดาวน์โหลดนี้เป็นเอกสาร Word ที่มีอยู่จริง',notFound:'ไม่พบเกมนี้',notFoundText:'ลิงก์อาจไม่ถูกต้อง เลือกเกมจากคลังเพื่อดำเนินการต่อ',photoCaption:'เล่นด้วยกัน เรียนรู้ไปด้วยกัน',format:'รูปแบบและหัวข้อ',formatNote:'กิจกรรมการเรียนรู้แบบมีผู้นำเกม โปรดดูรูปแบบและอุปกรณ์ในคู่มือของแต่ละเกม'},
 en: {library:'Game library',about:'About the collection',footer:'Shared learning for a more sustainable world.',footerNote:'A learning game collection · ไทย / English',eyebrow:'ENVIRONMENTAL LEARNING, THROUGH PLAY',hero:'Small games.<br><em>Bigger perspectives.</em>',intro:'Research meets the real world. Explore hands-on games that bring people together to understand nature, exchange ideas and shape a shared future.',explore:'Explore the games',researchBased:'Game-based learning',twoLanguages:'',featured:'IN THE SPOTLIGHT',featuredSub:'Co-designing greener communities',statGames:'Learning games',statTopics:'Environmental themes',statLanguages:'Languages · Thai & English',collection:'Find your next learning experience',collectionSub:'A different way to explore nature, communities and the choices we make.',search:'Search games, topics or keywords…',searchLabel:'Search games',sortLabel:'Sort games',sortNumber:'Document order',sortName:'Name A–Z',all:'All games',biodiversity:'Biodiversity',agriculture:'Farming & climate',water:'Water & wetlands',forest:'Forests & communities',urban:'Urban green spaces',results:n=>`Showing ${n} of 11 games`,clear:'Clear filters',empty:'No games found',emptyHelp:'Try another keyword or explore all games.',aboutTitle:'From research.<br>For shared learning.',aboutBody:'Eleven games from the supplied research documents, brought together for educators, facilitators and communities. Each explores natural resources, ecosystems and collective decisions, with materials, facilitation guidance and reflection prompts.',aboutNote:'Thai content preserves the source text. English sections are edited summaries, not complete translations of every rule table. Images retain their original language. Document 12 is a combined appendix of the same collection, so its games are not listed twice.',compilation:'Download the complete appendix (.docx) ↗',back:'Back to the library',onPage:'IN THIS GUIDE',research:'Research & origin',overview:'Overview',materials:'Materials',play:'How to use',learning:'Embedded learning',debrief:'Debriefing',gallery:'Images & source materials',resources:'Original document',download:'Download document',print:'Print this guide',source:'Source',original:'Read the original Thai text',enNote:'English reading guide · Summarised from the Thai source. For complete rule tables, card conditions and print layouts, consult the original document. Image text remains in its original language.',galleryNote:'Select an image to enlarge it. Equipment and activity images are extracted from the supplied document and retain their original text.',activityPhotos:'The game in practice',materialsPhotos:'Equipment & learning materials',noPhotos:'No separate activity photos are embedded under this document’s gallery heading. Equipment and learning materials are shown below.',image:'Image',docNote:'Original Thai Word document, including detailed rules, tables and source images.',missingFiles:'Some guides refer to separate Excel workbooks and print kits that were not supplied. This download contains the available Word document.',notFound:'Game not found',notFoundText:'This link may be incorrect. Choose a game from the library to continue.',photoCaption:'A shared table. A new perspective.',format:'Format & themes',formatNote:'Facilitated learning activities. See each source guide for its specific format and equipment.'}
};
const t = key => copy[lang][key];
const localized = (game,field) => lang === 'th' ? (game[field+'Th'] || game[field]) : game[field];
const metaTh = {'Flexible group':'ปรับตามกลุ่ม','2 game years':'2 ปีในเกม','12–16 players':'12–16 คน','2 rounds':'2 รอบ','12 players':'12 คน','4–6 players':'4–6 คน','Facilitator-led':'ผู้นำเกมกำหนด','4–5 players':'4–5 คน','5 rounds':'5 รอบ','2+ equal groups':'2 กลุ่มขึ้นไป','Up to 7 rounds':'ไม่เกิน 7 รอบ','Not specified':'ไม่ได้ระบุ','6–11 players':'6–11 คน','9 per group':'กลุ่มละ 9 คน','≈2 hours / 3 rounds':'≈2 ชั่วโมง / 3 รอบ','8–12 players':'8–12 คน','≈30 min / round':'≈30 นาที / รอบ','12–14 players':'12–14 คน','90–150 minutes':'90–150 นาที'};
const meta = value => lang === 'th' ? metaTh[value] || value : value;
const categories = ['all','biodiversity','agriculture','water','forest','urban'];
function shell(){
 document.documentElement.lang=lang;
 $$('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
 $$('[data-lang]').forEach(el=>{el.classList.toggle('active',el.dataset.lang===lang);el.setAttribute('aria-pressed',String(el.dataset.lang===lang));});
}
function card(g){
 const contain=['03','04','07','10'].includes(g.id);
 return `<a class="card" href="#game/${g.id}" aria-label="${esc(localized(g,'title'))}"><div class="card-image ${contain?'contain':''}"><img src="${esc(g.cover)}" alt="${esc(localized(g,'title'))}" loading="lazy" width="600" height="400"><span class="card-number">${g.id}</span></div><div class="card-content"><span class="category">${esc(t(g.category))}</span><h3>${esc(localized(g,'title'))}</h3><p>${esc(localized(g,'intro'))}</p><div class="card-bottom"><span>♧ ${esc(meta(g.players))}</span><span>◷ ${esc(meta(g.time))}</span><span aria-hidden="true">↗</span></div></div></a>`;
}
function renderCards(){
 const query=state.query.trim().toLocaleLowerCase();
 let results=GAMES.filter(g=>(state.category==='all'||g.category===state.category)&&(!query||[g.title,g.titleTh,g.intro,g.introTh,g.overview,g.sectionsTh.overview,...g.tags.flatMap(a=>[a.th,a.en]),copy.en[g.category],copy.th[g.category]].join(' ').toLocaleLowerCase().includes(query)));
 if(state.sort==='name')results.sort((a,b)=>localized(a,'title').localeCompare(localized(b,'title'),lang));
 $('#results-count').textContent=t('results')(results.length);
 $('#cards').innerHTML=results.length?results.map(card).join(''):`<div class="empty"><h3>${t('empty')}</h3><p>${t('emptyHelp')}</p><button class="button" id="reset-empty">${t('clear')}</button></div>`;
 $('#clear-filters').hidden=!state.query&&state.category==='all';
 $$('[data-category]').forEach(el=>{const active=state.category===el.dataset.category;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
 if($('#reset-empty'))$('#reset-empty').onclick=resetFilters;
}
function resetFilters(){state.query='';state.category='all';$('#search').value='';renderCards();$('#search').focus();}
function library(){
 document.title='TENRM Lab — '+t('library');
 $('#main').innerHTML=`<section class="hero"><div><div class="eyebrow"><span class="dot"></span>${t('eyebrow')}</div><h1>${t('hero')}</h1><p>${t('intro')}</p><a class="button" href="#library">${t('explore')} <span aria-hidden="true">↗</span></a><div class="hero-mini"><span>${t('researchBased')}</span><span>${t('twoLanguages')}</span></div></div><a class="hero-visual" href="#game/09" aria-label="${esc(localized(GAMES[8],'title'))}"><img class="hero-photo" src="assets/09-image157.png" alt="${esc(t('photoCaption'))}" width="650" height="424"><span class="photo-tag"><span class="status-dot">●</span>${t('featured')}</span><div class="photo-caption"><div><small>${t('featuredSub')}</small><h3>Coco Green Space</h3></div><span class="round-arrow" aria-hidden="true">↗</span></div></a></section><section class="stats" aria-label="Collection"><div class="stat"><strong>11</strong><span>${t('statGames')}</span></div><div class="stat"><strong>05</strong><span>${t('statTopics')}</span></div><div class="stat"><strong>02</strong><span>${t('statLanguages')}</span></div></section>
 <section id="library"><div class="section-top"><div><h2>${t('collection')}</h2><p>${t('collectionSub')}</p></div><span class="mini-label">THE GAME COLLECTION / 01—11</span></div><div class="search-row"><label class="search-box"><span aria-hidden="true">⌕</span><input id="search" type="search" value="${esc(state.query)}" placeholder="${t('search')}" aria-label="${t('searchLabel')}"></label><select id="sort" aria-label="${t('sortLabel')}"><option value="number">${t('sortNumber')}</option><option value="name">${t('sortName')}</option></select></div><div class="filters" aria-label="${lang==='th'?'กรองตามประเด็น':'Filter by theme'}">${categories.map(c=>`<button class="filter" data-category="${c}">${t(c)}</button>`).join('')}</div><div class="results-row"><span id="results-count" role="status" aria-live="polite"></span><button class="text-button" id="clear-filters">${t('clear')}</button></div><div class="grid" id="cards"></div></section>
 <section class="about" id="about"><div><div class="eyebrow"><span class="dot"></span>TENRM LAB / THE COLLECTION</div><h2>${t('aboutTitle')}</h2></div><div><p>${t('aboutBody')}</p><p>${t('aboutNote')}</p><a href="${documentUrl('documents/12_ส่วนภาคผนวก Template เกม.docx')}" download>${t('compilation')}</a></div></section>`;
 $('#search').oninput=e=>{state.query=e.target.value;renderCards();};
 $('#sort').value=state.sort;$('#sort').onchange=e=>{state.sort=e.target.value;renderCards();};
 $$('[data-category]').forEach(el=>el.onclick=()=>{state.category=el.dataset.category;renderCards();});
 $('#clear-filters').onclick=resetFilters;renderCards();
}
function section(g,key,num,body){
 return `<section class="detail-section" id="${key}"><h2><span class="section-num">${String(num).padStart(2,'0')}</span>${t(key)}</h2>${body}</section>`;
}
function guideContent(g,key){
 if(lang==='th')return g.sectionsTh[key]||`<p>${esc(g[key]||'')}</p>`;
 let text=g[key];let body=Array.isArray(text)?`<${key==='play'?'ol':'ul'}>${text.map(p=>`<li>${esc(p)}</li>`).join('')}</${key==='play'?'ol':'ul'}>`:`<p>${esc(text)}</p>`;
 if(g.sectionsTh[key])body+=`<details><summary>${t('original')}</summary><div class="original" lang="th">${g.sectionsTh[key]}</div></details>`;
 return body;
}
function gallery(g){
 const photos=g.gallery.filter(x=>x.section==='gallery');const photoSet=new Set(photos.map(x=>x.src));
 const equipment=g.images.filter(src=>!photoSet.has(src));
 const images=items=>`<div class="gallery">${items.map((src,i)=>`<button data-image="${esc(src)}" data-caption="${esc(localized(g,'title'))} · ${t('image')} ${i+1}" aria-label="${t('image')} ${i+1}: ${esc(localized(g,'title'))}"><img loading="lazy" src="${esc(src)}" alt="${esc(localized(g,'title'))} — ${t('image')} ${i+1}"><span>${t('image')} ${String(i+1).padStart(2,'0')} ↗</span></button>`).join('')}</div>`;
 return `<p>${t('galleryNote')}</p>${photos.length?`<h3 class="gallery-label">${t('activityPhotos')}</h3>${images([...new Set(photos.map(x=>x.src))])}`:`<p class="note">${t('noPhotos')}</p>`}<details><summary>${t('materialsPhotos')} (${equipment.length})</summary><div class="original">${images(equipment)}</div></details>`;
}
function detail(id){
 const g=GAMES.find(x=>x.id===id);
 if(!g){$('#main').innerHTML=`<section class="not-found"><h1>${t('notFound')}</h1><p>${t('notFoundText')}</p><a class="button" href="#library">${t('back')}</a></section>`;return;}
 document.title=localized(g,'title')+' — TENRM Lab';
 const keys=['overview','research','materials','play',...(g.learning?['learning']:[]),'debrief','gallery','resources'];
 let content=keys.map((key,i)=>{
 let body='';
 if(key==='research')body=`<p>${esc(localized(g,'research'))}</p><p><strong>${t('source')}:</strong> ${lang==='th'?esc(g.sourceTh):'Research document supplied in the collection.'}</p><h3>${t('format')}</h3><p>${t('formatNote')}</p><div class="tags">${g.tags.map(a=>`<span>${esc(a[lang])}</span>`).join('')}</div>`;
 else if(key==='gallery')body=gallery(g);
 else if(key==='resources')body=`<div class="resource-card"><div><strong>${esc(localized(g,'title'))} · DOCX</strong><p>${t('docNote')}</p></div><a class="button" href="${documentUrl(g.file)}" download>${t('download')} ↓</a></div><p class="note">${t('missingFiles')}</p>`;
 else body=guideContent(g,key);
 return section(g,key,i+1,body);
 }).join('');
 $('#main').innerHTML=`<div class="breadcrumb"><a href="#library">← ${t('back')}</a> / ${g.id}</div><section class="detail-hero"><div><span class="category">${t(g.category)} / ${g.id}</span><h1>${esc(localized(g,'title'))}</h1><p>${esc(localized(g,'intro'))}</p><div class="detail-meta"><span>♧ ${esc(meta(g.players))}</span><span>◷ ${esc(meta(g.time))}</span></div><a class="button" href="${documentUrl(g.file)}" download>${t('download')} ↓</a><button class="button secondary print-button">${t('print')}</button></div><img src="${esc(g.cover)}" alt="${esc(localized(g,'title'))}"></section>${lang==='en'?`<p class="note">${t('enNote')}</p>`:''}<div class="detail-layout"><nav class="toc" aria-label="${t('onPage')}"><small>${t('onPage')}</small>${keys.map(k=>`<a href="#game/${g.id}/${k}" data-section="${k}">${t(k)}</a>`).join('')}</nav><article>${content}</article></div>`;
 $('.print-button').onclick=()=>window.print();
 $$('[data-image]').forEach(button=>button.onclick=()=>{const dialog=$('#image-dialog');$('img',dialog).src=button.dataset.image;$('img',dialog).alt=button.dataset.caption;$('p',dialog).textContent=button.dataset.caption;dialog.showModal();});
}
let currentGame=null;
function render({preserveScroll=false}={}){
 const oldY=scrollY;const parts=location.hash.slice(1).split('/');shell();
 if(parts[0]==='game') {detail(parts[1]);currentGame=parts[1];if(parts[2])requestAnimationFrame(()=>document.getElementById(parts[2])?.scrollIntoView());else if(!preserveScroll)window.scrollTo(0,0);}
 else {library();currentGame=null;if(parts[0])requestAnimationFrame(()=>document.getElementById(parts[0])?.scrollIntoView());else if(!preserveScroll)window.scrollTo(0,0);}
 if(preserveScroll)window.scrollTo(0,oldY);
}
$$('[data-lang]').forEach(button=>button.onclick=()=>{lang=button.dataset.lang;try{localStorage.setItem('tenrm-language',lang);}catch{}render({preserveScroll:true});});
window.addEventListener('hashchange',()=>{
 const p=location.hash.slice(1).split('/');
 if(p[0]==='game'&&p[1]===currentGame&&p[2]){document.getElementById(p[2])?.scrollIntoView();return;}
 render();
});
$('.close-image').onclick=()=>$('#image-dialog').close();
$('#image-dialog').addEventListener('click',event=>{if(event.target===$('#image-dialog'))$('#image-dialog').close();});
render();
})();
