(function () {
  const navItems = [
    ["Home", "/home"],
    ["About", "/about"],
    ["Projects", "/projects"],
    ["Services", "/services"],
    ["Contact", "/contact"]
  ];
  const projectItems = [
    ["2-Storey Residences", "/projects/2-storey-residences"],
    ["3-Storey Residences", "/projects/3-storey-residences"],
    ["4-Storey Residences", "/projects/4-storey-residences"],
    ["Architectural Interiors", "/projects/architectural-interiors"],
    ["Townhouses", "/projects/townhouses"],
    ["Commercial", "/projects/commercial"],
    ["Health and Aged Care", "/projects/health-and-aged-care"]
  ];

  const path = window.location.pathname.replace(/\.html$/, "") || "/home";
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");

  if (header) {
    header.innerHTML = `
      <div class="site-header">
        <nav class="nav" aria-label="Main navigation">
          <a class="brand" href="/home" aria-label="Creacion Architecture home">
            Creacion Architecture
            <small>Architecture &amp; Design Studio</small>
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button>
          <div class="nav-links" id="main-nav">
            ${navItems
              .map(([label, href]) => {
                const current = path === href || (href === "/projects" && path.startsWith("/projects"));
                if (label !== "Projects") {
                  return `<a href="${href}" ${current ? 'aria-current="page"' : ""}>${label}</a>`;
                }
                return `
                  <div class="nav-dropdown">
                    <a href="${href}" ${current ? 'aria-current="page"' : ""}>${label}</a>
                    <div class="dropdown-menu">
                      ${projectItems.map(([name, link]) => `<a href="${link}">${name}</a>`).join("")}
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>
        </nav>
      </div>
    `;

    const toggle = header.querySelector(".menu-toggle");
    const links = header.querySelector(".nav-links");

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="footer-inner">
          <div>
            <h3>Creacion Architecture</h3>
            <p>design@creacionarchitecture.com<br>Quezon City<br>+639272463244</p>
          </div>
          <div class="socials" aria-label="Social links">
            <a href="https://facebook.com/creacionarchitecture" target="_blank" rel="noopener" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/creacionarchitecture/" target="_blank" rel="noopener" aria-label="Instagram">ig</a>
            <a href="https://wa.me/+639272463244" target="_blank" rel="noopener" aria-label="WhatsApp">
              <img src="https://lh3.googleusercontent.com/sitesv/AA5AbUA4dVbL-W8iI75cta-4glx0Wzouqd2ffbeSS_Xxbabljq6KvsZbiSNhUtbAEuCrzo6Du5_tokAFwJmgOXIPwHGv-onHHna7J2GNGjdB0-qe6_NJZrE5i-y3" alt="WhatsApp">
            </a>
            <a href="https://www.facebook.com/messages/t/567093839824926" target="_blank" rel="noopener" aria-label="Messenger">
              <img src="https://lh3.googleusercontent.com/sitesv/AA5AbUC3pNROvz_XF30M7EUW5ViJSIhyjAgR159tZSFb9a6IZWEPHEtDzgWyAYuC1786x2bvyQB1ueeF51We0D4_LLRA-cYuEn6dvN-3-Idq3FbD9XYLyN6ipQWo" alt="Messenger">
            </a>
          </div>
        </div>
        <div class="site-meta">
          <span>Page updated</span>
          <span>Google Sites</span>
          <span>Report abuse</span>
        </div>
        <div class="footer-inner fine-print">Copyright &copy; 2026 Creacion Architecture. All Rights Reserved.</div>
      </footer>
    `;
  }

  document.querySelectorAll("input, textarea").forEach((field) => {
    const sync = () => field.classList.toggle("filled", field.value.trim() !== "");
    field.addEventListener("input", sync);
    sync();
  });

  const form = document.querySelector("[data-contact-form]");
  const success = document.querySelector("[data-success-message]");

  if (form && success) {
    form.addEventListener("submit", () => {
      window.setTimeout(() => {
        success.classList.add("is-visible");
        form.reset();
        form.querySelectorAll("input, textarea").forEach((field) => field.classList.remove("filled"));
      }, 700);
    });
  }
})();
