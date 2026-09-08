
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>navLinks?.classList.remove('open'));
});
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href') === current) a.classList.add('active');
});
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
