(()=>{
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const setOpen=(el,open)=>{if(!el)return;el.classList.toggle('open',open);el.dataset.open=open?'true':'false';el.setAttribute('aria-hidden',open?'false':'true')};
  const targetOf=el=>{const id=el.getAttribute('data-target')||el.getAttribute('href');return id&&id.startsWith('#')?$(id):null};
  const toggleTarget=trigger=>{const target=targetOf(trigger);if(!target)return;const open=!(target.classList.contains('open')||target.dataset.open==='true');setOpen(target,open);trigger.setAttribute('aria-expanded',String(open));return target};

  document.addEventListener('click',e=>{
    const toggle=e.target.closest('[data-toggle]');
    if(toggle){
      const type=toggle.dataset.toggle;
      if(['collapse','navbar','drawer','dropdown'].includes(type)){
        e.preventDefault();
        const target=toggleTarget(toggle);
        if(type==='drawer'&&target){const backdrop=$(`[data-backdrop-for="${target.id}"]`);setOpen(backdrop,target.classList.contains('open'))}
      }
      if(type==='modal'){
        e.preventDefault();const target=targetOf(toggle);if(target){target.classList.add('open');target.setAttribute('aria-hidden','false')}
      }
      if(type==='toast'){
        e.preventDefault();const target=targetOf(toggle);if(target){target.hidden=false;target.classList.add('open')}
      }
    }

    const dismiss=e.target.closest('[data-dismiss]');
    if(dismiss){
      const type=dismiss.dataset.dismiss;const host=dismiss.closest(`.${type}`)||targetOf(dismiss);
      if(host){host.classList.remove('open');host.dataset.open='false';host.setAttribute('aria-hidden','true');if(type==='toast')host.hidden=true}
      if(type==='drawer'&&host?.id){setOpen($(`[data-backdrop-for="${host.id}"]`),false)}
    }

    const backdrop=e.target.closest('.drawer-backdrop[data-backdrop-for]');
    if(backdrop){const drawer=$(`#${backdrop.dataset.backdropFor}`);setOpen(drawer,false);setOpen(backdrop,false)}

    const accordion=e.target.closest('.accordion-trigger');
    if(accordion){const item=accordion.closest('.accordion-item');if(item){const open=!item.classList.contains('open');item.classList.toggle('open',open);accordion.setAttribute('aria-expanded',String(open))}}

    const tab=e.target.closest('.tab[data-tab]');
    if(tab){const tabs=tab.closest('.tabs');const root=tabs?.parentElement;if(root){$$('.tab',tabs).forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});tab.classList.add('active');tab.setAttribute('aria-selected','true');$$('.tab-panel',root).forEach(p=>p.classList.toggle('active',p.id===tab.dataset.tab))}}
  });

  document.addEventListener('keydown',e=>{
    if(e.key!=='Escape')return;
    $$('.modal.open').forEach(el=>{el.classList.remove('open');el.setAttribute('aria-hidden','true')});
    $$('.drawer.open').forEach(el=>setOpen(el,false));
    $$('.drawer-backdrop.open').forEach(el=>setOpen(el,false));
    $$('.dropdown.open').forEach(el=>setOpen(el,false));
  });
})();
