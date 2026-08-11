/* -------------------------------------------------------------------
   NestX Aerospace - Official Corporate Web Logic & Data
   ------------------------------------------------------------------- */

// Hardware & Product Portfolio Database
const PRODUCTS = [
  // --- 1. UAS ---
  {
    id: 'uas-signature-1',
    name: 'Signature-I',
    category: 'uas',
    categoryName: 'UAS',
    badgeClass: 'badge-uas',
    price: 349.00,
    rating: 5.0,
    reviewsCount: 124,
    image: 'assets/images/signature_1_drone.png',
    specs: ['Endurance: 30 Mins', '10 km Range', '4K Sony Sensor', 'AI Target Tracking', 'Under 1kg Micro Drone'],
    shortDesc: 'Micro-category UAV for surveillance, industrial/tower inspections & mapping. Features 1/1.7" Sony 4K sensor, 3-axis gimbal, live geo-tagging, and AI human/vehicle multi-target tracking.',
    specsDetail: {
      'Category & Class': 'Micro-Category Inspection & Surveillance UAV',
      'Flight Endurance': 'Up to 30 Minutes',
      'Transmission Range': '10 km Max Control Distance',
      'Max Speed / Wind Resistance': '36 km/h (10 m/s)',
      'Weight': 'Under 1 kg',
      'Operational Altitude': '120 m (400 ft.)',
      'Service Ceiling': '2500 m AMSL',
      'Camera Sensor': '1/1.7" Sony 8MP CMOS (4K Ultra HD)',
      'Gimbal & FOV': '3-Axis Gimbal (93° Diagonal / 81° Horizontal)',
      'Night Vision & Zoom': 'Starlight Night Vision + 6x Digital Zoom',
      'AI Intelligence': 'Human, Vehicle & Boat Multi-Target AI Tracking',
      'Failsafes & Battery': 'Distance/Altitude Smart Battery Failsafe & Geo-Fencing',
      'Storage': 'Up to 128 GB MicroSD Support',
      'Operating Temp': '-10°C to 55°C'
    },
    pinout: null
  },

  // --- 2. RADIO CONTROLLER ---
  {
    id: 'controller-command-1-joystick',
    name: 'Command-1 Joystick',
    category: 'radio-controllers',
    categoryName: 'Radio Controller',
    badgeClass: 'badge-radio-controllers',
    price: 49.99,
    rating: 4.9,
    reviewsCount: 58,
    image: 'assets/images/controller_tx.png?v=20260810_v2',
    specs: ['Command-1 Dual-Axis Precision', '360° Non-Contact Hall Sensor', 'CNC Aluminum Casing', '0.05° Deadband'],
    shortDesc: 'Command-1 industrial high-accuracy dual-axis joystick module for custom ground control station panels and UAV pilot setups.',
    specsDetail: {
      'Sensor Type': 'Non-contact 3D Hall Magnetometer',
      'Operating Angle': '+/- 30 Degrees Dual Axis',
      'Output Signal': '0.5V - 4.5V Analog Signal per Axis',
      'Mechanical Life': '> 5,000,000 Cycles',
      'Casing': 'Machined Aircraft-Grade 6061 Aluminum'
    },
    pinout: `[VCC]  -> 5V Input\n[GND]  -> Ground\n[X-OUT]-> Analog X Axis Signal (0.5V - 4.5V)\n[Y-OUT]-> Analog Y Axis Signal (0.5V - 4.5V)\n[SW]   -> Push Button Switch`
  },
  {
    id: 'controller-handheld',
    name: 'Handheld Controller',
    category: 'radio-controllers',
    categoryName: 'Radio Controller',
    badgeClass: 'badge-radio-controllers',
    price: 199.99,
    rating: 5.0,
    reviewsCount: 112,
    image: 'assets/images/handheld_controller.png?v=20260810_v1',
    specs: ['16 Channels', 'CNC Hall-Effect Gimbals', 'ExpressLRS 2.4GHz', 'Color Touchscreen Display', 'EdgeTX OS'],
    shortDesc: 'Ergonomic handheld radio controller featuring CNC hall-effect gimbals, backlit color touchscreen, and integrated long-range ELRS.',
    specsDetail: {
      'Channels': '16 Channels',
      'Gimbals': 'AG01 CNC Aluminum Hall-Effect Quad-Bearing Joysticks',
      'Operating System': 'EdgeTX Open-Source Firmware',
      'RF Module': 'Built-in 250mW ExpressLRS 2.4GHz Transmitter',
      'Display': '4.3 inch 480x272 Color IPS Touchscreen',
      'Battery': 'Dual 18650 Li-ion / 2S 5000mAh Pack (USB-C Fast Charging)'
    },
    pinout: null
  },

  // --- 3. ACCESSORIES ---
  {
    id: 'accessory-joule-1',
    name: 'Joule 1 Power Converter',
    category: 'accessories',
    categoryName: 'Accessories',
    badgeClass: 'badge-accessories',
    price: 19.99,
    rating: 4.9,
    reviewsCount: 85,
    image: 'assets/images/buck_converter.png',
    specs: ['Joule 1 Step-Down Regulator', 'Input: 2S-6S LiPo (7V-26V)', 'Output: 5V 3A & 12V 3A', 'Ripple Noise: <20mV'],
    shortDesc: 'Joule 1 high-efficiency step-down voltage converter supplying ultra-clean ripple-free power for cameras, VTX, and flight controllers.',
    specsDetail: {
      'Input Voltage': '7V to 26V (2S-6S LiPo)',
      'Output Voltages': '5V @ 3A & 12V @ 3A (Selectable Jumper)',
      'Efficiency': 'Up to 96.5%',
      'Weight': '6.5g',
      'Dimensions': '25mm x 18mm x 5mm',
      'Over-Current Protect': 'Built-in thermal auto-shutdown'
    },
    pinout: `[VIN +] ----> LiPo Battery Positive (7V - 26V)\n[VIN -] ----> Ground (GND)\n[OUT +] ---> Regulated 5.0V / 12V DC Output\n[OUT -] ---> Common Ground (GND)`
  },
  {
    id: 'accessory-atlas-1',
    name: 'Atlas 1 GPS',
    category: 'accessories',
    categoryName: 'Accessories',
    badgeClass: 'badge-accessories',
    price: 34.99,
    rating: 4.9,
    reviewsCount: 94,
    image: 'assets/images/gps_m9n.png',
    specs: ['Atlas 1 Multi-Constellation GNSS', 'Update Rate: 25Hz', 'Cold Start: <26s', 'Ceramic Patch Antenna'],
    shortDesc: 'Atlas 1 high-precision multi-constellation GNSS positioning module providing ultra-accurate 25Hz velocity and position locking.',
    specsDetail: {
      'GNSS Chip': 'Atlas 1 Multi-Constellation Engine',
      'Concurrent Satellites': 'Up to 32 Satellites tracked simultaneously',
      'Positional Accuracy': '1.5 meter CEP',
      'Update Rate': 'Up to 25Hz',
      'Protocol': 'UBX / NMEA / MSP',
      'Power Supply': '3.3V - 5.0V DC (Input current <45mA)'
    },
    pinout: `[VCC] -> 5V DC Supply\n[GND] -> Ground\n[TX]  -> Flight Controller RX Pin\n[RX]  -> Flight Controller TX Pin`
  }
];

