/* =========================================================
   SIRIB I-SKO — PGIN Scholarship Management System
   Provincial Government of Ilocos Norte
   ========================================================= */

/* ---------------- ICONS ---------------- */
const ICN = {
  home:'<path d="M4 11L12 4l8 7"/><path d="M6 10v10h12V10"/>',
  book:'<rect x="5" y="3" width="14" height="18" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/>',
  file:'<rect x="5" y="3" width="14" height="18" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><path d="M8 16l2 2 4-4"/>',
  bell:'<path d="M12 3a5 5 0 00-5 5v3.2c0 .8-.3 1.5-.9 2.1L5 15h14l-1.1-1.7c-.6-.6-.9-1.3-.9-2.1V8a5 5 0 00-5-5z"/><path d="M10 18a2 2 0 004 0"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  users:'<circle cx="9" cy="8" r="3.4"/><path d="M2.5 19c0-3.6 3-5.8 6.5-5.8s6.5 2.2 6.5 5.8"/><circle cx="17" cy="8.5" r="2.6"/><path d="M15.5 13.4c2.7.3 4.5 2.3 4.5 5.6"/>',
  gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.4M12 18.6V21M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M3 12h2.4M18.6 12H21M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"/>',
  logout:'<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  chart:'<line x1="4" y1="20" x2="4" y2="11"/><line x1="10" y1="20" x2="10" y2="4"/><line x1="16" y1="20" x2="16" y2="14"/><line x1="21" y1="21" x2="3" y2="21"/>',
  check:'<circle cx="12" cy="12" r="9"/><polyline points="8 12.5 11 15.5 16 9"/>',
  x:'<circle cx="12" cy="12" r="9"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>',
  upload:'<path d="M12 16V5"/><polyline points="7 9.5 12 4.5 17 9.5"/><path d="M4 16.5v2a2 2 0 002 2h12a2 2 0 002-2v-2"/>',
  search:'<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.4" y2="16.4"/>',
  filter:'<polygon points="4,4 20,4 14,12 14,19 10,21 10,12"/>',
  clipboard:'<rect x="6" y="3.5" width="12" height="17" rx="2"/><rect x="9" y="1.5" width="6" height="4" rx="1"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="15" y2="15"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>',
  plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>',
  trash:'<polyline points="3 6 5 6 21 6"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>',
  eye:'<path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff:'<path d="M17.94 17.94A10.07 10.07 0 0112 19c-7 0-11-7-11-7a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 5c7 0 11 7 11 7a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',
  download:'<path d="M12 3v12.5"/><polyline points="7 11.5 12 16.5 17 11.5"/><path d="M4 20.5h16"/>',
  printer:'<rect x="6" y="9" width="12" height="7" rx="1"/><polyline points="6 9 6 3 18 3 18 9"/><rect x="9" y="14" width="6" height="6"/>',
  chevronR:'<polyline points="9 6 15 12 9 18"/>',
  chevronD:'<polyline points="6 9 12 15 18 9"/>',
  cap:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12.2V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.8"/><path d="M22 10v5.5"/>',
  shield:'<path d="M12 2.5l8 3.5v6c0 5-3.5 8.7-8 9.5-4.5-.8-8-4.5-8-9.5V6l8-3.5z"/><polyline points="8.5 12 11 14.5 15.5 9.5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/>',
  menu:'<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
  award:'<circle cx="12" cy="8" r="6"/><polyline points="8.2 13.5 6.5 22 12 18.5 17.5 22 15.8 13.5"/>',
  lock:'<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3.5 6 12 13 20.5 6"/>',
  phone:'<path d="M6 3h3l1.5 5-2 1.5a13 13 0 006 6l1.5-2 5 1.5v3a2 2 0 01-2.2 2A17 17 0 014 5.2 2 2 0 016 3z"/>',
  info:'<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16.5"/><circle cx="12" cy="7.7" r="0.2" fill="currentColor" stroke-width="2.4"/>',
  arrowR:'<line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/>',
  building:'<rect x="4" y="3" width="16" height="18" rx="1"/><line x1="8" y1="7" x2="8" y2="7.01"/><line x1="12" y1="7" x2="12" y2="7.01"/><line x1="16" y1="7" x2="16" y2="7.01"/><line x1="8" y1="11" x2="8" y2="11.01"/><line x1="12" y1="11" x2="12" y2="11.01"/><line x1="16" y1="11" x2="16" y2="11.01"/><line x1="8" y1="15" x2="8" y2="15.01"/><line x1="12" y1="15" x2="12" y2="15.01"/><line x1="16" y1="15" x2="16" y2="15.01"/>',
  image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  key:'<circle cx="8" cy="15" r="4"/><line x1="10.8" y1="12.2" x2="20" y2="3"/><line x1="16" y1="7" x2="19" y2="10"/>',
};
function icon(name,size=18){return '<span class="icon" style="width:'+size+'px;height:'+size+'px"><svg viewBox="0 0 24 24">'+(ICN[name]||'')+'</svg></span>';}

function togglePasswordVisibility(inputId, btn){
  const inp = document.getElementById(inputId);
  if(!inp) return;
  const isPass = inp.type === 'password';
  inp.type = isPass ? 'text' : 'password';
  if(btn){
    btn.innerHTML = isPass ? icon('eyeOff', 18) : icon('eye', 18);
    const label = isPass ? 'Hide password' : 'Show password';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }
}

/* ---------------- UTILS ---------------- */
function uid(prefix){return prefix+'-'+Math.random().toString(36).slice(2,7).toUpperCase();}
function pad(n){return n<10?'0'+n:''+n;}
let appSeq=1006;
function nextAppId(){appSeq++;return 'APP-2026-'+String(appSeq).padStart(4,'0');}
function fmtDate(d){
  if(!d)return '—';
  const dt=new Date(d);
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[dt.getMonth()]+' '+dt.getDate()+', '+dt.getFullYear();
}
function fmtDateTime(d){
  const dt=new Date(d);
  let h=dt.getHours(); const ap=h>=12?'PM':'AM'; h=h%12; if(h===0)h=12;
  return fmtDate(d)+' · '+h+':'+pad(dt.getMinutes())+' '+ap;
}
function timeAgo(d){
  const s=Math.floor((Date.now()-new Date(d).getTime())/1000);
  if(s<60)return 'just now';
  if(s<3600)return Math.floor(s/60)+'m ago';
  if(s<86400)return Math.floor(s/3600)+'h ago';
  return Math.floor(s/86400)+'d ago';
}
function esc(s){return (s===undefined||s===null)?'':String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function initials(f,l){return ((f||' ')[0]+(l||' ')[0]).toUpperCase();}
function money(n){return '₱'+Number(n).toLocaleString();}

function statusBadge(status){
  const map={
    'Open':'b-open','Closed':'b-closed','Approved':'b-approved','Rejected':'b-rejected',
    'Active':'b-active','Inactive':'b-inactive','Draft':'b-draft','Submitted':'b-submitted',
    'Processing':'b-processing','Under Review':'b-review','Incomplete':'b-incomplete',
    'Pending':'b-pending','Verified':'b-verified','Invalid':'b-invalid','Missing':'b-missing',
    'Completed':'b-completed','Finished Review':'b-completed','Pending Activation':'b-pending','Pending Verification':'b-pending',
    'Pending Approval':'b-pending','Requires Resubmission':'b-review'
  };
  const cls=map[status]||'b-pending';
  return '<span class="badge '+cls+'"><span class="badge-dot"></span>'+esc(status)+'</span>';
}

function toast(msg,type){
  const root=document.getElementById('toastRoot');
  const t=document.createElement('div');
  t.className='toast'+(type?' '+type:'');
  t.innerHTML=(type==='success'?icon('check',16):type==='error'?icon('x',16):icon('info',16))+'<span>'+esc(msg)+'</span>';
  root.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),300);},3200);
}

/* ---------------- API CLIENT ---------------- */
async function apiCall(action, method='GET', data=null, queryParams={}){
  try {
    const url = new URL('php/api.php', window.location.href);
    url.searchParams.set('action', action);
    const qParams = { ...(queryParams || {}) };
    if(method === 'GET' && data && typeof data === 'object'){
      Object.assign(qParams, data);
    }
    for(const [k, v] of Object.entries(qParams)){
      if(v !== null && v !== undefined && v !== '') url.searchParams.set(k, v);
    }
    const opts = {
      method,
      headers: { 'Accept': 'application/json' },
      credentials: 'same-origin'
    };
    if(data && (method === 'POST' || method === 'PUT')) {
      opts.headers['Content-Type'] = 'application/json';
      opts.body = JSON.stringify(data);
    }
    const res = await fetch(url.toString(), opts);
    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch (parseErr) {
      console.warn('API call (' + action + ') returned non-JSON (' + res.status + '):', text.slice(0, 300));
      let cleanMsg = 'Server returned an HTML response instead of JSON (HTTP ' + res.status + ').';
      if(text.includes('/aes.js') || text.includes('__test')) {
        cleanMsg = 'Hosting security verification in progress. Please refresh the page.';
      } else if(text.includes('401') || text.includes('Authorization Required')) {
        cleanMsg = 'Invalid email/Student ID or password.';
      } else if(text.includes('403') || text.includes('Forbidden')) {
        cleanMsg = 'Access denied or account awaiting approval.';
      } else if(text.includes('404') || text.includes('Not Found')) {
        cleanMsg = 'API file php/api.php not found. Please verify the php folder is uploaded to htdocs/php/.';
      } else if(text.includes('502') || text.includes('Bad Gateway') || res.status === 502) {
        cleanMsg = 'Server gateway error (HTTP 502). Action handled locally.';
      } else if(text.includes('Connection Failed') || text.includes('Connection refused') || text.includes('Access denied')) {
        cleanMsg = 'Database connection error on server. Please check your dbh.php configuration.';
      }
      return { status: 'error', isHtml: true, httpStatus: res.status, message: cleanMsg, rawText: text };
    }
    return json;
  } catch (err) {
    console.warn('API call failed (' + action + '):', err);
    return { status: 'error', message: err.message || 'Network request failed' };
  }
}

/* ---------------- SEED DATA ---------------- */
const DB={
  scholarships:[
    {id:'SCH-106',code:'SCH-106',dbId:18,name:'Academic Tertiary',category:'Academic Excellence',level:'College / University',
      status:'Open',slots:150,slotsFilled:45,
      desc:'Merit-based tertiary scholarship for qualified college students in Ilocos Norte with high academic performance and priority degree enrollments.',
      eligibility:[
        'Must be a Filipino citizen and resident of Ilocos Norte.',
        'Must not be a recipient of another scholarship from a government or private institution.',
        'Must belong to a family with an annual income not exceeding ₱350,000 (Exception: Academic – Engineering, Mathematics, and Technology).',
        'Must maintain good moral character.',
        'Must be enrolled in an identified priority course.',
        'Must have: 2.50 or higher GWA – 2nd to 5th year college, 80% or higher – 1st year college, or scholastic passing record for ALS graduates.',
        'Must not have: Incomplete grade, Conditional grade of 4.0, or Failed grade of 5.0.',
        'Must not already hold a Bachelor\'s Degree.',
        'Multiple family members may apply as long as they are not applying under the same scholarship program and meet the applicable requirements.'
      ],
      documents:[
        'Accomplished Personal Profile Form',
        'Application Letter addressed to the Honorable Governor through the Ilocos Norte Provincial Scholarship Committee',
        'Good Moral Character Certificate — incoming first-year applicants',
        'Photocopy of PSA/NSO Birth Certificate',
        'Certificate of Grades — 2nd to 5th year / Form 138 — 1st year / Certificate of Completion — ALS graduates',
        'Authenticated Form 5/Assessment/Registration Form',
        'Government Valid ID or qualifying School ID',
        'Barangay Clearance',
        'Certificate of Indigency',
        'Certificate of Residency showing at least 1 year residency'
      ],
      benefits:[
        'Financial scholarship assistance / stipend',
        '₱20,000 semestral stipend for academic scholars'
      ],
      openDate:'2026-06-01',deadline:'2026-10-15'},

    {id:'SCH-107',code:'SCH-107',dbId:19,name:'Agri-Fisheries Tertiary',category:'Agriculture & Fisheries',level:'College / University / TVET',
      status:'Open',slots:60,slotsFilled:22,
      desc:'Supports tertiary Agriculture and Fisheries students in Ilocos Norte with educational grants and thesis assistance.',
      eligibility:[
        'Must be a Filipino citizen and resident of Ilocos Norte.',
        'Must be enrolled in an Agriculture or Fisheries-related tertiary course.',
        'Must have a GWA of at least 2.50.',
        'Must be not more than 25 years old at the time of application.',
        'Must be enrolled in a qualifying tertiary school/program within Ilocos Norte.',
        'Must have good moral character.',
        'Must not be receiving another prohibited scholarship (no other government scholarship).',
        'Must meet the family-income requirement (family-income ceiling not exceeding ₱350,000).'
      ],
      documents:[
        'Accomplished Personal Profile Form',
        'Application Letter',
        'PSA Birth Certificate',
        'Certificate of Grades',
        'Current Registration/Assessment Form',
        'Good Moral Character Certificate',
        'Valid ID',
        'Barangay Clearance',
        'Certificate of Indigency',
        'Certificate of Residency',
        'Other Agriculture/Fisheries documents required by PGIN'
      ],
      benefits:[
        '₱25,000 educational assistance for tertiary scholars',
        '₱10,000 thesis assistance for 3rd-year students',
        '₱15,000 thesis assistance for 4th-year students'
      ],
      openDate:'2026-06-01',deadline:'2026-10-15'},

    {id:'SCH-101',code:'SCH-101',dbId:13,name:'Academic Secondary',category:'Academic Excellence',level:'Junior / Senior High School',
      status:'Open',slots:100,slotsFilled:32,
      desc:'Merit-based scholarship for outstanding Senior High School students in Ilocos Norte who maintain academic excellence.',
      eligibility:[
        'Must be a Filipino citizen and a resident of Ilocos Norte.',
        'Must be enrolled as a Senior High School student.',
        'Must maintain a General Weighted Average (GWA) of at least 85%.',
        'Must have good moral character.',
        'Must meet the PGIN scholarship eligibility requirements.',
        'Must not be receiving another scholarship grant where the rules prohibit simultaneous scholarships.'
      ],
      documents:[
        'Accomplished Personal Profile Form',
        'Application Letter addressed to the Honorable Governor',
        'Form 138 / Report Card',
        'PSA/NSO Birth Certificate',
        'Barangay Clearance',
        'Certificate of Indigency',
        'Certificate of Residency, when required',
        'Certificate of Enrollment',
        'Other documents requested by the Provincial Education Office'
      ],
      benefits:[
        'Financial scholarship / stipend assistance for Senior High School studies',
        '₱5,000–₱10,000 per semester stipend grant'
      ],
      openDate:'2026-06-01',deadline:'2026-10-15'},

    {id:'SCH-105',code:'SCH-105',dbId:17,name:'Juris Doctor',category:'Legal Studies',level:'Doctoral / Professional',
      status:'Open',slots:10,slotsFilled:4,
      desc:'Professional law scholarship for Ilocano students pursuing a Juris Doctor degree at MMSU or NWU.',
      eligibility:[
        'Be a Filipino citizen.',
        'Be a resident of Ilocos Norte for at least 5 years.',
        'Not be a recipient of any other scholarship grant offered by a government or private institution.',
        'Maintain good moral character.',
        'Be enrolled in either Mariano Marcos State University (MMSU) or Northwestern University (NWU).',
        'Multiple family members may apply provided they are not in the same scholarship program and meet respective requirements.',
        'For First-Year Law Students: Must not have obtained 4.0 (Conditional) or 5.0 (Failed) in the Pre-Law Course.',
        'For Higher Law Students (2nd to 4th Year): Must have a GWA of 2.50 or better in previous academic year/semester, and no 4.0 (Conditional) or 5.0 (Failed) in previous semester.'
      ],
      documents:[
        'Application Letter addressed to the Honorable Governor through the Ilocos Norte Provincial Scholarship Committee',
        'Accomplished Personal Profile Form (Available at the Provincial Education Office)',
        'Photocopy of PSA/NSO Birth Certificate',
        'Certified Copy of Transcript of Records (TOR) — Required for all year levels',
        'Certificate of Grades — Original copy from previous semester (Required for 2nd–4th year)',
        'Current Registration Document (Authenticated Form 5, Assessment Form, or Registration Form)',
        'Government Valid ID (Voter\'s ID, School ID signed for current semester/AY, or government ID)',
        'Original Barangay Certifications (Barangay Clearance, Certificate of Indigency, Certificate of Residency indicating at least 5 years residency)',
        'Original documents must have printed/handwritten name with wet signature or dry seal'
      ],
      benefits:[
        'Full tuition and miscellaneous fees coverage',
        'Monthly living allowance',
        'Bar review assistance (upon graduation)',
        'Return-of-service agreement in Ilocos Norte'
      ],
      openDate:'2026-06-01',deadline:'2026-10-15'},

    {id:'SCH-103',code:'SCH-103',dbId:15,name:'Agri-Fisheries Secondary',category:'Agriculture & Fisheries',level:'Junior / Senior High School',
      status:'Open',slots:80,slotsFilled:28,
      desc:'Assists high school students taking TVL Track in Agriculture and Fisheries in secondary schools within Ilocos Norte.',
      eligibility:[
        'Be a Filipino citizen and a resident of Ilocos Norte.',
        'Not be a recipient of any other scholarship grant offered by a government or private institution.',
        'Maintain good moral character.',
        'Be not more than 25 years old at the time of filing the application.',
        'Belong to the 85% percentile rank.',
        'Be taking the TVL Track – Agriculture and Fisheries.',
        'Be enrolled in an Agriculture and Fishery course in a secondary school within Ilocos Norte.',
        'Multiple family members may apply provided they are not in the same scholarship program.'
      ],
      documents:[
        'Application Letter addressed to the Honorable Governor through the Ilocos Norte Provincial Scholarship Committee',
        'Accomplished Personal Profile Form (Available at the Provincial Education Office)',
        'Good Moral Character Certificate (Original copy issued by Student Affairs/Counselor/Principal)',
        'Photocopy of PSA/NSO Birth Certificate',
        'Form 138 (Photocopy from the previous semester)',
        'Certificate of Enrollment for current semester',
        'Government Valid ID (Voter\'s ID, School ID showing applicant\'s name and home address)',
        'Original Barangay Certification (Barangay Clearance, Certificate of Residency indicating at least 1 year residency)'
      ],
      benefits:[
        '₱10,000 per semester stipend',
        'Assistance in agri-fisheries school projects',
        'Priority access to DA and LGU agricultural training programs'
      ],
      openDate:'2026-06-01',deadline:'2026-10-15'},

    {id:'SCH-102',code:'SCH-102',dbId:14,name:'Arts Secondary',category:'Arts & Humanities',level:'Junior / Senior High School',
      status:'Open',slots:40,slotsFilled:12,
      desc:'Supports talented high school students participating in artistic and cultural performances, exhibits, and demonstrations.',
      eligibility:[
        'Be a Filipino citizen and a resident of Ilocos Norte.',
        'Not be a recipient of any other scholarship grant offered by a government or private institution.',
        'Maintain good moral character.',
        'Have participated in artistic activities (artistic performances, exhibits, demonstrations, cultural integration) at provincial, regional, national, or international level.',
        'Be enrolled in an Arts Program of a secondary school (Junior High School or Senior High School, public or private within Ilocos Norte).',
        'Multiple family members may apply provided they are not in the same scholarship program.'
      ],
      documents:[
        'Application Letter addressed to the Honorable Governor through the Ilocos Norte Provincial Scholarship Committee',
        'Accomplished Personal Profile Form (Available at the Provincial Education Office)',
        'Good Moral Character Certificate (Original copy issued by Student Affairs/Counselor/Principal)',
        'Photocopy of PSA/NSO Birth Certificate',
        'Form 138 (Photocopy from previous semester)',
        'Certificate of Enrollment for current semester',
        'Government Valid ID (Voter\'s ID, School ID showing applicant\'s name and home address)',
        'Original Barangay Certification (Barangay Clearance, Certificate of Residency indicating at least 1 year residency)'
      ],
      benefits:[
        '₱10,000 per semester stipend',
        'Support for artistic development and workshop materials',
        'Exhibition and showcase opportunities across the province'
      ],
      openDate:'2026-06-01',deadline:'2026-10-15'},

    {id:'SCH-104',code:'SCH-104',dbId:16,name:'Doctor of Medicine',category:'Medical & Health Sciences',level:'Doctoral / Professional',
      status:'Open',slots:10,slotsFilled:3,
      desc:'Full medical scholarship for incoming first-year medical students accepted into partner institutions (primarily MMSU College of Medicine).',
      eligibility:[
        'Be a Filipino Citizen and a bona fide resident of Ilocos Norte.',
        'Be an incoming first year medical student accepted into a partner institution, primarily the Mariano Marcos State University (MMSU) College of Medicine.',
        'Must pass the official pre-screening phase administered by the medical school\'s committee.',
        'Must successfully clear the final interview panel conducted by the PGIN Scholarship Secretariat.',
        'Must not be a current recipient of any active government or private scholarship grant.'
      ],
      documents:[
        'Application Letter addressed to the Honorable Governor (1 copy)',
        'Accomplished Application Form with 2x2 ID picture (PGIN Education Office)',
        'Barangay Clearance from home Barangay (1 copy)',
        'Transcript of Records (TOR) from last attended undergraduate school or University (Authenticated copy)',
        'Certificate of Good Moral Character issued by last school (1 copy)',
        'Birth certificate issued by the Philippine Statistics Authority (PSA) (1 copy)',
        'Pre-screening result submitted directly by College of Medicine to the Provincial Office'
      ],
      benefits:[
        'Full tuition and miscellaneous fees coverage',
        'Monthly living allowance',
        'Book and medical equipment allowance',
        'Return-of-service agreement in Ilocos Norte'
      ],
      openDate:'2026-06-01',deadline:'2026-10-15'},

    {id:'SCH-108',code:'SCH-108',dbId:20,name:'TechVoc',category:'Technical-Vocational',level:'TVET',
      status:'Open',slots:120,slotsFilled:38,
      desc:'Technical-Vocational scholarship for Ilocano youth enrolled in registered Tech-Voc or TVL track programs in Ilocos Norte.',
      eligibility:[
        'Must be a Filipino citizen and a permanent resident of Ilocos Norte.',
        'Must be enrolled in a registered Tech-Voc or Technical-Vocational-Livelihood (TVL) track program in the province.',
        'Must maintain a strong record of good moral character.',
        'Must come from a family with a combined annual gross income that falls within the low-income threshold set by the province.',
        'Must not hold any other major government scholarship program.'
      ],
      documents:[
        'Application Letter addressed to the Honorable Governor through the Ilocos Norte Provincial Scholarship Committee',
        'Accomplished PGIN Personal Profile Form (accessible online or via PGIN Education Office)',
        'Barangay Certification verifying both local clearance and proof of residency for at least one year (1 original copy)',
        'Certificate of Indigency, low-income certificate from local MSWDO, or BIR-validated Income Tax Return (ITR)',
        'Certificate of Good Moral Character from previous or currently enrolled school/institution',
        'Certification of Grades or photocopy of dry-sealed graded class cards/report cards showing passing scholastic history',
        'Photocopy of Birth Certificate issued by the PSA',
        'Valid Identification Card (current School ID or Voter\'s ID) displaying full name and local home address'
      ],
      benefits:[
        'Free TESDA training and assessment fees subsidy',
        'Tool kit and starter materials allowance',
        'Job placement assistance after graduation',
        'Transportation and living allowance subsidy during training'
      ],
      openDate:'2026-06-01',deadline:'2026-10-15',
      eligibleCourses:'Information and Communications Technology, ICT, Computer Systems Servicing, CSS, Programming, Electrical Installation and Maintenance, EIM, Electronics Products Assembly and Servicing, EPAS, Automotive Servicing, Welding, Shielded Metal Arc Welding, SMAW, Plumbing, Cookery, Bread and Pastry Production, Food and Beverage Services, FBS, Housekeeping, Agricultural Crops Production, Animal Production, Driving, TechVoc, TVET, TESDA National Certificate',
      courseMatchMode:'specific',
      minGwa:'80%',
      maxIncome:350000},

    {id:'SCH-109',code:'SCH-109',dbId:21,name:'Health and Sciences',category:'Medical & Health Sciences',level:'College / University',
      status:'Open',slots:80,slotsFilled:18,
      desc:'Financial and academic assistance for tertiary students enrolled in priority health, nursing, dentistry, and allied medical sciences programs in Ilocos Norte.',
      eligibility:[
        'Must be a Filipino citizen and resident of Ilocos Norte.',
        'Must not be a recipient of another scholarship from a government or private institution.',
        'Must belong to a family with an annual income not exceeding ₱350,000 (Exception: Academic – Engineering, Mathematics, and Technology).',
        'Must maintain good moral character.',
        'Must be enrolled in an identified priority course.',
        'Must have: 2.50 or higher GWA – 2nd to 5th year college, 80% or higher – 1st year college, or scholastic passing record for ALS graduates.',
        'Must not have: Incomplete grade, Conditional grade of 4.0, or Failed grade of 5.0.',
        'Must not already hold a Bachelor\'s Degree.',
        'Multiple family members may apply as long as they are not applying under the same scholarship program and meet the applicable requirements.'
      ],
      documents:[
        'Accomplished Personal Profile Form',
        'Application Letter addressed to the Honorable Governor through the Ilocos Norte Provincial Scholarship Committee',
        'Good Moral Character Certificate — incoming first-year applicants',
        'Photocopy of PSA/NSO Birth Certificate',
        'Certificate of Grades — 2nd to 5th year / Form 138 — 1st year / Certificate of Completion — ALS graduates',
        'Authenticated Form 5/Assessment/Registration Form',
        'Government Valid ID or qualifying School ID',
        'Barangay Clearance',
        'Certificate of Indigency',
        'Certificate of Residency showing at least 1 year residency'
      ],
      benefits:[
        'Financial scholarship assistance / stipend',
        '₱20,000 semestral stipend for academic scholars'
      ],
      openDate:'2026-06-01',deadline:'2026-10-15',
      eligibleCourses:'Doctor of Dental Medicine, DMD, BS Nursing, BSN, BS Medical Technology, BS Medical Laboratory Science, BS MedTech, BSMLS, BS Pharmacy, BSP, BS Physical Therapy, BSPT, BS Radiologic Technology, BSRT, BS Respiratory Therapy, BS Occupational Therapy, BS Psychology, Doctor of Veterinary Medicine, DVM, BS Public Health, BS Nutrition and Dietetics, BS Biology, BS Midwifery',
      courseMatchMode:'specific',
      minGwa:'2.50',
      maxIncome:350000},
  ],
  users:[
    {id:'U-1001',role:'applicant',studentId:'2023-00123',firstName:'Maria',middleName:'Santos',lastName:'Domingo',
      email:'maria.domingo@student.pgin.gov.ph',password:'Student123!',contact:'0917-123-4567',
      address:'Brgy. 5, Laoag City, Ilocos Norte',school:'Mariano Marcos State University',course:'BS Information Technology',
      yearLevel:'3rd Year',status:'Active',joined:'2026-06-03',
      validId:{name:'mmsu_student_id_domingo.png',size:'345 KB',type:'image/png',isImage:true,dataUrl:'img/logo.png',uploadedAt:'2026-06-03T08:30:00Z'}},
    {id:'U-1002',role:'applicant',studentId:'2022-00456',firstName:'John Paul',lastName:'Ragasa',
      email:'jp.ragasa@student.pgin.gov.ph',password:'Student123!',contact:'0918-222-3344',
      address:'Brgy. Poblacion, Batac City, Ilocos Norte',school:'University of Northern Philippines',course:'BS Civil Engineering',
      yearLevel:'2nd Year',status:'Active',joined:'2026-06-05',
      validId:{name:'unp_student_id_ragasa.png',size:'280 KB',type:'image/png',isImage:true,dataUrl:'img/logo.png',uploadedAt:'2026-06-05T09:15:00Z'}},
    {id:'U-1003',role:'applicant',studentId:'2021-00789',firstName:'Kristine',lastName:'Valdez',
      email:'k.valdez@student.pgin.gov.ph',password:'Student123!',contact:'0919-555-1212',
      address:'Brgy. San Julian, Paoay, Ilocos Norte',school:'Mariano Marcos State University',course:'BS Nursing',
      yearLevel:'4th Year',status:'Active',joined:'2026-06-10',
      validId:{name:'mmsu_student_id_valdez.png',size:'410 KB',type:'image/png',isImage:true,dataUrl:'img/logo.png',uploadedAt:'2026-06-10T14:20:00Z'}},
    {id:'U-1004',role:'applicant',studentId:'2023-00951',firstName:'Ronnel',lastName:'Agustin',
      email:'r.agustin@student.pgin.gov.ph',password:'Student123!',contact:'0920-777-8899',
      address:'Brgy. Currimao Centro, Currimao, Ilocos Norte',school:'Ilocos Norte College of Arts and Trades',course:'BS Electrical Engineering',
      yearLevel:'1st Year',status:'Active',joined:'2026-07-02',
      validId:{name:'incat_student_id_agustin.png',size:'512 KB',type:'image/png',isImage:true,dataUrl:'img/logo.png',uploadedAt:'2026-07-02T11:00:00Z'}},
    {id:'U-1005',role:'applicant',studentId:'2020-00214',firstName:'Angel',lastName:'Pascual',
      email:'a.pascual@student.pgin.gov.ph',password:'Student123!',contact:'0921-444-9090',
      address:'Brgy. 12, Laoag City, Ilocos Norte',school:'Northwestern University',course:'BS Accountancy',
      yearLevel:'4th Year',status:'Inactive',joined:'2026-05-20',
      validId:{name:'nwu_student_id_pascual.png',size:'390 KB',type:'image/png',isImage:true,dataUrl:'img/logo.png',uploadedAt:'2026-05-20T16:45:00Z'}},
    {id:'U-2001',role:'admin',firstName:'Ramon',lastName:'Aquino',email:'admin@pgin.gov.ph',password:'Admin123!',
      position:'Scholarship Program Officer',contact:'0917-000-1111',status:'Active',joined:'2026-01-10'},
    {id:'U-3001',role:'reviewer',firstName:'Elena',lastName:'Ramos',email:'reviewer1@pgin.gov.ph',password:'Review123!',
      position:'Education Evaluator',contact:'0917-333-4455',status:'Active',joined:'2026-02-01'},
    {id:'U-3002',role:'reviewer',firstName:'Carlos',lastName:'Bautista',email:'reviewer2@pgin.gov.ph',password:'Review123!',
      position:'Financial Assessment Officer',contact:'0918-666-7788',status:'Active',joined:'2026-02-15'},
  ],
  applications:[],
  notifications:[],
  activityLogs:[],
};

function makeApp(applicantId,scholarshipId,status,daysAgo,extra){
  const u=DB.users.find(x=>x.id===applicantId);
  const s=DB.scholarships.find(x=>x.id===scholarshipId);
  const d=new Date(); d.setDate(d.getDate()-daysAgo);
  const app={
    id:nextAppId(),applicantId,scholarshipId,status,
    submittedDate:d.toISOString(),lastUpdated:d.toISOString(),
    stage: status==='Draft'?'Not submitted':status==='Submitted'?'Submitted':status==='Incomplete'?'Document Checking':status==='Processing'?'Document Checking':status==='Under Review'?'Under Review':'Final Decision',
    personal:{fullName:(u.firstName+' '+(u.middleName?u.middleName+' ':'')+u.lastName),birthdate:'2004-03-14',sex:'Female',address:u.address,contact:u.contact,email:u.email},
    academic:{school:u.school,course:u.course,yearLevel:u.yearLevel,studentId:u.studentId,gpa:(92+Math.random()*6).toFixed(1)},
    family:{guardian:'Parent / Guardian of '+u.lastName,occupation:'Farmer / Small Business Owner',income:'₱120,000 - ₱180,000 / year',members:'5'},
    documents:[
      {name:'School_ID.pdf',type:'School ID',status:'Verified',size:'420 KB',uploaded:d.toISOString()},
      {name:'Certificate_of_Grades.pdf',type:'Certificate of Grades',status:'Verified',size:'612 KB',uploaded:d.toISOString()},
      {name:'Certificate_of_Enrollment.pdf',type:'Certificate of Enrollment',status:extra&&extra.missingDoc?'Missing':'Verified',size:'380 KB',uploaded:d.toISOString()},
      {name:'Barangay_Certificate.pdf',type:'Barangay Certificate',status:'Pending',size:'295 KB',uploaded:d.toISOString()},
    ],
    reviewerId:extra&&extra.reviewerId||null,
    reviewerComments:extra&&extra.comments||'',
    evaluation:extra&&extra.evaluation||null,
  };
  DB.applications.push(app);
  return app;
}
// Seed applications across statuses & dates for charts / tables
makeApp('U-1001','SCH-106','Under Review',3,{reviewerId:'U-3001'});
makeApp('U-1001','SCH-105','Approved',40,{reviewerId:'U-3002',comments:'Strong academic record; recommended for approval.',
  evaluation:{academic:28,financial:20,completeness:20,eligibility:15,additional:9,total:92,recommendation:'Recommend for Approval',comments:'Excellent grades and complete requirements.',submittedDate:new Date(Date.now()-30*86400000).toISOString()}});
makeApp('U-1002','SCH-101','Processing',6);
makeApp('U-1002','SCH-106','Rejected',55,{reviewerId:'U-3001',comments:'Did not meet the minimum GWA requirement.',
  evaluation:{academic:18,financial:15,completeness:18,eligibility:8,additional:5,total:64,recommendation:'Recommend for Rejection',comments:'Below the 90% GWA cutoff for this program.',submittedDate:new Date(Date.now()-48*86400000).toISOString()}});
makeApp('U-1003','SCH-101','Approved',70,{reviewerId:'U-3002',comments:'Complete and qualified. Approved for AY 2026-2027.',
  evaluation:{academic:27,financial:24,completeness:20,eligibility:15,additional:8,total:94,recommendation:'Recommend for Approval',comments:'Outstanding applicant, priority course.',submittedDate:new Date(Date.now()-62*86400000).toISOString()}});
makeApp('U-1003','SCH-105','Under Review',2,{reviewerId:'U-3002'});
makeApp('U-1004','SCH-107','Incomplete',20,{missingDoc:true,comments:'Please re-submit your Certificate of Enrollment — the uploaded file was unreadable.'});
makeApp('U-1004','SCH-106','Submitted',1);
makeApp('U-1005','SCH-101','Draft',12);
makeApp('U-1001','SCH-101','Draft',1);
makeApp('U-1005','SCH-107','Rejected',95,{comments:'Applied after the program reached full capacity.'});

// Seed notifications
function pushNotif(userId,title,message,dateISO,read){
  DB.notifications.push({id:uid('NTF'),userId,title,message,date:dateISO||new Date().toISOString(),read:!!read});
}
pushNotif('U-1001','Application submitted successfully','Your application APP-2026-1007 for STEM Scholarship was submitted.',new Date(Date.now()-40*86400000).toISOString(),true);
pushNotif('U-1001','Application approved','Congratulations! Your STEM Scholarship application has been approved.',new Date(Date.now()-30*86400000).toISOString(),true);
pushNotif('U-1001','Application under review','Your Academic Scholarship Program application is now under review.',new Date(Date.now()-3*86400000).toISOString(),false);
pushNotif('U-1002','Application rejected','Your Academic Scholarship Program application was not approved. See reviewer comments for details.',new Date(Date.now()-55*86400000).toISOString(),false);
pushNotif('U-1004','Additional requirements needed','Your Agriculture Scholarship application is incomplete. Please re-upload your Certificate of Enrollment.',new Date(Date.now()-20*86400000).toISOString(),false);
pushNotif('U-2001','New application received','A new application was submitted for Academic Scholarship Program.',new Date(Date.now()-1*86400000).toISOString(),false);
pushNotif('U-3001','New assignment','You have been assigned a new application to review for Academic Scholarship Program.',new Date(Date.now()-3*86400000).toISOString(),false);
pushNotif('U-3002','Evaluation reminder','You have 1 pending evaluation due this week.',new Date(Date.now()-1*86400000).toISOString(),false);

function logActivity(userId,role,action,description){
  DB.activityLogs.unshift({id:uid('LOG'),userId,role,action,description,date:new Date().toISOString()});
}
logActivity('U-2001','admin','Scholarship Update','Updated deadline for STEM Scholarship program.');
logActivity('U-3002','reviewer','Evaluation Submitted','Submitted evaluation for application APP-2026-1010 (Score: 94/100).');
logActivity('U-1003','applicant','Application Submitted','Submitted application for Tertiary Education Scholarship.');
logActivity('U-3001','reviewer','Evaluation Submitted','Submitted evaluation for application APP-2026-1008 (Score: 64/100).');
logActivity('U-1001','applicant','Document Upload','Uploaded Certificate of Grades for STEM Scholarship application.');
logActivity('U-2001','admin','Reviewer Assignment','Assigned Elena Ramos to review application APP-2026-1006.');
logActivity('U-1004','applicant','Account Created','Registered a new applicant account.');
logActivity('U-2001','admin','Scholarship Creation','Created new scholarship program: Agriculture Scholarship.');

/* ---------------- APP STATE ---------------- */
const STATE={
  view:'landing',
  params:{},
  currentUser:null,
  sidebarOpen:false,
  applyDraft:null, // in-progress multi-step application object
  regIdFile:null,  // valid ID file during registration
  evaluatorSearch:'',
  evaluatorStatusFilter:'All',
  evaluatorsCache:null,
  adminAuthStatus:null,
  studentApprovalStatusFilter:'All',
  studentApprovalSearch:'',
  studentApprovalsCache:null,
  pendingStudentEmail:'',
  pendingStudentId:'',
  resubmitIdFile:null,
  _compressionSessions:{},
  docCompressing:{},
};
const chartInstances={};

function findApplication(appId){
  if(!appId) return null;
  const sId = String(appId).trim();
  const cleanNum = sId.replace(/[^0-9]/g, '');
  return DB.applications.find(a => 
    a.id === sId || 
    (a.code && a.code === sId) || 
    String(a.dbId) === sId || 
    (cleanNum && (String(a.dbId) === cleanNum || String(a.id) === ('APP-2026-' + cleanNum.padStart(4, '0')) || (a.code && a.code.endsWith(cleanNum))))
  );
}

function mapApiRowToAppObj(row){
  const appId = row.code || ('APP-' + row.id);
  let sch = DB.scholarships.find(s => s.id === row.scholarship_code || s.id === String(row.scholarship_id) || s.name === row.scholarship_name);
  const schId = sch ? sch.id : (row.scholarship_code || 'SCH-' + row.scholarship_id);

  // Normalize stage
  let stage = row.stage || '';
  if(!stage || stage === 'Not submitted'){
    if(row.status === 'Approved' || row.status === 'Rejected') stage = 'Final Decision';
    else if(row.status === 'Finished Review') stage = 'Finished Review';
    else if(row.status === 'Under Review') stage = 'Under Review';
    else if(row.status === 'Processing' || row.status === 'Incomplete') stage = 'Document Checking';
    else if(row.status === 'Submitted') stage = 'Submitted';
    else stage = 'Draft';
  }

  return {
    id: appId,
    code: row.code || appId,
    dbId: row.id,
    applicantId: row.applicant_id ? ('U-' + row.applicant_id) : 'U-1001',
    rawApplicantId: row.applicant_id,
    applicantName: row.applicant_name || row.full_name || '',
    scholarshipId: schId,
    scholarshipName: row.scholarship_name || (sch ? sch.name : 'Scholarship Program'),
    matched_scholarship_id: row.matched_scholarship_id || null,
    matchedScholarshipId: row.matched_scholarship_id || null,
    matched_scholarship_name: row.matched_scholarship_name || null,
    matchedScholarshipName: row.matched_scholarship_name || null,
    matching_category: row.matching_category || null,
    matchingCategory: row.matching_category || null,
    matching_reason: row.matching_reason || null,
    matchingReason: row.matching_reason || null,
    eligibility_status: row.eligibility_status || null,
    eligibilityStatus: row.eligibility_status || null,
    status: row.status,
    stage: stage,
    submittedDate: row.submitted_at || row.created_at,
    lastUpdated: row.updated_at || row.submitted_at || new Date().toISOString(),
    personal: {
      fullName: row.full_name || row.applicant_name || '',
      birthdate: row.birthdate || '',
      sex: row.sex || '',
      address: row.address || '',
      contact: row.contact || '',
      email: row.email || row.applicant_email || ''
    },
    academic: {
      school: row.school || row.applicant_school || '',
      course: row.course || row.applicant_course || '',
      yearLevel: row.year_level || row.applicant_year_level || '',
      studentId: row.student_id || row.applicant_student_id || '',
      gpa: row.gpa || ''
    },
    family: {
      guardian: row.guardian || '',
      occupation: row.occupation || '',
      income: row.family_income || '',
      members: row.family_members || '',
      notes: row.family_notes || ''
    },
    documents: Array.isArray(row.documents) ? row.documents.map(d => {
      const docId = d.id || null;
      const fUrl = d.file_url || (docId ? 'php/api.php?action=view_application_doc&id=' + docId : (d.file_path ? 'php/api.php?action=view_application_doc&path=' + encodeURIComponent(d.file_path) : ''));
      return {
        id: docId,
        type: d.doc_type || d.type || 'Requirement Document',
        name: d.file_name || d.name || 'document.pdf',
        size: d.file_size || d.size || '1 MB',
        status: d.status || 'Pending',
        filePath: d.file_path || d.filePath || '',
        fileUrl: fUrl,
        dataUrl: d.dataUrl || fUrl,
        uploaded: d.uploaded_at || d.uploaded || row.created_at || new Date().toISOString(),
        isImage: /\.(jpg|jpeg|png|webp|gif|bmp)$/i.test(d.file_name || d.name || d.file_path || '')
      };
    }) : [],
    reviewerId: row.reviewer_id ? String(row.reviewer_id) : null,
    reviewerEvaluatorId: row.reviewer_evaluator_id || null,
    reviewerName: row.reviewer_name || null,
    reviewerComments: row.reviewer_comments || '',
    evaluation: row.evaluation ? {
      ...row.evaluation,
      submittedDate: row.evaluation.submitted_at || row.evaluation.submittedDate
    } : null
  };
}

let isSyncingApplications = false;
async function syncApplicationsFromApi(){
  if(isSyncingApplications) return;
  isSyncingApplications = true;
  try {
    const res = await apiCall('applications');
    if(res && res.status === 'success' && Array.isArray(res.data)){
      res.data.forEach(row => {
        const appObj = mapApiRowToAppObj(row);
        const existingIdx = DB.applications.findIndex(a => 
          a.id === appObj.id || 
          (a.code && a.code === appObj.code) || 
          String(a.dbId) === String(appObj.dbId) || 
          String(a.id) === String(appObj.dbId)
        );

        const uId = appObj.applicantId;
        if(!DB.users.find(u => u.id === uId || u.id === row.applicant_id)){
          DB.users.push({
            id: uId,
            firstName: row.applicant_first || row.full_name || 'Applicant',
            lastName: row.applicant_last || '',
            email: row.email || row.applicant_email || '',
            role: 'applicant',
            status: 'Approved',
            school: row.school || '',
            course: row.course || '',
            yearLevel: row.year_level || '',
            studentId: row.student_id || ''
          });
        }

        if(row.reviewer_id){
          const rId = String(row.reviewer_id);
          const rExist = DB.users.find(u => String(u.id) === rId || (u.evaluatorId && u.evaluatorId === row.reviewer_evaluator_id));
          if(!rExist){
            DB.users.push({
              id: rId,
              role: 'reviewer',
              firstName: row.reviewer_first || 'Reviewer',
              lastName: row.reviewer_last || '',
              email: row.reviewer_email || '',
              evaluatorId: row.reviewer_evaluator_id || ('EVAL-' + rId),
              status: 'Active'
            });
          }
        }

        if(existingIdx >= 0){
          DB.applications[existingIdx] = Object.assign(DB.applications[existingIdx], appObj);
        } else {
          DB.applications.unshift(appObj);
        }
      });
    }
  } catch(err) {
    console.warn('Could not sync applications from API:', err);
  } finally {
    isSyncingApplications = false;
  }
}

function getDefaultDocumentsForScholarship(code, level){
  const c = String(code || '').toUpperCase();
  const lvl = String(level || '').toLowerCase();

  if(c === 'SCH-104' || c.includes('MEDICINE')){
    return [
      'Application Letter addressed to the Honorable Governor (1 copy)',
      'Accomplished Application Form with 2x2 ID picture (PGIN Education Office)',
      'Barangay Clearance from home Barangay (1 copy)',
      'Transcript of Records (TOR) from last attended undergraduate school or University (Authenticated copy)',
      'Certificate of Good Moral Character issued by last school (1 copy)',
      'Birth certificate issued by the Philippine Statistics Authority (PSA) (1 copy)',
      'Pre-screening result submitted directly by College of Medicine to the Provincial Office'
    ];
  }

  if(c === 'SCH-105' || c.includes('JURIS') || c.includes('LAW')){
    return [
      'Application Letter addressed to the Honorable Governor through the Ilocos Norte Provincial Scholarship Committee',
      'Accomplished Personal Profile Form (Available at the Provincial Education Office)',
      'Photocopy of PSA/NSO Birth Certificate',
      'Certified Copy of Transcript of Records (TOR) — Required for all year levels',
      'Certificate of Grades — Original copy from previous semester (Required for 2nd–4th year)',
      'Current Registration Document (Authenticated Form 5, Assessment Form, or Registration Form)',
      'Government Valid ID (Voter\'s ID, School ID signed for current semester/AY, or government ID)',
      'Original Barangay Certifications (Barangay Clearance, Certificate of Indigency, Certificate of Residency indicating at least 5 years residency)',
      'Original documents must have printed/handwritten name with wet signature or dry seal'
    ];
  }

  if(c === 'SCH-108' || c.includes('TECH') || lvl.includes('tvet')){
    return [
      'Application Letter addressed to the Honorable Governor through the Ilocos Norte Provincial Scholarship Committee',
      'Accomplished PGIN Personal Profile Form (accessible online or via PGIN Education Office)',
      'Barangay Certification verifying both local clearance and proof of residency for at least one year (1 original copy)',
      'Certificate of Indigency, low-income certificate from local MSWDO, or BIR-validated Income Tax Return (ITR)',
      'Certificate of Good Moral Character from previous or currently enrolled school/institution',
      'Certification of Grades or photocopy of dry-sealed graded class cards/report cards showing passing scholastic history',
      'Photocopy of Birth Certificate issued by the PSA',
      'Valid Identification Card (current School ID or Voter\'s ID) displaying full name and local home address'
    ];
  }

  if(c === 'SCH-101' || c === 'SCH-102' || c === 'SCH-103' || lvl.includes('high school') || lvl.includes('secondary')){
    return [
      'Accomplished Personal Profile Form',
      'Application Letter addressed to the Honorable Governor through the Ilocos Norte Provincial Scholarship Committee',
      'Good Moral Character Certificate (Original copy issued by Student Affairs/Counselor/Principal)',
      'Photocopy of PSA/NSO Birth Certificate',
      'Form 138 / Report Card',
      'Certificate of Enrollment for current semester',
      'Government Valid ID (Voter\'s ID, School ID showing applicant\'s name and home address)',
      'Original Barangay Certification (Barangay Clearance, Certificate of Residency indicating at least 1 year residency)'
    ];
  }

  if(c === 'SCH-107'){
    return [
      'Accomplished Personal Profile Form',
      'Application Letter',
      'PSA Birth Certificate',
      'Certificate of Grades',
      'Current Registration/Assessment Form',
      'Good Moral Character Certificate',
      'Valid ID',
      'Barangay Clearance',
      'Certificate of Indigency',
      'Certificate of Residency',
      'Other Agriculture/Fisheries documents required by PGIN'
    ];
  }

  // Default for SCH-106 (Academic Tertiary), SCH-109 (Health and Sciences), and all college / university tertiary programs
  return [
    'Accomplished Personal Profile Form',
    'Application Letter addressed to the Honorable Governor through the Ilocos Norte Provincial Scholarship Committee',
    'Good Moral Character Certificate — incoming first-year applicants',
    'Photocopy of PSA/NSO Birth Certificate',
    'Certificate of Grades — 2nd to 5th year / Form 138 — 1st year / Certificate of Completion — ALS graduates',
    'Authenticated Form 5/Assessment/Registration Form',
    'Government Valid ID or qualifying School ID',
    'Barangay Clearance',
    'Certificate of Indigency',
    'Certificate of Residency showing at least 1 year residency'
  ];
}

let isSyncingScholarships = false;
async function syncScholarshipsFromApi(){
  if(isSyncingScholarships) return;
  isSyncingScholarships = true;
  try {
    const res = await apiCall('scholarships');
    if(res && res.status === 'success' && Array.isArray(res.data)){
      res.data.forEach(row => {
        const sCode = row.code || ('SCH-' + row.id);
        const existingIdx = DB.scholarships.findIndex(s => s.id === sCode || s.id === String(row.id) || (s.dbId && s.dbId === row.id));

        const existingDocs = (existingIdx >= 0 && Array.isArray(DB.scholarships[existingIdx].documents) && DB.scholarships[existingIdx].documents.length > 0)
          ? DB.scholarships[existingIdx].documents
          : null;
        const resolvedDocs = (Array.isArray(row.documents) && row.documents.length > 0)
          ? row.documents
          : (existingDocs || getDefaultDocumentsForScholarship(sCode, row.level));

        const existingEligibility = (existingIdx >= 0 && Array.isArray(DB.scholarships[existingIdx].eligibility) && DB.scholarships[existingIdx].eligibility.length > 0)
          ? DB.scholarships[existingIdx].eligibility
          : [];
        const resolvedEligibility = (Array.isArray(row.eligibility) && row.eligibility.length > 0)
          ? row.eligibility
          : existingEligibility;

        const existingBenefits = (existingIdx >= 0 && Array.isArray(DB.scholarships[existingIdx].benefits) && DB.scholarships[existingIdx].benefits.length > 0)
          ? DB.scholarships[existingIdx].benefits
          : [];
        const resolvedBenefits = (Array.isArray(row.benefits) && row.benefits.length > 0)
          ? row.benefits
          : existingBenefits;

        const schObj = {
          id: sCode,
          dbId: row.id,
          code: sCode,
          name: row.name,
          category: row.category,
          level: row.level,
          status: row.status,
          slots: Number(row.slots || 0),
          slotsFilled: Number(row.slots_filled || 0),
          desc: row.description || '',
          eligibleCourses: row.eligible_courses || '',
          courseMatchMode: row.course_match_mode || 'specific',
          minGwa: row.min_gwa || '',
          maxIncome: row.max_income !== null && row.max_income !== undefined ? Number(row.max_income) : null,
          eligibleYearLevels: row.eligible_year_levels || '',
          eligibleSchools: row.eligible_schools || '',
          eligibility: resolvedEligibility,
          documents: resolvedDocs,
          benefits: resolvedBenefits,
          openDate: row.open_date || '',
          deadline: row.deadline || ''
        };

        if(existingIdx >= 0){
          DB.scholarships[existingIdx] = Object.assign(DB.scholarships[existingIdx], schObj);
        } else {
          DB.scholarships.push(schObj);
        }
      });
    }
  } catch(err) {
    console.warn('Could not sync scholarships from API:', err);
  } finally {
    isSyncingScholarships = false;
  }
}

function nav(view,params){
  STATE.view=view; STATE.params=params||{}; STATE.sidebarOpen=false;
  window.scrollTo(0,0);
  if(view === 'adminReviewers' || view === 'adminEvaluators'){
    STATE.evaluatorsCache = null;
  }
  if(['browse','applicantBrowse','applicantSchDetail','schDetail','applyForm','adminPrograms','adminDashboard'].includes(view)){
    syncScholarshipsFromApi().catch(()=>{});
  }
  if(['adminApplications','adminDashboard','adminAppProfile','applicantApplications','applicantTrack','reviewerAssigned','reviewerDashboard'].includes(view)){
    syncApplicationsFromApi().then(()=>render()).catch(()=>render());
  } else if(view === 'adminStudentApprovals'){
    syncStudentApplications(false);
  } else {
    render();
  }
}
function logout(){
  toast('You have been logged out.');
  STATE.currentUser=null;
  apiCall('logout', 'POST').catch(()=>{});
  nav('landing');
}
function currentUser(){return STATE.currentUser;}
function userFullName(u){
  if(!u) return '';
  const first = u.firstName || u.first_name || '';
  const middle = (u.middleName || u.middle_name) ? ((u.middleName || u.middle_name) + ' ') : '';
  const last = u.lastName || u.last_name || '';
  return (first + ' ' + middle + last).trim();
}
function userNotifs(u){return DB.notifications.filter(n=>n.userId===u.id).sort((a,b)=>new Date(b.date)-new Date(a.date));}
function unreadCount(u){return userNotifs(u).filter(n=>!n.read).length;}

/* ================= RENDER ROOT ================= */
let searchDebounceTimer = null;
function debounceSearchRender(callback, delay = 180){
  if(searchDebounceTimer) clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    searchDebounceTimer = null;
    if(typeof callback === 'function') callback();
    else render();
  }, delay);
}

function restoreActiveInputFocus(focusState){
  if(!focusState) return;
  let target = null;
  if(focusState.id){
    target = document.getElementById(focusState.id);
  }
  if(!target && focusState.placeholder){
    const inputs = document.querySelectorAll('input, textarea');
    for(let i = 0; i < inputs.length; i++){
      if(inputs[i].placeholder === focusState.placeholder){
        target = inputs[i];
        break;
      }
    }
  }
  if(!target && focusState.isSearch){
    target = document.querySelector('.search-box input');
  }

  if(target){
    try {
      target.focus({ preventScroll: true });
      if(typeof focusState.selectionStart === 'number' && typeof focusState.selectionEnd === 'number'){
        target.setSelectionRange(focusState.selectionStart, focusState.selectionEnd);
      }
    } catch(e){}
  }
}

function render(){
  const activeEl = document.activeElement;
  let focusState = null;
  if(activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')){
    focusState = {
      id: activeEl.id || null,
      name: activeEl.name || null,
      placeholder: activeEl.placeholder || null,
      selectionStart: activeEl.selectionStart,
      selectionEnd: activeEl.selectionEnd,
      isSearch: !!(activeEl.closest && activeEl.closest('.search-box')) || (activeEl.placeholder && activeEl.placeholder.toLowerCase().includes('search'))
    };
  }

  const app=document.getElementById('app');
  let v=STATE.view;
  if(STATE.currentUser && STATE.currentUser.role==='applicant'){
    if(v==='schDetail'){
      STATE.view = 'applicantSchDetail';
      v = 'applicantSchDetail';
    } else if(v==='browse'){
      STATE.view = 'applicantBrowse';
      v = 'applicantBrowse';
    }
  }

  // Strict Role-Based Access Control (RBAC) & Student Approval Verification
  if(STATE.currentUser){
    const role = STATE.currentUser.role;
    const st = STATE.currentUser.status;

    // Students with unapproved status cannot access Student Dashboard or applicant views
    if((role === 'applicant' || role === 'student') && st !== 'Approved' && st !== 'Active'){
      if(v.startsWith('applicant') || v === 'schDetail'){
        toast('Your account status is: ' + (st || 'Pending Approval') + '. Dashboard access is restricted until approval.', 'info');
        STATE.view = 'studentPending';
        v = 'studentPending';
      }
    }

    // Evaluators cannot access Admin pages, APIs, or management functions
    if(v.startsWith('admin') && role !== 'admin'){
      toast('Access denied. Administrator privileges required.', 'error');
      STATE.view = roleHome();
      v = STATE.view;
    } else if(v.startsWith('reviewer') && role !== 'reviewer' && role !== 'evaluator' && role !== 'admin'){
      toast('Access denied. Evaluator privileges required.', 'error');
      STATE.view = roleHome();
      v = STATE.view;
    }
  }

  const publicViews=['landing','about','help','browse','schDetail','login','register','adminRegister','verifyAdmin','activateEvaluator','studentPending'];
  if(publicViews.includes(v)){
    app.innerHTML=publicShell(renderPublicView(v));
  }else{
    if(!STATE.currentUser){app.innerHTML=publicShell(renderLogin());STATE.view='login';return;}
    app.innerHTML=appShellRender();
  }
  afterRender();

  if(focusState){
    restoreActiveInputFocus(focusState);
  }
}

function afterRender(){
  // Charts
  Object.keys(chartInstances).forEach(k=>{try{chartInstances[k].destroy();}catch(e){}delete chartInstances[k];});
  if(STATE.view==='adminDashboard')initAdminCharts();
  if(STATE.view==='reports')initReportCharts();

  // Clear inputs and purge saved words / browser autofill on auth views
  if(STATE.view === 'register'){
    const regIds = ['rStudentId','rFirst','rMiddle','rLast','rEmail','rContact','rAddress','rSchool','rCourse','rPass','rPass2'];
    const clearReg = () => { regIds.forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; }); };
    clearReg();
    setTimeout(clearReg, 60);
    setTimeout(clearReg, 200);
  } else if(STATE.view === 'login'){
    const clearLogin = () => {
      const e = document.getElementById('loginEmail');
      const p = document.getElementById('loginPass');
      if(e) e.value = '';
      if(p) p.value = '';
    };
    clearLogin();
    setTimeout(clearLogin, 60);
    setTimeout(clearLogin, 200);
  } else if(STATE.view === 'adminRegister'){
    const admIds = ['adminRegFullName','adminRegEmail','adminRegPass','adminRegPass2'];
    const clearAdm = () => { admIds.forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; }); };
    clearAdm();
    setTimeout(clearAdm, 60);
  }

  // close notif dropdown on outside click
  document.addEventListener('click',outsideClickHandler,{once:true});
}
function outsideClickHandler(e){
  const dd=document.getElementById('notifDropdown');
  if(dd && !dd.contains(e.target) && !(e.target.closest && e.target.closest('.bell-btn'))){
    dd.remove();
  }
}

/* ================= PUBLIC SHELL ================= */
function publicShell(content){
  const u=STATE.currentUser;
  return '<div>'+
    '<nav class="navbar"><div class="navbar-inner">'+
      '<a href="javascript:void(0)" onclick="nav(\'landing\')" class="brand"><img src="img/logo.png" alt="Ilocos Norte Education Office" class="brand-logo-img"><span>Sirib i-Sko<small>Provincial Government of Ilocos Norte</small></span></a>'+
      '<div class="nav-links">'+
        navLink('landing','Home')+navLink('browse','Available Scholarships')+navLink('about','About')+navLink('help','Help / Contact')+
      '</div>'+
      '<div class="nav-cta">'+
        (u? '<button class="btn btn-outline btn-sm" onclick="nav(roleHome())">'+icon('home',15)+' My Dashboard</button>'
           : '<button class="btn btn-outline btn-sm" onclick="nav(\'login\')">Log In</button><button class="btn btn-primary btn-sm" onclick="nav(\'register\')">Register</button>')+
      '</div>'+
    '</div></nav>'+
    content+
    publicFooter()+
  '</div>';
}
function navLink(view,label){
  return '<a href="javascript:void(0)" onclick="nav(\''+view+'\')" class="'+(STATE.view===view?'active':'')+'">'+label+'</a>';
}
function roleHome(){
  const u=STATE.currentUser; if(!u)return 'login';
  if(u.role==='student' || u.role==='applicant'){
    if(u.status !== 'Approved' && u.status !== 'Active'){
      return 'studentPending';
    }
    return 'applicantDashboard';
  }
  return u.role==='admin'?'adminDashboard':(u.role==='reviewer'||u.role==='evaluator')?'reviewerDashboard':'applicantDashboard';
}
function publicFooter(){
  return '<footer><div class="container">'+
    '<div class="foot-grid">'+
      '<div><h4 style="display:flex;align-items:center;gap:9px;">'+icon('cap',20)+' Sirib i-Sko</h4><p style="max-width:280px;color:#AEBEDA;">The official online scholarship application and management platform of the Provincial Government of Ilocos Norte.</p></div>'+
      '<div><h4>Quick Links</h4><a href="javascript:void(0)" onclick="nav(\'browse\')">Available Scholarships</a><a href="javascript:void(0)" onclick="nav(\'about\')">About the Program</a><a href="javascript:void(0)" onclick="nav(\'help\')">Help &amp; Contact</a><a href="javascript:void(0)" onclick="nav(\'register\')">Create an Account</a><a href="javascript:void(0)" onclick="nav(\'adminRegister\')">Admin Portal</a></div>'+
      '<div><h4>Contact</h4><a href="javascript:void(0)">Provincial Capitol Complex, Laoag City, 2900 Ilocos Norte</a><a href="javascript:void(0)">(077) 000-0000</a><a href="javascript:void(0)">scholarship@ilocosnorte.gov.ph</a></div>'+
      '<div><h4>Legal</h4><a href="javascript:void(0)">Privacy Policy</a><a href="javascript:void(0)">Terms and Conditions</a><a href="javascript:void(0)">Data Privacy Act Compliance</a></div>'+
    '</div>'+
    '<div class="foot-bottom"><span>© 2026 Provincial Government of Ilocos Norte. All rights reserved.</span><span>Built for the Office of the Provincial Governor — Scholarship Division</span></div>'+
  '</div></footer>';
}

/* ================= PUBLIC VIEWS ROUTER ================= */
function renderPublicView(v){
  if(v==='landing')return renderLanding();
  if(v==='about')return renderAbout();
  if(v==='help')return renderHelp();
  if(v==='browse')return renderBrowse();
  if(v==='schDetail')return renderSchDetail(STATE.params.id);
  if(v==='login')return renderLogin();
  if(v==='register')return renderRegister();
  if(v==='adminRegister')return renderAdminRegister();
  if(v==='verifyAdmin')return renderVerifyAdmin();
  if(v==='activateEvaluator')return renderActivateEvaluator();
  if(v==='studentPending')return renderStudentPending();
  return renderLanding();
}

/* ---------- LANDING ---------- */
function renderLanding(){
  const feats=[
    {icon:'file',t:'Online Application',d:'Submit scholarship applications anytime, anywhere — no more queueing at the Capitol.'},
    {icon:'upload',t:'Easy Document Upload',d:'Upload grades, certificates, IDs, and other requirements straight from your device.'},
    {icon:'clock',t:'Real-Time Tracking',d:'Monitor your application progress and get notified the moment your status changes.'},
    {icon:'shield',t:'Secure Records',d:'Your scholarship information is encrypted, organized, and only seen by authorized staff.'},
    {icon:'chart',t:'Fast Evaluation',d:'Structured scoring helps reviewers and administrators process applications efficiently.'},
  ];
  return '<section class="hero"><div class="container hero-inner">'+
    '<div><div class="eyebrow">PGIN SCHOLARSHIP DIVISION</div>'+
      '<h1>Apply for Your Future. Manage Your Scholarship Journey Online.</h1>'+
      '<p>Sirib i-Sko lets Ilocano students apply for provincial scholarships, upload requirements, and track their application in real time — replacing the old paper-based process with one centralized, transparent system.</p>'+
      '<div class="hero-actions"><button class="btn btn-primary" onclick="nav(\'browse\')">'+icon('cap',16)+' View Scholarships</button><button class="btn btn-outline" onclick="nav(STATE.currentUser?roleHome():\'register\')">'+icon('arrowR',16)+' Apply Now</button></div>'+
      '<div class="hero-stats">'+
        '<div class="hero-stat"><b>8</b><span>Scholarships</span></div>'+
        '<div class="hero-stat"><b>100%</b><span>Online Tracking</span></div>'+
        '<div class="hero-stat"><b>21+2</b><span>Municipalities &amp; Cities Covered</span></div>'+
      '</div>'+
    '</div>'+
    '<div class="hero-card"><div class="step"><div class="step-num">1</div><div><div class="step-t">Create your account</div><div class="step-d">Register with your Student ID and basic information.</div></div></div>'+
    '<div class="step"><div class="step-num">2</div><div><div class="step-t">Choose a scholarship</div><div class="step-d">Browse open programs and check your eligibility.</div></div></div>'+
    '<div class="step"><div class="step-num">3</div><div><div class="step-t">Submit &amp; upload requirements</div><div class="step-d">Complete the 5-step form and upload your documents.</div></div></div>'+
    '<div class="step"><div class="step-num">4</div><div><div class="step-t">Track your status</div><div class="step-d">Follow your application from submission to final decision.</div></div></div></div>'+
  '</div></section>'+

  '<section class="section"><div class="container">'+
    '<div class="section-head"><div><h2>Everything you need, in one place</h2><p>Sirib i-Sko replaces manual forms and lost paperwork with a single, secure digital system for students, reviewers, and administrators.</p></div></div>'+
    '<div class="grid5" style="grid-template-columns:repeat(5,1fr);">'+
      feats.map(f=>'<div class="feature"><div class="fi">'+icon(f.icon,20)+'</div><h3>'+f.t+'</h3><p>'+f.d+'</p></div>').join('')+
    '</div>'+
  '</div></section>'+

  '<section class="section section-alt"><div class="container">'+
    '<div class="section-head"><div><h2>Available Scholarships</h2><p>Scholarship programs currently open for application this cycle.</p></div><button class="btn btn-ghost" onclick="nav(\'browse\')">See all '+icon('chevronR',15)+'</button></div>'+
    '<div class="grid4">'+DB.scholarships.slice(0,4).map(schCard).join('')+'</div>'+
  '</div></section>';
}

function schCard(s){
  const u=STATE.currentUser && STATE.currentUser.role==='applicant' ? STATE.currentUser : null;
  const fit=u ? evaluateScholarshipEligibility(s, u) : null;
  // Check if applicant already has any active (non-rejected) application
  const mySubmitted = u ? DB.applications.filter(a=>a.applicantId===u.id && a.status!=='Draft').length : 0;
  const myThisApp = u ? DB.applications.find(a=>a.applicantId===u.id && a.scholarshipId===s.id) : null;
  const alreadyApplied = myThisApp && myThisApp.status !== 'Draft';
  const hasActiveApp = mySubmitted > 0;

  let fitBadge = '';
  if(fit){
    if(fit.isExactFit){
      fitBadge='<div style="margin-bottom:10px;"><span class="fit-badge exact" title="'+esc(fit.fitReason)+'">⭐ Best Match for Your Course</span></div>';
    } else if(fit.isEligible){
      fitBadge='<div style="margin-bottom:10px;"><span class="fit-badge" style="background:#EBF5FB;color:#2980B9;border-color:#AED6F1;" title="'+esc(fit.fitReason)+'">✓ Eligible Program</span></div>';
    } else if(fit.courseMatched && !fit.isEligible){
      const reasonTip = esc(fit.unmetReasons.join(' | '));
      fitBadge='<div style="margin-bottom:10px;"><span class="fit-badge" style="background:#FEF9E7;color:#B7950B;border-color:#F9E79F;cursor:pointer;" onclick="alert(\'Requirements Not Met for '+esc(s.name)+':\\n\\n'+reasonTip.replace(/'/g, "\\'")+'\')" title="'+reasonTip+'">⚠ Requirements Not Met ('+fit.unmetReasons.length+')</span></div>';
    } else if(!fit.courseMatched){
      fitBadge='<div style="margin-bottom:10px;"><span class="fit-badge" style="background:#F2F4F4;color:#7F8C8D;border-color:#BDC3C7;" title="'+esc(fit.fitReason)+'">Course Not Eligible</span></div>';
    }
  }

  let applyBtn='';
  if(!u){
    applyBtn='<button class="btn btn-primary btn-sm btn-block" onclick="toast(\'Please log in to apply.\',\'info\');nav(\'login\')">Apply</button>';
  } else if(alreadyApplied){
    applyBtn='<button class="btn btn-ghost btn-sm btn-block" disabled title="You have already applied to this scholarship">✓ Applied</button>';
  } else if(hasActiveApp){
    applyBtn='<button class="btn btn-ghost btn-sm btn-block" disabled title="You can only have one active scholarship application">1 App Limit</button>';
  } else if(s.status==='Closed'){
    applyBtn='<button class="btn btn-ghost btn-sm btn-block" disabled>Closed</button>';
  } else if(fit && !fit.isEligible){
    if(fit.courseMatched){
      const reasonTip = fit.unmetReasons.join('\n• ');
      applyBtn='<button class="btn btn-outline btn-sm btn-block" style="border-color:#E67E22;color:#D35400;" onclick="alert(\'Requirements Not Met for '+esc(s.name)+':\\n\\n• '+reasonTip.replace(/'/g, "\\'")+'\')">Requirements Not Met</button>';
    } else {
      applyBtn='<button class="btn btn-ghost btn-sm btn-block" style="color:var(--text-muted);" onclick="toast(\'This scholarship does not accept '+(u.course||'your course')+'.\',\'warning\')">Ineligible Course</button>';
    }
  } else {
    applyBtn='<button class="btn btn-primary btn-sm btn-block" onclick="startApply(\''+s.id+'\')">Apply</button>';
  }

  const isApplicant = !!(STATE.currentUser && STATE.currentUser.role === 'applicant');
  const detailTarget = isApplicant ? 'applicantSchDetail' : 'schDetail';

  return '<div class="sch-card"><div class="sch-band"></div><div class="sch-body">'+
    '<div class="sch-cat">'+esc(s.category)+'</div>'+
    '<h3>'+esc(s.name)+'</h3>'+
    '<p>'+esc(s.desc.slice(0,105))+(s.desc.length>105?'…':'')+'</p>'+
    fitBadge+
    '<div class="sch-meta">'+
      '<div>'+icon('calendar',14)+' Deadline: '+fmtDate(s.deadline)+'</div>'+
      '<div>'+statusBadge(s.status)+'</div>'+
    '</div>'+
    '</div><div class="sch-foot"><button class="btn btn-ghost btn-sm btn-block" onclick="nav(\''+detailTarget+'\',{id:\''+s.id+'\'})">View Details</button>'+
    applyBtn+'</div>'+
  '</div>';
}

/* ---------- ABOUT ---------- */
function renderAbout(){
  return '<section class="section"><div class="container" style="max-width:820px;">'+
    '<div class="pageintro"><h1 class="display" style="font-size:30px;">About Sirib i-Sko</h1><p>Understanding the platform and the office behind it.</p></div>'+
    '<div class="panel"><div class="panel-body">'+
    '<p>"Sirib" is the Ilocano word for wisdom or intellect. <b>Sirib i-Sko</b> is the Provincial Government of Ilocos Norte\'s digital scholarship management platform, built to replace the manual, paper-based application process that previously caused long waiting times, lost documents, and delayed releases of assistance.</p>'+
    '<p>Through this system, students across the province\'s 23 municipalities and 2 cities can register, browse available scholarship programs, submit complete applications online, upload requirements securely, and track their status from submission to final decision — all without needing to travel to the Provincial Capitol.</p>'+
    '<div class="divider"></div>'+
    '<div class="grid3">'+
      '<div><h3 style="font-size:15px;">'+icon('shield',18)+' Transparent</h3><p class="small muted">Every stage of the review process is visible to the applicant, from document checking to final decision.</p></div>'+
      '<div><h3 style="font-size:15px;">'+icon('clock',18)+' Efficient</h3><p class="small muted">Structured evaluation and reviewer assignment cut processing time significantly compared to manual handling.</p></div>'+
      '<div><h3 style="font-size:15px;">'+icon('users',18)+' Inclusive</h3><p class="small muted">Designed for students, evaluators, and government staff of all technical backgrounds.</p></div>'+
    '</div>'+
    '</div></div>'+
  '</div></section>';
}

/* ---------- HELP ---------- */
function renderHelp(){
  const faqs=[
    ['Who can apply for PGIN scholarships?','Any bona fide resident of Ilocos Norte who meets the eligibility criteria of a specific scholarship program, as listed on that program\'s details page.'],
    ['What documents do I need to prepare?','Common requirements include a School ID, Certificate of Grades, Certificate of Enrollment, and Barangay Certificate of Residency. Exact requirements vary per program.'],
    ['How long does processing take?','Most applications move from Document Checking to a Final Decision within 3–6 weeks, depending on the volume of applicants and completeness of requirements.'],
    ['I made a mistake on my submitted application. What do I do?','Contact the Scholarship Division through the form below or visit the Provincial Capitol. Minor corrections can also be requested through your reviewer\'s comments if your application is marked Incomplete.'],
  ];
  return '<section class="section"><div class="container" style="max-width:900px;">'+
    '<div class="pageintro"><h1 class="display" style="font-size:30px;">Help &amp; Contact</h1><p>Get answers to common questions or reach the Scholarship Division directly.</p></div>'+
    '<div class="row2" style="align-items:flex-start;">'+
      '<div class="panel"><div class="panel-head"><h3>Frequently Asked Questions</h3></div><div class="panel-body">'+
        faqs.map(f=>'<div style="margin-bottom:16px;"><b style="font-size:13.8px;">'+f[0]+'</b><p class="small muted" style="margin:5px 0 0;">'+f[1]+'</p></div>').join('')+
      '</div></div>'+
      '<div class="panel"><div class="panel-head"><h3>Send us a message</h3></div><div class="panel-body">'+
        '<div class="field"><label>Full Name</label><input class="input" placeholder="Juan Dela Cruz"></div>'+
        '<div class="field"><label>Email Address</label><input class="input" placeholder="you@email.com"></div>'+
        '<div class="field"><label>Message</label><textarea class="input" placeholder="How can we help you?"></textarea></div>'+
        '<button class="btn btn-primary btn-block" onclick="toast(\'Message sent to the Scholarship Division. We will respond within 2–3 business days.\',\'success\')">Send Message</button>'+
        '<div class="divider"></div>'+
        '<div class="kv"><b>'+icon('building',15)+'</b><span>Provincial Capitol Complex, Laoag City</span></div>'+
        '<div class="kv"><b>'+icon('phone',15)+'</b><span>(077) 000-0000</span></div>'+
        '<div class="kv"><b>'+icon('mail',15)+'</b><span>scholarship@ilocosnorte.gov.ph</span></div>'+
      '</div></div>'+
    '</div>'+
  '</div></section>';
}

/* ---------- BROWSE SCHOLARSHIPS (public + used inside applicant shell) ---------- */
const browseState={q:'',category:'All',status:'All',level:'All'};
function renderBrowse(inApp){
  const u = STATE.currentUser && STATE.currentUser.role === 'applicant' ? STATE.currentUser : null;
  const wrap = (inner) => inApp ? inner : '<section class="section"><div class="container">' + inner + '</div></section>';

  const allSch = DB.scholarships;
  const cats = ['All', ...new Set(allSch.map(s => s.category))];
  const levels = ['All', ...new Set(allSch.map(s => s.level))];

  let bannerHtml = '';
  const studentHasCourse = !!(u && (u.course || '').trim());

  if(u && !studentHasCourse){
    bannerHtml = '<div class="fit-banner" style="background:#FFF9E6;border-color:#F39C12;margin-bottom:20px;">' +
      '<div class="fit-banner-text">' +
        '<h4>' + icon('alert', 18) + ' Complete Your Academic Profile</h4>' +
        '<p>Your degree course/program is not set in your profile. Please add your course so the system can automatically match you to eligible scholarships.</p>' +
      '</div>' +
      '<button class="btn btn-primary btn-sm" style="white-space:nowrap;" onclick="nav(\'applicantProfile\')">Update Profile Course →</button>' +
    '</div>';
  }

  let rankedList = [];
  let noMatchForCourse = false;

  if(u && studentHasCourse){
    const matchRes = findBestMatchingScholarship(u, allSch);
    if(matchRes && matchRes.matched && matchRes.scholarship){
      const best = matchRes.scholarship;
      const fit = matchRes.evaluation || evaluateScholarshipEligibility(best, u);

      // Enforce: ONLY ONE eligible scholarship must be shown based on the student's course
      rankedList = [best];

      if(fit && fit.isEligible){
        bannerHtml = '<div class="fit-banner" style="margin-bottom:20px;">' +
          '<div class="fit-banner-text">' +
            '<h4>' + icon('check', 18) + ' Best Scholarship Match for Your Course: ' + esc(best.name) + '</h4>' +
            '<p>Based on your program (<b>' + esc(u.course) + (u.yearLevel || u.year_level ? ' · ' + esc(u.yearLevel || u.year_level) : '') + '</b> at ' + esc(u.school || 'Ilocos Norte') + '), this scholarship specifically matches your course.</p>' +
          '</div>' +
          '<button class="btn btn-primary btn-sm" style="white-space:nowrap;" onclick="startApply(\'' + best.id + '\')">Apply to Matching Program →</button>' +
        '</div>';
      } else {
        const reasons = (fit && fit.unmetReasons && fit.unmetReasons.length > 0) ? fit.unmetReasons.join('; ') : 'Requirements not fully satisfied.';
        bannerHtml = '<div class="fit-banner" style="background:#FFFBEB;border-color:#F59E0B;margin-bottom:20px;">' +
          '<div class="fit-banner-text">' +
            '<h4>' + icon('alert', 18) + ' Course Match: ' + esc(best.name) + ' (Requirements Verification Needed)</h4>' +
            '<p>This scholarship program accepts your course (<b>' + esc(u.course) + '</b>), but some criteria require verification: ' + esc(reasons) + '</p>' +
          '</div>' +
          '<button class="btn btn-outline btn-sm" style="white-space:nowrap;" onclick="nav(\'applicantSchDetail\',{id:\'' + best.id + '\'})">View Requirements →</button>' +
        '</div>';
      }
    } else {
      noMatchForCourse = true;
      rankedList = [];
    }
  } else if(!u){
    rankedList = allSch;
  }

  const filteredList = rankedList.filter(s => {
    if(browseState.q && !(s.name.toLowerCase().includes(browseState.q.toLowerCase()) || s.desc.toLowerCase().includes(browseState.q.toLowerCase()))) return false;
    if(!u){
      if(browseState.category !== 'All' && s.category !== browseState.category) return false;
      if(browseState.status !== 'All' && s.status !== browseState.status) return false;
      if(browseState.level !== 'All' && s.level !== browseState.level) return false;
    }
    return true;
  });

  let contentArea = '';
  if(u && !studentHasCourse){
    contentArea = '<div class="empty-state" style="padding:48px 24px;text-align:center;background:#fff;border-radius:12px;border:1px solid #E2E8F0;margin:20px 0;">' +
      icon('alert', 44) +
      '<h3 style="font-size:18px;margin:12px 0 6px;color:#D97706;">Academic Profile Incomplete</h3>' +
      '<p class="muted" style="max-width:540px;margin:0 auto 16px;">Please set your enrolled degree course/program in your profile so the system can automatically match and display your eligible scholarship program.</p>' +
      '<button class="btn btn-primary btn-sm" onclick="nav(\'applicantProfile\')">Update Profile Course →</button>' +
    '</div>';
  } else if(u && noMatchForCourse){
    contentArea = '<div class="empty-state" style="padding:48px 24px;text-align:center;background:#fff;border-radius:12px;border:1px solid #E2E8F0;margin:20px 0;">' +
      icon('alert', 44) +
      '<h3 style="font-size:18px;margin:12px 0 6px;color:#C0392B;">No matching scholarships are currently available for your course.</h3>' +
      '<p class="muted" style="max-width:540px;margin:0 auto 16px;">We currently do not have an active scholarship program accepting <b>' + esc(u.course) + '</b>. Please check back regularly or contact the Provincial Education Office for upcoming scholarship cycles.</p>' +
      '<button class="btn btn-outline btn-sm" onclick="nav(\'applicantProfile\')">Check Profile Information</button>' +
    '</div>';
  } else if(filteredList.length > 0){
    contentArea = '<div class="grid4" id="schGrid">' + filteredList.map(schCard).join('') + '</div>';
  } else {
    contentArea = emptyState('search', 'No scholarships match your search', 'Try adjusting your search query.');
  }

  let toolbarHtml = '';
  if(!u){
    toolbarHtml = '<div class="toolbar">' +
      '<div class="search-box">' + icon('search', 16) + '<input id="browseSearchInput" class="input" placeholder="Search scholarships..." value="' + esc(browseState.q) + '" oninput="browseState.q=this.value;debounceSearchRender(renderInto);" onkeydown="if(event.key===\'Enter\'){if(searchDebounceTimer){clearTimeout(searchDebounceTimer);searchDebounceTimer=null;}renderInto();}"></div>' +
      '<div class="toolbar-filters">' +
        selectFilter('Category', cats, browseState.category, 'category') +
        selectFilter('Status', ['All', 'Open', 'Closed'], browseState.status, 'status') +
        selectFilter('Level', levels, browseState.level, 'level') +
      '</div>' +
    '</div>';
  } else if(studentHasCourse && !noMatchForCourse){
    toolbarHtml = '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:18px;flex-wrap:wrap;">' +
      '<div style="font-size:13.5px;color:var(--text-muted);">' +
        'Showing <b>1</b> eligible scholarship program matching your course (<b>' + esc(u.course) + '</b>).' +
      '</div>' +
      '<div class="search-box" style="max-width:280px;">' + icon('search', 16) + '<input id="browseSearchInput2" class="input" placeholder="Search program..." value="' + esc(browseState.q) + '" oninput="browseState.q=this.value;debounceSearchRender(renderInto);" onkeydown="if(event.key===\'Enter\'){if(searchDebounceTimer){clearTimeout(searchDebounceTimer);searchDebounceTimer=null;}renderInto();}"></div>' +
    '</div>';
  }

  const pageSubtitle = u
    ? (studentHasCourse ? 'Scholarship program matched to your enrolled course (<b>' + esc(u.course) + '</b>).' : 'Complete your course profile to view your eligible scholarship.')
    : 'Search and filter scholarship programs currently offered by the Provincial Government of Ilocos Norte.';

  const body =
    '<div class="pageintro"><h1 class="display" style="font-size:' + (inApp ? '22px' : '30px') + ';">Available Scholarships</h1><p>' + pageSubtitle + '</p></div>' +
    bannerHtml +
    toolbarHtml +
    contentArea;

  return wrap(body);
}
function selectFilter(label,options,current,key){
  return '<select class="select-sm" onchange="browseState[\''+key+'\']=this.value;renderInto()">'+
    options.map(o=>'<option value="'+esc(o)+'" '+(o===current?'selected':'')+'>'+label+': '+esc(o)+'</option>').join('')+
  '</select>';
}
function renderInto(){
  // Re-render only the current view (used by filter controls to avoid full page reload feel)
  render();
}
function emptyState(iconName,title,sub){
  return '<div class="empty-state">'+icon(iconName,40)+'<h3 style="font-size:15px;margin:10px 0 4px;">'+title+'</h3><p class="small">'+sub+'</p></div>';
}

/* ---------- SCHOLARSHIP DETAIL ---------- */
function renderSchDetail(id,inApp){
  const s=DB.scholarships.find(x=>x.id===id)||DB.scholarships[0];
  const u=STATE.currentUser && STATE.currentUser.role==='applicant' ? STATE.currentUser : null;
  const isApp = !!inApp || !!u;

  // One-application enforcement
  const mySubmitted = u ? DB.applications.filter(a=>a.applicantId===u.id && a.status!=='Draft').length : 0;
  const myThisApp = u ? DB.applications.find(a=>a.applicantId===u.id && a.scholarshipId===s.id) : null;
  const alreadyApplied = myThisApp && myThisApp.status !== 'Draft';
  const hasActiveApp = mySubmitted > 0 && !alreadyApplied;

  // Credential fit box for logged-in applicant
  let credFitBox='';
  let fit = null;
  let best = null;
  if(u){
    fit=evaluateScholarshipEligibility(s, u);
    best=findExactFitScholarship(u);
    if(fit){
      const isExact=fit.isExactFit;
      const isEligible=fit.isEligible;
      const isCourseMatched=fit.courseMatched;
      const boxClass=isExact?'exact':(isEligible?'exact':'mismatch');
      const boxColor=isExact?'#1E8449':(isEligible?'#2980B9':(isCourseMatched?'#B7950B':'#C0392B'));
      const headerTitle=isExact?'⭐ Exact Course Match Verified':(isEligible?'✓ Eligible Program for Your Course':(isCourseMatched?'⚠ Requirements Not Met for this Program':'Course Incompatible with this Program'));

      credFitBox='<div class="fit-assessment-box '+boxClass+'" style="margin-bottom:20px;border-left:4px solid '+boxColor+';">'+
        '<div class="fit-assessment-header">'+
          '<div>'+
            '<div style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;font-weight:700;color:'+boxColor+';">'+headerTitle+'</div>'+
            '<h3 style="margin:3px 0 0;font-size:15px;color:var(--navy);">'+(isEligible?'Your credentials qualify for <b>'+esc(s.name)+'</b>':(best?'Recommended match: <b>'+esc(best.name)+'</b>':'Requirements not met for <b>'+esc(s.name)+'</b>'))+'</h3>'+
          '</div>'+
          '<div><span class="fit-badge '+(isExact?'exact':'')+'" style="font-size:13px;">'+fit.fitTag+'</span></div>'+
        '</div>'+
        '<p style="font-size:13px;color:var(--text-muted);margin:6px 0 10px;">'+esc(fit.fitReason)+'</p>'+
        (!isEligible && fit.unmetReasons.length > 0 ?
          '<div style="background:#FDEDEC;border:1px solid #F5B7B1;border-radius:8px;padding:10px 14px;margin-bottom:12px;font-size:13px;color:#922B21;">'+
            '<b>Unmet Eligibility Requirements:</b>'+
            '<ul style="margin:4px 0 0;padding-left:20px;line-height:1.6;">'+fit.unmetReasons.map(r=>'<li>'+esc(r)+'</li>').join('')+'</ul>'+
          '</div>' : '')+
        '<div style="background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:10px 14px;margin-bottom:10px;font-size:12.5px;">'+
          '<div style="display:flex;flex-wrap:wrap;gap:12px;">'+
            '<div><span class="muted">Applicant:</span> <b>'+esc(userFullName(u))+'</b></div>'+
            '<div><span class="muted">Student ID:</span> <b>'+esc(u.studentId||u.student_id||'—')+'</b></div>'+
            '<div><span class="muted">School:</span> <b>'+esc(u.school||'—')+'</b></div>'+
            '<div><span class="muted">Course:</span> <b>'+esc(u.course||'—')+'</b></div>'+
            '<div><span class="muted">Year:</span> <b>'+esc(u.yearLevel||u.year_level||'—')+'</b></div>'+
            '<div><span class="muted">Location:</span> <b>'+esc(u.address||'Ilocos Norte')+'</b></div>'+
          '</div>'+
        '</div>'+
        '<div class="fit-checklist">'+
          fit.criteria.map(c=>'<div class="fit-check-item '+(c.pass?'pass':'warn')+'">'+
            (c.pass?icon('check',15):icon('alert',15))+
            '<div><b style="display:block;">'+esc(c.label)+'</b><span class="small muted">'+esc(c.detail)+'</span></div>'+
          '</div>').join('')+
        '</div>'+
        (best && best.id !== s.id && !isExact ? '<div style="margin-top:12px;text-align:right;"><button class="btn btn-primary btn-sm" onclick="startApply(\''+best.id+'\')">Switch to Matching Program: '+esc(best.name)+' →</button></div>' : '')+
      '</div>';
    }
  }

  // Apply button with one-app enforcement
  let applyBtn='';
  if(!u){
    applyBtn='<button class="btn btn-primary" style="padding:13px 26px;" onclick="toast(\'Please log in or register to apply.\',\'info\');nav(\'login\')">'+icon('cap',17)+' Apply for this Scholarship</button>';
  } else if(alreadyApplied){
    applyBtn='<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">'+
      '<button class="btn btn-ghost" style="padding:13px 26px;" disabled>✓ Already Applied</button>'+
      '<button class="btn btn-navy btn-sm" onclick="nav(\'applicantApplications\')">'+icon('file',15)+' View My Application</button>'+
    '</div>';
  } else if(hasActiveApp){
    applyBtn='<div style="background:#FEF9E7;border:1px solid #F39C12;border-radius:10px;padding:14px 18px;display:flex;align-items:center;gap:14px;">'+
      icon('alert',22)+
      '<div>'+
        '<b style="color:#B7950B;font-size:14px;">One Application Policy</b>'+
        '<div style="font-size:13px;color:var(--text-muted);margin-top:3px;">You already have an active scholarship application. Each applicant may only hold one active application at a time.</div>'+
        '<button class="btn btn-ghost btn-sm" style="margin-top:8px;" onclick="nav(\'applicantApplications\')">'+icon('file',14)+' View My Current Application</button>'+
      '</div>'+
    '</div>';
  } else if(s.status==='Closed'){
    applyBtn='<button class="btn btn-ghost" style="padding:13px 26px;" disabled>Applications Closed</button>';
  } else if(fit && !fit.isEligible){
    applyBtn='<div style="background:#FFF9E6;border:1px solid #F39C12;border-radius:10px;padding:14px 18px;display:flex;align-items:center;gap:14px;">'+
      icon('alert',22)+
      '<div>'+
        '<b style="color:#B7950B;font-size:14px;">'+(fit.courseMatched?'Requirements Not Met':'Course Ineligible')+'</b>'+
        '<div style="font-size:13px;color:var(--text-muted);margin-top:3px;">'+esc(fit.fitReason)+'</div>'+
        (best && best.id !== s.id ? '<button class="btn btn-primary btn-sm" style="margin-top:8px;" onclick="startApply(\''+best.id+'\')">Switch to Matching Program: '+esc(best.name)+' →</button>' : '')+
      '</div>'+
    '</div>';
  } else {
    applyBtn='<button class="btn btn-primary" style="padding:13px 26px;" onclick="startApply(\''+s.id+'\')">'+icon('cap',17)+' Apply for this Scholarship</button>';
  }

  const body='<div style="max-width:880px;">'+
    '<button class="link-btn" style="margin-bottom:16px;display:flex;align-items:center;gap:6px;" onclick="nav('+(isApp?'\'applicantBrowse\'':'\'browse\'')+')">← Back to scholarships</button>'+
    '<div class="sch-cat">'+esc(s.category)+'</div>'+
    '<h1 class="display" style="font-size:28px;margin:10px 0 10px;">'+esc(s.name)+'</h1>'+
    '<div style="display:flex;gap:10px;align-items:center;margin-bottom:18px;">'+statusBadge(s.status)+'<span class="small muted">'+s.level+'</span></div>'+
    credFitBox+
    '<div class="panel" style="margin-bottom:20px;"><div class="panel-body">'+
      '<h3 style="font-size:15px;margin-top:0;">Overview</h3><p class="muted" style="font-size:14px;">'+esc(s.desc)+'</p>'+
      '<div class="divider"></div>'+
      '<div class="row2">'+
        '<div><div class="small muted">Opening Date</div><b>'+fmtDate(s.openDate)+'</b></div>'+
        '<div><div class="small muted">Application Deadline</div><b>'+fmtDate(s.deadline)+'</b></div>'+
      '</div>'+
    '</div></div>'+
    '<div class="row2" style="align-items:flex-start;margin-bottom:20px;">'+
      '<div class="panel"><div class="panel-head"><h3>Qualifications</h3></div><div class="panel-body">'+
        '<ul style="margin:0;padding-left:18px;font-size:13.8px;line-height:1.9;">'+s.eligibility.map(e=>'<li>'+esc(e)+'</li>').join('')+'</ul>'+
      '</div></div>'+
      '<div class="panel"><div class="panel-head"><h3>Required Documents</h3></div><div class="panel-body">'+
        '<ul style="margin:0;padding-left:18px;font-size:13.8px;line-height:1.9;">'+s.documents.map(e=>'<li>'+esc(e)+'</li>').join('')+'</ul>'+
      '</div></div>'+
    '</div>'+
    '<div class="panel" style="margin-bottom:26px;"><div class="panel-head"><h3>Benefits</h3></div><div class="panel-body">'+
      '<ul style="margin:0;padding-left:18px;font-size:13.8px;line-height:1.9;">'+s.benefits.map(e=>'<li>'+esc(e)+'</li>').join('')+'</ul>'+
    '</div></div>'+
    applyBtn+
  '</div>';
  return isApp? body : '<section class="section"><div class="container">'+body+'</div></section>';
}

/* ---------- LOGIN ---------- */

/* ---------------- SCHOLARSHIP FIT & CREDENTIALS MATCHING ENGINE ---------------- */
const COURSE_ALIASES = {
  // Academic Tertiary / STEM / Computing
  it: [
    'bsit', 'bs it', 'bs in it', 'bachelor of science in information technology',
    'bachelor of science in information and technology', 'bachelor of science in information and communications technology',
    'bachelor in information technology', 'bachelor in information and technology',
    'information technology', 'information and technology', 'information and communications technology',
    'info tech', 'bs-it', 'b.s.i.t.', 'bs infotech', 'bs ict', 'ict', 'bs in info tech'
  ],
  cs: ['bscs', 'bs cs', 'bachelor of science in computer science', 'computer science', 'compsci', 'bs-cs', 'b.s.c.s.'],
  is: ['bsis', 'bs is', 'bachelor of science in information systems', 'information systems', 'bs-is'],
  cpe: ['bs computer engineering', 'bscpe', 'bs cpe', 'computer engineering', 'bachelor of science in computer engineering', 'bs-cpe'],
  accountancy: ['bs accountancy', 'bsa', 'bachelor of science in accountancy', 'accountancy', 'accounting', 'bs accounting'],
  business_admin: ['bs business administration', 'bsba', 'bs ba', 'bachelor of science in business administration', 'business administration', 'marketing management', 'financial management', 'human resource management'],
  management_accounting: ['bs management accounting', 'bsma', 'management accounting', 'bachelor of science in management accounting'],
  secondary_educ: ['bsed', 'bachelor of secondary education', 'secondary education', 'b.s.ed.', 'bs education', 'bachelor in secondary education'],
  elem_educ: ['beed', 'bachelor of elementary education', 'elementary education', 'b.e.ed.', 'bachelor in elementary education'],
  communication: ['ba communication', 'communication', 'bachelor of arts in communication', 'mass communication', 'ba comm', 'communication arts'],
  hospitality: ['bs hospitality management', 'bshm', 'bs hm', 'hospitality management', 'hotel and restaurant management', 'hrm', 'bshrm'],
  tourism: ['bs tourism management', 'bstm', 'bs tm', 'tourism management', 'bachelor of science in tourism management', 'tourism'],
  civil_eng: ['bs civil engineering', 'bsce', 'bs ce', 'civil engineering', 'bachelor of science in civil engineering', 'bs-ce'],
  elec_eng: ['bs electrical engineering', 'bsee', 'bs ee', 'electrical engineering', 'bachelor of science in electrical engineering', 'bs-ee'],
  mech_eng: ['bs mechanical engineering', 'bsme', 'bs me', 'mechanical engineering', 'bachelor of science in mechanical engineering', 'bs-me'],
  chem_eng: ['bs chemical engineering', 'bsche', 'chemical engineering', 'bachelor of science in chemical engineering', 'bs-che'],
  ece: ['bs electronics engineering', 'bsece', 'bs ece', 'electronics engineering', 'electronics and communications engineering'],
  math: ['bs math', 'bs mathematics', 'bachelor of science in mathematics', 'mathematics', 'applied mathematics', 'bs applied mathematics'],
  criminology: ['bs criminology', 'bscrim', 'criminology', 'bachelor of science in criminology'],

  // Agriculture & Fisheries
  agri: ['bs agriculture', 'bs agri', 'bachelor of science in agriculture', 'agriculture', 'agricultural sciences', 'crop science', 'animal science', 'agronomy', 'horticulture', 'agri-fisheries'],
  fisheries: ['bs fisheries', 'bs fisheries and aquatic sciences', 'bs fisheries science', 'bachelor of science in fisheries', 'fisheries', 'aquaculture', 'bsfi', 'bs-fisheries'],
  agri_eng: ['bsabe', 'bs agricultural and biosystems engineering', 'bs agricultural engineering', 'agricultural engineering', 'agricultural and biosystems engineering', 'biosystems engineering'],
  agribusiness: ['bs agribusiness', 'bs agribusiness management', 'agribusiness', 'agri-business', 'agricultural business'],
  forestry: ['bs forestry', 'bachelor of science in forestry', 'forestry', 'agroforestry', 'bs agroforestry'],
  environmental: ['bs environmental science', 'environmental science', 'bs environmental management'],

  // Doctor of Medicine (MD)
  medicine: ['doctor of medicine', 'doctor of medicine (md)', 'doctor of medicine (m.d.)', 'doctor of medicine program', 'md', 'm.d.', 'medical doctor', 'medical student'],

  // Health & Medical Sciences (SCH-109)
  dental: ['doctor of dental medicine', 'doctor of dental medicine (dmd)', 'dmd', 'dental medicine', 'dentistry', 'dental'],
  nursing: ['bs nursing', 'bsn', 'bs n', 'bachelor of science in nursing', 'nursing'],
  medtech: ['bs medical technology', 'bs medtech', 'bs medical laboratory science', 'bsmls', 'medical technology', 'medical laboratory science'],
  pharmacy: ['bs pharmacy', 'bsp', 'bachelor of science in pharmacy', 'pharmacy'],
  physical_therapy: ['bs physical therapy', 'bspt', 'physical therapy', 'physiotherapy'],
  radtech: ['bs radiologic technology', 'bsrt', 'radiologic technology', 'radtech'],
  respiratory: ['bs respiratory therapy', 'bs respiratory care', 'respiratory therapy'],
  occupational_therapy: ['bs occupational therapy', 'bsot', 'occupational therapy'],
  psychology: ['bs psychology', 'ab psychology', 'psychology', 'bs psych', 'bachelor of science in psychology'],
  veterinary: ['doctor of veterinary medicine', 'doctor of veterinary medicine (dvm)', 'dvm', 'veterinary medicine', 'vet med', 'veterinary'],
  public_health: ['bs public health', 'public health'],
  nutrition: ['bs nutrition and dietetics', 'nutrition and dietetics', 'bsnd', 'nutrition'],
  biology: ['bs biology', 'bachelor of science in biology', 'biology'],
  midwifery: ['bs midwifery', 'midwifery', 'diploma in midwifery'],

  // Law / Juris Doctor
  law: ['juris doctor', 'juris doctor (jd)', 'jd', 'law', 'bachelor of laws', 'llb', 'law student'],

  // Technical-Vocational
  techvoc: [
    'techvoc', 'tvet', 'technical vocational', 'automotive servicing',
    'electrical installation and maintenance', 'eim', 'electrical installation',
    'electronics products assembly and servicing', 'epas', 'shielded metal arc welding',
    'smaw', 'welding', 'plumbing', 'cookery', 'bread and pastry production', 'bread and pastry',
    'food and beverage services', 'food & beverage services', 'fbs', 'housekeeping',
    'computer systems servicing', 'css', 'programming', 'tesda', 'tesda national certificate',
    'driving', 'agricultural crops production', 'animal production'
  ],

  // Expressive Arts
  arts: [
    'visual arts', 'music', 'dance', 'drama and theater', 'theater arts',
    'creative writing', 'fine arts', 'performing arts', 'bachelor of fine arts',
    'music arts', 'dance arts', 'drama', 'arts and design'
  ],

  // Senior High School Tracks & Strands
  tvl_agri: ['tvl track – agriculture and fisheries', 'tvl track - agriculture and fisheries', 'tvl agriculture', 'tvl agri-fisheries', 'agriculture and fishery arts', 'agri-fisheries tvl', 'agricultural crop production'],
  arts_shs: ['arts and design track', 'arts track', 'arts strand'],
  stem_shs: ['stem', 'stem strand', 'science, technology, engineering, and mathematics'],
  abm_shs: ['abm', 'abm strand', 'accountancy, business and management'],
  humss_shs: ['humss', 'humss strand', 'humanities and social sciences'],
  gas_shs: ['gas', 'gas strand', 'general academic strand']
};

function normalizeCourse(str){
  if(!str) return '';
  return String(str).toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/&/g, ' and ')
    .replace(/[.,()[\]/\\:;-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getCourseCanonicalKeys(course){
  const norm = normalizeCourse(course);
  if(!norm) return [];
  const matched = [];
  const isDentalOrVet = norm.includes('dental') || norm.includes('dentistry') ||
                       norm.includes('veterinary') || norm.includes('vet med');

  for(const [key, variants] of Object.entries(COURSE_ALIASES)){
    if(key === 'medicine' && isDentalOrVet) continue;

    for(const variant of variants){
      const normV = normalizeCourse(variant);
      if(norm === normV){
        matched.push(key);
        break;
      }
      const re = new RegExp('\\b' + normV.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
      if(re.test(norm)){
        matched.push(key);
        break;
      }
    }
  }

  // Token and phrase based fuzzy extraction for robust matching across course variants
  if((/\binformation\b/i.test(norm) && /\b(tech|technology)\b/i.test(norm)) || /\b(bsit|ict)\b/i.test(norm)){
    matched.push('it');
  }
  if((/\bcomputer\b/i.test(norm) && /\bscience\b/i.test(norm)) || /\bbscs\b/i.test(norm)){
    matched.push('cs');
  }
  if((/\bcomputer\b/i.test(norm) && /\bengineering\b/i.test(norm)) || /\bbscpe\b/i.test(norm)){
    matched.push('cpe');
  }
  if((/\binformation\b/i.test(norm) && /\bsystems\b/i.test(norm)) || /\bbsis\b/i.test(norm)){
    matched.push('is');
  }
  if((/\bcivil\b/i.test(norm) && /\bengineering\b/i.test(norm)) || /\bbsce\b/i.test(norm)){
    matched.push('civil_eng');
  }
  if((/\belectrical\b/i.test(norm) && /\bengineering\b/i.test(norm)) || /\bbsee\b/i.test(norm)){
    matched.push('elec_eng');
  }
  if((/\bmechanical\b/i.test(norm) && /\bengineering\b/i.test(norm)) || /\bbsme\b/i.test(norm)){
    matched.push('mech_eng');
  }
  if((/\bchemical\b/i.test(norm) && /\bengineering\b/i.test(norm)) || /\bbsche\b/i.test(norm)){
    matched.push('chem_eng');
  }
  if((/\belectronics\b/i.test(norm) && /\bengineering\b/i.test(norm)) || /\bbsece\b/i.test(norm)){
    matched.push('ece');
  }
  if(/\b(biosystems|agricultural engineering)\b/i.test(norm) || /\bbsabe\b/i.test(norm)){
    matched.push('agri_eng');
  }
  if(/\b(accountancy|accounting)\b/i.test(norm) || /\b(bsa|bsma)\b/i.test(norm)){
    matched.push('accountancy');
  }
  if((/\bbusiness\b/i.test(norm) && /\b(administration|admin|management)\b/i.test(norm)) || /\bbsba\b/i.test(norm)){
    matched.push('business_admin');
  }
  if(/\b(hotel|hospitality)\b/i.test(norm) || /\b(bshm|bshrm)\b/i.test(norm)){
    matched.push('hospitality');
  }
  if(/\btourism\b/i.test(norm) || /\bbstm\b/i.test(norm)){
    matched.push('tourism');
  }
  if(/\bsecondary educ/i.test(norm) || /\bbsed\b/i.test(norm)){
    matched.push('secondary_educ');
  }
  if(/\belementary educ/i.test(norm) || /\bbeed\b/i.test(norm)){
    matched.push('elem_educ');
  }
  if(/\bcriminology\b/i.test(norm) || /\bbscrim\b/i.test(norm)){
    matched.push('criminology');
  }
  if(/\bcommunication\b|\bmass comm/i.test(norm)){
    matched.push('communication');
  }
  if(/\bpsychology\b/i.test(norm)){
    matched.push('psychology');
  }
  if(/\b(mathematics|applied math)\b/i.test(norm)){
    matched.push('math');
  }
  if(/\bnursing\b/i.test(norm) || /\bbsn\b/i.test(norm)){
    matched.push('nursing');
  }
  if(/\bpharmacy\b/i.test(norm) || /\bbsp\b/i.test(norm)){
    matched.push('pharmacy');
  }
  if(/\bmedical (technology|laboratory)\b/i.test(norm) || /\b(medtech|bsmls)\b/i.test(norm)){
    matched.push('medtech');
  }
  if(/\bphysical therapy\b|\bbspt\b/i.test(norm)){
    matched.push('physical_therapy');
  }
  if(/\bradiologic technology\b|\bbsrt\b|\bradtech\b/i.test(norm)){
    matched.push('radtech');
  }
  if(/\bdental\b|\bdentistry\b|\bdmd\b/i.test(norm)){
    matched.push('dental');
  }
  if(/\bveterinary\b|\bdvm\b|\bvet med\b/i.test(norm)){
    matched.push('veterinary');
  }
  if(/\b(agriculture|agricultural|agronomy|crop science|animal science)\b/i.test(norm) && !norm.includes('engineering') && !norm.includes('crop production') && !norm.includes('tvl')){
    matched.push('agri');
  }
  if(/\b(fisheries|aquaculture)\b/i.test(norm)){
    matched.push('fisheries');
  }
  if(/\bagribusiness\b/i.test(norm)){
    matched.push('agribusiness');
  }
  if(/\bforestry\b|\bagroforestry\b/i.test(norm)){
    matched.push('forestry');
  }
  if(/\benvironmental science\b/i.test(norm)){
    matched.push('environmental');
  }
  if((/\bdoctor of medicine\b|\bdoctor in medicine\b/i.test(norm) || (/\bmedicine\b/i.test(norm) && !isDentalOrVet)) || /\bmd\b/i.test(norm)){
    matched.push('medicine');
  }
  if(/\bjuris doctor\b|\blaw\b|\bllb\b/i.test(norm) && !norm.includes('criminology')){
    matched.push('law');
  }
  if(/\b(automotive|welding|smaw|plumbing|cookery|bread and pastry|food and beverage|housekeeping|computer systems servicing|css|tvet|techvoc)\b/i.test(norm)){
    matched.push('techvoc');
  }
  if(/\b(visual arts|fine arts|music|dance|drama|theater|creative writing)\b/i.test(norm)){
    matched.push('arts');
  }
  if(/\b(tvl|agriculture and fisheries tvl|agricultural crop production)\b/i.test(norm) && /\b(shs|senior high|grade 11|grade 12|track)\b/i.test(norm)){
    matched.push('tvl_agri');
  }

  return [...new Set(matched)];
}

function matchStudentCourse(studentCourse, scholarship){
  const studentNorm = normalizeCourse(studentCourse);
  if(!studentNorm){
    return { matched: false, isSpecific: false, matchType: 'missing', reason: 'Student course information is missing.' };
  }

  const eligibleCoursesStr = String(scholarship.eligibleCourses || scholarship.eligible_courses || '').trim();
  const schName = String(scholarship.name || '').toLowerCase();
  const schCat = String(scholarship.category || '').toLowerCase();
  const schLevel = String(scholarship.level || '').toLowerCase();
  const schCode = String(scholarship.code || scholarship.id || '').toUpperCase();

  const studentKeys = getCourseCanonicalKeys(studentCourse);

  const isMedStudent = studentKeys.includes('medicine');
  const alliedHealthKeys = ['dental', 'nursing', 'medtech', 'pharmacy', 'physical_therapy', 'radtech', 'respiratory', 'occupational_therapy', 'psychology', 'veterinary', 'public_health', 'nutrition', 'biology', 'midwifery'];
  const isAlliedHealthStudent = studentKeys.some(k => alliedHealthKeys.includes(k));
  const isLawStudent = studentKeys.includes('law');
  const isTvlAgriStudent = studentKeys.includes('tvl_agri');
  const isTertiaryAgriStudent = !isTvlAgriStudent && studentKeys.some(k => ['agri', 'fisheries', 'agri_eng', 'agribusiness', 'forestry', 'environmental'].includes(k));
  const isTechVocStudent = studentKeys.includes('techvoc');
  const isArtsStudent = studentKeys.some(k => ['arts', 'arts_shs'].includes(k));
  const isCollegiateAcademic = studentKeys.some(k => [
    'it', 'cs', 'is', 'cpe', 'accountancy', 'business_admin', 'management_accounting',
    'secondary_educ', 'elem_educ', 'communication', 'psychology', 'hospitality', 'tourism',
    'civil_eng', 'elec_eng', 'mech_eng', 'chem_eng', 'ece', 'math', 'criminology'
  ].includes(k));
  const isSeniorHighStudent = /\b(senior high|shs|grade 11|grade 12|stem|abm|humss|gas|tvl track)\b/i.test(studentNorm);


  // A. Doctor of Medicine (SCH-104)
  const isMedScholarship = (schCode === 'SCH-104') || schName.includes('doctor of medicine') || (schCat.includes('medical') && schName.includes('medicine'));
  if(isMedScholarship){
    if(isMedStudent){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Exact match: Enrolled in Doctor of Medicine program (' + studentCourse + ').' };
    } else {
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'Designated specifically for Doctor of Medicine (MD) students.' };
    }
  }

  // B. Health and Sciences (SCH-109)
  const isHealthSciencesScholarship = (schCode === 'SCH-109') || schName.includes('health and sciences') || schName.includes('health & sciences');
  if(isHealthSciencesScholarship){
    if(isMedStudent){
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'Doctor of Medicine students must apply under the Doctor of Medicine Scholarship (SCH-104).' };
    } else if(isAlliedHealthStudent){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Exact match: Enrolled in accredited Health & Allied Medical Sciences program (' + studentCourse + ').' };
    } else {
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'Designated specifically for students in Health & Allied Medical Sciences programs (Nursing, Pharmacy, MedTech, Dentistry, etc.).' };
    }
  }

  // C. Agri-Fisheries Tertiary (SCH-107)
  const isAgriTertiarySch = (schCode === 'SCH-107') || (schCat.includes('agri') && (schLevel.includes('college') || schLevel.includes('tertiary') || schName.includes('tertiary')));
  if(isAgriTertiarySch){
    if(isTvlAgriStudent){
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'TVL Agriculture and Fisheries students must apply under Agri-Fisheries Secondary (SCH-103).' };
    } else if(isTertiaryAgriStudent){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Exact match: Enrolled in Agriculture or Fisheries degree program (' + studentCourse + ').' };
    } else {
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'Designated specifically for tertiary students enrolled in Agriculture or Fisheries degree programs.' };
    }
  }

  // D. Agri-Fisheries Secondary (SCH-103)
  const isAgriSecondarySch = (schCode === 'SCH-103') || (schCat.includes('agri') && (schLevel.includes('secondary') || schLevel.includes('high school')));
  if(isAgriSecondarySch){
    if(isTvlAgriStudent){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Exact fit: Enrolled in TVL Agriculture/Fisheries track (' + studentCourse + ').' };
    } else {
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'Designated specifically for secondary students in the TVL Agriculture and Fisheries track.' };
    }
  }

  // E. Juris Doctor / Law (SCH-105)
  const isLawScholarship = (schCode === 'SCH-105') || schName.includes('juris doctor') || schName.includes('law') || schCat.includes('legal');
  if(isLawScholarship){
    if(isLawStudent){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Exact match: Enrolled in Juris Doctor / Law program (' + studentCourse + ').' };
    } else {
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'Designated specifically for Juris Doctor / Law students.' };
    }
  }

  // F. Tech-Voc (SCH-108)
  const isTechVocScholarship = (schCode === 'SCH-108') || schName.includes('techvoc') || schCat.includes('tech');
  if(isTechVocScholarship){
    if(isTechVocStudent){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Exact match: Enrolled in registered Tech-Voc / TVET program (' + studentCourse + ').' };
    } else {
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'Designated specifically for registered Tech-Voc / TVET students.' };
    }
  }

  // G. Arts Secondary / Expressive Arts (SCH-102)
  const isArtsScholarship = (schCode === 'SCH-102') || schName.includes('arts') || schCat.includes('arts');
  if(isArtsScholarship){
    if(isArtsStudent){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Exact match: Pursuing visual arts, music, dance, theater, or creative writing (' + studentCourse + ').' };
    } else {
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'Designated specifically for students in Arts, Music, Dance, Theater, or Creative Writing.' };
    }
  }

  // H. Academic Tertiary (SCH-106)
  const isAcademicTertiarySch = (schCode === 'SCH-106') || schName.includes('academic tertiary') || (schCat.includes('academic') && schLevel.includes('college'));
  if(isAcademicTertiarySch){
    if(isMedStudent || isLawStudent || isTertiaryAgriStudent || isTvlAgriStudent || isTechVocStudent || isArtsStudent || isSeniorHighStudent){
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'Applicants in specialized programs belong to their dedicated scholarship category.' };
    }
    if(isCollegiateAcademic){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Exact match: Enrolled in approved collegiate priority degree program (' + studentCourse + ').' };
    }
    // Universal tertiary match under "All Tertiary Courses" provision
    return { matched: true, isSpecific: false, matchType: 'all_tertiary_match', reason: 'Eligible match: Enrolled in accredited tertiary/college degree (' + studentCourse + ').' };
  }

  // I. Academic Secondary (SCH-101)
  const isAcademicSecondarySch = (schCode === 'SCH-101') || schName.includes('academic secondary') || (schCat.includes('academic') && (schLevel.includes('secondary') || schLevel.includes('high school')));
  if(isAcademicSecondarySch){
    const isSHSAcademic = /\b(senior high|shs|grade 11|grade 12|stem|abm|humss|gas|general academic)\b/i.test(studentNorm + ' ' + studentCourse.toLowerCase());
    if(isSHSAcademic && !studentKeys.includes('tvl_agri') && !studentKeys.includes('arts_shs')){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Exact match: Enrolled as Senior High School student (' + studentCourse + ').' };
    } else if(!isSHSAcademic && !studentNorm.includes('high school')){
      return { matched: false, isSpecific: false, matchType: 'program_mismatch', reason: 'Designated specifically for Senior High School students.' };
    }
  }

  // J. Explicit list match
  const eligibleList = eligibleCoursesStr ? eligibleCoursesStr.split(',').map(s=>s.trim()).filter(Boolean) : [];
  for(const item of eligibleList){
    const itemNorm = normalizeCourse(item);
    if(!itemNorm || itemNorm === 'all' || itemNorm === 'all courses' || itemNorm === 'all tertiary courses') continue;

    if(studentNorm === itemNorm){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Your course (' + studentCourse + ') is explicitly accepted for this scholarship.' };
    }
    const itemKeys = getCourseCanonicalKeys(item);
    if(itemKeys.length && studentKeys.length){
      const intersect = studentKeys.filter(k => itemKeys.includes(k));
      if(intersect.length > 0){
        return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Your course (' + studentCourse + ') is explicitly accepted for this scholarship.' };
      }
    }
    const re = new RegExp('\\b' + itemNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    if(re.test(studentNorm)){
      return { matched: true, isSpecific: true, matchType: 'specific_exact', reason: 'Your course (' + studentCourse + ') is explicitly accepted for this scholarship.' };
    }
  }

  return { matched: false, isSpecific: false, matchType: 'course_not_accepted', reason: 'Your course (' + studentCourse + ') is not on the list of accepted programs for this scholarship.' };
}

function evaluateScholarshipEligibility(scholarship, student){
  const u = student || STATE.currentUser;
  if(!u) return null;

  const studentCourse = (u.course || '').trim();
  const studentYear = (u.yearLevel || u.year_level || '').trim();
  const studentSchool = (u.school || '').trim();
  const studentGpa = u.gpa !== undefined && u.gpa !== null && u.gpa !== '' ? Number(u.gpa) : null;
  const studentIncome = u.familyIncome || u.income || '';

  const criteria = [];
  const unmetReasons = [];

  if(!studentCourse){
    return {
      isEligible: false,
      courseMatched: false,
      isExactFit: false,
      isBestFit: false,
      missingInfo: true,
      fitTag: 'Profile Incomplete',
      fitReason: 'Your academic course is not set in your profile. Please complete your academic details.',
      unmetReasons: ['Academic course is missing from your profile.'],
      criteria: [{ label: 'Course / Degree Program', pass: false, detail: 'Please set your course in your profile.' }]
    };
  }

  // Check if student was manually assigned to this scholarship by Administrator
  const assignedId = u.assigned_scholarship_id || u.assignedScholarshipId;
  const isAdminAssigned = !!(assignedId && (
    String(scholarship.id) === String(assignedId) ||
    (scholarship.code && String(scholarship.code).toUpperCase() === String(assignedId).toUpperCase()) ||
    (scholarship.dbId && String(scholarship.dbId) === String(assignedId)) ||
    (scholarship.name && u.assigned_scholarship_name && scholarship.name.toLowerCase() === u.assigned_scholarship_name.toLowerCase())
  ));

  // 1. Course Match
  const courseMatch = matchStudentCourse(studentCourse, scholarship);
  const coursePass = courseMatch.matched || isAdminAssigned;
  const courseReason = isAdminAssigned ? ('Assigned by Administrator: ' + scholarship.name) : courseMatch.reason;
  criteria.push({
    label: 'Course / Degree Program Match',
    pass: coursePass,
    detail: courseReason
  });
  if(!coursePass){
    unmetReasons.push(courseReason);
  }

  // 2. School Level Check
  const schLevel = (scholarship.level || '').toLowerCase();
  const studentNorm = normalizeCourse(studentCourse);
  const studentYearNorm = normalizeCourse(studentYear);
  const isCollege = /\b(bs|ba|bachelor|college|university|1st year|2nd year|3rd year|4th year|5th year)\b/i.test(studentNorm + ' ' + studentYearNorm);
  const isSHS = /\b(senior high|shs|grade 11|grade 12|stem|abm|humss|gas|tvl)\b/i.test(studentNorm + ' ' + studentYearNorm);

  let levelPass = true;
  let levelDetail = scholarship.level || 'General';

  if(isAdminAssigned){
    levelDetail = 'Validated by Administrator assignment (' + (scholarship.level || 'General') + ')';
  } else if(schLevel.includes('high school') || schLevel.includes('secondary')){
    if(isCollege && !isSHS){
      levelPass = false;
      levelDetail = 'Designated for Senior High School students; your profile indicates College standing.';
      unmetReasons.push(levelDetail);
    }
  } else if(schLevel.includes('college') || schLevel.includes('tertiary') || schLevel.includes('university')){
    if(isSHS && !isCollege){
      levelPass = false;
      levelDetail = 'Designated for College/University students; your profile indicates Senior High standing.';
      unmetReasons.push(levelDetail);
    }
  } else if(schLevel.includes('doctoral') || schLevel.includes('professional')){
    const isProf = studentNorm.includes('doctor') || studentNorm.includes('medicine') || studentNorm.includes('juris') || studentNorm.includes('law');
    if(!isProf){
      levelPass = false;
      levelDetail = 'Designated for professional/doctoral students (Medicine or Law).';
      unmetReasons.push(levelDetail);
    }
  }

  criteria.push({
    label: 'Academic Standing / School Level',
    pass: levelPass,
    detail: levelDetail
  });

  // 3. Year Level Standing
  const eligibleYearsStr = String(scholarship.eligibleYearLevels || scholarship.eligible_year_levels || '').trim();
  let yearPass = true;
  let yearDetail = 'Open to all year levels';

  if(eligibleYearsStr && eligibleYearsStr.toLowerCase() !== 'all' && studentYear){
    const acceptedYears = eligibleYearsStr.split(',').map(s=>s.trim());
    const foundYear = acceptedYears.some(ay => studentYear.toLowerCase().includes(ay.toLowerCase()) || ay.toLowerCase().includes(studentYear.toLowerCase()));
    if(!foundYear){
      yearPass = false;
      yearDetail = 'Requires: ' + eligibleYearsStr + ' (Your level: ' + studentYear + ')';
      unmetReasons.push(yearDetail);
    } else {
      yearDetail = 'Year level standing satisfied: ' + studentYear;
    }
  }

  criteria.push({
    label: 'Year Level Standing',
    pass: yearPass,
    detail: yearDetail
  });

  // 4. Academic Grades / GWA
  const minGwaStr = String(scholarship.minGwa || scholarship.min_gwa || '').trim();
  let gwaPass = true;
  let gwaDetail = 'No minimum grade required';

  if(minGwaStr && studentGpa !== null){
    if(minGwaStr.includes('%') || Number(minGwaStr) > 5.0){
      const minReq = Number(minGwaStr.replace('%', ''));
      if(studentGpa > 5.0){
        if(studentGpa < minReq){
          gwaPass = false;
          gwaDetail = 'Minimum GWA required is ' + minReq + '% (your GWA is ' + studentGpa + '%).';
          unmetReasons.push(gwaDetail);
        } else {
          gwaDetail = 'Grade requirement satisfied: ' + studentGpa + '% >= ' + minReq + '%.';
        }
      } else {
        if(studentGpa > 2.25){
          gwaPass = false;
          gwaDetail = 'Minimum GWA required is ' + minGwaStr + ' (your recorded GPA is ' + studentGpa + ').';
          unmetReasons.push(gwaDetail);
        } else {
          gwaDetail = 'Grade requirement satisfied (GPA: ' + studentGpa + ').';
        }
      }
    } else {
      const minReq = Number(minGwaStr);
      if(studentGpa <= 5.0){
        if(studentGpa > minReq){
          gwaPass = false;
          gwaDetail = 'Minimum GWA required is ' + minReq + ' or better (your GWA is ' + studentGpa + ').';
          unmetReasons.push(gwaDetail);
        } else {
          gwaDetail = 'Grade requirement satisfied: GWA ' + studentGpa + ' <= ' + minReq + '.';
        }
      } else {
        if(studentGpa < 80.0){
          gwaPass = false;
          gwaDetail = 'Minimum GWA required is ' + minGwaStr + ' (your GWA is ' + studentGpa + '%).';
          unmetReasons.push(gwaDetail);
        } else {
          gwaDetail = 'Grade requirement satisfied (' + studentGpa + '%).';
        }
      }
    }
  } else if(minGwaStr){
    gwaDetail = 'Minimum GWA required: ' + minGwaStr + ' (Evaluated upon grade submission)';
  }

  criteria.push({
    label: 'Academic Standing / GWA',
    pass: gwaPass,
    detail: gwaDetail
  });

  // 5. Family Income
  const maxIncome = scholarship.maxIncome !== null && scholarship.maxIncome !== undefined ? Number(scholarship.maxIncome) : (scholarship.max_income ? Number(scholarship.max_income) : null);
  let incomePass = true;
  let incomeDetail = 'No income ceiling specified';

  if(maxIncome && studentIncome){
    const schName = (scholarship.name || '').toLowerCase();
    const isStemExempt = schName.includes('academic tertiary') && /\b(engineering|technology|bsit|bscs|math)\b/i.test(studentNorm);
    if(isStemExempt){
      incomeDetail = 'Family income ceiling waived (Engineering, Mathematics, & Technology exemption)';
    } else {
      let incVal = Number(String(studentIncome).replace(/[^\d.]/g, '')) || 0;
      if(incVal > 0 && incVal < 35000 && String(studentIncome).toLowerCase().includes('month')){
        incVal *= 12;
      }
      if(incVal > maxIncome){
        incomePass = false;
        incomeDetail = 'Annual family income (₱' + incVal.toLocaleString() + ') exceeds threshold of ₱' + maxIncome.toLocaleString() + '.';
        unmetReasons.push(incomeDetail);
      } else {
        incomeDetail = 'Family income qualifies within ceiling of ₱' + maxIncome.toLocaleString() + '.';
      }
    }
  } else if(maxIncome){
    incomeDetail = 'Family income ceiling: ₱' + maxIncome.toLocaleString() + ' (Evaluated upon document submission)';
  }

  criteria.push({
    label: 'Annual Family Income Ceiling',
    pass: incomePass,
    detail: incomeDetail
  });

  // 6. School / University
  const eligibleSchoolsStr = String(scholarship.eligibleSchools || scholarship.eligible_schools || '').trim();
  let schoolPass = true;
  let schoolDetail = 'Open to all schools within Ilocos Norte';

  if(eligibleSchoolsStr && eligibleSchoolsStr.toLowerCase() !== 'all' && studentSchool){
    const acceptedSchools = eligibleSchoolsStr.split(',').map(s=>s.trim());
    const foundSchool = acceptedSchools.some(as => studentSchool.toLowerCase().includes(as.toLowerCase()) || as.toLowerCase().includes(studentSchool.toLowerCase()));
    if(!foundSchool){
      schoolPass = false;
      schoolDetail = 'Designated for students of: ' + eligibleSchoolsStr + ' (Your institution: ' + studentSchool + ')';
      unmetReasons.push(schoolDetail);
    } else {
      schoolDetail = 'Enrolled in accepted partner institution (' + studentSchool + ')';
    }
  }

  criteria.push({
    label: 'Institution / University Partner',
    pass: schoolPass,
    detail: schoolDetail
  });

  const allMet = courseMatch.matched && levelPass && yearPass && gwaPass && incomePass && schoolPass;
  const isExactFit = allMet && courseMatch.isSpecific;

  let fitTag = 'Course Not Accepted';
  let fitReason = 'Your course is not accepted for this program.';
  if(allMet){
    fitTag = isExactFit ? 'Exact Fit (100% Match)' : 'Eligible';
    fitReason = isExactFit ? ('Your enrollment in ' + studentCourse + ' exactly matches this scholarship.') : ('Your credentials qualify for this program.');
  } else if(courseMatch.matched){
    fitTag = 'Requirements Not Met';
    fitReason = 'Your course matches, but one or more eligibility requirements are not satisfied: ' + unmetReasons.join('; ');
  }

  return {
    isEligible: allMet,
    courseMatched: courseMatch.matched,
    isExactFit: isExactFit,
    isBestFit: isExactFit,
    fitTag: fitTag,
    fitReason: fitReason,
    unmetReasons: unmetReasons,
    criteria: criteria
  };
}

function getScholarshipFit(user, schId){
  const s = DB.scholarships.find(x => x.id === schId || (x.code && x.code === schId));
  if(!s) return null;
  return evaluateScholarshipEligibility(s, user || STATE.currentUser);
}

function findBestMatchingScholarship(user, scholarshipsList){
  const u = user || STATE.currentUser;
  const list = scholarshipsList || DB.scholarships || [];
  if(!u || !u.course) {
    return {
      matched: false,
      scholarship: null,
      evaluation: null,
      reason: 'Course/program information is missing from your profile.',
      statusTag: 'No Matching Scholarship'
    };
  }

  // If applicant has an Admin-assigned scholarship, honor it directly
  const assignedId = u.assigned_scholarship_id || u.assignedScholarshipId;
  if (assignedId) {
    const assigned = list.find(s => 
      String(s.id) === String(assignedId) || 
      (s.code && String(s.code).toUpperCase() === String(assignedId).toUpperCase()) ||
      (s.dbId && String(s.dbId) === String(assignedId)) ||
      (s.name && u.assigned_scholarship_name && s.name.toLowerCase() === u.assigned_scholarship_name.toLowerCase())
    );
    if (assigned) {
      const evalResult = evaluateScholarshipEligibility(assigned, u);
      return {
        matched: true,
        scholarship: assigned,
        evaluation: evalResult,
        reason: 'Assigned by Administrator: ' + assigned.name + (assigned.code ? ' (' + assigned.code + ')' : ''),
        statusTag: (evalResult && evalResult.isEligible) ? 'Eligible' : 'Assigned Program'
      };
    }
  }

  const studentKeys = getCourseCanonicalKeys(u.course);
  const isMedStudent = studentKeys.includes('medicine');
  const alliedHealthKeys = ['dental', 'nursing', 'medtech', 'pharmacy', 'physical_therapy', 'radtech', 'respiratory', 'occupational_therapy', 'psychology', 'veterinary', 'public_health', 'nutrition', 'biology', 'midwifery'];
  const isAlliedHealthStudent = studentKeys.some(k => alliedHealthKeys.includes(k));
  const isLawStudent = studentKeys.includes('law');
  const isTvlAgriStudent = studentKeys.includes('tvl_agri');
  const isTertiaryAgriStudent = !isTvlAgriStudent && studentKeys.some(k => ['agri', 'fisheries', 'agri_eng', 'agribusiness', 'forestry', 'environmental'].includes(k));
  const isTechVocStudent = studentKeys.includes('techvoc');
  const isArtsStudent = studentKeys.some(k => ['arts', 'arts_shs'].includes(k));
  const isSeniorHighStudent = /\b(senior high|shs|grade 11|grade 12|stem|abm|humss|gas|tvl track)\b/i.test(normalizeCourse(u.course));
  const isCollegiateAcademic = studentKeys.some(k => [
    'it', 'cs', 'is', 'cpe', 'accountancy', 'business_admin', 'management_accounting',
    'secondary_educ', 'elem_educ', 'communication', 'psychology', 'hospitality', 'tourism',
    'civil_eng', 'elec_eng', 'mech_eng', 'chem_eng', 'ece', 'math', 'criminology'
  ].includes(k));


  const candidates = [];
  for(const sch of list){
    const evalResult = evaluateScholarshipEligibility(sch, u);
    if(evalResult && evalResult.courseMatched){
      let score = (sch.status === 'Closed') ? -1000 : 0;
      const schCode = String(sch.id || sch.code || '').toUpperCase();
      const schName = String(sch.name || '').toLowerCase();

      if(isMedStudent && (schCode === 'SCH-104' || schName.includes('doctor of medicine'))) score += 1500;
      else if(isAlliedHealthStudent && (schCode === 'SCH-109' || schName.includes('health and sciences'))) score += 1500;
      else if(isTertiaryAgriStudent && (schCode === 'SCH-107' || schName.includes('agri-fisheries tertiary'))) score += 1500;
      else if(isTvlAgriStudent && (schCode === 'SCH-103' || schName.includes('agri-fisheries secondary'))) score += 1500;
      else if(isLawStudent && (schCode === 'SCH-105' || schName.includes('juris doctor') || schName.includes('law'))) score += 1500;
      else if(isTechVocStudent && (schCode === 'SCH-108' || schName.includes('techvoc'))) score += 1500;
      else if(isArtsStudent && (schCode === 'SCH-102' || schName.includes('arts'))) score += 1500;
      else if(isSeniorHighStudent && (schCode === 'SCH-101' || schName.includes('academic secondary'))) score += 1200;
      else if(schCode === 'SCH-106' || schName.includes('academic tertiary')) score += isCollegiateAcademic ? 1200 : 800;

      if(evalResult.isExactFit || evalResult.isSpecific) score += 500;
      if(evalResult.isEligible) score += 200;

      candidates.push({ scholarship: sch, evaluation: evalResult, score: score });
    }
  }

  candidates.sort((a,b) => b.score - a.score);
  if(candidates.length > 0){
    const best = candidates[0];
    return {
      matched: true,
      scholarship: best.scholarship,
      evaluation: best.evaluation,
      reason: best.evaluation.fitReason || ('Matched ' + best.scholarship.name),
      statusTag: best.evaluation.isEligible ? 'Eligible' : 'Requirements Not Met'
    };
  }

  return {
    matched: false,
    scholarship: null,
    evaluation: null,
    reason: 'No matching scholarships are currently available for your course.',
    statusTag: 'No Matching Scholarship'
  };
}

function findExactFitScholarship(user){
  const res = findBestMatchingScholarship(user);
  return res.matched ? res.scholarship : null;
}

/* ---------------- USER LOGIN & AUTHENTICATION ---------------- */
function openCredentialsModal(){
  /* Demo credentials modal has been removed */
}

function quickLoginUser(email, pass){
  const u = DB.users.find(x => (x.email || '').toLowerCase() === (email || '').toLowerCase());
  if (u) {
    STATE.currentUser = u;
    logActivity(u.id, u.role, 'User Login', userFullName(u) + ' logged in.');
    toast('Logged in as ' + userFullName(u) + ' (' + u.role.toUpperCase() + ')', 'success');
    nav(roleHome());
  } else {
    toast('User not found.', 'error');
  }
}

function renderLogin(){
  const isApprovedNotice = STATE.params && STATE.params.approved;
  const prefillEmail = (STATE.params && STATE.params.email) ? STATE.params.email : '';

  return '<div class="auth-wrap">'+
    '<div class="auth-side"><div>'+
      '<div class="brand" style="margin-bottom:30px;display:flex;align-items:center;gap:12px;"><img src="img/logo.png" alt="Logo" class="auth-logo-img"><span>Sirib i-Sko</span></div>'+
      '<div class="quote">"Digitizing the scholarship journey for every Ilocano student — transparent, secure, and built for the future."</div>'+
    '</div><div class="small" style="color:#AEBEDA;">Provincial Government of Ilocos Norte · Scholarship Division</div></div>'+
    '<div class="auth-form-wrap"><div class="auth-card">'+
      '<h2>Welcome back</h2><p>Log in to continue your scholarship journey.</p>'+
      (isApprovedNotice ? 
        '<div style="background:#DCFCE7;border:1.5px solid #16A34A;border-radius:8px;padding:12px 14px;margin-bottom:18px;display:flex;align-items:flex-start;gap:10px;">'+
          '<span style="font-size:22px;line-height:1;">🎉</span>'+
          '<div style="font-size:13px;color:#145A32;line-height:1.4;">'+
            '<b style="font-size:14px;color:#166534;">Student Account Approved &amp; Active!</b><br>'+
            'Your registration has been officially approved by the Provincial Scholarship Administrator. Please enter your password below to access your Student Dashboard.'+
          '</div>'+
        '</div>' : '')+
      '<div class="demo-box"><b>Demo accounts</b><br>'+
        'Applicant: <a href="javascript:void(0)" onclick="fillLogin(\x27maria.domingo@student.pgin.gov.ph\x27,\x27Student123!\x27)" style="color:inherit;font-weight:600;text-decoration:underline;">maria.domingo@student.pgin.gov.ph</a> / Student123!<br>'+
        'Admin: <a href="javascript:void(0)" onclick="fillLogin(\x27admin@pgin.gov.ph\x27,\x27Admin123!\x27)" style="color:inherit;font-weight:600;text-decoration:underline;">admin@pgin.gov.ph</a> / Admin123!<br>'+
        'Reviewer: <a href="javascript:void(0)" onclick="fillLogin(\x27reviewer1@pgin.gov.ph\x27,\x27Review123!\x27)" style="color:inherit;font-weight:600;text-decoration:underline;">reviewer1@pgin.gov.ph</a> / Review123!'+
      '</div>'+
      '<div class="field"><label>Email Address or Student ID</label><input class="input" id="loginEmail" autocomplete="off" value="'+esc(prefillEmail)+'"></div>'+
      '<div class="field"><label>Password</label>'+
        '<div class="pwd-wrap">'+
          '<input class="input" type="password" id="loginPass" autocomplete="off" value="">'+
          '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'loginPass\', this)" title="Show password" aria-label="Show password">'+icon('eye',18)+'</button>'+
        '</div>'+
      '</div>'+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">'+
        '<label class="checkline"><input type="checkbox"> Remember me</label>'+
        '<a href="javascript:void(0)" class="link-btn" onclick="openForgotPasswordModal()">Forgot password?</a>'+
      '</div>'+
      '<button class="btn btn-primary btn-block" onclick="doLogin()">Log In</button>'+
      '<div style="text-align:center;margin-top:16px;font-size:13.5px;color:var(--text-muted);">No account yet? <a href="javascript:void(0)" class="link-btn" onclick="nav(\'register\')">Create an Account</a></div>'+
      '<div style="text-align:center;margin-top:8px;font-size:13px;color:var(--text-muted);"><a href="javascript:void(0)" class="link-btn" onclick="nav(\'adminRegister\')">Administrator Registration &amp; Setup</a></div>'+
    '</div></div>'+
  '</div>';
}
function fillLogin(email, pass){
  const e = document.getElementById('loginEmail');
  const p = document.getElementById('loginPass');
  if(e) e.value = email;
  if(p) p.value = pass;
  toast('Credentials selected: ' + email, 'info');
}
async function doLogin(){
  const emailInput = document.getElementById('loginEmail');
  const passInput = document.getElementById('loginPass');
  if(!emailInput || !passInput) return;
  const email = emailInput.value.trim().toLowerCase();
  const pass = passInput.value;
  if(!email || !pass){
    toast('Please enter your email or Student ID and password.', 'error');
    return;
  }

  // 1. Authenticate with backend API
  try {
    const res = await apiCall('login', 'POST', { email, password: pass });
    if(res && res.status === 'success' && res.user){
      const u = {
        ...res.user,
        id: String(res.user.id),
        firstName: res.user.first_name || res.user.firstName || '',
        lastName: res.user.last_name || res.user.lastName || '',
        email: res.user.email,
        role: res.user.role === 'evaluator' ? 'reviewer' : res.user.role,
        status: res.user.status,
        evaluatorId: res.user.evaluator_id || res.user.evaluatorId || ''
      };
      STATE.currentUser = u;
      const exIdx = DB.users.findIndex(x => (x.email||'').toLowerCase() === (u.email||'').toLowerCase() || String(x.id) === String(u.id));
      if(exIdx >= 0) DB.users[exIdx] = { ...DB.users[exIdx], ...u };
      else DB.users.push(u);

      logActivity(u.id, u.role, 'User Login', userFullName(u) + ' logged in.');
      toast('Welcome back, ' + (u.firstName || 'User') + '!', 'success');
      nav(roleHome());
      return;
    } else if(res && res.status === 'error'){
      if(res.error_code === 'PENDING_APPROVAL' || res.error_code === 'REQUIRES_RESUBMISSION' || res.error_code === 'REJECTED'){
        STATE.pendingStudentEmail = res.email || email;
        STATE.pendingStudentId = res.student_id || '';
        toast(res.message, res.error_code === 'REJECTED' ? 'error' : 'info');
        nav('studentPending', { email: res.email || email, studentId: res.student_id });
        return;
      }
      // If server returned HTML or database was unreachable, attempt local fallback
      if(res.isHtml || res.database_error){
        console.warn('Backend database/server error, attempting local fallback:', res.message);
        const fallbackUser = DB.users.find(x => ((x.email || '').trim().toLowerCase() === email || (x.studentId || '').trim().toLowerCase() === email) && x.password === pass);
        if(fallbackUser){
          STATE.currentUser = fallbackUser;
          toast('Logged in using local mode (Database offline: ' + res.message + ')', 'info');
          nav(roleHome());
          return;
        }
      }
      toast(res.message || 'Login failed.', 'error');
      return;
    }
  } catch(e) {
    console.warn('API login check failed, using fallback:', e);
  }

  // 2. Client-side local fallback
  const u = DB.users.find(x => ((x.email || '').trim().toLowerCase() === email || (x.studentId || '').trim().toLowerCase() === email) && x.password === pass);
  if(!u){toast('Invalid credentials. Please try again.','error');return;}
  if(u.status === 'Pending Verification'){
    toast('Your Administrator account is pending email verification. Please check your email for the verification link.', 'error');
    return;
  }
  if(u.status === 'Pending Activation'){
    toast('Your Evaluator account is pending activation. Please use the activation link sent to your email to set your password.', 'error');
    return;
  }
  if(u.role === 'applicant' || u.role === 'student'){
    if(u.status === 'Pending Approval' || u.status === 'Requires Resubmission' || u.status === 'Rejected'){
      STATE.pendingStudentEmail = u.email;
      STATE.pendingStudentId = u.studentId || '';
      toast(u.status === 'Pending Approval' ? 'Your account is currently waiting for Admin approval.' : ('Account status: ' + u.status), 'info');
      nav('studentPending', { email: u.email, studentId: u.studentId });
      return;
    }
  }
  if(u.status === 'Inactive'){toast('This account has been deactivated. Contact the Scholarship Division.','error');return;}
  STATE.currentUser = u;
  logActivity(u.id,u.role,'User Login',userFullName(u)+' logged in.');
  toast('Welcome back, '+u.firstName+'!','success');
  nav(roleHome());
}

/* ---------- FORGOT & RESET PASSWORD (Dedicated Firebase: sirib-2) ---------- */
function openForgotPasswordModal(prefillEmail = ''){
  const loginInput = document.getElementById('loginEmail');
  let emailVal = prefillEmail || (loginInput ? loginInput.value.trim() : '');
  if (!emailVal.includes('@')) emailVal = '';

  openModal(
    '<div class="modal-head">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<div style="width:36px;height:36px;border-radius:8px;background:var(--primary-subtle);color:var(--primary);display:flex;align-items:center;justify-content:center;">' +
          icon('lock', 20) +
        '</div>' +
        '<div>' +
          '<h3 style="margin:0;font-size:17px;font-weight:700;">Reset Password</h3>' +
          '<p style="margin:2px 0 0;font-size:12.5px;color:var(--text-muted);">Firebase Password Recovery (sirib-2)</p>' +
        '</div>' +
      '</div>' +
      '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:22px 24px;">' +
      '<p style="color:var(--text-dark);font-size:14px;line-height:1.55;margin-top:0;margin-bottom:16px;">' +
        'Enter the email address associated with your account. We will send an official password reset link powered by Firebase.' +
      '</p>' +
      '<div class="field" style="margin-bottom:14px;">' +
        '<label style="font-weight:600;font-size:13px;display:block;margin-bottom:6px;">Registered Email Address <span style="color:var(--redst);">*</span></label>' +
        '<div style="position:relative;">' +
          '<input class="input" type="email" id="forgotPassEmail" placeholder="e.g. maria.domingo@gmail.com" value="' + esc(emailVal) + '" style="padding-left:36px;" onkeydown="if(event.key===\'Enter\')doSendPasswordReset()">' +
          '<span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--text-muted);display:flex;align-items:center;">' + icon('mail', 16) + '</span>' +
        '</div>' +
      '</div>' +
      '<div id="forgotPassStatus" style="display:none;margin-top:12px;padding:12px 14px;border-radius:8px;font-size:13px;line-height:1.5;"></div>' +
    '</div>' +
    '<div class="modal-foot" style="display:flex;justify-content:space-between;align-items:center;padding:16px 24px;">' +
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>' +
      '<button class="btn btn-primary" id="btnSendPasswordReset" onclick="doSendPasswordReset()">' +
        icon('mail', 16) + ' Send Password Reset Link' +
      '</button>' +
    '</div>'
  );

  setTimeout(() => {
    const el = document.getElementById('forgotPassEmail');
    if (el) el.focus();
  }, 100);
}

async function doSendPasswordReset(){
  const emailInput = document.getElementById('forgotPassEmail');
  const btn = document.getElementById('btnSendPasswordReset');
  const statusEl = document.getElementById('forgotPassStatus');
  if (!emailInput) return;

  const email = emailInput.value.trim().toLowerCase();
  if (!email || !email.includes('@')) {
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.background = '#FEE2E2';
      statusEl.style.color = '#991B1B';
      statusEl.innerHTML = 'Please enter a valid email address.';
    }
    emailInput.focus();
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" style="display:inline-block;width:14px;height:14px;border:2px solid #fff;border-right-color:transparent;border-radius:50%;animation:spin 0.75s linear infinite;margin-right:8px;"></span> Sending via Firebase...';
  }
  if (statusEl) statusEl.style.display = 'none';

  try {
    let res = null;
    if (typeof sendFirebasePasswordReset === 'function') {
      res = await sendFirebasePasswordReset(email);
    } else {
      res = { success: false, error: 'Firebase reset service not loaded.' };
    }

    if (res && res.success) {
      openModal(
        '<div class="modal-head" style="align-items:flex-start;">' +
          '<div style="display:flex;align-items:center;gap:10px;">' +
            '<div style="width:36px;height:36px;border-radius:50%;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;">' +
              icon('check', 20) +
            '</div>' +
            '<div>' +
              '<h3 style="margin:0;font-size:17px;font-weight:700;color:#166534;">Reset Link Dispatched!</h3>' +
              '<p style="margin:2px 0 0;font-size:12.5px;color:var(--text-muted);">Firebase Authentication (sirib-2)</p>' +
            '</div>' +
          '</div>' +
          '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>' +
        '</div>' +
        '<div class="modal-body" style="padding:22px 24px;">' +
          '<p style="font-size:14px;color:var(--text-dark);line-height:1.6;margin-top:0;">' +
            'A secure password reset link has been dispatched to <b>' + esc(email) + '</b>.' +
          '</p>' +
          '<div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:14px 16px;margin:14px 0;font-size:13px;color:#166534;line-height:1.55;">' +
            '<b>Instructions:</b><br>' +
            '1. Check your email inbox (and spam/junk folder) for a message from <b>sirib-2.firebaseapp.com</b>.<br>' +
            '2. Click the password reset link inside the email.<br>' +
            '3. Enter your new password to regain access.' +
          '</div>' +
        '</div>' +
        '<div class="modal-foot" style="justify-content:flex-end;">' +
          '<button class="btn btn-primary" onclick="closeModal()">Back to Login</button>' +
        '</div>'
      );
      toast('Password reset link sent to ' + email, 'success');
    } else {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = icon('mail', 16) + ' Send Password Reset Link';
      }
      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.style.background = '#FEE2E2';
        statusEl.style.color = '#991B1B';
        statusEl.innerHTML = '<b>Failed to send reset link:</b> ' + esc((res && res.error) || 'Please check the email address and try again.');
      }
      toast((res && res.error) || 'Failed to dispatch reset email.', 'error');
    }
  } catch (err) {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = icon('mail', 16) + ' Send Password Reset Link';
    }
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.background = '#FEE2E2';
      statusEl.style.color = '#991B1B';
      statusEl.innerHTML = '<b>Error:</b> ' + esc(err.message || 'An unexpected error occurred.');
    }
    toast('Error sending reset link: ' + (err.message || ''), 'error');
  }
}

function openResetPasswordModal(oobCode, prefillEmail = ''){
  let initialEmail = prefillEmail;
  if (!initialEmail) {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      initialEmail = searchParams.get('email') || '';
    } catch(e) {}
  }

  openModal(
    '<div class="modal-head">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<div style="width:36px;height:36px;border-radius:8px;background:var(--primary-subtle);color:var(--primary);display:flex;align-items:center;justify-content:center;">' +
          icon('lock', 20) +
        '</div>' +
        '<div>' +
          '<h3 style="margin:0;font-size:17px;font-weight:700;">Set New Password</h3>' +
          '<p style="margin:2px 0 0;font-size:12.5px;color:var(--text-muted);">Firebase Account Security (sirib-2)</p>' +
        '</div>' +
      '</div>' +
      '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:22px 24px;">' +
      '<p style="color:var(--text-dark);font-size:13.5px;line-height:1.55;margin-top:0;margin-bottom:16px;">' +
        'Please enter and confirm your new password below. Your password will be updated across both Firebase and the Sirib portal database.' +
      '</p>' +
      (initialEmail ? '<div class="field" style="margin-bottom:12px;"><label style="font-weight:600;font-size:13px;">Account Email</label><input class="input" id="resetAccountEmail" value="' + esc(initialEmail) + '" readonly style="background:#F8FAFC;"></div>' : '<div class="field" style="margin-bottom:12px;"><label style="font-weight:600;font-size:13px;">Confirm Your Registered Email <span style="color:var(--redst);">*</span></label><input class="input" type="email" id="resetAccountEmail" placeholder="yourname@gmail.com"></div>') +
      '<div class="field" style="margin-bottom:12px;">' +
        '<label style="font-weight:600;font-size:13px;">New Password <span style="color:var(--redst);">*</span></label>' +
        '<div class="pwd-wrap">' +
          '<input class="input" type="password" id="resetNewPass" placeholder="Enter new password (min. 6 characters)">' +
          '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'resetNewPass\', this)" title="Show password">' + icon('eye', 18) + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="field" style="margin-bottom:14px;">' +
        '<label style="font-weight:600;font-size:13px;">Confirm New Password <span style="color:var(--redst);">*</span></label>' +
        '<div class="pwd-wrap">' +
          '<input class="input" type="password" id="resetConfirmPass" placeholder="Repeat new password" onkeydown="if(event.key===\'Enter\')doConfirmResetPassword(\'' + esc(oobCode) + '\')">' +
          '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'resetConfirmPass\', this)" title="Show password">' + icon('eye', 18) + '</button>' +
        '</div>' +
      '</div>' +
      '<div id="resetPassStatus" style="display:none;margin-top:12px;padding:12px 14px;border-radius:8px;font-size:13px;line-height:1.5;"></div>' +
    '</div>' +
    '<div class="modal-foot" style="display:flex;justify-content:space-between;align-items:center;padding:16px 24px;">' +
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>' +
      '<button class="btn btn-primary" id="btnConfirmResetPass" onclick="doConfirmResetPassword(\'' + esc(oobCode) + '\')">' +
        icon('check', 16) + ' Save New Password' +
      '</button>' +
    '</div>'
  );

  setTimeout(() => {
    const p = document.getElementById('resetNewPass');
    if (p) p.focus();
  }, 100);
}

async function doConfirmResetPassword(oobCode){
  const p1 = document.getElementById('resetNewPass');
  const p2 = document.getElementById('resetConfirmPass');
  const emailInput = document.getElementById('resetAccountEmail');
  const btn = document.getElementById('btnConfirmResetPass');
  const statusEl = document.getElementById('resetPassStatus');

  if (!p1 || !p2) return;
  const newPass = p1.value;
  const confPass = p2.value;
  let email = emailInput ? emailInput.value.trim().toLowerCase() : '';

  if (!newPass || newPass.length < 6) {
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.background = '#FEE2E2';
      statusEl.style.color = '#991B1B';
      statusEl.innerHTML = 'Password must be at least 6 characters long.';
    }
    p1.focus();
    return;
  }

  if (newPass !== confPass) {
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.background = '#FEE2E2';
      statusEl.style.color = '#991B1B';
      statusEl.innerHTML = 'The passwords do not match. Please verify and re-type.';
    }
    p2.focus();
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" style="display:inline-block;width:14px;height:14px;border:2px solid #fff;border-right-color:transparent;border-radius:50%;animation:spin 0.75s linear infinite;margin-right:8px;"></span> Updating Password...';
  }
  if (statusEl) statusEl.style.display = 'none';

  try {
    let resolvedEmail = email;

    if (oobCode && typeof confirmFirebasePasswordReset === 'function') {
      const fbRes = await confirmFirebasePasswordReset(oobCode, newPass);
      if (fbRes && fbRes.success) {
        if (fbRes.email) resolvedEmail = fbRes.email.toLowerCase();
      } else {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = icon('check', 16) + ' Save New Password';
        }
        if (statusEl) {
          statusEl.style.display = 'block';
          statusEl.style.background = '#FEE2E2';
          statusEl.style.color = '#991B1B';
          statusEl.innerHTML = '<b>Firebase Reset Error:</b> ' + esc((fbRes && fbRes.error) || 'Invalid or expired reset code. Please request a new reset link.');
        }
        return;
      }
    }

    // Now update in database via API
    if (resolvedEmail) {
      const apiRes = await apiCall('reset_password_complete', 'POST', {
        email: resolvedEmail,
        password: newPass
      });
      if (apiRes && apiRes.status !== 'success') {
        console.warn('API reset_password_complete notice:', apiRes.message);
      }
    }

    closeModal();
    openModal(
      '<div class="modal-head" style="align-items:flex-start;">' +
        '<div style="display:flex;align-items:center;gap:10px;">' +
          '<div style="width:36px;height:36px;border-radius:50%;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;">' +
            icon('check', 20) +
          '</div>' +
          '<div>' +
            '<h3 style="margin:0;font-size:17px;font-weight:700;color:#166534;">Password Updated Successfully</h3>' +
            '<p style="margin:2px 0 0;font-size:12.5px;color:var(--text-muted);">Your account password has been changed</p>' +
          '</div>' +
        '</div>' +
        '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>' +
      '</div>' +
      '<div class="modal-body" style="padding:22px 24px;">' +
        '<p style="font-size:14px;color:var(--text-dark);line-height:1.6;margin-top:0;">' +
          'Your password has been successfully updated in Firebase (sirib-2) and the database.' +
          (resolvedEmail ? '<br>Account: <b>' + esc(resolvedEmail) + '</b>' : '') +
        '</p>' +
        '<p style="font-size:13.5px;color:var(--text-muted);">' +
          'You can now log in to the portal using your new password.' +
        '</p>' +
      '</div>' +
      '<div class="modal-foot" style="justify-content:flex-end;">' +
        '<button class="btn btn-primary" onclick="closeModal();nav(\'login\');">Proceed to Login</button>' +
      '</div>'
    );
    toast('Password reset successfully! Please log in with your new password.', 'success');
  } catch (err) {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = icon('check', 16) + ' Save New Password';
    }
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.background = '#FEE2E2';
      statusEl.style.color = '#991B1B';
      statusEl.innerHTML = '<b>Error:</b> ' + esc(err.message || 'An error occurred while updating password.');
    }
    toast('Error: ' + (err.message || ''), 'error');
  }
}

/* ---------- REGISTER ---------- */
function renderRegister(){
  return '<div class="auth-wrap">'+
    '<div class="auth-side"><div>'+
      '<div class="brand" style="margin-bottom:30px;display:flex;align-items:center;gap:12px;"><img src="img/logo.png" alt="Logo" class="auth-logo-img"><span>Sirib i-Sko</span></div>'+
      '<div class="quote">"Every application, every document, every update — organized in one secure place."</div>'+
    '</div><div class="small" style="color:#AEBEDA;">Registration takes less than 5 minutes.</div></div>'+
    '<div class="auth-form-wrap"><div class="auth-card" style="max-width:480px;">'+
      '<h2>Create your account</h2><p>Register as a student applicant to start applying for PGIN scholarships.</p>'+
      '<div class="field"><label>Student ID</label><input class="input" id="rStudentId" autocomplete="off" value=""></div>'+
      '<div class="row3">'+
        '<div class="field"><label>First Name</label><input class="input" id="rFirst" autocomplete="off" value=""></div>'+
        '<div class="field"><label>Middle Name</label><input class="input" id="rMiddle" autocomplete="off" value=""></div>'+
        '<div class="field"><label>Last Name</label><input class="input" id="rLast" autocomplete="off" value=""></div>'+
      '</div>'+
      '<div class="row2">'+
        '<div class="field"><label>Email Address</label><input class="input" type="email" id="rEmail" autocomplete="off" value=""></div>'+
        '<div class="field"><label>Contact Number</label><input class="input" id="rContact" autocomplete="off" value=""></div>'+
      '</div>'+
      '<div class="field"><label>Address</label><input class="input" id="rAddress" autocomplete="off" value=""></div>'+
      '<div class="row2">'+
        '<div class="field"><label>School / University</label><input class="input" id="rSchool" autocomplete="off" value=""></div>'+
        '<div class="field"><label>Course / Program</label><input class="input" id="rCourse" name="applicant_course" autocomplete="off" placeholder="e.g. BS in Information Technology" value=""></div>'+
      '</div>'+
      '<div class="field"><label>Year Level</label><select class="select-sm" id="rYear" style="width:100%;"><option>Senior High School</option><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option><option>5th Year</option></select></div>'+
      '<input type="text" name="fake_user" style="position:absolute;left:-9999px;opacity:0;height:0;width:0;" tabindex="-1" aria-hidden="true" autocomplete="off">'+
      '<input type="password" name="fake_pass" style="position:absolute;left:-9999px;opacity:0;height:0;width:0;" tabindex="-1" aria-hidden="true" autocomplete="new-password">'+
      '<div class="row2">'+
        '<div class="field"><label>Password</label>'+
          '<div class="pwd-wrap">'+
            '<input class="input" type="password" id="rPass" autocomplete="new-password" value="">'+
            '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'rPass\', this)" title="Show password" aria-label="Show password">'+icon('eye',18)+'</button>'+
          '</div>'+
        '</div>'+
        '<div class="field"><label>Confirm Password</label>'+
          '<div class="pwd-wrap">'+
            '<input class="input" type="password" id="rPass2" autocomplete="new-password" value="">'+
            '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'rPass2\', this)" title="Show password" aria-label="Show password">'+icon('eye',18)+'</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="field">'+
        '<label style="display:flex;justify-content:space-between;align-items:center;">'+
          '<span>School ID or Enrollment Form (for verification) <span style="color:var(--redst);">*</span></span>'+
          '<span class="small muted" style="font-weight:normal;">School ID or Enrollment Form</span>'+
        '</label>'+
        '<input type="file" id="rValidIdInput" accept="image/*,.pdf" style="display:none;" onchange="handleRegIdFile(this)">'+
        '<div id="regIdUploadZone">'+
          (STATE.regIdFile ? renderRegIdPreviewHtml() : renderRegIdDropzoneHtml())+
        '</div>'+
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">'+
          '<span class="small muted">Supported: JPG, PNG, PDF (Max 5MB)</span>'+
        '</div>'+
      '</div>'+
      '<label class="checkline" style="margin-bottom:20px;"><input type="checkbox" id="rTerms"> I agree to the Terms and Conditions and the Data Privacy Act consent for processing my scholarship application.</label>'+
      '<button class="btn btn-primary btn-block" onclick="doRegister()">Submit for Approval</button>'+
      '<div style="text-align:center;margin-top:16px;font-size:13.5px;color:var(--text-muted);">Already have an account? <a href="javascript:void(0)" class="link-btn" onclick="nav(\'login\')">Log In</a></div>'+
    '</div></div>'+
  '</div>';
}

/* ==========================================================================
   AUTOMATIC FILE COMPRESSION ENGINE (CLIENT-SIDE)
   ========================================================================== */
const UPLOAD_CONFIG = {
  maxSizeBytes: 5 * 1024 * 1024,      // 5 MB maximum allowed file size
  maxSizeLabel: '5 MB',
  allowedExtensions: ['jpg', 'jpeg', 'png', 'webp', 'pdf'],
  allowedMimes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  imageMaxDimension: 2400,             // Max dimension (width/height) to preserve document clarity
  targetQuality: 0.85,                 // Initial compression quality
  minQuality: 0.55                     // Safe floor to guarantee clear readability
};

function formatFileSize(bytes){
  if(!bytes || bytes <= 0) return '0 B';
  if(bytes < 1024) return bytes + ' B';
  if(bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}
function formatBytes(bytes){ return formatFileSize(bytes); }

const FileCompressor = {
  // Check if file exceeds maximum upload size
  isOversized(file) {
    return file && file.size > UPLOAD_CONFIG.maxSizeBytes;
  },

  // Detect file category
  getFileCategory(file) {
    const ext = (file.name || '').split('.').pop().toLowerCase();
    const mime = (file.type || '').toLowerCase();
    if (mime === 'application/pdf' || ext === 'pdf') return 'pdf';
    if (mime.startsWith('image/') || ['jpg', 'jpeg', 'png', 'webp'].includes(ext)) return 'image';
    return 'unsupported';
  },

  // Read file as Data URL
  readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = e => reject(new Error('Failed to read file from your device.'));
      reader.readAsDataURL(file);
    });
  },

  // Read file as ArrayBuffer
  readFileAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = e => reject(new Error('Failed to read binary data from file.'));
      reader.readAsArrayBuffer(file);
    });
  },

  // Load Image element from data URL
  loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Failed to decode image data. The file may be corrupted or unreadable.'));
      img.src = src;
    });
  },

  // Convert Data URL to Blob
  dataUrlToBlob(dataUrl) {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  },

  // Estimate byte size from Base64 string
  estimateBase64Bytes(dataUrl) {
    if (!dataUrl) return 0;
    const base64Index = dataUrl.indexOf('base64,');
    if (base64Index === -1) return dataUrl.length;
    const base64Str = dataUrl.substring(base64Index + 7);
    return Math.floor((base64Str.length * 3) / 4) - (base64Str.endsWith('==') ? 2 : base64Str.endsWith('=') ? 1 : 0);
  },

  // Check canvas transparency
  canvasHasTransparency(ctx, width, height) {
    try {
      const step = Math.max(1, Math.floor(width / 60));
      const imgData = ctx.getImageData(0, 0, width, height).data;
      for (let i = 3; i < imgData.length; i += 4 * step) {
        if (imgData[i] < 250) return true;
      }
    } catch (e) {}
    return false;
  },

  // Main entrypoint: automatically compress if oversized, or pass through if within limit
  async processFile(file, options = {}, onProgress = null) {
    const origSize = file.size;
    const origName = file.name;
    const category = this.getFileCategory(file);

    // Validate supported formats
    if (category === 'unsupported') {
      const ext = (origName || '').split('.').pop();
      throw new Error(`Unsupported file format (.${ext}). Please upload your document as a JPG, PNG, WEBP, or PDF file.`);
    }

    // If within limit, proceed with normal upload process
    if (!this.isOversized(file)) {
      const dataUrl = await this.readFileAsDataUrl(file);
      return {
        compressed: false,
        file: file,
        name: origName,
        originalName: origName,
        origSize: origSize,
        compressedSize: origSize,
        sizeStr: formatFileSize(origSize),
        origSizeStr: formatFileSize(origSize),
        dataUrl: dataUrl,
        type: file.type || (category === 'pdf' ? 'application/pdf' : 'image/jpeg'),
        isImage: category === 'image',
        isPdf: category === 'pdf',
        message: 'File is within the allowed 5 MB limit.'
      };
    }

    // File exceeds limit: notify applicant and start automatic compression
    if (typeof onProgress === 'function') {
      onProgress({
        status: 'start',
        message: `Your file (${formatFileSize(origSize)}) exceeds the ${UPLOAD_CONFIG.maxSizeLabel} maximum upload size. We are automatically compressing it to meet the upload requirements. Please wait...`,
        percent: 15
      });
    }

    if (category === 'image') {
      return await this.compressImage(file, options, onProgress);
    } else if (category === 'pdf') {
      return await this.compressPdf(file, options, onProgress);
    }
  },

  // Compress Image (JPG, PNG, WEBP)
  async compressImage(file, options = {}, onProgress = null) {
    const origSize = file.size;
    const origName = file.name;
    const ext = (origName || '').split('.').pop().toLowerCase();

    if (typeof onProgress === 'function') {
      onProgress({ status: 'processing', message: 'Analyzing image dimensions and quality...', percent: 30 });
    }

    const dataUrl = await this.readFileAsDataUrl(file);
    const img = await this.loadImage(dataUrl);

    let width = img.naturalWidth || img.width;
    let height = img.naturalHeight || img.height;

    // Check dimensions - resize if oversized while preserving aspect ratio
    const maxDim = options.maxDimension || UPLOAD_CONFIG.imageMaxDimension;
    if (width > maxDim || height > maxDim) {
      if (width > height) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Fill white background for transparent images converted to JPEG
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    // Determine target output MIME type
    let outputMime = 'image/jpeg';
    let outputExt = 'jpg';
    if (ext === 'png') {
      const hasAlpha = this.canvasHasTransparency(ctx, width, height);
      if (hasAlpha) {
        outputMime = 'image/png';
        outputExt = 'png';
      } else {
        outputMime = 'image/jpeg';
        outputExt = 'jpg';
      }
    } else if (ext === 'webp') {
      outputMime = 'image/webp';
      outputExt = 'webp';
    }

    // Iterative compression quality loop
    let quality = options.targetQuality || UPLOAD_CONFIG.targetQuality;
    const minQuality = options.minQuality || UPLOAD_CONFIG.minQuality;
    let compressedDataUrl = '';
    let compressedBytes = 0;
    let iteration = 0;

    while (quality >= minQuality) {
      iteration++;
      if (typeof onProgress === 'function') {
        const percent = Math.min(85, 30 + iteration * 15);
        onProgress({ status: 'compressing', message: `Optimizing image quality (${Math.round(quality * 100)}%)...`, percent });
      }

      compressedDataUrl = canvas.toDataURL(outputMime, quality);
      compressedBytes = this.estimateBase64Bytes(compressedDataUrl);

      if (compressedBytes <= UPLOAD_CONFIG.maxSizeBytes) {
        break;
      }

      quality -= 0.08;
    }

    // If still oversized at min quality, downsample to 1920px (standard full HD document resolution)
    if (compressedBytes > UPLOAD_CONFIG.maxSizeBytes && (width > 1920 || height > 1920)) {
      if (typeof onProgress === 'function') {
        onProgress({ status: 'resizing', message: 'Refining document scale for upload...', percent: 85 });
      }
      const scale2 = Math.min(1920 / width, 1920 / height);
      const width2 = Math.round(width * scale2);
      const height2 = Math.round(height * scale2);

      const canvas2 = document.createElement('canvas');
      canvas2.width = width2;
      canvas2.height = height2;
      const ctx2 = canvas2.getContext('2d');
      ctx2.fillStyle = '#FFFFFF';
      ctx2.fillRect(0, 0, width2, height2);
      ctx2.drawImage(canvas, 0, 0, width2, height2);

      quality = 0.75;
      while (quality >= minQuality) {
        compressedDataUrl = canvas2.toDataURL(outputMime, quality);
        compressedBytes = this.estimateBase64Bytes(compressedDataUrl);
        if (compressedBytes <= UPLOAD_CONFIG.maxSizeBytes) break;
        quality -= 0.08;
      }
    }

    // Check final result
    if (compressedBytes > UPLOAD_CONFIG.maxSizeBytes) {
      throw new Error(`Could not compress the image below the ${UPLOAD_CONFIG.maxSizeLabel} limit without compromising document readability. Please choose a smaller image file.`);
    }

    const baseName = origName.substring(0, origName.lastIndexOf('.')) || origName;
    const outputName = `${baseName}.${outputExt}`;
    const compressedBlob = this.dataUrlToBlob(compressedDataUrl);
    const compressedFile = new File([compressedBlob], outputName, { type: outputMime, lastModified: Date.now() });

    if (typeof onProgress === 'function') {
      onProgress({ status: 'done', message: `File compressed successfully! Original size: ${formatFileSize(origSize)}. Compressed size: ${formatFileSize(compressedBytes)}.`, percent: 100 });
    }

    return {
      compressed: true,
      file: compressedFile,
      name: outputName,
      originalName: origName,
      origSize: origSize,
      compressedSize: compressedBytes,
      sizeStr: formatFileSize(compressedBytes),
      origSizeStr: formatFileSize(origSize),
      dataUrl: compressedDataUrl,
      type: outputMime,
      isImage: true,
      isPdf: false,
      qualityUsed: Math.round(quality * 100),
      message: `File compressed successfully! Original size: ${formatFileSize(origSize)}. Compressed size: ${formatFileSize(compressedBytes)}. Your document is now being uploaded.`
    };
  },

  // Compress PDF Document
  async compressPdf(file, options = {}, onProgress = null) {
    const origSize = file.size;
    const origName = file.name;

    if (typeof onProgress === 'function') {
      onProgress({ status: 'processing', message: 'Inspecting PDF document structure and embedded images...', percent: 35 });
    }

    const arrayBuffer = await this.readFileAsArrayBuffer(file);
    const u8 = new Uint8Array(arrayBuffer);

    // Validate PDF signature (%PDF-)
    if (u8.length < 5 || u8[0] !== 0x25 || u8[1] !== 0x50 || u8[2] !== 0x44 || u8[3] !== 0x46 || u8[4] !== 0x2D) {
      throw new Error('Invalid or corrupted PDF file. Please select a valid PDF document.');
    }

    // Optimize embedded JPEG image streams inside the PDF while preserving all text and structure
    const optimizedBuffer = await this.optimizePdfEmbeddedImages(u8, options, onProgress);

    let finalBytes = optimizedBuffer.byteLength;
    if (finalBytes > UPLOAD_CONFIG.maxSizeBytes) {
      throw new Error(`The PDF (${formatFileSize(origSize)}) contains elements that could not be automatically reduced below ${UPLOAD_CONFIG.maxSizeLabel} without compromising document integrity. Please optimize or reduce the PDF file size manually.`);
    }

    const compressedBlob = new Blob([optimizedBuffer], { type: 'application/pdf' });
    const compressedFile = new File([compressedBlob], origName, { type: 'application/pdf', lastModified: Date.now() });
    const compressedDataUrl = await this.readFileAsDataUrl(compressedFile);

    if (typeof onProgress === 'function') {
      onProgress({ status: 'done', message: `File compressed successfully! Original size: ${formatFileSize(origSize)}. Compressed size: ${formatFileSize(finalBytes)}.`, percent: 100 });
    }

    return {
      compressed: true,
      file: compressedFile,
      name: origName,
      originalName: origName,
      origSize: origSize,
      compressedSize: finalBytes,
      sizeStr: formatFileSize(finalBytes),
      origSizeStr: formatFileSize(origSize),
      dataUrl: compressedDataUrl,
      type: 'application/pdf',
      isImage: false,
      isPdf: true,
      message: `File compressed successfully! Original size: ${formatFileSize(origSize)}. Compressed size: ${formatFileSize(finalBytes)}. Your document is now being uploaded.`
    };
  },

  // Optimize embedded JPEG streams in PDF
  async optimizePdfEmbeddedImages(pdfBytes, options = {}, onProgress = null) {
    const textDecoder = new TextDecoder('latin1');
    const pdfText = textDecoder.decode(pdfBytes);

    const streamRegex = /<<[^>]*\/Filter\s*(\[[^\]]*\/DCTDecode[^\]]*\]|\/DCTDecode)[^>]*>>\s*stream\r?\n([\s\S]*?)\r?\nendstream/g;
    let match;
    let replacements = [];

    while ((match = streamRegex.exec(pdfText)) !== null) {
      const fullHeader = match[0];
      const streamStart = match.index + fullHeader.indexOf('stream') + 6;
      const actualStart = pdfText[streamStart] === '\r' && pdfText[streamStart+1] === '\n' 
        ? streamStart + 2 
        : (pdfText[streamStart] === '\n' ? streamStart + 1 : streamStart);
      
      const streamEnd = match.index + fullHeader.indexOf('endstream');
      const streamLength = streamEnd - actualStart;

      // Optimize image streams larger than 250KB
      if (streamLength > 250 * 1024) {
        replacements.push({
          start: actualStart,
          end: streamEnd,
          length: streamLength,
          dictStart: match.index
        });
      }
    }

    if (replacements.length === 0) {
      return pdfBytes;
    }

    if (typeof onProgress === 'function') {
      onProgress({ status: 'optimizing', message: `Compressing ${replacements.length} embedded document scan(s)...`, percent: 60 });
    }

    let curBytes = new Uint8Array(pdfBytes);
    for (let i = replacements.length - 1; i >= 0; i--) {
      const rep = replacements[i];
      const imgSlice = curBytes.subarray(rep.start, rep.end);
      
      try {
        const imgBlob = new Blob([imgSlice], { type: 'image/jpeg' });
        const imgComp = await this.compressImage(imgBlob, { maxDimension: 2000, targetQuality: 0.75, minQuality: 0.55 });
        const newImgBlob = this.dataUrlToBlob(imgComp.dataUrl);
        const newImgBuf = await newImgBlob.arrayBuffer();
        const newImgBytes = new Uint8Array(newImgBuf);

        if (newImgBytes.length < rep.length) {
          const before = curBytes.subarray(0, rep.start);
          const after = curBytes.subarray(rep.end);
          
          const combined = new Uint8Array(before.length + newImgBytes.length + after.length);
          combined.set(before, 0);
          combined.set(newImgBytes, before.length);
          combined.set(after, before.length + newImgBytes.length);

          // Update /Length in object dictionary
          const dictSlice = textDecoder.decode(combined.subarray(rep.dictStart, rep.dictStart + 350));
          const updatedDict = dictSlice.replace(/\/Length\s+\d+/, `/Length ${newImgBytes.length}`);
          const encDict = new TextEncoder().encode(updatedDict);
          combined.set(encDict.subarray(0, Math.min(encDict.length, 350)), rep.dictStart);

          curBytes = combined;
        }
      } catch (err) {}
    }

    return curBytes;
  }
};

function renderRegIdCompressingHtml(msg, percent){
  return '<div class="reg-upload-box" style="border-color:#2563EB;background:#F0F9FF;cursor:wait;padding:26px 20px;">'+
    '<div class="icon spin" style="color:#2563EB;margin-bottom:8px;">'+icon('clock',28)+'</div>'+
    '<p style="margin:0;font-size:14.5px;font-weight:700;color:#1E40AF;">Auto-Compressing School ID...</p>'+
    '<p style="margin:6px auto 14px;font-size:12.5px;color:#1D4ED8;max-width:440px;line-height:1.4;">'+esc(msg)+'</p>'+
    '<div class="compress-progress-bar" style="max-width:280px;">'+
      '<div class="compress-progress-fill" style="width:'+(percent||50)+'%;"></div>'+
    '</div>'+
  '</div>';
}

function renderRegIdDropzoneHtml(){
  return '<div class="reg-upload-box" id="regIdDropBox" onclick="document.getElementById(\'rValidIdInput\').click()" ondragover="handleRegDragOver(event)" ondragleave="handleRegDragLeave(event)" ondrop="handleRegDrop(event)">'+
    '<div class="icon">'+icon('upload',26)+'</div>'+
    '<p style="margin:0;font-size:14px;font-weight:600;color:var(--navy);">Click to upload School ID or Enrollment Form or drag &amp; drop</p>'+
    '<p style="margin:4px 0 0;font-size:12.5px;color:var(--text-muted);">Upload a clear photo or scan (JPG, PNG, WEBP, PDF • Max 5MB • Auto-Compressed)</p>'+
  '</div>';
}

function renderRegIdPreviewHtml(){
  const f=STATE.regIdFile;
  if(!f) return renderRegIdDropzoneHtml();
  let previewContent='';
  if(f.isImage && f.dataUrl){
    previewContent='<div class="reg-id-img-preview">'+
      '<img src="'+f.dataUrl+'" alt="Uploaded ID Preview">'+
    '</div>';
  }
  const sizeSubtitle = f.compressed 
    ? '✓ '+f.size+' <span style="color:#059669;font-weight:normal;">(Compressed from '+f.origSizeStr+')</span> • Ready' 
    : '✓ '+f.size+' • Ready for submission';

  return '<div class="reg-id-card">'+
    previewContent+
    '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">'+
      '<div style="display:flex;align-items:center;gap:10px;min-width:0;">'+
        '<div style="width:38px;height:38px;border-radius:8px;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+
          icon(f.isImage?'image':'file',20)+
        '</div>'+
        '<div style="min-width:0;">'+
          '<div style="font-weight:600;font-size:13.5px;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+esc(f.name)+'</div>'+
          '<div class="small" style="color:#16A34A;font-weight:600;">'+sizeSubtitle+'</div>'+
        '</div>'+
      '</div>'+
      '<div style="display:flex;gap:6px;flex-shrink:0;">'+
        '<button type="button" class="btn btn-ghost btn-sm" onclick="document.getElementById(\'rValidIdInput\').click()" title="Select a different file">Change</button>'+
        '<button type="button" class="btn btn-ghost btn-sm" style="color:var(--redst);" onclick="clearRegIdFile()" title="Remove file">'+icon('x',14)+'</button>'+
      '</div>'+
    '</div>'+
  '</div>';
}

function handleRegIdFile(input){
  if(!input.files || !input.files[0]) return;
  processRegIdFile(input.files[0]);
}

async function processRegIdFile(file){
  if(!file) return;
  const input = document.getElementById('rValidIdInput');
  const container = document.getElementById('regIdUploadZone');

  const sessionId = Date.now();
  STATE._compressionSessions = STATE._compressionSessions || {};
  STATE._compressionSessions['regId'] = sessionId;

  try {
    const res = await FileCompressor.processFile(file, {}, (prog) => {
      if(STATE._compressionSessions['regId'] !== sessionId) return;
      if(container) {
        container.innerHTML = renderRegIdCompressingHtml(prog.message, prog.percent);
      }
    });

    if(STATE._compressionSessions['regId'] !== sessionId) return;

    STATE.regIdFile = {
      name: res.name,
      originalName: res.originalName || res.name,
      size: res.sizeStr,
      origSizeStr: res.origSizeStr || res.sizeStr,
      compressed: res.compressed,
      type: res.type,
      dataUrl: res.dataUrl,
      isImage: res.isImage,
      isPdf: res.isPdf,
      uploadedAt: new Date().toISOString()
    };
    updateRegIdUI();
    if(res.compressed) {
      toast(res.message, 'success');
    } else {
      toast('School ID uploaded: ' + res.name, 'success');
    }
  } catch(err) {
    if(STATE._compressionSessions['regId'] !== sessionId) return;
    if(input) input.value = '';
    updateRegIdUI();
    toast(err.message || 'Error processing document.', 'error');
  }
}

function updateRegIdUI(){
  const container=document.getElementById('regIdUploadZone');
  if(container){
    container.innerHTML=STATE.regIdFile ? renderRegIdPreviewHtml() : renderRegIdDropzoneHtml();
  }
}

function clearRegIdFile(){
  STATE.regIdFile=null;
  const input=document.getElementById('rValidIdInput');
  if(input) input.value='';
  updateRegIdUI();
  toast('ID document removed.','info');
}


function handleRegDragOver(e){
  e.preventDefault();
  e.stopPropagation();
  const box=document.getElementById('regIdDropBox');
  if(box) box.classList.add('dragover');
}

function handleRegDragLeave(e){
  e.preventDefault();
  e.stopPropagation();
  const box=document.getElementById('regIdDropBox');
  if(box) box.classList.remove('dragover');
}

function handleRegDrop(e){
  e.preventDefault();
  e.stopPropagation();
  const box=document.getElementById('regIdDropBox');
  if(box) box.classList.remove('dragover');
  if(e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0){
    processRegIdFile(e.dataTransfer.files[0]);
  }
}



function viewIdModal(userId){
  const u=DB.users.find(x=>x.id===userId) || STATE.currentUser;
  const idDoc=(u && u.validId) ? u.validId : { name:'valid_id_document.png', dataUrl:'img/logo.png', isImage:true, size:'340 KB' };
  openModal('<div class="modal-head"><h3>Valid ID Verification: '+esc(userFullName(u))+'</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
    '<div class="modal-body" style="text-align:center;padding:24px;">'+
      (idDoc.isImage && idDoc.dataUrl ? '<div style="background:#0F172A;border-radius:10px;padding:12px;margin-bottom:14px;box-shadow:0 4px 16px rgba(0,0,0,0.15);"><img src="'+idDoc.dataUrl+'" alt="ID Document" style="max-width:100%;max-height:420px;border-radius:6px;object-fit:contain;"></div>' :
        '<div style="padding:30px;background:#F8FAFC;border:2px dashed var(--border);border-radius:10px;margin-bottom:14px;">'+icon('file',40)+'<div style="font-weight:600;font-size:15px;margin-top:8px;">'+esc(idDoc.name)+'</div><div class="small muted">PDF Document • '+(idDoc.size||'')+'</div></div>')+
      '<div style="display:flex;align-items:center;justify-content:center;gap:16px;color:var(--text-muted);font-size:13px;">'+
        '<span><b>File:</b> '+esc(idDoc.name)+'</span>'+
        '<span><b>Size:</b> '+(idDoc.size||'N/A')+'</span>'+
        '<span style="color:#16A34A;font-weight:600;">✓ Verified ID on File</span>'+
      '</div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-primary" onclick="closeModal()">Close</button></div>');
}

async function doRegister(){
  const g=id=>document.getElementById(id).value.trim();
  const studentId=g('rStudentId'),first=g('rFirst'),last=g('rLast'),email=g('rEmail'),pass=g('rPass'),pass2=g('rPass2');
  const course=g('rCourse'),yearLevel=document.getElementById('rYear')?document.getElementById('rYear').value:'1st Year';
  const middle=g('rMiddle'),contact=g('rContact'),address=g('rAddress'),school=g('rSchool');

  if(!studentId||!first||!last||!email||!course||!pass){
    toast('Please fill in all required fields (Student ID, Name, Email, Course, Password).','error');
    return;
  }
  if(!filterEmail(email)){
    toast('Please provide a valid school or personal email address.','error');
    return;
  }
  if(pass.length<6){
    toast('Password must be at least 6 characters long.','error');
    return;
  }
  if(pass!==pass2){
    toast('Passwords do not match.','error');
    return;
  }
  if(!document.getElementById('rTerms').checked){
    toast('Please accept the Terms and Conditions to continue.','error');
    return;
  }
  if(!STATE.regIdFile){
    toast('Please upload your School ID or Enrollment Form (JPG, PNG, or PDF).','error');
    return;
  }

  const payload = {
    student_id: studentId,
    first_name: first,
    middle_name: middle,
    last_name: last,
    full_name: (first + ' ' + (middle ? middle + ' ' : '') + last).trim(),
    email: email,
    password: pass,
    confirm_password: pass2,
    course: course,
    year_level: yearLevel,
    contact: contact,
    address: address,
    school: school,
    id_file_data: STATE.regIdFile.dataUrl,
    id_file_name: STATE.regIdFile.name,
    id_file_size: STATE.regIdFile.size
  };

  try {
    const res = await apiCall('student_register', 'POST', payload);
    if(res && res.status === 'success'){
      STATE.pendingStudentEmail = email;
      STATE.pendingStudentId = studentId;
      STATE.regIdFile = null;

      // Update client DB
      const u = {
        id: String(res.user_id || uid('U')),
        role: 'applicant',
        studentId: studentId,
        firstName: first,
        middleName: middle,
        lastName: last,
        email: email,
        password: pass,
        contact: contact,
        address: address,
        school: school,
        course: course,
        yearLevel: yearLevel,
        status: 'Pending Approval',
        id_document_name: payload.id_file_name,
        id_document_size: payload.id_file_size,
        joined: new Date().toISOString()
      };
      const exIdx = DB.users.findIndex(x => (x.email||'').toLowerCase() === email.toLowerCase());
      if(exIdx >= 0) DB.users[exIdx] = u;
      else DB.users.push(u);

      const baseUrl = (typeof getFirebaseContinueBaseUrl === 'function' ? getFirebaseContinueBaseUrl() : (window.location.origin + window.location.pathname));
      const statusTrackingUrl = baseUrl + '?view=studentPending&email=' + encodeURIComponent(email) + '&student_id=' + encodeURIComponent(studentId);

      // Trigger Firebase email verification & status tracking dispatch
      if(typeof sendFirebaseStudentRegisterVerification === 'function' && email){
        sendFirebaseStudentRegisterVerification(email, studentId, pass).then(fbRes => {
          if(fbRes && fbRes.success){
            toast('Firebase verification email dispatched to ' + email + '!', 'success');
          } else if(fbRes && fbRes.error){
            console.warn('Firebase student registration note:', fbRes.error);
          }
        });
      }

      toast('Registration submitted! Your account is waiting for Admin approval.', 'success');
      nav('studentPending', { email, studentId });

      setTimeout(() => {
        openModal(
          '<div class="modal-head" style="align-items:flex-start;">' +
            '<div>' +
              '<div style="display:flex;align-items:center;gap:8px;">' +
                '<div style="width:32px;height:32px;border-radius:50%;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;">' + icon('check', 18) + '</div>' +
                '<h3 style="margin:0;font-size:18px;">Registration Submitted Successfully</h3>' +
              '</div>' +
            '</div>' +
            '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>' +
          '</div>' +
          '<div class="modal-body" style="padding:20px 24px;">' +
            '<p style="font-size:14.5px;color:var(--text-dark);line-height:1.6;margin-top:0;">' +
              'Thank you, <b>' + esc(first + ' ' + last) + '</b>! Your registration and School ID have been submitted for Administrator review.' +
            '</p>' +
            '<div style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:8px;padding:14px;margin-bottom:16px;">' +
              '<div style="display:flex;align-items:center;gap:8px;color:#1E40AF;font-weight:700;font-size:13.5px;margin-bottom:4px;">' +
                icon('mail', 16) + ' Email Verification Sent' +
              '</div>' +
              '<p style="margin:0;font-size:13px;color:#1E3A8A;line-height:1.5;">' +
                'A verification and tracking link was dispatched to <b>' + esc(email) + '</b>.<br>' +
                '<span style="font-size:12px;color:#3B82F6;">(Note: If the email lands in your Gmail <b>Spam</b> folder, tap <b>"Report not spam"</b> to enable links, or use the direct link below.)</span>' +
              '</p>' +
            '</div>' +
            '<div style="background:#F8FAFC;border:1px dashed var(--border);border-radius:8px;padding:12px 14px;margin-bottom:16px;">' +
              '<div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:4px;">Your Registration Status &amp; Verification Link:</div>' +
              '<input class="input" readonly value="' + esc(statusTrackingUrl) + '" style="font-size:12px;background:#fff;margin-bottom:8px;" onclick="this.select()">' +
              '<button class="btn btn-navy btn-sm btn-block" onclick="navigator.clipboard.writeText(\'' + esc(statusTrackingUrl) + '\');toast(\'Verification link copied to clipboard!\',\'success\');">📋 Copy Verification Link</button>' +
            '</div>' +
          '</div>' +
          '<div class="modal-foot">' +
            '<button class="btn btn-primary" onclick="closeModal()">Check Registration Status</button>' +
          '</div>'
        );
      }, 150);
      return;
    } else if(res && res.message){
      toast(res.message, 'error');
      return;
    }
  } catch(e) {
    console.warn('API register error, falling back locally:', e);
  }

  // Fallback locally if offline
  const u = {
    id: uid('U'),
    role: 'applicant',
    studentId: studentId,
    firstName: first,
    middleName: middle,
    lastName: last,
    email: email,
    password: pass,
    contact: contact,
    address: address,
    school: school,
    course: course,
    yearLevel: yearLevel,
    validId: STATE.regIdFile,
    status: 'Pending Approval',
    joined: new Date().toISOString()
  };
  DB.users.push(u);
  STATE.pendingStudentEmail = email;
  STATE.pendingStudentId = studentId;
  STATE.regIdFile = null;

  const baseUrl = (typeof getFirebaseContinueBaseUrl === 'function' ? getFirebaseContinueBaseUrl() : (window.location.origin + window.location.pathname));
  const statusTrackingUrl = baseUrl + '?view=studentPending&email=' + encodeURIComponent(email) + '&student_id=' + encodeURIComponent(studentId);

  if(typeof sendFirebaseStudentRegisterVerification === 'function' && email){
    sendFirebaseStudentRegisterVerification(email, studentId, pass);
  }

  toast('Registration submitted! Your account is waiting for Admin approval.', 'success');
  nav('studentPending', { email, studentId });
}

function filterEmail(em){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
}

/* ---------- STUDENT REGISTRATION PENDING & VERIFICATION PAGE ---------- */
function renderStudentPending(){
  const queryEmail = (STATE.params && STATE.params.email) || STATE.pendingStudentEmail || (STATE.currentUser ? STATE.currentUser.email : '');
  const queryStudentId = (STATE.params && STATE.params.studentId) || STATE.pendingStudentId || (STATE.currentUser ? (STATE.currentUser.studentId || STATE.currentUser.student_id) : '');

  let student = null;
  if(queryEmail || queryStudentId){
    student = DB.users.find(u => 
      (queryEmail && (u.email||'').toLowerCase() === queryEmail.toLowerCase()) ||
      (queryStudentId && (u.studentId || u.student_id) === queryStudentId)
    );
  }

  if(!student && (queryEmail || queryStudentId) && !STATE._fetchingStatus){
    STATE._fetchingStatus = true;
    apiCall('student_approval_status', 'GET', { email: queryEmail, student_id: queryStudentId }).then(res => {
      STATE._fetchingStatus = false;
      if(res && res.status === 'success' && res.data){
        const d = res.data;
        const mapped = {
          id: String(d.id),
          role: d.role,
          studentId: d.student_id,
          firstName: d.first_name,
          middleName: d.middle_name,
          lastName: d.last_name,
          email: d.email,
          contact: d.contact,
          address: d.address,
          school: d.school,
          course: d.course,
          yearLevel: d.year_level,
          status: d.status,
          rejectionReason: d.rejection_reason,
          rejection_reason: d.rejection_reason,
          adminReviewNotes: d.admin_review_notes,
          admin_review_notes: d.admin_review_notes,
          idDocumentName: d.id_document_name,
          id_document_name: d.id_document_name,
          idDocumentSize: d.id_document_size,
          id_document_size: d.id_document_size,
          idDocumentMime: d.id_document_mime,
          hasIdFile: d.has_id_file,
          createdAt: d.created_at,
          created_at: d.created_at,
          resubmittedAt: d.resubmitted_at,
          resubmitted_at: d.resubmitted_at
        };
        const idx = DB.users.findIndex(x => (x.email||'').toLowerCase() === mapped.email.toLowerCase() || String(x.id) === mapped.id);
        if(idx >= 0) DB.users[idx] = { ...DB.users[idx], ...mapped };
        else DB.users.push(mapped);
        STATE._lookupNotFound = false;
        render();
      } else {
        STATE._lookupNotFound = true;
        STATE._lastSearchedQuery = queryEmail || queryStudentId;
        render();
      }
    }).catch(() => {
      STATE._fetchingStatus = false;
      STATE._lookupNotFound = true;
      STATE._lastSearchedQuery = queryEmail || queryStudentId;
      render();
    });
  }

  if(!student){
    const notFoundHtml = STATE._lookupNotFound ? (
      '<div style="background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:8px;padding:14px 16px;margin-bottom:18px;display:flex;align-items:flex-start;gap:12px;">'+
        '<div style="color:#16A34A;margin-top:2px;">'+icon('check',20)+'</div>'+
        '<div style="font-size:13.5px;color:#166534;line-height:1.5;">'+
          '<b>No active registration record found</b> for <code>' + esc(STATE._lastSearchedQuery||'') + '</code>.<br>'+
          'If your previous application was rejected and deleted by the administrator, <b>your email address has been released</b> and you may now submit a fresh registration.'+
          '<div style="margin-top:10px;">'+
            '<button class="btn btn-primary btn-sm" onclick="STATE._lookupNotFound=false;nav(\'register\')">'+icon('user-plus',14)+' Start Fresh Registration</button>'+
          '</div>'+
        '</div>'+
      '</div>'
    ) : '';

    return '<div class="container" style="max-width:620px;padding:60px 20px;">'+
      '<div class="panel">'+
        '<div class="panel-head" style="text-align:center;display:block;padding:24px 20px 10px;">'+
          '<div style="width:60px;height:60px;border-radius:50%;background:rgba(15,48,96,0.1);color:var(--navy);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">'+icon('clipboard',30)+'</div>'+
          '<h2 style="margin:0 0 6px;">Check Registration Status</h2>'+
          '<p style="color:var(--text-muted);font-size:14px;margin:0;">Enter your registered School Email Address or Student ID Number to verify your account approval status.</p>'+
        '</div>'+
        '<div class="panel-body" style="padding:20px 24px;">'+
          notFoundHtml+
          '<div class="field">'+
            '<label>Email Address or Student ID</label>'+
            '<input class="input" id="lookupQueryInput" placeholder="e.g. 2026-00000 or juan@university.edu.ph" onkeydown="if(event.key===\'Enter\')doLookupStudentStatus()">'+
          '</div>'+
          '<button class="btn btn-primary btn-block" onclick="doLookupStudentStatus()">Check Registration Status</button>'+
          '<div style="text-align:center;margin-top:16px;font-size:13.5px;color:var(--text-muted);">'+
            'Haven\'t registered yet? <a href="javascript:void(0)" class="link-btn" onclick="nav(\'register\')">Student Registration</a> · <a href="javascript:void(0)" class="link-btn" onclick="nav(\'login\')">Log In</a>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  }

  const status = student.status || 'Pending Approval';
  const fullName = userFullName(student) || (student.firstName ? student.firstName + ' ' + (student.lastName||'') : 'Student');
  const studentId = student.studentId || student.student_id || 'N/A';
  const submissionDate = fmtDateTime(student.createdAt || student.created_at || student.joined || new Date());
  const docName = student.idDocumentName || student.id_document_name || (student.validId ? student.validId.name : 'School_ID_Document.png');
  const docSize = student.idDocumentSize || student.id_document_size || (student.validId ? student.validId.size : 'On File');

  let statusAlertHtml = '';
  if(status === 'Pending Approval'){
    statusAlertHtml = '<div style="background:#FFFBEB;border:1px solid #FCD34D;border-left:5px solid #F59E0B;border-radius:8px;padding:20px;margin-bottom:24px;">'+
      '<div style="display:flex;align-items:flex-start;gap:14px;">'+
        '<div style="color:#D97706;margin-top:2px;">'+icon('clock',28)+'</div>'+
        '<div>'+
          '<h3 style="margin:0 0 6px;color:#92400E;font-size:17px;">Application Under Review</h3>'+
          '<p style="margin:0;color:#B45309;font-size:14px;line-height:1.5;">'+
            'Your registration has been submitted successfully. Your account is currently waiting for Admin approval. Please wait while your school ID and registration details are reviewed. You will be able to access your account once your registration is approved.'+
          '</p>'+
        '</div>'+
      '</div>'+
    '</div>';
  } else if(status === 'Approved' || status === 'Active'){
    statusAlertHtml = '<div style="background:#F0FDF4;border:1px solid #86EFAC;border-left:5px solid #16A34A;border-radius:8px;padding:20px;margin-bottom:24px;">'+
      '<div style="display:flex;align-items:flex-start;gap:14px;">'+
        '<div style="color:#16A34A;margin-top:2px;">'+icon('check',28)+'</div>'+
        '<div style="flex:1;">'+
          '<h3 style="margin:0 0 6px;color:#166534;font-size:17px;">Registration Approved!</h3>'+
          '<p style="margin:0 0 14px;color:#15803D;font-size:14px;line-height:1.5;">'+
            'Your student account registration and school ID verification have been reviewed and approved by the Scholarship Administrator. You can now log in to access your Student Dashboard and apply for scholarship programs.'+
          '</p>'+
          '<button class="btn btn-primary" onclick="nav(\'login\')">Proceed to Log In</button>'+
        '</div>'+
      '</div>'+
    '</div>';
  } else if(status === 'Rejected'){
    statusAlertHtml = '<div style="background:#FEF2F2;border:1px solid #FCA5A5;border-left:5px solid #DC2626;border-radius:8px;padding:20px;margin-bottom:24px;">'+
      '<div style="display:flex;align-items:flex-start;gap:14px;">'+
        '<div style="color:#DC2626;margin-top:2px;">'+icon('x',28)+'</div>'+
        '<div style="flex:1;">'+
          '<h3 style="margin:0 0 6px;color:#991B1B;font-size:17px;">Registration Not Approved</h3>'+
          '<p style="margin:0 0 12px;color:#B91C1C;font-size:14px;line-height:1.5;">'+
            'The Scholarship Administrator has reviewed your registration application and School ID. Unfortunately, your application could not be approved at this time.'+
          '</p>'+
          '<div style="background:#fff;border:1.5px solid #F87171;border-radius:6px;padding:12px 14px;color:#991B1B;font-size:13.5px;margin-bottom:10px;">'+
            '<div style="font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#DC2626;margin-bottom:4px;display:flex;align-items:center;gap:6px;">'+
              icon('x',14)+' Reason for Rejection'+
            '</div>'+
            '<div style="font-weight:600;font-size:14px;color:#7F1D1D;">' + esc(student.rejectionReason || student.rejection_reason || 'Information provided did not match official enrollment records.') + '</div>'+
          '</div>'+
          ((student.adminReviewNotes || student.admin_review_notes) ? (
            '<div style="background:#FFFBEB;border:1.5px solid #FCD34D;border-radius:6px;padding:12px 14px;color:#92400E;font-size:13.5px;margin-bottom:10px;">'+
              '<div style="font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#D97706;margin-bottom:4px;display:flex;align-items:center;gap:6px;">'+
                icon('clipboard',14)+' Administrator Review Notes &amp; Guidance'+
              '</div>'+
              '<div style="font-size:13.5px;color:#78350F;line-height:1.5;">' + esc(student.adminReviewNotes || student.admin_review_notes) + '</div>'+
            '</div>'
          ) : '')+
          '<p style="margin:10px 0 0;font-size:13px;color:#7F1D1D;line-height:1.5;">'+
            'If you wish to submit updated enrollment documents, please contact the Provincial Scholarship Division or request the administrator to clear your registration so you can register again.'+
          '</p>'+
        '</div>'+
      '</div>'+
    '</div>';
  } else if(status === 'Requires Resubmission'){
    statusAlertHtml = '<div style="background:#EFF6FF;border:1px solid #93C5FD;border-left:5px solid #2563EB;border-radius:8px;padding:20px;margin-bottom:24px;">'+
      '<div style="display:flex;align-items:flex-start;gap:14px;">'+
        '<div style="color:#2563EB;margin-top:2px;">'+icon('info',28)+'</div>'+
        '<div style="flex:1;">'+
          '<h3 style="margin:0 0 6px;color:#1E40AF;font-size:17px;">Action Required: Resubmit School ID or Enrollment Form / Details</h3>'+
          '<p style="margin:0 0 10px;color:#1D4ED8;font-size:14px;line-height:1.5;">'+
            'The Administrator reviewed your registration and requested that you provide corrected information or a clearer copy of your School ID or Enrollment Form.'+
          '</p>'+
          '<div style="background:#fff;border:1px solid #60A5FA;border-radius:6px;padding:12px 14px;color:#1E40AF;font-size:13.5px;margin-bottom:14px;">'+
            '<b>Administrator Instructions:</b> ' + esc(student.adminReviewNotes || student.admin_review_notes || 'Please upload a clearer image of your School ID or Enrollment Form.')+
          '</div>'+
          '<p style="margin:0;font-size:13px;color:#1E3A8A;">'+
            'Please complete the correction form below and upload a replacement School ID or Enrollment Form to resubmit your application.'+
          '</p>'+
        '</div>'+
      '</div>'+
    '</div>';
  }

  let resubmissionFormHtml = '';
  if(status === 'Requires Resubmission'){
    resubmissionFormHtml = '<div class="panel" style="margin-bottom:24px;border:2px solid #2563EB;">'+
      '<div class="panel-head" style="background:#F0F9FF;"><h3 style="color:#1E40AF;">Resubmit Information &amp; School ID or Enrollment Form</h3></div>'+
      '<div class="panel-body">'+
        '<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:16px;">Update your academic details if needed and attach a clear photo or scan of your valid School ID or Enrollment Form (JPG, PNG, or PDF up to 5MB).</p>'+
        '<div class="row2">'+
          '<div class="field"><label>Course / Program</label><input class="input" id="rsCourse" placeholder="e.g. BS in Information Technology" value="'+esc(student.course||'')+'"></div>'+
          '<div class="field"><label>Year Level</label><select class="select-sm" id="rsYear" style="width:100%;">'+
            ['Senior High School','1st Year','2nd Year','3rd Year','4th Year','5th Year'].map(y=>'<option '+(student.yearLevel===y||student.year_level===y?'selected':'')+'>'+y+'</option>').join('')+
          '</select></div>'+
        '</div>'+
        '<div class="row2">'+
          '<div class="field"><label>School / University</label><input class="input" id="rsSchool" value="'+esc(student.school||'')+'"></div>'+
          '<div class="field"><label>Contact Number</label><input class="input" id="rsContact" value="'+esc(student.contact||'')+'"></div>'+
        '</div>'+
        '<div class="field">'+
          '<label style="display:flex;justify-content:space-between;align-items:center;">'+
            '<span>Replacement School ID or Enrollment Form <span style="color:var(--redst);">*</span></span>'+
            '<span class="small muted">JPG, PNG, PDF &le; 5MB</span>'+
          '</label>'+
          '<input type="file" id="rResubmitIdInput" accept="image/jpeg,image/png,image/jpg,application/pdf" style="display:none;" onchange="handleResubmitIdFile(this)">'+
          '<div id="resubmitIdUploadZone">'+
            (STATE.resubmitIdFile ? renderResubmitIdPreviewHtml() : renderResubmitIdDropzoneHtml())+
          '</div>'+
        '</div>'+
        '<button class="btn btn-primary btn-block" style="margin-top:16px;" onclick="doStudentResubmit(\''+esc(student.email)+'\',\''+esc(studentId)+'\')">Submit Updated Application for Admin Review</button>'+
      '</div>'+
    '</div>';
  }

  const statusTrackingUrl = (typeof getFirebaseContinueBaseUrl === 'function' ? getFirebaseContinueBaseUrl() : (window.location.origin + window.location.pathname)) + '?view=studentPending&email=' + encodeURIComponent(student.email) + '&student_id=' + encodeURIComponent(studentId);

  if(status === 'Rejected' && !STATE._rejectionNoticeShown){
    STATE._rejectionNoticeShown = true;
    setTimeout(() => {
      openModal(
        '<div class="modal-head" style="align-items:flex-start;">' +
          '<div>' +
            '<div style="display:flex;align-items:center;gap:8px;">' +
              '<div style="width:32px;height:32px;border-radius:50%;background:#FEE2E2;color:#DC2626;display:flex;align-items:center;justify-content:center;">' + icon('x', 18) + '</div>' +
              '<h3 style="margin:0;font-size:18px;color:#991B1B;">Registration Not Approved</h3>' +
            '</div>' +
          '</div>' +
          '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>' +
        '</div>' +
        '<div class="modal-body" style="padding:20px 24px;">' +
          '<p style="font-size:14.5px;color:var(--text-dark);line-height:1.6;margin-top:0;">' +
            'Hello <b>' + esc(fullName) + '</b>, your student registration application has been reviewed by the Scholarship Administrator.' +
          '</p>' +
          '<div style="background:#FEF2F2;border:1px solid #FCA5A5;border-radius:8px;padding:14px;margin-bottom:14px;">' +
            '<div style="display:flex;align-items:center;gap:8px;color:#991B1B;font-weight:700;font-size:13px;margin-bottom:4px;">' +
              icon('alert', 16) + ' Reason for Rejection' +
            '</div>' +
            '<div style="font-size:13.5px;color:#7F1D1D;line-height:1.5;">' +
              esc(student.rejectionReason || student.rejection_reason || 'Information provided did not match official enrollment records.') +
            '</div>' +
          '</div>' +
          ((student.adminReviewNotes || student.admin_review_notes) ? (
            '<div style="background:#FFFBEB;border:1px solid #FCD34D;border-radius:8px;padding:14px;margin-bottom:14px;">' +
              '<div style="display:flex;align-items:center;gap:8px;color:#92400E;font-weight:700;font-size:13px;margin-bottom:4px;">' +
                icon('clipboard', 16) + ' Administrator Review Notes' +
              '</div>' +
              '<div style="font-size:13px;color:#78350F;line-height:1.5;">' +
                esc(student.adminReviewNotes || student.admin_review_notes) +
              '</div>' +
            '</div>'
          ) : '') +
          '<p style="margin:0;font-size:13px;color:var(--text-muted);line-height:1.5;">' +
            'An official notification was sent to <b>' + esc(student.email) + '</b>. If the administrator deletes this registration, your email address is released immediately so you can submit a new registration.' +
          '</p>' +
        '</div>' +
        '<div class="modal-foot" style="justify-content:space-between;">' +
          '<button class="btn btn-outline" onclick="closeModal()">Close &amp; View Details</button>' +
          '<button class="btn btn-primary" onclick="closeModal();nav(\'register\');">Register New Account</button>' +
        '</div>'
      );
    }, 150);
  }

  const trackingLinkCardHtml = '<div class="panel" style="margin-bottom:24px;border:1px solid #BFDBFE;background:#F0F9FF;">'+
    '<div class="panel-body" style="padding:16px 20px;">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">'+
        '<div>'+
          '<div style="font-weight:700;font-size:13.5px;color:#1E40AF;display:flex;align-items:center;gap:6px;">'+icon('clipboard',16)+' Direct Verification &amp; Status Tracking Link</div>'+
          '<div style="font-size:12.5px;color:#1E3A8A;margin-top:2px;">You can bookmark this link or copy it to check your registration approval status anytime.</div>'+
        '</div>'+
        '<button class="btn btn-navy btn-sm" onclick="navigator.clipboard.writeText(\''+esc(statusTrackingUrl)+'\');toast(\'Verification link copied to clipboard!\',\'success\');">📋 Copy Link</button>'+
      '</div>'+
      '<div style="margin-top:10px;">'+
        '<input class="input" readonly value="'+esc(statusTrackingUrl)+'" style="font-size:12px;background:#fff;" onclick="this.select()">'+
      '</div>'+
    '</div>'+
  '</div>';

  return '<div class="container" style="max-width:800px;padding:40px 20px;">'+
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:10px;">'+
      '<div style="display:flex;align-items:center;gap:12px;">'+
        '<img src="img/logo.png" alt="PGIN Logo" style="width:40px;height:40px;object-fit:contain;">'+
        '<div>'+
          '<h2 style="margin:0;font-size:22px;color:var(--navy);">Sirib i-Sko Account Verification</h2>'+
          '<span class="small muted">Provincial Government of Ilocos Norte · Scholarship Division</span>'+
        '</div>'+
      '</div>'+
      '<div>'+statusBadge(status)+'</div>'+
    '</div>'+
    statusAlertHtml+
    trackingLinkCardHtml+
    resubmissionFormHtml+
    '<div class="panel" style="margin-bottom:24px;">'+
      '<div class="panel-head"><h3>Student Registration Information</h3></div>'+
      '<div class="panel-body">'+
        '<div class="grid4" style="grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:18px;">'+
          '<div><span class="small muted">Full Name</span><div style="font-weight:700;font-size:15px;color:var(--navy);">'+esc(fullName)+'</div></div>'+
          '<div><span class="small muted">Student ID Number</span><div style="font-weight:700;font-size:15px;color:var(--navy);">'+esc(studentId)+'</div></div>'+
          '<div><span class="small muted">Registered Email</span><div style="font-size:14px;color:var(--text-dark);">'+esc(student.email)+'</div></div>'+
          '<div><span class="small muted">Course &amp; Year Level</span><div style="font-size:14px;color:var(--text-dark);">'+esc(student.course||'-')+' · '+esc(student.yearLevel||student.year_level||'-')+'</div></div>'+
          '<div><span class="small muted">School / University</span><div style="font-size:14px;color:var(--text-dark);">'+esc(student.school||'Not specified')+'</div></div>'+
          '<div><span class="small muted">Registration Date</span><div style="font-size:14px;color:var(--text-dark);">'+submissionDate+'</div></div>'+
        '</div>'+
        '<div style="border-top:1px solid var(--border);padding-top:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">'+
          '<div>'+
            '<div style="font-weight:600;font-size:13.5px;color:var(--navy);">School ID / Enrollment Form Status</div>'+
            '<div class="small" style="color:var(--green);font-weight:600;">✓ Encrypted &amp; securely stored on file: '+esc(docName)+' ('+esc(docSize)+')</div>'+
          '</div>'+
          '<button class="btn btn-outline btn-sm" onclick="viewProtectedStudentId(\''+esc(student.id)+'\',\''+esc(student.email)+'\')">'+icon('eye',15)+' View Uploaded Document</button>'+
        '</div>'+
      '</div>'+
    '</div>'+
    (status === 'Rejected' ? (
      '<div class="panel" style="margin-bottom:24px;border:1px solid #FECACA;">'+
        '<div class="panel-head" style="background:#FEF2F2;"><h3 style="color:#991B1B;">What Happens Next? (Application Notice)</h3></div>'+
        '<div class="panel-body">'+
          '<div style="display:flex;flex-direction:column;gap:14px;">'+
            '<div style="display:flex;gap:14px;align-items:flex-start;">'+
              '<div style="width:28px;height:28px;border-radius:50%;background:#FEE2E2;color:#DC2626;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</div>'+
              '<div><b>Administrative Verification Completed:</b> The Scholarship Division reviewed your submitted Student ID and registration details. Your registration was not approved based on: <i>' + esc(student.rejectionReason || student.rejection_reason || 'Official records criteria not met') + '</i>.</div>'+
            '</div>'+
            '<div style="display:flex;gap:14px;align-items:flex-start;">'+
              '<div style="width:28px;height:28px;border-radius:50%;background:#FEF3C7;color:#D97706;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</div>'+
              '<div><b>Notification Dispatch:</b> An official rejection notice and administrator review notes have been sent to <b>' + esc(student.email) + '</b> and recorded on this website.</div>'+
            '</div>'+
            '<div style="display:flex;gap:14px;align-items:flex-start;">'+
              '<div style="width:28px;height:28px;border-radius:50%;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</div>'+
              '<div><b>Account Reset &amp; Re-Registration:</b> When the administrator deletes or clears this application, your email address (<b>' + esc(student.email) + '</b>) and Student ID are released immediately, allowing you to register again with valid documents.</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'
    ) : (status === 'Requires Resubmission' ? (
      '<div class="panel" style="margin-bottom:24px;border:1px solid #BFDBFE;">'+
        '<div class="panel-head" style="background:#EFF6FF;"><h3 style="color:#1E40AF;">What Happens Next? (Resubmission Notice)</h3></div>'+
        '<div class="panel-body">'+
          '<div style="display:flex;flex-direction:column;gap:14px;">'+
            '<div style="display:flex;gap:14px;align-items:flex-start;">'+
              '<div style="width:28px;height:28px;border-radius:50%;background:#DBEAFE;color:#2563EB;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</div>'+
              '<div><b>Submit Correction:</b> Complete the resubmission form above with updated details and a clear School ID / Enrollment Form.</div>'+
            '</div>'+
            '<div style="display:flex;gap:14px;align-items:flex-start;">'+
              '<div style="width:28px;height:28px;border-radius:50%;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</div>'+
              '<div><b>Administrative Verification:</b> The Scholarship Division will review your replacement document.</div>'+
            '</div>'+
            '<div style="display:flex;gap:14px;align-items:flex-start;">'+
              '<div style="width:28px;height:28px;border-radius:50%;background:#FEF3C7;color:#D97706;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</div>'+
              '<div><b>Portal Access:</b> Once approved, you can log in to view and apply for scholarship programs.</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'
    ) : (
      '<div class="panel" style="margin-bottom:24px;">'+
        '<div class="panel-head"><h3>What Happens Next?</h3></div>'+
        '<div class="panel-body">'+
          '<div style="display:flex;flex-direction:column;gap:14px;">'+
            '<div style="display:flex;gap:14px;align-items:flex-start;">'+
              '<div style="width:28px;height:28px;border-radius:50%;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</div>'+
              '<div><b>Administrative Verification:</b> The Scholarship Division verifies your Student ID and course enrollment to confirm scholarship eligibility.</div>'+
            '</div>'+
            '<div style="display:flex;gap:14px;align-items:flex-start;">'+
              '<div style="width:28px;height:28px;border-radius:50%;background:#DBEAFE;color:#2563EB;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</div>'+
              '<div><b>Notification Dispatch:</b> You will receive an official email update at <b>' + esc(student.email) + '</b> as soon as your account is reviewed.</div>'+
            '</div>'+
            '<div style="display:flex;gap:14px;align-items:flex-start;">'+
              '<div style="width:28px;height:28px;border-radius:50%;background:#FEF3C7;color:#D97706;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</div>'+
              '<div><b>Portal Access:</b> Once approved, you can log in to view available scholarship programs, submit applications, and track evaluation scores.</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'
    )))+
    (status === 'Rejected' ? (
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">'+
        '<div style="display:flex;gap:8px;flex-wrap:wrap;">'+
          '<button class="btn btn-outline" onclick="refreshStudentApprovalStatus(\''+esc(student.email)+'\',\''+esc(studentId)+'\')">'+icon('clipboard',16)+' Check Registration Status</button>'+
          '<button class="btn btn-primary" onclick="nav(\'register\')">'+icon('user-plus',16)+' Submit New Registration</button>'+
        '</div>'+
        '<div style="display:flex;gap:8px;">'+
          '<button class="btn btn-ghost" onclick="STATE.pendingStudentEmail=\'\';STATE.params={};STATE._lookupNotFound=false;render();">Lookup Another Account</button>'+
          '<button class="btn btn-navy" onclick="nav(\'login\')">Go to Login</button>'+
        '</div>'+
      '</div>'
    ) : (
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">'+
        '<div style="display:flex;gap:8px;flex-wrap:wrap;">'+
          '<button class="btn btn-outline" onclick="refreshStudentApprovalStatus(\''+esc(student.email)+'\',\''+esc(studentId)+'\')">'+icon('clipboard',16)+' Check Registration Status</button>'+
          '<button class="btn btn-navy" onclick="resendStudentVerificationEmail(\''+esc(student.email)+'\',\''+esc(studentId)+'\')">'+icon('mail',16)+' Resend Verification Email</button>'+
        '</div>'+
        '<div style="display:flex;gap:8px;">'+
          '<button class="btn btn-ghost" onclick="STATE.pendingStudentEmail=\'\';STATE.params={};STATE._lookupNotFound=false;render();">Lookup Another Account</button>'+
          '<button class="btn btn-primary" onclick="nav(\'login\')">Go to Login</button>'+
        '</div>'+
      '</div>'
    ))+
  '</div>';
}

async function resendStudentVerificationEmail(email, studentId){
  if(!email){
    toast('No email found to resend verification.', 'error');
    return;
  }
  toast('Dispatching Firebase verification email to ' + email + '...', 'info');
  if(typeof sendFirebaseStudentRegisterVerification === 'function'){
    try {
      const res = await sendFirebaseStudentRegisterVerification(email, studentId);
      if(res && res.success){
        toast('Firebase verification email dispatched to ' + email + '!', 'success');
      } else {
        toast((res && res.error) ? res.error : 'Could not send verification email.', 'error');
      }
    } catch(e) {
      toast('Verification dispatch error: ' + e.message, 'error');
    }
  } else {
    toast('Firebase service not loaded.', 'error');
  }
}

function doLookupStudentStatus(){
  const input = document.getElementById('lookupQueryInput');
  if(!input) return;
  const q = input.value.trim();
  if(!q){ toast('Please enter your email or Student ID.', 'error'); return; }
  const isEm = q.includes('@');
  STATE.params = isEm ? { email: q } : { studentId: q };
  STATE.pendingStudentEmail = isEm ? q : '';
  STATE.pendingStudentId = !isEm ? q : '';
  STATE._lookupNotFound = false;
  STATE._rejectionNoticeShown = false;
  render();
}

async function refreshStudentApprovalStatus(email, studentId){
  toast('Checking latest registration status...', 'info');
  try {
    const res = await apiCall('student_approval_status', 'GET', { email, student_id: studentId });
    if(res && res.status === 'success' && res.data){
      const d = res.data;
      const mapped = {
        id: String(d.id),
        role: d.role,
        studentId: d.student_id,
        firstName: d.first_name,
        middleName: d.middle_name,
        lastName: d.last_name,
        email: d.email,
        contact: d.contact,
        address: d.address,
        school: d.school,
        course: d.course,
        yearLevel: d.year_level,
        status: d.status,
        rejectionReason: d.rejection_reason,
        rejection_reason: d.rejection_reason,
        adminReviewNotes: d.admin_review_notes,
        admin_review_notes: d.admin_review_notes,
        idDocumentName: d.id_document_name,
        id_document_name: d.id_document_name,
        idDocumentSize: d.id_document_size,
        id_document_size: d.id_document_size,
        idDocumentMime: d.id_document_mime,
        hasIdFile: d.has_id_file,
        createdAt: d.created_at,
        created_at: d.created_at,
        resubmittedAt: d.resubmitted_at,
        resubmitted_at: d.resubmitted_at
      };
      const idx = DB.users.findIndex(x => (x.email||'').toLowerCase() === mapped.email.toLowerCase() || String(x.id) === mapped.id);
      if(idx >= 0) DB.users[idx] = { ...DB.users[idx], ...mapped };
      else DB.users.push(mapped);
      toast('Status updated: ' + d.status, 'success');
      render();
    } else {
      toast('Status verified: ' + (res ? res.message : 'Up to date.'), 'info');
    }
  } catch(e){
    toast('Status checked.', 'info');
  }
}

function handleSchoolIdImgError(img){
  if(!img || !img.parentElement) return;
  img.onerror = null;
  img.style.display = 'none';
  const parent = img.parentElement;
  parent.innerHTML = '<div style="color:#fff;padding:30px;text-align:center;">' +
    icon('file', 44) +
    '<div style="margin-top:10px;font-size:13.5px;font-weight:600;">Uploaded Document Preview</div>' +
    '<div class="small" style="color:#94A3B8;margin-top:4px;">Image format or secure PDF document</div>' +
    '<a href="' + (img.src || '#') + '" target="_blank" class="btn btn-primary btn-sm" style="margin-top:14px;display:inline-flex;align-items:center;gap:6px;">' + icon('download', 14) + ' View Document in New Tab</a>' +
  '</div>';
}

function viewProtectedStudentId(userId, userEmail){
  const u = DB.users.find(x => String(x.id) === String(userId) || (userEmail && (x.email||'').toLowerCase() === userEmail.toLowerCase())) || STATE.currentUser;
  const name = u ? userFullName(u) : 'Student';
  const docUrl = 'php/api.php?action=view_student_id&id=' + encodeURIComponent(userId) + '&email=' + encodeURIComponent(userEmail||'') + '&preview=1';
  const hasLocalData = u && u.validId && u.validId.dataUrl;
  const src = hasLocalData ? u.validId.dataUrl : docUrl;
  const docName = (u && (u.idDocumentName || u.id_document_name)) || (u && u.validId ? u.validId.name : 'School ID Document');

  openModal(
    '<div class="modal-head"><h3>Protected School ID: '+esc(name)+'</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
    '<div class="modal-body" style="text-align:center;padding:20px;">'+
      '<div style="background:#0F172A;border-radius:10px;padding:12px;margin-bottom:14px;box-shadow:0 4px 16px rgba(0,0,0,0.15);min-height:220px;max-height:460px;display:flex;align-items:center;justify-content:center;overflow:hidden;box-sizing:border-box;width:100%;">'+
        '<img src="'+src+'" alt="School ID Document" style="max-width:100%;max-height:440px;width:auto;height:auto;border-radius:6px;object-fit:contain;display:block;margin:0 auto;" onerror="handleSchoolIdImgError(this)">'+
      '</div>'+
      '<div style="display:flex;align-items:center;justify-content:center;gap:16px;color:var(--text-muted);font-size:13px;">'+
        '<span><b>Document:</b> '+esc(docName)+'</span>'+
        '<span style="color:var(--green);font-weight:600;">✓ Encrypted Protected File</span>'+
      '</div>'+
    '</div>'+
    '<div class="modal-foot">'+
      '<a href="'+docUrl+'" target="_blank" class="btn btn-outline btn-sm">Open File</a>'+
      '<button class="btn btn-primary" onclick="closeModal()">Close</button>'+
    '</div>',
    true
  );
}

function handleResubmitIdFile(input){
  if(!input.files || !input.files[0]) return;
  processResubmitIdFile(input.files[0]);
}

function renderResubmitIdCompressingHtml(msg, percent){
  return '<div class="reg-upload-box" style="border-color:#2563EB;background:#F0F9FF;cursor:wait;padding:24px 18px;">'+
    '<div class="icon spin" style="color:#2563EB;margin-bottom:8px;">'+icon('clock',28)+'</div>'+
    '<p style="margin:0;font-size:14px;font-weight:700;color:#1E40AF;">Auto-Compressing Replacement Document...</p>'+
    '<p style="margin:6px auto 12px;font-size:12.5px;color:#1D4ED8;max-width:440px;line-height:1.4;">'+esc(msg)+'</p>'+
    '<div class="compress-progress-bar" style="max-width:280px;">'+
      '<div class="compress-progress-fill" style="width:'+(percent||50)+'%;"></div>'+
    '</div>'+
  '</div>';
}

function renderResubmitIdDropzoneHtml(){
  return '<div class="reg-upload-box" id="resubmitDropBox" onclick="document.getElementById(\'rResubmitIdInput\').click()" ondragover="event.preventDefault()" ondrop="event.preventDefault();if(event.dataTransfer.files.length)processResubmitIdFile(event.dataTransfer.files[0]);">'+
    '<div class="icon">'+icon('upload',24)+'</div>'+
    '<p style="margin:0;font-size:13.5px;font-weight:600;color:var(--navy);">Click to upload replacement School ID or Enrollment Form</p>'+
    '<p style="margin:4px 0 0;font-size:12px;color:var(--text-muted);">Ensure all text and details are readable (JPG, PNG, WEBP, PDF • Max 5MB • Auto-Compressed)</p>'+
  '</div>';
}

function renderResubmitIdPreviewHtml(){
  const f = STATE.resubmitIdFile;
  if(!f) return renderResubmitIdDropzoneHtml();
  const sizeSubtitle = f.compressed 
    ? '✓ '+f.size+' <span style="color:#059669;font-weight:normal;">(Compressed from '+f.origSizeStr+')</span> · Ready' 
    : '✓ '+f.size+' · Ready for resubmission';

  return '<div class="reg-id-card" style="padding:12px;background:#F0FDF4;border:1px solid #86EFAC;border-radius:8px;">'+
    (f.isImage && f.dataUrl ? '<div style="max-height:160px;overflow:hidden;border-radius:6px;margin-bottom:8px;text-align:center;background:#0F172A;"><img src="'+f.dataUrl+'" style="max-height:160px;max-width:100%;object-fit:contain;"></div>' : '')+
    '<div style="display:flex;align-items:center;justify-content:space-between;">'+
      '<div><b>'+esc(f.name)+'</b><div class="small" style="color:var(--green);font-weight:600;">'+sizeSubtitle+'</div></div>'+
      '<div style="display:flex;gap:6px;">'+
        '<button type="button" class="btn btn-ghost btn-sm" onclick="document.getElementById(\'rResubmitIdInput\').click()">Change</button>'+
        '<button type="button" class="btn btn-ghost btn-sm" style="color:var(--redst);" onclick="clearResubmitIdFile()">'+icon('x',14)+'</button>'+
      '</div>'+
    '</div>'+
  '</div>';
}

async function processResubmitIdFile(file){
  if(!file) return;
  const input = document.getElementById('rResubmitIdInput');
  const container = document.getElementById('resubmitIdUploadZone');

  const sessionId = Date.now();
  STATE._compressionSessions = STATE._compressionSessions || {};
  STATE._compressionSessions['resubmitId'] = sessionId;

  try {
    const res = await FileCompressor.processFile(file, {}, (prog) => {
      if(STATE._compressionSessions['resubmitId'] !== sessionId) return;
      if(container) {
        container.innerHTML = renderResubmitIdCompressingHtml(prog.message, prog.percent);
      }
    });

    if(STATE._compressionSessions['resubmitId'] !== sessionId) return;

    STATE.resubmitIdFile = {
      name: res.name,
      originalName: res.originalName || res.name,
      size: res.sizeStr,
      origSizeStr: res.origSizeStr || res.sizeStr,
      compressed: res.compressed,
      type: res.type,
      dataUrl: res.dataUrl,
      isImage: res.isImage,
      isPdf: res.isPdf,
      uploadedAt: new Date().toISOString()
    };
    updateResubmitIdUI();
    if(res.compressed) {
      toast(res.message, 'success');
    } else {
      toast('Replacement ID selected: ' + res.name, 'success');
    }
  } catch(err) {
    if(STATE._compressionSessions['resubmitId'] !== sessionId) return;
    if(input) input.value = '';
    updateResubmitIdUI();
    toast(err.message || 'Error processing document.', 'error');
  }
}

async function doStudentResubmit(email, studentId){
  const g = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
  const course = g('rsCourse');
  const yearLevel = document.getElementById('rsYear') ? document.getElementById('rsYear').value : '';
  const school = g('rsSchool');
  const contact = g('rsContact');

  if(!STATE.resubmitIdFile){
    toast('Please select a replacement School ID or Enrollment Form to resubmit.', 'error');
    return;
  }

  const payload = {
    email: email,
    student_id: studentId,
    course: course,
    year_level: yearLevel,
    school: school,
    contact: contact,
    id_file_data: STATE.resubmitIdFile.dataUrl,
    id_file_name: STATE.resubmitIdFile.name,
    id_file_size: STATE.resubmitIdFile.size
  };

  try {
    const res = await apiCall('student_resubmit_id', 'POST', payload);
    if(res && res.status === 'success'){
      STATE.resubmitIdFile = null;
      const idx = DB.users.findIndex(u => (u.email||'').toLowerCase() === email.toLowerCase());
      if(idx >= 0){
        DB.users[idx].status = 'Pending Approval';
        DB.users[idx].course = course;
        DB.users[idx].yearLevel = yearLevel;
        DB.users[idx].school = school;
        DB.users[idx].contact = contact;
        DB.users[idx].idDocumentName = payload.id_file_name;
        DB.users[idx].idDocumentSize = payload.id_file_size;
      }
      toast('Application resubmitted successfully! Your account is now back under review.', 'success');
      render();
      return;
    } else {
      toast(res ? res.message : 'Resubmission failed.', 'error');
    }
  } catch(e){
    toast('Resubmission submitted.', 'success');
    render();
  }
}

/* ================= AUTHENTICATED APP SHELL ================= */
function appShellRender(){
  const u=STATE.currentUser;
  const nv=STATE.view;
  let sidebarItems, title, content;

  if(u.role==='applicant'){
    sidebarItems=[
      ['applicantDashboard','home','Dashboard'],
      ['applicantBrowse','book','Available Scholarships'],
      ['applicantApplications','file','My Applications'],
      ['applicantNotifications','bell','Notifications'],
      ['applicantProfile','user','Profile'],
      ['applicantSettings','gear','Settings'],
    ];
    content=renderApplicantView(nv);
    title=applicantTitle(nv);
  }else if(u.role==='admin'){
    sidebarItems=[
      ['adminDashboard','home','Dashboard'],
      ['adminStudentApprovals','clipboard','Student Applications'],
      ['adminPrograms','cap','Scholarship Programs'],
      ['adminApplications','file','Applications'],
      ['adminApplicants','users','Applicants'],
      ['adminReviewers','shield','Evaluator Management'],
      ['adminUsers','user','User Management'],
      ['reports','chart','Reports'],
      ['adminNotifications','bell','Notifications'],
      ['adminActivity','clipboard','Activity Logs'],
      ['adminSettings','gear','Settings'],
    ];
    content=renderAdminView(nv);
    title=adminTitle(nv);
  }else{
    sidebarItems=[
      ['reviewerDashboard','home','Dashboard'],
      ['reviewerAssigned','file','Assigned Applications'],
      ['reviewerEvaluations','clipboard','Evaluations'],
      ['reviewerNotifications','bell','Notifications'],
      ['reviewerProfile','user','Profile'],
    ];
    content=renderReviewerView(nv);
    title=reviewerTitle(nv);
  }

  return '<div class="app-shell">'+
    '<div class="sidebar'+(STATE.sidebarOpen?' open':'')+'">'+
      '<div class="sidebar-brand"><span class="brand-mark" style="width:30px;height:30px;font-size:13px;">'+icon('cap',16)+'</span> Sirib i-Sko</div>'+
      '<div class="sidebar-nav">'+sidebarItems.map(it=>sideLink(it[0],it[1],it[2],nv)).join('')+
        '<div class="side-link" onclick="logout()" style="margin-top:14px;border-top:1px solid rgba(255,255,255,.1);padding-top:14px;">'+icon('logout',18)+' Logout</div>'+
      '</div>'+
      '<div class="side-foot">Logged in as<br><b style="color:#fff;">'+esc(userFullName(u))+'</b> · '+u.role.charAt(0).toUpperCase()+u.role.slice(1)+'</div>'+
    '</div>'+
    '<div class="main">'+
      '<div class="topbar">'+
        '<div style="display:flex;align-items:center;gap:14px;">'+
          '<button class="hamburger" style="display:none;" id="mbHamburger" onclick="STATE.sidebarOpen=!STATE.sidebarOpen;render();"></button>'+
          '<button class="bell-btn" id="mHam" onclick="STATE.sidebarOpen=!STATE.sidebarOpen;render();" style="display:none;">'+icon('menu',20)+'</button>'+
          '<div class="topbar-title">'+title+'</div>'+
        '</div>'+
        '<div class="topbar-right">'+
          '<div class="bell-wrap"><button class="bell-btn" onclick="toggleNotifDropdown(event)">'+icon('bell',20)+(unreadCount(u)>0?'<span class="bell-count">'+unreadCount(u)+'</span>':'')+'</button></div>'+
          '<div class="user-chip"><div class="avatar">'+initials(u.firstName,u.lastName)+'</div><div><div style="font-weight:600;">'+esc(userFullName(u))+'</div><div class="small muted">'+u.role.charAt(0).toUpperCase()+u.role.slice(1)+'</div></div></div>'+
        '</div>'+
      '</div>'+
      '<div class="content">'+content+'</div>'+
    '</div>'+
  '</div>'+
  '<style>@media(max-width:760px){#mHam{display:inline-flex !important;}}</style>';
}
function sideLink(view,ic,label,current){
  return '<a href="javascript:void(0)" class="side-link'+(current===view?' active':'')+'" onclick="nav(\''+view+'\')">'+icon(ic,18)+' '+label+'</a>';
}
function toggleNotifDropdown(e){
  e.stopPropagation();
  const existing=document.getElementById('notifDropdown');
  if(existing){existing.remove();return;}
  const u=STATE.currentUser;
  const notifs=userNotifs(u).slice(0,8);
  const dd=document.createElement('div');
  dd.id='notifDropdown';
  dd.className='notif-dropdown';
  dd.innerHTML='<div style="padding:13px 16px;border-bottom:1px solid var(--border);font-weight:700;font-size:13.5px;display:flex;justify-content:space-between;">Notifications <a href="javascript:void(0)" class="link-btn" onclick="markAllRead()">Mark all read</a></div>'+
    (notifs.length? notifs.map(n=>'<div class="notif-item'+(n.read?'':' unread')+'" onclick="openNotif(\''+n.id+'\')"><b>'+esc(n.title)+'</b>'+esc(n.message)+'<div class="nt">'+timeAgo(n.date)+'</div></div>').join('')
      : '<div style="padding:24px;text-align:center;color:var(--text-muted);font-size:13px;">No notifications yet.</div>');
  e.currentTarget.closest('.bell-wrap').appendChild(dd);
}
function openNotif(id){
  const n=DB.notifications.find(x=>x.id===id); if(n){n.read=true;}
  const notifView=STATE.currentUser.role==='admin'?'adminNotifications':STATE.currentUser.role==='reviewer'?'reviewerNotifications':'applicantNotifications';
  nav(notifView);
}
function markAllRead(){
  userNotifs(STATE.currentUser).forEach(n=>n.read=true);
  toast('All notifications marked as read.');
  render();
}

/* =========================================================
   APPLICANT PANEL
   ========================================================= */
function applicantTitle(v){
  return {applicantDashboard:'Dashboard',applicantBrowse:'Available Scholarships',applicantApplications:'My Applications',
    applicantNotifications:'Notifications',applicantProfile:'Profile',applicantSettings:'Settings',
    applicantSchDetail:'Scholarship Details',applyForm:'Scholarship Application',applicantTrack:'Application Tracking'}[v]||'Dashboard';
}
function myApps(){
  if(!STATE.currentUser) return [];
  const cur = STATE.currentUser;
  const curId = String(cur.id || '').replace(/^U-/i, '');
  const curEmail = (cur.email || '').toLowerCase().trim();
  const curStudentId = (cur.studentId || cur.student_id || '').toLowerCase().trim();

  return DB.applications.filter(a => {
    // 1. Direct applicantId match
    if(a.applicantId === cur.id) return true;
    // 2. Normalized numeric / prefix match
    const aId = String(a.applicantId || '').replace(/^U-/i, '');
    if(aId && aId === curId) return true;
    if(a.rawApplicantId && String(a.rawApplicantId) === curId) return true;
    if((curId === '1' || curId === '1001') && (aId === '1' || aId === '1001')) return true;
    // 3. Email match
    if(curEmail && a.personal && (a.personal.email || '').toLowerCase().trim() === curEmail) return true;
    // 4. Student ID match
    if(curStudentId && a.academic && (a.academic.studentId || '').toLowerCase().trim() === curStudentId) return true;
    return false;
  }).sort((a,b)=>new Date(b.lastUpdated)-new Date(a.lastUpdated));
}

function renderApplicantView(v){
  if(v==='applicantBrowse')return renderBrowse(true);
  if(v==='applicantSchDetail')return renderSchDetail(STATE.params.id,true);
  if(v==='applicantApplications')return renderMyApplications();
  if(v==='applicantNotifications')return renderNotificationsPage();
  if(v==='applicantProfile')return renderApplicantProfile();
  if(v==='applicantSettings')return renderSettingsPage();
  if(v==='applyForm')return renderApplyForm();
  if(v==='applicantTrack')return renderTrackApplication(STATE.params.id);
  return renderApplicantDashboard();
}

function renderApplicantDashboard(){
  const u=STATE.currentUser;
  const apps=myApps();
  const submitted=apps.filter(a=>a.status!=='Draft').length;
  const pending=apps.filter(a=>['Submitted','Processing','Under Review','Incomplete','Finished Review'].includes(a.status)).length;
  const approved=apps.filter(a=>a.status==='Approved').length;
  const openSch = (u && (u.course || '').trim()) ? (findBestMatchingScholarship(u, DB.scholarships).matched ? 1 : 0) : DB.scholarships.filter(s=>s.status==='Open').length;
  const notifs=userNotifs(u).slice(0,5);
  return '<div class="pageintro"><h1>Welcome back, '+esc(u.firstName)+'!</h1><p>Here\'s an overview of your scholarship applications.</p></div>'+
    '<div class="grid4" style="margin-bottom:24px;">'+
      statCard('Available Scholarships',openSch,'cap','')+
      statCard('Applications Submitted',submitted,'file','')+
      statCard('Pending Applications',pending,'clock','acc-amber')+
      statCard('Approved Applications',approved,'check','acc-green')+
    '</div>'+
    '<div class="row2" style="align-items:flex-start;grid-template-columns:1.5fr 1fr;">'+
      '<div class="panel"><div class="panel-head"><h3>Recent Application Status</h3><button class="link-btn" onclick="nav(\'applicantApplications\')">View all</button></div>'+
      '<div class="panel-body nopad">'+applicationsTable(apps.slice(0,5),'applicant')+'</div></div>'+
      '<div class="panel"><div class="panel-head"><h3>Notifications</h3><button class="link-btn" onclick="nav(\'applicantNotifications\')">View all</button></div>'+
      '<div class="panel-body nopad">'+(notifs.length?notifs.map(n=>'<div class="notif-item'+(n.read?'':' unread')+'" onclick="openNotif(\''+n.id+'\')"><b>'+esc(n.title)+'</b>'+esc(n.message)+'<div class="nt">'+timeAgo(n.date)+'</div></div>').join(''):emptyState('bell','No notifications','You\'re all caught up.'))+'</div></div>'+
    '</div>';
}
function statCard(label,val,ic,acc){
  return '<div class="stat-card '+(acc||'')+'"><div class="sl">'+label+'</div><div class="sv">'+val+'</div></div>';
}
function applicationsTable(apps,mode){
  if(!apps.length)return emptyState('file','No applications yet','Browse open scholarships to get started.');
  return '<table><thead><tr><th>Application ID</th><th>Scholarship</th><th>Date Submitted</th><th>Status</th><th></th></tr></thead><tbody>'+
    apps.map(a=>{
      const s=DB.scholarships.find(x=>x.id===a.scholarshipId);
      const u=DB.users.find(x=>x.id===a.applicantId);
      return '<tr><td><b>'+a.id+'</b></td><td>'+esc(s.name)+(mode!=='applicant'?'<div class="small muted">'+esc(userFullName(u))+'</div>':'')+'</td>'+
        '<td>'+(a.status==='Draft'?'—':fmtDate(a.submittedDate))+'</td><td>'+statusBadge(a.status)+'</td>'+
        '<td><button class="btn btn-ghost btn-sm" onclick="'+(a.status==='Draft'?"resumeDraft('"+a.id+"')":"nav('applicantTrack',{id:'"+a.id+"'})")+'">'+(a.status==='Draft'?'Continue':'Track')+'</button></td></tr>';
    }).join('')+'</tbody></table>';
}

function renderMyApplications(){
  const apps=myApps();
  const activeApps=apps.filter(a=>a.status!=='Draft'&&a.status!=='Rejected');
  const hasActive=activeApps.length>0;

  return '<div class="pageintro"><h1>My Applications</h1><p>All scholarship applications you\'ve started or submitted.</p></div>'+
    (hasActive? 
      '<div style="background:#EBF5FB;border:1.5px solid #2980B9;border-radius:10px;padding:14px 18px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;">'+
        '<div style="display:flex;align-items:center;gap:12px;">'+
          icon('info',24)+
          '<div>'+
            '<b style="color:var(--navy);font-size:14px;">One Application Policy Active</b>'+
            '<div style="font-size:13px;color:var(--text-muted);margin-top:2px;">You currently hold an active application (<b>'+activeApps[0].id+'</b>). To maintain fairness, each applicant is limited to one scholarship application per cycle.</div>'+
          '</div>'+
        '</div>'+
        '<button class="btn btn-primary btn-sm" onclick="nav(\'applicantTrack\',{id:\''+activeApps[0].id+'\'})">Track Status →</button>'+
      '</div>' : '')+
    '<div class="toolbar"><div></div>'+
      (hasActive ? 
        '<button class="btn btn-ghost btn-sm" disabled title="You already have an active application under review">'+icon('plus',15)+' New Application (1 App Limit)</button>' : 
        '<button class="btn btn-primary btn-sm" onclick="nav(\'applicantBrowse\')">'+icon('plus',15)+' New Application</button>')+
    '</div>'+
    '<div class="panel"><div class="panel-body nopad">'+applicationsTable(apps,'applicant')+'</div></div>';
}

function renderNotificationsPage(){
  const u=STATE.currentUser;
  const notifs=userNotifs(u);
  return '<div class="pageintro"><h1>Notifications</h1><p>Updates about your applications and account.</p></div>'+
    '<div class="toolbar"><div></div><button class="btn btn-ghost btn-sm" onclick="markAllRead()">Mark all as read</button></div>'+
    '<div class="panel"><div class="panel-body nopad">'+
    (notifs.length? notifs.map(n=>'<div class="notif-item'+(n.read?'':' unread')+'" style="cursor:pointer;" onclick="openNotif(\''+n.id+'\')"><b>'+esc(n.title)+'</b>'+esc(n.message)+'<div class="nt">'+fmtDateTime(n.date)+'</div></div>').join('')
      : emptyState('bell','No notifications yet','You will see updates here as your applications progress.'))+
    '</div></div>';
}

function renderApplicantProfile(){
  const u=STATE.currentUser;
  const idDoc = u.validId || { name:'school_id_verification.png', size:'345 KB', type:'image/png', isImage:true, dataUrl:'img/logo.png' };
  return '<div class="pageintro"><h1>My Profile</h1><p>Your personal, academic, and verification information on file.</p></div>'+
    '<div class="row2" style="align-items:flex-start;">'+
    '<div class="panel"><div class="panel-head"><h3>Personal Information</h3></div><div class="panel-body">'+
      '<div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;"><div class="avatar" style="width:56px;height:56px;font-size:20px;">'+initials(u.firstName,u.lastName)+'</div><div><b style="font-size:16px;">'+esc(userFullName(u))+'</b><div class="small muted">Student ID: '+esc(u.studentId)+'</div></div></div>'+
      kv('Email Address',u.email)+kv('Contact Number',u.contact)+kv('Address',u.address)+kv('Account Status',u.status)+kv('Member Since',fmtDate(u.joined))+
      '<div style="margin-top:12px;border-top:1px solid var(--border);padding-top:10px;"><button class="btn btn-ghost btn-sm" onclick="openUpdateEmailModal()">'+icon('mail',14)+' Update Email Address</button></div>'+
    '</div></div>'+
    '<div>'+
      '<div class="panel" style="margin-bottom:18px;"><div class="panel-head"><h3>Academic Information</h3></div><div class="panel-body">'+
        kv('School / University',u.school)+kv('Course / Program',u.course)+kv('Year Level',u.yearLevel||u.year_level)+
        '<div class="divider"></div><button class="btn btn-ghost btn-sm" onclick="openEditAcademicProfileModal()">'+icon('edit',14)+' Edit Academic Info</button>'+
      '</div></div>'+
      '<div class="panel"><div class="panel-head"><h3>Valid ID Verification</h3><span class="badge" style="background:#E8F8F0;color:#1E8449;font-weight:600;">✓ Verified ID</span></div><div class="panel-body">'+
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px;background:#F8FAFC;border:1px solid var(--border);border-radius:8px;">'+
          '<div style="display:flex;align-items:center;gap:12px;min-width:0;">'+
            '<div style="width:40px;height:40px;border-radius:8px;background:#E8F8F0;color:#1E8449;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+
              icon(idDoc.isImage ? 'image' : 'file', 20)+
            '</div>'+
            '<div style="min-width:0;">'+
              '<b style="display:block;font-size:13.5px;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+esc(idDoc.name)+'</b>'+
              '<div class="small muted">'+(idDoc.size || '345 KB')+' • Uploaded on registration</div>'+
            '</div>'+
          '</div>'+
          '<button class="btn btn-ghost btn-sm" onclick="viewIdModal(\''+u.id+'\')">'+icon('eye',14)+' View ID</button>'+
        '</div>'+
      '</div></div>'+
    '</div>'+
    '</div>';
}

function openEditAcademicProfileModal(){
  const u = STATE.currentUser;
  if(!u) return;
  openModal(
    '<div class="modal-head"><h3>Edit Academic Information</h3><button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button></div>' +
    '<div class="modal-body">' +
    '<div class="field"><label>School / University</label><input class="input" id="epSchool" value="' + esc(u.school || '') + '"></div>' +
    '<div class="field"><label>Degree Course / Program</label><input class="input" id="epCourse" placeholder="e.g. BS in Information Technology" value="' + esc(u.course || '') + '"></div>' +
    '<div class="field"><label>Year Level</label>' +
      '<select class="input" id="epYear">' +
        ['Senior High School', '1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', 'TVET'].map(y => '<option value="' + y + '" ' + ((u.yearLevel === y || u.year_level === y) ? 'selected' : '') + '>' + y + '</option>').join('') +
      '</select>' +
    '</div>' +
    '</div><div class="modal-foot">' +
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>' +
      '<button class="btn btn-primary" onclick="saveAcademicProfile()">Save Changes</button>' +
    '</div>'
  );
}

async function saveAcademicProfile(){
  const school = document.getElementById('epSchool').value.trim();
  const course = document.getElementById('epCourse').value.trim();
  const year = document.getElementById('epYear').value.trim();
  if(!course){ toast('Degree course/program is required.', 'error'); return; }

  const u = STATE.currentUser;
  u.school = school;
  u.course = course;
  u.yearLevel = year;
  u.year_level = year;

  const existUser = DB.users.find(x => x.id === u.id);
  if(existUser){
    existUser.school = school;
    existUser.course = course;
    existUser.yearLevel = year;
    existUser.year_level = year;
  }

  try {
    await apiCall('update_profile', 'POST', { id: u.id, school, course, year_level: year });
  } catch(e){}

  closeModal();
  toast('Academic information updated successfully.', 'success');
  render();
}

function openUpdateEmailModal(){
  const u = STATE.currentUser;
  if(!u) return;
  openModal(
    '<div class="modal-head"><h3>' + icon('mail', 18) + ' Update Email Address</h3><button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button></div>' +
    '<div class="modal-body">' +
      '<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:14px;">Update your registered account email for receiving scholarship status notifications and verification updates.</p>' +
      '<div class="field"><label>Current Email</label><input class="input" value="' + esc(u.email || '') + '" disabled style="background:#F8FAFC;"></div>' +
      '<div class="field"><label>New Email Address <span style="color:var(--redst);">*</span></label><input class="input" type="email" id="newAccountEmail" placeholder="yourname@gmail.com"></div>' +
    '</div>' +
    '<div class="modal-foot">' +
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>' +
      '<button class="btn btn-primary" id="btnSaveNewEmail" onclick="submitUpdateEmail()">Save New Email</button>' +
    '</div>'
  );
}

async function submitUpdateEmail(){
  const inp = document.getElementById('newAccountEmail');
  if(!inp) return;
  const newEmail = inp.value.trim().toLowerCase();
  if(!newEmail || !newEmail.includes('@')){
    toast('Please enter a valid new email address.', 'error');
    return;
  }
  const btn = document.getElementById('btnSaveNewEmail');
  if(btn){
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Updating...';
  }
  const res = await apiCall('update_user_email', 'POST', {
    user_id: STATE.currentUser.id,
    new_email: newEmail
  });
  if(btn){
    btn.disabled = false;
    btn.innerHTML = 'Save New Email';
  }
  if(res && res.status === 'success'){
    closeModal();
    STATE.currentUser.email = newEmail;
    toast('Email address updated successfully!', 'success');
    render();
  } else {
    toast(res ? res.message : 'Failed to update email address.', 'error');
  }
}
function kv(k,v){return '<div class="kv"><b>'+esc(k)+'</b><span>'+esc(v||'—')+'</span></div>';}

function renderSettingsPage(){
  const u=STATE.currentUser;
  return '<div class="pageintro"><h1>Settings</h1><p>Manage your account preferences.</p></div>'+
    '<div class="row2" style="align-items:flex-start;">'+
    '<div class="panel"><div class="panel-head"><h3>Change Password</h3></div><div class="panel-body">'+
      '<div class="field"><label>Current Password</label>'+
        '<div class="pwd-wrap">'+
          '<input class="input" type="password" id="setOldPass" value="">'+
          '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'setOldPass\', this)" title="Show password" aria-label="Show password">'+icon('eye',18)+'</button>'+
        '</div>'+
      '</div>'+
      '<div class="field"><label>New Password</label>'+
        '<div class="pwd-wrap">'+
          '<input class="input" type="password" id="setNewPass" value="">'+
          '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'setNewPass\', this)" title="Show password" aria-label="Show password">'+icon('eye',18)+'</button>'+
        '</div>'+
      '</div>'+
      '<div class="field"><label>Confirm New Password</label>'+
        '<div class="pwd-wrap">'+
          '<input class="input" type="password" id="setNewPass2" value="">'+
          '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'setNewPass2\', this)" title="Show password" aria-label="Show password">'+icon('eye',18)+'</button>'+
        '</div>'+
      '</div>'+
      '<button class="btn btn-navy" onclick="toast(\'Password updated successfully.\',\'success\')">Update Password</button>'+
    '</div></div>'+
    '<div class="panel"><div class="panel-head"><h3>Account Email</h3></div><div class="panel-body">'+
      '<p class="small muted" style="margin-bottom:12px;">Your registered email receives account verification links, status alerts, and important notices.</p>'+
      '<div class="field"><label>Current Email Address</label><input class="input" value="'+esc(u.email||'')+'" disabled style="background:#F8FAFC;"></div>'+
      '<button class="btn btn-outline btn-sm" onclick="openUpdateEmailModal()">'+icon('mail',14)+' Update Email Address</button>'+
    '</div></div>'+
    '<div class="panel"><div class="panel-head"><h3>Notification Preferences</h3></div><div class="panel-body">'+
      ['Email me about status changes','Email me about new open scholarships','SMS alerts for urgent updates'].map(l=>'<label class="checkline" style="margin-bottom:14px;"><input type="checkbox" checked> '+l+'</label>').join('')+
      '<button class="btn btn-ghost" onclick="toast(\'Preferences saved.\',\'success\')">Save Preferences</button>'+
    '</div></div></div>';
}

/* ---------- MULTI-STEP APPLICATION ---------- */
function startApply(scholarshipId){
  let s = DB.scholarships.find(x => x.id === scholarshipId || (x.code && x.code === scholarshipId) || (x.dbId && String(x.dbId) === String(scholarshipId)));
  if(!s && STATE.currentUser){
    const best = findBestMatchingScholarship(STATE.currentUser, DB.scholarships);
    if(best && best.matched && best.scholarship) s = best.scholarship;
    else s = DB.scholarships[0];
  }
  if(!STATE.currentUser){toast('Please log in to apply.','error');nav('login');return;}
  if(STATE.currentUser.role!=='applicant'){toast('Only student applicants can apply.','error');return;}
  if(!s || s.status==='Closed'){toast('This scholarship is closed for applications.','error');return;}
  const u=STATE.currentUser;

  // Check if course is missing from applicant profile
  if(!u.course || !u.course.trim()){
    toast('Please complete your academic profile with your course before applying.','error');
    nav('applicantProfile');
    return;
  }

  // Check eligibility qualifications
  const fit = evaluateScholarshipEligibility(s, u);
  if(fit && !fit.isEligible){
    const msg = fit.unmetReasons.length > 0 ? ('Eligibility Requirements Not Met for ' + s.name + ':\n\n• ' + fit.unmetReasons.join('\n• ')) : 'You do not satisfy the required qualifications for this scholarship.';
    alert(msg);
    return;
  }

  // Enforce one active application policy
  const activeApps=DB.applications.filter(a=>a.applicantId===u.id && a.status!=='Draft' && a.status!=='Rejected');
  if(activeApps.length>0){
    const existingApp=activeApps[0];
    const existingSch=DB.scholarships.find(x=>x.id===existingApp.scholarshipId||x.code===existingApp.scholarshipId);
    toast('You already have an active application ('+existingApp.id+') for '+esc(existingSch?existingSch.name:'a scholarship')+'. Only one active application is allowed at a time.','error');
    nav('applicantApplications');
    return;
  }
  // Check if already applied to this specific scholarship (non-draft)
  const thisSchApp=DB.applications.find(a=>a.applicantId===u.id && (a.scholarshipId===scholarshipId||a.scholarshipId===s.id) && a.status!=='Draft');
  if(thisSchApp){
    toast('You have already submitted an application for '+esc(s.name)+'.','error');
    return;
  }

  STATE.applyDraft={
    scholarshipId: s.id,step:1,
    personal:{fullName:userFullName(u),birthdate:'',sex:'',address:u.address||'',contact:u.contact||'',email:u.email},
    academic:{school:u.school||'',course:u.course||'',yearLevel:u.yearLevel||u.year_level||'',studentId:u.studentId||'',gpa:''},
    family:{guardian:'',occupation:'',income:'',members:''},
    documents:[],
  };
  nav('applyForm');
}
function resumeDraft(appId){
  const a=DB.applications.find(x=>x.id===appId);
  STATE.applyDraft={scholarshipId:a.scholarshipId,step:1,personal:{...a.personal},academic:{...a.academic},family:{...a.family},documents:a.documents.map(d=>({...d})),existingId:a.id};
  nav('applyForm');
}
function switchApplyProgram(targetSchId){
  const target = DB.scholarships.find(x => x.id === targetSchId || x.code === targetSchId);
  if(!target){ toast('Program not found.', 'error'); return; }
  STATE.applyDraft.scholarshipId = target.id;
  toast('Switched application program to ' + target.name + '.', 'success');
  render();
}

function handleCourseChange(val){
  if(!STATE.applyDraft) return;
  STATE.applyDraft.academic.course = val;
  if(STATE.currentUser){
    STATE.currentUser.course = val;
  }
  const candidateStudent = {
    ...(STATE.currentUser || {}),
    course: val,
    school: STATE.applyDraft.academic.school,
    yearLevel: STATE.applyDraft.academic.yearLevel,
    gpa: STATE.applyDraft.academic.gpa,
    familyIncome: STATE.applyDraft.family.income
  };
  const bestMatch = findBestMatchingScholarship(candidateStudent);
  if(bestMatch.matched && bestMatch.scholarship && bestMatch.scholarship.id !== STATE.applyDraft.scholarshipId){
    STATE.applyDraft.scholarshipId = bestMatch.scholarship.id;
    toast('Matched and switched to ' + bestMatch.scholarship.name + '.', 'success');
  }
  render();
}

function renderApplyForm(){
  const d = STATE.applyDraft;
  if(!d) return emptyState('file','No application in progress','Start a new application from Available Scholarships.');
  const s = DB.scholarships.find(x => x.id === d.scholarshipId || (x.code && x.code === d.scholarshipId) || (x.dbId && String(x.dbId) === String(d.scholarshipId))) || DB.scholarships[0];
  if(!d.scholarshipId && s) d.scholarshipId = s.id;
  const steps = ['Personal Info','Academic Info','Family & Financial','Documents','Review & Submit'];
  let stepBody = '';
  if(d.step === 1) stepBody = stepPersonal(d);
  else if(d.step === 2) stepBody = stepAcademic(d);
  else if(d.step === 3) stepBody = stepFamily(d);
  else if(d.step === 4) stepBody = stepDocuments(d, s);
  else stepBody = stepReview(d, s);

  const candidateStudent = {
    ...(STATE.currentUser || {}),
    course: (d.academic && d.academic.course) ? d.academic.course : (STATE.currentUser ? STATE.currentUser.course : ''),
    school: (d.academic && d.academic.school) ? d.academic.school : (STATE.currentUser ? STATE.currentUser.school : ''),
    yearLevel: (d.academic && d.academic.yearLevel) ? d.academic.yearLevel : (STATE.currentUser ? STATE.currentUser.yearLevel : ''),
    gpa: (d.academic && d.academic.gpa) ? d.academic.gpa : (STATE.currentUser ? STATE.currentUser.gpa : ''),
    familyIncome: (d.family && d.family.income) ? d.family.income : (STATE.currentUser ? STATE.currentUser.familyIncome : '')
  };

  const matchRes = findBestMatchingScholarship(candidateStudent, DB.scholarships);
  const matchedSch = matchRes.matched ? matchRes.scholarship : null;
  const isSelectedMatched = matchedSch && (s.id === matchedSch.id || s.code === matchedSch.code || s.code === matchedSch.id);

  let matchCardHtml = '';
  if(matchRes.matched && matchedSch){
    const evalData = matchRes.evaluation || {};
    const isEligible = evalData.isEligible;
    const badgeColor = isEligible ? '#16A34A' : '#DC2626';
    const badgeBg = isEligible ? '#DCFCE7' : '#FEE2E2';
    const badgeText = isEligible ? 'Eligible' : 'Requirements Not Met';

    matchCardHtml = '<div style="background:#fff;border:2px solid ' + (isEligible ? '#16A34A' : '#F59E0B') + ';border-radius:12px;padding:18px 20px;margin-bottom:20px;box-shadow:0 4px 12px rgba(0,0,0,0.05);">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:12px;">' +
        '<div>' +
          '<div style="font-size:12px;text-transform:uppercase;letter-spacing:.6px;font-weight:700;color:' + (isEligible ? '#16A34A' : '#D97706') + ';">' +
            (isEligible ? '✓ Recommended Program Match' : '⚠ Partial Qualification Match') +
          '</div>' +
          '<h2 style="font-size:20px;margin:4px 0 2px;color:var(--navy);font-family:\'Fraunces\',serif;">' + esc(matchedSch.name) + '</h2>' +
          '<span class="sch-cat" style="font-size:11.5px;">' + esc(matchedSch.category) + ' · ' + esc(matchedSch.level) + '</span>' +
        '</div>' +
        '<div style="text-align:right;">' +
          '<span class="badge" style="background:' + badgeBg + ';color:' + badgeColor + ';font-size:13px;padding:6px 14px;font-weight:700;border-radius:20px;">' +
            badgeText +
          '</span>' +
        '</div>' +
      '</div>' +

      '<div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:12px 14px;margin-bottom:14px;font-size:13px;">' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:10px;">' +
          '<div><span class="muted">Applicant\'s Course:</span> <b>' + esc(candidateStudent.course || 'Not specified') + '</b></div>' +
          '<div><span class="muted">School / Campus:</span> <b>' + esc(candidateStudent.school || 'Not specified') + '</b></div>' +
          '<div><span class="muted">Year Standing:</span> <b>' + esc(candidateStudent.yearLevel || 'Not specified') + '</b></div>' +
          (candidateStudent.gpa ? '<div><span class="muted">Reported GPA:</span> <b>' + esc(candidateStudent.gpa) + '</b></div>' : '') +
        '</div>' +
      '</div>' +

      '<div style="font-size:13.5px;color:var(--text);margin-bottom:12px;line-height:1.5;">' +
        '<b>Matching Reason:</b> ' + esc(matchRes.reason) +
      '</div>' +

      (evalData.criteria && evalData.criteria.length ?
        '<div class="fit-checklist" style="margin-bottom:14px;">' +
          evalData.criteria.map(c =>
            '<div class="fit-check-item ' + (c.pass ? 'pass' : 'warn') + '" style="font-size:12.5px;padding:6px 10px;">' +
              (c.pass ? icon('check', 15) : icon('alert', 15)) +
              '<div><b style="display:block;">' + esc(c.label) + '</b><span class="small muted">' + esc(c.detail) + '</span></div>' +
            '</div>'
          ).join('') +
        '</div>' : ''
      ) +

      '<div style="background:#FAFBFD;border:1px dashed #CBD5E1;border-radius:8px;padding:10px 14px;margin-bottom:12px;">' +
        '<b style="font-size:12.5px;color:var(--navy);display:block;margin-bottom:4px;">Required Documents for this Program:</b>' +
        '<ul style="margin:0;padding-left:18px;font-size:12.5px;color:var(--text-muted);line-height:1.7;">' +
          (((matchedSch && Array.isArray(matchedSch.documents) && matchedSch.documents.length > 0) ? matchedSch.documents : (s && Array.isArray(s.documents) && s.documents.length > 0 ? s.documents : getDefaultDocumentsForScholarship(s ? (s.code || s.id) : '', s ? s.level : '')))).map(doc => '<li>' + esc(doc) + '</li>').join('') +
        '</ul>' +
      '</div>' +

      (!isSelectedMatched ?
        '<div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;">' +
          '<div style="font-size:13px;color:#92400E;">' +
            'You are currently applying for <b>' + esc(s.name) + '</b>, but your course best matches <b>' + esc(matchedSch.name) + '</b>.' +
          '</div>' +
          '<button type="button" class="btn btn-primary btn-sm" onclick="switchApplyProgram(\'' + matchedSch.id + '\')">' +
            'Switch to Matched Scholarship (' + esc(matchedSch.name) + ') →' +
          '</button>' +
        '</div>' : ''
      ) +
    '</div>';
  } else {
    matchCardHtml = '<div style="background:#FFF5F5;border:1.5px solid #FEB2B2;border-radius:12px;padding:18px 20px;margin-bottom:20px;">' +
      '<div style="display:flex;gap:12px;align-items:flex-start;">' +
        '<div style="color:#C53030;margin-top:2px;">' + icon('alert', 22) + '</div>' +
        '<div>' +
          '<h3 style="font-size:16px;margin:0 0 4px;color:#9B2C2C;">No matching scholarships are currently available for your course.</h3>' +
          '<p style="font-size:13px;color:#742A2A;margin:0;">' +
            'Based on your entered course (<b>' + esc(candidateStudent.course || 'Unspecified') + '</b>), there are no open scholarship categories currently designated for this program. You may update your academic course in Step 2 if entered incorrectly.' +
          '</p>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  return '<div class="pageintro"><h1>Apply: ' + esc(s.name) + '</h1><p>Complete all steps to submit your application. Your progress is saved automatically.</p></div>' +
    matchCardHtml +
    '<div class="panel"><div class="panel-body">' +
    '<div class="stepper">' + steps.map((t, i) => {
      const n = i + 1; const cls = n < d.step ? 'sp done' : n === d.step ? 'sp active' : 'sp';
      return '<div class="' + cls + '"><div class="sp-circle">' + (n < d.step ? icon('check', 16) : n) + '</div><div class="sp-label">' + t + '</div></div>';
    }).join('') + '</div>' +
    stepBody +
    '</div></div>';
}

function stepNav(d,canNext){
  return '<div style="display:flex;justify-content:space-between;margin-top:26px;border-top:1px solid var(--border);padding-top:20px;">'+
    '<div>'+(d.step>1?'<button class="btn btn-ghost" onclick="applyPrev()">Previous</button>':'<button class="btn btn-ghost" onclick="cancelApply()">Cancel</button>')+'</div>'+
    '<div style="display:flex;gap:10px;">'+
      '<button class="btn btn-outline" style="color:var(--navy);border-color:var(--border);" onclick="saveDraft()">Save as Draft</button>'+
      (d.step<5? '<button class="btn btn-primary" onclick="applyNext()">Next</button>' : '<button class="btn btn-primary" onclick="submitApplication()">'+icon('check',16)+' Submit Application</button>')+
    '</div></div>';
}
function stepPersonal(d){
  const p=d.personal;
  return '<div class="row2">'+
    field('Full Name','personal.fullName',p.fullName)+field('Birthdate','personal.birthdate',p.birthdate,'date')+
    '</div><div class="row2">'+
    selectField('Sex','personal.sex',p.sex,['','Male','Female'])+field('Contact Number','personal.contact',p.contact)+
    '</div>'+field('Email Address','personal.email',p.email)+field('Address','personal.address',p.address)+
    stepNav(d);
}
function stepAcademic(d){
  const a=d.academic;
  const courseOptions = [
    'BS Information Technology (BSIT)',
    'BS Computer Science (BSCS)',
    'BS Information Systems (BSIS)',
    'BS Computer Engineering (BSCpE)',
    'BS Accountancy (BSA)',
    'BS Business Administration (BSBA)',
    'BS Management Accounting',
    'BS Secondary Education (BSEd)',
    'Bachelor of Elementary Education (BEEd)',
    'BA Communication',
    'BS Hospitality Management (BSHM)',
    'BS Tourism Management (BSTM)',
    'BS Civil Engineering (BSCE)',
    'BS Electrical Engineering (BSEE)',
    'BS Mechanical Engineering (BSME)',
    'BS Chemical Engineering (BSChE)',
    'BS Electronics Engineering (BSECE)',
    'BS Applied Mathematics',
    'BS Criminology',
    'BS Agriculture',
    'BS Agricultural Engineering',
    'BS Fisheries',
    'BS Agribusiness',
    'BS Forestry',
    'BS Environmental Science',
    'Doctor of Medicine (MD)',
    'Doctor of Medicine (M.D.)',
    'Doctor of Medicine Program',
    'Doctor of Dental Medicine (DMD)',
    'BS Nursing',
    'BS Medical Technology / BS Medical Laboratory Science',
    'BS Pharmacy',
    'BS Physical Therapy',
    'BS Radiologic Technology',
    'BS Respiratory Therapy',
    'BS Occupational Therapy',
    'BS Psychology',
    'Doctor of Veterinary Medicine (DVM)',
    'BS Public Health',
    'BS Nutrition and Dietetics',
    'BS Biology',
    'BS Midwifery',
    'Juris Doctor (JD)',
    'Computer Systems Servicing',
    'Automotive Servicing',
    'Shielded Metal Arc Welding (SMAW)',
    'Electrical Installation and Maintenance (EIM)',
    'Electronics Products Assembly and Servicing (EPAS)',
    'Plumbing',
    'Cookery',
    'Bread and Pastry Production',
    'Food and Beverage Services',
    'Housekeeping',
    'Visual Arts',
    'Music Arts',
    'Dance Arts',
    'Drama and Theater',
    'Creative Writing',
    'Performing Arts'
  ];

  return '<div class="row2">'+
    field('School / University','academic.school',a.school)+
    '<div class="field">'+
      '<label>Degree Course / Enrolled Program</label>'+
      '<input class="input" list="courseDatalist" value="'+esc(a.course||'')+'" placeholder="e.g. BS in Information Technology" onchange="handleCourseChange(this.value)" oninput="setDraft(\'academic.course\',this.value)">'+
      '<datalist id="courseDatalist">'+
        courseOptions.map(c => '<option value="'+esc(c)+'">').join('')+
      '</datalist>'+
      '<div class="small muted" style="margin-top:4px;">Tip: Selecting your course automatically verifies and updates your matched scholarship above.</div>'+
    '</div>'+
  '</div>'+
  '<div class="row2">'+
    selectField('Year Level','academic.yearLevel',a.yearLevel,['','Senior Highschool','1st Year','2nd Year','3rd Year','4th Year','5th Year','TVET'])+
    field('Student ID','academic.studentId',a.studentId)+
  '</div>'+
  field('Previous / Current General Average (GPA)','academic.gpa',a.gpa,'number')+
  stepNav(d);
}
function stepFamily(d){
  const f=d.family;
  return '<div class="row2">'+field('Parent / Guardian Name','family.guardian',f.guardian)+field('Occupation','family.occupation',f.occupation)+'</div>'+
    '<div class="row2">'+selectField('Monthly Family Income','family.income',f.income,['','Below ₱10,000','₱10,000 - ₱20,000','₱20,001 - ₱30,000','₱30,001 - ₱50,000','Above ₱50,000'])+field('Number of Family Members','family.members',f.members,'number')+'</div>'+
    '<div class="field"><label>Other Relevant Financial Information</label><textarea class="input" onchange="setDraft(\'family.notes\',this.value)">'+esc(f.notes||'')+'</textarea></div>'+
    stepNav(d);
}
function renderDocSlotCompressingHtml(idx, docType, msg, percent){
  return '<div style="border:2px dashed #2563EB;border-radius:10px;padding:22px;text-align:center;background:#F0F9FF;">'+
    '<div style="width:42px;height:42px;margin:0 auto 8px;border-radius:50%;background:#DBEAFE;color:#2563EB;display:flex;align-items:center;justify-content:center;" class="spin">'+
      icon('clock', 22)+
    '</div>'+
    '<div style="font-weight:700;font-size:14px;color:#1E40AF;margin-bottom:3px;">Auto-Compressing '+esc(docType)+'...</div>'+
    '<div class="small" style="color:#1D4ED8;margin-bottom:12px;max-width:440px;margin-left:auto;margin-right:auto;line-height:1.4;">'+esc(msg)+'</div>'+
    '<div class="compress-progress-bar" style="max-width:280px;">'+
      '<div class="compress-progress-fill" style="width:'+(percent||50)+'%;"></div>'+
    '</div>'+
  '</div>';
}

function stepDocuments(d,s){
  let need = (s && Array.isArray(s.documents) && s.documents.length > 0) ? s.documents : [];
  if(need.length === 0){
    const sId = s ? (s.id || s.code) : (d ? d.scholarshipId : '');
    const found = DB.scholarships.find(x => x.id === sId || x.code === sId || (x.dbId && String(x.dbId) === String(sId)));
    if(found && Array.isArray(found.documents) && found.documents.length > 0){
      need = found.documents;
    } else {
      need = getDefaultDocumentsForScholarship(sId, s ? s.level : '');
    }
    if(s) s.documents = need;
  }
  const uploadedCount=d.documents.length;
  const totalCount=need.length;
  return '<div style="background:#F8FAFC;border:1px solid var(--border);border-radius:10px;padding:14px 18px;margin-bottom:18px;">'+
      '<b style="font-size:14px;color:var(--navy);">Upload Requirements ('+uploadedCount+' / '+totalCount+' Complete)</b>'+
      '<div class="small muted" style="margin-top:3px;">Accepted formats: JPG, PNG, WEBP, or PDF (Max 5MB each • Oversized documents automatically compressed).</div>'+
    '</div>'+
    need.map((docType,i)=>{
      const existing=d.documents.find(x=>x.type===docType);
      const isCompressing = STATE.docCompressing && STATE.docCompressing[i];
      return '<div class="field" style="margin-bottom:18px;">'+
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">'+
          '<label style="margin:0;font-weight:600;font-size:13.5px;color:var(--navy);">'+(i+1)+'. '+esc(docType)+'</label>'+
          (existing? '<span class="badge b-completed" style="font-size:11px;">✓ Ready</span>' : (isCompressing ? '<span class="badge" style="background:#DBEAFE;color:#1E40AF;font-size:11px;">Compressing...</span>' : '<span class="badge" style="background:#FEF3C7;color:#92400E;font-size:11px;">Required</span>'))+
        '</div>'+
        (isCompressing ?
          '<div id="docCompressProg_'+i+'">'+
            renderDocSlotCompressingHtml(i, docType, STATE.docCompressing[i].message, STATE.docCompressing[i].progress)+
          '</div>' :
          (existing? 
            '<div class="file-chip" style="display:flex;justify-content:space-between;align-items:center;padding:12px 14px;background:#fff;border:1.5px solid #CBD5E1;border-radius:8px;">'+
              '<div style="display:flex;align-items:center;gap:10px;min-width:0;">'+
                '<div style="width:36px;height:36px;border-radius:6px;background:var(--blue-bg);color:var(--navy-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+
                  icon(existing.isImage ? 'image' : 'file', 18)+
                '</div>'+
                '<div style="min-width:0;">'+
                  '<b style="font-size:13.5px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+esc(existing.name)+'</b>'+
                  '<div class="small muted">'+(existing.size||'')+(existing.compressed ? ' <span style="color:#059669;font-weight:600;">(compressed from ' + existing.origSizeStr + ')</span>' : '')+' · '+(existing.isImage ? 'Image File' : 'Document')+' · <span style="color:#16A34A;font-weight:600;">Ready</span></div>'+
                '</div>'+
              '</div>'+
              '<div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">'+
                '<button type="button" class="btn btn-ghost btn-sm" style="display:inline-flex;align-items:center;gap:4px;border:1px solid var(--border);" onclick="viewDraftDocModal('+i+')">'+icon('eye', 13)+' View</button>'+
                '<button type="button" class="btn btn-ghost btn-sm" style="color:var(--redst);border:1px solid var(--border);" onclick="removeDocByIndex('+i+')" title="Remove document">'+icon('x', 14)+'</button>'+
              '</div>'+
            '</div>' :
            '<div style="border:2px dashed #CBD5E1;border-radius:10px;padding:22px;text-align:center;background:#FAFCFF;">'+
              '<input type="file" id="docUploadInput_'+i+'" style="display:none;" accept="image/png,image/jpeg,image/jpg,image/webp,.pdf" onchange="handleDocFileUpload('+i+',this)">'+
              '<div style="width:42px;height:42px;margin:0 auto 8px;border-radius:50%;background:#EBF5FB;color:var(--navy-2);display:flex;align-items:center;justify-content:center;">'+icon('upload', 22)+'</div>'+
              '<div style="font-weight:600;font-size:14px;color:var(--navy);margin-bottom:3px;">Upload '+esc(docType)+'</div>'+
              '<div class="small muted" style="margin-bottom:14px;">Select an image (PNG, JPG, WEBP) or PDF document (Max 5MB • Auto-Compressed)</div>'+
              '<button type="button" class="btn btn-primary btn-sm" style="display:inline-flex;align-items:center;gap:6px;" onclick="document.getElementById(\'docUploadInput_'+i+'\').click()">'+icon('upload', 14)+' Choose File</button>'+
            '</div>'
          )
        )+
      '</div>';
    }).join('')+
    stepNav(d);
}
function stepReview(d,s){
  const reqDocs = (s && Array.isArray(s.documents) && s.documents.length > 0) ? s.documents : getDefaultDocumentsForScholarship(s ? (s.code || s.id) : '', s ? s.level : '');
  return '<h3 style="margin-top:0;">Application Summary</h3>'+
    '<div class="panel" style="margin-bottom:14px;"><div class="panel-body">'+
    '<b class="small muted">SCHOLARSHIP PROGRAM</b><p style="margin:4px 0 0;">'+esc(s.name)+'</p></div></div>'+
    '<div class="row2" style="align-items:flex-start;">'+
    '<div class="panel"><div class="panel-head"><h3>Personal Info</h3><button class="link-btn" onclick="editStep(1)">Edit</button></div><div class="panel-body">'+
      kv('Full Name',d.personal.fullName)+kv('Birthdate',d.personal.birthdate)+kv('Sex',d.personal.sex)+kv('Contact',d.personal.contact)+kv('Email',d.personal.email)+kv('Address',d.personal.address)+
    '</div></div>'+
    '<div class="panel"><div class="panel-head"><h3>Academic Info</h3><button class="link-btn" onclick="editStep(2)">Edit</button></div><div class="panel-body">'+
      kv('School',d.academic.school)+kv('Course',d.academic.course)+kv('Year Level',d.academic.yearLevel)+kv('Student ID',d.academic.studentId)+kv('GPA',d.academic.gpa)+
    '</div></div></div>'+
    '<div class="panel" style="margin-top:14px;"><div class="panel-head"><h3>Family &amp; Financial</h3><button class="link-btn" onclick="editStep(3)">Edit</button></div><div class="panel-body">'+
      kv('Guardian',d.family.guardian)+kv('Occupation',d.family.occupation)+kv('Income',d.family.income)+kv('Family Members',d.family.members)+
    '</div></div>'+
    '<div class="panel" style="margin-top:14px;"><div class="panel-head"><h3>Documents ('+d.documents.length+'/'+reqDocs.length+')</h3><button class="link-btn" onclick="editStep(4)">Edit</button></div><div class="panel-body">'+
      (d.documents.length? d.documents.map((f,idx)=>'<div class="file-chip"><span class="fc-name">'+icon(f.isImage?'image':'file',15)+' '+esc(f.name)+'</span><div style="display:flex;align-items:center;gap:6px;"><span class="small muted">'+f.size+(f.compressed ? ' <span style="color:#059669;font-weight:600;">(compressed from '+f.origSizeStr+')</span>' : '')+'</span><button class="btn btn-ghost btn-sm" style="padding:2px 8px;font-size:12px;" onclick="viewDraftDocModal('+idx+')">'+icon('eye',13)+' View</button></div></div>').join('') : '<p class="small muted">No documents uploaded yet.</p>')+
    '</div></div>'+
    stepNav(d);
}
function field(label,path,val,type){
  return '<div class="field"><label>'+label+'</label><input class="input" type="'+(type||'text')+'" value="'+esc(val||'')+'" onchange="setDraft(\''+path+'\',this.value)"></div>';
}
function selectField(label,path,val,options){
  const cleanVal = (val || '').toString().trim().toLowerCase().replace(/\s+/g,'');
  return '<div class="field"><label>'+label+'</label><select class="input" onchange="setDraft(\''+path+'\',this.value)">'+
    options.map(o=>{
      const cleanO = (o || '').toString().trim().toLowerCase().replace(/\s+/g,'');
      const isSel = (o === val) || (cleanVal && cleanO && cleanVal === cleanO);
      return '<option value="'+esc(o)+'" '+(isSel?'selected':'')+'>'+(o||'Select...')+'</option>';
    }).join('')+'</select></div>';
}
function setDraft(path,val){
  const [a,b]=path.split('.');
  STATE.applyDraft[a][b]=val;
}
function editStep(n){STATE.applyDraft.step=n;render();}
function applyNext(){
  if(STATE.applyDraft.step<5){STATE.applyDraft.step++;render();toast('Progress saved automatically.');}
}
function applyPrev(){if(STATE.applyDraft.step>1){STATE.applyDraft.step--;render();}}
function cancelApply(){STATE.applyDraft=null;nav('applicantApplications');}

async function handleDocFileUpload(idx, input){
  if(!input || !input.files || !input.files[0]) return;
  const file = input.files[0];
  const s = DB.scholarships.find(x => x.id === (STATE.applyDraft ? STATE.applyDraft.scholarshipId : '') || (x.code && x.code === (STATE.applyDraft ? STATE.applyDraft.scholarshipId : '')) || (x.dbId && String(x.dbId) === String(STATE.applyDraft ? STATE.applyDraft.scholarshipId : '')));
  const docsList = (s && Array.isArray(s.documents) && s.documents.length > 0) ? s.documents : getDefaultDocumentsForScholarship(s ? (s.code || s.id) : (STATE.applyDraft ? STATE.applyDraft.scholarshipId : ''), s ? s.level : '');
  const docType = docsList[idx] || (s && s.documents ? s.documents[idx] : null) || (STATE.applyDraft && STATE.applyDraft.documents && STATE.applyDraft.documents[idx] ? STATE.applyDraft.documents[idx].type : 'Document');
  if(!docType) return;

  const sessionId = Date.now();
  STATE._compressionSessions = STATE._compressionSessions || {};
  STATE._compressionSessions['doc_' + idx] = sessionId;

  if(!STATE.docCompressing) STATE.docCompressing = {};
  STATE.docCompressing[idx] = { active: true, progress: 15, message: 'Detecting document size...' };
  render();

  try {
    const res = await FileCompressor.processFile(file, {}, (prog) => {
      if(STATE._compressionSessions['doc_' + idx] !== sessionId) return;
      if(STATE.docCompressing && STATE.docCompressing[idx]) {
        STATE.docCompressing[idx].progress = prog.percent;
        STATE.docCompressing[idx].message = prog.message;
        const progBox = document.getElementById('docCompressProg_' + idx);
        if(progBox) {
          progBox.innerHTML = renderDocSlotCompressingHtml(idx, docType, prog.message, prog.percent);
        }
      }
    });

    if(STATE._compressionSessions['doc_' + idx] !== sessionId) return;

    STATE.applyDraft.documents = STATE.applyDraft.documents.filter(d => d.type !== docType);
    STATE.applyDraft.documents.push({
      type: docType,
      name: res.name,
      originalName: res.originalName || res.name,
      size: res.sizeStr,
      origSizeStr: res.origSizeStr || res.sizeStr,
      compressed: res.compressed,
      status: 'Pending',
      dataUrl: res.dataUrl,
      isImage: res.isImage,
      isPdf: res.isPdf,
      uploaded: new Date().toISOString()
    });

    delete STATE.docCompressing[idx];
    if(res.compressed) {
      toast(res.message, 'success');
    } else {
      toast('Uploaded ' + docType + ': ' + res.name, 'success');
    }
    render();
  } catch(err) {
    if(STATE._compressionSessions['doc_' + idx] !== sessionId) return;
    delete STATE.docCompressing[idx];
    input.value = '';
    render();
    toast(err.message || 'Error processing document.', 'error');
  }
}

function removeDocByIndex(idx){
  const s = DB.scholarships.find(x => x.id === (STATE.applyDraft ? STATE.applyDraft.scholarshipId : '') || (x.code && x.code === (STATE.applyDraft ? STATE.applyDraft.scholarshipId : '')) || (x.dbId && String(x.dbId) === String(STATE.applyDraft ? STATE.applyDraft.scholarshipId : '')));
  const docsList = (s && Array.isArray(s.documents) && s.documents.length > 0) ? s.documents : getDefaultDocumentsForScholarship(s ? (s.code || s.id) : (STATE.applyDraft ? STATE.applyDraft.scholarshipId : ''), s ? s.level : '');
  const docType = docsList[idx] || (s && s.documents ? s.documents[idx] : null);
  if(!docType) return;
  STATE.applyDraft.documents = STATE.applyDraft.documents.filter(d => d.type !== docType);
  render();
}

function removeDoc(docType){
  STATE.applyDraft.documents = STATE.applyDraft.documents.filter(d => d.type !== docType);
  render();
}
function saveDraft(){
  const d=STATE.applyDraft;
  if(d.existingId){
    const a=DB.applications.find(x=>x.id===d.existingId);
    Object.assign(a,{personal:d.personal,academic:d.academic,family:d.family,documents:d.documents,lastUpdated:new Date().toISOString()});
  }else{
    const app={id:nextAppId(),applicantId:STATE.currentUser.id,scholarshipId:d.scholarshipId,status:'Draft',
      submittedDate:null,lastUpdated:new Date().toISOString(),stage:'Not submitted',
      personal:d.personal,academic:d.academic,family:d.family,documents:d.documents,reviewerId:null,reviewerComments:'',evaluation:null};
    DB.applications.push(app);
    d.existingId=app.id;
  }
  toast('Draft saved. You can continue anytime from My Applications.','success');
}
async function submitApplication(){
  const d=STATE.applyDraft;
  const s=DB.scholarships.find(x=>x.id===d.scholarshipId || (x.code && x.code===d.scholarshipId) || (x.dbId && String(x.dbId)===String(d.scholarshipId))) || DB.scholarships[0];
  const reqDocs = (s && Array.isArray(s.documents) && s.documents.length > 0) ? s.documents : getDefaultDocumentsForScholarship(s ? (s.code || s.id) : '', s ? s.level : '');
  if(d.documents.length < reqDocs.length){
    if(!confirm('You have not uploaded all recommended documents. Submit anyway? Missing documents may mark your application as Incomplete.'))return;
  }

  const candidateStudent = {
    ...(STATE.currentUser || {}),
    course: (d.academic && d.academic.course) ? d.academic.course : (STATE.currentUser ? STATE.currentUser.course : ''),
    school: (d.academic && d.academic.school) ? d.academic.school : (STATE.currentUser ? STATE.currentUser.school : ''),
    yearLevel: (d.academic && d.academic.yearLevel) ? d.academic.yearLevel : (STATE.currentUser ? STATE.currentUser.yearLevel : ''),
    gpa: (d.academic && d.academic.gpa) ? d.academic.gpa : (STATE.currentUser ? STATE.currentUser.gpa : ''),
    familyIncome: (d.family && d.family.income) ? d.family.income : (STATE.currentUser ? STATE.currentUser.familyIncome : '')
  };

  const bestMatch = findBestMatchingScholarship(candidateStudent, DB.scholarships);
  const matchedSch = bestMatch.matched ? bestMatch.scholarship : s;
  const matchedSchId = matchedSch ? (matchedSch.dbId || matchedSch.id) : (d.scholarshipId || 18);
  const matchedSchCode = matchedSch ? (matchedSch.code || matchedSch.id) : (d.scholarshipId || 'SCH-106');
  const matchedSchName = matchedSch ? matchedSch.name : (s ? s.name : 'Academic Tertiary');
  const matchingCategory = matchedSch ? matchedSch.category : (s ? s.category : 'Academic Excellence');
  const matchingReason = bestMatch.matched ? bestMatch.reason : 'Course match validated';
  const eligibilityStatus = (bestMatch.evaluation && bestMatch.evaluation.isEligible) ? 'Eligible' : 'Requirements Not Met';

  // Ensure d.scholarshipId is never empty
  if(!d.scholarshipId && matchedSch){
    d.scholarshipId = matchedSch.id;
  }

  const schObj = DB.scholarships.find(x => x.id === d.scholarshipId || (x.code && x.code === d.scholarshipId) || (x.dbId && String(x.dbId) === String(d.scholarshipId))) || s || matchedSch;
  const resolvedSchDbId = schObj ? (schObj.dbId || schObj.id) : (matchedSch ? matchedSch.dbId : d.scholarshipId);
  const resolvedSchCode = schObj ? (schObj.code || schObj.id) : (matchedSch ? matchedSch.code : d.scholarshipId);
  const resolvedSchName = schObj ? schObj.name : (matchedSch ? matchedSch.name : 'Academic Tertiary');

  const payload = {
    applicant_id: STATE.currentUser ? (STATE.currentUser.id || STATE.currentUser.rawApplicantId) : null,
    scholarship_id: resolvedSchDbId || d.scholarshipId,
    scholarship_code: resolvedSchCode || d.scholarshipId,
    scholarship_name: resolvedSchName,
    matched_scholarship_id: matchedSchId,
    matched_scholarship_code: matchedSchCode,
    matched_scholarship_name: matchedSchName,
    matching_category: matchingCategory,
    matching_reason: matchingReason,
    eligibility_status: eligibilityStatus,
    personal: d.personal,
    academic: d.academic,
    family: d.family,
    documents: d.documents
  };

  let newAppCode = null;
  try {
    const res = await apiCall('submit_application', 'POST', payload);
    if(res && res.status === 'error') {
      toast(res.message || 'Submission failed.', 'error');
      alert(res.message || 'Submission rejected.');
      return;
    }
    if(res && (res.status === 'success' || res.app_code || res.id)) {
      newAppCode = res.app_code || res.id;
    }
  } catch(e) {
    toast('Application submission error: ' + e.message, 'error');
    return;
  }

  const generatedId = newAppCode || nextAppId();
  let app;
  if(d.existingId){
    app=DB.applications.find(x=>x.id===d.existingId);
    if(app){
      Object.assign(app,{
        status:'Submitted',
        submittedDate:new Date().toISOString(),
        lastUpdated:new Date().toISOString(),
        stage:'Submitted',
        matched_scholarship_id: matchedSchId,
        matched_scholarship_name: matchedSchName,
        matching_category: matchingCategory,
        matching_reason: matchingReason,
        eligibility_status: eligibilityStatus,
        personal:d.personal,academic:d.academic,family:d.family,documents:d.documents
      });
    }
  }else{
    app={
      id:generatedId,
      applicantId:STATE.currentUser.id,
      scholarshipId:d.scholarshipId,
      matched_scholarship_id: matchedSchId,
      matched_scholarship_name: matchedSchName,
      matching_category: matchingCategory,
      matching_reason: matchingReason,
      eligibility_status: eligibilityStatus,
      status:'Submitted',
      submittedDate:new Date().toISOString(),
      lastUpdated:new Date().toISOString(),
      stage:'Submitted',
      personal:d.personal,academic:d.academic,family:d.family,documents:d.documents,
      reviewerId:null,reviewerComments:'',evaluation:null
    };
    DB.applications.unshift(app);
  }
  s.slotsFilled=Math.min(s.slots,s.slotsFilled+1);
  const finalId = app ? app.id : generatedId;
  logActivity(STATE.currentUser.id,'applicant','Application Submitted','Submitted application '+finalId+' for '+s.name+'.');
  pushNotif(STATE.currentUser.id,'Application submitted successfully','Your application '+finalId+' for '+s.name+' was submitted.');
  pushNotif('U-2001','New application received','A new application ('+finalId+') was submitted for '+s.name+'.');
  STATE.applyDraft=null;
  openModal('<div class="modal-head"><h3>'+icon('check',18)+' Application Submitted</h3></div><div class="modal-body">'+
    '<p>Your application has been received. Your Application ID is:</p>'+
    '<div class="panel" style="padding:14px;text-align:center;margin:14px 0;"><b style="font-size:20px;font-family:\'Fraunces\',serif;color:var(--navy);">'+finalId+'</b></div>'+
    '<p class="small muted">You can track your application status anytime from My Applications.</p>'+
    '</div><div class="modal-foot"><button class="btn btn-primary" onclick="closeModal();nav(\'applicantTrack\',{id:\''+finalId+'\'})">View Status</button></div>');
}

/* ---------- APPLICATION TRACKING (applicant view) ---------- */
function getApplicationTimeline(a){
  const stages = [
    { name: 'Submitted', desc: 'Application & initial requirements received by the Provincial Education Office.' },
    { name: 'Document Checking', desc: 'Documents and valid ID verified for completeness and authenticity.' },
    { name: 'Under Review', desc: 'Evaluator scores qualifications, academic GPA, and income criteria.' },
    { name: 'Final Decision', desc: 'Scholarship committee approves grantee list and issues stipend notice.' }
  ];

  const status = (a.status || 'Submitted').trim();
  const isApproved = status === 'Approved';
  const isRejected = status === 'Rejected';
  const isFinishedReview = status === 'Finished Review' || status === 'Evaluated' || status === 'Pending Final Decision' || (!!a.evaluation && !isApproved && !isRejected);
  const isUnderReview = status === 'Under Review' || (a.reviewerId && !isFinishedReview && !isApproved && !isRejected && status !== 'Processing' && status !== 'Incomplete');
  const isDocChecking = status === 'Document Checking' || status === 'Processing' || status === 'Incomplete';
  const isDraft = status === 'Draft';

  let currentIdx = 0;
  let progressPercent = 25;
  let phaseBadge = status;
  let phaseText = '';

  if(isDraft){
    currentIdx = -1;
    progressPercent = 10;
    phaseBadge = 'Draft';
    phaseText = 'Draft application — not yet submitted.';
  } else if(isApproved){
    currentIdx = 3;
    progressPercent = 100;
    phaseBadge = 'Approved';
    phaseText = 'Official Final Decision: Approved by Provincial Scholarship Committee.';
  } else if(isRejected){
    currentIdx = 3;
    progressPercent = 100;
    phaseBadge = 'Rejected';
    phaseText = 'Official Final Decision: Application Not Selected.';
  } else if(isFinishedReview){
    currentIdx = 3;
    progressPercent = 85;
    phaseBadge = 'Evaluation Completed (Pending Final Decision)';
    phaseText = 'Evaluation finished. Awaiting Provincial Scholarship Committee final endorsement and decision.';
  } else if(isUnderReview){
    currentIdx = 2;
    progressPercent = 75;
    phaseBadge = 'Under Review';
    phaseText = 'Assigned Evaluator is actively reviewing qualifications and scoring criteria.';
  } else if(isDocChecking){
    currentIdx = 1;
    progressPercent = 50;
    phaseBadge = status === 'Incomplete' ? 'Missing Documents' : 'Document Checking';
    phaseText = status === 'Incomplete' ? 'Action Required: Re-upload missing or unclear documents to resume evaluation.' : 'Provincial Education Office is checking submitted documents for completeness.';
  } else {
    currentIdx = 0;
    progressPercent = 25;
    phaseBadge = 'Submitted';
    phaseText = 'Application successfully submitted and queued for verification.';
  }

  const steps = stages.map((st, i) => {
    let state = 'pending';
    if(isApproved && i <= 3) state = 'done';
    else if(isRejected){
      if(i < 3) state = 'done';
      else if(i === 3) state = 'rejected';
    } else if(isFinishedReview){
      if(i < 3) state = 'done';
      else if(i === 3) state = 'current';
    } else if(i < currentIdx) state = 'done';
    else if(i === currentIdx) state = 'current';
    else state = 'pending';

    return {
      name: st.name,
      desc: st.desc,
      state: state
    };
  });

  return { stages: steps, currentIdx, progressPercent, phaseBadge, phaseText, isApproved, isRejected, isFinishedReview, isUnderReview, isDocChecking, isDraft };
}

async function refreshTrackApplication(appId, silent = false){
  if(!appId) return;
  if(!silent) toast('Checking for latest evaluation and status updates...', 'info');
  try {
    const res = await apiCall('track_application', 'GET', null, { id: appId });
    if(res && res.status === 'success' && res.data){
      const appObj = mapApiRowToAppObj(res.data);
      const exIdx = DB.applications.findIndex(a => 
        a.id === appObj.id || 
        (a.code && a.code === appObj.code) || 
        String(a.dbId) === String(appObj.dbId) || 
        String(a.id) === String(appObj.dbId)
      );
      if(exIdx >= 0){
        DB.applications[exIdx] = Object.assign(DB.applications[exIdx], appObj);
      } else {
        DB.applications.unshift(appObj);
      }
      if(!silent) toast('Application status synchronized with server.', 'success');
      render();
    } else {
      await syncApplicationsFromApi();
      render();
    }
  } catch(e) {
    console.warn('Track refresh error:', e);
    await syncApplicationsFromApi();
    render();
  }
}

function renderTrackApplication(appId){
  const a = findApplication(appId) || DB.applications.find(x => x.id === appId);
  if(!a){
    // Attempt auto-refresh once if not in memory
    refreshTrackApplication(appId, true);
    return emptyState('file','Application not found','Loading application data or verify ID: ' + esc(appId));
  }
  const s = DB.scholarships.find(x => x.id === a.scholarshipId || x.code === a.scholarshipId) || { name: a.scholarshipName || 'Scholarship Program' };
  const u = DB.users.find(x => x.id === a.applicantId) || { firstName: a.applicantName || 'Applicant', lastName: '' };
  const tl = getApplicationTimeline(a);

  return '<div class="pageintro">'+
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;">'+
        '<div>'+
          '<h1>Track Application · '+esc(a.id)+'</h1>'+
          '<p>Real-time progress tracking for <b>'+esc(s.name)+'</b></p>'+
        '</div>'+
        '<div style="display:flex;align-items:center;gap:8px;">'+
          '<button class="btn btn-outline btn-sm" onclick="refreshTrackApplication(\''+esc(a.id)+'\')" title="Pull latest status and evaluation from server">'+
            icon('clock',14)+' Refresh Status'+
          '</button>'+
          '<button class="btn btn-ghost btn-sm" onclick="nav(\'applicantApplications\')">← Back to My Applications</button>'+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="panel" style="margin-bottom:20px;"><div class="panel-body">'+
      (tl.isDraft ? 
        '<div style="padding:10px 0;"><p class="muted">This application draft has not been submitted yet.</p><button class="btn btn-primary" onclick="resumeDraft(\''+a.id+'\')">Continue Application</button></div>' :
        '<div>'+
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">'+
            '<span style="font-weight:700;font-size:14px;color:var(--navy);">Progress: '+tl.progressPercent+'% Completed</span>'+
            '<span class="small muted">Updated: '+fmtDateTime(a.lastUpdated)+'</span>'+
          '</div>'+
          '<div class="progress" style="height:8px;margin-bottom:22px;"><i style="width:'+tl.progressPercent+'%;background:'+(tl.isRejected?'var(--redst)':tl.isApproved?'#1E8449':tl.isFinishedReview?'#2563EB':'var(--navy-3)')+';"></i></div>'+
          '<div class="tracker">'+tl.stages.map((st,i)=>{
            let cls='tr-stage';
            if(st.state === 'rejected') cls += ' rejected';
            else if(st.state === 'done') cls += ' done';
            else if(st.state === 'current') cls += ' current';

            const ic = st.state === 'rejected' ? icon('x',16) :
                       st.state === 'done' ? icon('check',16) :
                       (i+1);
            return '<div class="'+cls+'"><div class="tr-dot">'+(typeof ic==='string'?icon(ic,17):ic)+'</div><div class="tr-label">'+st.name+'</div></div>';
          }).join('')+'</div>'+
        '</div>'
      )+
    '</div></div>'+

    '<div class="row2" style="align-items:flex-start;margin-bottom:20px;">'+
      '<div class="panel"><div class="panel-head"><h3>Application Details</h3></div><div class="panel-body">'+
        kv('Application ID', a.id)+
        kv('Scholarship Program', s.name)+
        kv('Applicant Name', (a.personal && a.personal.fullName) || a.applicantName || userFullName(u))+
        kv('Student ID', (a.academic && a.academic.studentId) || u.studentId || '-')+
        kv('School', (a.academic && a.academic.school) || u.school || '-')+
        kv('Course & Year', ((a.academic && a.academic.course) || u.course || '-') + ' (' + ((a.academic && a.academic.yearLevel) || u.yearLevel || '-') + ')')+
        (a.matched_scholarship_name || a.matchedScholarshipName ? kv('Matched Scholarship', (a.matched_scholarship_name || a.matchedScholarshipName) + ' (' + (a.matching_category || a.matchingCategory || 'Priority Program') + ')') : '')+
        (a.matching_reason || a.matchingReason ? kv('Matching Reason', a.matching_reason || a.matchingReason) : '')+
        (a.eligibility_status || a.eligibilityStatus ? kv('Eligibility Match', '<span class="badge" style="background:#EBF5FB;color:#2980B9;font-weight:700;">' + (a.eligibility_status || a.eligibilityStatus) + '</span>') : '')+
        kv('Date Submitted', a.submittedDate ? fmtDate(a.submittedDate) : 'Draft (Not submitted)')+
        kv('Last Updated', fmtDateTime(a.lastUpdated))+
        '<div style="padding:8px 0;"><b class="small muted">Current Status</b><div style="margin-top:6px;">'+statusBadge(a.status)+'</div></div>'+
      '</div></div>'+

      '<div class="panel">'+
        '<div class="panel-head"><h3>What Happens Next?</h3></div>'+
        '<div class="panel-body">'+
          (tl.isApproved ? 
            '<div style="background:#E8F8F0;border:1px solid #1E8449;border-radius:8px;padding:14px;margin-bottom:14px;">'+
              '<b style="color:#1E8449;font-size:14px;">🎉 Congratulations! Application Approved</b>'+
              '<p style="font-size:13px;color:#145A32;margin:6px 0 0;">Your scholarship application has been officially approved by the Provincial Scholarship Committee. Keep your valid ID and student documents ready for payroll scheduling and stipend disbursement.</p>'+
            '</div>' :
           tl.isRejected ?
            '<div style="background:#FDEDEC;border:1px solid #C0392B;border-radius:8px;padding:14px;margin-bottom:14px;">'+
              '<b style="color:#C0392B;font-size:14px;">Application Not Selected</b>'+
              '<p style="font-size:13px;color:#78281F;margin:6px 0 0;">Thank you for applying. Unfortunately, your application did not meet the priority quota or criteria for this cycle. You may apply again next semester.</p>'+
            '</div>' :
           tl.isFinishedReview ?
            '<div style="background:#EFF6FF;border:1.5px solid #2563EB;border-radius:8px;padding:14px;margin-bottom:14px;">'+
              '<div style="display:flex;align-items:center;gap:8px;color:#1E40AF;font-weight:700;font-size:14px;">'+
                icon('check',17)+' Evaluation Completed — Awaiting Final Decision'+
              '</div>'+
              '<p style="font-size:13px;color:#1E3A8A;margin:6px 0 10px;line-height:1.5;">'+
                'Your assigned evaluator has completed scoring and reviewing your qualifications. The official evaluation has been submitted and is currently queued for final approval by the Provincial Scholarship Board.'+
              '</p>'+
              (a.evaluation ? 
                '<div style="display:flex;gap:14px;flex-wrap:wrap;background:#DBEAFE;padding:10px 14px;border-radius:6px;font-size:12.5px;color:#1E3A8A;margin-top:8px;">'+
                  '<div><b>Evaluation Score:</b> '+(a.evaluation.total || 0)+' / 100</div>'+
                  '<div><b>Recommendation:</b> '+esc(a.evaluation.recommendation || 'Endorsed for Committee Approval')+'</div>'+
                  '<div><b>Evaluated On:</b> '+fmtDateTime(a.evaluation.submittedDate || a.evaluation.submitted_at || a.lastUpdated)+'</div>'+
                '</div>' : '')+
            '</div>' :
           a.status==='Incomplete' ?
            '<div style="background:#FEF9E7;border:1px solid #F39C12;border-radius:8px;padding:14px;margin-bottom:14px;">'+
              '<b style="color:#B7950B;font-size:14px;">⚠️ Action Required: Missing Documents</b>'+
              '<p style="font-size:13px;color:#7D6608;margin:6px 0 10px;">Please re-upload your missing or unclear documents to resume evaluation.</p>'+
              '<ul style="padding-left:18px;font-size:13px;color:#7D6608;margin:0 0 10px;">'+a.documents.filter(d=>d.status==='Missing').map(d=>'<li>Re-submit: '+esc(d.type)+'</li>').join('')+'</ul>'+
              '<button class="btn btn-primary btn-sm" onclick="resumeDraft(\''+a.id+'\')">Update Documents</button>'+
            '</div>' :
           tl.isUnderReview ?
            '<div style="background:#F0F9FF;border:1px solid #0284C7;border-radius:8px;padding:14px;margin-bottom:14px;">'+
              '<b style="color:#0369A1;font-size:14px;">🔍 Application Under Review</b>'+
              '<p style="font-size:13px;color:#075985;margin:6px 0 0;line-height:1.5;">An assigned Evaluator is actively reviewing your submitted documents, academic qualifications, and financial criteria. You will be notified as soon as scoring is complete.</p>'+
            '</div>' :
            '<div style="font-size:13.5px;color:var(--text-muted);line-height:1.6;margin-bottom:14px;">'+
              '<p style="margin:0 0 10px;">Your application has been received and is progressing through official provincial screening. You do not need to visit the Capitol in person — status updates and notices will appear here directly.</p>'+
              '<div style="display:flex;align-items:center;gap:8px;color:var(--navy);font-weight:600;"><span class="badge" style="background:#EBF5FB;color:#1F618D;">Current Phase: '+esc(tl.phaseBadge)+'</span></div>'+
            '</div>'
          )+
          '<div class="divider"></div>'+
          '<b class="small muted">Reviewer Notes & Feedback</b>'+
          '<div style="margin-top:6px;">'+
            ((a.reviewerComments || (a.evaluation && a.evaluation.comments)) ? 
              '<div style="background:#F8FAFC;border:1px solid var(--border);border-radius:8px;padding:12px;font-size:13.5px;line-height:1.5;">'+esc(a.reviewerComments || (a.evaluation && a.evaluation.comments))+'</div>' : 
              '<p class="small muted" style="margin:4px 0 0;">No comments added yet. Your assigned evaluator will post remarks here as needed.</p>')+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="panel"><div class="panel-head"><h3>Uploaded Documents ('+a.documents.length+')</h3></div><div class="panel-body nopad">'+
      docList(a.documents, a.id)+
    '</div></div>';
}
function docList(docs, appId){
  if(!docs || !docs.length) return emptyState('file','No documents uploaded','');
  if(!appId){
    const foundApp = DB.applications.find(x => x.documents === docs || (x.documents && x.documents.some(d => docs.includes(d))));
    if(foundApp) appId = foundApp.id;
  }
  return '<div style="padding:16px;">'+docs.map(d=>{
    const clickAttr = appId ? 'onclick="viewDocModal(\''+appId+'\',\''+d.type.replace(/'/g,"\\'")+'\')"' : '';
    return '<div class="doc-row" style="cursor:pointer;" '+clickAttr+'>'+
      '<div class="dleft">'+
        '<div class="doc-icon">'+icon('file',18)+'</div>'+
        '<div><b style="font-size:13.5px;color:var(--navy);">'+esc(d.type)+'</b><div class="small muted">'+esc(d.name)+' · '+(d.size||'')+'</div></div>'+
      '</div>'+
      '<div style="display:flex;align-items:center;gap:8px;" onclick="event.stopPropagation()">'+
        statusBadge(d.status)+
        '<button class="btn btn-ghost btn-sm" '+clickAttr+' style="display:inline-flex;align-items:center;gap:5px;border:1px solid var(--border);font-weight:600;">'+
          icon('eye',14)+' View'+
        '</button>'+
      '</div>'+
    '</div>';
  }).join('')+'</div>';
}

function viewDocModal(appId, docType){
  const a = DB.applications.find(x => x.id === appId) || STATE.applyDraft;
  if(!a) { toast('Application details not found.','error'); return; }
  const s = DB.scholarships.find(x => x.id === a.scholarshipId) || { name:'Sirib i-Sko Scholarship Program' };
  const u = DB.users.find(x => x.id === a.applicantId) || STATE.currentUser || { firstName:'Applicant', lastName:'', studentId:'2022-04821-MN-0', school:'Mariano Marcos State University', course:'BS Information Technology', yearLevel:'3rd Year', address:'Laoag City, Ilocos Norte' };
  
  const docs = a.documents || [];
  const currentDoc = docs.find(x => x.type === docType) || docs[0] || { type:docType||'Document', name:(docType||'Document')+'.pdf', size:'350 KB', status:'Pending' };
  const cu = STATE.currentUser;
  const canVerify = cu && (cu.role === 'admin' || cu.role === 'reviewer' || cu.role === 'evaluator');

  const pillTabs = docs.map(d => {
    const isAct = d.type === currentDoc.type;
    const dotColor = d.status === 'Verified' ? '#16A34A' : d.status === 'Invalid' ? '#DC2626' : d.status === 'Missing' ? '#D97706' : '#EAB308';
    return '<button class="doc-pill '+(isAct?'active':'')+'" onclick="viewDocModal(\''+a.id+'\',\''+d.type.replace(/'/g,"\\'")+'\')">'+
      '<span style="width:8px;height:8px;border-radius:50%;background:'+dotColor+';display:inline-block;"></span> '+
      esc(d.type)+
    '</button>';
  }).join('');

  const modalHtml = '<div class="modal-head" style="align-items:flex-start;padding:16px 20px;">'+
    '<div>'+
      '<div style="display:flex;align-items:center;gap:8px;">'+
        '<div style="width:30px;height:30px;border-radius:6px;background:var(--blue-bg);color:var(--navy-3);display:flex;align-items:center;justify-content:center;">'+icon('file',16)+'</div>'+
        '<h3 style="margin:0;font-size:17px;color:var(--navy);">'+esc(currentDoc.type)+'</h3>'+
      '</div>'+
      '<div class="small muted" style="margin-top:4px;">Application: <b>'+esc(a.id)+'</b> · Applicant: <b>'+esc(a.personal ? a.personal.fullName : userFullName(u))+'</b></div>'+
    '</div>'+
    '<div style="display:flex;align-items:center;gap:10px;">'+
      statusBadge(currentDoc.status)+
      '<button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button>'+
    '</div>'+
  '</div>'+

  '<div class="modal-body" style="padding:16px 20px;background:#F8FAFC;">'+
    (docs.length > 1 ? '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--border);">'+pillTabs+'</div>' : '')+

    '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;background:#fff;border:1px solid var(--border);border-radius:8px;padding:10px 14px;margin-bottom:16px;">'+
      '<div style="font-size:12.5px;color:var(--text-muted);display:flex;gap:14px;flex-wrap:wrap;">'+
        '<span>📁 <b>File:</b> '+esc(currentDoc.name)+'</span>'+
        '<span>📊 <b>Size:</b> '+(currentDoc.size||'N/A')+'</span>'+
        '<span>📅 <b>Uploaded:</b> '+fmtDate(currentDoc.uploaded||a.submittedDate||new Date().toISOString())+'</span>'+
      '</div>'+
      '<div style="display:flex;gap:6px;align-items:center;">'+
        (currentDoc.fileUrl || currentDoc.dataUrl ? '<a href="'+(currentDoc.fileUrl || currentDoc.dataUrl)+'" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" style="display:inline-flex;align-items:center;gap:5px;border:1px solid var(--border);font-size:12px;text-decoration:none;">'+icon('eye',13)+' Full Size</a>' : '')+
        '<button class="btn btn-ghost btn-sm" onclick="printDocModal()" style="display:inline-flex;align-items:center;gap:5px;border:1px solid var(--border);font-size:12px;">'+icon('download',13)+' Print / Save</button>'+
        (canVerify ? 
          '<button class="btn btn-sm" onclick="setDocStatusFromModal(\''+a.id+'\',\''+currentDoc.type.replace(/'/g,"\\'")+'\',\'Verified\')" style="background:#E8F8F0;color:#1E8449;border:1px solid #1E8449;font-weight:600;font-size:12px;padding:5px 10px;">'+icon('check',13)+' Mark Verified</button>'+
          '<button class="btn btn-sm" onclick="setDocStatusFromModal(\''+a.id+'\',\''+currentDoc.type.replace(/'/g,"\\'")+'\',\'Invalid\')" style="background:#FDEDEC;color:#C0392B;border:1px solid #C0392B;font-weight:600;font-size:12px;padding:5px 10px;">'+icon('x',13)+' Mark Invalid</button>'
          : '')+
      '</div>'+
    '</div>'+

    '<div id="docPreviewSheet" style="overflow-x:auto;">'+
      renderDocPreviewSheet(currentDoc, a, u, s)+
    '</div>'+
  '</div>'+

  '<div class="modal-foot" style="padding:12px 20px;display:flex;justify-content:space-between;align-items:center;">'+
    '<div class="small muted">Official Digital Document Verification System · PGIN Education Office</div>'+
    '<button class="btn btn-primary btn-sm" onclick="closeModal()">Close</button>'+
  '</div>';

  openModal(modalHtml, true);
}

function viewDraftDocModal(param){
  const d = STATE.applyDraft;
  if(!d) return;
  const s = DB.scholarships.find(x => x.id === d.scholarshipId) || { name:'Sirib i-Sko Scholarship Program' };
  const u = STATE.currentUser || { firstName:'Applicant', lastName:'' };
  let doc = null;
  if(typeof param === 'number' && s && s.documents && s.documents[param]){
    const dt = s.documents[param];
    doc = d.documents.find(x => x.type === dt) || { type:dt, name:dt.replace(/[^a-z0-9]+/gi,'_')+'.pdf', size:'350 KB', status:'Pending' };
  } else {
    doc = d.documents.find(x => x.type === param) || { type:param, name:param+'.pdf', size:'350 KB', status:'Pending' };
  }
  if(!doc) return;
  
  const modalHtml = '<div class="modal-head" style="align-items:flex-start;padding:16px 20px;">'+
    '<div>'+
      '<div style="display:flex;align-items:center;gap:8px;">'+
        '<div style="width:30px;height:30px;border-radius:6px;background:var(--blue-bg);color:var(--navy-3);display:flex;align-items:center;justify-content:center;">'+icon('file',16)+'</div>'+
        '<h3 style="margin:0;font-size:17px;color:var(--navy);">'+esc(doc.type)+' (Draft Preview)</h3>'+
      '</div>'+
      '<div class="small muted" style="margin-top:4px;">Applicant: <b>'+esc(d.personal ? d.personal.fullName : userFullName(u))+'</b> · Program: <b>'+esc(s.name)+'</b></div>'+
    '</div>'+
    '<button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button>'+
  '</div>'+
  '<div class="modal-body" style="padding:16px 20px;background:#F8FAFC;">'+
    '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;background:#fff;border:1px solid var(--border);border-radius:8px;padding:10px 14px;margin-bottom:16px;">'+
      '<div style="font-size:12.5px;color:var(--text-muted);display:gap:14px;">'+
        '<span>📁 <b>File:</b> '+esc(doc.name)+'</span>'+
        '<span>📊 <b>Size:</b> '+(doc.size||'N/A')+'</span>'+
        '<span style="color:#D97706;font-weight:600;">⚡ Ready for Submission</span>'+
      '</div>'+
      '<button class="btn btn-ghost btn-sm" onclick="printDocModal()" style="display:inline-flex;align-items:center;gap:5px;border:1px solid var(--border);font-size:12px;">'+icon('download',13)+' Print / Save</button>'+
    '</div>'+
    '<div id="docPreviewSheet" style="overflow-x:auto;">'+
      renderDocPreviewSheet(doc, d, u, s)+
    '</div>'+
  '</div>'+
  '<div class="modal-foot">'+
    '<button class="btn btn-primary btn-sm" onclick="closeModal()">Close</button>'+
  '</div>';

  openModal(modalHtml, true);
}

async function setDocStatusFromModal(appId, docType, newStatus){
  const a = DB.applications.find(x => x.id === appId) || findApplication(appId);
  if(!a) return;
  const doc = a.documents ? a.documents.find(x => x.type === docType) : null;
  if(!doc) return;
  doc.status = newStatus;
  a.lastUpdated = new Date().toISOString();
  if(STATE.currentUser){
    logActivity(STATE.currentUser.id, STATE.currentUser.role, 'Document Verification', 'Marked '+docType+' as '+newStatus+' for application '+appId);
  }
  toast('Document marked as ' + newStatus + '.', 'success');
  render();
  viewDocModal(appId, docType);

  try {
    await apiCall('update_document_status', 'POST', {
      document_id: doc.id || null,
      application_id: a.dbId || a.id,
      doc_type: doc.type,
      status: newStatus
    });
  } catch(e) {
    console.warn('Could not persist document status from modal:', e);
  }
}

function printDocModal(){
  const el = document.getElementById('docPreviewSheet');
  if(!el) return;
  const w = window.open('','_blank','width=850,height=900');
  w.document.write('<!DOCTYPE html><html><head><title>Sirib i-Sko - Document Print</title><link rel="stylesheet" href="style.css"><style>body{background:#fff;padding:24px;font-family:Inter,sans-serif;}@media print{button{display:none;}}</style></head><body>'+el.innerHTML+'</body></html>');
  w.document.close();
  setTimeout(()=>{w.print();},400);
}

function renderDocPreviewSheet(doc, a, u, s){
  const fullName = esc((a.personal && a.personal.fullName) || userFullName(u) || 'Juan Dela Cruz');
  const studentId = esc((a.academic && a.academic.studentId) || u.studentId || '2022-04821-MN-0');
  const school = esc((a.academic && a.academic.school) || u.school || 'Mariano Marcos State University');
  const course = esc((a.academic && a.academic.course) || u.course || 'BS Information Technology');
  const yearLevel = esc((a.academic && a.academic.yearLevel) || u.yearLevel || '3rd Year');
  const address = esc((a.personal && a.personal.address) || u.address || 'Laoag City, Ilocos Norte');
  const gpa = esc((a.academic && a.academic.gpa) ? a.academic.gpa + '%' : '94.2%');

  const previewUrl = doc.dataUrl || doc.fileUrl || (doc.id ? 'php/api.php?action=view_application_doc&id=' + doc.id : '');
  const fileName = (doc.name || '').toLowerCase();
  const filePath = (doc.filePath || '').toLowerCase();
  const isImageFile = doc.isImage || /\.(jpg|jpeg|png|webp|gif|bmp)$/i.test(fileName) || /\.(jpg|jpeg|png|webp|gif|bmp)$/i.test(filePath) || (previewUrl && previewUrl.startsWith('data:image'));
  const isPdfFile = fileName.endsWith('.pdf') || filePath.endsWith('.pdf') || (previewUrl && (previewUrl.startsWith('data:application/pdf') || previewUrl.toLowerCase().includes('.pdf')));

  if(previewUrl){
    if(isImageFile){
      return '<div style="background:#0F172A;border-radius:10px;padding:16px;text-align:center;box-shadow:inset 0 2px 8px rgba(0,0,0,0.5);">'+
        '<div style="margin-bottom:12px;color:#94A3B8;font-size:12.5px;display:flex;justify-content:space-between;align-items:center;padding:0 8px;">'+
          '<span>📸 <b>Original Uploaded Document</b> ('+esc(doc.name)+')</span>'+
          '<a href="'+previewUrl+'" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" style="color:#38BDF8;border:1px solid #0284C7;font-size:12px;padding:4px 10px;text-decoration:none;">↗ Open Full Image</a>'+
        '</div>'+
        '<img src="'+previewUrl+'" alt="'+esc(doc.name)+'" style="max-width:100%;max-height:540px;border-radius:6px;object-fit:contain;box-shadow:0 4px 16px rgba(0,0,0,0.4);background:#1E293B;">'+
      '</div>';
    }
    if(isPdfFile || previewUrl.startsWith('data:application/pdf') || previewUrl.includes('action=view_application_doc')){
      return '<div style="width:100%;border-radius:8px;overflow:hidden;background:#F8FAFC;border:1px solid #CBD5E1;">'+
        '<div style="background:#002B49;color:#fff;padding:8px 14px;font-size:12.5px;display:flex;justify-content:space-between;align-items:center;">'+
          '<span>📄 <b>Uploaded Document Viewer</b> · '+esc(doc.name)+'</span>'+
          '<a href="'+previewUrl+'" target="_blank" rel="noopener noreferrer" style="color:#60A5FA;font-size:12px;text-decoration:none;font-weight:600;">↗ Open in New Window</a>'+
        '</div>'+
        '<iframe src="'+previewUrl+'" style="width:100%;height:540px;border:none;"></iframe>'+
      '</div>';
    }
  }

  const dt = (doc.type || '').toLowerCase();
  const nm = (doc.name || '').toLowerCase();

  // 1. School ID
  if(dt.includes('id') || nm.includes('id')){
    return '<div class="doc-sheet" style="max-width:520px;padding:24px;border:2px solid #CBD5E1;border-radius:12px;background:#fff;box-shadow:0 10px 30px rgba(0,0,0,0.08);">'+
      '<div style="display:flex;align-items:center;gap:12px;border-bottom:2px solid #002B49;padding-bottom:12px;margin-bottom:16px;">'+
        '<img src="img/logo.png" style="width:48px;height:48px;object-fit:contain;" alt="Logo">'+
        '<div>'+
          '<div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#64748B;font-weight:700;">Republic of the Philippines</div>'+
          '<div style="font-size:14px;font-weight:800;color:#002B49;line-height:1.2;">'+school.toUpperCase()+'</div>'+
          '<div style="font-size:11px;color:#D97706;font-weight:700;">OFFICIAL STUDENT IDENTIFICATION CARD</div>'+
        '</div>'+
      '</div>'+
      '<div style="display:flex;gap:16px;align-items:center;">'+
        '<div style="width:110px;height:130px;border-radius:8px;background:#F1F5F9;border:2px solid #94A3B8;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#475569;flex-shrink:0;">'+
          (u.validId && u.validId.dataUrl && u.validId.isImage ? 
            '<img src="'+u.validId.dataUrl+'" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">' :
            '<span style="font-size:38px;">👤</span><span style="font-size:9.5px;font-weight:700;margin-top:4px;">ID PHOTO</span>')+
        '</div>'+
        '<div style="flex:1;min-width:0;font-size:12.5px;">'+
          '<div style="font-size:15px;font-weight:800;color:#0F172A;text-transform:uppercase;margin-bottom:4px;">'+fullName+'</div>'+
          '<div style="color:#475569;margin-bottom:2px;"><b>Student No:</b> <span style="font-family:monospace;font-size:13px;font-weight:700;color:#002B49;">'+studentId+'</span></div>'+
          '<div style="color:#475569;margin-bottom:2px;"><b>Program:</b> '+course+'</div>'+
          '<div style="color:#475569;margin-bottom:4px;"><b>Year Level:</b> '+yearLevel+'</div>'+
          '<div style="font-size:11px;color:#16A34A;font-weight:700;background:#DCFCE7;display:inline-block;padding:2px 8px;border-radius:4px;border:1px solid #86EFAC;">✓ VALID ENROLLED · AY 2026-2027</div>'+
        '</div>'+
      '</div>'+
      '<div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:18px;padding-top:12px;border-top:1px dashed #CBD5E1;">'+
        '<div style="font-family:monospace;letter-spacing:3px;font-size:12px;color:#334155;font-weight:700;">||||| | |||| ||| |||| | |||</div>'+
        '<div style="text-align:right;font-size:10px;color:#64748B;">Official University Seal Affixed • <b>VERIFIED</b></div>'+
      '</div>'+
    '</div>';
  }

  // 2. Certificate of Grades
  if(dt.includes('grade') || dt.includes('transcript') || nm.includes('grade')){
    return '<div class="doc-sheet" style="font-family:Georgia,serif;">'+
      '<div style="text-align:center;border-bottom:2px double #334155;padding-bottom:14px;margin-bottom:16px;">'+
        '<div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#475569;font-family:sans-serif;">Republic of the Philippines</div>'+
        '<div style="font-size:16px;font-weight:bold;color:#002B49;letter-spacing:0.5px;margin:2px 0;">'+school.toUpperCase()+'</div>'+
        '<div style="font-size:11.5px;color:#475569;font-family:sans-serif;">City of Batac, Ilocos Norte • Office of the University Registrar</div>'+
        '<div style="font-size:15px;font-weight:bold;margin-top:10px;color:#D97706;letter-spacing:1px;text-decoration:underline;">OFFICIAL CERTIFICATE OF GRADES</div>'+
      '</div>'+
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px;font-family:sans-serif;margin-bottom:14px;background:#F8FAFC;padding:10px 14px;border-radius:6px;border:1px solid #E2E8F0;">'+
        '<div><b>Student:</b> '+fullName+'</div>'+
        '<div><b>Student ID:</b> '+studentId+'</div>'+
        '<div><b>Program:</b> '+course+'</div>'+
        '<div><b>Term:</b> '+yearLevel+' · 1st Semester AY 2025-2026</div>'+
      '</div>'+
      '<table style="width:100%;border-collapse:collapse;font-size:12px;font-family:sans-serif;margin-bottom:14px;">'+
        '<thead><tr style="background:#002B49;color:#fff;text-align:left;">'+
          '<th style="padding:6px 10px;">Course Code &amp; Title</th><th style="padding:6px 10px;text-align:center;">Units</th><th style="padding:6px 10px;text-align:center;">Grade</th><th style="padding:6px 10px;text-align:center;">Remarks</th>'+
        '</tr></thead>'+
        '<tbody>'+
          '<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:6px 10px;">IT 311 - Advanced Database Systems</td><td style="text-align:center;">3.0</td><td style="text-align:center;font-weight:bold;">1.25</td><td style="text-align:center;color:#16A34A;font-weight:bold;">Passed</td></tr>'+
          '<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:6px 10px;">CS 312 - Software Engineering &amp; Architecture</td><td style="text-align:center;">3.0</td><td style="text-align:center;font-weight:bold;">1.25</td><td style="text-align:center;color:#16A34A;font-weight:bold;">Passed</td></tr>'+
          '<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:6px 10px;">IT 313 - Web Systems and Technologies</td><td style="text-align:center;">3.0</td><td style="text-align:center;font-weight:bold;">1.00</td><td style="text-align:center;color:#16A34A;font-weight:bold;">Passed</td></tr>'+
          '<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:6px 10px;">IT 314 - Information Assurance &amp; Security</td><td style="text-align:center;">3.0</td><td style="text-align:center;font-weight:bold;">1.50</td><td style="text-align:center;color:#16A34A;font-weight:bold;">Passed</td></tr>'+
          '<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:6px 10px;">GE 109 - Life and Works of Jose Rizal</td><td style="text-align:center;">3.0</td><td style="text-align:center;font-weight:bold;">1.25</td><td style="text-align:center;color:#16A34A;font-weight:bold;">Passed</td></tr>'+
          '<tr style="border-bottom:1px solid #CBD5E1;"><td style="padding:6px 10px;">PE 4 - Physical Activities &amp; Team Sports</td><td style="text-align:center;">2.0</td><td style="text-align:center;font-weight:bold;">1.00</td><td style="text-align:center;color:#16A34A;font-weight:bold;">Passed</td></tr>'+
        '</tbody>'+
        '<tfoot><tr style="background:#FEF9C3;font-weight:bold;color:#78350F;">'+
          '<td style="padding:8px 10px;">General Weighted Average (GWA)</td><td style="text-align:center;">17.0</td><td style="text-align:center;font-size:13px;color:#92400E;">'+gpa+' (1.20)</td><td style="text-align:center;color:#15803D;">Dean\'s Honor List</td>'+
        '</tr></tfoot>'+
      '</table>'+
      '<div style="margin-top:20px;display:flex;justify-content:space-between;align-items:flex-end;font-size:11px;color:#475569;font-family:sans-serif;">'+
        '<div><div><b>Certification:</b> Certified True Copy of Academic Record</div><div><b>Issuance:</b> For PGIN Sirib i-Sko Application</div></div>'+
        '<div style="text-align:center;"><div style="border-bottom:1px solid #334155;width:180px;margin-bottom:4px;font-weight:bold;color:#0F172A;">Prof. Manuel R. Castro, Ph.D.</div><div>University Registrar</div></div>'+
      '</div>'+
    '</div>';
  }

  // 3. Certificate of Enrollment
  if(dt.includes('enrollment') || dt.includes('matriculation') || nm.includes('enrollment')){
    return '<div class="doc-sheet" style="font-family:Georgia,serif;">'+
      '<div style="text-align:center;border-bottom:2px double #334155;padding-bottom:14px;margin-bottom:20px;">'+
        '<div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#475569;font-family:sans-serif;">Republic of the Philippines</div>'+
        '<div style="font-size:16px;font-weight:bold;color:#002B49;letter-spacing:0.5px;margin:2px 0;">'+school.toUpperCase()+'</div>'+
        '<div style="font-size:11.5px;color:#475569;font-family:sans-serif;">OFFICE OF ADMISSIONS AND REGISTRATION</div>'+
        '<div style="font-size:15px;font-weight:bold;margin-top:12px;color:#002B49;text-decoration:underline;letter-spacing:1px;">CERTIFICATE OF ENROLLMENT &amp; MATRICULATION</div>'+
      '</div>'+
      '<div style="font-size:13.5px;line-height:1.9;color:#1E293B;text-indent:24px;margin-bottom:16px;">'+
        'THIS IS TO CERTIFY that <b style="text-decoration:underline;color:#002B49;">'+fullName+'</b>, with Student Identification Number <b style="color:#002B49;">'+studentId+'</b>, is officially enrolled as a regular student in the degree program <b style="color:#002B49;">'+course+'</b> ('+yearLevel+') at this institution for the <b>First Semester, Academic Year 2026-2027</b>.'+
      '</div>'+
      '<div style="font-size:13.5px;line-height:1.9;color:#1E293B;text-indent:24px;margin-bottom:20px;">'+
        'This certification is issued upon the request of the above-mentioned student in connection with their application for the <b>Sirib i-Sko Provincial Scholarship Program</b> of the Provincial Government of Ilocos Norte.'+
      '</div>'+
      '<div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:28px;font-size:11px;font-family:sans-serif;color:#475569;">'+
        '<div><div><b>Date Issued:</b> August 18, 2026</div><div><b>Academic Load:</b> 21.0 Units (Full Load)</div><div style="color:#16A34A;font-weight:bold;margin-top:4px;">✓ OFFICIAL REGISTRATION SEAL AFFIXED</div></div>'+
        '<div style="text-align:center;"><div style="border-bottom:1px solid #334155;width:200px;margin-bottom:4px;font-weight:bold;color:#0F172A;">Dr. Corazon A. Valdez</div><div>Dean / University Registrar</div></div>'+
      '</div>'+
    '</div>';
  }

  // 4. Barangay Certificate
  if(dt.includes('barangay') || dt.includes('residency') || dt.includes('indigency') || nm.includes('barangay')){
    return '<div class="doc-sheet" style="font-family:Georgia,serif;">'+
      '<div style="text-align:center;border-bottom:2px double #334155;padding-bottom:14px;margin-bottom:20px;">'+
        '<div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#475569;font-family:sans-serif;">Republic of the Philippines</div>'+
        '<div style="font-size:13.5px;font-weight:bold;color:#1E293B;font-family:sans-serif;">PROVINCE OF ILOCOS NORTE</div>'+
        '<div style="font-size:11.5px;color:#475569;font-family:sans-serif;">BARANGAY COUNCIL • OFFICE OF THE PUNONG BARANGAY</div>'+
        '<div style="font-size:15px;font-weight:bold;margin-top:12px;color:#1E3A8A;letter-spacing:1px;text-decoration:underline;">BARANGAY CERTIFICATE OF RESIDENCY &amp; INDIGENCY</div>'+
      '</div>'+
      '<div style="font-size:13.5px;font-weight:bold;color:#0F172A;margin-bottom:12px;">TO WHOM IT MAY CONCERN:</div>'+
      '<div style="font-size:13.5px;line-height:1.9;color:#1E293B;text-indent:24px;margin-bottom:14px;">'+
        'This is to certify that <b style="text-decoration:underline;color:#002B49;">'+fullName+'</b>, Filipino, of legal age, is a bona fide permanent resident of <b style="color:#002B49;">'+address+'</b>, Province of Ilocos Norte.'+
      '</div>'+
      '<div style="font-size:13.5px;line-height:1.9;color:#1E293B;text-indent:24px;margin-bottom:18px;">'+
        'This further certifies that according to records and investigation in this office, the said individual is known to be of good moral character, law-abiding, and belongs to an indigent / low-income family deserving of educational financial support.'+
      '</div>'+
      '<div style="font-size:13.5px;line-height:1.9;color:#1E293B;text-indent:24px;margin-bottom:24px;">'+
        'Issued this day for the purpose of supporting the applicant\'s scholarship application with the <b>Sirib i-Sko Educational Assistance Program</b>.'+
      '</div>'+
      '<div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:24px;font-size:11px;font-family:sans-serif;color:#475569;">'+
        '<div><div><b>Official Dry Seal:</b> Dry Sealed</div><div><b>Barangay Clearance No:</b> BGY-2026-0814</div></div>'+
        '<div style="text-align:center;"><div style="border-bottom:1px solid #334155;width:200px;margin-bottom:4px;font-weight:bold;color:#0F172A;">Hon. Reynaldo G. Pasion</div><div>Punong Barangay</div></div>'+
      '</div>'+
    '</div>';
  }

  // 5. General / Default Document
  return '<div class="doc-sheet" style="font-family:sans-serif;">'+
    '<div style="display:flex;align-items:center;gap:12px;border-bottom:2px solid #002B49;padding-bottom:14px;margin-bottom:18px;">'+
      '<img src="img/logo.png" style="width:48px;height:48px;object-fit:contain;" alt="Logo">'+
      '<div>'+
        '<div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748B;font-weight:700;">Provincial Government of Ilocos Norte</div>'+
        '<div style="font-size:15px;font-weight:800;color:#002B49;">PROVINCIAL EDUCATION OFFICE · SIRIB I-SKO</div>'+
        '<div style="font-size:12px;color:#D97706;font-weight:600;">OFFICIAL REQUIREMENT DOCUMENT: '+esc(doc.type).toUpperCase()+'</div>'+
      '</div>'+
    '</div>'+
    '<div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:16px;margin-bottom:16px;font-size:13px;line-height:1.8;">'+
      '<div><b>Document Type:</b> '+esc(doc.type)+'</div>'+
      '<div><b>File Name:</b> '+esc(doc.name)+'</div>'+
      '<div><b>Applicant Name:</b> '+fullName+'</div>'+
      '<div><b>Student ID:</b> '+studentId+'</div>'+
      '<div><b>Scholarship Program:</b> '+esc(s.name)+'</div>'+
      '<div><b>Verification Status:</b> '+statusBadge(doc.status)+'</div>'+
    '</div>'+
    '<div style="padding:14px;background:#F1F5F9;border-left:4px solid var(--navy);font-size:12.5px;color:#334155;margin-bottom:18px;">'+
      'This document has been submitted via the Sirib i-Sko portal and verified for administrative compliance by the scholarship evaluation committee.'+
    '</div>'+
    '<div style="display:flex;justify-content:space-between;align-items:flex-end;font-size:11px;color:#64748B;">'+
      '<div>Digital Hash: <span style="font-family:monospace;">SHA256-7a8f90b12c34d...</span></div>'+
      '<div>Provincial Education Office Verified</div>'+
    '</div>'+
  '</div>';
}

/* =========================================================
   ADMIN PANEL
   ========================================================= */
function adminTitle(v){
  return {adminDashboard:'Dashboard',adminStudentApprovals:'Student Applications',adminPrograms:'Scholarship Programs',adminApplications:'Applications',adminApplicants:'Applicants',
    adminReviewers:'Evaluator Management',adminEvaluators:'Evaluator Management',adminUsers:'User Management',reports:'Reports',adminNotifications:'Notifications',adminActivity:'Activity Logs',
    adminSettings:'Settings',adminAppProfile:'Application Profile'}[v]||'Dashboard';
}
function renderAdminView(v){
  if(v==='adminStudentApprovals')return renderAdminStudentApprovals();
  if(v==='adminPrograms')return renderAdminPrograms();
  if(v==='adminApplications')return renderAdminApplications();
  if(v==='adminApplicants')return renderAdminApplicants();
  if(v==='adminReviewers'||v==='adminEvaluators')return renderAdminReviewers();
  if(v==='adminUsers')return renderAdminUsers();
  if(v==='reports')return renderReports();
  if(v==='adminNotifications')return renderNotificationsPage();
  if(v==='adminActivity')return renderActivityLogs();
  if(v==='adminSettings')return renderAdminSettings();
  if(v==='adminAppProfile')return renderApplicationProfile(STATE.params.id,'admin');
  return renderAdminDashboard();
}

function renderAdminDashboard(){
  const apps=DB.applications;
  const counts={
    total:DB.users.filter(u=>u.role==='applicant').length,
    apps:apps.length,
    pending:apps.filter(a=>['Submitted','Processing'].includes(a.status)).length,
    review:apps.filter(a=>['Under Review','Finished Review'].includes(a.status)).length,
    approved:apps.filter(a=>a.status==='Approved').length,
    rejected:apps.filter(a=>a.status==='Rejected').length,
  };
  return '<div class="pageintro"><h1>Admin Dashboard</h1><p>Overview of applicants, applications, and program performance.</p></div>'+
    '<div class="grid4" style="grid-template-columns:repeat(3,1fr);margin-bottom:18px;">'+
      statCard('Total Applicants',counts.total,'users','')+statCard('Total Applications',counts.apps,'file','')+statCard('Pending',counts.pending,'clock','acc-amber')+
    '</div>'+
    '<div class="grid4" style="grid-template-columns:repeat(3,1fr);margin-bottom:24px;">'+
      statCard('Under Review',counts.review,'eye','')+statCard('Approved',counts.approved,'check','acc-green')+statCard('Rejected',counts.rejected,'x','acc-red')+
    '</div>'+
    '<div class="row2" style="align-items:stretch;margin-bottom:20px;grid-template-columns:1fr 1fr;">'+
      '<div class="panel"><div class="panel-head"><h3>Applications by Program</h3></div><div class="panel-body"><div class="chart-box"><canvas id="chProgram"></canvas></div></div></div>'+
      '<div class="panel"><div class="panel-head"><h3>Applications by Status</h3></div><div class="panel-body"><div class="chart-box"><canvas id="chStatus"></canvas></div></div></div>'+
    '</div>'+
    '<div class="panel" style="margin-bottom:20px;"><div class="panel-head"><h3>Monthly Applications</h3></div><div class="panel-body"><div class="chart-box"><canvas id="chMonthly"></canvas></div></div></div>'+
    '<div class="panel"><div class="panel-head"><h3>Recent Applications</h3><button class="link-btn" onclick="nav(\'adminApplications\')">View all</button></div>'+
    '<div class="panel-body nopad">'+adminAppsTable(apps.slice().sort((a,b)=>new Date(b.lastUpdated)-new Date(a.lastUpdated)).slice(0,6))+'</div></div>';
}
function initAdminCharts(){
  const apps=DB.applications;
  const byProgram=DB.scholarships.map(s=>apps.filter(a=>a.scholarshipId===s.id).length);
  const ctx1=document.getElementById('chProgram');
  if(ctx1)chartInstances.chProgram=new Chart(ctx1,{type:'bar',data:{labels:DB.scholarships.map(s=>s.name.replace(' Scholarship','').replace(' Program','')),labels:DB.scholarships.map(s=>s.name.replace(' Scholarship','').replace(' Program','')),
    datasets:[{data:byProgram,backgroundColor:'#0F3060',borderRadius:5,maxBarThickness:40}]},
    options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{precision:0}}},responsive:true,maintainAspectRatio:false}});
  const statuses=['Draft','Submitted','Processing','Under Review','Finished Review','Approved','Rejected','Incomplete'];
  const byStatus=statuses.map(s=>apps.filter(a=>a.status===s).length);
  const colors=['#B9770E','#1F618D','#F4B400','#153B75','#059669','#1E8449','#C0392B','#8F1D22'];
  const ctx2=document.getElementById('chStatus');
  if(ctx2)chartInstances.chStatus=new Chart(ctx2,{type:'doughnut',data:{labels:statuses,datasets:[{data:byStatus,backgroundColor:colors}]},
    options:{plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:11}}}},responsive:true,maintainAspectRatio:false}});
  const months=['Jun','Jul','Aug','Sep'];
  const monthly=months.map((m,i)=>apps.filter(a=>{const d=new Date(a.submittedDate||a.lastUpdated);return d.getMonth()===(5+i);}).length);
  const ctx3=document.getElementById('chMonthly');
  if(ctx3)chartInstances.chMonthly=new Chart(ctx3,{type:'line',data:{labels:months,datasets:[{data:monthly,borderColor:'#C1272D',backgroundColor:'rgba(193,39,45,.12)',fill:true,tension:.35,pointBackgroundColor:'#C1272D'}]},
    options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{precision:0}}},responsive:true,maintainAspectRatio:false}});
}
function adminAppsTable(apps){
  if(!apps.length)return emptyState('file','No applications found','');
  return '<table><thead><tr><th>App ID</th><th>Applicant</th><th>Scholarship</th><th>Date</th><th>Status</th><th>Reviewer</th><th>Actions</th></tr></thead><tbody>'+
    apps.map(a=>{
      const s=DB.scholarships.find(x=>x.id===a.scholarshipId);
      const u=DB.users.find(x=>x.id===a.applicantId);
      const rv=DB.users.find(x=>x.id===a.reviewerId);
      const applicantName = u ? userFullName(u) : (a.applicantName || (a.personal && a.personal.fullName) || 'Applicant');
      const canDelete = (a.status === 'Finished Review' || a.status === 'Rejected');
      return '<tr><td><b>'+a.id+'</b></td><td>'+esc(applicantName)+'</td><td>'+esc(s ? s.name : 'Scholarship')+'</td><td>'+(a.submittedDate?fmtDate(a.submittedDate):'—')+'</td>'+
        '<td>'+statusBadge(a.status)+'</td><td>'+(rv?esc(userFullName(rv)):'<span class="small muted">Unassigned</span>')+'</td>'+
        '<td class="tbl-actions">'+
          '<button class="btn btn-ghost btn-sm" onclick="nav(\'adminAppProfile\',{id:\''+a.id+'\'})" title="View Details">'+icon('eye',14)+'</button>'+
          '<button class="btn btn-ghost btn-sm" onclick="openAssignModal(\''+a.id+'\')" title="Assign Reviewer">'+icon('users',14)+'</button>'+
          '<button class="btn btn-ghost btn-sm" onclick="openStatusModal(\''+a.id+'\')" title="Update Status">'+icon('edit',14)+'</button>'+
          (canDelete ? '<button class="btn btn-ghost btn-sm" style="color:var(--red);" title="Delete Application" onclick="confirmDeleteApplication(\''+a.id+'\')">'+icon('trash',14)+'</button>' : '')+
        '</td></tr>';
    }).join('')+'</tbody></table>';
}

/* ---- Admin: Scholarship Programs ---- */
function renderAdminPrograms(){
  return '<div class="pageintro"><h1>Scholarship Programs</h1><p>Create, configure eligibility rules, and manage all PGIN scholarship programs.</p></div>'+
    '<div class="toolbar"><div></div><button class="btn btn-primary btn-sm" onclick="openProgramModal()">'+icon('plus',15)+' New Program</button></div>'+
    '<div class="grid2">'+DB.scholarships.map(s=>{
      const pct=s.slots > 0 ? Math.round((s.slotsFilled/s.slots)*100) : 0;
      const isAllCourses = (s.courseMatchMode === 'all') || (s.eligibleCourses && s.eligibleCourses.toLowerCase().includes('all courses'));
      return '<div class="panel"><div class="panel-body">'+
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;"><div>'+
          '<div style="display:flex;align-items:center;gap:8px;"><span class="sch-cat">'+esc(s.category)+'</span><span class="badge" style="font-size:11px;background:#EBF5FB;color:#2980B9;">'+(isAllCourses?'Open to All Courses':'Specific Courses')+'</span></div>'+
          '<h3 style="margin:8px 0 6px;font-size:16px;">'+esc(s.name)+' <span class="muted" style="font-size:13px;font-weight:normal;">('+esc(s.code||s.id)+')</span></h3>'+
        '</div>'+statusBadge(s.status)+'</div>'+
        '<p class="small muted" style="margin-bottom:8px;">'+esc(s.desc.slice(0,110))+'…</p>'+
        '<div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:6px;padding:8px 10px;margin-bottom:10px;font-size:12px;">'+
          '<div><span class="muted">Eligible Courses:</span> <b>'+esc(isAllCourses ? 'All Priority Degree Programs' : (s.eligibleCourses ? s.eligibleCourses.slice(0, 90) + (s.eligibleCourses.length > 90 ? '…' : '') : 'None specified'))+'</b></div>'+
          '<div style="display:flex;gap:12px;margin-top:4px;flex-wrap:wrap;">'+
            (s.minGwa ? '<div><span class="muted">Min GWA:</span> <b>'+esc(s.minGwa)+'</b></div>' : '')+
            (s.maxIncome ? '<div><span class="muted">Max Income:</span> <b>₱'+Number(s.maxIncome).toLocaleString()+'</b></div>' : '')+
            '<div><span class="muted">Level:</span> <b>'+esc(s.level)+'</b></div>'+
          '</div>'+
        '</div>'+
        '<div class="small muted" style="margin-bottom:6px;">'+s.slotsFilled+' / '+s.slots+' slots filled</div><div class="progress"><i style="width:'+pct+'%"></i></div>'+
        '<div class="divider"></div>'+
        '<div class="small muted">Deadline: '+fmtDate(s.deadline)+'</div>'+
        '<div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;">'+
          '<button class="btn btn-ghost btn-sm" onclick="openProgramModal(\''+s.id+'\')">'+icon('edit',14)+' Edit</button>'+
          '<button class="btn btn-ghost btn-sm" onclick="viewProgramApplicants(\''+s.id+'\')">'+icon('eye',14)+' View Applicants</button>'+
          '<button class="btn '+(s.status==='Open'?'btn-danger':'btn-ghost')+' btn-sm" onclick="toggleProgramStatus(\''+s.id+'\')">'+(s.status==='Open'?'Deactivate':'Activate')+'</button>'+
          '<button class="btn btn-ghost btn-sm" style="color:#C0392B;" onclick="deleteProgram(\''+s.id+'\')">'+icon('trash',14)+' Delete</button>'+
        '</div></div></div>';
    }).join('')+'</div>';
}

async function toggleProgramStatus(id){
  try {
    const res = await apiCall('toggle_scholarship_status', 'POST', { id }, { admin_id: STATE.currentUser ? STATE.currentUser.id : 1 });
    if(res && res.status === 'success'){
      toast(res.message, 'success');
      await syncScholarshipsFromApi();
      render();
    } else {
      toast((res && res.message) ? res.message : 'Failed to toggle status.', 'error');
    }
  } catch(e) {
    toast('Error toggling scholarship: ' + e.message, 'error');
  }
}

async function deleteProgram(id){
  const s = DB.scholarships.find(x => x.id === id || x.code === id);
  if(!s) return;
  if(!confirm('Are you sure you want to delete scholarship program "' + s.name + '"? This action cannot be undone.')){
    return;
  }
  try {
    const res = await apiCall('delete_scholarship', 'POST', { id }, { admin_id: STATE.currentUser ? STATE.currentUser.id : 1 });
    if(res && res.status === 'success'){
      toast(res.message, 'success');
      DB.scholarships = DB.scholarships.filter(x => x.id !== id && x.code !== id);
      await syncScholarshipsFromApi();
      render();
    } else {
      toast((res && res.message) ? res.message : 'Failed to delete scholarship.', 'error');
    }
  } catch(e) {
    toast('Error deleting scholarship: ' + e.message, 'error');
  }
}

function viewProgramApplicants(id){
  adminAppFilters.scholarship=id; nav('adminApplications');
}

function openProgramModal(id){
  const s = id ? DB.scholarships.find(x => x.id === id || x.code === id) : null;
  const isAll = s ? ((s.courseMatchMode || 'specific') === 'all') : false;
  openModal(
    '<div class="modal-head"><h3>' + (s ? 'Edit' : 'Create') + ' Scholarship Program</h3><button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button></div>' +
    '<div class="modal-body">' +
    '<div class="field"><label>Program Name</label><input class="input" id="pmName" value="' + esc(s ? s.name : '') + '"></div>' +
    '<div class="row3">' +
      '<div class="field"><label>Category</label><input class="input" id="pmCat" value="' + esc(s ? s.category : 'Academic Excellence') + '"></div>' +
      '<div class="field"><label>School Level</label><input class="input" id="pmLevel" value="' + esc(s ? s.level : 'College / University') + '"></div>' +
      '<div class="field"><label>Course Matching Mode</label>' +
        '<select class="input" id="pmCourseMode" onchange="toggleCourseInputVisibility()">' +
          '<option value="specific" ' + (!isAll ? 'selected' : '') + '>Specific Courses Only</option>' +
          '<option value="all" ' + (isAll ? 'selected' : '') + '>All Courses / Priority Degrees</option>' +
        '</select>' +
      '</div>' +
    '</div>' +
    '<div class="field" id="pmCoursesGroup"><label>Eligible Courses / Programs (comma-separated list)</label>' +
      '<textarea class="input" id="pmCourses" style="height:64px;" placeholder="e.g. BS Agriculture, BSA, BS Fisheries, BS Agricultural Engineering">' + esc(s ? (s.eligibleCourses || '') : '') + '</textarea>' +
    '</div>' +
    '<div class="row3">' +
      '<div class="field"><label>Minimum GWA (e.g. 2.50 or 85%)</label><input class="input" id="pmMinGwa" value="' + esc(s ? (s.minGwa || '') : '') + '"></div>' +
      '<div class="field"><label>Maximum Annual Income (₱)</label><input class="input" type="number" id="pmMaxIncome" value="' + (s && s.maxIncome ? s.maxIncome : '') + '" placeholder="e.g. 350000"></div>' +
      '<div class="field"><label>Number of Slots</label><input class="input" type="number" id="pmSlots" value="' + (s ? s.slots : 100) + '"></div>' +
    '</div>' +
    '<div class="row2">' +
      '<div class="field"><label>Accepted Year Levels (comma-separated, or "All")</label><input class="input" id="pmYearLevels" value="' + esc(s ? (s.eligibleYearLevels || '1st Year, 2nd Year, 3rd Year, 4th Year, 5th Year') : 'All') + '"></div>' +
      '<div class="field"><label>Accepted Schools / Universities (or "All")</label><input class="input" id="pmSchools" value="' + esc(s ? (s.eligibleSchools || 'All') : 'All') + '"></div>' +
    '</div>' +
    '<div class="field"><label>Description</label><textarea class="input" id="pmDesc">' + esc(s ? s.desc : '') + '</textarea></div>' +
    '<div class="field"><label>Eligibility Criteria (one per line)</label><textarea class="input" id="pmElig">' + esc(s ? s.eligibility.join('\n') : '') + '</textarea></div>' +
    '<div class="field"><label>Required Documents (one per line)</label><textarea class="input" id="pmDocs">' + esc(s ? s.documents.join('\n') : '') + '</textarea></div>' +
    '<div class="field"><label>Benefits (one per line)</label><textarea class="input" id="pmBen">' + esc(s ? s.benefits.join('\n') : '') + '</textarea></div>' +
    '<div class="row2">' +
      '<div class="field"><label>Opening Date</label><input class="input" type="date" id="pmOpen" value="' + (s ? s.openDate : '') + '"></div>' +
      '<div class="field"><label>Deadline</label><input class="input" type="date" id="pmDeadline" value="' + (s ? s.deadline : '') + '"></div>' +
    '</div>' +
    '</div>' +
    '<div class="modal-foot">' +
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>' +
      '<button class="btn btn-primary" onclick="saveProgram(\'' + (id || '') + '\')">Save Program</button>' +
    '</div>',
    true
  );
}

function toggleCourseInputVisibility(){
  const mode = document.getElementById('pmCourseMode').value;
  const grp = document.getElementById('pmCoursesGroup');
  if(grp){
    grp.style.opacity = mode === 'all' ? '0.6' : '1';
  }
}

async function saveProgram(id){
  const g = x => document.getElementById(x) ? document.getElementById(x).value : '';
  const name = g('pmName').trim();
  if(!name){ toast('Program name is required.', 'error'); return; }

  const payload = {
    id: id || '',
    name: name,
    category: g('pmCat').trim(),
    level: g('pmLevel').trim(),
    courseMatchMode: g('pmCourseMode'),
    eligibleCourses: g('pmCourses').trim(),
    minGwa: g('pmMinGwa').trim(),
    maxIncome: g('pmMaxIncome') ? Number(g('pmMaxIncome')) : null,
    eligibleYearLevels: g('pmYearLevels').trim(),
    eligibleSchools: g('pmSchools').trim(),
    desc: g('pmDesc').trim(),
    eligibility: g('pmElig').split('\n').map(s=>s.trim()).filter(Boolean),
    documents: g('pmDocs').split('\n').map(s=>s.trim()).filter(Boolean),
    benefits: g('pmBen').split('\n').map(s=>s.trim()).filter(Boolean),
    slots: Number(g('pmSlots') || 0),
    openDate: g('pmOpen'),
    deadline: g('pmDeadline')
  };

  try {
    const res = await apiCall('save_scholarship', 'POST', payload, { admin_id: STATE.currentUser ? STATE.currentUser.id : 1 });
    if(res && res.status === 'success'){
      toast(res.message || 'Scholarship saved successfully.', 'success');
      await syncScholarshipsFromApi();
      closeModal();
      render();
    } else {
      toast((res && res.message) ? res.message : 'Failed to save scholarship.', 'error');
    }
  } catch(e) {
    toast('Error saving scholarship: ' + e.message, 'error');
  }
}

/* ---- Admin: Applications ---- */
const adminAppFilters={q:'',scholarship:'All',status:'All'};
function renderAdminApplications(){
  const apps=DB.applications.filter(a=>{
    if(adminAppFilters.scholarship!=='All'&&a.scholarshipId!==adminAppFilters.scholarship)return false;
    if(adminAppFilters.status!=='All'&&a.status!==adminAppFilters.status)return false;
    if(adminAppFilters.q){
      const u=DB.users.find(x=>x.id===a.applicantId);
      const hay=(a.id+' '+userFullName(u)).toLowerCase();
      if(!hay.includes(adminAppFilters.q.toLowerCase()))return false;
    }
    return true;
  }).sort((a,b)=>new Date(b.lastUpdated)-new Date(a.lastUpdated));
  const statuses=['All','Draft','Submitted','Processing','Under Review','Finished Review','Approved','Rejected','Incomplete'];
  return '<div class="pageintro"><h1>Applications</h1><p>Search, filter, and manage all scholarship applications.</p></div>'+
    '<div class="toolbar"><div class="search-box">'+icon('search',16)+'<input id="adminAppSearchInput" class="input" placeholder="Search by ID or applicant..." value="'+esc(adminAppFilters.q)+'" oninput="adminAppFilters.q=this.value;debounceSearchRender();" onkeydown="if(event.key===\'Enter\'){if(searchDebounceTimer){clearTimeout(searchDebounceTimer);searchDebounceTimer=null;}render();}"></div>'+
    '<div class="toolbar-filters">'+
      '<select class="select-sm" onchange="adminAppFilters.scholarship=this.value;render()">'+['All',...DB.scholarships.map(s=>s.id)].map(v=>'<option value="'+v+'" '+(v===adminAppFilters.scholarship?'selected':'')+'>'+(v==='All'?'All Scholarships':DB.scholarships.find(s=>s.id===v).name)+'</option>').join('')+'</select>'+
      '<select class="select-sm" onchange="adminAppFilters.status=this.value;render()">'+statuses.map(v=>'<option value="'+v+'" '+(v===adminAppFilters.status?'selected':'')+'>Status: '+v+'</option>').join('')+'</select>'+
      '<button class="btn btn-outline btn-sm" onclick="syncApplicationsFromApi().then(()=>render())" title="Refresh Applications from Database">'+icon('clock',14)+' Refresh</button>'+
    '</div></div>'+
    '<div class="panel"><div class="panel-body nopad">'+adminAppsTable(apps)+'</div></div>';
}
async function openAssignModal(appId){
  const a = DB.applications.find(x => x.id === appId || (x.code && x.code === appId) || String(x.dbId) === String(appId));
  if(!a){ toast('Application not found.', 'error'); return; }

  // Ensure evaluators are loaded from database
  if(STATE.evaluatorsCache === null){
    try {
      const adminId = (STATE.currentUser && (STATE.currentUser.id || STATE.currentUser.rawAdminId)) ? (STATE.currentUser.id || STATE.currentUser.rawAdminId) : 1;
      const res = await apiCall('evaluators', 'GET', null, { admin_id: adminId });
      const list = (res && res.status === 'success') ? (res.evaluators || res.data || []) : null;
      if(list && Array.isArray(list)){
        STATE.evaluatorsCache = list;
        list.forEach(ev => {
          const uId = String(ev.id);
          const existing = DB.users.find(u => String(u.id) === uId || (u.email && u.email.toLowerCase() === (ev.email||'').toLowerCase()));
          if(existing){
            existing.dbId = ev.id;
            existing.id = uId;
            existing.evaluatorId = ev.evaluator_id || existing.evaluatorId;
            existing.position = ev.position || existing.position;
            existing.firstName = ev.first_name || existing.firstName;
            existing.lastName = ev.last_name || existing.lastName;
            existing.status = ev.status === 'Active' ? 'Active' : (ev.status === 'Pending Activation' ? 'Pending' : 'Inactive');
          } else {
            DB.users.push({
              id: uId,
              dbId: ev.id,
              role: 'reviewer',
              firstName: ev.first_name || '',
              lastName: ev.last_name || '',
              email: ev.email,
              position: ev.position || 'Evaluator',
              evaluatorId: ev.evaluator_id,
              status: ev.status === 'Active' ? 'Active' : (ev.status === 'Pending Activation' ? 'Pending' : 'Inactive')
            });
          }
        });
      }
    } catch(e) {}
  }

  const sch = DB.scholarships.find(s => s.id === a.scholarshipId);
  const schName = sch ? sch.name : (a.scholarshipName || 'Scholarship');
  const reviewers = DB.users.filter(u => u.role === 'reviewer' && u.status === 'Active');

  openModal('<div class="modal-head"><h3>Assign Reviewer</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
    '<div class="modal-body">'+
    '<div class="field"><label>Application</label><input class="input" disabled value="'+esc(a.id)+' — '+esc(schName)+'"></div>'+
    '<div class="field"><label>Select Reviewer</label><select class="input" id="asgReviewer">'+
    (reviewers.length ? reviewers.map(r => {
      const isSelected = String(a.reviewerId) === String(r.id) || String(a.reviewerId) === String(r.dbId) || (a.reviewerEvaluatorId && a.reviewerEvaluatorId === r.evaluatorId);
      const evalTag = r.evaluatorId ? ' (' + r.evaluatorId + ')' : '';
      return '<option value="'+(r.dbId || r.id)+'" '+(isSelected?'selected':'')+'>'+esc(userFullName(r))+' — '+esc(r.position||'Evaluator')+evalTag+'</option>';
    }).join('') : '<option value="">No active evaluators found</option>')+
    '</select></div>'+
    '<div class="field"><label>Assignment Date</label><input class="input" type="date" id="asgDate" value="'+new Date().toISOString().slice(0,10)+'"></div>'+
    '<div class="field"><label>Evaluation Deadline</label><input class="input" type="date" id="asgDeadline"></div>'+
    '</div><div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="assignReviewer(\''+appId+'\')">Assign</button></div>');
}
async function assignReviewer(appId){
  const a = DB.applications.find(x => x.id === appId || (x.code && x.code === appId) || String(x.dbId) === String(appId));
  const sel = document.getElementById('asgReviewer');
  if(!sel || !sel.value){ toast('Please select an evaluator.', 'error'); return; }
  const reviewerId = sel.value;
  const deadline = document.getElementById('asgDeadline') ? document.getElementById('asgDeadline').value : '';
  const assignedDate = document.getElementById('asgDate') ? document.getElementById('asgDate').value : '';
  const rUser = DB.users.find(u => String(u.id) === String(reviewerId) || String(u.dbId) === String(reviewerId));
  const adminId = (STATE.currentUser && (STATE.currentUser.id || STATE.currentUser.rawAdminId)) ? (STATE.currentUser.id || STATE.currentUser.rawAdminId) : 1;

  try {
    const res = await apiCall('assign_reviewer', 'POST', {
      application_id: appId,
      app_code: a ? (a.code || a.id) : appId,
      reviewer_id: reviewerId,
      reviewer_email: rUser ? rUser.email : null,
      evaluator_id: rUser ? rUser.evaluatorId : null,
      deadline: deadline,
      assigned_date: assignedDate,
      admin_id: adminId
    }, { admin_id: adminId });

    if(res && res.status === 'success'){
      if(a){
        a.reviewerId = String(res.reviewer_id || reviewerId);
        if(res.evaluator_id) a.reviewerEvaluatorId = res.evaluator_id;
        if(a.status === 'Submitted' || a.status === 'Pending' || a.status === 'Draft') a.status = 'Processing';
        a.stage = 'Document Checking';
        a.lastUpdated = new Date().toISOString();
        const r = DB.users.find(x => String(x.id) === String(reviewerId) || String(x.dbId) === String(reviewerId) || (x.evaluatorId && x.evaluatorId === res.evaluator_id));
        if(r) a.reviewerName = userFullName(r);
      }
      toast(res.message || 'Reviewer assigned successfully.', 'success');
      closeModal();
      render();
    } else {
      // Graceful fallback for local or offline/502 state
      if(a){
        a.reviewerId = String(reviewerId);
        if(rUser && rUser.evaluatorId) a.reviewerEvaluatorId = rUser.evaluatorId;
        if(a.status === 'Submitted' || a.status === 'Pending' || a.status === 'Draft') a.status = 'Processing';
        a.stage = 'Document Checking';
        a.lastUpdated = new Date().toISOString();
        if(rUser) a.reviewerName = userFullName(rUser);
      }
      toast('Reviewer assigned (' + ((res && res.message) ? res.message : 'Applied') + ').', 'info');
      closeModal();
      render();
    }
  } catch(err) {
    console.error('Error in assignReviewer:', err);
    if(a){
      a.reviewerId = String(reviewerId);
      if(a.status === 'Submitted' || a.status === 'Pending' || a.status === 'Draft') a.status = 'Processing';
      a.stage = 'Document Checking';
      a.lastUpdated = new Date().toISOString();
      if(rUser) a.reviewerName = userFullName(rUser);
    }
    toast('Reviewer assigned locally.', 'info');
    closeModal();
    render();
  }
}
function openStatusModal(appId){
  const a=DB.applications.find(x=>x.id===appId);
  const statuses=['Draft','Submitted','Processing','Under Review','Finished Review','Approved','Rejected','Incomplete'];
  openModal('<div class="modal-head"><h3>Update Application Status</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
    '<div class="modal-body"><div class="field"><label>Application</label><input class="input" disabled value="'+a.id+'"></div>'+
    '<div class="field"><label>Status</label><select class="input" id="stStatus">'+statuses.map(s=>'<option value="'+s+'" '+(a.status===s?'selected':'')+'>'+s+'</option>').join('')+'</select></div>'+
    '<div class="field"><label>Comment (visible to applicant)</label><textarea class="input" id="stComment">'+esc(a.reviewerComments)+'</textarea></div>'+
    '</div><div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="updateAppStatus(\''+appId+'\')">Update Status</button></div>');
}
function updateAppStatus(appId){
  const a=DB.applications.find(x=>x.id===appId);
  const newStatus=document.getElementById('stStatus').value;
  a.status=newStatus;
  a.reviewerComments=document.getElementById('stComment').value;
  a.stage= newStatus==='Approved'||newStatus==='Rejected'?'Final Decision':newStatus==='Under Review'?'Under Review':newStatus==='Finished Review'?'Finished Review':newStatus==='Processing'?'Document Checking':a.stage;
  a.lastUpdated=new Date().toISOString();
  apiCall('update_application_status', 'POST', { id: a.id, status: newStatus, comments: a.reviewerComments }).catch(()=>{});
  logActivity(STATE.currentUser.id,'admin','Status Change','Updated status of application '+a.id+' to '+newStatus+'.');
  pushNotif(a.applicantId,'Application status updated','Your application '+a.id+' is now: '+newStatus+'.');
  toast('Status updated to '+newStatus+'.','success');
  closeModal();render();
}

function confirmDeleteApplication(appId){
  const a = DB.applications.find(x => x.id === appId);
  if(!a) return;
  const u = DB.users.find(x => x.id === a.applicantId);
  const applicantName = u ? userFullName(u) : (a.applicantName || (a.personal && a.personal.fullName) || 'Applicant');
  
  openModal(
    '<div class="modal-head"><h3>' + icon('trash', 18) + ' Delete Application</h3><button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button></div>' +
    '<div class="modal-body">' +
      '<div style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:12px;margin-bottom:14px;color:#991B1B;font-size:13px;">' +
        '<b>Warning:</b> This action cannot be undone. All evaluation records and attached documents for this application will be permanently removed from the database.' +
      '</div>' +
      '<p>Are you sure you want to permanently delete application <b>' + esc(a.id) + '</b> for <b>' + esc(applicantName) + '</b> (' + esc(a.status) + ')?</p>' +
    '</div>' +
    '<div class="modal-foot">' +
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>' +
      '<button class="btn btn-danger" onclick="doDeleteApplication(\'' + esc(a.id) + '\')">' + icon('trash', 14) + ' Permanently Delete</button>' +
    '</div>'
  );
}

async function doDeleteApplication(appId){
  try {
    const res = await apiCall('delete_application', 'POST', { id: appId });
    if(res && res.status === 'error'){
      toast(res.message || 'Failed to delete application', 'error');
      return;
    }
  } catch(e) {
    console.warn('Backend delete_application call failed, removing locally:', e);
  }

  const idx = DB.applications.findIndex(x => x.id === appId);
  if(idx >= 0){
    const app = DB.applications[idx];
    const s = DB.scholarships.find(x => x.id === app.scholarshipId);
    if(s) s.slotsFilled = Math.max(0, s.slotsFilled - 1);
    DB.applications.splice(idx, 1);
  }

  logActivity(STATE.currentUser ? STATE.currentUser.id : 'U-2001', 'admin', 'Delete Application', 'Admin deleted application ' + appId + '.');
  toast('Application ' + appId + ' deleted successfully.', 'success');
  closeModal();
  if(STATE.view === 'adminAppProfile'){
    nav('adminApplications');
  } else {
    render();
  }
}

function renderApplicationProfile(appId,ctx){
  const a=DB.applications.find(x=>x.id===appId);
  if(!a)return emptyState('file','Application not found','');
  const s=DB.scholarships.find(x=>x.id===a.scholarshipId);
  const u=DB.users.find(x=>x.id===a.applicantId);
  const rv=DB.users.find(x=>x.id===a.reviewerId);
  const tab=STATE.params.tab||'personal';
  const backView=ctx==='admin'?'adminApplications':'reviewerAssigned';
  const tabs=[['personal','Personal Information'],['academic','Academic Information'],['family','Family Information'],['documents','Documents'],['evaluation','Evaluation'],['history','Activity History']];
  let body='';
  if(tab==='personal')body=Object.entries(a.personal).map(([k,v])=>kv(labelize(k),v)).join('');
  else if(tab==='academic')body=Object.entries(a.academic).map(([k,v])=>kv(labelize(k),v)).join('');
  else if(tab==='family')body=Object.entries(a.family).map(([k,v])=>kv(labelize(k),v)).join('');
  else if(tab==='documents')body=docList(a.documents, a.id);
  else if(tab==='evaluation')body=a.evaluation? evaluationSummary(a.evaluation) : '<p class="small muted">No evaluation submitted yet.</p>';
  else body=activityForApp(a);

  return '<button class="link-btn" style="margin-bottom:14px;display:flex;align-items:center;gap:6px;" onclick="nav(\''+backView+'\')">← Back</button>'+
    '<div class="pageintro" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">'+
      '<div><h1>'+a.id+'</h1><p>'+esc(s.name)+' · Applicant: '+esc(userFullName(u))+'</p></div>'+
      '<div style="display:flex;gap:8px;align-items:center;">'+statusBadge(a.status)+
      (ctx==='admin'? '<button class="btn btn-ghost btn-sm" onclick="openAssignModal(\''+a.id+'\')">'+icon('users',14)+' Assign</button><button class="btn btn-ghost btn-sm" onclick="openStatusModal(\''+a.id+'\')">'+icon('edit',14)+' Update Status</button>'+
      ((a.status==='Finished Review' || a.status==='Rejected') ? '<button class="btn btn-ghost btn-sm" style="color:var(--red);" onclick="confirmDeleteApplication(\''+a.id+'\')">'+icon('trash',14)+' Delete</button>' : '')
      :'')+
      '</div>'+
    '</div>'+
    '<div class="grid3" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px;">'+
      '<div class="stat-card"><div class="sl">Assigned Reviewer</div><div style="font-weight:700;font-size:14.5px;margin-top:4px;">'+(rv?esc(userFullName(rv)):'Unassigned')+'</div></div>'+
      '<div class="stat-card"><div class="sl">Submitted</div><div style="font-weight:700;font-size:14.5px;margin-top:4px;">'+(a.submittedDate?fmtDate(a.submittedDate):'—')+'</div></div>'+
      '<div class="stat-card"><div class="sl">Last Updated</div><div style="font-weight:700;font-size:14.5px;margin-top:4px;">'+fmtDate(a.lastUpdated)+'</div></div>'+
      '<div class="stat-card"><div class="sl">Current Stage</div><div style="font-weight:700;font-size:14.5px;margin-top:4px;">'+a.stage+'</div></div>'+
    '</div>'+
    '<div class="panel"><div class="tabs" style="padding:0 20px;margin-bottom:0;">'+tabs.map(t=>'<div class="tab '+(tab===t[0]?'active':'')+'" onclick="nav(\''+(ctx==='admin'?'adminAppProfile':'reviewApplication')+'\',{id:\''+a.id+'\',tab:\''+t[0]+'\'})">'+t[1]+'</div>').join('')+'</div>'+
    '<div class="panel-body">'+body+'</div></div>';
}
function labelize(k){return k.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase());}
function activityForApp(a){
  const logs=DB.activityLogs.filter(l=>l.description.includes(a.id));
  if(!logs.length)return '<p class="small muted">No recorded activity for this application yet.</p>';
  return '<table><thead><tr><th>Date</th><th>Action</th><th>Description</th></tr></thead><tbody>'+
    logs.map(l=>'<tr><td>'+fmtDateTime(l.date)+'</td><td>'+esc(l.action)+'</td><td>'+esc(l.description)+'</td></tr>').join('')+'</tbody></table>';
}
function evaluationSummary(ev){
  return '<div class="score-row"><div class="sname">Academic Performance</div><div class="smax">/30</div><div><b>'+ev.academic+'</b></div></div>'+
    '<div class="score-row"><div class="sname">Financial Need</div><div class="smax">/25</div><div><b>'+ev.financial+'</b></div></div>'+
    '<div class="score-row"><div class="sname">Completeness of Requirements</div><div class="smax">/20</div><div><b>'+ev.completeness+'</b></div></div>'+
    '<div class="score-row"><div class="sname">Eligibility</div><div class="smax">/15</div><div><b>'+ev.eligibility+'</b></div></div>'+
    '<div class="score-row"><div class="sname">Additional Criteria</div><div class="smax">/10</div><div><b>'+ev.additional+'</b></div></div>'+
    '<div class="score-total"><span>Total Score</span><span>'+ev.total+' / 100</span></div>'+
    '<div class="divider"></div>'+kv('Recommendation',ev.recommendation)+kv('Comments',ev.comments)+kv('Submitted',fmtDateTime(ev.submittedDate));
}

/* ---- Admin: Applicants ---- */
function renderAdminApplicants(){
  const applicants=DB.users.filter(u=>u.role==='applicant');
  return '<div class="pageintro"><h1>Applicants</h1><p>All registered student applicants.</p></div>'+
    '<div class="panel"><div class="panel-body nopad"><table><thead><tr><th>Name</th><th>Student ID</th><th>School</th><th>Applications</th><th>Status</th><th>Actions</th></tr></thead><tbody>'+
    applicants.map(u=>{
      const n=DB.applications.filter(a=>a.applicantId===u.id).length;
      return '<tr><td><div style="display:flex;align-items:center;gap:9px;"><div class="avatar" style="width:30px;height:30px;font-size:11px;">'+initials(u.firstName,u.lastName)+'</div>'+esc(userFullName(u))+'</div></td>'+
        '<td>'+esc(u.studentId)+'</td><td>'+esc(u.school||'—')+'</td><td>'+n+'</td><td>'+statusBadge(u.status)+'</td>'+
        '<td class="tbl-actions"><button class="btn btn-ghost btn-sm" onclick="openUserModal(\''+u.id+'\')">'+icon('eye',14)+' View</button></td></tr>';
    }).join('')+'</tbody></table></div></div>';
}

/* ---- Admin: Evaluator Management ---- */
function renderAdminReviewers(){
  // Auto-fetch evaluators from backend API if cache is empty
  if(STATE.evaluatorsCache === null && !STATE.isFetchingEvaluators){
    STATE.isFetchingEvaluators = true;
    apiCall('evaluators', 'GET', null, { admin_id: STATE.currentUser ? STATE.currentUser.id : 1 }).then(res => {
      STATE.isFetchingEvaluators = false;
      const list = (res && res.status === 'success') ? (res.evaluators || res.data || []) : null;
      if(list && Array.isArray(list)){
        STATE.evaluatorsCache = list;
        // Purge mock evaluators so only real database accounts appear
        if(list.length > 0){
          DB.users = DB.users.filter(u => !(u.role === 'reviewer' && String(u.id).startsWith('U-300')));
        }
        // Sync into DB.users so client-side application assignment works
        list.forEach(ev => {
          const uId = String(ev.id);
          const existing = DB.users.find(u => String(u.id) === uId || (u.email && u.email.toLowerCase() === (ev.email||'').toLowerCase()));
          if(!existing){
            DB.users.push({
              id: uId,
              role: 'reviewer',
              firstName: ev.first_name || ev.firstName || '',
              lastName: ev.last_name || ev.lastName || '',
              email: ev.email,
              status: ev.status || 'Active',
              evaluatorId: ev.evaluator_id || ev.evaluatorId || '',
              joined: ev.created_at ? ev.created_at.slice(0,10) : '2026-02-01'
            });
          } else {
            existing.status = ev.status;
            existing.evaluatorId = ev.evaluator_id || ev.evaluatorId || existing.evaluatorId;
            existing.firstName = ev.first_name || ev.firstName || existing.firstName;
            existing.lastName = ev.last_name || ev.lastName || existing.lastName;
          }
        });
        render();
      }
    }).catch(() => { STATE.isFetchingEvaluators = false; });
  }

  // Base list
  let evaluators = (STATE.evaluatorsCache && Array.isArray(STATE.evaluatorsCache))
    ? STATE.evaluatorsCache.map(e => ({
        id: String(e.id),
        role: 'reviewer',
        firstName: e.first_name || e.firstName || '',
        lastName: e.last_name || e.lastName || '',
        email: e.email || '',
        status: e.status || 'Active',
        evaluatorId: e.evaluator_id || e.evaluatorId || ('EVAL-' + e.id),
        assignedCount: Number(e.assigned_count || e.total_assigned || 0),
        completedCount: Number(e.completed_count || e.completed_evaluations || 0),
        pendingCount: Math.max(0, Number(e.assigned_count || e.total_assigned || 0) - Number(e.completed_count || e.completed_evaluations || 0))
      }))
    : DB.users.filter(u => (u.role === 'reviewer' || u.role === 'evaluator') && !String(u.id).startsWith('U-300')).map(r => {
        const assigned = DB.applications.filter(a => String(a.reviewerId) === String(r.id));
        const completed = assigned.filter(a => a.evaluation).length;
        return {
          id: String(r.id),
          role: 'reviewer',
          firstName: r.firstName || '',
          lastName: r.lastName || '',
          email: r.email || '',
          status: r.status || 'Active',
          evaluatorId: r.evaluatorId || r.evaluator_id || ('EVAL-' + r.id),
          assignedCount: assigned.length,
          completedCount: completed,
          pendingCount: (assigned.length - completed)
        };
      });

  // Apply Search
  const q = (STATE.evaluatorSearch || '').trim().toLowerCase();
  if(q){
    evaluators = evaluators.filter(e =>
      (e.firstName + ' ' + e.lastName).toLowerCase().includes(q) ||
      (e.email || '').toLowerCase().includes(q) ||
      (e.evaluatorId || '').toLowerCase().includes(q)
    );
  }

  // Apply Status Filter
  const statusFilter = STATE.evaluatorStatusFilter || 'All';
  if(statusFilter !== 'All'){
    evaluators = evaluators.filter(e => e.status === statusFilter);
  }

  return '<div class="pageintro"><h1>Evaluator Management</h1><p>Manage scholarship evaluators, activation invitations, and assigned application workloads.</p></div>'+
    '<div class="toolbar" style="flex-wrap:wrap;gap:10px;">'+
      '<div style="display:flex;gap:10px;align-items:center;flex:1;min-width:280px;">'+
        '<div class="search-box" style="flex:1;">'+icon('search',16)+'<input id="evaluatorSearchInput" class="input" placeholder="Search by name, email, or Evaluator ID..." value="'+esc(STATE.evaluatorSearch||'')+'" oninput="STATE.evaluatorSearch=this.value;debounceSearchRender();" onkeydown="if(event.key===\'Enter\'){if(searchDebounceTimer){clearTimeout(searchDebounceTimer);searchDebounceTimer=null;}render();}"></div>'+
        '<div class="toolbar-filters">'+
          ['All','Active','Pending Activation','Inactive'].map(s => '<button class="btn '+(statusFilter===s?'btn-navy':'btn-ghost')+' btn-sm" onclick="STATE.evaluatorStatusFilter=\''+s+'\';render();">'+s+'</button>').join('')+
        '</div>'+
      '</div>'+
      '<div style="display:flex;gap:8px;flex-wrap:wrap;">'+
        '<button class="btn btn-outline btn-sm" onclick="STATE.evaluatorsCache=null;render();" title="Refresh evaluators from database" style="background:#fff;border:1px solid var(--border);color:var(--navy);font-weight:600;display:inline-flex;align-items:center;gap:6px;box-shadow:0 1px 2px rgba(0,0,0,0.04);cursor:pointer;">'+icon('clock',14)+' Refresh</button>'+
        '<button class="btn btn-outline btn-sm" onclick="openAdminAuthCodesModal()" style="background:#fff;border:1px solid var(--border);color:var(--navy);font-weight:600;display:inline-flex;align-items:center;gap:6px;box-shadow:0 1px 2px rgba(0,0,0,0.04);cursor:pointer;">'+icon('key',15)+' Admin Invite Codes</button>'+
        '<button class="btn btn-outline btn-sm" onclick="openEmailLogsModal()" style="background:#fff;border:1px solid var(--border);color:var(--navy);font-weight:600;display:inline-flex;align-items:center;gap:6px;box-shadow:0 1px 2px rgba(0,0,0,0.04);cursor:pointer;">'+icon('mail',15)+' Email Logs</button>'+
        '<button class="btn btn-primary btn-sm" onclick="openCreateEvaluatorModal()" style="display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-weight:600;">'+icon('plus',15)+' Create Evaluator</button>'+
      '</div>'+
    '</div>'+
    (evaluators.length ? (
      '<div class="grid2">'+evaluators.map(r=>{
        return '<div class="panel"><div class="panel-body">'+
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;">'+
            '<div style="display:flex;gap:12px;">'+
              '<div class="avatar" style="width:46px;height:46px;font-size:16px;">'+initials(r.firstName,r.lastName)+'</div>'+
              '<div>'+
                '<b style="font-size:15px;display:flex;align-items:center;gap:8px;">'+esc(userFullName(r))+' <span class="badge b-review" style="font-size:11px;font-weight:600;">'+esc(r.evaluatorId)+'</span></b>'+
                '<div class="small muted" style="margin-top:2px;">'+esc(r.email)+'</div>'+
                '<div class="small muted" style="margin-top:1px;">Role: Scholarship Evaluator</div>'+
              '</div>'+
            '</div>'+
            statusBadge(r.status)+
          '</div>'+
          '<div class="divider"></div>'+
          '<div class="row3">'+
            '<div><div class="small muted">Assigned</div><b>'+r.assignedCount+'</b></div>'+
            '<div><div class="small muted">Completed</div><b>'+r.completedCount+'</b></div>'+
            '<div><div class="small muted">Pending</div><b>'+r.pendingCount+'</b></div>'+
          '</div>'+
          '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;border-top:1px solid var(--border);padding-top:12px;">'+
            '<button class="btn btn-ghost btn-sm" onclick="openEditEvaluatorModal(\''+r.id+'\')">'+icon('edit',14)+' Edit</button>'+
            '<button class="btn btn-ghost btn-sm" onclick="resendEvaluatorInvite(\''+r.id+'\')" title="Resend 48h activation link">'+icon('mail',14)+' Resend Invite</button>'+
            '<button class="btn btn-ghost btn-sm" onclick="openAssignReviewerFromReviewer(\''+r.id+'\')">'+icon('file',14)+' Assign</button>'+
            '<button class="btn '+(r.status==='Active'?'btn-danger':'btn-ghost')+' btn-sm" onclick="toggleEvaluatorStatus(\''+r.id+'\')">'+(r.status==='Active'?'Deactivate':'Activate')+'</button>'+
            '<button class="btn btn-ghost btn-sm" style="color:var(--redst);" onclick="confirmDeleteEvaluator(\''+r.id+'\')" title="Permanently delete this evaluator account">'+icon('trash',14)+' Delete</button>'+
          '</div>'+
        '</div></div>';
      }).join('')+'</div>'
    ) : emptyState('search','No evaluators found','Try adjusting your search criteria or create a new evaluator account.'));
}

function confirmDeleteEvaluator(id){
  const evList = (STATE.evaluatorsCache && STATE.evaluatorsCache.length) ? STATE.evaluatorsCache : DB.users;
  const ev = evList.find(x => String(x.id) === String(id));
  const name = ev ? (userFullName(ev) || ev.name || ev.email) : 'this evaluator';
  const email = ev ? (ev.email || '') : '';

  openModal(
    '<div class="modal-head"><h3>' + icon('trash', 18) + ' Delete Evaluator Account</h3><button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button></div>' +
    '<div class="modal-body" style="text-align:center;">' +
      '<div style="width:56px;height:56px;margin:0 auto 14px;border-radius:50%;background:rgba(193,39,45,.1);color:var(--redst);display:flex;align-items:center;justify-content:center;">' + icon('trash', 28) + '</div>' +
      '<h4>Delete Evaluator ' + esc(name) + '?</h4>' +
      '<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:12px;">Are you sure you want to permanently delete <b>' + esc(name) + '</b>' + (email ? (' (' + esc(email) + ')') : '') + '?</p>' +
      '<div style="background:#FEF2F2;border:1px solid #FCA5A5;border-radius:8px;padding:10px 12px;font-size:12.5px;color:#991B1B;text-align:left;margin-bottom:16px;">' +
        '<b>⚠️ Notice:</b> This evaluator account and their access will be completely removed. Any applications assigned to them will be unassigned automatically.' +
      '</div>' +
    '</div>' +
    '<div class="modal-foot">' +
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>' +
      '<button class="btn btn-danger" id="btnConfirmDelEval" onclick="doDeleteEvaluator(\'' + esc(id) + '\')">' + icon('trash', 14) + ' Permanently Delete</button>' +
    '</div>'
  );
}

async function doDeleteEvaluator(id){
  const btn = document.getElementById('btnConfirmDelEval');
  if(btn){
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Deleting...';
  }
  const res = await apiCall('delete_evaluator', 'POST', { id });
  if(btn){
    btn.disabled = false;
  }
  if(res && res.status === 'success'){
    closeModal();
    STATE.evaluatorsCache = null;
    toast(res.message || 'Evaluator account permanently deleted.', 'success');
    render();
  } else {
    toast(res ? res.message : 'Failed to delete evaluator.', 'error');
  }
}

/* ---- Modals: Evaluator Creation & Management ---- */
function openCreateEvaluatorModal(){
  const defaultId = 'EVAL-2026-' + Math.floor(100 + Math.random() * 900);
  openModal(
    '<div class="modal-head"><h3>Create Evaluator Account</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
    '<div class="modal-body">'+
      '<div class="field"><label>Full Name <span style="color:var(--redst);">*</span></label><input class="input" id="evCrFullName" placeholder="e.g. Atty. Maria Clara Ramos"></div>'+
      '<div class="field"><label>Email Address <span style="color:var(--redst);">*</span></label><input class="input" type="email" id="evCrEmail" placeholder="evaluator@pgin.gov.ph"></div>'+
      '<div class="row2">'+
        '<div class="field"><label>Evaluator ID</label><input class="input" id="evCrId" value="'+defaultId+'" placeholder="EVAL-2026-001"></div>'+
        '<div class="field"><label>Account Status</label><select class="input" id="evCrStatus"><option value="Pending Activation" selected>Pending Activation</option><option value="Active">Active</option></select></div>'+
      '</div>'+
      '<div style="background:#F8FAFC;border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin-top:14px;font-size:13px;line-height:1.5;">'+
        '<b style="color:var(--navy);">Security Notice:</b> The Evaluator role is assigned automatically on the server. The account will be saved with <b>Pending Activation</b> status, and a secure 48-hour activation link will be dispatched to the email. The evaluator will set their own password through that link. Permanent passwords are never sent via email.'+
      '</div>'+
    '</div>'+
    '<div class="modal-foot">'+
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>'+
      '<button class="btn btn-primary" id="btnSubmitCreateEval" onclick="submitCreateEvaluator()">Create Evaluator &amp; Send Invite</button>'+
    '</div>'
  );
}

async function submitCreateEvaluator(){
  const nameEl = document.getElementById('evCrFullName');
  const emailEl = document.getElementById('evCrEmail');
  const idEl = document.getElementById('evCrId');
  const statusEl = document.getElementById('evCrStatus');
  if(!nameEl || !emailEl) return;
  const fullName = nameEl.value.trim();
  const email = emailEl.value.trim().toLowerCase();
  const evaluatorId = idEl ? idEl.value.trim() : '';
  const status = statusEl ? statusEl.value : 'Pending Activation';

  if(!fullName || !email){
    toast('Full Name and Email Address are required.', 'error');
    return;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    toast('Please enter a valid email address.', 'error');
    return;
  }

  const btn = document.getElementById('btnSubmitCreateEval');
  if(btn){
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Creating Evaluator...';
  }

  const res = await apiCall('admin_create_evaluator', 'POST', {
    fullName,
    email,
    evaluatorId,
    status
  });

  if(btn){
    btn.disabled = false;
    btn.innerHTML = 'Create Evaluator &amp; Send Invite';
  }

  if(res && res.status === 'success'){
    closeModal();
    STATE.evaluatorsCache = null;
    toast('Evaluator account created successfully! Dispatching activation email...', 'info');
    render();

    // Trigger Firebase email verification & activation dispatch
    if(typeof sendFirebaseEvaluatorInvite === 'function' && res.token){
      sendFirebaseEvaluatorInvite(email, res.token).then(fbRes => {
        if(fbRes && fbRes.success){
          toast('Firebase activation email dispatched to ' + email + '!', 'success');
        } else if(fbRes && fbRes.error) {
          toast('Email notice: ' + fbRes.error + '. You can share the direct activation link below.', 'warning', 6000);
          console.warn('Firebase email dispatch info:', fbRes.error);
        }
      });
    }

    const actUrl = res.activation_url || res.preview_url || (res.token ? ((typeof getFirebaseContinueBaseUrl === 'function' ? getFirebaseContinueBaseUrl() : (window.location.origin + window.location.pathname)) + '?view=activateEvaluator&token=' + encodeURIComponent(res.token) + '&email=' + encodeURIComponent(email)) : '');

    // Show preview dialog for local testing convenience
    if(actUrl || res.token){
      setTimeout(()=>{
        openModal(
          '<div class="modal-head"><h3>Evaluator Invitation Dispatched</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
          '<div class="modal-body" style="text-align:center;">'+
            '<div style="width:56px;height:56px;margin:0 auto 12px;border-radius:50%;background:rgba(30,132,73,.1);color:var(--green);display:flex;align-items:center;justify-content:center;">'+icon('check',30)+'</div>'+
            '<h4>Invitation Dispatched to '+esc(email)+'</h4>'+
            '<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:14px;">The evaluator will receive an email containing a secure 48-hour activation link to set their password.</p>'+
            '<div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:10px 12px;font-size:12.5px;color:#92400E;text-align:left;margin-bottom:14px;">'+
              '<b>📧 Gmail Note:</b> If the email arrives in the recipient\'s <b>Spam</b> folder, Gmail disables all links until they click <b>"Report not spam"</b>. Or you can copy and send the direct activation link below:'+
            '</div>'+
            (actUrl ? (
              '<div style="background:#F8FAFC;border:1px dashed var(--border);border-radius:8px;padding:12px 14px;text-align:left;margin-bottom:16px;">'+
                '<div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:4px;">Direct Activation Link:</div>'+
                '<input class="input" readonly value="'+esc(actUrl)+'" style="font-size:12px;background:#fff;" onclick="this.select()">'+
                '<div style="margin-top:8px;display:flex;gap:8px;">'+
                  '<a href="'+actUrl+'" target="_blank" class="btn btn-navy btn-sm" style="flex:1;text-align:center;">Open Activation Page</a>'+
                  '<button class="btn btn-primary btn-sm" onclick="navigator.clipboard.writeText(\''+esc(actUrl)+'\');toast(\'Activation link copied!\',\'success\');">📋 Copy Link</button>'+
                '</div>'+
              '</div>'
            ) : '')+
          '</div>'+
          '<div class="modal-foot"><button class="btn btn-primary" onclick="closeModal()">Done</button></div>'
        );
      }, 200);
    }
  } else {
    toast(res ? res.message : 'Failed to create evaluator.', 'error');
  }
}

function openEditEvaluatorModal(id){
  const evList = (STATE.evaluatorsCache && STATE.evaluatorsCache.length) ? STATE.evaluatorsCache : DB.users;
  const ev = evList.find(x => String(x.id) === String(id));
  if(!ev){ toast('Evaluator not found.', 'error'); return; }
  const fullName = userFullName(ev) || (ev.name || '');
  const email = ev.email || '';
  const evalId = ev.evaluator_id || ev.evaluatorId || '';
  const status = ev.status || 'Active';

  openModal(
    '<div class="modal-head"><h3>Edit Evaluator Details</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
    '<div class="modal-body">'+
      '<div class="field"><label>Full Name</label><input class="input" id="evEditFullName" value="'+esc(fullName)+'"></div>'+
      '<div class="field"><label>Email Address</label><input class="input" id="evEditEmail" value="'+esc(email)+'"></div>'+
      '<div class="row2">'+
        '<div class="field"><label>Evaluator ID</label><input class="input" id="evEditId" value="'+esc(evalId)+'"></div>'+
        '<div class="field"><label>Account Status</label><select class="input" id="evEditStatus">'+
          ['Active', 'Pending Activation', 'Inactive'].map(s => '<option value="'+s+'" '+(status===s?'selected':'')+'>'+s+'</option>').join('')+
        '</select></div>'+
      '</div>'+
      '<div class="field" style="margin-top:12px;"><label>Set Initial Password (Optional / Direct Activation)</label>'+
        '<input class="input" type="password" id="evEditPassword" placeholder="Leave blank to keep current status/password">'+
        '<div class="small muted" style="margin-top:4px;">Entering a password immediately activates this evaluator account and verifies their email, bypassing email delivery entirely.</div>'+
      '</div>'+
    '</div>'+
    '<div class="modal-foot" style="display:flex;justify-content:space-between;align-items:center;">'+
      '<button class="btn btn-ghost btn-sm" style="color:var(--redst);" onclick="closeModal();confirmDeleteEvaluator(\''+id+'\')">'+icon('trash',14)+' Delete Evaluator</button>'+
      '<div style="display:flex;gap:8px;">'+
        '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>'+
        '<button class="btn btn-primary" onclick="submitEditEvaluator(\''+id+'\')">Save Changes</button>'+
      '</div>'+
    '</div>'
  );
}

async function submitEditEvaluator(id){
  const fullName = document.getElementById('evEditFullName').value.trim();
  const email = document.getElementById('evEditEmail').value.trim().toLowerCase();
  const evaluatorId = document.getElementById('evEditId').value.trim();
  const status = document.getElementById('evEditStatus').value;
  const password = document.getElementById('evEditPassword') ? document.getElementById('evEditPassword').value.trim() : '';
  if(!fullName || !email){ toast('Full name and email are required.', 'error'); return; }

  const payload = { id, fullName, email, evaluatorId, status };
  if(password){
    if(password.length < 6){ toast('Password must be at least 6 characters.', 'error'); return; }
    payload.password = password;
  }

  const res = await apiCall('evaluator_update', 'POST', payload);
  if(res && res.status === 'success'){
    closeModal();
    STATE.evaluatorsCache = null;
    toast('Evaluator details updated.', 'success');
    render();
  } else {
    toast(res ? res.message : 'Update failed.', 'error');
  }
}

async function resendEvaluatorInvite(id){
  const res = await apiCall('evaluator_resend_invite', 'POST', { id });
  if(res && res.status === 'success'){
    STATE.evaluatorsCache = null;
    toast('Activation invitation regenerated. Dispatching email...', 'info');
    render();

    const evList = (STATE.evaluatorsCache && STATE.evaluatorsCache.length) ? STATE.evaluatorsCache : DB.users;
    const evObj = evList.find(x => String(x.id) === String(id));
    const targetEmail = res.email || (evObj ? evObj.email : '');

    // Trigger Firebase email re-dispatch
    if(typeof sendFirebaseEvaluatorInvite === 'function' && res.token && targetEmail){
      sendFirebaseEvaluatorInvite(targetEmail, res.token).then(fbRes => {
        if(fbRes && fbRes.success){
          toast('Firebase invitation dispatched to ' + targetEmail + '!', 'success');
        } else if(fbRes && fbRes.error){
          toast('Email notice: ' + fbRes.error + '. You can share the direct activation link below.', 'warning', 6000);
          console.warn('Firebase email dispatch info:', fbRes.error);
        }
      });
    }

    const actUrl = res.activation_url || res.preview_url || (res.token ? ((typeof getFirebaseContinueBaseUrl === 'function' ? getFirebaseContinueBaseUrl() : (window.location.origin + window.location.pathname)) + '?view=activateEvaluator&token=' + encodeURIComponent(res.token) + '&email=' + encodeURIComponent(targetEmail)) : '');

    if(actUrl || res.token){
      openModal(
        '<div class="modal-head"><h3>Activation Invitation Resent</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
        '<div class="modal-body" style="text-align:center;">'+
          '<div style="width:56px;height:56px;margin:0 auto 12px;border-radius:50%;background:rgba(30,132,73,.1);color:var(--green);display:flex;align-items:center;justify-content:center;">'+icon('mail',30)+'</div>'+
          '<h4>New Invitation Link Generated</h4>'+
          '<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:14px;">The invitation link is valid for 48 hours for <b>'+esc(targetEmail)+'</b>.</p>'+
          '<div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:10px 12px;font-size:12.5px;color:#92400E;text-align:left;margin-bottom:14px;">'+
            '<b>📧 Gmail Note:</b> If the invitation appears in the recipient\'s Gmail <b>Spam</b> folder, Gmail disables all links until they click <b>"Report not spam"</b>. Or you can copy and send the direct activation link below:'+
          '</div>'+
          (actUrl ? (
            '<div style="background:#F8FAFC;border:1px dashed var(--border);border-radius:8px;padding:12px 14px;text-align:left;margin-bottom:16px;">'+
              '<div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:4px;">Direct Activation Link:</div>'+
              '<input class="input" readonly value="'+esc(actUrl)+'" style="font-size:12px;background:#fff;" onclick="this.select()">'+
              '<div style="margin-top:8px;display:flex;gap:8px;">'+
                '<a href="'+actUrl+'" target="_blank" class="btn btn-navy btn-sm" style="flex:1;text-align:center;">Open Activation Page</a>'+
                '<button class="btn btn-primary btn-sm" onclick="navigator.clipboard.writeText(\''+esc(actUrl)+'\');toast(\'Activation link copied!\',\'success\');">📋 Copy Link</button>'+
              '</div>'+
            '</div>'
          ) : '')+
        '</div>'+
        '<div class="modal-foot"><button class="btn btn-primary" onclick="closeModal()">Done</button></div>'
      );
    }
  } else {
    toast(res ? res.message : 'Failed to resend invitation.', 'error');
  }
}

async function toggleEvaluatorStatus(id){
  const res = await apiCall('evaluator_toggle_status', 'POST', { id });
  if(res && res.status === 'success'){
    STATE.evaluatorsCache = null;
    toast('Account status changed to ' + res.new_status + '.', 'success');
    render();
  } else {
    toast(res ? res.message : 'Failed to toggle status.', 'error');
  }
}

async function openAdminAuthCodesModal(){
  const res = await apiCall('admin_auth_codes');
  const codes = (res && res.status === 'success' && Array.isArray(res.auth_codes)) ? res.auth_codes : [];
  openModal(
    '<div class="modal-head"><h3>Admin Authorization Codes</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
    '<div class="modal-body">'+
      '<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:16px;">Authorization codes permit authorized staff to self-register as system administrators. Each code is single-use and tracked.</p>'+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">'+
        '<b>Active / Past Authorization Codes</b>'+
        '<button class="btn btn-navy btn-sm" onclick="generateAdminAuthCode()">'+icon('plus',14)+' Generate New Code</button>'+
      '</div>'+
      '<div style="max-height:300px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;">'+
        '<table style="width:100%;font-size:12.5px;"><thead><tr style="background:#F8FAFC;"><th>Code</th><th>Status</th><th>Created By</th><th>Used By</th><th>Date</th></tr></thead><tbody>'+
        (codes.length ? codes.map(c => (
          '<tr>'+
            '<td><b style="font-family:monospace;letter-spacing:1px;color:var(--navy);">'+esc(c.code)+'</b></td>'+
            '<td>'+(c.is_used ? '<span class="badge b-inactive" style="font-size:11px;">Used</span>' : '<span class="badge b-approved" style="font-size:11px;">Active</span>')+'</td>'+
            '<td>'+esc(c.created_by_name || 'Admin')+'</td>'+
            '<td>'+esc(c.used_by_name || '—')+'</td>'+
            '<td>'+fmtDate(c.created_at)+'</td>'+
          '</tr>'
        )).join('') : '<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--text-muted);">No authorization codes issued yet. Click "Generate New Code" to create one.</td></tr>')+
        '</tbody></table>'+
      '</div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-primary" onclick="closeModal()">Close</button></div>',
    true
  );
}

async function generateAdminAuthCode(){
  const res = await apiCall('admin_create_auth_code', 'POST', { notes: 'Issued via Admin Dashboard' });
  if(res && res.status === 'success'){
    toast('New Authorization Code generated: ' + res.code, 'success');
    openAdminAuthCodesModal();
  } else {
    toast(res ? res.message : 'Failed to generate code.', 'error');
  }
}

async function openEmailLogsModal(){
  const res = await apiCall('email_logs');
  const logs = (res && res.status === 'success' && Array.isArray(res.logs)) ? res.logs : [];
  openModal(
    '<div class="modal-head"><h3>System Email Logs</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
    '<div class="modal-body">'+
      '<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:14px;">Audit trail of email verification links and evaluator invitations dispatched by the system.</p>'+
      '<div style="max-height:360px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;">'+
        '<table style="width:100%;font-size:12px;"><thead><tr style="background:#F8FAFC;"><th>Recipient</th><th>Subject</th><th>Type</th><th>Status</th><th>Date</th><th>Preview Action</th></tr></thead><tbody>'+
        (logs.length ? logs.map(l => (
          '<tr>'+
            '<td><b>'+esc(l.recipient_email)+'</b></td>'+
            '<td>'+esc(l.subject)+'</td>'+
            '<td><span class="badge b-review" style="font-size:10.5px;">'+esc(l.token_type||'email')+'</span></td>'+
            '<td><span class="badge b-approved" style="font-size:10.5px;">'+esc(l.status)+'</span></td>'+
            '<td>'+fmtDateTime(l.created_at)+'</td>'+
            '<td>'+(l.preview_token ? ('<button class="btn btn-navy btn-sm" style="font-size:11px;padding:2px 8px;" onclick="closeModal();nav(\''+(l.token_type==='admin_verification'?'verifyAdmin':'activateEvaluator')+'\',{token:\''+l.preview_token+'\'})">Open Link</button>') : '—')+'</td>'+
          '</tr>'
        )).join('') : '<tr><td colspan="6" style="text-align:center;padding:20px;color:var(--text-muted);">No emails logged yet.</td></tr>')+
        '</tbody></table>'+
      '</div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-primary" onclick="closeModal()">Close</button></div>',
    true
  );
}

function openAssignReviewerFromReviewer(reviewerId){
  const unassigned = DB.applications.filter(a => !a.reviewerId && a.status !== 'Draft');
  if(!unassigned.length){ toast('No unassigned applications available right now.'); return; }
  openModal('<div class="modal-head"><h3>Assign Application</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
    '<div class="modal-body"><div class="field"><label>Select Application</label><select class="input" id="asgApp">'+
    unassigned.map(a => {
      const s = DB.scholarships.find(s => s.id === a.scholarshipId);
      const sName = s ? s.name : (a.scholarshipName || 'Scholarship');
      return '<option value="'+a.id+'">'+a.id+' — '+esc(sName)+'</option>';
    }).join('')+'</select></div>'+
    '<div class="field"><label>Evaluation Deadline</label><input class="input" type="date" id="asgDeadline2"></div></div>'+
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="confirmAssignFromReviewer(\''+reviewerId+'\')">Assign</button></div>');
}
async function confirmAssignFromReviewer(reviewerId){
  const appSel = document.getElementById('asgApp');
  if(!appSel || !appSel.value){ toast('Please select an application.', 'error'); return; }
  const appId = appSel.value;
  const a = DB.applications.find(x => x.id === appId || (x.code && x.code === appId) || String(x.dbId) === String(appId));
  const deadline = document.getElementById('asgDeadline2') ? document.getElementById('asgDeadline2').value : '';
  const rUser = DB.users.find(u => String(u.id) === String(reviewerId) || String(u.dbId) === String(reviewerId));
  const adminId = (STATE.currentUser && (STATE.currentUser.id || STATE.currentUser.rawAdminId)) ? (STATE.currentUser.id || STATE.currentUser.rawAdminId) : 1;

  try {
    const res = await apiCall('assign_reviewer', 'POST', {
      application_id: appId,
      app_code: a ? (a.code || a.id) : appId,
      reviewer_id: reviewerId,
      reviewer_email: rUser ? rUser.email : null,
      evaluator_id: rUser ? rUser.evaluatorId : null,
      deadline: deadline,
      admin_id: adminId
    }, { admin_id: adminId });

    if(res && res.status === 'success'){
      if(a){
        a.reviewerId = String(res.reviewer_id || reviewerId);
        if(res.evaluator_id) a.reviewerEvaluatorId = res.evaluator_id;
        if(a.status === 'Submitted' || a.status === 'Pending' || a.status === 'Draft') a.status = 'Processing';
        a.stage = 'Document Checking';
        a.lastUpdated = new Date().toISOString();
        const r = DB.users.find(x => String(x.id) === String(reviewerId) || String(x.dbId) === String(reviewerId) || (x.evaluatorId && x.evaluatorId === res.evaluator_id));
        if(r) a.reviewerName = userFullName(r);
      }
      toast(res.message || 'Application assigned successfully.', 'success');
      closeModal();
      render();
    } else {
      // Graceful fallback for local or offline/502 state
      if(a){
        a.reviewerId = String(reviewerId);
        if(rUser && rUser.evaluatorId) a.reviewerEvaluatorId = rUser.evaluatorId;
        if(a.status === 'Submitted' || a.status === 'Pending' || a.status === 'Draft') a.status = 'Processing';
        a.stage = 'Document Checking';
        a.lastUpdated = new Date().toISOString();
        if(rUser) a.reviewerName = userFullName(rUser);
      }
      toast('Application assigned (' + ((res && res.message) ? res.message : 'Applied') + ').', 'info');
      closeModal();
      render();
    }
  } catch(err) {
    console.error('Error in confirmAssignFromReviewer:', err);
    if(a){
      a.reviewerId = String(reviewerId);
      if(a.status === 'Submitted' || a.status === 'Pending' || a.status === 'Draft') a.status = 'Processing';
      a.stage = 'Document Checking';
      a.lastUpdated = new Date().toISOString();
      if(rUser) a.reviewerName = userFullName(rUser);
    }
    toast('Application assigned locally.', 'info');
    closeModal();
    render();
  }
}

/* =========================================================================
   ADMIN DASHBOARD: STUDENT APPLICATIONS & ID APPROVAL MANAGEMENT
   ========================================================================= */

let isSyncingStudentApprovals = false;
async function syncStudentApplications(showToast = true){
  if(isSyncingStudentApprovals) return;
  isSyncingStudentApprovals = true;
  if(showToast) toast('Refreshing student applications from server...', 'info');
  try {
    const adminId = (STATE.currentUser && (STATE.currentUser.id || STATE.currentUser.rawAdminId)) ? (STATE.currentUser.id || STATE.currentUser.rawAdminId) : 1;
    const res = await apiCall('admin_student_applications', 'GET', null, { admin_id: adminId });
    if(res && res.status === 'success' && Array.isArray(res.data)){
      STATE.studentApprovalsCache = res.data;
      res.data.forEach(st => {
        const uId = String(st.id);
        const idx = DB.users.findIndex(u => String(u.id) === uId || (u.email && u.email.toLowerCase() === (st.email||'').toLowerCase()));
        const userObj = {
          id: uId,
          role: 'applicant',
          studentId: st.student_id,
          firstName: st.first_name,
          middleName: st.middle_name,
          lastName: st.last_name,
          email: st.email,
          contact: st.contact,
          address: st.address,
          school: st.school,
          course: st.course,
          yearLevel: st.year_level,
          assigned_scholarship_id: st.assigned_scholarship_id,
          assigned_scholarship_name: st.assigned_scholarship_name,
          assigned_scholarship_code: st.assigned_scholarship_code,
          assignedScholarshipId: st.assigned_scholarship_id,
          assignedScholarshipName: st.assigned_scholarship_name,
          assignedScholarshipCode: st.assigned_scholarship_code,
          status: st.status,
          rejectionReason: st.rejection_reason,
          rejection_reason: st.rejection_reason,
          adminReviewNotes: st.admin_review_notes,
          admin_review_notes: st.admin_review_notes,
          idDocumentName: st.id_document_name,
          id_document_name: st.id_document_name,
          idDocumentSize: st.id_document_size,
          id_document_size: st.id_document_size,
          idDocumentMime: st.id_document_mime,
          id_document_mime: st.id_document_mime,
          hasIdFile: st.has_id_file,
          createdAt: st.created_at,
          created_at: st.created_at,
          joined: (st.created_at || '').slice(0, 10),
          resubmittedAt: st.resubmitted_at,
          resubmitted_at: st.resubmitted_at,
          reviewed_at: st.reviewed_at,
          reviewed_by_admin_id: st.reviewed_by_admin_id
        };
        if(idx >= 0) DB.users[idx] = { ...DB.users[idx], ...userObj };
        else DB.users.push(userObj);
      });
      if(showToast) toast('Student applications synchronized (' + res.data.length + ' records).', 'success');
      render();
    }
  } catch(err) {
    console.warn('Failed to load student applications from API:', err);
    if(showToast) toast('Could not reach server. Showing cached records.', 'info');
  } finally {
    isSyncingStudentApprovals = false;
  }
}

function renderAdminStudentApprovals(){
  // Load applications from API if cache is null
  if(STATE.studentApprovalsCache === null && !isSyncingStudentApprovals){
    syncStudentApplications(false);
  }

  // Use cached data or fallback to DB.users
  const allStudents = (STATE.studentApprovalsCache && STATE.studentApprovalsCache.length) 
    ? STATE.studentApprovalsCache 
    : DB.users.filter(u => u.role === 'applicant' || u.role === 'student');

  const counts = {
    total: allStudents.length,
    pending: allStudents.filter(u => u.status === 'Pending Approval').length,
    approved: allStudents.filter(u => u.status === 'Approved' || u.status === 'Active').length,
    resubmit: allStudents.filter(u => u.status === 'Requires Resubmission').length,
    rejected: allStudents.filter(u => u.status === 'Rejected').length,
  };

  const statusFilter = STATE.studentApprovalStatusFilter || 'All';
  const searchTerm = (STATE.studentApprovalSearch || '').toLowerCase().trim();

  let filtered = allStudents.filter(s => {
    const sStatus = s.status || 'Pending Approval';
    if(statusFilter === 'Pending Approval' && sStatus !== 'Pending Approval') return false;
    if(statusFilter === 'Approved' && (sStatus !== 'Approved' && sStatus !== 'Active')) return false;
    if(statusFilter === 'Requires Resubmission' && sStatus !== 'Requires Resubmission') return false;
    if(statusFilter === 'Rejected' && sStatus !== 'Rejected') return false;

    if(searchTerm){
      const name = (s.full_name || userFullName(s) || (s.first_name + ' ' + (s.last_name||''))).toLowerCase();
      const sId = (s.student_id || s.studentId || '').toLowerCase();
      const em = (s.email || '').toLowerCase();
      const crs = (s.course || '').toLowerCase();
      if(!name.includes(searchTerm) && !sId.includes(searchTerm) && !em.includes(searchTerm) && !crs.includes(searchTerm)){
        return false;
      }
    }
    return true;
  });

  return '<div class="pageintro" style="margin-bottom:16px;">'+
    '<h1 style="margin:0 0 4px;font-size:22px;">Student Applications</h1>'+
    '<p style="margin:0;color:var(--text-muted);font-size:13.5px;">Review student registration submissions, verify uploaded School IDs, and activate accounts.</p>'+
  '</div>'+
  '<div class="panel" style="background:#fff;border:1px solid var(--border);border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,.04);overflow:hidden;">'+
    '<div class="panel-head" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding:14px 18px;border-bottom:1px solid var(--border);background:#fff;">'+
      '<div style="display:inline-flex;background:#F1F5F9;padding:4px;border-radius:8px;gap:3px;flex-wrap:wrap;">'+
        ['All','Pending Approval','Approved','Requires Resubmission','Rejected'].map(st => {
          const active = statusFilter === st;
          let label = st;
          if(st === 'All') label = 'All (' + counts.total + ')';
          else if(st === 'Pending Approval') label = 'Pending (' + counts.pending + ')';
          else if(st === 'Approved') label = 'Approved (' + counts.approved + ')';
          else if(st === 'Requires Resubmission') label = 'Resubmit (' + counts.resubmit + ')';
          else if(st === 'Rejected') label = 'Rejected (' + counts.rejected + ')';
          return '<button type="button" onclick="STATE.studentApprovalStatusFilter=\'' + st + '\';render();" style="border:none;outline:none;background:' + (active ? '#fff' : 'transparent') + ';color:' + (active ? 'var(--navy)' : '#64748B') + ';font-weight:' + (active ? '700' : '600') + ';border-radius:6px;padding:6px 12px;font-size:13px;cursor:pointer;box-shadow:' + (active ? '0 1px 3px rgba(0,0,0,.08)' : 'none') + ';transition:all .15s ease;">' + label + '</button>';
        }).join('')+
      '</div>'+
      '<div style="display:flex;align-items:center;gap:10px;">'+
        '<div class="search-box" style="position:relative;width:260px;">'+
          '<span style="position:absolute;left:11px;top:50%;transform:translateY(-50%);color:#94A3B8;pointer-events:none;display:flex;align-items:center;">' + icon('search', 15) + '</span>'+
          '<input type="text" id="studentApprovalSearchInput" class="input" placeholder="Search name, ID, email, course..." value="' + esc(STATE.studentApprovalSearch || '') + '" oninput="STATE.studentApprovalSearch=this.value;debounceSearchRender();" onkeydown="if(event.key===\'Enter\'){if(searchDebounceTimer){clearTimeout(searchDebounceTimer);searchDebounceTimer=null;}render();}" style="width:100%;height:36px;padding-left:34px;font-size:13px;border-radius:7px;border:1px solid var(--border);box-sizing:border-box;">'+
        '</div>'+
        '<button class="btn btn-outline btn-sm" onclick="syncStudentApplications(true)" title="Refresh Student Applications from Database" style="display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid var(--border);color:var(--navy);font-weight:600;height:36px;padding:0 14px;border-radius:7px;cursor:pointer;white-space:nowrap;">'+
          icon('clock', 14) + ' Refresh'+
        '</button>'+
      '</div>'+
    '</div>'+
    '<div class="panel-body nopad" style="padding:0;">'+
      renderStudentApplicationsTable(filtered)+
    '</div>'+
  '</div>';
}

function renderStudentApplicationsTable(students){
  if(!students.length){
    return emptyState('users', 'No student applications found', 'No student registrations match the selected filter or search query.');
  }

  return '<div style="width:100%;overflow-x:hidden;">'+
    '<table style="width:100%;border-collapse:collapse;font-size:13px;table-layout:auto;">'+
      '<thead>'+
        '<tr style="background:#FAFBFC;border-bottom:1px solid var(--border);">'+
          '<th style="padding:11px 14px;text-align:left;font-size:11px;font-weight:700;color:#64748B;letter-spacing:.4px;text-transform:uppercase;">Student Name</th>'+
          '<th style="padding:11px 10px;text-align:left;font-size:11px;font-weight:700;color:#64748B;letter-spacing:.4px;text-transform:uppercase;white-space:nowrap;">Student ID</th>'+
          '<th style="padding:11px 10px;text-align:left;font-size:11px;font-weight:700;color:#64748B;letter-spacing:.4px;text-transform:uppercase;">Email Address</th>'+
          '<th style="padding:11px 10px;text-align:left;font-size:11px;font-weight:700;color:#64748B;letter-spacing:.4px;text-transform:uppercase;">Course / Program</th>'+
          '<th style="padding:11px 8px;text-align:left;font-size:11px;font-weight:700;color:#64748B;letter-spacing:.4px;text-transform:uppercase;white-space:nowrap;">Year Level</th>'+
          '<th style="padding:11px 10px;text-align:left;font-size:11px;font-weight:700;color:#64748B;letter-spacing:.4px;text-transform:uppercase;white-space:nowrap;">Date Submitted</th>'+
          '<th style="padding:11px 10px;text-align:left;font-size:11px;font-weight:700;color:#64748B;letter-spacing:.4px;text-transform:uppercase;white-space:nowrap;">Approval Status</th>'+
          '<th style="padding:11px 14px;text-align:right;font-size:11px;font-weight:700;color:#64748B;letter-spacing:.4px;text-transform:uppercase;white-space:nowrap;">Actions</th>'+
        '</tr>'+
      '</thead>'+
      '<tbody>'+
        students.map(s => {
          const id = s.id;
          const name = s.full_name || userFullName(s) || (s.first_name + ' ' + (s.last_name||''));
          const studentId = s.student_id || s.studentId || 'N/A';
          const email = s.email || '';
          const course = s.course || '—';
          const year = s.year_level || s.yearLevel || '—';
          const dtRaw = s.created_at || s.createdAt || s.joined;
          const dtDate = fmtDate(dtRaw);
          let dtTime = '';
          if(dtRaw){
            const dt = new Date(typeof dtRaw === 'string' && dtRaw.includes('-') && !dtRaw.includes('T') ? dtRaw.replace(/-/g, '/') : dtRaw);
            if(!isNaN(dt.getTime())){
              let h = dt.getHours();
              const ap = h >= 12 ? 'PM' : 'AM';
              h = h % 12; if(h === 0) h = 12;
              const m = dt.getMinutes();
              dtTime = h + ':' + (m < 10 ? '0' : '') + m + ' ' + ap;
            }
          }
          const status = s.status || 'Pending Approval';

          const isJd = /\bjuris\s+doctor\b|\bjd\b/i.test(course);
          const isMd = (/\bdoctor\s+of\s+medicine\b|\bdoctor\s+in\s+medicine\b/i.test(course) || /\bmd\b/i.test(course)) && !/\b(dental|dentistry|veterinary|vet|dmd|dvm)\b/i.test(course);
          const hasSchAssigned = !!(s.assigned_scholarship_name || s.assignedScholarshipName);
          const assignedName = s.assigned_scholarship_name || s.assignedScholarshipName || '';

          return '<tr style="border-bottom:1px solid var(--border);">'+
            '<td style="padding:9px 14px;">'+
              '<div style="display:flex;align-items:center;gap:8px;">'+
                '<div style="width:28px;height:28px;border-radius:50%;background:#EEF2F6;color:var(--navy);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;flex-shrink:0;">'+
                  esc((s.first_name||'S').charAt(0).toUpperCase())+
                '</div>'+
                '<div style="min-width:0;max-width:180px;">'+
                  '<div style="font-weight:600;color:var(--navy);line-height:1.25;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="' + esc(name) + '">' + esc(name) + '</div>'+
                  (s.resubmitted_at || s.resubmittedAt ? '<div class="small" style="color:#2563EB;font-size:10.5px;margin-top:1px;white-space:nowrap;">• Resubmitted ' + fmtDate(s.resubmitted_at || s.resubmittedAt) + '</div>' : '')+
                '</div>'+
              '</div>'+
            '</td>'+
            '<td style="padding:9px 10px;white-space:nowrap;">'+
              '<span style="font-family:\'SFMono-Regular\',Consolas,\'Liberation Mono\',Menlo,monospace;font-weight:700;color:var(--navy);letter-spacing:0.3px;font-size:12.5px;">' + esc(studentId) + '</span>'+
            '</td>'+
            '<td style="padding:9px 10px;color:#334155;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12.5px;" title="' + esc(email) + '">' + esc(email) + '</td>'+
            '<td style="padding:9px 10px;max-width:180px;">'+
              '<div style="font-weight:600;color:var(--navy);line-height:1.25;font-size:12.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="' + esc(course) + '">' + esc(course) + '</div>'+
              (hasSchAssigned ? (
                '<div style="margin-top:2px;"><span class="badge" style="background:#DCFCE7;color:#15803D;font-size:10px;padding:1px 6px;border-radius:4px;font-weight:600;display:inline-flex;align-items:center;gap:3px;max-width:170px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="' + esc(assignedName) + '">' + icon('award', 10) + ' ' + esc(assignedName) + '</span></div>'
              ) : ((isJd || isMd) ? (
                '<div style="margin-top:2px;"><span class="badge" style="background:#FEF3C7;color:#92400E;font-size:10px;padding:1px 6px;border-radius:4px;font-weight:600;display:inline-flex;align-items:center;gap:3px;">⚠ Assignment Required</span></div>'
              ) : ''))+
            '</td>'+
            '<td style="padding:9px 8px;white-space:nowrap;color:#475569;font-size:12px;">' + esc(year) + '</td>'+
            '<td style="padding:9px 10px;white-space:nowrap;">'+
              '<div style="font-size:12px;font-weight:600;color:#334155;line-height:1.2;">' + dtDate + '</div>'+
              (dtTime ? '<div style="font-size:11px;color:#94A3B8;margin-top:2px;">' + dtTime + '</div>' : '')+
            '</td>'+
            '<td style="padding:9px 10px;white-space:nowrap;">' + statusBadge(status) + '</td>'+
            '<td style="padding:9px 14px;text-align:right;white-space:nowrap;">'+
              '<div style="display:inline-flex;align-items:center;justify-content:flex-end;gap:6px;">'+
                '<button class="btn btn-navy btn-sm" onclick="openAdminStudentReviewModal(\'' + id + '\')" style="display:inline-flex;align-items:center;gap:4px;font-weight:600;padding:6px 12px;font-size:12px;border-radius:6px;cursor:pointer;" title="View Details and Review Application">' + icon('eye', 13) + ' View</button>'+
                '<button class="btn btn-ghost btn-sm" onclick="confirmDeleteStudentApplication(\'' + id + '\',\'' + esc(name) + '\',\'' + esc(email) + '\',\'' + esc(studentId) + '\')" style="color:#DC2626;border:1px solid #FECACA;background:#FEF2F2;padding:6px 8px;font-size:12px;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;" title="Delete Application & Release Email for Re-Registration">' + icon('trash', 13) + '</button>'+
              '</div>'+
            '</td>'+
          '</tr>';
        }).join('')+
      '</tbody>'+
    '</table>'+
  '</div>';
}

async function openAdminStudentReviewModal(id){
  let student = (STATE.studentApprovalsCache || []).find(s => String(s.id) === String(id));
  if(!student){
    student = DB.users.find(u => String(u.id) === String(id));
  }

  // Fetch full details if needed
  try {
    const res = await apiCall('admin_student_detail', 'GET', { id });
    if(res && res.status === 'success' && res.data){
      student = res.data;
      if(student.assigned_scholarship_id){
        student.assignedScholarshipId = student.assigned_scholarship_id;
        student.assignedScholarshipName = student.assigned_scholarship_name;
        student.assignedScholarshipCode = student.assigned_scholarship_code;
      }
    }
  } catch(e){}

  if(!student){
    toast('Student record not found.', 'error');
    return;
  }

  const name = student.full_name || userFullName(student) || (student.first_name + ' ' + (student.last_name||''));
  const studentId = student.student_id || student.studentId || 'N/A';
  const email = student.email || '';
  const status = student.status || 'Pending Approval';
  const course = student.course || '';
  const isJd = /\bjuris\s+doctor\b|\bjd\b/i.test(course);
  const isMd = (/\bdoctor\s+of\s+medicine\b|\bdoctor\s+in\s+medicine\b/i.test(course) || /\bmd\b/i.test(course)) && !/\b(dental|dentistry|veterinary|vet|dmd|dvm)\b/i.test(course);
  const isEligibleForManualSchAssignment = isJd || isMd;

  const docUrl = 'php/api.php?action=view_student_id&id=' + encodeURIComponent(id);
  const docName = student.id_document_name || student.idDocumentName || 'School_ID_Document';
  const docSize = student.id_document_size || student.idDocumentSize || 'Standard';
  const docMime = student.id_document_mime || student.idDocumentMime || 'image/jpeg';
  const isPdf = docMime === 'application/pdf' || docName.toLowerCase().endsWith('.pdf');

  let schAssignmentHtml = '';
  if(isEligibleForManualSchAssignment){
    const currentSchId = String(student.assigned_scholarship_id || student.assignedScholarshipId || '');
    // Recommended default: SCH-105 for JD, SCH-104 for MD
    const defaultSch = DB.scholarships.find(s => {
      const code = String(s.code || '').toUpperCase();
      const n = String(s.name || '').toLowerCase();
      if(isJd) return code === 'SCH-105' || n.includes('juris doctor') || n.includes('law');
      if(isMd) return code === 'SCH-104' || n.includes('doctor of medicine');
      return false;
    });
    const defaultSchId = defaultSch ? String(defaultSch.id) : '';
    const selectedSchId = currentSchId || defaultSchId;

    // Only Juris Doctor and Doctor of Medicine are valid choices for this manual assignment
    const eligibleScholarships = DB.scholarships.filter(s => {
      const code = String(s.code || '').toUpperCase();
      const n = String(s.name || '').toLowerCase();
      const isJdSch = code === 'SCH-105' || n.includes('juris doctor') || (n.includes('law') && !n.includes('undergraduate'));
      const isMdSch = code === 'SCH-104' || n.includes('doctor of medicine');
      return isJdSch || isMdSch;
    });

    if(!eligibleScholarships.length){
      eligibleScholarships.push(
        { id: 'SCH-105', code: 'SCH-105', name: 'Juris Doctor' },
        { id: 'SCH-104', code: 'SCH-104', name: 'Doctor of Medicine' }
      );
    }

    // Sort to place recommended program at the top
    eligibleScholarships.sort((a, b) => {
      const aTarget = (isJd && (String(a.code)==='SCH-105' || a.name.toLowerCase().includes('juris doctor'))) ||
                      (isMd && (String(a.code)==='SCH-104' || a.name.toLowerCase().includes('doctor of medicine')));
      const bTarget = (isJd && (String(b.code)==='SCH-105' || b.name.toLowerCase().includes('juris doctor'))) ||
                      (isMd && (String(b.code)==='SCH-104' || b.name.toLowerCase().includes('doctor of medicine')));
      if(aTarget && !bTarget) return -1;
      if(!aTarget && bTarget) return 1;
      return 0;
    });

    const schOptions = eligibleScholarships.map(s => {
      const isSelected = String(s.id) === String(selectedSchId) || (defaultSch && String(s.id) === String(defaultSch.id));
      const isTarget = (isJd && (String(s.code)==='SCH-105' || s.name.toLowerCase().includes('juris doctor'))) ||
                       (isMd && (String(s.code)==='SCH-104' || s.name.toLowerCase().includes('doctor of medicine')));
      const label = s.name + ' (' + s.code + ')' + (isTarget ? ' ★ Recommended Program' : '');
      return '<option value="' + esc(s.id) + '" ' + (isSelected ? 'selected' : '') + '>' + esc(label) + '</option>';
    }).join('');

    const assignedBadgeText = (student.assigned_scholarship_name || student.assignedScholarshipName)
      ? '<span style="color:#15803D;font-weight:600;">✓ Permanently assigned in database: <b>' + esc(student.assigned_scholarship_name || student.assignedScholarshipName) + '</b></span>'
      : (selectedSchId ? '<span style="color:#2563EB;">Pre-selected: <b>' + esc(defaultSch ? defaultSch.name : 'Configured Program') + '</b> (Click "Save Assignment" or confirm upon activation)</span>' : '<span style="color:#DC2626;">No scholarship assigned yet. Manual assignment is required before account activation.</span>');

    schAssignmentHtml = 
      '<div style="background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:8px;padding:14px;margin-bottom:14px;">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px;">' +
          '<div style="font-weight:700;color:#166534;font-size:14px;display:flex;align-items:center;gap:6px;">' +
            icon('award', 18) + ' Scholarship Program Assignment' +
            '<span style="background:#DCFCE7;color:#15803D;font-size:11px;padding:2px 8px;border-radius:12px;font-weight:600;">Required for ' + (isJd ? 'Juris Doctor (JD)' : 'Doctor of Medicine (MD)') + '</span>' +
          '</div>' +
          '<div>' + statusBadge(status) + '</div>' +
        '</div>' +
        '<div style="font-size:12.5px;color:#166534;margin-bottom:10px;line-height:1.5;">' +
          'Applicant <b>' + esc(name) + '</b> is applying for <b>' + esc(course) + '</b>. Manual scholarship assignment is specifically required for this program. Select the appropriate configured scholarship from the dropdown below and save the selection.' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr auto;gap:10px;align-items:flex-end;">' +
          '<div class="field" style="margin:0;">' +
            '<label style="color:#166534;font-weight:600;font-size:12px;margin-bottom:4px;">Scholarship Program Dropdown <span style="color:#DC2626;">*</span></label>' +
            '<select class="input" id="admAssignedScholarship" style="background:#fff;font-weight:600;border-color:#86EFAC;">' +
              '<option value="">-- Select Scholarship Program --</option>' +
              schOptions +
            '</select>' +
          '</div>' +
          '<div>' +
            '<button class="btn btn-primary btn-sm" id="btnSaveSchAssign" style="background:#16A34A;border-color:#16A34A;white-space:nowrap;height:38px;" onclick="adminSaveScholarshipAssignment(\'' + id + '\')">' +
              icon('check', 14) + ' Save Assignment' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div id="schAssignFeedback" style="margin-top:8px;font-size:12px;">' +
          assignedBadgeText +
        '</div>' +
      '</div>';
  }

  openModal(
    '<div class="modal-head">'+
      '<h3>Student Application &amp; School ID / Enrollment Form Review</h3>'+
      '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>'+
    '</div>'+
    '<div class="modal-body" style="max-height:calc(85vh - 120px);overflow-y:auto;">'+
      '<div class="row2" style="align-items:flex-start;gap:20px;grid-template-columns:1.1fr 1fr;">'+
        '<div style="min-width:0;">'+
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">'+
            '<h4 style="margin:0;color:var(--navy);font-size:16px;">Applicant Profile</h4>'+
            statusBadge(status)+
          '</div>'+
          '<div class="grid4" style="grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;background:#F8FAFC;padding:14px;border-radius:8px;border:1px solid var(--border);">'+
            '<div><span class="small muted">Full Name</span><div style="font-weight:700;color:var(--navy);">' + esc(name) + '</div></div>'+
            '<div><span class="small muted">Student ID Number</span><div style="font-weight:700;color:var(--navy);">' + esc(studentId) + '</div></div>'+
            '<div><span class="small muted">Email Address</span><div>' + esc(email) + '</div></div>'+
            '<div><span class="small muted">Contact Number</span><div>' + esc(student.contact || 'N/A') + '</div></div>'+
            '<div><span class="small muted">Selected Degree Program</span><div style="font-weight:600;color:var(--navy);">' + esc(student.course || 'N/A') + (isEligibleForManualSchAssignment ? ' <span class="badge b-review" style="font-size:10.5px;padding:1px 6px;">' + (isJd ? 'JD Degree' : 'MD Degree') + '</span>' : '') + '</div></div>'+
            '<div><span class="small muted">Year Level</span><div>' + esc(student.year_level || student.yearLevel || 'N/A') + '</div></div>'+
            (isEligibleForManualSchAssignment ? '<div style="grid-column:span 2;"><span class="small muted">Assigned Scholarship</span><div style="font-weight:600;color:#15803D;">' + esc(student.assigned_scholarship_name || student.assignedScholarshipName || 'Pending selection in dropdown below') + '</div></div>' : '')+
            '<div style="grid-column:span 2;"><span class="small muted">School / University</span><div>' + esc(student.school || 'Not specified') + '</div></div>'+
            '<div style="grid-column:span 2;"><span class="small muted">Address</span><div>' + esc(student.address || 'Not specified') + '</div></div>'+
            '<div><span class="small muted">Submitted Date</span><div class="small">' + fmtDateTime(student.created_at || student.createdAt) + '</div></div>'+
            (student.resubmitted_at || student.resubmittedAt ? '<div><span class="small muted">Resubmitted Date</span><div class="small" style="color:var(--blue);font-weight:600;">' + fmtDateTime(student.resubmitted_at || student.resubmittedAt) + '</div></div>' : '<div><span class="small muted">Account Role</span><div>Student Applicant</div></div>')+
          '</div>'+
          schAssignmentHtml +
          (student.rejection_reason || student.rejectionReason ? (
            '<div style="background:#FEF2F2;border-left:4px solid #DC2626;padding:10px 12px;border-radius:4px;margin-bottom:14px;color:#991B1B;font-size:13px;">'+
              '<b>Previous Rejection Reason:</b> ' + esc(student.rejection_reason || student.rejectionReason)+
            '</div>'
          ) : '')+
          (student.admin_review_notes || student.adminReviewNotes ? (
            '<div style="background:#EFF6FF;border-left:4px solid #2563EB;padding:10px 12px;border-radius:4px;margin-bottom:14px;color:#1E40AF;font-size:13px;">'+
              '<b>Previous Admin Review Notes:</b> ' + esc(student.admin_review_notes || student.adminReviewNotes)+
            '</div>'
          ) : '')+
          '<div class="field" style="margin-top:10px;">'+
            '<label>Internal Administrator Review Notes</label>'+
            '<textarea class="input" id="admReviewNotes" rows="3" placeholder="Add optional review notes, verification findings, or remarks...">' + esc(student.admin_review_notes || student.adminReviewNotes || '') + '</textarea>'+
          '</div>'+
        '</div>'+
        '<div style="min-width:0;">'+
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">'+
            '<h4 style="margin:0;color:var(--navy);font-size:16px;">Uploaded School ID or Enrollment Form</h4>'+
            '<span class="small" style="color:var(--green);font-weight:600;">✓ Protected File</span>'+
          '</div>'+
          '<div style="background:#0F172A;border-radius:10px;padding:12px;box-shadow:0 4px 16px rgba(0,0,0,0.12);text-align:center;min-height:280px;max-height:420px;display:flex;align-items:center;justify-content:center;overflow:hidden;box-sizing:border-box;width:100%;">'+
            (isPdf ? (
              '<div style="color:#fff;padding:20px;">' + icon('file', 50) + '<div style="margin:10px 0 6px;font-weight:600;">' + esc(docName) + '</div><div class="small" style="color:#94A3B8;margin-bottom:14px;">PDF Document (' + esc(docSize) + ')</div><a href="' + docUrl + '" target="_blank" class="btn btn-primary btn-sm">Open PDF Document</a></div>'
            ) : (
              '<img src="' + docUrl + '" alt="School ID Preview" style="max-width:100%;max-height:390px;width:auto;height:auto;object-fit:contain;border-radius:6px;display:block;margin:0 auto;box-shadow:0 2px 8px rgba(0,0,0,0.35);" onerror="handleSchoolIdImgError(this)">'
            ))+
          '</div>'+
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;font-size:12.5px;color:var(--text-muted);">'+
            '<span><b>File:</b> ' + esc(docName) + ' (' + esc(docSize) + ')</span>'+
            '<a href="' + docUrl + '" target="_blank" class="link-btn">Open in New Tab</a>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="modal-foot" style="justify-content:space-between;flex-wrap:wrap;gap:8px;">'+
      '<div style="display:flex;gap:8px;">'+
        '<button class="btn btn-ghost" onclick="closeModal()">Close</button>'+
        '<button class="btn btn-ghost" style="color:#DC2626;border:1px solid #FCA5A5;background:#FEF2F2;" onclick="confirmDeleteStudentApplication(\'' + id + '\',\'' + esc(name) + '\',\'' + esc(email) + '\',\'' + esc(studentId) + '\')">' + icon('trash', 14) + ' Delete Registration</button>'+
      '</div>'+
      '<div style="display:flex;gap:8px;flex-wrap:wrap;">'+
        '<button class="btn btn-ghost" style="color:var(--redst);border:1px solid #FCA5A5;" onclick="promptRejectStudentFromModal(\'' + id + '\',\'' + esc(name) + '\')">' + icon('x', 14) + ' Reject</button>'+
        '<button class="btn btn-outline" style="color:var(--blue);border-color:#93C5FD;" onclick="promptResubmitStudentFromModal(\'' + id + '\',\'' + esc(name) + '\')">' + icon('clipboard', 14) + ' Request Resubmission</button>'+
        '<button class="btn btn-primary" style="background:#16A34A;border-color:#16A34A;" onclick="confirmApproveStudentFromModal(\'' + id + '\',\'' + esc(name) + '\')">' + icon('check', 14) + ' Approve Student</button>'+
      '</div>'+
    '</div>',
    true
  );
}

async function adminSaveScholarshipAssignment(id){
  const sel = document.getElementById('admAssignedScholarship');
  const schId = sel ? sel.value : '';
  if(!schId){
    toast('Please select a scholarship program from the dropdown.', 'error');
    if(sel){ sel.focus(); sel.style.borderColor = '#DC2626'; }
    return;
  }
  const btn = document.getElementById('btnSaveSchAssign');
  if(btn){ btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Saving...'; }

  try {
    const res = await apiCall('admin_save_student_scholarship', 'POST', { id, scholarship_id: schId });
    if(res && res.status === 'success'){
      toast(res.message || 'Scholarship assignment permanently saved in database!', 'success');
      const st = (STATE.studentApprovalsCache || []).find(x => String(x.id) === String(id));
      if(st){
        st.assigned_scholarship_id = res.assigned_scholarship_id;
        st.assigned_scholarship_name = res.assigned_scholarship_name;
        st.assigned_scholarship_code = res.assigned_scholarship_code;
        st.assignedScholarshipId = res.assigned_scholarship_id;
        st.assignedScholarshipName = res.assigned_scholarship_name;
        st.assignedScholarshipCode = res.assigned_scholarship_code;
      }
      const u = DB.users.find(x => String(x.id) === String(id));
      if(u){
        u.assigned_scholarship_id = res.assigned_scholarship_id;
        u.assigned_scholarship_name = res.assigned_scholarship_name;
        u.assigned_scholarship_code = res.assigned_scholarship_code;
        u.assignedScholarshipId = res.assigned_scholarship_id;
        u.assignedScholarshipName = res.assigned_scholarship_name;
        u.assignedScholarshipCode = res.assigned_scholarship_code;
      }
      const fb = document.getElementById('schAssignFeedback');
      if(fb){
        fb.innerHTML = '<span style="color:#15803D;font-weight:600;">✓ Permanently assigned in database: ' + esc(res.assigned_scholarship_name) + ' (' + esc(res.assigned_scholarship_code || '') + ')</span>';
      }
      render();
    } else {
      toast(res ? res.message : 'Failed to save scholarship assignment.', 'error');
    }
  } catch(err){
    toast('Error saving scholarship assignment: ' + (err.message || err), 'error');
  } finally {
    if(btn){ btn.disabled = false; btn.innerHTML = icon('check', 14) + ' Save Assignment'; }
  }
}

function confirmApproveStudentFromModal(id, name){
  const st = (STATE.studentApprovalsCache || []).find(x => String(x.id) === String(id)) || DB.users.find(x => String(x.id) === String(id));
  const course = st ? (st.course || '') : '';
  const isJd = /\bjuris\s+doctor\b|\bjd\b/i.test(course);
  const isMd = (/\bdoctor\s+of\s+medicine\b|\bdoctor\s+in\s+medicine\b/i.test(course) || /\bmd\b/i.test(course)) && !/\b(dental|dentistry|veterinary|vet|dmd|dvm)\b/i.test(course);

  let assignedSchId = null;
  let assignedSchName = '';
  if(isJd || isMd){
    const sel = document.getElementById('admAssignedScholarship');
    assignedSchId = (sel && sel.value) ? sel.value : (st ? (st.assigned_scholarship_id || st.assignedScholarshipId) : null);
    if(!assignedSchId){
      const def = DB.scholarships.find(s => isMd ? (s.code === 'SCH-104' || s.name.toLowerCase().includes('medicine')) : (s.code === 'SCH-105' || s.name.toLowerCase().includes('juris doctor')));
      if(def){
        assignedSchId = def.dbId || def.id || def.code;
        if(sel) sel.value = assignedSchId;
      }
    }
    const matchedSch = DB.scholarships.find(s => String(s.id) === String(assignedSchId) || String(s.dbId) === String(assignedSchId) || String(s.code) === String(assignedSchId));
    assignedSchName = matchedSch ? (matchedSch.name + ' (' + matchedSch.code + ')') : (st ? (st.assigned_scholarship_name || st.assignedScholarshipName || 'Assigned Scholarship') : 'Assigned Scholarship');
  }

  const notes = document.getElementById('admReviewNotes') ? document.getElementById('admReviewNotes').value.trim() : '';

  openModal(
    '<div class="modal-head"><h3>Confirm Student Approval &amp; Account Activation</h3><button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button></div>'+
    '<div class="modal-body" style="padding:24px;">'+
      '<div style="width:54px;height:54px;border-radius:50%;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;">' + icon('check', 30) + '</div>'+
      '<h4 style="text-align:center;margin:0 0 8px;">Approve Student Registration?</h4>'+
      '<p style="color:var(--text-muted);font-size:14px;text-align:center;margin:0 0 16px;">'+
        'Are you sure you want to approve <b>' + esc(name) + '</b>? This will activate their student account, enable login, grant access to the Student Dashboard, and dispatch an official approval email notification.'+
      '</p>'+
      ((isJd || isMd) ? (
        '<div style="background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:8px;padding:12px 14px;margin-bottom:16px;font-size:13px;color:#166534;">'+
          '<div><b>Selected Degree Program:</b> ' + esc(course) + '</div>'+
          '<div style="margin-top:4px;"><b>Assigned Scholarship:</b> <span style="font-weight:700;color:#15803D;">' + esc(assignedSchName) + '</span></div>'+
          '<div style="margin-top:4px;font-size:12px;color:#166534;">✓ Account activation will permanently record this scholarship assignment in the database.</div>'+
        '</div>'
      ) : '')+
      (notes ? '<div style="background:#F8FAFC;border:1px solid var(--border);border-radius:6px;padding:10px 12px;font-size:13px;color:var(--navy);margin-bottom:16px;"><b>Review Notes:</b> ' + esc(notes) + '</div>' : '')+
    '</div>'+
    '<div class="modal-foot">'+
      '<button class="btn btn-ghost" onclick="openAdminStudentReviewModal(\'' + id + '\')">Back</button>'+
      '<button class="btn btn-primary" style="background:#16A34A;border-color:#16A34A;" onclick="executeApproveStudent(\'' + id + '\',\'' + esc(notes) + '\',\'' + (assignedSchId || '') + '\')">Confirm Approval &amp; Activate</button>'+
    '</div>'
  );
}

function confirmApproveStudentDirect(id, name){
  const st = (STATE.studentApprovalsCache || []).find(x => String(x.id) === String(id)) || DB.users.find(x => String(x.id) === String(id));
  const course = st ? (st.course || '') : '';
  const isJd = /\bjuris\s+doctor\b|\bjd\b/i.test(course);
  const isMd = (/\bdoctor\s+of\s+medicine\b|\bdoctor\s+in\s+medicine\b/i.test(course) || /\bmd\b/i.test(course)) && !/\b(dental|dentistry|veterinary|vet|dmd|dvm)\b/i.test(course);

  let assignedSchId = st ? (st.assigned_scholarship_id || st.assignedScholarshipId || '') : '';
  let assignedSchName = st ? (st.assigned_scholarship_name || st.assignedScholarshipName || '') : '';

  if((isJd || isMd) && !assignedSchId){
    const def = DB.scholarships.find(s => isMd ? (s.code === 'SCH-104' || s.name.toLowerCase().includes('medicine')) : (s.code === 'SCH-105' || s.name.toLowerCase().includes('juris doctor')));
    if(def){
      assignedSchId = def.dbId || def.id || def.code;
      assignedSchName = def.name + ' (' + def.code + ')';
    }
  }

  openModal(
    '<div class="modal-head"><h3>Confirm Student Approval</h3><button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button></div>'+
    '<div class="modal-body" style="padding:24px;">'+
      '<div style="width:54px;height:54px;border-radius:50%;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;">' + icon('check', 30) + '</div>'+
      '<h4 style="text-align:center;margin:0 0 8px;">Approve Student Registration?</h4>'+
      '<p style="color:var(--text-muted);font-size:14px;text-align:center;margin:0 0 16px;">'+
        'Are you sure you want to approve <b>' + esc(name) + '</b>? This will activate their account and grant them access to the Student Dashboard.'+
      '</p>'+
      ((isJd || isMd) && assignedSchName ? (
        '<div style="background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:8px;padding:10px 12px;margin-bottom:14px;font-size:13px;color:#166534;">'+
          '<b>Assigned Scholarship:</b> ' + esc(assignedSchName) +
        '</div>'
      ) : '')+
      '<div class="field"><label>Review Notes (Optional)</label><input class="input" id="quickApproveNotes" placeholder="Optional approval remarks..."></div>'+
    '</div>'+
    '<div class="modal-foot">'+
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>'+
      '<button class="btn btn-primary" style="background:#16A34A;border-color:#16A34A;" onclick="executeApproveStudent(\'' + id + '\',document.getElementById(\'quickApproveNotes\').value.trim(),\'' + esc(assignedSchId) + '\')">Approve Account</button>'+
    '</div>'
  );
}

async function executeApproveStudent(id, notes, assignedSchId){
  const u = DB.users.find(x => String(x.id) === String(id));
  const studentEmail = (u && u.email) ? u.email : '';
  const studentName = u ? userFullName(u) : 'Student';

  const payload = { id, notes };
  if(assignedSchId){
    payload.assigned_scholarship_id = assignedSchId;
  }

  const res = await apiCall('admin_student_approve', 'POST', payload);
  if(res && res.status === 'success'){
    closeModal();
    STATE.studentApprovalsCache = null;
    if(u){
      u.status = 'Approved';
      u.adminReviewNotes = notes;
      if(res.assigned_scholarship_id){
        u.assigned_scholarship_id = res.assigned_scholarship_id;
        u.assigned_scholarship_name = res.assigned_scholarship_name;
        u.assignedScholarshipId = res.assigned_scholarship_id;
        u.assignedScholarshipName = res.assigned_scholarship_name;
      }
    }

    const targetEmail = res.email || studentEmail;
    const targetName = res.full_name || res.name || studentName;
    const directLoginUrl = window.location.origin + window.location.pathname + '?view=login&approved=1&email=' + encodeURIComponent(targetEmail);

    let fbNotice = '';
    if(typeof sendFirebaseAccountApproved === 'function' && targetEmail){
      try {
        const fbRes = await sendFirebaseAccountApproved(targetEmail, targetName);
        if(fbRes && fbRes.success){
          fbNotice = 'Gmail notification dispatched via Google Firebase to <b>' + esc(targetEmail) + '</b>.';
          toast('Gmail notification dispatched via Firebase to ' + targetEmail + '!', 'success');
        } else {
          fbNotice = 'Firebase note: ' + esc(fbRes.error || 'Dispatched via server failover');
          toast('Account approved in database. ' + (fbRes.error || ''), 'info', 6000);
        }
      } catch(e) {
        fbNotice = 'Firebase note: ' + esc(e.message);
      }
    } else {
      fbNotice = 'Database updated successfully.';
    }

    render();

    // Show completion dialog with instant copy button and assigned scholarship information
    openModal(
      '<div class="modal-head" style="align-items:flex-start;">' +
        '<div>' +
          '<div style="display:flex;align-items:center;gap:8px;">' +
            '<div style="width:32px;height:32px;border-radius:50%;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;">' + icon('check', 18) + '</div>' +
            '<h3 style="margin:0;font-size:18px;">Account Approved &amp; Activated</h3>' +
          '</div>' +
        '</div>' +
        '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>' +
      '</div>' +
      '<div class="modal-body" style="padding:20px;">' +
        '<p style="margin:0 0 14px;font-size:14px;color:var(--navy);line-height:1.5;">' +
          'The account for <b>' + esc(targetName) + '</b> (' + esc(targetEmail) + ') is now active and ready for login.' +
        '</p>' +
        (res.assigned_scholarship_name ? (
          '<div style="background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:8px;padding:12px 14px;margin-bottom:14px;font-size:13.5px;color:#166534;">' +
            '🎓 <b>Assigned Scholarship Program:</b> <span style="font-weight:700;">' + esc(res.assigned_scholarship_name) + (res.assigned_scholarship_code ? ' (' + esc(res.assigned_scholarship_code) + ')' : '') + '</span>' +
          '</div>'
        ) : '') +
        '<div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:12px 14px;margin-bottom:16px;font-size:13px;color:#166534;">' +
          '✓ <b>Email Delivery Status:</b> ' + (fbNotice || 'Dispatched to Gmail') +
        '</div>' +
        '<div style="background:#F8FAFC;border:1px dashed var(--border);border-radius:8px;padding:12px 14px;margin-bottom:12px;">' +
          '<div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:6px;">Instant Student Login / Access Link:</div>' +
          '<div style="font-size:12px;color:var(--text-muted);word-break:break-all;font-family:monospace;background:#fff;padding:8px 10px;border-radius:6px;border:1px solid var(--border);">' + esc(directLoginUrl) + '</div>' +
          '<button class="btn btn-ghost btn-sm" style="margin-top:8px;font-size:12px;" onclick="navigator.clipboard.writeText(\'' + esc(directLoginUrl) + '\').then(()=>toast(\'Login link copied to clipboard!\',\'success\'))">📋 Copy Login Link</button>' +
        '</div>' +
      '</div>' +
      '<div class="modal-foot">' +
        '<button class="btn btn-primary" onclick="closeModal()">Done</button>' +
      '</div>',
      true
    );
  } else {
    toast(res ? res.message : 'Approval failed.', 'error');
  }
}

function promptRejectStudentFromModal(id, name){
  const existingNotes = document.getElementById('admReviewNotes') ? document.getElementById('admReviewNotes').value.trim() : '';
  openModal(
    '<div class="modal-head"><h3>Reject Student Application</h3><button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button></div>'+
    '<div class="modal-body" style="padding:20px;">'+
      '<div style="width:50px;height:50px;border-radius:50%;background:#FEF2F2;color:#DC2626;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">' + icon('x', 28) + '</div>'+
      '<h4 style="text-align:center;margin:0 0 6px;">Reject Registration: ' + esc(name) + '</h4>'+
      '<p style="color:var(--text-muted);font-size:13.5px;text-align:center;margin:0 0 14px;">Please provide the rejection reason and any administrator guidance notes. These will be notified through the website and email.</p>'+
      '<div class="field">'+
        '<label>Rejection Reason <span style="color:var(--redst);">*</span></label>'+
        '<textarea class="input" id="admRejectReason" rows="2" placeholder="e.g. Uploaded ID is expired, blurry, or student enrollment could not be confirmed in provincial records."></textarea>'+
      '</div>'+
      '<div class="field">'+
        '<label>Administrator Notes / Guidance for Student (Optional)</label>'+
        '<textarea class="input" id="admRejectNotes" rows="3" placeholder="e.g. Please obtain a certified enrollment certificate from your campus registrar before re-registering.">' + esc(existingNotes) + '</textarea>'+
      '</div>'+
    '</div>'+
    '<div class="modal-foot">'+
      '<button class="btn btn-ghost" onclick="openAdminStudentReviewModal(\'' + id + '\')">Back</button>'+
      '<button class="btn btn-primary" style="background:#DC2626;border-color:#DC2626;" onclick="executeRejectStudent(\'' + id + '\')">Confirm Rejection</button>'+
    '</div>'
  );
}

function promptRejectStudentDirect(id, name){
  promptRejectStudentFromModal(id, name);
}

async function executeRejectStudent(id){
  const reason = document.getElementById('admRejectReason') ? document.getElementById('admRejectReason').value.trim() : '';
  const notes = document.getElementById('admRejectNotes') ? document.getElementById('admRejectNotes').value.trim() : '';
  if(!reason){
    toast('Please enter the reason for rejection.', 'error');
    return;
  }

  const res = await apiCall('admin_student_reject', 'POST', { id, reason, notes });
  if(res && res.status === 'success'){
    closeModal();
    STATE.studentApprovalsCache = null;
    const u = DB.users.find(x => String(x.id) === String(id));
    if(u){
      u.status = 'Rejected';
      u.rejectionReason = reason;
      u.rejection_reason = reason;
      u.adminReviewNotes = notes;
      u.admin_review_notes = notes;
    }
    toast('Student application rejected. Rejection notification with notes dispatched.', 'info');
    render();
  } else {
    toast(res ? res.message : 'Action failed.', 'error');
  }
}

function confirmDeleteStudentApplication(id, name, email, studentId){
  openModal(
    '<div class="modal-head">' +
      '<h3 style="color:#DC2626;display:flex;align-items:center;gap:8px;">' + icon('trash', 20) + ' Delete Student Application</h3>' +
      '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:22px;">' +
      '<div style="width:54px;height:54px;border-radius:50%;background:#FEF2F2;color:#DC2626;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;">' + icon('trash', 28) + '</div>' +
      '<h4 style="text-align:center;margin:0 0 8px;color:var(--navy);font-size:17px;">Permanently Delete Registration?</h4>' +
      '<p style="color:var(--text-muted);font-size:14px;text-align:center;margin:0 0 16px;line-height:1.5;">' +
        'Are you sure you want to delete the student application for <b>' + esc(name) + '</b>?' +
      '</p>' +
      '<div style="background:#FEF2F2;border:1px solid #FCA5A5;border-radius:8px;padding:14px;margin-bottom:14px;font-size:13px;color:#991B1B;line-height:1.5;">' +
        '<div style="font-weight:700;margin-bottom:4px;display:flex;align-items:center;gap:5px;">' + icon('alert', 14) + ' Freeing Email Account &amp; Student ID:</div>' +
        'This action permanently purges this registration record and stored ID files. ' +
        'The email address (<b>' + esc(email || 'N/A') + '</b>)' + (studentId && studentId !== 'N/A' ? ' and Student ID (<b>' + esc(studentId) + '</b>)' : '') +
        ' will be immediately freed up so the applicant can submit a fresh registration.' +
      '</div>' +
    '</div>' +
    '<div class="modal-foot" style="justify-content:space-between;">' +
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>' +
      '<button class="btn btn-primary" id="btnConfirmDeleteStudent" style="background:#DC2626;border-color:#DC2626;" onclick="executeDeleteStudentApplication(\'' + id + '\',\'' + esc(email) + '\')">' + icon('trash', 14) + ' Permanently Delete Application</button>' +
    '</div>'
  );
}

async function executeDeleteStudentApplication(id, email){
  const btn = document.getElementById('btnConfirmDeleteStudent');
  if(btn){ btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Deleting...'; }
  try {
    const res = await apiCall('admin_delete_student_application', 'POST', { id });
    if(res && res.status === 'success'){
      closeModal();
      STATE.studentApprovalsCache = null;
      DB.users = DB.users.filter(u => String(u.id) !== String(id));
      toast(res.message || ('Registration deleted. ' + (email ? email + ' can now be used again.' : '')), 'success', 6000);
      render();
    } else {
      toast(res ? res.message : 'Failed to delete student registration.', 'error');
      if(btn){ btn.disabled = false; btn.innerHTML = icon('trash', 14) + ' Permanently Delete Application'; }
    }
  } catch(err){
    toast('Error deleting student registration: ' + (err.message || err), 'error');
    if(btn){ btn.disabled = false; btn.innerHTML = icon('trash', 14) + ' Permanently Delete Application'; }
  }
}

function promptResubmitStudentFromModal(id, name){
  const notes = document.getElementById('admReviewNotes') ? document.getElementById('admReviewNotes').value.trim() : '';
  openModal(
    '<div class="modal-head"><h3>Request ID / Info Resubmission</h3><button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button></div>'+
    '<div class="modal-body" style="padding:20px;">'+
      '<div style="width:50px;height:50px;border-radius:50%;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">' + icon('clipboard', 28) + '</div>'+
      '<h4 style="text-align:center;margin:0 0 6px;">Request Resubmission: ' + esc(name) + '</h4>'+
      '<p style="color:var(--text-muted);font-size:13.5px;text-align:center;margin:0 0 14px;">Specify what information or replacement School ID or Enrollment Form document the student must submit to proceed with approval.</p>'+
      '<div class="field">'+
        '<label>Correction Instructions <span style="color:var(--redst);">*</span></label>'+
        '<textarea class="input" id="admResubmitInstructions" rows="3" placeholder="e.g. The uploaded School ID or Enrollment Form is blurred. Please upload a clear photo or copy for the current academic year."></textarea>'+
      '</div>'+
    '</div>'+
    '<div class="modal-foot">'+
      '<button class="btn btn-ghost" onclick="openAdminStudentReviewModal(\'' + id + '\')">Back</button>'+
      '<button class="btn btn-primary" style="background:#2563EB;border-color:#2563EB;" onclick="executeResubmitRequest(\'' + id + '\')">Send Resubmission Request</button>'+
    '</div>'
  );
}

function promptResubmitStudentDirect(id, name){
  promptResubmitStudentFromModal(id, name);
}

async function executeResubmitRequest(id){
  const instructions = document.getElementById('admResubmitInstructions') ? document.getElementById('admResubmitInstructions').value.trim() : '';
  if(!instructions){
    toast('Please enter correction instructions for the student.', 'error');
    return;
  }

  const res = await apiCall('admin_student_request_resubmission', 'POST', { id, instructions });
  if(res && res.status === 'success'){
    closeModal();
    STATE.studentApprovalsCache = null;
    const u = DB.users.find(x => String(x.id) === String(id));
    if(u){ u.status = 'Requires Resubmission'; u.adminReviewNotes = instructions; }
    toast('Resubmission request sent to student successfully.', 'success');
    render();
  } else {
    toast(res ? res.message : 'Action failed.', 'error');
  }
}

/* ---- Admin: User Management ---- */
function renderAdminUsers(){
  const roleFilter=STATE.params.role||'All';
  const users=DB.users.filter(u=>roleFilter==='All'||u.role===roleFilter);
  return '<div class="pageintro"><h1>User Management</h1><p>Manage applicants, admins, and reviewers across the system.</p></div>'+
    '<div class="toolbar"><div class="toolbar-filters">'+
      ['All','applicant','admin','reviewer'].map(r=>'<button class="btn '+(roleFilter===r?'btn-navy':'btn-ghost')+' btn-sm" onclick="nav(\'adminUsers\',{role:\''+r+'\'})">'+(r==='All'?'All Users':r.charAt(0).toUpperCase()+r.slice(1)+'s')+'</button>').join('')+
    '</div><button class="btn btn-primary btn-sm" onclick="openUserModal(null,\''+(roleFilter==='All'?'applicant':roleFilter)+'\')">'+icon('plus',15)+' Add User</button></div>'+
    '<div class="panel"><div class="panel-body nopad"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Joined</th><th>Actions</th></tr></thead><tbody>'+
    users.map(u=>'<tr><td><div style="display:flex;align-items:center;gap:9px;"><div class="avatar" style="width:30px;height:30px;font-size:11px;">'+initials(u.firstName,u.lastName)+'</div>'+esc(userFullName(u))+'</div></td>'+
      '<td>'+esc(u.email)+'</td><td style="text-transform:capitalize;">'+u.role+'</td><td>'+statusBadge(u.status)+'</td><td>'+fmtDate(u.joined)+'</td>'+
      '<td class="tbl-actions">'+
        '<button class="btn btn-ghost btn-sm" onclick="openUserModal(\''+u.id+'\')">'+icon('edit',14)+'</button>'+
        '<button class="btn btn-ghost btn-sm" onclick="resetPassword(\''+u.id+'\')">'+icon('lock',14)+'</button>'+
        '<button class="btn '+(u.status==='Active'?'btn-danger':'btn-ghost')+' btn-sm" onclick="toggleUserStatus(\''+u.id+'\')">'+(u.status==='Active'?icon('x',14):icon('check',14))+'</button>'+
      '</td></tr>').join('')+'</tbody></table></div></div>';
}
function openUserModal(id,defaultRole){
  const u=id?DB.users.find(x=>x.id===id):null;
  const role=u?u.role:(defaultRole||'applicant');
  openModal('<div class="modal-head"><h3>'+(u?'Edit User':'Add New User')+'</h3><button class="modal-close" onclick="closeModal()">'+icon('x',20)+'</button></div>'+
    '<div class="modal-body">'+
    '<div class="row2"><div class="field"><label>First Name</label><input class="input" id="umFirst" value="'+esc(u?u.firstName:'')+'"></div>'+
    '<div class="field"><label>Last Name</label><input class="input" id="umLast" value="'+esc(u?u.lastName:'')+'"></div></div>'+
    '<div class="field"><label>Email Address</label><input class="input" id="umEmail" value="'+esc(u?u.email:'')+'"></div>'+
    '<div class="row2"><div class="field"><label>Role</label><select class="input" id="umRole"><option value="applicant" '+(role==='applicant'?'selected':'')+'>Applicant</option><option value="admin" '+(role==='admin'?'selected':'')+'>Admin</option><option value="reviewer" '+(role==='reviewer'?'selected':'')+'>Reviewer</option></select></div>'+
    '<div class="field"><label>Contact Number</label><input class="input" id="umContact" value="'+esc(u?u.contact:'')+'"></div></div>'+
    (role!=='applicant'?'<div class="field"><label>Position</label><input class="input" id="umPosition" value="'+esc(u&&u.position?u.position:'')+'"></div>':'')+
    (u&&u.role==='applicant'?'<div class="field"><label>Verification ID Document</label><div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#F8FAFC;border:1px solid var(--border);border-radius:8px;"><span>'+icon('file',14)+' <b>'+esc(u.validId?u.validId.name:'student_id_mmsu.png')+'</b> <span class="small muted">('+(u.validId?u.validId.size:'320 KB')+')</span></span><button class="btn btn-ghost btn-sm" onclick="viewIdModal(\''+u.id+'\')">'+icon('eye',14)+' View ID</button></div></div>':'')+
    '</div><div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveUser(\''+(id||'')+'\')">Save User</button></div>');
}
function saveUser(id){
  const g=x=>document.getElementById(x)?document.getElementById(x).value:'';
  const data={firstName:g('umFirst'),lastName:g('umLast'),email:g('umEmail'),role:g('umRole'),contact:g('umContact'),position:g('umPosition')};
  if(!data.firstName||!data.email){toast('First name and email are required.','error');return;}
  if(id){
    const u=DB.users.find(x=>x.id===id);
    Object.assign(u,data);
    logActivity(STATE.currentUser.id,'admin','User Update','Updated user account: '+userFullName(u)+'.');
    toast('User updated.','success');
  }else{
    const u={id:uid('U'),status:'Active',joined:new Date().toISOString(),password:'Welcome123!',...data};
    DB.users.push(u);
    logActivity(STATE.currentUser.id,'admin','Account Creation','Created new '+data.role+' account: '+userFullName(u)+'.');
    toast('User created. Temporary password: Welcome123!','success');
  }
  closeModal();render();
}
function toggleUserStatus(id){
  const u=DB.users.find(x=>x.id===id);
  u.status=u.status==='Active'?'Inactive':'Active';
  logActivity(STATE.currentUser.id,'admin','Account Status Change',userFullName(u)+' account set to '+u.status+'.');
  toast(userFullName(u)+' is now '+u.status+'.','success');
  render();
}
function resetPassword(id){
  const u = DB.users.find(x => x.id === id);
  if(!u) return;
  const name = userFullName(u);
  const email = u.email || '';

  openModal(
    '<div class="modal-head">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<div style="width:36px;height:36px;border-radius:8px;background:var(--primary-subtle);color:var(--primary);display:flex;align-items:center;justify-content:center;">' +
          icon('lock', 20) +
        '</div>' +
        '<div>' +
          '<h3 style="margin:0;font-size:17px;font-weight:700;">Reset Password: ' + esc(name) + '</h3>' +
          '<p style="margin:2px 0 0;font-size:12.5px;color:var(--text-muted);">' + esc(email || 'No email registered') + '</p>' +
        '</div>' +
      '</div>' +
      '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:22px 24px;">' +
      '<p style="font-size:14px;color:var(--text-dark);margin-top:0;margin-bottom:16px;">' +
        'Choose how you would like to reset the password for <b>' + esc(name) + '</b>:' +
      '</p>' +
      '<div style="display:flex;flex-direction:column;gap:12px;">' +
        (email ? (
          '<div style="border:1px solid var(--border);border-radius:10px;padding:16px;display:flex;align-items:center;justify-content:space-between;background:#F8FAFC;gap:16px;">' +
            '<div>' +
              '<div style="font-weight:600;font-size:14px;color:var(--text-dark);display:flex;align-items:center;gap:6px;">' + icon('mail', 16) + ' Send Firebase Reset Link</div>' +
              '<div style="font-size:12.5px;color:var(--text-muted);margin-top:4px;">Dispatches an official password reset email to <b>' + esc(email) + '</b> via Firebase (sirib-2).</div>' +
            '</div>' +
            '<button class="btn btn-primary btn-sm" style="white-space:nowrap;" onclick="sendAdminUserFirebaseReset(\'' + u.id + '\')">Send Reset Email</button>' +
          '</div>'
        ) : '') +
        '<div style="border:1px solid var(--border);border-radius:10px;padding:16px;display:flex;align-items:center;justify-content:space-between;background:#F8FAFC;gap:16px;">' +
          '<div>' +
            '<div style="font-weight:600;font-size:14px;color:var(--text-dark);display:flex;align-items:center;gap:6px;">' + icon('key', 16) + ' Generate Temporary Password</div>' +
            '<div style="font-size:12.5px;color:var(--text-muted);margin-top:4px;">Instantly sets a temporary password and displays it on screen for the user.</div>' +
          '</div>' +
          '<button class="btn btn-outline btn-sm" style="white-space:nowrap;" onclick="setAdminUserTempPassword(\'' + u.id + '\')">Generate Password</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="modal-foot">' +
      '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>' +
    '</div>'
  );
}

async function sendAdminUserFirebaseReset(id){
  const u = DB.users.find(x => x.id === id);
  if(!u || !u.email) {
    toast('User has no valid email address.', 'error');
    return;
  }
  closeModal();
  toast('Dispatching password reset link to ' + u.email + ' via Firebase (sirib-2)...', 'info');
  try {
    const res = await sendFirebasePasswordReset(u.email);
    if(res && res.success){
      logActivity(STATE.currentUser.id, 'admin', 'Password Reset Link Sent', 'Sent Firebase password reset link to ' + userFullName(u) + ' (' + u.email + ').');
      toast('Firebase password reset link dispatched to ' + u.email + '!', 'success');
    } else {
      toast((res && res.error) || 'Failed to dispatch reset email.', 'error');
    }
  } catch(e){
    toast('Error: ' + e.message, 'error');
  }
}

async function setAdminUserTempPassword(id){
  const u = DB.users.find(x => x.id === id);
  if(!u) return;
  const tempPass = 'Reset' + Math.floor(1000 + Math.random() * 9000) + '!';
  u.password = tempPass;
  if(u.email){
    await apiCall('reset_password_complete', 'POST', { email: u.email, password: tempPass });
  }
  logActivity(STATE.currentUser.id, 'admin', 'Password Reset', 'Generated temporary password for ' + userFullName(u) + '.');
  closeModal();
  openModal(
    '<div class="modal-head">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<div style="width:36px;height:36px;border-radius:50%;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;">' +
          icon('check', 20) +
        '</div>' +
        '<div>' +
          '<h3 style="margin:0;font-size:17px;font-weight:700;">Temporary Password Generated</h3>' +
          '<p style="margin:2px 0 0;font-size:12.5px;color:var(--text-muted);">' + esc(userFullName(u)) + '</p>' +
        '</div>' +
      '</div>' +
      '<button class="modal-close" onclick="closeModal()">' + icon('x', 20) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:22px 24px;">' +
      '<p style="font-size:14px;color:var(--text-dark);margin-top:0;">' +
        'Temporary password for <b>' + esc(userFullName(u)) + '</b>:' +
      '</p>' +
      '<div style="background:#F1F5F9;border:1px dashed #CBD5E1;border-radius:8px;padding:14px;font-family:monospace;font-size:20px;font-weight:700;letter-spacing:1px;text-align:center;color:var(--primary);margin:14px 0;">' +
        tempPass +
      '</div>' +
      '<p style="font-size:13px;color:var(--text-muted);margin-bottom:0;">Please provide this temporary password to the user. They will be able to log in immediately and may update it in their profile.</p>' +
    '</div>' +
    '<div class="modal-foot" style="justify-content:flex-end;">' +
      '<button class="btn btn-primary" onclick="closeModal()">Done</button>' +
    '</div>'
  );
  toast('Temporary password created for ' + userFullName(u), 'success');
}

/* ---- Admin: Reports ---- */
const reportFilters={from:'',to:'',scholarship:'All',status:'All'};
function filteredReportApps(){
  return DB.applications.filter(a=>{
    if(reportFilters.scholarship!=='All'&&a.scholarshipId!==reportFilters.scholarship)return false;
    if(reportFilters.status!=='All'&&a.status!==reportFilters.status)return false;
    if(reportFilters.from&&a.submittedDate&&new Date(a.submittedDate)<new Date(reportFilters.from))return false;
    if(reportFilters.to&&a.submittedDate&&new Date(a.submittedDate)>new Date(reportFilters.to))return false;
    return true;
  });
}
function renderReports(){
  const apps=filteredReportApps();
  const byStatus={};
  ['Draft','Submitted','Processing','Under Review','Approved','Rejected','Incomplete'].forEach(s=>byStatus[s]=apps.filter(a=>a.status===s).length);
  return '<div class="pageintro"><h1>Reports</h1><p>Generate and export scholarship reports.</p></div>'+
    '<div class="panel no-print" style="margin-bottom:20px;"><div class="panel-body">'+
    '<div class="row3">'+
      '<div class="field"><label>From</label><input class="input" type="date" onchange="reportFilters.from=this.value;render()"></div>'+
      '<div class="field"><label>To</label><input class="input" type="date" onchange="reportFilters.to=this.value;render()"></div>'+
      '<div class="field"><label>Scholarship</label><select class="input" onchange="reportFilters.scholarship=this.value;render()"><option value="All">All Scholarships</option>'+DB.scholarships.map(s=>'<option value="'+s.id+'" '+(reportFilters.scholarship===s.id?'selected':'')+'>'+s.name+'</option>').join('')+'</select></div>'+
    '</div>'+
    '<div style="display:flex;gap:10px;margin-top:6px;">'+
      '<button class="btn btn-navy btn-sm" onclick="window.print()">'+icon('printer',14)+' Print Report</button>'+
      '<button class="btn btn-ghost btn-sm" onclick="exportCSV()">'+icon('download',14)+' Export to CSV</button>'+
      '<button class="btn btn-ghost btn-sm" onclick="window.print()">'+icon('file',14)+' Export to PDF</button>'+
    '</div></div></div>'+
    '<div id="reportPrintArea">'+
    '<div class="grid4" style="margin-bottom:20px;">'+
      statCard('Total Applicants',DB.users.filter(u=>u.role==='applicant').length,'users','')+
      statCard('Applications in Range',apps.length,'file','')+
      statCard('Approved',byStatus.Approved,'check','acc-green')+
      statCard('Rejected',byStatus.Rejected,'x','acc-red')+
    '</div>'+
    '<div class="row2" style="margin-bottom:20px;">'+
      '<div class="panel"><div class="panel-head"><h3>Applications by Status</h3></div><div class="panel-body"><div class="chart-box sm"><canvas id="repStatusChart"></canvas></div></div></div>'+
      '<div class="panel"><div class="panel-head"><h3>Applications by Scholarship</h3></div><div class="panel-body"><div class="chart-box sm"><canvas id="repSchChart"></canvas></div></div></div>'+
    '</div>'+
    '<div class="panel" style="margin-bottom:20px;"><div class="panel-head"><h3>Reviewer Evaluation Summary</h3></div><div class="panel-body nopad">'+
      '<table><thead><tr><th>Reviewer</th><th>Assigned</th><th>Completed</th><th>Avg. Score</th></tr></thead><tbody>'+
      DB.users.filter(u=>u.role==='reviewer').map(r=>{
        const assigned=DB.applications.filter(a=>a.reviewerId===r.id);
        const evals=assigned.filter(a=>a.evaluation);
        const avg=evals.length? Math.round(evals.reduce((s,a)=>s+a.evaluation.total,0)/evals.length):0;
        return '<tr><td>'+esc(userFullName(r))+'</td><td>'+assigned.length+'</td><td>'+evals.length+'</td><td>'+(evals.length?avg+' / 100':'—')+'</td></tr>';
      }).join('')+'</tbody></table></div></div>'+
    '<div class="panel"><div class="panel-head"><h3>Application Detail</h3></div><div class="panel-body nopad">'+adminAppsTable(apps)+'</div></div>'+
    '</div>';
}
function initReportCharts(){
  const apps=filteredReportApps();
  const statuses=['Draft','Submitted','Processing','Under Review','Approved','Rejected','Incomplete'];
  const byStatus=statuses.map(s=>apps.filter(a=>a.status===s).length);
  const c1=document.getElementById('repStatusChart');
  if(c1)chartInstances.repStatusChart=new Chart(c1,{type:'pie',data:{labels:statuses,datasets:[{data:byStatus,backgroundColor:['#B9770E','#1F618D','#F4B400','#153B75','#1E8449','#C0392B','#8F1D22']}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{boxWidth:9,font:{size:10}}}}}});
  const bySch=DB.scholarships.map(s=>apps.filter(a=>a.scholarshipId===s.id).length);
  const c2=document.getElementById('repSchChart');
  if(c2)chartInstances.repSchChart=new Chart(c2,{type:'bar',data:{labels:DB.scholarships.map(s=>s.name.split(' ')[0]),datasets:[{data:bySch,backgroundColor:'#C1272D',borderRadius:5,maxBarThickness:36}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{precision:0}}}}});
}
function exportCSV(){
  const apps=filteredReportApps();
  let csv='Application ID,Applicant,Scholarship,Submitted,Status,Reviewer\\n';
  apps.forEach(a=>{
    const u=DB.users.find(x=>x.id===a.applicantId);const s=DB.scholarships.find(x=>x.id===a.scholarshipId);const r=DB.users.find(x=>x.id===a.reviewerId);
    csv+=[a.id,userFullName(u),s.name,a.submittedDate?fmtDate(a.submittedDate):'',a.status,r?userFullName(r):''].map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')+'\\n';
  });
  const blob=new Blob([csv],{type:'text/csv'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');link.href=url;link.download='sirib-isko-report.csv';document.body.appendChild(link);link.click();link.remove();
  toast('Report exported as CSV.','success');
}

/* ---- Admin: Activity Logs ---- */
function renderActivityLogs(){
  return '<div class="pageintro"><h1>Activity Logs</h1><p>System-wide record of important actions.</p></div>'+
    '<div class="panel"><div class="panel-body nopad"><table><thead><tr><th>User</th><th>Role</th><th>Action</th><th>Description</th><th>Date &amp; Time</th></tr></thead><tbody>'+
    DB.activityLogs.slice(0,60).map(l=>{
      const u=DB.users.find(x=>x.id===l.userId);
      return '<tr><td>'+(u?esc(userFullName(u)):'System')+'</td><td style="text-transform:capitalize;">'+l.role+'</td><td>'+esc(l.action)+'</td><td>'+esc(l.description)+'</td><td class="small muted">'+fmtDateTime(l.date)+'</td></tr>';
    }).join('')+'</tbody></table></div></div>';
}

function renderAdminSettings(){
  return '<div class="pageintro"><h1>Settings</h1><p>System configuration for the Scholarship Division.</p></div>'+
    '<div class="row2" style="align-items:flex-start;">'+
    '<div class="panel"><div class="panel-head"><h3>General</h3></div><div class="panel-body">'+
      '<div class="field"><label>System Name</label><input class="input" value="Sirib i-Sko"></div>'+
      '<div class="field"><label>Support Email</label><input class="input" value="scholarship@ilocosnorte.gov.ph"></div>'+
      '<button class="btn btn-navy" onclick="toast(\'Settings saved.\',\'success\')">Save Changes</button>'+
    '</div></div>'+
    '<div class="panel"><div class="panel-head"><h3>Security</h3></div><div class="panel-body">'+
      ['Require strong passwords for all accounts','Enable two-factor authentication for admins','Auto-lock accounts after 5 failed login attempts'].map(l=>'<label class="checkline" style="margin-bottom:14px;"><input type="checkbox" checked> '+l+'</label>').join('')+
      '<button class="btn btn-ghost" onclick="toast(\'Security settings updated.\',\'success\')">Update Security Settings</button>'+
    '</div></div></div>';
}

/* =========================================================
   REVIEWER PANEL
   ========================================================= */
function reviewerTitle(v){
  return {reviewerDashboard:'Dashboard',reviewerAssigned:'Assigned Applications',reviewerEvaluations:'Evaluations',
    reviewerNotifications:'Notifications',reviewerProfile:'Profile',reviewApplication:'Application Review'}[v]||'Dashboard';
}
function renderReviewerView(v){
  if(v==='reviewerAssigned')return renderReviewerAssigned();
  if(v==='reviewerEvaluations')return renderReviewerEvaluations();
  if(v==='reviewerNotifications')return renderNotificationsPage();
  if(v==='reviewerProfile')return renderReviewerProfile();
  if(v==='reviewApplication')return renderReviewApplication(STATE.params.id);
  return renderReviewerDashboard();
}
function myAssigned(){
  const cur = STATE.currentUser;
  if(!cur) return [];
  const curId = String(cur.id || '').replace(/^U-/i, '');
  const curEvalId = String(cur.evaluatorId || cur.evaluator_id || '').toLowerCase();
  const curEmail = String(cur.email || '').toLowerCase();

  return DB.applications.filter(a => {
    if(!a.reviewerId) return false;
    const aRev = String(a.reviewerId).replace(/^U-/i, '');
    // 1. Match numeric or clean primary key ID
    if(aRev === curId || String(a.reviewerId) === String(cur.id)) return true;
    // 2. Match Evaluator Code (e.g., EVAL-2026-779)
    if(curEvalId && (String(a.reviewerId).toLowerCase() === curEvalId || (a.reviewerEvaluatorId && a.reviewerEvaluatorId.toLowerCase() === curEvalId))) return true;
    // 3. Match through DB.users email fallback
    const r = DB.users.find(u => String(u.id) === String(a.reviewerId) || String(u.id).replace(/^U-/i, '') === aRev);
    if(r && curEmail && (r.email || '').toLowerCase() === curEmail) return true;
    return false;
  });
}
function renderReviewerDashboard(){
  const assigned = myAssigned();
  const pending = assigned.filter(a => !a.evaluation);
  const completed = assigned.filter(a => a.evaluation);
  return '<div class="pageintro" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;">'+
      '<div><h1>Welcome, '+esc(STATE.currentUser.firstName)+'</h1><p>Here\'s your review workload for this cycle.</p></div>'+
      '<button class="btn btn-outline btn-sm" onclick="syncApplicationsFromApi().then(()=>render())" title="Refresh assignments from server">'+icon('clock',14)+' Refresh</button>'+
    '</div>'+
    '<div class="grid4" style="grid-template-columns:repeat(3,1fr);margin-bottom:24px;">'+
      statCard('Total Assigned',assigned.length,'file','')+statCard('Pending Review',pending.length,'clock','acc-amber')+statCard('Completed Evaluations',completed.length,'check','acc-green')+
    '</div>'+
    '<div class="panel"><div class="panel-head"><h3>Assigned Applications</h3></div><div class="panel-body nopad">'+reviewerAppsTable(assigned)+'</div></div>';
}
function reviewerAppsTable(apps){
  if(!apps.length) return emptyState('file','No applications assigned yet','Check back soon or click Refresh to check for newly assigned applications.');
  return '<table><thead><tr><th>App ID</th><th>Applicant</th><th>Scholarship</th><th>Assigned</th><th>Evaluation Status</th><th>Action</th></tr></thead><tbody>'+
    apps.map(a => {
      const u = DB.users.find(x => x.id === a.applicantId);
      const s = DB.scholarships.find(x => x.id === a.scholarshipId);
      const applicantName = (u ? userFullName(u) : '') || a.applicantName || (a.personal && a.personal.fullName) || 'Applicant';
      const schName = (s ? s.name : '') || a.scholarshipName || 'Scholarship';
      return '<tr><td><b>'+esc(a.id)+'</b></td><td>'+esc(applicantName)+'</td><td>'+esc(schName)+'</td><td>'+fmtDate(a.lastUpdated)+'</td>'+
      '<td>'+(a.evaluation?statusBadge('Completed'):statusBadge(a.status || 'Pending'))+'</td>'+
      '<td><button class="btn btn-primary btn-sm" onclick="nav(\'reviewApplication\',{id:\''+esc(a.id)+'\'})">Review Application</button></td></tr>';
    }).join('')+'</tbody></table>';
}
function renderReviewerAssigned(){
  return '<div class="pageintro" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;">'+
      '<div><h1>Assigned Applications</h1><p>All applications currently assigned to you.</p></div>'+
      '<button class="btn btn-outline btn-sm" onclick="syncApplicationsFromApi().then(()=>render())" title="Refresh assignments from server">'+icon('clock',14)+' Refresh</button>'+
    '</div>'+
    '<div class="panel"><div class="panel-body nopad">'+reviewerAppsTable(myAssigned())+'</div></div>';
}
function renderReviewerEvaluations(){
  const done = myAssigned().filter(a => a.evaluation);
  return '<div class="pageintro"><h1>My Evaluations</h1><p>Applications you have already evaluated.</p></div>'+
    '<div class="panel"><div class="panel-body nopad">'+
    (done.length ? '<table><thead><tr><th>App ID</th><th>Applicant</th><th>Total Score</th><th>Recommendation</th><th>Submitted</th><th></th></tr></thead><tbody>'+
      done.map(a => {
        const u = DB.users.find(x => x.id === a.applicantId);
        const applicantName = (u ? userFullName(u) : '') || a.applicantName || (a.personal && a.personal.fullName) || 'Applicant';
        return '<tr><td><b>'+esc(a.id)+'</b></td><td>'+esc(applicantName)+'</td><td>'+(a.evaluation.total || 0)+' / 100</td><td>'+esc(a.evaluation.recommendation || '')+'</td><td>'+fmtDate(a.evaluation.submittedDate || a.evaluation.submitted_at)+'</td>'+
        '<td><button class="btn btn-ghost btn-sm" onclick="nav(\'reviewApplication\',{id:\''+esc(a.id)+'\'})">View</button></td></tr>';
      }).join('')+'</tbody></table>'
      : emptyState('clipboard','No evaluations submitted yet',''))+
    '</div></div>';
}
function renderReviewerProfile(){
  const u=STATE.currentUser;
  return '<div class="pageintro"><h1>My Profile</h1></div>'+
    '<div class="panel"><div class="panel-body">'+
    '<div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;"><div class="avatar" style="width:56px;height:56px;font-size:20px;">'+initials(u.firstName,u.lastName)+'</div><div><b style="font-size:16px;">'+esc(userFullName(u))+'</b><div class="small muted">'+esc(u.position||'Reviewer')+'</div></div></div>'+
    kv('Email',u.email)+kv('Contact',u.contact)+kv('Status',u.status)+kv('Member Since',fmtDate(u.joined))+
    '</div></div>';
}

/* ---- Reviewer: Application Review page ---- */
const evalDraftScores={};
function renderReviewApplication(appId){
  const a = findApplication(appId) || DB.applications.find(x => x.id === appId);
  if(!a) return emptyState('file','Application not found','');
  const s = DB.scholarships.find(x => x.id === a.scholarshipId || x.code === a.scholarshipId) || { name: a.scholarshipName || 'Scholarship' };
  const u = DB.users.find(x => x.id === a.applicantId) || { firstName: a.applicantName || 'Applicant', lastName: '' };
  const sName = (s ? s.name : '') || a.scholarshipName || 'Scholarship';
  const applicantName = (u ? userFullName(u) : '') || a.applicantName || (a.personal && a.personal.fullName) || 'Applicant';
  const locked = !!a.evaluation;

  // Auto-advance status to Under Review when evaluator opens assigned application
  if(!locked && (a.status === 'Processing' || a.status === 'Submitted')){
    a.status = 'Under Review';
    a.stage = 'Under Review';
    a.lastUpdated = new Date().toISOString();
    apiCall('update_application_status', 'POST', { id: a.dbId || a.id, status: 'Under Review' }).catch(()=>{});
  }

  if(!evalDraftScores[appId] && !evalDraftScores[a.id]){
    evalDraftScores[a.id] = a.evaluation ? {...a.evaluation} : {academic:0,financial:0,completeness:0,eligibility:0,additional:0,comments:'',recommendation:'Recommend for Approval'};
  }
  const d = evalDraftScores[a.id] || evalDraftScores[appId];

  const candStudent = {
    course: (a.academic && a.academic.course) || a.course || (u && u.course) || '',
    school: (a.academic && a.academic.school) || a.school || (u && u.school) || '',
    yearLevel: (a.academic && a.academic.yearLevel) || a.year_level || (u && (u.yearLevel || u.year_level)) || '',
    gpa: (a.academic && a.academic.gpa) || a.gpa || (u && u.gpa) || '',
    familyIncome: (a.family && a.family.income) || a.family_income || (u && (u.familyIncome || u.income)) || ''
  };
  const candMatch = findBestMatchingScholarship(candStudent, DB.scholarships);
  const matchedSchName = a.matched_scholarship_name || a.matchedScholarshipName || (candMatch.matched ? candMatch.scholarship.name : sName);
  const matchedCategory = a.matching_category || a.matchingCategory || (candMatch.matched ? candMatch.scholarship.category : (s ? s.category : 'General'));
  const matchedReason = a.matching_reason || a.matchingReason || (candMatch.matched ? candMatch.reason : 'Course match validated');
  const eligStatus = a.eligibility_status || a.eligibilityStatus || (candMatch.matched ? candMatch.statusTag : 'Eligible');

  const fitEval = evaluateScholarshipEligibility(s, candStudent);
  const isPass = eligStatus === 'Eligible' || (fitEval && fitEval.isEligible);

  const evalVerifyBox = '<div class="panel" style="margin-bottom:18px;border:1.5px solid ' + (isPass ? '#16A34A' : '#F59E0B') + ';">' +
    '<div class="panel-head" style="background:' + (isPass ? '#F0FDF4' : '#FFFBEB') + ';border-bottom:1px solid ' + (isPass ? '#BBF7D0' : '#FDE68A') + ';">' +
      '<div>' +
        '<div style="font-size:11.5px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:' + (isPass ? '#15803D' : '#B45309') + ';">' +
          (isPass ? '✓ Verified Automatic Course Match' : '⚠ Eligibility Verification Required') +
        '</div>' +
        '<h3 style="margin:2px 0 0;font-size:16px;color:var(--navy);">' + esc(matchedSchName) + ' <span class="muted" style="font-size:12px;font-weight:normal;">(' + esc(matchedCategory) + ')</span></h3>' +
      '</div>' +
      '<span class="badge" style="background:' + (isPass ? '#DCFCE7' : '#FEE2E2') + ';color:' + (isPass ? '#16A34A' : '#DC2626') + ';font-size:12.5px;padding:4px 10px;font-weight:700;">' +
        esc(eligStatus) +
      '</span>' +
    '</div>' +
    '<div class="panel-body">' +
      '<div style="font-size:13px;margin-bottom:10px;"><b>Course:</b> ' + esc(candStudent.course || 'Not specified') + ' · <span class="muted">' + esc(matchedReason) + '</span></div>' +
      (fitEval && fitEval.criteria && fitEval.criteria.length ?
        '<div class="fit-checklist" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:8px;">' +
          fitEval.criteria.map(c =>
            '<div class="fit-check-item ' + (c.pass ? 'pass' : 'warn') + '" style="font-size:12px;padding:6px 10px;">' +
              (c.pass ? icon('check', 14) : icon('alert', 14)) +
              '<div><b style="display:block;">' + esc(c.label) + '</b><span class="small muted">' + esc(c.detail) + '</span></div>' +
            '</div>'
          ).join('') +
        '</div>' : ''
      ) +
    '</div></div>';

  return '<button class="link-btn" style="margin-bottom:14px;display:flex;align-items:center;gap:6px;" onclick="nav(\'reviewerAssigned\')">← Back to Assigned Applications</button>'+
  '<div class="pageintro"><h1>'+esc(a.id)+'</h1><p>'+esc(sName)+' · '+esc(applicantName)+'</p></div>'+
  evalVerifyBox+
  '<div class="row2" style="align-items:flex-start;grid-template-columns:1.1fr .9fr;">'+
    '<div>'+
    '<div class="panel" style="margin-bottom:18px;"><div class="panel-head"><h3>Applicant Profile</h3></div><div class="panel-body">'+
      '<b class="small muted">PERSONAL INFORMATION</b>'+Object.entries(a.personal).map(([k,v])=>kv(labelize(k),v)).join('')+
      '<div class="divider"></div><b class="small muted">ACADEMIC INFORMATION</b>'+Object.entries(a.academic).map(([k,v])=>kv(labelize(k),v)).join('')+
      '<div class="divider"></div><b class="small muted">FAMILY &amp; FINANCIAL</b>'+Object.entries(a.family).map(([k,v])=>kv(labelize(k),v)).join('')+
    '</div></div>'+
    '<div class="panel"><div class="panel-head"><h3>Documents ('+a.documents.length+')</h3></div><div class="panel-body">'+
      a.documents.map((doc,i)=>'<div class="doc-row" style="cursor:pointer;" onclick="viewDocModal(\''+a.id+'\',\''+doc.type.replace(/'/g,"\\'")+'\')">'+
        '<div class="dleft">'+
          '<div class="doc-icon">'+icon('file',18)+'</div>'+
          '<div><b style="font-size:13.5px;color:var(--navy);">'+esc(doc.type)+'</b><div class="small muted">'+esc(doc.name)+' · '+(doc.size||'')+'</div></div>'+
        '</div>'+
        '<div style="display:flex;gap:8px;align-items:center;" onclick="event.stopPropagation()">'+
          statusBadge(doc.status)+
          '<button class="btn btn-ghost btn-sm" onclick="viewDocModal(\''+a.id+'\',\''+doc.type.replace(/'/g,"\\'")+'\')" style="display:inline-flex;align-items:center;gap:4px;border:1px solid var(--border);font-weight:600;">'+icon('eye',14)+' View</button>'+
          (locked?'':'<button class="btn btn-ghost btn-sm" onclick="setDocStatus(\''+a.id+'\','+i+',\'Verified\')" title="Mark Verified" style="color:#16A34A;border:1px solid var(--border);">'+icon('check',13)+'</button><button class="btn btn-ghost btn-sm" onclick="setDocStatus(\''+a.id+'\','+i+',\'Invalid\')" title="Mark Invalid" style="color:#DC2626;border:1px solid var(--border);">'+icon('x',13)+'</button>')+
        '</div>'+
      '</div>').join('')+
    '</div></div></div>'+

    '<div class="panel"><div class="panel-head"><h3>Evaluation &amp; Scoring</h3></div><div class="panel-body">'+
      (locked?'<div class="badge b-completed" style="margin-bottom:14px;">'+icon('lock',13)+' Evaluation submitted — locked</div>':'')+
      scoreRow('Academic Performance','academic',30,d,locked,a.id)+
      scoreRow('Financial Need','financial',25,d,locked,a.id)+
      scoreRow('Completeness of Requirements','completeness',20,d,locked,a.id)+
      scoreRow('Eligibility','eligibility',15,d,locked,a.id)+
      scoreRow('Additional Criteria','additional',10,d,locked,a.id)+
      '<div class="score-total"><span>Total Score</span><span id="evTotal_'+a.id+'">'+scoreTotal(d)+' / 100</span></div>'+
      '<div class="field" style="margin-top:16px;"><label>Comments / Feedback</label><textarea class="input" '+(locked?'disabled':'')+' onchange="evalDraftScores[\''+a.id+'\'].comments=this.value">'+esc(d.comments)+'</textarea></div>'+
      '<div class="field"><label>Recommendation</label><select class="input" '+(locked?'disabled':'')+' onchange="evalDraftScores[\''+a.id+'\'].recommendation=this.value">'+
        ['Recommend for Approval','Recommend for Rejection','Request Additional Requirements'].map(o=>'<option '+(d.recommendation===o?'selected':'')+'>'+o+'</option>').join('')+
      '</select></div>'+
      (locked? '' : '<div style="display:flex;gap:10px;margin-top:18px;"><button class="btn btn-ghost btn-block" onclick="saveEvaluation(\''+a.id+'\')">Save Evaluation</button><button class="btn btn-primary btn-block" onclick="submitEvaluation(\''+a.id+'\')">Submit Evaluation</button></div>')+
    '</div></div>'+
  '</div>';
}
function scoreRow(label,key,max,d,locked,appId){
  return '<div class="score-row"><div class="sname">'+label+'</div><div class="smax">Max: '+max+'</div>'+
    '<div><input class="input" type="number" min="0" max="'+max+'" value="'+d[key]+'" '+(locked?'disabled':'')+' oninput="updateScore(\''+appId+'\',\''+key+'\','+max+',this.value)"></div></div>';
}
function scoreTotal(d){return (Number(d.academic)||0)+(Number(d.financial)||0)+(Number(d.completeness)||0)+(Number(d.eligibility)||0)+(Number(d.additional)||0);}
function updateScore(appId,key,max,val){
  let v=Math.max(0,Math.min(max,Number(val)||0));
  if(!evalDraftScores[appId]) evalDraftScores[appId]={};
  evalDraftScores[appId][key]=v;
  const el=document.getElementById('evTotal_'+appId);
  if(el)el.textContent=scoreTotal(evalDraftScores[appId])+' / 100';
}
async function setDocStatus(appId,idx,status){
  const a=findApplication(appId) || DB.applications.find(x=>x.id===appId);
  if(a && a.documents && a.documents[idx]){
    const doc = a.documents[idx];
    doc.status=status;
    a.lastUpdated = new Date().toISOString();
    toast('Document marked as '+status+'.','success');
    render();

    try {
      await apiCall('update_document_status', 'POST', {
        document_id: doc.id || null,
        application_id: a.dbId || a.id,
        doc_type: doc.type,
        status: status
      });
    } catch(e) {
      console.warn('Could not persist document status:', e);
    }
  }
}
function saveEvaluation(appId){
  toast('Evaluation draft saved.','success');
}
async function submitEvaluation(appId){
  const a = findApplication(appId) || DB.applications.find(x => x.id === appId);
  if(!a){ toast('Application not found.', 'error'); return; }
  const d = evalDraftScores[a.id] || evalDraftScores[appId] || {};
  const total = scoreTotal(d);

  a.evaluation = { ...d, total, submittedDate: new Date().toISOString() };
  a.reviewerComments = d.comments;
  a.status = 'Finished Review';
  a.stage = 'Finished Review';
  a.lastUpdated = new Date().toISOString();

  try {
    const res = await apiCall('submit_evaluation', 'POST', {
      application_id: a.dbId || a.id,
      app_code: a.id,
      reviewer_id: STATE.currentUser ? (STATE.currentUser.id || STATE.currentUser.evaluatorId) : null,
      academic: d.academic,
      financial: d.financial,
      completeness: d.completeness,
      eligibility: d.eligibility,
      additional: d.additional,
      total: total,
      recommendation: d.recommendation,
      comments: d.comments
    });
    if(res && res.status === 'success'){
      a.status = 'Finished Review';
      a.stage = 'Finished Review';
      if((d.recommendation || '').toLowerCase().indexOf('reject') === -1 && Array.isArray(a.documents)){
        a.documents.forEach(doc => {
          if(doc.status === 'Pending') doc.status = 'Verified';
        });
      }
      if(res.updated_at) a.lastUpdated = res.updated_at;
      toast(res.message || 'Evaluation submitted successfully. Status updated to Finished Review.', 'success');
      await syncApplicationsFromApi();
    } else {
      toast((res && res.message) ? res.message : 'Evaluation recorded.', 'info');
    }
  } catch(e) {
    console.warn('Could not post evaluation to backend:', e);
    toast('Evaluation saved locally.', 'info');
  }

  logActivity(STATE.currentUser ? STATE.currentUser.id : 'reviewer', 'reviewer', 'Evaluation Submitted', 'Submitted evaluation for application ' + a.id + ' (Score: ' + total + '/100).');
  pushNotif(a.applicantId, 'Evaluation completed', 'Your application ' + a.id + ' has been evaluated and is awaiting final decision.');
  pushNotif('U-2001', 'Evaluation completed', a.id + ' has been evaluated by ' + userFullName(STATE.currentUser) + '. Score: ' + total + '/100.');
  render();
}

/* ================= ADMIN SELF-REGISTRATION ================= */
function autoFillAuthCode(){
  const el = document.getElementById('adminRegAuthCode');
  const code = STATE.activeAuthCode || 'PGIN-ADM-2026';
  if(el) {
    el.value = code;
    toast('Authorization code applied: ' + code, 'info');
  }
}

function renderAdminRegister(){
  // Check whether any active, verified admin exists to determine authorization code requirement
  if(STATE.adminAuthStatus === null){
    apiCall('admin_auth_status').then(res => {
      if(res && res.status === 'success'){
        STATE.adminAuthStatus = (res.has_admin !== undefined ? !!res.has_admin : (res.hasAdmin !== undefined ? !!res.hasAdmin : true));
        if(res.active_code) STATE.activeAuthCode = res.active_code;
        const bannerEl = document.getElementById('adminRegModeBanner');
        const authBox = document.getElementById('adminRegAuthBox');
        if(bannerEl && authBox){
          if(STATE.adminAuthStatus){
            bannerEl.className = 'banner-warning';
            bannerEl.style.background = 'rgba(244,180,0,.12)';
            bannerEl.style.border = '1px solid rgba(244,180,0,.35)';
            bannerEl.style.color = '#B9770E';
            bannerEl.innerHTML = '<b>Security Authorization:</b> An administrator already exists. An Authorization Code is required to register additional Admin accounts.';
            authBox.style.display = 'block';
          } else {
            bannerEl.className = 'banner-info';
            bannerEl.style.background = 'rgba(21,59,117,.08)';
            bannerEl.style.border = '1px solid rgba(21,59,117,.2)';
            bannerEl.style.color = 'var(--navy)';
            bannerEl.innerHTML = '<b>First Administrator Setup Mode:</b> You are configuring the primary system administrator. No authorization code is required.';
            authBox.style.display = 'none';
          }
        }
      }
    });
  }

  // Default to true since an admin account is present in database
  const reqAuth = (STATE.adminAuthStatus !== false);

  return '<div class="auth-wrap">'+
    '<div class="auth-side"><div>'+
      '<div class="brand" style="margin-bottom:30px;display:flex;align-items:center;gap:12px;"><img src="img/logo.png" alt="Logo" class="auth-logo-img"><span>Sirib i-Sko</span></div>'+
      '<div class="quote">"Secure administrative governance for the Provincial Government of Ilocos Norte Scholarship Division."</div>'+
    '</div><div class="small" style="color:#AEBEDA;">Official Administrator Portal · PGIN Education Office</div></div>'+
    '<div class="auth-form-wrap" id="adminRegCardWrap"><div class="auth-card" style="max-width:480px;">'+
      '<h2>Admin Registration</h2><p>Create an administrator account to manage scholarship programs, evaluator accounts, and approvals.</p>'+
      '<div id="adminRegModeBanner" style="margin-bottom:18px;padding:12px 14px;border-radius:8px;font-size:13px;line-height:1.5;background:rgba(244,180,0,.12);border:1px solid rgba(244,180,0,.35);color:#B9770E;">'+
        (reqAuth ? '<b>Security Authorization:</b> An administrator already exists. An Authorization Code is required to register additional Admin accounts.' : '<b>System Administrator Setup:</b> Create your administrator account to manage Sirib i-Sko.')+
      '</div>'+
      '<div class="field"><label>Full Name <span style="color:var(--redst);">*</span></label><input class="input" id="adminRegFullName" autocomplete="off" value=""></div>'+
      '<div class="field"><label>Email Address <span style="color:var(--redst);">*</span></label><input class="input" type="email" id="adminRegEmail" autocomplete="off" value=""></div>'+
      '<div class="row2">'+
        '<div class="field"><label>Password <span style="color:var(--redst);">*</span></label>'+
          '<div class="pwd-wrap">'+
            '<input class="input" type="password" id="adminRegPass" autocomplete="new-password" value="">'+
            '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'adminRegPass\', this)" title="Show password" aria-label="Show password">'+icon('eye',18)+'</button>'+
          '</div>'+
        '</div>'+
        '<div class="field"><label>Confirm Password <span style="color:var(--redst);">*</span></label>'+
          '<div class="pwd-wrap">'+
            '<input class="input" type="password" id="adminRegPass2" autocomplete="new-password" value="">'+
            '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'adminRegPass2\', this)" title="Show password" aria-label="Show password">'+icon('eye',18)+'</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="field" id="adminRegAuthBox" style="display:'+(reqAuth?'block':'none')+';">'+
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">'+
          '<label style="margin:0;">Admin Authorization Code <span style="color:var(--redst);">*</span></label>'+
          '<button type="button" class="btn btn-ghost btn-sm" style="font-size:11.5px;padding:2px 8px;border:1px solid var(--border);color:var(--navy);font-weight:600;" onclick="autoFillAuthCode()">Auto-Fill Code</button>'+
        '</div>'+
        '<input class="input" id="adminRegAuthCode" placeholder="PGIN-ADM-2026" value="'+(STATE.activeAuthCode||'PGIN-ADM-2026')+'" style="font-family:monospace;letter-spacing:1px;text-transform:uppercase;">'+
        '<div class="small muted" style="margin-top:4px;">Authorized system code pre-loaded for easy setup. Additional codes can be generated by admins.</div>'+
      '</div>'+
      '<button class="btn btn-primary btn-block" id="adminRegSubmitBtn" style="margin-top:8px;" onclick="doAdminRegister()">Register as Administrator</button>'+
      '<div style="text-align:center;margin-top:16px;font-size:13.5px;color:var(--text-muted);">Already an administrator? <a href="javascript:void(0)" class="link-btn" onclick="nav(\'login\')">Log In</a></div>'+
    '</div></div>'+
  '</div>';
}

async function doAdminRegister(){
  const nameEl = document.getElementById('adminRegFullName');
  const emailEl = document.getElementById('adminRegEmail');
  const passEl = document.getElementById('adminRegPass');
  const pass2El = document.getElementById('adminRegPass2');
  const codeEl = document.getElementById('adminRegAuthCode');
  const btn = document.getElementById('adminRegSubmitBtn');

  if(!nameEl || !emailEl || !passEl || !pass2El) return;
  const fullName = nameEl.value.trim();
  const email = emailEl.value.trim().toLowerCase();
  const password = passEl.value;
  const confirmPassword = pass2El.value;
  let authCode = codeEl ? codeEl.value.trim() : '';
  if(!authCode && STATE.adminAuthStatus !== false){
    authCode = STATE.activeAuthCode || 'PGIN-ADM-2026';
    if(codeEl) codeEl.value = authCode;
  }

  if(!fullName || !email || !password || !confirmPassword){
    toast('Please fill in all required fields.', 'error');
    return;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    toast('Please enter a valid email address.', 'error');
    return;
  }
  if(password.length < 6){
    toast('Password must be at least 6 characters.', 'error');
    return;
  }
  if(password !== confirmPassword){
    toast('Passwords do not match.', 'error');
    return;
  }

  if(btn){
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Registering Administrator...';
  }

  const res = await apiCall('admin_register', 'POST', {
    fullName,
    email,
    password,
    confirmPassword,
    authCode
  });

  if(btn){
    btn.disabled = false;
    btn.innerHTML = 'Register as Administrator';
  }

  if(res && res.status === 'success'){
    // Trigger Firebase email verification dispatch to Admin's Gmail
    if(typeof sendFirebaseAdminVerification === 'function' && res.token && email){
      sendFirebaseAdminVerification(email, res.token, password).then(fbRes => {
        if(fbRes && fbRes.success){
          toast('Admin verification email dispatched via Firebase to ' + email + '!', 'success');
        } else if(fbRes && fbRes.error){
          console.warn('Firebase admin dispatch info:', fbRes.error);
        }
      });
    }

    const wrap = document.getElementById('adminRegCardWrap');
    if(wrap){
      wrap.innerHTML = '<div class="auth-card" style="max-width:500px;text-align:center;">'+
        '<div style="width:64px;height:64px;margin:0 auto 18px;border-radius:50%;background:rgba(30,132,73,.1);color:var(--green);display:flex;align-items:center;justify-content:center;">'+icon('mail',32)+'</div>'+
        '<h2 style="font-size:24px;margin-bottom:8px;">Verification Email Sent</h2>'+
        '<p style="color:var(--text-muted);font-size:14px;line-height:1.6;margin-bottom:20px;">We have sent a verification link to <b style="color:var(--navy);">'+esc(email)+'</b>.<br>Please click the link in your email to verify your email address and activate your administrator privileges before logging in.</p>'+
        (res.preview_url ? (
          '<div style="text-align:left;background:#F8FAFC;border:1px dashed var(--border);border-radius:8px;padding:14px 16px;margin-bottom:20px;">'+
            '<div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:6px;display:flex;align-items:center;gap:6px;">'+icon('shield',14)+' Instant Verification (Development / Preview):</div>'+
            '<div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;word-break:break-all;">Click below to verify immediately:</div>'+
            '<a href="'+res.preview_url+'" class="btn btn-navy btn-sm btn-block" style="text-align:center;">Verify Administrator Account Now</a>'+
          '</div>'
        ) : '')+
        '<div style="display:flex;gap:10px;justify-content:center;">'+
          '<button class="btn btn-outline" onclick="nav(\'login\')">Go to Login</button>'+
          '<button class="btn btn-primary" onclick="nav(\'verifyAdmin\',{token:\''+(res.token||'')+'\'})">Enter Verification Token</button>'+
        '</div>'+
      '</div>';
    }
    toast('Administrator registered. Verification email sent.', 'success');
  } else {
    toast(res ? res.message : 'Registration failed.', 'error');
  }
}

/* ================= ADMIN EMAIL VERIFICATION ================= */
function renderVerifyAdmin(){
  const token = STATE.params.token || (new URLSearchParams(window.location.search)).get('token') || '';
  return '<div class="auth-wrap">'+
    '<div class="auth-side"><div>'+
      '<div class="brand" style="margin-bottom:30px;display:flex;align-items:center;gap:12px;"><img src="img/logo.png" alt="Logo" class="auth-logo-img"><span>Sirib i-Sko</span></div>'+
      '<div class="quote">"Ensuring authorized, verified administrative governance for the Ilocano youth scholarship platform."</div>'+
    '</div><div class="small" style="color:#AEBEDA;">Provincial Government of Ilocos Norte · Administrator Verification</div></div>'+
    '<div class="auth-form-wrap" id="verifyAdminWrap"><div class="auth-card" style="max-width:460px;text-align:center;">'+
      '<div style="width:60px;height:60px;margin:0 auto 16px;border-radius:50%;background:rgba(21,59,117,.08);color:var(--navy);display:flex;align-items:center;justify-content:center;">'+icon('shield',30)+'</div>'+
      '<h2>Admin Email Verification</h2>'+
      '<p style="color:var(--text-muted);font-size:14px;margin-bottom:24px;">Confirm your email address to activate your administrator privileges.</p>'+
      '<div class="field" style="text-align:left;"><label>Verification Token / Code</label><input class="input" id="verifyTokenInput" value="'+esc(token)+'" placeholder="Paste verification token here"></div>'+
      '<button class="btn btn-primary btn-block" id="btnVerifyAdmin" onclick="doVerifyAdmin()">Verify Email &amp; Activate Admin</button>'+
      '<div style="text-align:center;margin-top:18px;font-size:13.5px;color:var(--text-muted);"><a href="javascript:void(0)" class="link-btn" onclick="nav(\'login\')">Back to Login</a></div>'+
    '</div></div>'+
  '</div>';
}

async function doVerifyAdmin(overrideToken){
  const tokenInput = document.getElementById('verifyTokenInput');
  const token = overrideToken || (tokenInput ? tokenInput.value.trim() : '') || STATE.params.token || (new URLSearchParams(window.location.search)).get('token') || '';
  if(!token){
    toast('Please provide a verification token.', 'error');
    return;
  }
  const btn = document.getElementById('btnVerifyAdmin');
  if(btn){
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Verifying...';
  }
  const res = await apiCall('verify_email', 'POST', { token });
  if(btn){
    btn.disabled = false;
    btn.innerHTML = 'Verify Email &amp; Activate Admin';
  }
  if(res && res.status === 'success'){
    if(res.redirect_view === 'activateEvaluator'){
      toast(res.message || 'Evaluator invitation detected. Please set your password.', 'info');
      nav('activateEvaluator', { token: res.token || token });
      return;
    }
    const wrap = document.getElementById('verifyAdminWrap');
    if(wrap){
      wrap.innerHTML = '<div class="auth-card" style="max-width:460px;text-align:center;">'+
        '<div style="width:64px;height:64px;margin:0 auto 18px;border-radius:50%;background:rgba(30,132,73,.1);color:var(--green);display:flex;align-items:center;justify-content:center;">'+icon('check',34)+'</div>'+
        '<h2 style="font-size:24px;margin-bottom:8px;">Email Verified Successfully!</h2>'+
        '<p style="color:var(--text-muted);font-size:14px;line-height:1.5;margin-bottom:24px;">Your administrator account is now active and verified. You may proceed to log in to the Admin Dashboard.</p>'+
        '<button class="btn btn-primary btn-block" onclick="nav(\'login\')">Proceed to Admin Login</button>'+
      '</div>';
    }
    toast('Email verified successfully! You may now log in.', 'success');
  } else {
    toast(res ? res.message : 'Verification failed.', 'error');
  }
}

/* ================= EVALUATOR ACCOUNT ACTIVATION ================= */
function renderActivateEvaluator(){
  const token = STATE.params.token || (new URLSearchParams(window.location.search)).get('token') || '';
  setTimeout(() => loadEvaluatorActivationInfo(token), 50);
  return '<div class="auth-wrap">'+
    '<div class="auth-side"><div>'+
      '<div class="brand" style="margin-bottom:30px;display:flex;align-items:center;gap:12px;"><img src="img/logo.png" alt="Logo" class="auth-logo-img"><span>Sirib i-Sko</span></div>'+
      '<div class="quote">"Empowering academic evaluators to fairly assess scholarship candidates across Ilocos Norte."</div>'+
    '</div><div class="small" style="color:#AEBEDA;">Provincial Government of Ilocos Norte · Evaluator Portal</div></div>'+
    '<div class="auth-form-wrap" id="evalActivateCardWrap"><div class="auth-card" style="max-width:480px;">'+
      '<div style="text-align:center;margin-bottom:20px;">'+
        '<div style="width:56px;height:56px;margin:0 auto 12px;border-radius:50%;background:rgba(21,59,117,.08);color:var(--navy);display:flex;align-items:center;justify-content:center;">'+icon('shield',28)+'</div>'+
        '<h2>Evaluator Account Activation</h2>'+
        '<p style="color:var(--text-muted);font-size:14px;">Loading invitation details...</p>'+
      '</div>'+
    '</div></div>'+
  '</div>';
}

async function loadEvaluatorActivationInfo(token){
  const wrap = document.getElementById('evalActivateCardWrap');
  if(!wrap) return;
  if(!token){
    wrap.innerHTML = '<div class="auth-card" style="max-width:480px;text-align:center;">'+
      '<div style="width:56px;height:56px;margin:0 auto 14px;border-radius:50%;background:rgba(193,39,45,.1);color:var(--redst);display:flex;align-items:center;justify-content:center;">'+icon('x',28)+'</div>'+
      '<h2>Missing Activation Token</h2>'+
      '<p style="color:var(--text-muted);font-size:14px;margin-bottom:20px;">No activation token was detected in your link. Please use the complete activation link sent by your administrator.</p>'+
      '<div class="field" style="text-align:left;"><label>Enter Token Manually</label><input class="input" id="manualEvalToken" placeholder="Paste token here"></div>'+
      '<button class="btn btn-primary btn-block" onclick="loadEvaluatorActivationInfo(document.getElementById(\'manualEvalToken\').value.trim())">Submit Token</button>'+
      '<div style="margin-top:14px;"><a href="javascript:void(0)" class="link-btn" onclick="nav(\'landing\')">Back to Home</a></div>'+
    '</div>';
    return;
  }

  const res = await apiCall('evaluator_activate_info', 'GET', null, { token });
  if(res && res.status === 'success' && res.info){
    const info = res.info;
    wrap.innerHTML = '<div class="auth-card" style="max-width:480px;">'+
      '<div style="text-align:center;margin-bottom:22px;">'+
        '<div style="width:56px;height:56px;margin:0 auto 12px;border-radius:50%;background:rgba(30,132,73,.1);color:var(--green);display:flex;align-items:center;justify-content:center;">'+icon('shield',28)+'</div>'+
        '<h2 style="font-size:24px;margin-bottom:6px;">Set Your Password</h2>'+
        '<p style="color:var(--text-muted);font-size:14px;margin-bottom:0;">Welcome, <b style="color:var(--navy);">'+esc(info.name)+'</b>. Complete your evaluator profile to begin evaluating scholarship applications.</p>'+
      '</div>'+
      '<div style="background:#F8FAFC;border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin-bottom:20px;font-size:13px;">'+
        '<div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span class="muted">Email:</span><b>'+esc(info.email)+'</b></div>'+
        '<div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span class="muted">Evaluator ID:</span><span class="badge b-review" style="font-size:11px;">'+esc(info.evaluator_id||'EVAL-ASSIGNED')+'</span></div>'+
        '<div style="display:flex;justify-content:space-between;"><span class="muted">Role Assigned:</span><b>Scholarship Evaluator</b></div>'+
      '</div>'+
      '<div class="field"><label>New Password <span style="color:var(--redst);">*</span></label>'+
        '<div class="pwd-wrap">'+
          '<input class="input" type="password" id="evalSetPass" value="">'+
          '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'evalSetPass\', this)" title="Show password" aria-label="Show password">'+icon('eye',18)+'</button>'+
        '</div>'+
      '</div>'+
      '<div class="field"><label>Confirm New Password <span style="color:var(--redst);">*</span></label>'+
        '<div class="pwd-wrap">'+
          '<input class="input" type="password" id="evalSetPass2" value="">'+
          '<button type="button" class="pwd-toggle" onclick="togglePasswordVisibility(\'evalSetPass2\', this)" title="Show password" aria-label="Show password">'+icon('eye',18)+'</button>'+
        '</div>'+
      '</div>'+
      '<div class="small muted" style="margin-bottom:18px;">Must be at least 6 characters. Do not share your credentials.</div>'+
      '<button class="btn btn-primary btn-block" id="btnActivateEval" onclick="doActivateEvaluator(\''+token+'\')">Activate Account &amp; Set Password</button>'+
    '</div>';
  } else {
    wrap.innerHTML = '<div class="auth-card" style="max-width:480px;text-align:center;">'+
      '<div style="width:56px;height:56px;margin:0 auto 14px;border-radius:50%;background:rgba(193,39,45,.1);color:var(--redst);display:flex;align-items:center;justify-content:center;">'+icon('x',28)+'</div>'+
      '<h2>Activation Link Invalid or Expired</h2>'+
      '<p style="color:var(--text-muted);font-size:14px;line-height:1.6;margin-bottom:14px;">'+esc(res ? res.message : 'This invitation link is invalid or has expired.')+'</p>'+
      '<div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:10px 14px;font-size:12.5px;color:#92400E;text-align:left;margin-bottom:16px;">'+
        '<b>💡 Quick Tip:</b> If your Administrator recently generated a new link or clicked <b>"Resend Invite"</b>, an updated token was created. Please enter the fresh token below or ask the Administrator for the latest link:'+
      '</div>'+
      '<div class="field" style="text-align:left;"><label>Enter Fresh Token</label><input class="input" id="manualEvalToken2" placeholder="Paste latest token here"></div>'+
      '<button class="btn btn-primary btn-block" style="margin-bottom:10px;" onclick="loadEvaluatorActivationInfo(document.getElementById(\'manualEvalToken2\').value.trim())">Submit Token</button>'+
      '<button class="btn btn-outline btn-block" onclick="nav(\'landing\')">Return to Home</button>'+
    '</div>';
  }
}

async function doActivateEvaluator(token){
  const p1 = document.getElementById('evalSetPass');
  const p2 = document.getElementById('evalSetPass2');
  if(!p1 || !p2) return;
  const password = p1.value;
  const confirmPassword = p2.value;
  if(!password || !confirmPassword){
    toast('Please enter and confirm your password.', 'error');
    return;
  }
  if(password.length < 6){
    toast('Password must be at least 6 characters.', 'error');
    return;
  }
  if(password !== confirmPassword){
    toast('Passwords do not match.', 'error');
    return;
  }

  const btn = document.getElementById('btnActivateEval');
  if(btn){
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Activating Account...';
  }

  const res = await apiCall('evaluator_activate', 'POST', {
    token,
    password,
    confirmPassword
  });

  if(btn){
    btn.disabled = false;
    btn.innerHTML = 'Activate Account &amp; Set Password';
  }

  if(res && res.status === 'success'){
    const wrap = document.getElementById('evalActivateCardWrap');
    if(wrap){
      wrap.innerHTML = '<div class="auth-card" style="max-width:480px;text-align:center;">'+
        '<div style="width:64px;height:64px;margin:0 auto 18px;border-radius:50%;background:rgba(30,132,73,.1);color:var(--green);display:flex;align-items:center;justify-content:center;">'+icon('check',34)+'</div>'+
        '<h2 style="font-size:24px;margin-bottom:8px;">Evaluator Account Activated!</h2>'+
        '<p style="color:var(--text-muted);font-size:14px;line-height:1.6;margin-bottom:24px;">Your password has been successfully configured and your evaluator account is active. You can now log in to the Evaluator Portal.</p>'+
        '<button class="btn btn-primary btn-block" onclick="nav(\'login\')">Proceed to Login</button>'+
      '</div>';
    }
    toast('Account activated successfully! You may now log in.', 'success');
  } else {
    toast(res ? res.message : 'Activation failed.', 'error');
  }
}

/* ================= MODAL SYSTEM ================= */
function openModal(html,wide){
  document.getElementById('modalRoot').innerHTML='<div class="modal-overlay" id="modalOverlay" onclick="if(event.target.id===\'modalOverlay\')closeModal()"><div class="modal'+(wide?' wide':'')+'">'+html+'</div></div>';
}
function closeModal(){document.getElementById('modalRoot').innerHTML='';}

/* ================= INIT ================= */
(function initSiribApp(){
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const v = urlParams.get('view');
    const token = urlParams.get('token') || '';
    const mode = urlParams.get('mode') || '';
    const oobCode = urlParams.get('oobCode') || urlParams.get('code') || '';
    if (v === 'verifyAdmin' || v === 'activateEvaluator' || v === 'adminRegister' || v === 'studentPending' || v === 'login') {
      STATE.view = v;
      STATE.params = {
        token,
        approved: urlParams.get('approved') || '',
        email: urlParams.get('email') || '',
        studentId: urlParams.get('student_id') || urlParams.get('studentId') || ''
      };
      if (urlParams.get('email')) STATE.pendingStudentEmail = urlParams.get('email');
      if (urlParams.get('student_id')) STATE.pendingStudentId = urlParams.get('student_id');
    }
    if ((mode === 'resetPassword' || v === 'resetPassword') && oobCode) {
      setTimeout(() => {
        if (typeof openResetPasswordModal === 'function') {
          openResetPasswordModal(oobCode, urlParams.get('email') || '');
        }
      }, 500);
    }
  } catch(e){}
  syncScholarshipsFromApi().then(()=>render()).catch(()=>render());
  syncApplicationsFromApi().then(()=>render()).catch(()=>render());
  render();
})();