const el=id=>document.getElementById(id);
const htmlEl=document.documentElement;
const langSelect=el('langSelect');
const lengthEl=el('length'),widthEl=el('width'),heightEl=el('height'),weightEl=el('weight');
const volumetricEl=el('volumetric'),billableEl=el('billable'),priceEl=el('price');
let fL=el('f-l'),fW=el('f-w'),fH=el('f-h');
const countryInput=el('countryInput'),countrySelect=el('countrySelect');
const declaredEl=el('declaredValue');
const customsBlock=el('customsBlock'),customsText=el('customsText'),customsDetails=el('customsDetails');
const presenceWarning=el('presenceWarning');
const unitKg=el('unit-kg'),unitKg2=el('unit-kg-2'),unitCurrency=el('unit-currency'),formulaRow=el('formula-row');
const btnParcel=el('btnParcel'),btnDocs=el('btnDocs');
const addressWrap=el('addressWrap'),addressCheckbox=el('addressDelivery'),addressLabel=el('addressLabel');
const pickupCheckbox=el('addressPickup'),pickupLabelEl=el('pickupLabel');
const themeSwitch=el('themeSwitch'),themeLabel=el('themeLabel');
const noticeLink='https://drive.google.com/file/d/1YHafkxkIv9wzWUNsmCvvVpN79mR9KZJe/view?usp=sharing';

