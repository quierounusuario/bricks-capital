import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Globe } from "lucide-react";
import { Language, translations } from "../translations";
import bricksCapitalLogo from "figma:asset/e4db0af149b479d8460294b402fff3b6a4f60af8.png";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ language, setLanguage, currentPage, setCurrentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/90 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo("home")}>
            <img src={bricksCapitalLogo} alt="Bricks Capital" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateTo("home")}
              className={`transition-colors ${
                currentPage === "home"
                  ? "text-secondary"
                  : "text-foreground/80 hover:text-secondary"
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => navigateTo("about")}
              className={`transition-colors ${
                currentPage === "about"
                  ? "text-secondary"
                  : "text-foreground/80 hover:text-secondary"
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => navigateTo("funds")}
              className={`transition-colors ${
                currentPage === "funds"
                  ? "text-secondary"
                  : "text-foreground/80 hover:text-secondary"
              }`}
            >
              {t.nav.funds}
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className={`transition-colors ${
                currentPage === "contact"
                  ? "text-secondary"
                  : "text-foreground/80 hover:text-secondary"
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="flex items-center space-x-2 text-foreground/80 hover:text-secondary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language === "es" ? "EN" : "ES"}</span>
            </button>
            <Button
              onClick={() => navigateTo("contact")}
              className="bg-secondary hover:bg-secondary/90"
            >
              {language === "es" ? "Contactar" : "Contact"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-white">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => navigateTo("home")}
                className={`transition-colors text-left px-4 py-2 ${
                  currentPage === "home"
                    ? "text-secondary"
                    : "text-foreground/80 hover:text-secondary"
                }`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => navigateTo("about")}
                className={`transition-colors text-left px-4 py-2 ${
                  currentPage === "about"
                    ? "text-secondary"
                    : "text-foreground/80 hover:text-secondary"
                }`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => navigateTo("funds")}
                className={`transition-colors text-left px-4 py-2 ${
                  currentPage === "funds"
                    ? "text-secondary"
                    : "text-foreground/80 hover:text-secondary"
                }`}
              >
                {t.nav.funds}
              </button>
              <button
                onClick={() => navigateTo("contact")}
                className={`transition-colors text-left px-4 py-2 ${
                  currentPage === "contact"
                    ? "text-secondary"
                    : "text-foreground/80 hover:text-secondary"
                }`}
              >
                {t.nav.contact}
              </button>
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-border">
                <button
                  onClick={() => setLanguage(language === "es" ? "en" : "es")}
                  className="flex items-center space-x-2 text-foreground/80 hover:text-secondary transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="uppercase">{language === "es" ? "EN" : "ES"}</span>
                </button>
                <Button
                  onClick={() => navigateTo("contact")}
                  className="bg-secondary hover:bg-secondary/90 flex-1"
                >
                  {language === "es" ? "Contactar" : "Contact"}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
