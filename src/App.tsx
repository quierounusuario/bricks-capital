import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { FundsPage } from "./pages/FundsPage";
import { ContactPage } from "./pages/ContactPage";
import { InvestorPortalPage } from "./pages/InvestorPortalPage";
import { Language } from "./translations";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [language, setLanguage] = useState<Language>("es");
  const [currentPage, setCurrentPage] = useState<string>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage language={language} setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage language={language} setCurrentPage={setCurrentPage} />;
      case "funds":
        return <FundsPage language={language} setCurrentPage={setCurrentPage} />;
      case "contact":
        return <ContactPage language={language} setCurrentPage={setCurrentPage} />;
      case "portal":
        return <InvestorPortalPage language={language} setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage language={language} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        language={language}
        setLanguage={setLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>{renderPage()}</main>
      <Footer language={language} setCurrentPage={setCurrentPage} />
      <Toaster position="top-center" />
    </div>
  );
}