const T={
 uk:{langLabel:'Мова',title:'Калькулятор ціни',intro:"Введіть розміри в сантиметрах та фактичну вагу в кілограмах.",length:'Довжина (cm)',width:'Ширина (cm)',height:'Висота (cm)',weight:'Фактична вага (kg)',country:"Країна одержувача",mobilePlaceholder:'Вибери країну',formulaWords:{l:'довжина',w:'ширина',h:'висота'},formulaLabel:'Формула',volumetric:"Об'ємна вага:",billable:"Платна вага:",price:"Ціна:",unitKg:'kg',currency:'PLN',declaredLabel:'Оціночна вартість (zł)',declaredPlaceholder:'0',per10:'за 10 КГ',perExtra:'за кожен наступний КГ',insuranceText:'це 0.5% \"страхування\" від ОВ',andSeparator:', ',customsTitle:'<strong>Орієнтовна</strong> вартість митних платежів (орієнтуйтесь на ціну у євро)',customsDetailFmt:(eur,uah,pln)=>` ${eur} EUR або ${uah} UAH або ${pln} PLN`,presenceNotice:'Зверніть увагу, що доставка до даної країни відбувається партнером UPS авіа шляхом. Ознайомтесь із особливостями такої доставки у ',presenceLinkText:'1.1.3.21 СОК Перевірка відправлення на наявність забороненого вмісту з авіа-доставкою UPS',addressLabel:'Адресна доставка',pickupLabel:'Адресний забір',addrNoteSmall:(n)=>`додаткова плата за адресну доставку: ${n} zł`,addrNoteLarge:(n)=>`додаткова плата за адресну доставку: ${n} zł за кожні розпочаті 100 кг`,pickupNoteSmall:'додаткова плата за адресний забір: 10 zł',pickupNoteLarge:'додаткова плата за адресний забір: 25 zł за кожні розпочаті 100 кг',pkgBtnLabel:'Додати пакування',pkgModalTitle:'Оберіть пакування',pkgSearchPlaceholder:'Назва або код…',pkgPriceNote:(n,name)=>`пакування: +${n} zł (${name})`,mode:{parcel:'Посилка',docs:'Документи'}},
 en:{langLabel:'Language',title:'Price calculator',intro:"Enter dimensions in centimetres and actual weight in kilograms.",length:'Length (cm)',width:'Width (cm)',height:'Height (cm)',weight:'Actual weight (kg)',country:"Destination country",mobilePlaceholder:'Choose country',formulaWords:{l:'length',w:'width',h:'height'},formulaLabel:'Formula',volumetric:"Volumetric weight:",billable:"Billable weight:",price:"Price:",unitKg:'kg',currency:'PLN',declaredLabel:'Estimated value (zl)',declaredPlaceholder:'0',per10:'for 10 KG',perExtra:'for each next KG',insuranceText:'is 0.5% \"insurance\" of EV',andSeparator:', ',customsTitle:'<strong>Approximate</strong> customs payments (refer to the price in euros)',customsDetailFmt:(eur,uah,pln)=>` ${eur} EUR or ${uah} UAH or ${pln} PLN`,presenceNotice:'Please note that delivery to this country is provided by UPS partner via air. See specifics in ',presenceLinkText:'1.1.3.21 SOK Shipment check for prohibited content with UPS air delivery',addressLabel:'Address delivery',pickupLabel:'Address pickup',addrNoteSmall:(n)=>`address delivery surcharge: ${n} zł`,addrNoteLarge:(n)=>`address delivery surcharge: ${n} zł per each started 100 kg`,pickupNoteSmall:'address pickup surcharge: 10 zł',pickupNoteLarge:'address pickup surcharge: 25 zł per each started 100 kg',pkgBtnLabel:'Add packaging',pkgModalTitle:'Choose packaging',pkgSearchPlaceholder:'Name or code…',pkgPriceNote:(n,name)=>`packaging: +${n} zł (${name})`,mode:{parcel:'Parcel',docs:'Documents'}},
 pl:{langLabel:'Język',title:'Kalkulator ceny',intro:"Wprowadź wymiary w centymetrach i rzeczywistą wagę w kilogramach.",length:'Długość (cm)',width:'Szerokość (cm)',height:'Wysokość (cm)',weight:'Rzeczywista waga (kg)',country:"Kraj odbiorcy",mobilePlaceholder:'Wybierz kraj',formulaWords:{l:'długość',w:'szerokość',h:'wysokość'},formulaLabel:'Formuła',volumetric:"Waga objętościowa:",billable:"Waga obciążalna:",price:"Cena:",unitKg:'kg',currency:'PLN',declaredLabel:'Wartość szacunkowa (zł)',declaredPlaceholder:'0',per10:'za 10 KG',perExtra:'za każdy kolejny KG',insuranceText:'to 0.5% \"ubezpieczenie\" od WS',andSeparator:', ',customsTitle:'<strong>Przybliżony</strong> koszt opłat celnych (orientuj się ceną w euro)',customsDetailFmt:(eur,uah,pln)=>` ${eur} EUR lub ${uah} UAH lub ${pln} PLN`,presenceNotice:'Zwróć uwagę, że dostawa do tego kraju odbywa się przez partnera UPS drogą lotniczą. Zapoznaj się ze szczegółami w ',presenceLinkText:'1.1.3.21 SOK Sprawdzenie przesyłki pod kątem zabronionej zawartości przy dostawie UPS (lotniczo)',addressLabel:'Dostawa pod adres',pickupLabel:'Odbiór pod adresem',addrNoteSmall:(n)=>`dopłata za dostawę pod adres: ${n} zł`,addrNoteLarge:(n)=>`dopłata za dostawę pod adres: ${n} zł za każde rozpoczęte 100 kg`,pickupNoteSmall:'dopłata za odbiór pod adresem: 10 zł',pickupNoteLarge:'dopłata za odbiór pod adresem: 25 zł za każde rozpoczęte 100 kg',pkgBtnLabel:'Dodaj opakowanie',pkgModalTitle:'Wybierz opakowanie',pkgSearchPlaceholder:'Nazwa lub kod…',pkgPriceNote:(n,name)=>`opakowanie: +${n} zł (${name})`,mode:{parcel:'Paczka',docs:'Dokumenty'}}};

let countries=[],ratesMap={},presenceCountriesAllNames=[];
const fallbackRate={s:100,m:150,over10:300,perKg:8};
const debounce=(fn,ms=120)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};};
const parseNumber=el=>{const v=parseFloat(el.value);return Number.isFinite(v)?v:0};
const formatNumber=v=>((Math.round(v*100)/100).toFixed(2));
const normalize=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim();