// App State
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  setupEventListeners();
  handleViewRouting();
  startSlideTimer();
  window.addEventListener('hashchange', handleViewRouting);
});

/* -------------------------------------------------------------------
   1. Canvas Particle Background Effect
   ------------------------------------------------------------------- */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw subtle grid lines
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.03)';
    ctx.lineWidth = 1;
    const gridSize = 60;
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw floating glow particles
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 243, 255, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

/* -------------------------------------------------------------------
   2. Product Catalog Rendering & Filtering
   ------------------------------------------------------------------- */
function renderProducts() {
  const container = document.getElementById('product-grid-container');
  const catTitle = document.getElementById('current-category-title');
  if (!container) return;

  // Filter products
  let filtered = PRODUCTS.filter(prod => {
    const matchCat = (activeCategory === 'all') || (prod.category === activeCategory);
    const query = searchQuery.toLowerCase().trim();
    const matchSearch = query === '' || 
      prod.name.toLowerCase().includes(query) || 
      prod.shortDesc.toLowerCase().includes(query) ||
      prod.categoryName.toLowerCase().includes(query) ||
      prod.specs.some(s => s.toLowerCase().includes(query));
    return matchCat && matchSearch;
  });

  // Sort products
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update Category Header Title
  const categoryNamesMap = {
    'all': 'ALL PRODUCTS',
    'uas': 'UAS (UNMANNED AERIAL SYSTEMS)',
    'radio-controllers': 'RADIO CONTROLLERS',
    'accessories': 'ACCESSORIES'
  };
  if (catTitle) {
    catTitle.innerHTML = categoryNamesMap[activeCategory] || 'PRODUCTS';
  }
  const countText = document.getElementById('product-count-text');
  if (countText) {
    countText.textContent = `${filtered.length} items available`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(16,24,40,0.6); border-radius: 16px; border: 1px dashed var(--glass-border);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px;"></i>
        <h3>No products found</h3>
        <p style="color: var(--text-muted); margin-top: 8px;">Try selecting another category from the sidebar menu.</p>
      </div>
    `;
    return;
  }

  // Render IPET-style cards
  container.innerHTML = filtered.map(prod => `
    <div class="ipet-card" onclick="openProductModal('${prod.id}')">
      <div class="ipet-card-img-wrap">
        <img src="${prod.image}" alt="${prod.name}">
      </div>
      <div class="ipet-card-title">${prod.name}</div>
      <div class="ipet-card-specs-list">
        ${prod.specs.slice(0, 2).map(s => `<div class="ipet-card-spec-item">${s}</div>`).join('')}
      </div>
      <div class="ipet-card-footer">
        <div class="ipet-card-price">$${prod.price.toFixed(2)}</div>
        <button class="ipet-card-btn" onclick="event.stopPropagation(); openProductModal('${prod.id}')">View Specs</button>
      </div>
    </div>
  `).join('');
}

function renderStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let starsHtml = '';
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fa-solid fa-star"></i>';
  }
  if (halfStar) starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
  return starsHtml;
}

function resetFilters() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  if (searchInput) searchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === 'all');
  });
  renderProducts();
}

/* -------------------------------------------------------------------
   3. Product Quick View & Pinout Modal
   ------------------------------------------------------------------- */
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalContent = document.getElementById('modal-product-content');
  if (!modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-img-container">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div>
        <span class="card-badge ${product.badgeClass}">${product.categoryName}</span>
        <h2 style="font-family: var(--font-mono); margin: 10px 0 6px 0; color: #fff;">${product.name}</h2>
        <div class="product-rating" style="margin-bottom: 12px;">
          ${renderStarRating(product.rating)}
          <span class="rating-count">(${product.reviewsCount} Customer Reviews)</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 16px;">${product.shortDesc}</p>
        <div style="font-family: var(--font-mono); font-size: 1.6rem; font-weight: 700; color: var(--primary-color); margin-bottom: 20px;">
          $${product.price.toFixed(2)}
        </div>

        <div class="modal-tabs">
          <button class="modal-tab-btn active" onclick="switchModalTab(this, 'tab-specs')"><i class="fa-solid fa-list-check"></i> Technical Specs</button>
          ${product.pinout ? `<button class="modal-tab-btn" onclick="switchModalTab(this, 'tab-pinout')"><i class="fa-solid fa-diagram-project"></i> Pinout & Wiring</button>` : ''}
        </div>

        <div id="tab-specs" class="modal-tab-content">
          <table class="specs-table">
            ${Object.entries(product.specsDetail).map(([k, v]) => `
              <tr>
                <td>${k}</td>
                <td style="color: #fff; font-weight: 600;">${v}</td>
              </tr>
            `).join('')}
          </table>
        </div>

        ${product.pinout ? `
          <div id="tab-pinout" class="modal-tab-content hidden">
            <p style="font-size: 0.85rem; color: var(--text-muted);">Connector & Signal Wiring Guide:</p>
            <div class="pinout-diagram"><pre>${product.pinout}</pre></div>
          </div>
        ` : ''}


      </div>
    </div>
  `;

  const modalOverlay = document.getElementById('product-modal-overlay');
  if (modalOverlay) modalOverlay.classList.add('active');
}

function switchModalTab(btnElement, tabId) {
  const parent = btnElement.closest('.modal-body');
  if (!parent) return;
  parent.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
  parent.querySelectorAll('.modal-tab-content').forEach(c => c.classList.add('hidden'));
  
  btnElement.classList.add('active');
  const targetTab = document.getElementById(tabId);
  if (targetTab) targetTab.classList.remove('hidden');
}

/* -------------------------------------------------------------------
   4. Event Listeners & UI Binding
   ------------------------------------------------------------------- */
function setupEventListeners() {
  // IPET Sidebar Category Items
  document.querySelectorAll('.ipet-cat-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.ipet-cat-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      activeCategory = item.dataset.category || 'all';
      renderProducts();
    });
  });

  // Footer Category links
  document.querySelectorAll('.footer-cat-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.dataset.cat;
      document.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.category === cat);
      });
      activeCategory = cat;
      renderProducts();
      const prodSec = document.getElementById('products');
      if (prodSec) window.scrollTo({ top: prodSec.offsetTop - 100, behavior: 'smooth' });
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  if (searchInput && clearSearchBtn) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      clearSearchBtn.classList.toggle('hidden', searchQuery.length === 0);
      renderProducts();
    });

    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Product modal close
  const closeProdModal = document.getElementById('close-product-modal');
  if (closeProdModal) {
    closeProdModal.addEventListener('click', () => closeModal('product-modal-overlay'));
  }

  // Newsletter form
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed to NestX Aerospace technical publications!');
      e.target.reset();
    });
  }
}

