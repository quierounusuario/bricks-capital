import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import {
  TrendingUp,
  Download,
  LogOut,
  Mail,
  Phone,
  Clock,
  Eye,
  EyeOff,
} from "lucide-react";
import { Language, translations } from "../translations";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, LineChart } from "recharts";

interface InvestorPortalPageProps {
  language: Language;
  setCurrentPage: (page: string) => void;
}

export function InvestorPortalPage({ language, setCurrentPage }: InvestorPortalPageProps) {
  const t = translations[language].portal;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [investorName, setInvestorName] = useState("");

  // Mock performance data
  const performanceData = [
    { year: "2020", value: 25000 },
    { year: "2021", value: 27500 },
    { year: "2022", value: 30250 },
    { year: "2023", value: 33500 },
    { year: "2024", value: 37800 },
    { year: "2025", value: 40600 },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - accepts any email/password
    if (email && password) {
      const name = email.split("@")[0];
      setInvestorName(name.charAt(0).toUpperCase() + name.slice(1));
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setInvestorName("");
  };

  if (!isLoggedIn) {
    // LOGIN VIEW
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl text-secondary">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Login Card */}
            <Card className="max-w-md mx-auto p-8 bg-white shadow-xl">
              <h2 className="text-2xl text-foreground mb-6 text-center">
                {t.login.title}
              </h2>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="email">{t.login.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.login.emailPlaceholder}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password">{t.login.password}</Label>
                  <div className="relative mt-2">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t.login.passwordPlaceholder}
                      className="pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90"
                  size="lg"
                >
                  {t.login.button}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-3">
                    {t.login.demo}
                  </p>
                  <button
                    type="button"
                    className="text-sm text-secondary hover:underline"
                  >
                    {t.login.forgotPassword}
                  </button>
                </div>
              </form>
            </Card>

            {/* Not an investor yet */}
            <div className="text-center mt-8">
              <p className="text-foreground/70 mb-2">
                {t.login.noAccount}
              </p>
              <Button
                variant="outline"
                onClick={() => setCurrentPage("contact")}
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                {t.login.contactUs}
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // DASHBOARD VIEW
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header Dashboard */}
      <section className="bg-gradient-to-r from-secondary to-primary pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl text-white mb-2">
                {t.dashboard.welcome}, {investorName}
              </h1>
              <p className="text-white/80">
                {language === "es"
                  ? "Gestiona y monitorea tus inversiones en tiempo real"
                  : "Manage and monitor your investments in real time"}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary"
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t.dashboard.logout}
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white">
              <p className="text-sm text-foreground/60 mb-1">
                {t.dashboard.totalInvested}
              </p>
              <p className="text-3xl text-foreground mb-2">€150,000</p>
              <div className="flex items-center text-sm text-foreground/60">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>{language === "es" ? "2 fondos activos" : "2 active funds"}</span>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <p className="text-sm text-foreground/60 mb-1">
                {t.dashboard.currentValue}
              </p>
              <p className="text-3xl text-secondary mb-2">€167,250</p>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+11.5%</span>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <p className="text-sm text-foreground/60 mb-1">
                {t.dashboard.totalReturns}
              </p>
              <p className="text-3xl text-green-600 mb-2">+€17,250</p>
              <div className="flex items-center text-sm text-foreground/60">
                <span>{language === "es" ? "Desde inicio" : "Since inception"}</span>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <p className="text-sm text-foreground/60 mb-1">
                {t.dashboard.returnRate}
              </p>
              <p className="text-3xl text-foreground mb-2">9.8%</p>
              <div className="flex items-center text-sm text-foreground/60">
                <span>{language === "es" ? "Anualizado" : "Annualized"}</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - 2/3 */}
            <div className="lg:col-span-2 space-y-8">
              {/* My Investments */}
              <Card className="p-6 bg-white">
                <h2 className="text-2xl text-foreground mb-6">
                  {t.dashboard.myInvestments}
                </h2>
                <div className="space-y-4">
                  {/* Bricks One Investment */}
                  <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-3">
                      <div>
                        <h3 className="text-lg text-foreground">Bricks One</h3>
                        <p className="text-sm text-foreground/60">
                          {language === "es" ? "10 años • 7-15% anual" : "10 years • 7-15% annual"}
                        </p>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {language === "es" ? "Activo" : "Active"}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">{t.dashboard.invested}</p>
                        <p className="text-foreground">€100,000</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">{t.dashboard.currentVal}</p>
                        <p className="text-secondary">€114,500</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">{t.dashboard.returns}</p>
                        <p className="text-green-600">+€14,500 (+14.5%)</p>
                      </div>
                    </div>
                  </div>

                  {/* Bricks Seven Investment */}
                  <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-3">
                      <div>
                        <h3 className="text-lg text-foreground">Bricks Seven</h3>
                        <p className="text-sm text-foreground/60">
                          {language === "es" ? "7 años • 7-10% anual" : "7 years • 7-10% annual"}
                        </p>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {language === "es" ? "Activo" : "Active"}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">{t.dashboard.invested}</p>
                        <p className="text-foreground">€50,000</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">{t.dashboard.currentVal}</p>
                        <p className="text-primary">€52,750</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">{t.dashboard.returns}</p>
                        <p className="text-green-600">+€2,750 (+5.5%)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Performance Chart */}
              <Card className="p-6 bg-white">
                <h2 className="text-2xl text-foreground mb-6">
                  {t.dashboard.performance}
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="year" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#A98F5F"
                      strokeWidth={2}
                      name={language === "es" ? "Valor de Cartera (€)" : "Portfolio Value (€)"}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6 bg-white">
                <h2 className="text-2xl text-foreground mb-6">
                  {t.dashboard.recentActivity}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/30">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm text-foreground/70">{t.dashboard.date}</th>
                        <th className="px-4 py-3 text-left text-sm text-foreground/70">{t.dashboard.description}</th>
                        <th className="px-4 py-3 text-right text-sm text-foreground/70">{t.dashboard.amount}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/20">
                        <td className="px-4 py-3 text-sm text-foreground/80">{t.dashboard.activity1Date}</td>
                        <td className="px-4 py-3 text-sm text-foreground">{t.dashboard.activity1Desc}</td>
                        <td className="px-4 py-3 text-sm text-right text-green-600">{t.dashboard.activity1Amount}</td>
                      </tr>
                      <tr className="hover:bg-muted/20">
                        <td className="px-4 py-3 text-sm text-foreground/80">{t.dashboard.activity2Date}</td>
                        <td className="px-4 py-3 text-sm text-foreground">{t.dashboard.activity2Desc}</td>
                        <td className="px-4 py-3 text-sm text-right text-foreground/60">{t.dashboard.activity2Amount}</td>
                      </tr>
                      <tr className="hover:bg-muted/20">
                        <td className="px-4 py-3 text-sm text-foreground/80">{t.dashboard.activity3Date}</td>
                        <td className="px-4 py-3 text-sm text-foreground">{t.dashboard.activity3Desc}</td>
                        <td className="px-4 py-3 text-sm text-right text-green-600">{t.dashboard.activity3Amount}</td>
                      </tr>
                      <tr className="hover:bg-muted/20">
                        <td className="px-4 py-3 text-sm text-foreground/80">{t.dashboard.activity4Date}</td>
                        <td className="px-4 py-3 text-sm text-foreground">{t.dashboard.activity4Desc}</td>
                        <td className="px-4 py-3 text-sm text-right text-foreground/60">{t.dashboard.activity4Amount}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Right Column - 1/3 */}
            <div className="space-y-8">
              {/* Documents */}
              <Card className="p-6 bg-white">
                <h3 className="text-xl text-foreground mb-4">
                  {t.dashboard.documents}
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                    <span className="text-sm text-foreground/80">
                      {t.dashboard.downloadReport}{language === "es" ? "Enero 2025" : "January 2025"}
                    </span>
                    <Download className="w-4 h-4 text-secondary" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                    <span className="text-sm text-foreground/80">
                      {t.dashboard.downloadCertificate}
                    </span>
                    <Download className="w-4 h-4 text-secondary" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                    <span className="text-sm text-foreground/80">
                      {t.dashboard.downloadContract}
                    </span>
                    <Download className="w-4 h-4 text-secondary" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                    <span className="text-sm text-foreground/80">
                      {t.dashboard.downloadProspectus}
                    </span>
                    <Download className="w-4 h-4 text-secondary" />
                  </button>
                </div>
              </Card>

              {/* Support */}
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/5 border-secondary/30">
                <h3 className="text-xl text-foreground mb-2">
                  {t.dashboard.support.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">
                  {t.dashboard.support.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary" />
                    <a
                      href={`mailto:${t.dashboard.support.email}`}
                      className="text-sm text-foreground hover:text-secondary"
                    >
                      {t.dashboard.support.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <a
                      href={`tel:${t.dashboard.support.phone}`}
                      className="text-sm text-foreground hover:text-secondary"
                    >
                      {t.dashboard.support.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="text-sm text-foreground/80">
                      {t.dashboard.support.hours}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