let FX={EUR_PLN:null,EUR_UAH:null,lastFetched:0},FX_TTL=1000*60*30;
async function fetchFxRates(){
  const now=Date.now();
  if(FX.lastFetched && now-FX.lastFetched < FX_TTL && FX.EUR_PLN && FX.EUR_UAH) return FX;
  try{
    const res = await fetch('https://api.exchangerate.host/latest?base=EUR&symbols=PLN,UAH');
    if(!res.ok) throw 0;
    const data = await res.json();
    FX.EUR_PLN = data.rates.PLN;
    FX.EUR_UAH = data.rates.UAH;
    FX.lastFetched = Date.now();
    return FX;
  }catch(e){
    FX.EUR_PLN = FX.EUR_PLN || 4.3;
    FX.EUR_UAH = FX.EUR_UAH || 40;
    FX.lastFetched = Date.now();
    return FX;
  }
}

function ratesFileForLang(lang){if(lang==='pl')return'./rates.json';if(lang==='uk')return'./rates-ua.json';if(lang==='en')return'./rates-eng.json';return'./rates.json'}

function applyTranslations(lang){
  const t=T[lang]||T.uk;
  htmlEl.lang=lang;
  el('label-lang').textContent=t.langLabel;
  el('title').textContent=t.title;
  el('intro').textContent=t.intro;
  el('label-length').textContent=t.length;
  el('label-width').textContent=t.width;
  el('label-height').textContent=t.height;
  el('label-weight').textContent=t.weight;
  el('label-country').textContent=t.country;
  el('label-countrySelect').textContent=t.country;
  el('label-volumetric').textContent=t.volumetric;
  el('label-billable').textContent=t.billable;
  el('label-price').textContent=t.price;
  unitKg.textContent=t.unitKg; unitKg2.textContent=t.unitKg; unitCurrency.textContent='zł';
  countryInput.placeholder = t.mobilePlaceholder;
  const mobilePh = el('mobile-placeholder'); if(mobilePh) mobilePh.textContent = t.mobilePlaceholder;
  fL.textContent=t.formulaWords.l; fW.textContent=t.formulaWords.w; fH.textContent=t.formulaWords.h;
  el('label-declared').textContent=t.declaredLabel; declaredEl.placeholder=t.declaredPlaceholder;
  btnParcel.textContent=t.mode.parcel; btnDocs.textContent=t.mode.docs;
  addressLabel.textContent = t.addressLabel;
  pickupLabelEl.textContent = t.pickupLabel;
  // refresh packaging button label if no packaging selected
  if(!selectedPackaging){ el('pkgBtnLabel').textContent = t.pkgBtnLabel; }
  el('pkgModalTitle').textContent=t.pkgModalTitle;
  el('pkgSearch').placeholder = t.pkgSearchPlaceholder;
  formulaRow.innerHTML=`${t.formulaLabel}: <span class="formula">(<span id="f-l">${t.formulaWords.l}</span> × <span id="f-w">${t.formulaWords.w}</span> × <span id="f-h">${t.formulaWords.h}</span>) ÷ 4000</span>`;
  fL=document.getElementById('f-l'); fW=document.getElementById('f-w'); fH=document.getElementById('f-h');
  updateModeButtonVisuals();
}

