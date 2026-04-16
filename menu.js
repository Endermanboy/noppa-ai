document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.createElement('div');
  menu.innerHTML=`
    <button id="openMenu" style="position:fixed;left:10px;top:10px;z-index:1000;padding:10px;border:none;border-radius:10px;cursor:pointer;">☰</button>
    <div id="sideMenu" style="position:fixed;left:-220px;top:0;width:220px;height:100%;background:#1a1a1a;color:white;padding:20px;transition:0.3s;z-index:999;">
      <h2>Valikko</h2>
<p><a href="ok/">Testi</a></p>
    </div>`;
  document.body.appendChild(menu);
  const btn=document.getElementById('openMenu');
  const side=document.getElementById('sideMenu');
  let open=false;
  btn.onclick=()=>{open=!open;side.style.left=open?'0':'-220px';};
});
