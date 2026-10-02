const loggedUser=JSON.parse(localStorage.getItem('trainerhrms_users')||'[]').find(x=>x.username===sessionStorage.getItem('trainerhrms_user'));if(loggedUser){document.getElementById('welcomeTitle').textContent='Welcome, '+loggedUser.name+'!';}
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let seconds=0, running=false, onBreak=false, timerId=null, currentStatus='At Work';

function pad(n){return String(n).padStart(2,'0')}
function formatTime(total){const h=Math.floor(total/3600),m=Math.floor(total%3600/60),s=total%60;return pad(h)+':'+pad(m)+':'+pad(s)}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2600)}
function updateTimer(){ $('#workTimer').textContent=formatTime(seconds); $('#hoursText').textContent=(seconds/3600).toFixed(2)+' h' }
function startTimer(){if(timerId)return;running=true;timerId=setInterval(()=>{if(!onBreak){seconds++;updateTimer()}},1000)}
function stopTimer(){clearInterval(timerId);timerId=null;running=false}
function setStatus(status){currentStatus=status;$$('.status-card').forEach(b=>b.classList.toggle('selected',b.dataset.status===status));$('#workStatus').textContent=status;toast('Work mode changed to '+status)}
function openModal(id){$('#'+id).classList.remove('hidden')}
function closeModal(id){$('#'+id).classList.add('hidden')}

const now=new Date();
$('#todayDate').textContent=now.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
$('#eodDate').value=now.toISOString().slice(0,10);

$$('.status-card').forEach(b=>b.addEventListener('click',()=>setStatus(b.dataset.status)));
$('#checkInBtn').addEventListener('click',()=>{if(!running){startTimer();$('#checkInBtn').textContent='Check Out';toast('Checked in successfully. Timer started.')}else{stopTimer();$('#checkInBtn').textContent='Check In';toast('Checked out. Total time saved for this session.')}});

$('#breakBtn').addEventListener('click',()=>{if(!running){toast('Please check in first.');return}onBreak=!onBreak;$('#breakBtn').textContent=onBreak?'End Break':'Start Break';toast(onBreak?'Break started. Timer paused.':'Break ended. Timer resumed.')});

$$('[data-action="leave"]').forEach(b=>b.addEventListener('click',()=>openModal('leaveModal')));
$$('[data-action="eod"]').forEach(b=>b.addEventListener('click',()=>openModal('eodModal')));
$$('[data-section="report"]').forEach(b=>b.addEventListener('click',()=>{$('#reportPanel').classList.remove('hidden');$('#reportPanel').scrollIntoView({behavior:'smooth'});renderReport()}));
$$('.nav-link').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.action==='leave'||b.dataset.action==='eod')return;$$('.nav-link').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(b.dataset.section==='report'){$('#reportPanel').classList.remove('hidden');renderReport()}else $('#reportPanel').classList.add('hidden')}));
$$('[data-close]').forEach(b=>b.addEventListener('click',()=>closeModal(b.dataset.close)));
$$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.add('hidden')}));

$('#leaveForm').addEventListener('submit',e=>{e.preventDefault();closeModal('leaveModal');toast('Leave request submitted successfully.');addNotification('Leave request submitted','Your leave request is waiting for approval.','Now');e.target.reset()});
$('#eodForm').addEventListener('submit',e=>{e.preventDefault();closeModal('eodModal');toast('EOD report submitted successfully.');addNotification('EOD submitted','Your end-of-day report was recorded.','Now');e.target.reset();$('#eodDate').value=now.toISOString().slice(0,10)});

function addNotification(title,text,time){const box=$('#notifications');const item=document.createElement('div');item.className='notification';item.innerHTML='<span class="n-icon">✓</span><div><strong>'+title+'</strong><p>'+text+'</p></div><small>'+time+'</small>';box.prepend(item)}
$('#clearNotifications').addEventListener('click',()=>{$('#notifications').innerHTML='<div class="notification"><span class="n-icon">✓</span><div><strong>All caught up</strong><p>No new notifications.</p></div><small>Now</small></div>';toast('Notifications cleared')});
$('#themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');$('#themeToggle').textContent=document.body.classList.contains('dark')?'☾':'☼'});

function renderReport(){const rows=[['01 Oct 2026','At Work','09:30 AM','06:30 PM','9.00 h','Present'],['30 Sep 2026','College Session','09:25 AM','06:20 PM','8.92 h','Present'],['29 Sep 2026','Remote Work','09:40 AM','06:10 PM','8.50 h','WFH'],['28 Sep 2026','At Work','09:28 AM','06:25 PM','8.95 h','Present'],['26 Sep 2026','At Work','09:35 AM','01:10 PM','3.58 h','Half Day']];$('#reportBody').innerHTML=rows.map(r=>'<tr>'+r.map((c,i)=>'<td>'+(i===5?'<span class="pill">'+c+'</span>':c)+'</td>').join('')+'</tr>').join('')}
$('#exportBtn').addEventListener('click',()=>{const csv='Date,Mode,Check-in,Check-out,Hours,Status\n01 Oct 2026,At Work,09:30 AM,06:30 PM,9.00 h,Present\n30 Sep 2026,College Session,09:25 AM,06:20 PM,8.92 h,Present\n29 Sep 2026,Remote Work,09:40 AM,06:10 PM,8.50 h,WFH';const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='trainerhrms-attendance.csv';a.click();URL.revokeObjectURL(a.href);toast('Attendance CSV exported')});
updateTimer();

$('#logoutBtn').addEventListener('click',()=>{sessionStorage.removeItem('trainerhrms_auth');location.replace('login.html')});
