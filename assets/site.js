(function () {
  const navItems = [
    ["Home", "/home"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Projects", "/projects"],
    ["Contact", "/contact"]
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
            <small>Design and Consultancy</small>
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button>
          <div class="nav-links" id="main-nav">
            ${navItems
              .map(([label, href]) => {
                const current = path === href || (href === "/projects" && path.startsWith("/projects"));
                return `<a href="${href}" ${current ? 'aria-current="page"' : ""}>${label}</a>`;
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
            <p>design@creacionarchitecture.com<br>Quezon City<br>+63 927 246 3244</p>
          </div>
          <div class="socials" aria-label="Social links">
            <a href="https://facebook.com/creacionarchitecture" target="_blank" rel="noopener">Facebook</a>
            <a href="https://www.instagram.com/creacionarchitecture/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://wa.me/+639272463244" target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://www.facebook.com/messages/t/567093839824926" target="_blank" rel="noopener">Messenger</a>
          </div>
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