async function loadPresenceCountries(){
  try{const res=await fetch('./presence_countries.json');if(!res.ok)throw 0;const data=await res.json();presenceCountriesAllNames=data.map(item=>[String(item.uk||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''),String(item.pl||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''),String(item.en||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')])}
  catch(e){presenceCountriesAllNames=[['україна','ukraina','ukraine'],['молдова','mołdawa','moldova'],['польща','polska','poland'],['литва','litwa','lithuania'],['чехія','czechy','czechia'],['румунія','rumunia','romania'],['німеччина','niemcy','germany'],['словаччина','słovacja','slovakia'],['естонія','estonia','estonia'],['латвія','łotwa','latvia'],['угорщина','węgry','hungary'],['італія','włochy','italy'],['велика британія','wielka brytania','united kingdom'],['іспанія','hiszpania','spain'],['франція','francja','france'],['австрія','austria','austria'],['нідерланди','holandia','netherlands']]}
}

async function loadRatesForLang(lang){
  const file=ratesFileForLang(lang); countries=[];ratesMap={};
  try{
    const res=await fetch(file); if(!res.ok) throw 0;
    const data=await res.json();
    const seen=new Set();
    data.forEach(item=>{const name=String(item.country||'').trim(); if(!name||seen.has(name.toLowerCase())) return; seen.add(name.toLowerCase()); countries.push(name); ratesMap[name]=item;});
    countries.sort((a,b)=>a.localeCompare(b));
    populateCountrySelects();
    countryInput.value=''; countrySelect.value='';
  }catch(e){
    countrySelect.innerHTML='';
    const ph=document.createElement('option'); ph.value=''; ph.disabled=true; ph.selected=true; ph.id='mobile-placeholder';
    ph.textContent=(T[lang]||T.uk).mobilePlaceholder;
    countrySelect.appendChild(ph);
    countries=[]; ratesMap={};
  } finally { compute(); }
}

function populateCountrySelects(){
  countrySelect.innerHTML='';
  const ph=document.createElement('option'); ph.value=''; ph.disabled=true; ph.selected=true; ph.id='mobile-placeholder'; ph.textContent=(T[htmlEl.lang]||T.uk).mobilePlaceholder;
  countrySelect.appendChild(ph);
  const frag=document.createDocumentFragment();
  countries.forEach(name=>{ const o=document.createElement('option'); o.value=name; o.textContent=name; frag.appendChild(o); });
  countrySelect.appendChild(frag);
}

function resolveCountry(input){ if(!input) return ''; if(ratesMap[input]) return input; const found=Object.keys(ratesMap).find(c=>c.toLowerCase()===String(input).toLowerCase()); if(found) return found; return ''; }
function syncCountryToSelect(){ const r=resolveCountry(countryInput.value); if(r) countrySelect.value=r; }
function syncSelectToInput(){ if(countrySelect.value) countryInput.value=countrySelect.value; }

let sendMode='parcel';
function updateModeButtonVisuals(){ const a='active'; if(sendMode==='docs'){ btnDocs.classList.add(a); btnDocs.setAttribute('aria-pressed','true'); btnParcel.classList.remove(a); btnParcel.setAttribute('aria-pressed','false'); } else { btnParcel.classList.add(a); btnParcel.setAttribute('aria-pressed','true'); btnDocs.classList.remove(a); btnDocs.setAttribute('aria-pressed','false'); } }

function setMode(mode){
  // clear packaging if switching to docs or if switching away from docs with envelope selected
  if(mode === 'docs' && selectedPackaging) clearPackaging();
  if(mode !== 'docs' && selectedPackaging){
    const codes = Array.isArray(selectedPackaging.code) ? selectedPackaging.code : [selectedPackaging.code];
    const isDocEnvelope = codes.some(c => String(c) === '7' || String(c) === '7v');
    if(isDocEnvelope) clearPackaging();
  }
  sendMode=mode;
  const docsFixed={length:35,width:25,height:2,weight:1};
  if(mode==='docs'){
    lengthEl.value=docsFixed.length; widthEl.value=docsFixed.width; heightEl.value=docsFixed.height; weightEl.value=docsFixed.weight;
    [lengthEl,widthEl,heightEl,weightEl].forEach(i=>{i.readOnly=true;i.tabIndex=-1;i.setAttribute('aria-disabled','true');});
  }else{
    [lengthEl,widthEl,heightEl,weightEl].forEach(i=>{i.readOnly=false;i.removeAttribute('tabIndex');i.removeAttribute('aria-disabled');});
    lengthEl.value=''; widthEl.value=''; heightEl.value=''; weightEl.value='';
  }
  updateModeButtonVisuals();
  compute();
}

function calcAddressSurcharge(billable, checked, r){
  if(!checked) return 0;
  const ct30 = (r && r.courierTo30 != null) ? r.courierTo30 : 10;
  const co30 = (r && r.courierOver30 != null) ? r.courierOver30 : 25;
  if(billable <= 30) return ct30;
  return Math.ceil((billable - 30) / 100) * co30;
}

async function compute(){
  const t=T[htmlEl.lang]||T.uk;
  const L=parseNumber(lengthEl), W=parseNumber(widthEl), H=parseNumber(heightEl);
  const vol = (L>0 && W>0 && H>0) ? (L*W*H)/4000 : 0;
  volumetricEl.textContent = vol>0 ? formatNumber(vol) : '—';
  const actual = parseNumber(weightEl);
  let billable;
  if(vol>0 && actual>0) billable = Math.max(vol, actual);
  else if(vol>0) billable = vol;
  else if(actual>0) billable = actual;
  else { volumetricEl.textContent='—'; billableEl.textContent=priceEl.textContent='—'; hideCustoms(); hideWarning(); hideAddress(); return; }
  billableEl.textContent = formatNumber(billable);

  const userInput = countryInput.value || countrySelect.value || '';
  const destResolved = resolveCountry(userInput);
  if(!destResolved){ priceEl.textContent='\u2014'; hideCustoms(); hideWarning(); hideAddress(); return; }
  const r = ratesMap[ destResolved ] || fallbackRate;
  let basePrice, priceFor10kg=null, perExtraKg=null;
  if(sendMode==='docs' && r && typeof r.docs!=='undefined'){ basePrice = Number(r.docs); }
  else {
    if(billable<=2) basePrice = r.s;
    else if(billable<=10) basePrice = r.m;
    else { priceFor10kg = r.over10; perExtraKg = r.perKg; basePrice = r.over10 + (Math.ceil(billable)-10)*r.perKg; }
  }

  const declared = parseNumber(declaredEl);
  let surcharge=0, surchargeShown=0; if(declared>=1000){ surcharge = declared*0.005; surchargeShown = surcharge; }

  const addrChecked = addressCheckbox.checked;
  const pickupChecked = pickupCheckbox.checked;
  const pickupSurcharge = calcAddressSurcharge(billable, pickupChecked, {courierTo30:10, courierOver30:25});

  const ct30 = (r && r.courierTo30 != null) ? r.courierTo30 : 10;
  const co30 = (r && r.courierOver30 != null) ? r.courierOver30 : 25;
  const addrSurcharge = calcAddressSurcharge(billable, addrChecked, r);

  const pkgPrice = (selectedPackaging && selectedPackaging.price > 0) ? selectedPackaging.price : 0;
  const total = basePrice + surcharge + addrSurcharge + pickupSurcharge + pkgPrice;

  const parts=[];
  if(billable>10){ if(priceFor10kg==null) priceFor10kg = r.over10; parts.push(`${priceFor10kg} ${t.per10}`); parts.push(`${perExtraKg} ${t.perExtra}`); }
  if(surchargeShown>0) parts.push(`${formatNumber(surchargeShown)} ${t.insuranceText}`);

  if(addrChecked){
    parts.push(billable <= 30 ? t.addrNoteSmall(ct30) : t.addrNoteLarge(co30));
  }
  if(pickupChecked){
    parts.push(billable <= 30 ? t.pickupNoteSmall : t.pickupNoteLarge);
  }
  if(pkgPrice > 0){
    const pkgDisplayName = pkgName(selectedPackaging).replace(/[()]/g, '').replace(/\s+/g,' ').trim();
    parts.push(t.pkgPriceNote(pkgPrice, pkgDisplayName));
  }

  const inside = parts.length ? ` (${parts.join(t.andSeparator)})` : '';
  priceEl.textContent = `${formatNumber(total)}${inside}`;

  const destNorm = normalize(destResolved);
  const inPresence = destResolved && presenceCountriesAllNames.some(arr=>arr.includes(destNorm));

  if(inPresence){
    showAddress();
  } else {
    hideAddress();
  }

  const isUkraine = destResolved && /Україн|Ukraine|Ukraina/i.test(destResolved);
  if(isUkraine && declared>0){
    const fx = await fetchFxRates();
    const eurPerPln = 1 / fx.EUR_PLN;
    const declaredEUR = declared * eurPerPln;
    if(declaredEUR >= 150){
      const excess = declaredEUR - 150;
      const duty = excess * 0.10;
      const vat = (excess + duty) * 0.20;
      const customsTotalEUR = duty + vat;
      const customsPLN = customsTotalEUR * fx.EUR_PLN;
      const customsUAH = customsTotalEUR * fx.EUR_UAH;
      const X_eur = formatNumber(customsTotalEUR), X_uah = formatNumber(customsUAH), X_pln = formatNumber(customsPLN);
      customsText.innerHTML = t.customsTitle;
      customsDetails.textContent = t.customsDetailFmt(X_eur, X_uah, X_pln);
      customsBlock.style.display = 'block';
    } else hideCustoms();
  } else hideCustoms();

  const inPresenceFlag = destResolved && presenceCountriesAllNames.some(arr=>arr.includes(destNorm));
  if(destResolved && !inPresenceFlag) showWarning(t); else hideWarning();
}

function showAddress(){
  addressWrap.style.display='flex';
  addressWrap.setAttribute('aria-hidden','false');
}
function hideAddress(){
  addressWrap.style.display='none';
  addressWrap.setAttribute('aria-hidden','true');
  addressCheckbox.checked=false;
  pickupCheckbox.checked=false;
}

function hideCustoms(){ customsBlock.style.display='none'; customsText.innerHTML=''; customsDetails.textContent=''; }
function showWarning(t){ presenceWarning.style.display='block'; presenceWarning.innerHTML = `${t.presenceNotice}<a href="${noticeLink}" target="_blank" rel="noopener noreferrer">${t.presenceLinkText}</a>`; }
function hideWarning(){ presenceWarning.style.display='none'; presenceWarning.innerHTML=''; }

[lengthEl,widthEl,heightEl,weightEl,declaredEl].forEach(i=>i.addEventListener('input',debounce(()=>{const t=T[htmlEl.lang]||T.uk; if(fL) fL.textContent = lengthEl.value || t.formulaWords.l; if(fW) fW.textContent = widthEl.value || t.formulaWords.w; if(fH) fH.textContent = heightEl.value || t.formulaWords.h; compute();},120)));
declaredEl.addEventListener('change',()=>compute());
countryInput.addEventListener('input',debounce(()=>{syncCountryToSelect();compute();},120));
countryInput.addEventListener('change',()=>{syncCountryToSelect();compute()});
countrySelect.addEventListener('change',()=>{syncSelectToInput();compute()});
addressCheckbox.addEventListener('change',()=>compute());
pickupCheckbox.addEventListener('change',()=>compute());

(function desktopDropdown(){
  const isMobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent); if(isMobile) return;
  const wrapper=countryInput.parentElement; wrapper.style.position=wrapper.style.position||'relative';
  const dropdown=document.createElement('ul');dropdown.className='dropdown';dropdown.hidden=true;wrapper.appendChild(dropdown);
  let items=[],highlighted=-1,MAX_SHOW=200;
  const render=arr=>{dropdown.innerHTML='';if(!arr||!arr.length){dropdown.hidden=true;return}const frag=document.createDocumentFragment();arr.forEach((name,i)=>{const li=document.createElement('li');li.textContent=name;li.dataset.index=i;li.addEventListener('mousedown',e=>e.preventDefault());li.addEventListener('click',()=>{countryInput.value=name;dropdown.hidden=true;syncCountryToSelect();compute()});frag.appendChild(li)});dropdown.appendChild(frag);dropdown.hidden=false;highlighted=-1};
  const showMatches=q=>{const qn = normalize(q===undefined?countryInput.value:q);let res=[];if(!qn) res = countries.slice(0,MAX_SHOW);else {const seen=new Set();for(const c of countries){const lc=c.toLowerCase();if(lc.startsWith(qn) && !seen.has(lc)){res.push(c);seen.add(lc);if(res.length>=MAX_SHOW) break;}}if(res.length<MAX_SHOW) for(const c of countries){const lc=c.toLowerCase();if(!seen.has(lc) && lc.includes(qn)){res.push(c);seen.add(lc);if(res.length>=MAX_SHOW) break;}}}items=res;render(res);};
  const debouncedShow=debounce(showMatches,120);
  countryInput.addEventListener('focus',()=>showMatches());
  countryInput.addEventListener('click',e=>{ e.stopPropagation(); showMatches(); });
  countryInput.addEventListener('input',()=>debouncedShow(countryInput.value));
  countryInput.addEventListener('keydown',e=>{ if(dropdown.hidden) return; const lis=dropdown.querySelectorAll('li'); if(!lis.length) return; if(e.key==='ArrowDown'){ e.preventDefault(); highlighted = Math.min(highlighted+1, lis.length-1); updateHighlight(lis); } else if(e.key==='ArrowUp'){ e.preventDefault(); highlighted = Math.max(highlighted-1, 0); updateHighlight(lis); } else if(e.key==='Enter'){ e.preventDefault(); const sel = lis[highlighted] || lis[0]; if(sel){ countryInput.value = sel.textContent; dropdown.hidden = true; syncCountryToSelect(); compute(); } } else if(e.key==='Escape'){ dropdown.hidden = true; highlighted = -1; } });
  function updateHighlight(lis){ lis.forEach(li=>li.removeAttribute('aria-selected')); if(highlighted>=0 && lis[highlighted]){ lis[highlighted].setAttribute('aria-selected','true'); lis[highlighted].scrollIntoView({block:'nearest'}); } }
  document.addEventListener('click',(e)=>{ if(!dropdown.hidden && !wrapper.contains(e.target)) dropdown.hidden=true; });
  window.addEventListener('resize',()=>{ if(!dropdown.hidden) showMatches(); });
})();

btnParcel.addEventListener('click',()=>setMode('parcel'));
btnDocs.addEventListener('click',()=>setMode('docs'));

langSelect.addEventListener('change',async e=>{ const lang=e.target.value; applyTranslations(lang); await loadRatesForLang(lang); });

function setTheme(isDark){
  if(isDark){ htmlEl.classList.add('dark'); themeSwitch.classList.add('on'); themeSwitch.setAttribute('aria-checked','true'); themeLabel.textContent='Dark'; }
  else{ htmlEl.classList.remove('dark'); themeSwitch.classList.remove('on'); themeSwitch.setAttribute('aria-checked','false'); themeLabel.textContent='Light'; }
  try{ localStorage.setItem('npcalc_dark', isDark ? '1' : '0'); }catch(e){}
}

themeSwitch.addEventListener('click',()=>{ const on = themeSwitch.classList.toggle('on'); setTheme(on); });
themeSwitch.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); const on = themeSwitch.classList.toggle('on'); setTheme(on); } });

