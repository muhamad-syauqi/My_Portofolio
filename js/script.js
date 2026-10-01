// Project cards
var bg=['linear-gradient(145deg,#2c2d33,#0e0f12)','linear-gradient(160deg,#a5a5a9,#58585d)','linear-gradient(160deg,#e0ac78,#a8703f)','linear-gradient(160deg,#23887a,#0a3732)','linear-gradient(160deg,#c2bdc7,#76717c)','linear-gradient(145deg,#20232b,#0a0b0f)'];
var pg=document.getElementById('pg'),h='';
bg.forEach(function(b,i){h+='<a class="pc" href="#"><div class="pimg" style="background:'+b+'"><div class="logo"><em>EP</em><span>Example<br>Project</span></div><span class="arr">↗</span><span class="spk">✦</span></div><strong>Project-Title '+(i+1)+'</strong><small>Lorem ipsum dolor, sit amet consectetur.</small></a>'});
pg.innerHTML=h;

var T = [
    {
        name: "HTML5",
        icon: `<i class="devicon-html5-plain colored"></i>`
    },
    {
        name: "CSS3",
        icon: `<i class="devicon-css3-plain colored"></i>`
    },
    {
        name: "JavaScript",
        icon: `<i class="devicon-javascript-plain colored"></i>`
    },
    {
        name: "PHP",
        icon: `<i class="devicon-php-plain colored"></i>`
    },
    {
        name: "Laravel",
        icon: `<i class="devicon-laravel-plain colored"></i>`
    },
    {
        name: "Bootstrap",
        icon: `<i class="devicon-bootstrap-plain colored"></i>`
    },
    {
        name: "MySQL",
        icon: `<i class="devicon-mysql-plain colored"></i>`
    },
    {
        name: "Git",
        icon: `<i class="devicon-git-plain colored"></i>`
    },
    {
        name: "GitHub",
        icon: `<i class="devicon-github-original"></i>`
    },
    {
        name: "Figma",
        icon: `<i class="devicon-figma-plain colored"></i>`
    }
];

document.getElementById('tl').innerHTML = T.map(function(tool) {
    return `
        <div class="tool-card">
            <div class="tool-icon">
                ${tool.icon}
            </div>
            <span>${tool.name}</span>
        </div>
    `;
}).join('');

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
