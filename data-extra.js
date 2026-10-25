// Games added after the original eleven-document build. build.py regenerates data.js only, so these records survive a rebuild.
// Toxic Game: English source document (Toxic Game_ Guidelines.docx). English text is summarised from it; Thai text is a translated summary.
window.GAMES.push({
 id: '12',
 sourceLang: 'en',
 title: 'Toxic Game',
 titleTh: 'Toxic Game',
 category: 'agriculture',
 cover: 'assets/cover-toxic.png',
 players: '6–12 players',
 time: '4–6 rounds',
 intro: 'Trace how farm chemicals move through land, food and people, and look for a healthier way out together.',
 introTh: 'ติดตามสารเคมีจากแปลงเกษตรสู่ดิน น้ำ อาหาร และผู้คน แล้วร่วมกันหาทางออกที่ปลอดภัยกว่า',
 research: 'Toxic Landscapes and Livelihoods: Chemical Use in Agriculture.',
 researchTh: 'Toxic Landscapes and Livelihoods: Chemical Use in Agriculture (ภูมิทัศน์ที่เป็นพิษกับวิถีชีวิต: การใช้สารเคมีในการเกษตร)',
 source: 'Chulalongkorn University, Faculty of Science, as part of the ROBOPUSA and ADAPT projects.',
 sourceTh: 'คณะวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ภายใต้โครงการ ROBOPUSA และ ADAPT',
 tags: [{th:'สารเคมีทางการเกษตร',en:'Agricultural chemicals'},{th:'สุขภาพ',en:'Health'},{th:'ระบบสังคม-นิเวศ',en:'Socio-ecological system'},{th:'เกมสวมบทบาท',en:'Role-play game'}],
 overview: 'Chemical use and misuse in agriculture is a long-standing problem for sustainable farming, with growing concern about contamination of people and other living beings. Some crops are blamed for “toxic landscapes”, and farmers say there is “no way out”. The Toxic Game lets participants collectively explore pathways toward healthier behaviours and landscapes. It simulates the links between farm decisions, chemical use and impacts on ecosystems, health and the economy of farmers and local communities, supporting systems thinking, participation and the co-design of sustainable agricultural management.',
 materials: [
  'Game board: a village territory with a river through the middle, community forest, roads, houses, a temple and a hospital. Plots of equal size (7 × 7 or 10 × 12 cm) each represent 1 rai.',
  'Crops for each plot: rice, vegetables, corn, rubber or longan, as archetypes of food vs commercial and annual vs perennial crops. Species can be adapted to the local situation.',
  'Pieces: natural products (frogs, mice, fish, forest products), bagged harvests, coloured land-allocation pins for each player, labour tokens, and coloured crystals for chemical residues (herbicide, fertilizer, insecticide).',
  'Cards: farmer profiles (family, labour force, needs), crop cards, and event cards such as pest outbreaks and weather events.',
  'Play money in notes of 1, 5, 10, 20, 50 and 100 units, an Excel application to record decisions and calculate income, and a public display board of crop needs, chemical effects, economic performance and establishment costs.',
  'A room for about twenty people: the board and recording desk in the centre, a public meeting space for players, and the bank set apart from the village.'
 ],
 play: [
  'Roles: 6–12 players are farmers with 2, 3 or 4 plots and different starting cash (20 units per plot). Researchers monitor contamination, and the temple, hospital and bank act as village institutions.',
  'Set-up: players draw numbers that set their arrival and play order. Players 1–2 get 4 plots and 80 units, players 3–6 get 3 plots and 60 units, and players 7–12 get 2 plots and 40 units. They place their plots in turn and introduce their family, labour force and needs.',
  'Crop choice: assign a crop to each plot and pay the bank for inputs. The bank offers crop loans at 10% interest per year.',
  'Labour allocation: assign family or hired labour to each plot so that the food and cash needs on the family card are covered.',
  'Foraging: collect forest and river products (mushrooms, frogs, mice, snails, fish) to eat, give to monks or sell.',
  'Natural events: the facilitator announces the year’s rainfall (dry, moderate or humid) and any pest or disease outbreaks.',
  'Market prices: a high, medium or low price level is drawn. Rubber prices move by 33% and longan by 67%; rice and vegetable prices change little.',
  'Resource allocation: harvests are calculated in Excel. Players decide what to eat, donate to the temple, or sell to the hospital, school or middlemen, then collect their income from the bank.',
  'Chemical contamination: after round 1, researchers reveal that chemical residues have spread through water, soil, animals and people. Players receive stickers for one of four levels: clean, safe, at risk or critical. From round 2 the crystals are visible, and players can choose whether to use chemicals.',
  'Village meeting: players have ten minutes to discuss the season and agree on a collective strategy for the next year.',
  'Recording: while players meet, observers enter decisions in Excel and calculate income. A session runs 4–6 rounds, each one cropping year; the first 1–2 rounds are usually needed to learn the rules.'
 ],
 learning: 'Yields depend on the year’s rainfall, the number of plots and market prices, which the facilitator can draw at random or set to create a particular sequence. Gross product of perennial plantations rises by 40% in year 3, 80% in year 4 and 100% from year 5. Chemicals save labour but raise costs, and contamination makes people more vulnerable to illness, bringing hospital costs and lost family labour. Players can change their practices, negotiate higher prices for chemical-free products, or agree on rules such as price premiums, certification or chemical bans. The game’s conceptual model uses the PARDI method (Problem, Actors, Resources, Dynamics, Interactions), framed by the question: what are the effects of agricultural chemical use on contamination of the socio-ecological system and on health?',
 sectionsTh: {
  overview: '<p>การใช้สารเคมีทางการเกษตรอย่างไม่เหมาะสมเป็นปัญหาสำคัญของการเกษตรยั่งยืนมาอย่างยาวนาน และมีความกังวลเพิ่มขึ้นถึงผลกระทบจากการปนเปื้อนต่อสิ่งมีชีวิตรวมถึงมนุษย์ พืชบางชนิดถูกมองว่าเป็นต้นเหตุของ “ภูมิทัศน์ที่เป็นพิษ” ขณะที่เกษตรกรรู้สึกว่า “ไม่มีทางออก”</p><p>Toxic Game ชวนผู้เล่นร่วมกันสำรวจเส้นทางสู่พฤติกรรมและภูมิทัศน์ที่ดีต่อสุขภาพ โดยจำลองความสัมพันธ์ระหว่างการตัดสินใจทางการเกษตร การใช้สารเคมี และผลกระทบต่อระบบนิเวศ สุขภาพ และเศรษฐกิจของเกษตรกรและชุมชน เกมกระดานนี้เป็นเครื่องมือเรียนรู้และสื่อสารที่ส่งเสริมการคิดเชิงระบบ การมีส่วนร่วม และการร่วมออกแบบแนวทางจัดการการเกษตรอย่างยั่งยืน</p>',
  materials: '<ul><li>กระดานเกมจำลองพื้นที่หมู่บ้านที่มีแม่น้ำไหลผ่านกลาง มีป่าชุมชน ถนน บ้าน วัด และโรงพยาบาล แปลงเพาะปลูกขนาดเท่ากัน (7 × 7 หรือ 10 × 12 ซม.) แทนพื้นที่แปลงละ 1 ไร่</li><li>พืชที่ปลูกได้ในแต่ละแปลง ได้แก่ ข้าว ผัก ข้าวโพด ยางพารา หรือลำไย เป็นตัวแทนของพืชอาหารกับพืชเศรษฐกิจ และพืชล้มลุกกับพืชยืนต้น ปรับชนิดพืชตามบริบทของพื้นที่ได้</li><li>ชิ้นส่วนเกม: ผลผลิตจากธรรมชาติ (กบ หนู ปลา ของป่า) ถุงผลผลิตทางการเกษตร หมุดสีระบุแปลงของผู้เล่น ตัวแทนแรงงาน และคริสตัลสีแทนสารเคมีตกค้าง (สารกำจัดวัชพืช ปุ๋ย และยาฆ่าแมลง)</li><li>การ์ด: การ์ดโปรไฟล์เกษตรกร (สมาชิกครอบครัว แรงงาน ความต้องการ) การ์ดพืช และการ์ดเหตุการณ์ เช่น การระบาดของศัตรูพืชและสภาพอากาศ</li><li>ธนบัตรจำลองมูลค่า 1, 5, 10, 20, 50 และ 100 หน่วย โปรแกรม Excel สำหรับบันทึกการตัดสินใจและคำนวณรายได้ และป้ายข้อมูลสาธารณะเรื่องความต้องการของพืช ผลของสารเคมี ผลตอบแทน และต้นทุนการปลูก</li><li>ห้องที่รองรับผู้คนราว 20 คน วางกระดานและโต๊ะบันทึกข้อมูลไว้กลางห้อง มีพื้นที่ประชุมหมู่บ้าน และตั้งธนาคารแยกจากหมู่บ้าน</li></ul>',
  play: '<ol><li>บทบาท: ผู้เล่น 6–12 คนรับบทเกษตรกรที่มีแปลง 2, 3 หรือ 4 แปลง และเงินตั้งต้นต่างกัน (แปลงละ 20 หน่วย) นักวิจัยติดตามการปนเปื้อน ส่วนวัด โรงพยาบาล และธนาคารทำหน้าที่เป็นสถาบันในหมู่บ้าน</li><li>เริ่มเกม: ผู้เล่นจับหมายเลขเพื่อกำหนดลำดับการเข้ามาในหมู่บ้านและลำดับการเล่น หมายเลข 1–2 ได้ 4 แปลงและ 80 หน่วย หมายเลข 3–6 ได้ 3 แปลงและ 60 หน่วย หมายเลข 7–12 ได้ 2 แปลงและ 40 หน่วย จากนั้นเลือกตำแหน่งแปลงตามลำดับ และแนะนำครอบครัว แรงงาน และความต้องการของตน</li><li>เลือกพืช: กำหนดพืชให้แต่ละแปลงและจ่ายค่าปัจจัยการผลิตให้ธนาคาร ธนาคารให้สินเชื่อเพาะปลูกดอกเบี้ย 10% ต่อปี</li><li>จัดสรรแรงงาน: ใช้แรงงานในครอบครัวหรือจ้างแรงงานให้แต่ละแปลง เพื่อให้พอกับความต้องการอาหารและเงินตามการ์ดครอบครัว</li><li>หาของป่า: เก็บผลผลิตจากป่าชุมชนและแม่น้ำ (เห็ด กบ หนู หอย ปลา) เพื่อบริโภค ถวายพระ หรือขาย</li><li>เหตุการณ์ธรรมชาติ: ผู้นำเกมประกาศปริมาณฝนของปี (แล้ง ปานกลาง หรือชื้น) และการระบาดของศัตรูพืชหรือโรค</li><li>ราคาตลาด: สุ่มระดับราคา (สูง กลาง หรือต่ำ) ราคายางพาราขึ้นลง 33% ลำไยขึ้นลง 67% ส่วนข้าวและผักเปลี่ยนแปลงไม่มาก</li><li>จัดสรรผลผลิต: คำนวณผลผลิตด้วย Excel ผู้เล่นตัดสินใจว่าจะเก็บไว้กิน ถวายวัด หรือขายให้โรงพยาบาล โรงเรียน หรือพ่อค้าคนกลาง แล้วรับรายได้จากธนาคาร</li><li>การปนเปื้อนสารเคมี: หลังรอบแรก นักวิจัยแจ้งว่าสารเคมีได้แพร่กระจายสู่น้ำ ดิน สัตว์ และคน ผู้เล่นได้รับสติกเกอร์ตามระดับการปนเปื้อน 4 ระดับ คือ สะอาด ปลอดภัย เสี่ยง และวิกฤต ตั้งแต่รอบที่ 2 คริสตัลจะมองเห็นได้ และผู้เล่นเลือกได้ว่าจะใช้สารเคมีหรือไม่</li><li>ประชุมหมู่บ้าน: ผู้เล่นมีเวลา 10 นาทีพูดคุยเหตุการณ์ในฤดูที่ผ่านมาและวางกลยุทธ์ร่วมสำหรับปีถัดไป</li><li>บันทึกข้อมูล: ระหว่างประชุม ผู้สังเกตการณ์บันทึกการตัดสินใจลง Excel และคำนวณรายได้ เกมหนึ่งครั้งมี 4–6 รอบ (รอบละหนึ่งปีการเพาะปลูก) โดยทั่วไปใช้ 1–2 รอบแรกเพื่อเรียนรู้กติกา</li></ol>',
  learning: '<p>ผลผลิตแต่ละปีขึ้นกับปริมาณฝน จำนวนแปลง และราคาตลาด ซึ่งผู้นำเกมสุ่มหรือกำหนดเองเพื่อสร้างสถานการณ์ให้ผู้เล่นปรับตัว ผลผลิตรวมของพืชยืนต้นเพิ่มขึ้น 40% ในปีที่ 3, 80% ในปีที่ 4 และ 100% ตั้งแต่ปีที่ 5</p><p>สารเคมีช่วยลดแรงงานแต่เพิ่มต้นทุน และการปนเปื้อนทำให้คนป่วยง่ายขึ้น ต้องเสียค่ารักษาและสูญเสียแรงงานในครอบครัว ผู้เล่นอาจเปลี่ยนวิธีปฏิบัติ ต่อรองราคาสินค้าปลอดสารเคมี หรือร่วมกันตั้งกติกา เช่น การให้ราคาพิเศษ การรับรองมาตรฐาน หรือการห้ามใช้สารเคมี</p><p>แบบจำลองแนวคิดของเกมใช้วิธี PARDI (Problem – Actors – Resources – Dynamics – Interactions) โดยตั้งคำถามว่า การใช้สารเคมีทางการเกษตรส่งผลต่อการปนเปื้อนในระบบสังคม-นิเวศและปัญหาสุขภาพอย่างไร</p>',
  gallery: ''
 },
 gallery: [{src:'assets/toxic-pardi.png',section:'materials'},{src:'assets/toxic-design-notes.jpg',section:'materials'}],
 images: ['assets/toxic-pardi.png','assets/toxic-design-notes.jpg'],
 file: 'downloads/toxic-game-guidelines.docx'
});