// ── Packaging ──────────────────────────────────────────────
let packagingData = [];
let selectedPackaging = null;

async function loadPackaging(){
  try{
    const res = await fetch('./packaging.json');
    if(!res.ok) throw 0;
    packagingData = await res.json();
  }catch(e){ packagingData = []; }
}

function pkgName(item){
  const lang = htmlEl.lang || 'uk';
  return (item.name && item.name[lang]) || item.name?.uk || item.name?.pl || item.name?.en || '—';
}

function pkgBtnText(){ return (T[htmlEl.lang]||T.uk).pkgBtnLabel || 'Додати пакування'; }

function renderPkgList(query){
  const list = el('pkgList');
  const q = (query||'').trim().toLowerCase();
  const filtered = packagingData.filter(p => {
    // Filter by mode: docs mode only shows envelope with codes 7 or 7v
    const codes = Array.isArray(p.code) ? p.code : [p.code];
    if(sendMode === 'docs'){
      const isDocEnvelope = codes.some(c => String(c) === '7' || String(c) === '7v');
      if(!isDocEnvelope) return false;
    }
    if(!q) return true;
    const name = pkgName(p).toLowerCase();
    return codes.some(c => String(c).toLowerCase().startsWith(q)) || name.includes(q);
  });
  if(!filtered.length){
    list.innerHTML = `<div class="modal-empty">Нічого не знайдено</div>`;
    return;
  }
  list.innerHTML = '';
  const frag = document.createDocumentFragment();
  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'pkg-item';
    const codes = Array.isArray(p.code) ? p.code : [p.code];
    const codesHtml = codes.map(c => `<span class="pkg-item-code">${c}</span>`).join('');
    const priceStr = p.price ? ` · +${p.price} zł` : '';
    div.innerHTML = `<div class="pkg-item-name">${codesHtml}${pkgName(p)}</div>`+
      `<div class="pkg-item-meta">${p.length} × ${p.width} × ${p.height} cm${priceStr}</div>`;
    div.addEventListener('click', () => selectPackaging(p));
    frag.appendChild(div);
  });
  list.appendChild(frag);
}

