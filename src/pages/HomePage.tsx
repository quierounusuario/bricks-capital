import { Button } from "../components/ui/button";
import { TrendingUp, Shield, Award, Users, Building2, Eye, Clock, CheckCircle2, ArrowRight, Check } from "lucide-react";
import { Language, translations } from "../translations";
const bricksOneLogo = '';
import { ROICalculator } from "../components/ROICalculator";

interface HomePageProps {
  language: Language;
  setCurrentPage: (page: string) => void;
}

export function HomePage({ language, setCurrentPage }: HomePageProps) {
  const t = translations[language].home;
  const tTestimonials = translations[language].testimonials;
  const tComparison = translations[language].comparison;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5 -z-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTQtNHYyaDJ2LTJoLTJ6bTAtNGgydi0yaC0ydjJ6bS00IDB2LTJoLTJ2Mmgyem0wLTRoMnYtMmgtMnYyem00IDB2LTJoLTJ2Mmgyem0yIDB2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0yIDJ2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0tMiAwaDJ2LTJoLTJ2MnptMC00aDJ2LTJoLTJ2MnptLTQgNHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem0tNCAwaC0ydjJoMnYtMnptMC00di0yaC0ydjJoMnptNCAwaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 rounded-full">
              <p className="text-secondary">{t.hero.tagline}</p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-lg px-8"
                onClick={() => setCurrentPage("contact")}
              >
                {t.hero.cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8"
                onClick={() => setCurrentPage("about")}
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex justify-center mb-3">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-sm text-foreground/60 mb-1">{t.stats.title1}</p>
                <p className="text-2xl text-secondary">{t.stats.value1}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex justify-center mb-3">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-sm text-foreground/60 mb-1">{t.stats.title2}</p>
                <p className="text-2xl text-secondary">{t.stats.value2}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex justify-center mb-3">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-sm text-foreground/60 mb-1">{t.stats.title3}</p>
                <p className="text-2xl text-secondary">{t.stats.value3}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex justify-center mb-3">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-sm text-foreground/60 mb-1">{t.stats.title4}</p>
                <p className="text-2xl text-secondary">{t.stats.value4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t.why.title}
            </h2>
            <p className="text-xl text-secondary">
              {t.why.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t.why.feature1Title, desc: t.why.feature1Desc, icon: TrendingUp },
              { title: t.why.feature2Title, desc: t.why.feature2Desc, icon: Award },
              { title: t.why.feature3Title, desc: t.why.feature3Desc, icon: Building2 },
              { title: t.why.feature4Title, desc: t.why.feature4Desc, icon: Eye },
              { title: t.why.feature5Title, desc: t.why.feature5Desc, icon: Clock },
              { title: t.why.feature6Title, desc: t.why.feature6Desc, icon: Shield },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl text-foreground mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t.howItWorks.title}
            </h2>
            <p className="text-xl text-secondary">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc },
              { title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc },
              { title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc },
              { title: t.howItWorks.step4Title, desc: t.howItWorks.step4Desc },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-secondary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funds Preview Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t.fundsPreview.title}
            </h2>
            <p className="text-xl text-secondary">
              {t.fundsPreview.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Bricks One Preview */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-8 border border-secondary/20">
              <div className="flex items-center justify-center mb-6">
                <img src={bricksOneLogo || '/logo-bricksone.png'} alt="Logo" />
              </div>
              <h3 className="text-2xl text-foreground text-center mb-2">Bricks One</h3>
              <p className="text-center text-secondary italic mb-6">
                {language === "es" 
                  ? "El primer ladrillo de tu futuro financiero"
                  : "The first brick of your financial future"}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-1">{language === "es" ? "Plazo" : "Term"}</p>
                  <p className="text-lg text-secondary">{language === "es" ? "10 años" : "10 years"}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-1">{language === "es" ? "Mín" : "Min"}</p>
                  <p className="text-lg text-secondary">7%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-1">{language === "es" ? "Máx" : "Max"}</p>
                  <p className="text-lg text-secondary">15%</p>
                </div>
              </div>
              <Button
                onClick={() => setCurrentPage("funds")}
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                {language === "es" ? "Más información" : "Learn more"}
              </Button>
            </div>

            {/* Bricks Seven Preview */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center justify-center mb-6">
                <h3 className="text-3xl text-foreground">Bricks Seven</h3>
              </div>
              <p className="text-center text-primary italic mb-6">
                {language === "es"
                  ? "Para seguir rentabilizando el dinero en menos tiempo"
                  : "Keep your money profitable in less time"}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-1">{language === "es" ? "Plazo" : "Term"}</p>
                  <p className="text-lg text-primary">{language === "es" ? "7 años" : "7 years"}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-1">{language === "es" ? "Mín" : "Min"}</p>
                  <p className="text-lg text-primary">7%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-1">{language === "es" ? "Máx" : "Max"}</p>
                  <p className="text-lg text-primary">10%</p>
                </div>
              </div>
              <Button
                onClick={() => setCurrentPage("funds")}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                {language === "es" ? "Más información" : "Learn more"}
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => setCurrentPage("funds")}
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
            >
              {t.fundsPreview.viewAll}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-secondary">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              tTestimonials.testimonial1,
              tTestimonials.testimonial2,
              tTestimonials.testimonial3,
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-foreground/70 mb-10">
            {t.cta.description}
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-lg px-12"
            onClick={() => setCurrentPage("contact")}
          >
            {t.cta.button}
          </Button>
        </div>
      </section>

      {/* Investment Comparison Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {tComparison.title}
            </h2>
            <p className="text-xl text-secondary">
              {tComparison.subtitle}
            </p>
          </div>

          {/* Desktop: Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-lg border border-border overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-secondary/10 to-primary/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-foreground">{tComparison.investment}</th>
                    <th className="px-6 py-4 text-center text-foreground">{tComparison.annualReturn}</th>
                    <th className="px-6 py-4 text-center text-foreground">{tComparison.risk}</th>
                    <th className="px-6 py-4 text-center text-foreground">{tComparison.liquidity}</th>
                    <th className="px-6 py-4 text-center text-foreground">{tComparison.minInvestment}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {/* Bricks Capital - Highlighted */}
                  <tr className="bg-gradient-to-r from-secondary/5 to-primary/5">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span className="text-secondary">{tComparison.bricksCapital}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-secondary">{tComparison.bricksReturn}</td>
                    <td className="px-6 py-4 text-center">{tComparison.bricksRisk}</td>
                    <td className="px-6 py-4 text-center">{tComparison.bricksLiquidity}</td>
                    <td className="px-6 py-4 text-center">{tComparison.bricksMin}</td>
                  </tr>
                  {/* Bank Deposit */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-foreground/80">{tComparison.bankDeposit}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.bankReturn}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.bankRisk}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.bankLiquidity}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.bankMin}</td>
                  </tr>
                  {/* Mutual Funds */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-foreground/80">{tComparison.mutualFunds}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.mutualReturn}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.mutualRisk}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.mutualLiquidity}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.mutualMin}</td>
                  </tr>
                  {/* Stock Market */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-foreground/80">{tComparison.stockMarket}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.stockReturn}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.stockRisk}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.stockLiquidity}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.stockMin}</td>
                  </tr>
                  {/* Bonds */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-foreground/80">{tComparison.bonds}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.bondsReturn}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.bondsRisk}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.bondsLiquidity}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.bondsMin}</td>
                  </tr>
                  {/* Direct Real Estate */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-foreground/80">{tComparison.directRealEstate}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.directReturn}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.directRisk}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.directLiquidity}</td>
                    <td className="px-6 py-4 text-center text-foreground/60">{tComparison.directMin}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 bg-muted/30 space-y-1">
              <p className="text-sm text-foreground/60 italic">
                {tComparison.riskNote}
              </p>
              <p className="text-sm text-foreground/60 italic">
                {tComparison.liquidityNote}
              </p>
            </div>
          </div>

          {/* Mobile: Card View */}
          <div className="md:hidden space-y-4 mb-12">
            {/* Bricks Capital Card - Highlighted */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-xl p-6 border-2 border-secondary/30 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-secondary rounded-full" />
                <h3 className="text-lg text-secondary">{tComparison.bricksCapital}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.annualReturn}:</span>
                  <span className="text-secondary">{tComparison.bricksReturn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.risk}:</span>
                  <span className="text-foreground">{tComparison.bricksRisk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.liquidity}:</span>
                  <span className="text-foreground">{tComparison.bricksLiquidity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.minInvestment}:</span>
                  <span className="text-foreground">{tComparison.bricksMin}</span>
                </div>
              </div>
            </div>

            {/* Bank Deposit Card */}
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <h3 className="text-lg text-foreground mb-4">{tComparison.bankDeposit}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.annualReturn}:</span>
                  <span className="text-foreground/60">{tComparison.bankReturn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.risk}:</span>
                  <span className="text-foreground/60">{tComparison.bankRisk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.liquidity}:</span>
                  <span className="text-foreground/60">{tComparison.bankLiquidity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.minInvestment}:</span>
                  <span className="text-foreground/60">{tComparison.bankMin}</span>
                </div>
              </div>
            </div>

            {/* Mutual Funds Card */}
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <h3 className="text-lg text-foreground mb-4">{tComparison.mutualFunds}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.annualReturn}:</span>
                  <span className="text-foreground/60">{tComparison.mutualReturn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.risk}:</span>
                  <span className="text-foreground/60">{tComparison.mutualRisk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.liquidity}:</span>
                  <span className="text-foreground/60">{tComparison.mutualLiquidity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.minInvestment}:</span>
                  <span className="text-foreground/60">{tComparison.mutualMin}</span>
                </div>
              </div>
            </div>

            {/* Stock Market Card */}
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <h3 className="text-lg text-foreground mb-4">{tComparison.stockMarket}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.annualReturn}:</span>
                  <span className="text-foreground/60">{tComparison.stockReturn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.risk}:</span>
                  <span className="text-foreground/60">{tComparison.stockRisk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.liquidity}:</span>
                  <span className="text-foreground/60">{tComparison.stockLiquidity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.minInvestment}:</span>
                  <span className="text-foreground/60">{tComparison.stockMin}</span>
                </div>
              </div>
            </div>

            {/* Bonds Card */}
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <h3 className="text-lg text-foreground mb-4">{tComparison.bonds}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.annualReturn}:</span>
                  <span className="text-foreground/60">{tComparison.bondsReturn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.risk}:</span>
                  <span className="text-foreground/60">{tComparison.bondsRisk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.liquidity}:</span>
                  <span className="text-foreground/60">{tComparison.bondsLiquidity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.minInvestment}:</span>
                  <span className="text-foreground/60">{tComparison.bondsMin}</span>
                </div>
              </div>
            </div>

            {/* Direct Real Estate Card */}
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <h3 className="text-lg text-foreground mb-4">{tComparison.directRealEstate}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.annualReturn}:</span>
                  <span className="text-foreground/60">{tComparison.directReturn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.risk}:</span>
                  <span className="text-foreground/60">{tComparison.directRisk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.liquidity}:</span>
                  <span className="text-foreground/60">{tComparison.directLiquidity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{tComparison.minInvestment}:</span>
                  <span className="text-foreground/60">{tComparison.directMin}</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-muted/30 rounded-xl p-4 space-y-2">
              <p className="text-sm text-foreground/60 italic">
                {tComparison.riskNote}
              </p>
              <p className="text-sm text-foreground/60 italic">
                {tComparison.liquidityNote}
              </p>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              tComparison.advantage1,
              tComparison.advantage2,
              tComparison.advantage3,
              tComparison.advantage4,
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary/10 to-primary/5 p-6 rounded-xl border border-secondary/20"
              >
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <p className="text-foreground/80">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator language={language} />
        </div>
      </section>
    </div>
  );
}