/* -------------------------------------------------------------------
   Page View Router (Home, Products, Solutions, Contact Views)
   ------------------------------------------------------------------- */
function switchView(targetViewId) {
  const validViews = ['home', 'products', 'solutions', 'contact'];
  const viewId = validViews.includes(targetViewId) ? targetViewId : 'home';

  if (viewId === 'contact') {
    ['home', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('active-view');
        el.classList.remove('hidden-view');
      }
    });
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  validViews.forEach(v => {
    const el = document.getElementById(v);
    if (el) {
      if (v === viewId) {
        el.classList.add('active-view');
        el.classList.remove('hidden-view');
      } else {
        el.classList.remove('active-view');
        el.classList.add('hidden-view');
      }
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') ? link.getAttribute('href').replace('#', '') : '';
    if (href === viewId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  if (viewId === 'products') {
    renderProducts();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleViewRouting() {
  const rawHash = window.location.hash ? window.location.hash.replace('#', '') : 'home';
  switchView(rawHash);
}

function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) el.classList.remove('active');
}

function openConnectModal() {
  switchView('contact');
  window.location.hash = 'contact';
  const nameInput = document.getElementById('enq-name');
  if (nameInput) nameInput.focus();
}

/* -------------------------------------------------------------------
   Hero Slideshow Carousel Controller (6 Custom Categories)
   ------------------------------------------------------------------- */
let currentSlideIndex = 0;
let slideTimer = null;

function showSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const tabs = document.querySelectorAll('.slide-nav-tab');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  if (index >= slides.length) currentSlideIndex = 0;
  else if (index < 0) currentSlideIndex = slides.length - 1;
  else currentSlideIndex = index;

  slides.forEach((s, i) => s.classList.toggle('active', i === currentSlideIndex));
  if (tabs.length) tabs.forEach((t, i) => t.classList.toggle('active', i === currentSlideIndex));
  if (dots.length) dots.forEach((d, i) => d.classList.toggle('active', i === currentSlideIndex));
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function goToSlide(index) {
  showSlide(index);
  resetSlideTimer();
}

function startSlideTimer() {
  if (!slideTimer) {
    slideTimer = setInterval(() => nextSlide(), 4000);
  }
}

function resetSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => nextSlide(), 4000);
}

/* -------------------------------------------------------------------
   5. Toast Notification Helper
   ------------------------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-cyan"></i> <span>${message}</span>`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* -------------------------------------------------------------------
   6. Contact Form Email Handler (guptashivambdn@gmail.com)
   ------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = enquiryForm.querySelector('button[type="submit"]');
      const originalText = btn ? btn.innerHTML : 'Submit Inquiry';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending Inquiry...`;
      }

      // Extract FormData BEFORE resetting form
      const formData = new FormData(enquiryForm);
      const name = formData.get('Full_Name') || 'Valued Client';

      try {
        const response = await fetch('https://formsubmit.co/ajax/guptashivambdn@gmail.com', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        const data = await response.json();
        if (response.ok || data.success === 'true') {
          showToast(`Inquiry Received! Detailed email routed to guptashivambdn@gmail.com.`);
          enquiryForm.reset();
        } else {
          enquiryForm.submit();
        }
      } catch (err) {
        console.log('AJAX submit fallback triggered', err);
        enquiryForm.submit();
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = originalText;
        }
      }
    });
  }
});