// ECOSY RICE and Nan-Ricey: Thai project reports (Paper ECOSY RICE.docx, Paper NanRicey.docx). Thai text keeps the report wording, condensed; English is an edited summary.
const ecosyPhotos = [1,2,3,4,5,6,7].map(n => `assets/ecosy-play-${n}.jpg`);
const ecosyMaterials = [1,2,3,4,5,6,7,8,9,10,11,12,13].map(n => `assets/ecosy-material-${n}.jpg`);
window.GAMES.push({
 id: '13',
 title: 'ECOSY RICE',
 titleTh: 'ECOSY RICE',
 category: 'biodiversity',
 cover: 'assets/cover-ecosy.jpg',
 players: '4–6 players',
 time: '45–60 minutes',
 intro: 'Build food chains and food webs through the four growth stages of a Nan rice field.',
 introTh: 'ต่อห่วงโซ่และสายใยอาหารในนาข้าวน่าน ผ่านการเติบโตทั้ง 4 ระยะของข้าว',
 research: 'ECOSY RICE: a game and simulation for learning about rice-field ecosystems.',
 researchTh: 'ECOSY RICE: เกมและสถานการณ์จําลองเพื่อการเรียนรู้เรื่องระบบนิเวศนาข้าว',
 source: 'Project report presented by นายปฎิพัทธ์ คำมอญ and นางสาวจิรภิญญา ทองถิ่น.',
 sourceTh: 'รายงานโครงการ นำเสนอโดย นายปฎิพัทธ์ คำมอญ และนางสาวจิรภิญญา ทองถิ่น',
 tags: [{th:'ระบบนิเวศนาข้าว',en:'Rice-field ecosystem'},{th:'ห่วงโซ่อาหาร',en:'Food chain'},{th:'สายใยอาหาร',en:'Food web'},{th:'ความหลากหลายทางชีวภาพ',en:'Biodiversity'},{th:'เกมการ์ด',en:'Card game'}],
 overview: 'Rice fields in Nan Province are complex, highly biodiverse ecosystems, with producers, plant-eaters, mid-level predators and apex predators such as the leopard cat, giant owls and the reticulated python all helping to keep nature in balance. Students often misunderstand food chains and food webs when they are taught by memorisation, and cannot see the domino effect when a chain changes. ECOSY RICE is a game-based learning card game, developed for a local school’s native-rice curriculum, in which players act as farmers who must complete the ecosystem of their own rice field at every growth stage.',
 materials: [
  'One set suits 4–6 players. Cards measure 6.3 × 8.9 cm.',
  'Rice-stage cards: 4 growth stages, 8 cards each (32 cards).',
  'Green-border cards: 40 producer cards (10 per stage, 7 producer types) and 120 animal cards (30 species, 4 cards each), each with a fact to read during play.',
  'Yellow-border cards: duck flock, weaver-bird flock, scarecrow and field-crab army (2 of each), used to attack or defend, plus 8 human cards.',
  'Red-border event cards: El Niño, La Niña and insecticide, which affect every player.',
  'Two harvest-season cards that end the game.',
  'A 20 × 40 cm central board for discarded cards (cleared when it holds more than 10), a food-web answer sheet, a player guide, pre- and post-tests and a satisfaction survey.'
 ],
 play: [
  'Set-up: groups of 4–6 sit around a table with the central board in the middle. Deal one rice-stage card to each player at random, then six cards each.',
  'On your turn, choose one action: play up to two cards and discard the same number from your hand onto the central board, or draw two cards (hand limit 10).',
  'Build a chain: lay a rice-stage card first, then a producer whose stage symbol matches, then consumers in order of who eats whom until the chain ends. The apex predator is marked with a crown.',
  'After completing a chain, start a new one or extend it into a food web.',
  'Special cards: weaver birds attack one insect or one stage-4 producer; ducks block the crab army and attack one stage-1 producer; the crab army attacks one stage-1 producer; the scarecrow blocks weaver birds. A human card at the end of a chain protects it and can replace an apex predator. El Niño affects one aquatic animal and one producer, La Niña one land animal and one reptile, and insecticide one insect and one worm card.',
  'Play passes to the next player. The game ends when the two harvest-season cards are drawn.',
  'In school sessions: about 15 minutes to explain, 45–60 minutes of play and 10 minutes of summary.'
 ],
 learning: 'The game is built on ecological ideas: biodiversity across the rice growth stages, the producers and animals found at each stage, food chains and food webs, and the 10% energy-transfer rule. Climate change can increase pest numbers and disrupt the web, and farming choices such as insecticide use or using animals to control pests affect the rice-field ecosystem. The design draws on companion modelling (ComMod) and play-and-learn approaches, and uses symbols rather than text on the cards.',
 debrief: 'The facilitator tells the story behind the game while players combine their cards into one shared food web for all four rice stages. Explain why complete food chains and webs matter and what happens when they break, hand out the food-web answer sheet so players can complete it together, discuss how the game helps players know rice-field species and conserve biodiversity, and review the biodiversity and ecosystem services in the game.',
 sectionsTh: {
  overview: '<p>ระบบนิเวศนาข้าว (Agroecosystem) โดยเฉพาะในพื้นที่นาข้าวในจังหวัดน่าน แสดงให้เห็นถึงระบบนิเวศที่มีความซับซ้อนและมีความหลากหลายทางชีวภาพสูง สัตว์หลากหลายชนิดตั้งแต่ผู้ผลิต (Producer) ผู้บริโภคพืช ผู้ล่าระดับกลาง ไปจนถึงผู้ล่าสูงสุด (Apex Predators) เช่น แมวดาว นกเค้าแมวยักษ์ และงูเหลือม ต่างเข้ามามีบทบาทในการรักษาสมดุลทางธรรมชาติ</p><p>การเรียนรู้เรื่อง "ระบบนิเวศในนาข้าว ห่วงโซ่และสายใยอาหาร" นักเรียนบางส่วนมักประสบปัญหาความเข้าใจคลาดเคลื่อน เนื่องจากเนื้อหามีความสลับซับซ้อน เป็นนามธรรม และนำเสนอผ่านการท่องจำ ทำให้ไม่เห็นผลกระทบแบบโดมิโน (Domino Effect) เมื่อโครงสร้างของห่วงโซ่อาหารเปลี่ยนแปลง</p><p>“ECOSY RICE” เป็นเกมการ์ดระบบนิเวศนาข้าวที่พัฒนาขึ้นสำหรับหลักสูตรข้าวพื้นเมืองของโรงเรียนศรัทธาศิลาเพชรรังสรรค์ โดยจำลองกลไกห่วงโซ่อาหารและสายใยอาหาร ให้ผู้เล่นได้สวมบทบาทเป็นเกษตรกรและต้องสร้างระบบนิเวศนาข้าวของตัวเองให้สมบูรณ์ในทุกระยะข้าว</p>',
  materials: '<ul><li>เกม 1 ชุด เหมาะกับผู้เล่น 4–6 คน การ์ดเกมขนาดกว้าง 6.3 ซม. ยาว 8.9 ซม.</li><li>การ์ดระยะข้าว ทั้ง 4 ระยะ อย่างละ 8 ใบ รวม 32 ใบ</li><li>การ์ดขอบเขียว: การ์ดผู้ผลิตในทุกระยะ ระยะละ 10 ใบ รวม 40 ใบ (7 ประเภท) และการ์ดสัตว์ 30 ชนิด ชนิดละ 4 ใบ รวม 120 ใบ พร้อมเกร็ดความรู้</li><li>การ์ดขอบเหลือง: เป็ดไล่ทุ่ง ฝูงนกกระจาบ หุ่นไล่กา กางแขน และกองพลปูนา ชนิดละ 2 ใบ รวม 8 ใบ ใช้โจมตีหรือป้องกัน และการ์ดมนุษย์ 8 ใบ</li><li>การ์ดขอบแดง: เอลนีโญ ลานีญา และยาฆ่าแมลง อย่างละ 1 ใบ เป็นการ์ดเหตุการณ์ที่ส่งผลกระทบต่อผู้เล่นทุกคน</li><li>การ์ดฤดูเก็บเกี่ยว 2 ใบ เป็นการ์ดจบเกม</li><li>บอร์ดกลางขนาด 20×40 ซม. สำหรับทิ้งการ์ด (มีได้ไม่เกิน 10 ใบ ถ้าเกินให้เคลียร์ออกทั้งหมด) ใบเฉลยสายใยอาหาร คู่มือการเล่นเกม แบบทดสอบก่อนและหลังเล่น และแบบประเมินความพึงพอใจ</li></ul>',
  play: '<ol><li>เตรียมเกม: ผู้เล่นจับกลุ่ม 4–6 คน วางกระดานกลางไว้ตรงกลาง แจกการ์ดระยะข้าวให้คนละ 1 ใบโดยการสุ่ม และสุ่มหยิบการ์ดเริ่มต้นคนละ 6 ใบ</li><li>ผู้เล่นเลือกทำ 1 จาก 2 action ต่อ 1 รอบ: เล่นการ์ดได้มากที่สุด 2 ใบ และต้องทิ้งการ์ดจากในมือตามจำนวนที่เล่นไว้ที่บอร์ดกลาง หรือจั่วการ์ดจากกอง 2 ใบ โดยการ์ดบนมือห้ามเกิน 10 ใบ</li><li>วิธีเล่นการ์ด: วางการ์ดระยะข้าวเป็นอันดับแรก วางการ์ดผู้ผลิตของระยะนั้นต่อ โดยสัญลักษณ์ระยะข้าวต้องตรงกัน แล้ววางการ์ดผู้บริโภคต่อไปจนจบห่วงโซ่หรือสายใย ผู้ล่าสูงสุดของห่วงโซ่จะมีมงกุฎที่ชื่อ</li><li>เมื่อสร้างห่วงโซ่สำเร็จ เลือกสร้างห่วงโซ่ใหม่หรือต่อให้เป็นสายใยอาหาร</li><li>การ์ดพิเศษ: ฝูงนกกระจาบโจมตีการ์ดแมลง 1 ใบ หรือผู้ผลิตระยะที่ 4 (ระยะสุกแก่) 1 ใบ; ฝูงเป็ดไล่ทุ่งป้องกันกองพลปูนา และโจมตีผู้ผลิตระยะที่ 1 (ระยะต้นกล้า) 1 ใบ; กองพลปูนาโจมตีผู้ผลิตระยะที่ 1 ได้ 1 ใบ; หุ่นไล่กาป้องกันฝูงนกกระจาบ; การ์ดมนุษย์วางท้ายห่วงโซ่เพื่อป้องกันการโจมตี และใช้แทนผู้ล่าสูงสุดได้; เอลนีโญส่งผลต่อสัตว์น้ำและผู้ผลิต ลานีญาส่งผลต่อสัตว์บกและสัตว์เลื้อยคลาน ยาฆ่าแมลงส่งผลต่อแมลงและหนอน อย่างละ 1 ใบ</li><li>เมื่อทำแอ็คชั่นเสร็จ วนไปเทิร์นผู้เล่นคนถัดไป เกมจบเมื่อจั่วได้การ์ดฤดูเก็บเกี่ยวครบ 2 ใบ</li><li>ในการใช้งานที่โรงเรียน: อธิบายเกมประมาณ 15 นาที เล่นประมาณ 45 นาทีถึง 1 ชั่วโมง และสรุปประมาณ 10 นาที</li></ol>',
  learning: '<p>แนวคิดด้านนิเวศ: ความหลากหลายทางชีวภาพ โดยเน้นที่ระยะข้าว ผู้ผลิตในแต่ละระยะ สัตว์ต่าง ๆ ที่พึ่งพาอาศัยระบบนิเวศในนาข้าว ห่วงโซ่อาหารและสายใยอาหารที่กินกันเป็นทอด ๆ และกฎการถ่ายทอดพลังงาน 10% ปัจจัยด้านการเปลี่ยนแปลงสภาพภูมิอากาศส่งผลให้จํานวนสัตว์ศัตรูพืชเพิ่มขึ้น และส่งผลต่อห่วงโซ่อาหารและสายใยอาหาร</p><p>แนวคิดด้านเศรษฐกิจ-สังคม: แบบจําลองเพื่อนคู่คิด (Companion Modeling; ComMod) และผลกระทบจากกิจกรรมมนุษย์ต่อสิ่งแวดล้อม เช่น การใช้ยาฆ่าแมลง หรือการใช้สัตว์เพื่อกำจัดศัตรูพืช รวมถึงการเรียนรู้แบบเล่นปนเรียน (play and learn) และการใช้สัญลักษณ์สื่อความหมายแทนตัวอักษร</p>',
  debrief: '<p>ผู้นําเกมสรุปให้ผู้เล่นฟังถึงเรื่องราวและความเป็นมาของเกม และผู้เล่นช่วยกันนำการ์ดแต่ละใบมาต่อเป็นสายใยอาหารรวมตรงกลาง ทั้ง 4 ระยะข้าว โดยมีลําดับการสรุป ดังนี้</p><ol><li>อธิบายความสําคัญของการเล่นเกม และผลกระทบหากสายใยอาหารหรือห่วงโซ่อาหารไม่ครบ</li><li>แจกใบเฉลยสายใยอาหาร ให้ผู้เล่นช่วยกันต่อสายใยอาหาร</li><li>อธิบายประโยชน์ของเกม ได้แก่ การรู้จักชนิดพันธุ์ที่อยู่ในระบบนิเวศนาข้าว และวิธีการอนุรักษ์ความหลากหลายทางชีวภาพ</li><li>ทบทวนความรู้เรื่องความหลากหลายและบริการทางระบบนิเวศที่อยู่ในเกม</li></ol>',
  gallery: ''
 },
 gallery: [...ecosyPhotos.map(src => ({src, section:'gallery'})), ...ecosyMaterials.map(src => ({src, section:'materials'}))],
 images: [...ecosyPhotos, ...ecosyMaterials],
 file: 'downloads/ecosy-rice-paper.docx',
 extraFiles: [{file:'downloads/ecosy-rice-guide.pdf', label:'Player guide (PDF)', labelTh:'คู่มือ ECOSY RICE (PDF)'}]
});

