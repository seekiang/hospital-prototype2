
(function(w){
  function setHospital(obj){ try{ localStorage.setItem('hospital', JSON.stringify(obj)); }catch(e){} }
  function getHospital(){ try{ return JSON.parse(localStorage.getItem('hospital')) || {name:'Your Hospital', url:'https://example.org'}; }catch(e){ return {name:'Your Hospital', url:'https://example.org'}; } }
  function applyHeader(){
    var h = getHospital();
    var title = document.querySelector('[data-hospital-name]');
    var link = document.querySelector('[data-hospital-link]');
    if(title) title.textContent = h.name;
    if(link) link.href = h.url;
  }
  function go(href){ window.location.assign(href); }
  function params(){ try{ return Object.fromEntries(new URLSearchParams(location.search).entries()); }catch(e){ return {}; } }
  function share(text){ if(navigator.share){ navigator.share({title:document.title, text:text||'', url:location.href}).catch(function(){}); } else { alert('Share is not supported on this browser.'); } }
  w.App = { setHospital: setHospital, getHospital:getHospital, applyHeader:applyHeader, go:go, params:params, share:share };
})(window);
