const grid=document.getElementById('cabinet-grid');
for(let n=1;n<=64;n++){const key=document.createElement('div');key.className='mini-key';const label=document.createElement('small');label.textContent=['もりそば','中華そば','味玉そば','和味そば'][(n-1)%4];key.append(label,document.createTextNode('¥1,000'));grid.append(key);}
let pendingInstall;
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();pendingInstall=event;document.getElementById('install-pwa').hidden=false;});
document.getElementById('install-pwa').addEventListener('click',async()=>{if(!pendingInstall)return;await pendingInstall.prompt();pendingInstall=null;document.getElementById('install-pwa').hidden=true;});
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).catch(()=>{});
