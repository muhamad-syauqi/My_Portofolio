// Project cards
var bg=['linear-gradient(145deg,#2c2d33,#0e0f12)','linear-gradient(160deg,#a5a5a9,#58585d)','linear-gradient(160deg,#e0ac78,#a8703f)','linear-gradient(160deg,#23887a,#0a3732)','linear-gradient(160deg,#c2bdc7,#76717c)','linear-gradient(145deg,#20232b,#0a0b0f)'];
var pg=document.getElementById('pg'),h='';
bg.forEach(function(b,i){h+='<a class="pc" href="#"><div class="pimg" style="background:'+b+'"><div class="logo"><em>EP</em><span>Example<br>Project</span></div><span class="arr">↗</span><span class="spk">✦</span></div><strong>Project-Title '+(i+1)+'</strong><small>Lorem ipsum dolor, sit amet consectetur.</small></a>'});
pg.innerHTML=h;

// Tool icons
var T=[
['HTML','<svg viewBox="0 0 64 64"><path d="M8 4h48l-4 46-20 10-20-10z" fill="#e8501f"/><path d="M32 8v48l16-8 3.500-40z" fill="#f16529"/><text x="32" y="40" font-size="26" font-weight="800" text-anchor="middle" fill="#fff" font-family="sans-serif">5</text></svg>'],
['CSS','<svg viewBox="0 0 64 64"><path d="M8 4h48l-4 46-20 10-20-10z" fill="#1572b6"/><path d="M32 8v48l16-8 3.500-40z" fill="#33a9dc"/><text x="32" y="40" font-size="26" font-weight="800" text-anchor="middle" fill="#fff" font-family="sans-serif">3</text></svg>'],
['JavaScript','<svg viewBox="0 0 64 64"><rect x="4" y="4" width="56" height="56" fill="#f7df1e"/><text x="56" y="56" font-size="30" font-weight="800" text-anchor="end" fill="#111" font-family="sans-serif">JS</text></svg>'],
['React','<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#10141c"/><g fill="none" stroke="#61dafb" stroke-width="2.500"><ellipse cx="32" cy="32" rx="20" ry="8"/><ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(60 32 32)"/><ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(120 32 32)"/></g><circle cx="32" cy="32" r="3.500" fill="#61dafb"/></svg>'],
['Node.js','<svg viewBox="0 0 64 64"><path d="M32 4 56 18v28L32 60 8 46V18z" fill="none" stroke="#539e43" stroke-width="4"/><text x="32" y="40" font-size="20" font-weight="800" text-anchor="middle" fill="#539e43" font-family="sans-serif">JS</text></svg>'],
['MongoDB','<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#2b2f36"/><g fill="#d7dbe0"><ellipse cx="30" cy="18" rx="16" ry="6"/><path d="M14 22c0 4 7 7 16 7s16-3 16-7v8c0 4-7 7-16 7s-16-3-16-7zM14 36c0 4 7 7 16 7s16-3 16-7v8c0 4-7 7-16 7s-16-3-16-7z"/></g><path d="M50 30c4 6 2 16-4 22-2-8-2-16 4-22z" fill="#3fa037"/></svg>'],
['Git','<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#f1502f"/><path d="M32 12 52 32 32 52 12 32z" fill="#fff"/><circle cx="26" cy="26" r="4" fill="#f1502f"/><circle cx="36" cy="30" r="4" fill="#f1502f"/><circle cx="31" cy="42" r="4" fill="#f1502f"/><path d="M26 26l10 4M31 42l5-12M26 26l5 16" stroke="#f1502f" stroke-width="2.500"/></svg>'],
['GitHub','<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="#fff"/><path d="M32 12a20 20 0 0 0-6.300 39c1 .2 1.400-.4 1.400-1v-3.500c-5.600 1.200-6.800-2.700-6.800-2.700-.9-2.300-2.200-2.900-2.200-2.900-1.800-1.200.1-1.200.1-1.200 2 .1 3.100 2.100 3.100 2.100 1.800 3.100 4.700 2.200 5.800 1.700.2-1.300.7-2.200 1.300-2.700-4.500-.5-9.200-2.200-9.200-9.900 0-2.200.8-4 2.100-5.400-.2-.5-.9-2.600.2-5.400 0 0 1.700-.5 5.500 2a19 19 0 0 1 10 0c3.800-2.500 5.500-2 5.500-2 1.100 2.800.4 4.900.2 5.400 1.300 1.400 2.100 3.200 2.100 5.400 0 7.700-4.700 9.400-9.200 9.900.7.600 1.400 1.800 1.400 3.700V50c0 .6.4 1.200 1.400 1A20 20 0 0 0 32 12z" fill="#111"/></svg>'],
['Figma','<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#10141c"/><circle cx="32" cy="32" r="8" fill="#1abcfe"/><path d="M16 16a8 8 0 0 1 8-8h8v16h-8a8 8 0 0 1-8-8z" fill="#f24e1e" transform="translate(4 6)"/><path d="M32 8h8a8 8 0 0 1 0 16h-8z" fill="#ff7262" transform="translate(4 6)"/><path d="M16 32a8 8 0 0 1 8-8h8v16h-8a8 8 0 0 1-8-8z" fill="#a259ff" transform="translate(4 6)"/><path d="M16 48a8 8 0 0 1 8-8h8v8a8 8 0 0 1-16 0z" fill="#0acf83" transform="translate(4 4)"/></svg>'],
['Express JS','<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="#f7c600"/><text x="32" y="25" font-size="9" font-weight="800" text-anchor="middle" fill="#111" font-family="sans-serif">EXPRESS</text><text x="32" y="48" font-size="26" font-weight="800" text-anchor="middle" fill="#111" font-family="sans-serif">JS</text></svg>']];
document.getElementById('tl').innerHTML=T.map(function(t){return '<div>'+t[1]+t[0]+'</div>'}).join('');

