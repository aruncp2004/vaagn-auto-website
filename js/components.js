const _compSrc = document.currentScript && document.currentScript.src;
const _jsBase = _compSrc ? _compSrc.replace(/[^/]*$/, '') : '../js/';

const COMPONENTS = {
  nav: `<nav>
    <a href="/index.html" class="nav-logo">
  <img src="/images/vaagnBglogo.png" alt="Vaagn Auto Logo" class="logo-img">
  <span class="logo-word">VAAGN AUTO</span>
</a>
    <ul class="nav-links">
      <li>
<a href="/index.html#all-vehicles">Vehicles</a>        <div class="mega-menu">
<div class="mega-vgrid-wrap">
  <p class="mega-col-title">Vehicles</p>
  <div class="mega-vgrid">
    <a href="/beast-mx" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/beast-mx/beast-mx-white.jpeg" onerror="this.style.opacity='.1'" alt="Beast MX"></div>
      <span class="mega-vn">Beast MX</span>
    </a>
    <a href="/beast-sx" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/beast-sx/beast-sx-green3.jpeg" onerror="this.style.opacity='.1'" alt="Beast SX"></div>
      <span class="mega-vn">Beast SX</span>
    </a>
    <a href="/beast-lx-tipper-dd" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/beast-lx-tipper-dd/Beast-LX-Tipper1.png" onerror="this.style.opacity='.1'" alt="Beast LX Tipper DD"></div>
      <span class="mega-vn">Beast LX Tipper DD</span>
    </a>
    <a href="/beast-lx-tipper-nd" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/beast-lx-tipper-nd/beast-lx-tipper-nd-yellow.jpeg" onerror="this.style.opacity='.1'" alt="Beast LX Tipper ND"></div>
      <span class="mega-vn">Beast LX Tipper ND</span>
    </a>
    <a href="/beast-lx-closed-cart" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/beast-lx-closed-cart/beast-lx-closed-yellow2.jpeg" onerror="this.style.opacity='.1'" alt="Beast LX Closed Cart"></div>
      <span class="mega-vn">Beast LX Closed Cart</span>
    </a>
    <a href="/beast-lx-open-cart" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/beast-lx-open-cart/beast-lx-open-yellow2.jpeg" onerror="this.style.opacity='.1'" alt="Beast LX Open Cart"></div>
      <span class="mega-vn">Beast LX Open Cart</span>
    </a>
    <a href="/titan-ec-cart" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/titan-ec-cart/titan-ec-cart-yellow.png" onerror="this.style.opacity='.1'" alt="Titan EC Cart"></div>
      <span class="mega-vn">Titan EC Cart</span>
    </a>
    <a href="/titan-cargo-intercart" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/titan-intercart/intercart_yellow.png" onerror="this.style.opacity='.1'" alt="Titan Cargo Intercart"></div>
      <span class="mega-vn">Titan Cargo Intercart</span>
    </a>
    <a href="/titan-cargo-closed-cart" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/titan-cargo-closed-cart/titan-closed-yellow.jpeg" onerror="this.style.opacity='.1'" alt="Titan Cargo Closed"></div>
      <span class="mega-vn">Titan Cargo Closed</span>
    </a>
    <a href="/titan-cargo-open-cart" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/titan-cargo-open-cart/titan-open-yellow2.png" onerror="this.style.opacity='.1'" alt="Titan Cargo Open"></div>
      <span class="mega-vn">Titan Cargo Open</span>
    </a>
    <a href="/titan-passenger" class="mega-vi" onclick="closeDrawer()">
      <div class="mega-vi-img"><img src="/images/titan-passenger/titan-passenger-blue4.jpeg" onerror="this.style.opacity='.1'" alt="Titan Passenger"></div>
      <span class="mega-vn">Titan Passenger</span>
    </a>
  </div>
</div>
</div>
      </li>
      <li><a href="/become-a-dealer.html">Dealership</a></li>
      <li><a href="/contact.html">Contact</a></li>
       <li><a href="/dealer-portal.html">Dealer's Portal</a></li>
    </ul>
    <div class="nav-right">
      <a href="javascript:void(0)" class="btn-nav" onclick="openPopup('General')">Get a Quote</a>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>




  <div class="mega-overlay" id="mega-overlay"></div>
  <div class="mega-drawer" id="mega-drawer">
  <button class="mega-close" id="mega-close">&#x2715;</button>
  <div class="mega-drawer-inner">

    <div class="mega-vgrid-wrap">
      <p class="mega-col-title">Vehicles</p>
      <div class="mega-vgrid">

        <a href="/beast-mx" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/beast-mx/beast-mx-white.jpeg" onerror="this.style.opacity='.1'" alt="Beast MX"></div>
          <span class="mega-vn">Beast MX</span>
          <span class="mega-vp">From ₹4.45L</span>
        </a>
        <a href="/beast-sx" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/beast-sx/beast-sx-green3.jpeg" onerror="this.style.opacity='.1'" alt="Beast SX"></div>
          <span class="mega-vn">Beast SX</span>
          <span class="mega-vp">From ₹4.12L</span>
        </a>
        <a href="/beast-lx-tipper-dd" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/beast-lx-tipper-dd/Beast-LX-Tipper1.png" onerror="this.style.opacity='.1'" alt="Beast LX Tipper DD"></div>
          <span class="mega-vn">Beast LX Tipper DD</span>
          <span class="mega-vp">From ₹5.10L</span>
        </a>
        <a href="/beast-lx-tipper-nd" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/beast-lx-tipper-nd/beast-lx-tipper-nd-yellow.jpeg" onerror="this.style.opacity='.1'" alt="Beast LX Tipper ND"></div>
          <span class="mega-vn">Beast LX Tipper ND</span>
          <span class="mega-vp">From ₹5.10L</span>
        </a>
        <a href="/beast-lx-closed-cart" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/beast-lx-closed-cart/beast-lx-closed-yellow2.jpeg" onerror="this.style.opacity='.1'" alt="Beast LX Closed Cart"></div>
          <span class="mega-vn">Beast LX Closed Cart</span>
          <span class="mega-vp">From ₹4.70L</span>
        </a>
        <a href="/beast-lx-open-cart" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/beast-lx-open-cart/beast-lx-open-yellow2.jpeg" onerror="this.style.opacity='.1'" alt="Beast LX Open Cart"></div>
          <span class="mega-vn">Beast LX Open Cart</span>
          <span class="mega-vp">From ₹4.47L</span>
        </a>
        <a href="/titan-ec-cart" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/titan-ec-cart/titan-ec-cart-yellow.png" onerror="this.style.opacity='.1'" alt="Titan EC Cart"></div>
          <span class="mega-vn">Titan EC Cart</span>
          <span class="mega-vp">From ₹2.23L</span>
        </a>
        <a href="/titan-cargo-intercart" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/titan-intercart/intercart_yellow.png" onerror="this.style.opacity='.1'" alt="Titan Cargo Intercart"></div>
          <span class="mega-vn">Titan Cargo Intercart</span>
          <span class="mega-vp">From ₹1.60L</span>
        </a>
        <a href="/titan-cargo-closed-cart" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/titan-cargo-closed-cart/titan-closed-yellow.jpeg" onerror="this.style.opacity='.1'" alt="Titan Cargo Closed"></div>
          <span class="mega-vn">Titan Cargo Closed</span>
          <span class="mega-vp">From ₹2.64L</span>
        </a>
        <a href="/titan-cargo-open-cart" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/titan-cargo-open-cart/titan-open-yellow2.png" onerror="this.style.opacity='.1'" alt="Titan Cargo Open"></div>
          <span class="mega-vn">Titan Cargo Open</span>
          <span class="mega-vp">From ₹2.49L</span>
        </a>
        <a href="/titan-passenger" class="mega-vi" onclick="closeDrawer()">
          <div class="mega-vi-img"><img src="/images/titan-passenger/titan-passenger-blue4.jpeg" onerror="this.style.opacity='.1'" alt="Titan Passenger"></div>
          <span class="mega-vn">Titan Passenger</span>
          <span class="mega-vp">From ₹2.64L</span>
        </a>

      </div>
    </div>

    <div class="mega-drawer-divider"></div>

    <div class="mega-links-wrap">
      <div class="mega-col">
        <p class="mega-col-title">About</p>
        <a href="/about.html" onclick="closeDrawer()">About Us</a>
        <a href="/about.html#our-story" onclick="closeDrawer()">Our Story</a>
        <a href="/about.html#why-vaagn" onclick="closeDrawer()">Why Vaagn</a>
        
        <a href="/blog.html" onclick="closeDrawer()">Blogs</a>
        <a href="/privacy-policy.html" onclick="closeDrawer()">Privacy Policy</a>
        <a href="/terms-and-conditions.html" onclick="closeDrawer()">Terms &amp; Conditions</a>
      </div>

      <div class="mega-col">
        <p class="mega-col-title">Contact</p>
        <a href="/contact.html" onclick="closeDrawer()">Contact Us</a>
        <a href="/contact.html#sales" onclick="closeDrawer()">Sales Enquiry</a>
        <a href="/contact.html#service" onclick="closeDrawer()">Service Support</a>
        <a href="/careers.html" onclick="closeDrawer()">Careers</a>
      </div>
      <div class="mega-col">
        <p class="mega-col-title">Dealership</p>
        <a href="/become-a-dealer.html" onclick="closeDrawer()">Become a Dealer</a>
      </div>
    </div>

  </div>
</div>`,

  footer: `<footer>
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-brand-logo">
          <span class="footer-brand-word">VAAGN AUTO</span>
        </div>
      </div>
      <div class="footer-cols">
        <div class="f-col">
          <p class="f-col-title">Products</p>
          <ul>
            <li><a href="/beast-mx">Beast MX</a></li>
            <li><a href="/beast-sx">Beast SX</a></li>
            <li><a href="/beast-lx-tipper-dd">Beast LX Tipper DD</a></li>
            <li><a href="/beast-lx-tipper-nd">Beast LX Tipper ND</a></li>
            <li><a href="/beast-lx-closed-cart">Beast LX Closed Cart</a></li>
            <li><a href="/beast-lx-open-cart">Beast LX Open Cart</a></li>
          </ul>
        </div>
        <div class="f-col">
          <p class="f-col-title">More Vehicles</p>
          <ul>
            <li><a href="/titan-ec-cart">Titan EC Cart</a></li>
            <li><a href="/titan-cargo-intercart">Titan Cargo Intercart</a></li>
            <li><a href="/titan-cargo-closed-cart">Titan Cargo Closed Cart</a></li>
            <li><a href="/titan-cargo-open-cart">Titan Cargo Open Cart</a></li>
            <li><a href="/titan-passenger">Titan Passenger</a></li>
          </ul>
        </div>
        <div class="f-col">
          <p class="f-col-title">Company</p>
          <ul>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/become-a-dealer.html">Dealership</a></li>
            <li><a href="/index.html#community">Customers</a></li>
            <li><a href="/contact.html">Contact Us</a></li>
            <li><a href="/privacy-policy.html">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions.html">Terms &amp; Conditions</a></li>
          </ul>
        </div>
        <div class="f-col">
          <p class="f-col-title">Quick Links</p>
          <ul>
            <li><a href="javascript:void(0)" onclick="openPopup('General')">Get a Quote</a></li>
            <li><a href="tel:+919600809197">Test Ride</a></li>
            <li><a href="https://wa.me/919600809197" target="_blank">WhatsApp Us</a></li>
            <li><a href="javascript:void(0)" onclick="openPopup('Dealer Enquiry')">Become a Dealer</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-socials">
          <a href="#" class="social-link" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          <a href="#" class="social-link" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          <a href="#" class="social-link" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="#" class="social-link" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="#" class="social-link" aria-label="Twitter"><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
        </div>
        <div class="footer-phone">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,.5)"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          Call : <a href="tel:+919600809197" class="footer-phone-num">+91 96008 09197</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <span class="f-copy">Copyright © 2026 Vaagn Auto. All Rights Reserved.</span>
      </div>
    </div>
  </footer>`,

  popup: `
  <div class="popup-overlay" id="popup-overlay">
    <div class="popup-box">
      <button class="p-close" onclick="closePopup()">×</button>
      <h2 class="p-title">Get a Quote</h2>
      <p class="p-sub" id="popup-sub">Our team will call you back within 24 hours.</p>
      <input type="text" id="p-name" class="p-field" placeholder="Your Name" required>
      <div class="phone-row">
        <span class="phone-pre">+91</span>
        <input type="tel" id="p-phone" class="p-field" style="flex:1;margin-bottom:0" placeholder="10-digit mobile" maxlength="10" required>
      </div><br>
      <input type="text" id="p-city" class="p-field" placeholder="Your City">
      <input type="hidden" id="p-vehicle" value="">
      <button class="p-submit" onclick="submitPopup()">Request Callback →</button>
    </div>
  </div>`,

  stickyBar: `<div class="sticky-bar">
  <a href="tel:+919600809197" class="sticky-item">
    <span class="icon-ring">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
    </span> CALL US
  </a>
  <a href="https://wa.me/919600809197" target="_blank" class="sticky-item wa">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> WHATSAPP
  </a>
  <a href="javascript:void(0)" class="sticky-item" onclick="openPopup('General')">GET A QUOTE</a>
</div>`,
enquiry: `
<section class="sec navy" id="enquiry">
  <div class="form-layout">
    <div class="form-info">
      <div class="s-eyebrow lt rv">Contact Us</div>
      <div class="s-title lt rv">Get a Quote<br>Today.</div>
      <p class="rv">We call you back within 30 minutes with pricing details.</p>
      <div class="ci-list rv">
        <div class="ci"><div class="ci-ico"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.86-1.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div><div class="ci-txt"><a href="tel:+919600809197">+91 96008 09197</a> &nbsp;/&nbsp; <a href="tel:+919384031395">+91 93840 31395</a></div></div>
        <div class="ci"><div class="ci-ico"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div class="ci-txt"><a href="mailto:vaagnauto@gmail.com">vaagnauto@gmail.com</a></div></div>
        <div class="ci"><div class="ci-ico"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div class="ci-txt">S.NO: 417/1B1, 419, A-Block,<br>Sriperumbudur, Tamil Nadu 602105</div></div>
      </div>
    </div>
    <div>
      <div class="fbox rv">
        <div class="fbox-h">Book Now</div>
        <div class="fbox-s">We call back within 30 minutes</div>
        <form onsubmit="submitForm(event)">
          <div class="fg"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="fg"><label>Phone Number</label><input type="tel" placeholder="+91 00000 00000" required></div>
          <div class="fg"><label>Interested In</label>
            <select id="enquiry-vehicle-select">
              <option>Beast MX</option>
              <option>Beast SX</option>
              <option>Beast LX Tipper DD</option>
              <option>Beast LX Tipper ND</option>
              <option>Beast LX Closed Cart</option>
              <option>Beast LX Open Cart</option>
              <option>Titan EC Cart</option>
              <option>Titan Cargo Intercart</option>
              <option>Titan Cargo Closed Cart</option>
              <option>Titan Cargo Open Cart</option>
              <option>Titan Passenger</option>
              <option>Fleet Purchase</option>
              <option>Dealership</option>
            </select>
          </div>
          <div class="fg"><label>City</label><input type="text" placeholder="Your city"></div>
          <button type="submit" class="fbtn">Get Price &amp; Callback</button>
          <div class="fpriv">Your information is safe. No spam.</div>
        </form>
      </div>
    </div>
  </div>
</section>

<section id="dealership">
  <div class="dealer-eyebrow rv">Authorised Dealers &amp; Showrooms</div>
  <div class="dealer-title rv">Find Us Near You.</div>
  <p class="dealer-sub rv">Visit your nearest Vaagn Auto showroom for a live demo, test ride and pricing consultation.</p>
  <div class="dealer-grid">
    <div class="dealer-card rv">
      <div class="dealer-card-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <div class="dealer-card-type">Factory</div>
      <div class="dealer-card-name">Vaagn Auto — Sriperumbudur</div>
      <div class="dealer-card-addr">S.NO: 417/1B1, 419, A-Block,<br>Sriperumbudur, Tamil Nadu 602105</div>
      <div class="dealer-card-actions">
        <a href="tel:+919600809197" class="dealer-btn call"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.86-1.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+91 96008 09197</a>
        <a href="https://maps.app.goo.gl/WWmECYQEfq7oHNyA6" target="_blank" class="dealer-btn map"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Get Directions</a>
      </div>
    </div>
    <div class="dealer-card rv">
      <div class="dealer-card-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <div class="dealer-card-type">Head Office</div>
      <div class="dealer-card-name">Vaagn Auto — Velachery</div>
      <div class="dealer-card-addr">9B, 18th St, Extension,<br>Tansi Nagar, Velachery, Chennai 600042</div>
      <div class="dealer-card-actions">
        <a href="tel:+919600809197" class="dealer-btn call"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.86-1.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+91 96008 09197</a>
        <a href="https://maps.google.com/?q=9B+18th+Street+Tansi+Nagar+Velachery+Chennai+600042" target="_blank" class="dealer-btn map"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Get Directions</a>
      </div>
    </div>
    <div class="dealer-card rv">
      <div class="dealer-card-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
      <div class="dealer-card-type">Become a Dealer</div>
      <div class="dealer-card-name">Dealership Opportunities</div>
      <div class="dealer-card-addr">Expand your business with Vaagn Auto.<br>Dealerships open across Tamil Nadu &amp; beyond.</div>
      <div class="dealer-card-actions">
        <a href="mailto:vaagnauto@gmail.com" class="dealer-btn call"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>Email Us</a>
        <a href="/become-a-dealer.html" class="dealer-btn map"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>Know More</a>
      </div>
    </div>
  </div>
  <div class="dealer-cta-strip rv">
    <div class="dealer-cta-txt"><strong>Want to book a test ride or get a live demo?</strong> Visit us at Sriperumbudur or call us — we'll arrange everything.</div>
    <a href="#enquiry" class="dealer-cta-btn">Book a Demo →</a>
  </div>
</section>`


};

