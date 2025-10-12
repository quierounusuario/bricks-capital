import { Language, translations } from "../translations";
const bricksCapitalLogo= '';

interface FooterProps {
  language: Language;
  setCurrentPage: (page: string) => void;
}

export function Footer({ language, setCurrentPage }: FooterProps) {
  const t = translations[language];

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={bricksCapitalLogo || '/logo-placeholder.png'} alt="Logo" />
            <p className="text-secondary mb-2">
              {t.footer.tagline}
            </p>
            <p className="text-foreground/70 max-w-md">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateTo("home")}
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("about")}
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("funds")}
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  {t.nav.funds}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("contact")}
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-foreground mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="mailto:info@brickscapital.com"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  info@brickscapital.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+34900123456"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  +34 900 123 456
                </a>
              </li>
            </ul>
            
            <h4 className="text-foreground mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  {t.footer.disclaimer}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60 text-center md:text-left">
              {t.footer.copyright}
            </p>
            <p className="text-sm text-foreground/60 text-center md:text-right">
              {t.footer.warning}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