// Contact form (opens email app)
document.getElementById('f').addEventListener('submit',function(ev){
  ev.preventDefault();
  var n=n_.value.trim(),e=e_.value.trim(),m=m_.value.trim(),s=document.getElementById('st');
  if(!n||!e||!m){s.textContent='Please fill in your name, email, and message.';return}
  location.href='mailto:youremail@gmail.com?subject='+encodeURIComponent('Message from '+n)+'&body='+encodeURIComponent(m+'\n\n'+n+' ('+e+')');
  s.textContent='Opening your email app…';
});
var n_=document.getElementById('n'),e_=document.getElementById('e'),m_=document.getElementById('m');

// Active nav + scroll reveal
var links=[].slice.call(document.querySelectorAll('#nav a'));
var ids=['home','about','projects','skills','contact'];
function setOn(id){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+id)})}
function spy(){var y=window.innerHeight*.4,cur='home';ids.forEach(function(id){var el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<y)cur=id});
  if(window.innerHeight+window.scrollY>=document.body.scrollHeight-4)cur='contact';setOn(cur)}
addEventListener('scroll',spy,{passive:true});spy();
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});

// Glow blob follows pointer, drifts when idle
var blob=document.getElementById('blob'),tx=innerWidth*.4,ty=innerHeight*.7,bx=tx,by=ty,t0=0,idle=true;
function mv(x,y){tx=x;ty=y;idle=false;clearTimeout(t0);t0=setTimeout(function(){idle=true},2500)}
addEventListener('pointermove',function(e){mv(e.clientX,e.clientY)});
addEventListener('touchmove',function(e){mv(e.touches[0].clientX,e.touches[0].clientY)},{passive:true});

// Particles + blob loop
var c=document.getElementById('fx'),x=c.getContext('2d'),P=[],W,H;
function rs(){W=c.width=innerWidth;H=c.height=innerHeight;P=[];for(var i=0;i<60;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+.4,v:Math.random()*.15+.03,a:Math.random()*.5+.15})}
rs();addEventListener('resize',rs);
(function loop(t){
  x.clearRect(0,0,W,H);
  P.forEach(function(p){p.y-=p.v;if(p.y<-3){p.y=H+3;p.x=Math.random()*W}x.fillStyle='rgba(255,255,255,'+p.a+')';x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill()});
  if(idle){tx=W*.4+Math.sin(t/2600)*W*.25;ty=H*.65+Math.cos(t/3200)*H*.18}
  bx+=(tx-bx)*.06;by+=(ty-by)*.06;blob.style.transform='translate('+bx+'px,'+by+'px)';
  requestAnimationFrame(loop)
})(0);
