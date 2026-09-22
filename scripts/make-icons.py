from PIL import Image, ImageDraw
from pathlib import Path
out = Path(__file__).resolve().parents[1] / 'dist' / 'assets'
im=Image.new('RGB',(512,512),'#176b52'); d=ImageDraw.Draw(im)
d.rounded_rectangle((118,134,394,379),radius=19,fill='#fff7d8')
d.line((256,151,256,363),fill='#176b52',width=12)
for y in (192,241,290): d.rounded_rectangle((147,y,221,y+12),radius=6,fill='#176b52')
d.ellipse((290,185,334,229),fill='#e7a938'); d.ellipse((290,279,334,323),fill='#ef8064')
im.save(out/'icon-512.png'); im.save(out/'icon-maskable.png'); im.resize((192,192),Image.Resampling.LANCZOS).save(out/'icon-192.png')
