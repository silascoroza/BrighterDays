// Brighter Days Photography PH - script.js
// Full interactive booking system + admin/sales/portfolio
// Works entirely in-browser using localStorage (demo).

const sampleImages = [
    'https://scontent.fmnl25-6.fna.fbcdn.net/v/t39.30808-6/537141328_620558844458774_3155269388450291141_n.jpg',
    'https://scontent.fmnl25-7.fna.fbcdn.net/v/t39.30808-6/514481433_582619544919371_6276285762070203654_n.jpg',
    'https://scontent.fmnl25-6.fna.fbcdn.net/v/t39.30808-6/535004763_620559201125405_8258268020115992210_n.jpg',
    'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/478728845_473847892463204_2707422079504110641_n.jpg',
    'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/495454484_537352606112732_3826383859083215469_n.jpg',
    'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/490127069_518955017952491_8498797780707576321_n.jpg',
    'https://scontent.fmnl25-6.fna.fbcdn.net/v/t39.30808-6/514481433_582619544919371_6276285762070203654_n.jpg',
    'https://scontent.fmnl25-6.fna.fbcdn.net/v/t39.30808-6/495454484_537352606112732_3826383859083215469_n.jpg'
  ];
  
    
    function $(id){ return document.getElementById(id); }
    function on(id, ev, fn){ const el=$(id); if(el) el.addEventListener(ev, fn); }
    function exists(id){ return !!$(id); }
    
    /* Initialize featured gallery (home) */
    function initGallery(){
      const g = $('featuredGallery');
      if(!g) return;
      g.innerHTML = '';
      sampleImages.slice(0,8).forEach(src=>{
        const card=document.createElement('div'); card.className='card';
        const img=document.createElement('img'); img.src=src; img.alt='Featured';
        card.appendChild(img); g.appendChild(card);
      });
    }
    
    /* Initialize portfolio gallery */
    function loadPortfolio(){
      const g = $('portfolioGallery');
      if(!g) return;
      g.innerHTML = '';
      sampleImages.forEach(src=>{
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Portfolio';
        g.appendChild(img);
      });
      showSection('portfolio');
    }
    
    const overlay = $('overlay');
    const overlayContent = $('overlayContent');
    const userLabel = $('userLabel');
    const loginBtn = $('loginBtn');
    const registerBtn = $('registerBtn');
    const guestLoginBtn = $('guestLogin');
    const guestRegisterBtn = $('guestRegister');
    const bookNowBtn = $('bookNow');
    const bookNowCta = $('bookNowCta');
    const myBookingsBtn = $('myBookings');
    const adminLink = $('adminLink');
    const salesLink = $('salesLink');
    const portfolioLink = $('portfolioLink');
    const sidebarToggle = $('sidebarToggle');
    
    let currentUser = JSON.parse(localStorage.getItem('bd_user') || 'null');
    
    function showSection(id){
      const sections = ['homePage','bookingFlow','myBookingsSection','thankYou','about','adminDashboard','salesDashboard','portfolio'];
      sections.forEach(s => { const el=$(s); if(el) el.classList.add('hidden'); });
      const target = $(id);
      if(target) target.classList.remove('hidden');
      window.scrollTo({top:0,behavior:'smooth'});
    }
    
    /* Show guest landing or app container depending on auth */
    function showGuest(){
      $('guestHome')?.classList.remove('hidden');
      $('appContainer')?.classList.add('hidden');
    }
    function showApp(){
      $('guestHome')?.classList.add('hidden');
      $('appContainer')?.classList.remove('hidden');
      showSection('homePage');
    }
    
    /* ================ (login/register/logout) ================ */
    function openLogin(){
      overlay?.classList.remove('hidden');
      overlayContent.innerHTML = `
        <h3>Login</h3>
        <form id="loginForm">
          <input placeholder="Email" id="loginEmail" required />
          <input placeholder="Password" type="password" id="loginPass" required />
          <div class="actions">
            <button class="btn" type="button" id="closeOverlay">Cancel</button>
            <button class="btn btn-primary" type="submit">Login</button>
          </div>
        </form>`;
      on('closeOverlay','click',()=> overlay.classList.add('hidden'));
      on('loginForm','submit', handleLoginSubmit);
    }
    function handleLoginSubmit(e){
      e.preventDefault();
      const email = $('loginEmail').value.trim();
      const name = email.split('@')[0] || 'Client';
      currentUser = { name, email };
      localStorage.setItem('bd_user', JSON.stringify(currentUser));
      userLabel.textContent = name;
      overlay.classList.add('hidden');
      updateAuthButtons();
      alert('Welcome back, ' + name);
    }
    function openRegister(){
      overlay?.classList.remove('hidden');
      overlayContent.innerHTML = `
        <h3>Register</h3>
        <form id="regForm">
          <input placeholder="Full name" id="regName" required />
          <input placeholder="Email" id="regEmail" required />
          <input placeholder="Password" type="password" id="regPass" required />
          <div class="actions">
            <button class="btn" type="button" id="closeOverlay2">Cancel</button>
            <button class="btn btn-primary" type="submit">Create account</button>
          </div>
        </form>`;
      on('closeOverlay2','click',()=> overlay.classList.add('hidden'));
      on('regForm','submit', e=>{
        e.preventDefault();
        const name = $('regName').value.trim();
        const email = $('regEmail').value.trim();
        currentUser = { name, email };
        localStorage.setItem('bd_user', JSON.stringify(currentUser));
        userLabel.textContent = name;
        overlay.classList.add('hidden');
        updateAuthButtons();
        alert('Welcome, ' + name);
      });
    }
    function handleLogout(){
      localStorage.removeItem('bd_user');
      currentUser = null;
      userLabel.textContent = 'Guest';
      updateAuthButtons();
      alert('You have been logged out.');
      showGuest();
    }
    
    function updateAdminVisibility(){
      if(!adminLink) return;
      const email = currentUser?.email || '';
      if(email === 'admin@brighterdays.ph'){
        adminLink.classList.remove('hidden');
        salesLink.classList.remove('hidden');
      } else {
        adminLink.classList.add('hidden');
        salesLink.classList.add('hidden');
      }
      // Portfolio always visible for all users
      portfolioLink.classList.remove('hidden');
    }
     
    
    /* Update header buttons and views after auth change */
    function updateAuthButtons(){
      // Home button always visible (exists in markup)
      if(currentUser){
        // hide login/register
        loginBtn && (loginBtn.style.display = 'none');
        registerBtn && (registerBtn.style.display = 'none');
        // show sidebar app
        showApp();
        // update user label
        userLabel.textContent = currentUser.name || 'Client';
        // show logout button in nav (if not present append)
        if(!$('logoutBtn')){
          const nav = loginBtn ? loginBtn.parentElement : null;
          if(nav){
            const lg = document.createElement('button'); lg.id='logoutBtn'; lg.className='btn'; lg.textContent='Logout';
            lg.onclick = handleLogout; nav.appendChild(lg);
          }
        } else { $('logoutBtn').style.display='inline-block'; }
      } else {
        loginBtn && (loginBtn.style.display = 'inline-block');
        registerBtn && (registerBtn.style.display = 'inline-block');
        $('logoutBtn') && ($('logoutBtn').style.display='none');
        showGuest();
      }
    
      updateAdminVisibility();
    }
    
    /* ================ BOOKING FLOW ================ */
    function startBooking(){
      if(!currentUser){ openLogin(); return; }
      showSection('bookingFlow'); showStep('theme');
    }
    
    function showStep(step){
      const mapping = {
        theme: ['stepTheme','s-step'],
        package: ['stepPackage','s-package'],
        confirm: ['stepConfirm','s-confirm'],
        payment: ['stepPayment','s-pay']
      };
      ['stepTheme','stepPackage','stepConfirm','stepPayment'].forEach(id => $(id)?.classList.add('hidden'));
      ['s-step','s-package','s-confirm','s-pay'].forEach(id => $(id)?.classList.remove('active'));
      const [content, tab] = mapping[step];
      $(content)?.classList.remove('hidden'); $(tab)?.classList.add('active');
    }
    
    /* THEME GENERATION */
    function generateTheme(){
      const prompt = $('themePrompt') ? $('themePrompt').value.trim() : '';
      const preview = $('previewImages');
      if(!preview) return;
      preview.innerHTML = '';
      // In this demo we show sample images as "generated" thumbnails
      for(let i=0;i<3;i++){
        const img = document.createElement('img');
        img.src = sampleImages[i % sampleImages.length];
        img.alt = 'Theme preview';
        img.style.height = '180px';
        img.style.objectFit = 'cover';
        preview.appendChild(img);
      }
      $('themePreview')?.classList.remove('hidden');
    }
    
    /* Confirm theme -> package step */
    function confirmTheme(){ showStep('package'); }
    
    /* Package -> confirm */
    function toConfirm(e){
      e && e.preventDefault();
      const date = $('shootDate')?.value || '';
      const style = $('chooseStyle')?.value || '';
      const pkg = $('choosePackage')?.value || '';
      window._booking = { date, style, pkg };
      $('confirmSummary').innerHTML = `<p class="tiny"><strong>Date:</strong> ${date || 'TBD'}<br><strong>Style:</strong> ${style}<br><strong>Package:</strong> ${pkg}</p>`;
      showStep('confirm');
    }
    
    /* Proceed to payment */
    function toPayment(){ showStep('payment'); }
    
    /* Payment handling (mock) */
    function handlePayment(e){
      e && e.preventDefault();
      const bookings = JSON.parse(localStorage.getItem('bd_bookings') || '[]');
      const booking = Object.assign({ id: Date.now(), user: currentUser?.name || 'Guest', email: currentUser?.email || '', status: 'Paid' }, window._booking || {});
      bookings.push(booking);
      localStorage.setItem('bd_bookings', JSON.stringify(bookings));
      // show thank you
      showSection('thankYou');
    }
    
    /* My bookings list (for logged-in user) */
    function showBookings(){
      if(!currentUser){ openLogin(); return; }
      const bookings = JSON.parse(localStorage.getItem('bd_bookings') || '[]');
      const list = bookings.filter(b => b.email === currentUser.email || b.user === currentUser.name);
      const out = list.map(b => `<div class="booking-item"><strong>${b.style || '—'}</strong><div class="tiny">${b.date || 'Date not set'} — ${b.pkg}</div><div class="tiny">Status: ${b.status || 'Pending'}</div></div>`).join('') || '<div class="tiny">No bookings yet.</div>';
      $('bookingsList').innerHTML = out;
      showSection('myBookingsSection');
    }
    
    /* ================ ADMIN / SALES ================ */
    function loadAdminDashboard(){
      const bookings = JSON.parse(localStorage.getItem('bd_bookings') || '[]');
      const tableBody = $('adminBookings');
      if(!tableBody) return;
      tableBody.innerHTML = '';
      if(bookings.length === 0){ tableBody.innerHTML = '<tr><td colspan="7">No bookings found.</td></tr>'; showSection('adminDashboard'); return; }
    
      bookings.forEach((b, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${b.user || '—'}</td>
          <td>${b.email || '—'}</td>
          <td>${b.date || '—'}</td>
          <td>${b.style || '—'}</td>
          <td>${b.pkg || '—'}</td>
          <td>${b.status || 'Pending'}</td>
          <td>
            <button class="action-btn paid-btn" onclick="markAsPaid(${idx})">Mark Paid</button>
            <button class="action-btn pending-btn" onclick="markAsPending(${idx})">Pending</button>
            <button class="action-btn delete-btn" onclick="deleteBooking(${idx})">Delete</button>
          </td>
        `;
        tableBody.appendChild(tr);
      });
      updateSalesDashboard();
      showSection('adminDashboard');
    }
    function markAsPaid(index){
      const bookings = JSON.parse(localStorage.getItem('bd_bookings') || '[]');
      if(!bookings[index]) return alert('Booking not found');
      bookings[index].status = 'Paid';
      localStorage.setItem('bd_bookings', JSON.stringify(bookings));
      loadAdminDashboard();
    }
    function markAsPending(index){
      const bookings = JSON.parse(localStorage.getItem('bd_bookings') || '[]');
      if(!bookings[index]) return alert('Booking not found');
      bookings[index].status = 'Pending';
      localStorage.setItem('bd_bookings', JSON.stringify(bookings));
      loadAdminDashboard();
    }
    function deleteBooking(index){
      if(!confirm('Delete this booking?')) return;
      const bookings = JSON.parse(localStorage.getItem('bd_bookings') || '[]');
      bookings.splice(index,1);
      localStorage.setItem('bd_bookings', JSON.stringify(bookings));
      loadAdminDashboard();
    }
    
    /* CSV export */
    function downloadReport(){
      const bookings = JSON.parse(localStorage.getItem('bd_bookings') || '[]');
      if(bookings.length === 0) return alert('No bookings to export.');
      const header = ['Customer','Email','Date','Style','Package','Status'].join(',') + '\n';
      const rows = bookings.map(b => {
        return [b.user || '', b.email || '', b.date || '', b.style || '', `"${b.pkg || ''}"`, b.status || ''].join(',');
      }).join('\n');
      const csv = header + rows;
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'BrighterDays_Report.csv'; a.click();
      URL.revokeObjectURL(url);
    }
    
    /* Sales dashboard calculation */
    function updateSalesDashboard(){
      const bookings = JSON.parse(localStorage.getItem('bd_bookings') || '[]');
      const totalBookings = bookings.length;
      const paidBookings = bookings.filter(b => b.status === 'Paid').length;
      let totalSales = 0;
      bookings.forEach(b => {
        const pkg = (b.pkg || '').toLowerCase();
        if(b.status === 'Paid'){
          if(pkg.includes('silver') || pkg.includes('₱5,000') || pkg.includes('5,000')) totalSales += 5000;
          else if(pkg.includes('gold') || pkg.includes('₱9,000') || pkg.includes('9,000')) totalSales += 9000;
          else if(pkg.includes('platinum') || pkg.includes('₱18,000') || pkg.includes('18,000')) totalSales += 18000;
        }
      });
      $('totalSales') && ($('totalSales').textContent = `₱${totalSales.toLocaleString()}`);
      $('totalBookings') && ($('totalBookings').textContent = totalBookings);
      $('paidBookings') && ($('paidBookings').textContent = paidBookings);
    }
    
    /* ================ Sidebar toggle (simple) ================ */
    on('sidebarToggle','click',()=>{
      const sb = $('sidebar');
      if(sb) sb.classList.toggle('hidden');
    });
    
    /* ================ Small helpers for safe clicks ================ */
    function safeOn(id, ev, fn){ if($(id)) on(id, ev, fn); }
    
    /* ================ EVENT BINDINGS & BOOT ================ */
    window.addEventListener('DOMContentLoaded', ()=>{
      // Populate galleries
      initGallery();
      loadPortfolio();
    
      // Buttons
      safeOn('loginBtn','click', openLogin);
      safeOn('registerBtn','click', openRegister);
      safeOn('guestLogin','click', openLogin);
      safeOn('guestRegister','click', openRegister);
      safeOn('homeBtn','click', ()=>{ showSection('homePage'); });
    
      // Booking
      safeOn('bookNow','click', startBooking);
      safeOn('bookNowCta','click', startBooking);
      safeOn('generateTheme','click', generateTheme);
      safeOn('skipGen','click', generateTheme);
      safeOn('rePrompt','click', ()=> $('themePrompt')?.focus());
      safeOn('confirmTheme','click', confirmTheme);
      safeOn('backToTheme','click', (e)=>{ e.preventDefault(); showStep('theme'); });
      safeOn('toConfirm','click', toConfirm);
      safeOn('backToPackage','click', ()=> showStep('package'));
      safeOn('toPayment','click', toPayment);
      safeOn('backToConfirm','click', ()=> showStep('confirm'));
      safeOn('payNow','click', handlePayment);
      safeOn('myBookings','click', showBookings);
    
      // Admin / Sales / Portfolio links (admin only)
      safeOn('adminLink','click', loadAdminDashboard);
      safeOn('salesLink','click', ()=>{ updateSalesDashboard(); showSection('salesDashboard'); });
      safeOn('portfolioLink','click', loadPortfolio);
      safeOn('downloadReport','click', downloadReport);
    
      // Home (toHome button on thank you)
      safeOn('toHome','click', ()=> showSection('homePage'));
    
      // If someone logs in via overlay form, login handler will update UI.
      // If returning user is stored in localStorage:
      currentUser = JSON.parse(localStorage.getItem('bd_user') || 'null');
      if(currentUser){
        userLabel.textContent = currentUser.name || 'Client';
        updateAuthButtons();
        updateAdminVisibility();
      } else {
        updateAuthButtons();
      }
    });
    