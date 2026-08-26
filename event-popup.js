'use strict';
const stgPopup=document.querySelector('#stg-event-popup');
const stgPopupContent=document.querySelector('#stg-popup-content');
const stgEscape=value=>String(value).replace(/[&<>'"]/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'})[character]);
const stgDate=value=>new Intl.DateTimeFormat('fr-CA',{dateStyle:'long',timeStyle:'short'}).format(new Date(value));
function closeStgPopup(){stgPopup.close();sessionStorage.setItem('stg-humour-popup-closed','1');}
document.querySelector('.stg-popup-close').addEventListener('click',closeStgPopup);
stgPopup.addEventListener('click',event=>{if(event.target===stgPopup)closeStgPopup();});
stgPopup.addEventListener('cancel',event=>{event.preventDefault();closeStgPopup();});
if(!sessionStorage.getItem('stg-humour-popup-closed')){
  const event={title:'Soirée humour Point G',summary:'Une soirée pleine de rires animée par Will Murphy et ses invités.',date:'2026-10-01T20:00:00-04:00',eventbriteId:'1998914026663'};
  const href='https://sallepointg.ca/evenements/soireehumourpointg011026';
  stgPopupContent.innerHTML=`<div class="stg-popup-grid"><img class="stg-popup-image" src="assets/jeudis-humour-popup.png" alt="Affiche des Jeudis humour à la Salle Point G"/><div class="stg-popup-copy"><p class="eyebrow">À l’affiche · ${stgEscape(stgDate(event.date))}</p><h2 id="stg-popup-title">${stgEscape(event.title)}</h2><p>${stgEscape(event.summary)}</p><div class="stg-popup-actions"><button class="button" id="stg-eventbrite-trigger" type="button">Acheter des billets</button><a class="stg-popup-link" href="${href}">Voir la fiche →</a></div></div></div>`;
  stgPopup.showModal();
  document.querySelector('#stg-eventbrite-trigger').addEventListener('click',closeStgPopup);
  const initialize=()=>{if(!window.EBWidgets)return setTimeout(initialize,100);window.EBWidgets.createWidget({widgetType:'checkout',eventId:event.eventbriteId,modal:true,modalTriggerElementId:'stg-eventbrite-trigger',onOrderComplete:()=>{}});};
  initialize();
}
