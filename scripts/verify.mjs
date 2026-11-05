import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../site/',import.meta.url));
const pages=[];
async function walk(dir) { for(const name of await readdir(dir)){const file=path.join(dir,name);if((await stat(file)).isDirectory()) await walk(file);else if(name.endsWith('.html')) pages.push(file);} }
await walk(root);
const errors=[];
for(const file of pages){
  const html=await readFile(file,'utf8');
  if(!html.startsWith('<!doctype html>') || !html.includes('<main') || !html.includes('<title>')) errors.push(`${file}: incomplete document`);
  if(!file.endsWith('404.html') && html.includes('<title>Page not found')) errors.push(`${file}: missing route content`);
  if(/\/src\/|type="module"|react-dom|react-router/.test(html)) errors.push(`${file}: framework reference`);
  for (const match of html.matchAll(/srcset="([^"]+)"/gi)) {
    for (const candidate of match[1].split(',')) {
      const url = candidate.trim().split(/\s+/)[0];
      if (!url || /^(?:https?:|data:)/.test(url)) continue;
      try { await stat(path.resolve(path.dirname(file), url)); }
      catch { errors.push(`${path.relative(root,file)}: missing responsive image ${url}`); }
    }
  }
  for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){
    let url=match[1].replaceAll('&amp;','&');
    if(/^(?:https?:|mailto:|tel:|#|data:)/.test(url)) continue;
    url=url.split(/[?#]/)[0];
    let target=url.startsWith('/')?path.join(root,url):path.resolve(path.dirname(file),url);
    try{if((await stat(target)).isDirectory()) target=path.join(target,'index.html');await stat(target);}
    catch{errors.push(`${path.relative(root,file)}: missing ${url}`);}
  }
}
if(pages.length!==24) errors.push(`Expected 24 documents, found ${pages.length}`);
if(errors.length) {console.error(errors.join('\n'));process.exitCode=1;}
else console.log(`Verified ${pages.length} HTML documents and all local links/assets.`);