const nanriceyPhotos = [1,2,3,4,5,6,7].map(n => `assets/nanricey-play-${n}.jpg`);
const nanriceyMaterials = [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(n => `assets/nanricey-material-${n}.jpg`);
window.GAMES.push({
 id: '14',
 title: 'Nan-Ricey',
 titleTh: 'Nan-Ricey',
 category: 'agriculture',
 cover: 'assets/cover-nanricey.jpg',
 players: '4–6 players',
 time: '3 rounds',
 intro: 'Plant Nan’s native rice varieties in the right terrain, and weather floods, drought, pests and disease.',
 introTh: 'ปลูกข้าวพื้นเมืองน่านให้เหมาะกับพื้นที่ และรับมือกับน้ำท่วม ภัยแล้ง โรค และแมลงศัตรูข้าว',
 research: 'Nan-Ricey: a game and simulation for learning about the diversity of Nan’s native rice.',
 researchTh: 'Nan-Ricey: เกมและสถานการณ์จําลองเพื่อการเรียนรู้เรื่องความหลากหลายของข้าวพื้นเมืองน่าน',
 source: 'Project report presented by นายปฎิพัทธ์ คำมอญ and นางสาวจิรภิญญา ทองถิ่น.',
 sourceTh: 'รายงานโครงการ นำเสนอโดย นายปฎิพัทธ์ คำมอญ และนางสาวจิรภิญญา ทองถิ่น',
 tags: [{th:'พันธุ์ข้าวพื้นเมือง',en:'Native rice varieties'},{th:'การอนุรักษ์พันธุ์ข้าว',en:'Rice conservation'},{th:'ภัยพิบัติทางธรรมชาติ',en:'Natural disasters'},{th:'โรคและแมลงศัตรูข้าว',en:'Rice diseases & pests'},{th:'จังหวัดน่าน',en:'Nan Province'}],
 overview: 'Nan’s varied terrain, from river plains and terraced paddies to high mountains, has produced many native rice varieties that local farmers have grown and passed down for generations. Many conserved and local varieties are now declining and at risk of being lost, because knowledge and appreciation are not reaching younger people. Rote learning rarely shows how a variety relates to its growing area or to natural risks such as disasters, pests and disease. In Nan-Ricey, players act as farmers who plan, manage resources and conserve Nan’s native rice to get the best harvest.',
 materials: [
  'One set suits 4–6 players.',
  'Rice-variety cards: 15 native and conserved varieties of Nan, 3 cards each (45 cards). Each card shows the variety and type (glutinous or non-glutinous), a quest symbol, plant characteristics, the suitable growing area, the yield bonus for planting it in the right place, disease risk and tolerance to drought or flooding.',
  'Disaster cards (3): flooding and drought on the river plain, and flash floods on terraced paddies, upland paddies, foothills and highlands.',
  'Disease and pest cards (5): rice blast, bacterial leaf blight, sheath blight, brown planthopper and rice gall midge.',
  'A board with five growing areas: river plain, terraced paddy, upland paddy, foothill and highland.',
  '36 coloured pins (6 per colour) to claim plots, six numbered sticks (1–6) for turn order and random events, crystals as rice grains (5 grains = 1 point), and score, variety and disease/pest tokens.',
  'Six player guides with special quests on the back, pre- and post-tests and a satisfaction survey.'
 ],
 play: [
  'Set-up: everyone draws a numbered stick for turn order, then claims six plots across the five growing areas with their pins. Pins stay for the whole game.',
  'Round 1, first planting: each player gets six random rice cards and plants one variety per plot, placing rice grains according to that variety’s yield in the guide.',
  'Each player draws a stick to receive an event, such as a disaster card or gaining or losing grains. Score 1 point per 5 grains (remainders are dropped) and record the result.',
  'Round 2, quests and trading: clear the grains (pins stay) and deal six new random cards. Reveal the round’s special quest on the back of the guide, trade rice cards with other players, then plant, draw events and score, adding any quest bonus.',
  'Round 3, choose and conclude: clear the grains, and each player picks six cards from the dealer’s hand. Check the round-3 quest, trade, plant, draw events and score, then add up all three rounds.',
  'In school sessions: about 10–15 minutes to explain, 35–60 minutes of play and up to 10 minutes of summary.'
 ],
 learning: 'The game focuses on the characteristics of Nan’s native and conserved rice varieties, how each suits a particular growing area (river plain, terraced paddy, upland paddy, foothill or highland), and the effects of natural disasters, rice diseases and pests. Varieties differ in their tolerance to drought or flooding and in their disease risks, so planting the right variety in the right place earns a bonus.',
 debrief: 'The facilitator explains the history and importance of Nan’s native rice while players sort the rice cards together by growing area and tolerance. Discuss why conserving native and conserved varieties matters and what is lost if they disappear, hand out the quest and growing-area answer sheet to check the round-1 planting and quests, summarise what players learned about varieties, terrain and coping with pests, disease and disasters, and review rice as cultural heritage worth conserving.',
 sectionsTh: {
  overview: '<p>จังหวัดน่านมีภูมิประเทศที่มีความหลากหลายทางกายภาพ ตั้งแต่พื้นที่ลุ่มแม่น้ำ นาขั้นบันได ไปจนถึงพื้นที่เขาสูง ส่งผลให้เกิดความหลากหลายทางชีวภาพของพันธุ์ข้าวพื้นเมืองที่ชาวนาในท้องถิ่นได้เพาะปลูกและสืบทอดกันมาอย่างยาวนาน อย่างไรก็ตาม ในปัจจุบันพันธุ์ข้าวอนุรักษ์และพันธุ์ข้าวท้องถิ่นของน่านเริ่มลดน้อยลงและเสี่ยงต่อการสูญหาย เนื่องจากขาดการส่งต่อความรู้และการตระหนักถึงคุณค่าในกลุ่มคนรุ่นใหม่</p><p>การเรียนการสอนแบบท่องจำไม่สามารถทำให้ผู้เรียนเห็นภาพความเชื่อมโยงระหว่างสายพันธุ์ข้าวกับสภาพพื้นที่เพาะปลูก ตลอดจนปัจจัยเสี่ยงทางธรรมชาติ เช่น ภัยพิบัติ แมลงศัตรูพืช และโรคของข้าว</p><p>“เกมพันธุ์ข้าวน่าน” จำลองกลไกการเพาะปลูกข้าวในพื้นที่กายภาพที่แตกต่างกัน ปัจจัยทางธรรมชาติ โรค แมลงศัตรูพืช และภัยพิบัติ ให้ผู้เล่นได้สวมบทบาทเป็นเกษตรกรที่ต้องวางแผน บริหารจัดการทรัพยากร และอนุรักษ์สายพันธุ์ข้าวพื้นเมืองของจังหวัดน่านให้ได้ผลผลิตที่มีประสิทธิภาพสูงสุด</p>',
  materials: '<ul><li>เกม 1 ชุด เหมาะกับผู้เล่น 4–6 คน</li><li>การ์ดพันธุ์ข้าว 15 สายพันธุ์ อย่างละ 3 ใบ รวม 45 ใบ แสดงชื่อพันธุ์และประเภท (ข้าวเหนียวหรือข้าวเจ้า) เควสพิเศษ ลักษณะข้าว พื้นที่เพาะปลูกที่เหมาะสม ผลผลิตเมื่อปลูกถูกที่ โรคที่เสี่ยง และความทนทาน (ทนแล้งหรือทนน้ำท่วม)</li><li>การ์ดภัยพิบัติ 3 ใบ: น้ำท่วมนาและภัยแล้ง (พื้นที่ราบลุ่มแม่น้ำ) และน้ำป่าไหลหลาก (นาขั้นบันได นาดอน เชิงเขา และเขาสูง)</li><li>การ์ดโรคและแมลงศัตรูพืช 5 ใบ: โรคใบไหม้ โรคขอบใบแห้ง โรคกาบใบแห้ง เพลี้ยกระโดดสีน้ำตาล และแมลงบั่ว</li><li>กระดานพื้นที่เพาะปลูกข้าวทั้ง 5 รูปแบบ (ลุ่มแม่น้ำ นาขั้นบันได นาดอน เชิงเขา เขาสูง)</li><li>หมุดสี สีละ 6 อัน รวม 36 อัน ไม้จับสถานการณ์ (หมายเลข 1–6) 6 อัน คริสตัลแทนเมล็ดข้าว (ข้าว 5 เมล็ด = 1 คะแนน) และโทเคนคะแนน โทเคนพันธุ์ข้าว โทเคนโรคและแมลงศัตรูพืช</li><li>ใบคู่มือการเล่น 6 ใบ พร้อมเควสพิเศษด้านหลัง แบบทดสอบก่อนและหลังเล่น และแบบประเมินความพึงพอใจ</li></ul>',
  play: '<ol><li>การเตรียมการก่อนเริ่มเกม: ผู้เล่นทุกคนจับไม้เลข 1–6 เพื่อจัดลำดับคิว และเลือกจองพื้นที่ทำนาคนละ 6 ช่อง จากพื้นที่ 5 แบบ โดยวางหมุดสีจองไว้</li><li>รอบที่ 1 เริ่มต้นการทำนา: ผู้เล่นได้รับการ์ดข้าวแบบสุ่มคนละ 6 ใบ นำพันธุ์ข้าวไปปลูกในพื้นที่ที่จองไว้ (1 ช่อง ปลูกได้ 1 สายพันธุ์) เช็กคู่มือว่าพันธุ์นั้นให้ผลผลิตกี่เม็ด แล้ววางเมล็ดข้าวแสดงผลผลิต</li><li>สุ่มเหตุการณ์: ผู้เล่นทุกคนจับไม้เลข 1–6 คนละ 1 ครั้ง เพื่อรับผลกระทบ เช่น จั่วการ์ดภัยพิบัติ ได้บวกหรือถูกลบเมล็ดข้าว แล้วคิดคะแนน ทุก 5 เมล็ด = 1 คะแนน (เศษไม่นำมาคิด)</li><li>รอบที่ 2 เควสพิเศษและการแลกเปลี่ยน: เคลียร์เมล็ดข้าวออก (หมุดสียังอยู่) แจกการ์ดข้าวใหม่คนละ 6 ใบ พลิกดูเควสพิเศษหลังคู่มือ พูดคุยแลกเปลี่ยนการ์ดข้าวกันได้ แล้วปลูก สุ่มเหตุการณ์ และคิดคะแนน พร้อมบวกโบนัสหากทำเควสสำเร็จ</li><li>รอบที่ 3 เลือกพันธุ์ข้าวและสรุปผล: เคลียร์เมล็ดข้าวออก ผู้เล่นเลือกสุ่มหยิบการ์ดข้าว 6 ใบจากมือคนแจกด้วยตัวเอง เช็กเควสรอบที่ 3 แลกเปลี่ยน ปลูก สุ่มเหตุการณ์ และรวมคะแนนจากทั้ง 3 รอบ</li><li>ในการใช้งานที่โรงเรียน: อธิบายเกมประมาณ 10–15 นาที เล่นประมาณ 35 นาทีถึง 1 ชั่วโมง และสรุปไม่เกิน 10 นาที</li></ol>',
  learning: '<p>เนื้อหามุ่งเน้นลักษณะเฉพาะของพันธุ์ข้าวพื้นเมืองและพันธุ์ข้าวอนุรักษ์ในจังหวัดน่าน ความสัมพันธ์ระหว่างสายพันธุ์ข้าวกับพื้นที่เพาะปลูก (ลุ่มแม่น้ำ นาขั้นบันได นาดอน เชิงเขา เขาสูง) และผลกระทบจากภัยพิบัติธรรมชาติ โรคข้าว และแมลงศัตรูพืช ข้าวแต่ละพันธุ์ทนแล้งหรือทนน้ำท่วมต่างกันและเสี่ยงต่อโรคต่างกัน การปลูกข้าวให้ถูกพื้นที่จึงได้ผลผลิตเพิ่ม</p>',
  debrief: '<p>ผู้นำเกมสรุปให้ผู้เล่นฟังถึงเรื่องราว ความสำคัญ และความเป็นมาของพันธุ์ข้าวพื้นเมืองจังหวัดน่าน และผู้เล่นช่วยกันนำการ์ดข้าวแต่ละสายพันธุ์มาจัดหมวดหมู่ตามพื้นที่เพาะปลูกและระดับความทนทานร่วมกันตรงกลาง โดยมีลำดับการสรุป ดังนี้</p><ol><li>อธิบายความสำคัญของการอนุรักษ์พันธุ์ข้าวพื้นเมืองและพันธุ์ข้าวอนุรักษ์ของจังหวัดน่าน และผลกระทบหากพันธุ์ข้าวท้องถิ่นสูญหาย</li><li>แจกใบเฉลยเควสและพื้นที่เพาะปลูก ให้ผู้เล่นช่วยกันตรวจสอบการปลูกข้าวในพื้นที่ที่เหมาะสม (ในรอบแรก) และการทำเควสพิเศษ</li><li>อธิบายประโยชน์ของเกม เช่น การรู้จักชนิดและลักษณะเฉพาะของพันธุ์ข้าวเมืองน่าน ความเข้าใจในสภาพพื้นที่เพาะปลูก และแนวทางรับมือกับโรค แมลงศัตรูพืช และภัยพิบัติ</li><li>ทบทวนความรู้เรื่องการอนุรักษ์มรดกทางวัฒนธรรมข้าว และสร้างการตระหนักรู้เรื่องความหลากหลายของพันธุ์ข้าวท้องถิ่น</li></ol>',
  gallery: ''
 },
 gallery: [...nanriceyPhotos.map(src => ({src, section:'gallery'})), ...nanriceyMaterials.map(src => ({src, section:'materials'}))],
 images: [...nanriceyPhotos, ...nanriceyMaterials],
 file: 'downloads/nan-ricey-paper.docx'
});
