import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';
const root=path.resolve('dist'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest')));
let checked=0;for(const m of html.matchAll(/(?:src|href)="\.\/([^"]+)"/g)){if(!fs.existsSync(path.join(root,m[1])))throw Error('Falta recurso: '+m[1]);checked++;}
for(const i of manifest.icons){const b=fs.readFileSync(path.join(root,i.src));if(b.toString('hex',0,8)!=='89504e470d0a1a0a')throw Error('PNG inválido');if(i.sizes!==`${b.readUInt32BE(16)}x${b.readUInt32BE(20)}`)throw Error('Tamaño incorrecto');checked++;}
if(manifest.display!=='standalone'||manifest.scope!=='./'||manifest.start_url!=='./')throw Error('Manifiesto inválido');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');new vm.Script(sw);const files=[...sw.matchAll(/'\.\/([^']*)'/g)].map(m=>m[1]||'index.html');for(const file of files){if(!fs.existsSync(path.join(root,file)))throw Error('Falta en precaché: '+file);checked++;}
for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.js')&&f!=='sw.js'))await import('file:///'+path.join(root,file).replaceAll('\\','/')).catch(e=>{if(!/document is not defined|location is not defined|window is not defined/.test(e.message))throw e;});
console.log(`${checked} referencias y recursos PWA comprobados; iconos PNG, manifiesto independiente y módulos válidos.`);
