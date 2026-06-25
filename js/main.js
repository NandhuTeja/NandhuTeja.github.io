// Smooth scroll for nav links (if added later)
document.addEventListener('DOMContentLoaded',function(){
  // set current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // typing-like effect (simple)
  const roleEl = document.getElementById('typed-role');
  const full = roleEl.textContent;
  roleEl.textContent = '';
  let i=0;
  function type(){
    if(i<=full.length){
      roleEl.textContent = full.slice(0,i);
      i++;setTimeout(type,20);
    }
  }
  type();

  // smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
});
