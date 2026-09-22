from pathlib import Path
import json,re,html,zipfile,xml.etree.ElementTree as E
from PIL import Image
base=Path(__file__).resolve().parents[1]
source=json.loads((base/'source-data.json').read_text())
en=json.loads((base/'content-en.json').read_text())
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main','a':'http://schemas.openxmlformats.org/drawingml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
intro=['สำรวจคุณค่าระบบนิเวศถ้ำ ความหลากหลายทางชีวภาพ และวิถีชีวิตของชุมชน','มองเห็นธาตุอาหารในดิน และเรียนรู้การเลือกปุ๋ยให้เหมาะกับพื้นที่','สร้างสมดุลระหว่างรายได้และพื้นที่ชุ่มน้ำ เมื่อทรัพยากรน้ำมีจำกัด','ค้นพบบทบาทของสัตว์สะเทินน้ำสะเทินบกและสัตว์เลื้อยคลานในพื้นที่เกษตร','ปรับตัวรับฝนหนัก ภัยแล้ง และความเปลี่ยนแปลงในพื้นที่เกษตร','ร่วมตัดสินใจเพื่อป่าชุมชนที่ให้ประโยชน์และคงอยู่อย่างยั่งยืน','รู้จักต้นไม้ นก แมลง และเห็ดในท้องถิ่น แล้วเชื่อมโยงเป็นสายใยอาหาร','ให้ชาวบ้านและผู้ดูแลป่าร่วมออกแบบอนาคตของป่าปลูก','ร่วมออกแบบพื้นที่สีเขียวเพื่อคน นก และประโยชน์ร่วมของชุมชน','ออกแบบสวนบนดาดฟ้า แล้วค้นพบบริการของระบบนิเวศผ่านเกมบิงโก','มองเมืองผ่านสายตาของนก และร่วมดูแลพื้นที่สำหรับการสร้างรัง']
heads={'สรุป (Overview)':'overview','อุปกรณ์ (นำไป print ใช้งานได้)':'materials','วิธีการใช้งาน':'play','องค์ความรู้สอดแทรก':'learning','แนวทางการสรุปผลการใช้งาน (Debriefing)':'debrief','ภาพบรรยากาศการใช้งาน 1-2 หน้า แล้วแต่กรณี':'gallery'}
def txt(el):return ''.join(t.text or '' for t in el.findall('.//w:t',ns)).strip()
games=[]
for i,(s,g) in enumerate(zip(source[:11],en)):
 g['file']='documents/'+s['file'];g['titleTh']=s['paragraphs'][1].removeprefix('ชื่อเกม').strip() or g['title'];g['introTh']=intro[i]
 g['researchTh']=s['paragraphs'][0].removeprefix('ชื่อเรื่อง / งานวิจัย / Senior / Thesis').strip() or 'ไม่ได้ระบุชื่อเรื่องในเอกสารต้นฉบับ'
 g['sourceTh']=next((p.removeprefix('ที่มา:').strip() for p in s['paragraphs'] if p.startswith('ที่มา:')),'งานวิจัย')
 g['tags']=[]
 tag=next((p[4:].strip() for p in s['paragraphs'] if p.startswith('Tag:')),'')
 for item in tag.split(', '):
  m=re.match(r'(.*?)\s*\((.*?)\)\s*$',item)
  if m:g['tags'].append({'th':m[1].strip(),'en':m[2].strip()})
 if not g['tags']:g['tags']=[{'th':'นิเวศวิทยาการสร้างรัง','en':'Nesting ecology'},{'th':'พื้นที่สีเขียวในเมือง','en':'Urban green space'}]
 g['sectionsTh']={k:'' for k in heads.values()};g['gallery']=[]
 with zipfile.ZipFile(base/g['file']) as z:
  rel=E.fromstring(z.read('word/_rels/document.xml.rels'))
  refs={v.attrib['Id']:v.attrib['Target'] for v in rel}
  tree=E.fromstring(z.read('word/document.xml'));section=None
  def render(el):
   if el.tag.endswith('}tbl'):
    rows=[]
    for tr in el.findall('w:tr',ns):
     cells=[]
     for tc in tr.findall('w:tc',ns):
      span=tc.find('w:tcPr/w:gridSpan',ns);a=' colspan="'+span.attrib.get('{'+ns['w']+'}val','1')+'"' if span is not None else ''
      cells.append('<td'+a+'>'+''.join(render(p) for p in tc if p.tag.endswith(('}p','}tbl')) )+'</td>')
     rows.append('<tr>'+''.join(cells)+'</tr>')
    return '<div class="table-scroll"><table><tbody>'+''.join(rows)+'</tbody></table></div>'
   t=txt(el);res='<p>'+html.escape(t)+'</p>' if t else ''
   for b in el.findall('.//a:blip',ns):
    rid=b.attrib.get('{'+ns['r']+'}embed'); target=refs.get(rid,'');name=s['id']+'-'+Path(target).name
    if (base/'assets'/name).exists():
     src='assets/'+name;g['gallery'].append({'src':src,'section':section or 'materials'})
   return res
  for el in tree.find('w:body',ns):
   t=txt(el) if el.tag.endswith('}p') else ''
   if t in heads:section=heads[t];render(el);continue
   if section and not t.startswith(('รูปแบบเกม','Tag:','ที่มา:')):g['sectionsTh'][section]+=render(el)
 g['images']=s['images']
 # A web-sized derivative retains the supplied source image without external dependencies.
 with Image.open(base/'assets'/g['cover']) as im:
  im=im.convert('RGB');im.thumbnail((1200,900));dest='assets/cover-'+g['id']+'.webp';im.save(base/dest,'WEBP',quality=85);g['cover']=dest
 games.append(g)
(base/'data.js').write_text('window.GAMES = '+json.dumps(games,ensure_ascii=False)+';\n')
# Do not duplicate the compilation’s images: all game records have their own originals.
for p in (base/'assets').glob('12-*'):p.unlink()
print('Built',len(games),'games;',sum(len(g['images']) for g in games),'source images')