function openPkgModal(){
  el('pkgModal').style.display = 'flex';
  el('pkgSearch').value = '';
  renderPkgList('');
  setTimeout(()=>el('pkgSearch').focus(), 60);
}

function closePkgModal(){
  el('pkgModal').style.display = 'none';
}

function selectPackaging(p){
  selectedPackaging = p;
  closePkgModal();
  // fill dimensions and lock
  lengthEl.value = p.length; widthEl.value = p.width; heightEl.value = p.height;
  [lengthEl, widthEl, heightEl].forEach(i=>{
    i.readOnly = true; i.tabIndex = -1; i.setAttribute('aria-disabled','true');
  });
  // update button
  el('pkgBtn').classList.add('selected');
  el('pkgBtnIcon').textContent = '📦';
  el('pkgBtnLabel').textContent = pkgName(p) + ` (${p.length}×${p.width}×${p.height} cm)`;
  el('pkgClear').style.display = '';
  // update formula
  if(fL) fL.textContent = p.length;
  if(fW) fW.textContent = p.width;
  if(fH) fH.textContent = p.height;
  compute();
}

function clearPackaging(){
  selectedPackaging = null;
  if(sendMode !== 'docs'){
    [lengthEl, widthEl, heightEl].forEach(i=>{
      i.readOnly = false; i.removeAttribute('tabIndex'); i.removeAttribute('aria-disabled');
    });
    lengthEl.value = ''; widthEl.value = ''; heightEl.value = '';
  }
  const t = T[htmlEl.lang]||T.uk;
  el('pkgBtn').classList.remove('selected');
  el('pkgBtnIcon').textContent = '＋';
  el('pkgBtnLabel').textContent = pkgBtnText();
  el('pkgClear').style.display = 'none';
  if(fL) fL.textContent = t.formulaWords.l;
  if(fW) fW.textContent = t.formulaWords.w;
  if(fH) fH.textContent = t.formulaWords.h;
  compute();
}

