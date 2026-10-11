import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':'index.html','/index.html':'index.html','/style.css':'style.css','/app.js':'app.js'};
http.createServer(async(req,res)=>{const file=files[req.url?.split('?')[0]];if(!file){res.writeHead(404);res.end('Nothing lives here.');return;}try{res.setHeader('Content-Type',file.endsWith('.css')?'text/css':file.endsWith('.js')?'text/javascript':'text/html');res.end(await readFile(file));}catch{res.writeHead(500);res.end('The room is unavailable.');}}).listen(3000,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:3000'));