function includeHTML() {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  const popupEl = document.getElementById('popup-placeholder');
  const enquiryEl = document.getElementById('enquiry-placeholder');

  if (navEl) navEl.outerHTML = COMPONENTS.nav;
  if (footerEl) footerEl.innerHTML = COMPONENTS.footer;
  if (popupEl) popupEl.innerHTML = COMPONENTS.popup;
if(enquiryEl) {
  const vehicleName = enquiryEl.getAttribute('data-vehicle') || 'Beast MX';
  enquiryEl.innerHTML = COMPONENTS.enquiry;
  const sel = document.getElementById('enquiry-vehicle-select');
  if(sel) sel.value = vehicleName;
  // Re-observe newly injected rv elements
  enquiryEl.querySelectorAll('.rv').forEach(el => {
    el.classList.add('on');
  });
}
  // Query sticky AFTER other DOM mutations so the reference is always fresh
  const stickyEl = document.getElementById('sticky-placeholder');
  if (stickyEl) stickyEl.innerHTML = COMPONENTS.stickyBar;

  loadScript(_jsBase + 'nav.js').then(() =>
  loadScript(_jsBase + 'popup.js').then(() =>
    loadScript(_jsBase + 'common.js').then(() =>
      loadScript(_jsBase + 'vehicle.js')
    )
  )
);
}

function loadScript(src) {
  return new Promise(resolve => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    document.body.appendChild(s);
  });
}

if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', includeHTML);
} else {
  includeHTML();
}
