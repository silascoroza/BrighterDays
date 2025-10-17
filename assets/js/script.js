const sampleImages = [
    'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/563050409_666397329874925_5509937055450794615_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IjlSbpsCiscQ7kNvwH4sJ5C&_nc_oc=Adkxk2zU2xXVzGOyYWnRvTM-fgOTvl8hvr0bywtfsCfM4IzM5G1N9fGBQ2oLfUhRi7Y&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=9fyf5HkuZJhfpsSmn8epuQ&oh=00_Afdp6uH4ux5qhlpmmrSzm7syK7xz5z65nQKb29ip_iNNog&oe=68F8603D',
    'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/557341242_653428837838441_2411231550241371218_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9GEPhVnFEtEQ7kNvwFElTPi&_nc_oc=Adk-cC5Cpbmgb0L74JacQp6ajzmr8Jn7HirioYT4BXqy1h5KlBybNEm82ITWZ_b0hyI&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=UydzqFffaKzVIDcjHJfOnw&oh=00_AfdD4Ou1ZJgNw_1WI-bBcUb0llEgJAwAJllyP0hL-At9Mw&oe=68F838CB',
    'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/544412668_633383276509664_960114027047868067_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5XercK6Oi8kQ7kNvwEvDm4u&_nc_oc=AdlS6rw96njsbef_25oftVF4S7N5J8WLQ6BgrftokqNxVzR2aK91V_o94YTnqnkfdF0&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=_St7qJqi_fZomVD_E9akug&oh=00_Afc28mf_KxWgHhoMW-nTtNZVrA5DIKHfr3Xa5lPal-eX9A&oe=68F84D28',
    'https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/518345864_592540030593989_8929812627456003761_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9PGhToSxfUoQ7kNvwFZQLsM&_nc_oc=Adm4s1eCUKaBsiIbISfAB3DQdvRAJH2K_j8U2uIvmw9q4gAzbAAFjTJ2bL40AdQcjZs&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=_7UbFDdIVdhwEFUvlvStwg&oh=00_Afe8ku1-RHfIYOca0i3kKrcyrM-A2wmNLTc07jHD-OAojw&oe=68F8362E',
    'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/499897926_553153157866010_7937707302290700563_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3bd-Kp4lv6oQ7kNvwEoOSJB&_nc_oc=AdkJMCi8iWxs6PP50y0KjPxYJpgaat0kCgh2v2z2ASG1ukYYlpgibAL4vfhe-AwBnO0&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=oTM6N-YhEZO3br-xYW4dPA&oh=00_AffpUTNEe1xr6EfjFPvTo8P2T5LW1Nz0TTK5xJ9kRBPi0w&oe=68F854DC',
    'https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/494916056_537353049446021_4809418469713332215_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Gk_xIdQwIPcQ7kNvwHRyCTE&_nc_oc=AdnvLNUzTNpQC9n1G3bc5CnhTWkElBlRRFbpRRs1IGfbxy4HLVcPjEtkO9TmI7SrBYE&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=MnRYFIShJE2d63siQYzNcg&oh=00_AffeAWIFNuLdnV1M8PHQYyZsvSBJ6Td_1wqJ-8FLs70qoQ&oe=68F86758',
    'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/492334498_524992287348764_2920401309094397702_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SlO2ZvCHfAEQ7kNvwEOwbmO&_nc_oc=Adk77iN3JEDiUDjRZsX6v1D1vCZ0STi1Hd4vK8v5izK7YhGkaxbYfvo6ax5ug5Y3ZQo&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=dxLhjOTzNebedXexDZn3tQ&oh=00_AfdOw5pYEGBxbty_9v8GjUuufnOnM8M7bfXwrHoiSYu71Q&oe=68F859CE',
    'https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/491090792_524519420729384_2353316550167970562_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BPksM8VBotsQ7kNvwG5DBVW&_nc_oc=Adm4F6UvZxsG-0T9i9dr16OigbduqV3uc1Gxlbv1qsO-6wvFkIZmWtMcwX2GIPzFxoA&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=ZiJLOa5HBHEq8lbO1kVe5Q&oh=00_AffRCCqiq1aeYLC7-5n3SSV8DcxCokD_M-t_146KvTIu-g&oe=68F8616E'
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
    