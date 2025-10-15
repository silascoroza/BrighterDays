// Brighter Days Photography PH - Interactive Booking System
// Handles gallery, login/register, logout, home navigation, and booking flow

const sampleImages = [
    'https://scontent.fmnl25-6.fna.fbcdn.net/v/t39.30808-6/537141328_620558844458774_3155269388450291141_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=36tPfkSIJ_AQ7kNvwFhMHn8&_nc_oc=Adm_VGdhl386jI89RX8wR9OuCZ88btGmQei32cIhvl6xikbtaEFPrIRv40Si9KQrtvs&_nc_zt=23&_nc_ht=scontent.fmnl25-6.fna&_nc_gid=tVkMiim8ir979NOCi3E0mQ&oh=00_Afer2p9kZSEY_C-LN51-kmki3O1Lx2RwYrJA-mLot6MwMg&oe=68F45A98',
    'https://scontent.fmnl25-7.fna.fbcdn.net/v/t39.30808-6/514481433_582619544919371_6276285762070203654_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xlGYN3NkUogQ7kNvwHDFg2y&_nc_oc=AdkXciepJWA4NtrmG7veQc4bxTNDwio-ZWfdhqlUhkWMWBkAqNJMAEG6ZlepGtn-o54&_nc_zt=23&_nc_ht=scontent.fmnl25-7.fna&_nc_gid=yuvfAYIDOIPwc4H-AaWBbQ&oh=00_AfcJHEUhBZAQHXYm20sO8dax1729-y7rDO_mAkBacfSW8w&oe=68F45521',
    'https://scontent.fmnl25-6.fna.fbcdn.net/v/t39.30808-6/535004763_620559201125405_8258268020115992210_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SASbKxhaVRIQ7kNvwE2zuAJ&_nc_oc=AdnKO8MC8dA1QwmjGO-Yrn1PCLw8OH8MohDRa8TdqJwZkzJXFSWuUeWtozJ7ZO40Sd4&_nc_zt=23&_nc_ht=scontent.fmnl25-6.fna&_nc_gid=1PBn4xjrH2KwfImjr0lJpw&oh=00_Afc56zVA0Z3luFHzevkp8PQs9Sx02-_9fbvkhgR0NwWNoQ&oe=68F46D38',
    'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/478728845_473847892463204_2707422079504110641_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uUUQLo-yN3sQ7kNvwGDrVzq&_nc_oc=AdmdgwgroXsiXEApLBIH4mPAJRXC-MLI761BYf0otqrd0rbU_QNJkkoUmMowqr7CUHE&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=Wte-gAZZ45nJATLeqj4FMQ&oh=00_AfcYxgjRymSdnd90XnmyKf70DRCAYGNzgnqsm7B9OptxEQ&oe=68F46129',
    'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/495454484_537352606112732_3826383859083215469_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5KAdm28ktDIQ7kNvwENanq1&_nc_oc=Adlc4YIEuyYe57OQojPdVOjlGFH1Jq1GmfjQ4wzFkQIsgi0bdTKrKyfxOjnoDQRnVRo&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=SRgMNR-sP3BW5iEvT_WMsQ&oh=00_AfeKwKpcsumr98Y8GSmvL9FXf2ZggsCt2s3OVq8CS183oA&oe=68F4720A',
    'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/490127069_518955017952491_8498797780707576321_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=inCkzfj7kHMQ7kNvwHJI_Ev&_nc_oc=Adk7mtesPVjqnwRXYP8STsFFWJjoXqq1yaAQqi1QaetCiYuk51GeG5Nu6ToF5ectEHI&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=9OhdltzbBkw2Y9hhegJi5w&oh=00_Afd_g7xOBVnIGQ3uR6D5yV_Uwh7FW8vfXb4yIFg93-oKnw&oe=68F4586B'
  ];
  
  // Initialize featured gallery
  function initGallery() {
    const g = document.getElementById('featuredGallery');
    sampleImages.slice(0, 6).forEach(src => {
      const card = document.createElement('div');
      card.className = 'card';
      const img = document.createElement('img');
      img.src = src;
      card.appendChild(img);
      g.appendChild(card);
    });
  }
  initGallery();
  
  // Authentication simulation
  const overlay = document.getElementById('overlay');
  const overlayContent = document.getElementById('overlayContent');
  const userLabel = document.getElementById('userLabel');
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const myBookingsBtn = document.getElementById('myBookings');
  const packagesBtn = document.getElementById('packages');
  const supportBtn = document.getElementById('support');
  let logoutBtn, homeBtn;
  
  let currentUser = JSON.parse(localStorage.getItem('bd_user') || 'null');
  if (currentUser) {
    userLabel.textContent = currentUser.name;
  }
  updateAuthButtons();
  
  function updateAuthButtons() {
    const nav = loginBtn.parentElement;
  
    // Ensure home button exists for all users
    if (!homeBtn) {
      homeBtn = document.createElement('button');
      homeBtn.className = 'btn';
      homeBtn.textContent = 'Home';
      homeBtn.onclick = goHome;
      nav.appendChild(homeBtn); // adds to the right (end)
  ;
    }
    homeBtn.style.display = 'inline-block';
  
    if (currentUser) {
      loginBtn.style.display = 'none';
      registerBtn.style.display = 'none';
  
      // Show sidebar buttons for logged-in users
      myBookingsBtn.style.display = 'block';
      packagesBtn.style.display = 'block';
      supportBtn.style.display = 'block';
  
      if (!logoutBtn) {
        logoutBtn = document.createElement('button');
        logoutBtn.className = 'btn';
        logoutBtn.textContent = 'Logout';
        logoutBtn.onclick = handleLogout;
        nav.appendChild(logoutBtn);
      }
      logoutBtn.style.display = 'inline-block';
    } else {
      loginBtn.style.display = 'inline-block';
      registerBtn.style.display = 'inline-block';
  
      // Hide restricted sidebar buttons for guests
      myBookingsBtn.style.display = 'none';
      packagesBtn.style.display = 'none';
      supportBtn.style.display = 'none';
  
      if (logoutBtn) logoutBtn.style.display = 'none';
    }
  }
  
  function handleLogout() {
    localStorage.removeItem('bd_user');
    currentUser = null;
    userLabel.textContent = 'Guest';
    updateAuthButtons();
    alert('You have been logged out.');
    goHome();
  }
  
  function goHome() {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('bookingFlow').classList.add('hidden');
    document.getElementById('myBookingsSection').classList.add('hidden');
    document.getElementById('thankYou').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function showLogin() {
    overlay.classList.remove('hidden');
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
  
    document.getElementById('closeOverlay').onclick = () => overlay.classList.add('hidden');
    document.getElementById('loginForm').onsubmit = e => {
      e.preventDefault();
      const name = document.getElementById('loginEmail').value.split('@')[0] || 'Client';
      currentUser = { name };
      localStorage.setItem('bd_user', JSON.stringify(currentUser));
      userLabel.textContent = name;
      overlay.classList.add('hidden');
      alert('Logged in as ' + name);
      updateAuthButtons();
    };
  }
  
  function showRegister() {
    overlay.classList.remove('hidden');
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
  
    document.getElementById('closeOverlay2').onclick = () => overlay.classList.add('hidden');
    document.getElementById('regForm').onsubmit = e => {
      e.preventDefault();
      const name = document.getElementById('regName').value;
      currentUser = { name };
      localStorage.setItem('bd_user', JSON.stringify(currentUser));
      userLabel.textContent = name;
      overlay.classList.add('hidden');
      alert('Welcome, ' + name);
      updateAuthButtons();
    };
  }
  
  document.getElementById('loginBtn').onclick = showLogin;
  document.getElementById('registerBtn').onclick = showRegister;
  
  // Booking Flow
  document.getElementById('bookNow').onclick = () => startBooking();
  document.getElementById('bookNowCta').onclick = () => startBooking();
  
  function startBooking() {
    if (!currentUser) {
      showLogin();
      return;
    }
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('bookingFlow').classList.remove('hidden');
    showStep('theme');
  }
  
  function showStep(step) {
    ['stepTheme', 'stepPackage', 'stepConfirm', 'stepPayment'].forEach(id => document.getElementById(id).classList.add('hidden'));
    ['s-step', 's-package', 's-confirm', 's-pay'].forEach(x => document.getElementById(x).classList.remove('active'));
  
    const stepMap = {
      theme: ['stepTheme', 's-step'],
      package: ['stepPackage', 's-package'],
      confirm: ['stepConfirm', 's-confirm'],
      payment: ['stepPayment', 's-pay']
    };
  
    const [content, tab] = stepMap[step];
    document.getElementById(content).classList.remove('hidden');
    document.getElementById(tab).classList.add('active');
  }
  
  // Theme generation
  document.getElementById('generateTheme').onclick = () => {
    const preview = document.getElementById('previewImages');
    preview.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const img = document.createElement('img');
      img.src = sampleImages[i];
      preview.appendChild(img);
    }
    document.getElementById('themePreview').classList.remove('hidden');
  };
  
  document.getElementById('skipGen').onclick = () => {
    document.getElementById('themePreview').classList.remove('hidden');
  };
  
  document.getElementById('rePrompt').onclick = () => {
    document.getElementById('themePrompt').focus();
  };
  
  document.getElementById('confirmTheme').onclick = () => showStep('package');
  
  // Package confirmation
  document.getElementById('backToTheme').onclick = e => {
    e.preventDefault();
    showStep('theme');
  };
  
  document.getElementById('toConfirm').onclick = e => {
    e.preventDefault();
    const date = document.getElementById('shootDate').value;
    const style = document.getElementById('chooseStyle').value;
    const pkg = document.getElementById('choosePackage').value;
    window._booking = { date, style, pkg };
    document.getElementById('confirmSummary').innerHTML = `<p class="tiny"><strong>Date:</strong> ${date || 'TBD'}<br><strong>Style:</strong> ${style}<br><strong>Package:</strong> ${pkg}</p>`;
    showStep('confirm');
  };
  
  document.getElementById('backToPackage').onclick = () => showStep('package');
  document.getElementById('toPayment').onclick = () => showStep('payment');
  document.getElementById('backToConfirm').onclick = () => showStep('confirm');
  
  document.getElementById('payNow').onclick = e => {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem('bd_bookings') || '[]');
    const booking = Object.assign({ id: Date.now(), user: currentUser?.name || 'Guest', status: 'confirmed' }, window._booking || {});
    bookings.push(booking);
    localStorage.setItem('bd_bookings', JSON.stringify(bookings));
  
    document.getElementById('bookingFlow').classList.add('hidden');
    document.getElementById('thankYou').classList.remove('hidden');
    document.getElementById('myBookingsSection').classList.add('hidden');
  };
  
  document.getElementById('toHome').onclick = goHome;
  
  // My Bookings
  document.getElementById('myBookings').onclick = () => {
    if (!currentUser) {
      showLogin();
      return;
    }
    const bookings = JSON.parse(localStorage.getItem('bd_bookings') || '[]');
    const out = bookings
      .map(b => `<div class="booking-item"><strong>${b.style || '—'}</strong><div class="tiny">${b.date || 'Date not set'} — ${b.pkg}</div></div>`)
      .join('') || '<div class="tiny">No bookings yet.</div>';
  
    document.getElementById('bookingsList').innerHTML = out;
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('myBookingsSection').classList.remove('hidden');
    document.getElementById('bookingFlow').classList.add('hidden');
  };
  
  // Smooth scroll to About
  const aboutLink = document.getElementById('aboutLink');
  aboutLink.onclick = e => {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };