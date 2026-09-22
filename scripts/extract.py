from pathlib import Path
import zipfile, xml.etree.ElementTree as E, json, shutil
root=Path(__file__).resolve().parents[2]
out=root/'game-library'
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
records=[]
for f in sorted((root/'ภาคผนวก Template เกม_แยกรายเกม').glob('*.docx')):
 with zipfile.ZipFile(f) as z:
  tree=E.fromstring(z.read('word/document.xml'))
  paras=[''.join(t.text or '' for t in p.findall('.//w:t',ns)).strip() for p in tree.findall('.//w:p',ns)]
  paras=[p for p in paras if p]
  imgs=[]
  for name in z.namelist():
   if name.startswith('word/media/') and name.lower().endswith(('.jpg','.jpeg','.png')):
    target=f.stem[:2]+'-'+Path(name).name
    (out/'assets'/target).write_bytes(z.read(name)); imgs.append('assets/'+target)
  shutil.copy2(f,out/'documents'/f.name)
  records.append({'id':f.stem[:2],'file':f.name,'paragraphs':paras,'images':imgs})
(out/'source-data.json').write_text(json.dumps(records,ensure_ascii=False,indent=2))
for r in records:
 print('\n###',r['id'],r['file'],'IMAGES',len(r['images']))
 for i,p in enumerate(r['paragraphs']):print(str(i)+': '+p)