el('pkgBtn').addEventListener('click', e => {
  if(e.target.id === 'pkgClear' || e.target.closest && e.target.closest('#pkgClear')){
    clearPackaging(); return;
  }
  openPkgModal();
});
el('pkgModalClose').addEventListener('click', closePkgModal);
el('pkgModal').addEventListener('click', e => { if(e.target === el('pkgModal')) closePkgModal(); });
el('pkgSearch').addEventListener('input', e => renderPkgList(e.target.value));
document.addEventListener('keydown', e => { if(e.key==='Escape' && el('pkgModal').style.display!=='none') closePkgModal(); });

// clear packaging when switching to docs mode (docs fixes its own dims)
const _origSetMode = setMode;
// ── end packaging ───────────────────────────────────────────

document.addEventListener('DOMContentLoaded',async ()=>{
  const saved = (()=>{ try{return localStorage.getItem('npcalc_dark')}catch(e){return null} })();
  const preferDark = saved===null ? (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) : saved==='1';
  setTheme(preferDark);
  const defaultLang = langSelect.value || 'uk';
  applyTranslations(defaultLang);
  if(window.matchMedia && window.matchMedia('(max-width:768px)').matches){ countryInput.style.display='none'; el('label-country').style.display='none'; countrySelect.style.display='block'; el('label-countrySelect').style.display='block'; } else { countrySelect.style.display='none'; el('label-countrySelect').style.display='none'; }
  await loadRatesForLang(defaultLang);
  await loadPresenceCountries();
  await loadPackaging();
  setMode('parcel');
});
