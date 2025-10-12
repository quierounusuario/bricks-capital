import { Button } from "../components/ui/button";
import { Check, TrendingUp, Clock, Shield, Download, ChevronDown, ChevronUp } from "lucide-react";
import { Language, translations } from "../translations";
import bricksOneLogo from "figma:asset/14e6c2ae19e5d1a664b2987252626bab494ec868.png";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { ROICalculator } from "../components/ROICalculator";

interface FundsPageProps {
  language: Language;
  setCurrentPage: (page: string) => void;
}

export function FundsPage({ language, setCurrentPage }: FundsPageProps) {
  const t = translations[language].funds;
  const [selectedFund, setSelectedFund] = useState<"one" | "seven" | null>(null);

  // Mock performance data
  const performanceDataOne = [
    { year: "2016", return: 8.5 },
    { year: "2017", return: 11.2 },
    { year: "2018", return: 9.8 },
    { year: "2019", return: 13.4 },
    { year: "2020", return: 7.9 },
    { year: "2021", return: 14.2 },
    { year: "2022", return: 10.1 },
    { year: "2023", return: 12.8 },
    { year: "2024", return: 13.5 },
  ];

  const performanceDataSeven = [
    { year: "2021", return: 7.8 },
    { year: "2022", return: 8.9 },
    { year: "2023", return: 9.2 },
    { year: "2024", return: 9.5 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-secondary mb-6">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-foreground/70">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
              {t.comparison.title}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-foreground">{t.comparison.feature}</th>
                    <th className="px-6 py-4 text-center text-secondary">{t.comparison.bricksOne}</th>
                    <th className="px-6 py-4 text-center text-primary">{t.comparison.bricksSeven}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 text-foreground/80">{t.comparison.duration}</td>
                    <td className="px-6 py-4 text-center">{t.comparison.duration1}</td>
                    <td className="px-6 py-4 text-center">{t.comparison.duration2}</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 text-foreground/80">{t.comparison.minReturn}</td>
                    <td className="px-6 py-4 text-center text-secondary">{t.comparison.minReturn1}</td>
                    <td className="px-6 py-4 text-center text-primary">{t.comparison.minReturn2}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-foreground/80">{t.comparison.maxReturn}</td>
                    <td className="px-6 py-4 text-center text-secondary">{t.comparison.maxReturn1}</td>
                    <td className="px-6 py-4 text-center text-primary">{t.comparison.maxReturn2}</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 text-foreground/80">{t.comparison.minInvestment}</td>
                    <td className="px-6 py-4 text-center">{t.comparison.minInvestment1}</td>
                    <td className="px-6 py-4 text-center">{t.comparison.minInvestment2}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-foreground/80">{t.comparison.liquidity}</td>
                    <td className="px-6 py-4 text-center">{t.comparison.liquidity1}</td>
                    <td className="px-6 py-4 text-center">{t.comparison.liquidity2}</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 text-foreground/80">{t.comparison.risk}</td>
                    <td className="px-6 py-4 text-center">{t.comparison.risk1}</td>
                    <td className="px-6 py-4 text-center">{t.comparison.risk2}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-foreground/80">{t.comparison.idealFor}</td>
                    <td className="px-6 py-4 text-center">{t.comparison.idealFor1}</td>
                    <td className="px-6 py-4 text-center">{t.comparison.idealFor2}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* BricksOne Detailed Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <img src={bricksOneLogo} alt="Bricks One" className="h-20 w-auto" />
              </div>
              <p className="text-secondary italic mb-6 text-xl">
                "{t.bricksOne.tagline}"
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {t.bricksOne.fullDescription}
              </p>

              <h3 className="text-2xl text-foreground mb-4">{t.bricksOne.whyInvest}</h3>
              <ul className="space-y-3">
                {[
                  t.bricksOne.reason1,
                  t.bricksOne.reason2,
                  t.bricksOne.reason3,
                  t.bricksOne.reason4,
                  t.bricksOne.reason5,
                  t.bricksOne.reason6,
                ].map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {/* Portfolio Composition */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-2xl text-foreground mb-2">{t.bricksOne.portfolio}</h3>
                <p className="text-foreground/60 mb-6">{t.bricksOne.portfolioDesc}</p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{t.bricksOne.residential}</span>
                      <span className="text-secondary">{t.bricksOne.residentialPct}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-secondary h-3 rounded-full" style={{ width: "40%" }} />
                    </div>
                    <p className="text-sm text-foreground/60 mt-1">{t.bricksOne.residentialDesc}</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{t.bricksOne.commercial}</span>
                      <span className="text-secondary">{t.bricksOne.commercialPct}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-secondary h-3 rounded-full" style={{ width: "30%" }} />
                    </div>
                    <p className="text-sm text-foreground/60 mt-1">{t.bricksOne.commercialDesc}</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{t.bricksOne.logistics}</span>
                      <span className="text-secondary">{t.bricksOne.logisticsPct}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-secondary h-3 rounded-full" style={{ width: "20%" }} />
                    </div>
                    <p className="text-sm text-foreground/60 mt-1">{t.bricksOne.logisticsDesc}</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{t.bricksOne.hotels}</span>
                      <span className="text-secondary">{t.bricksOne.hotelsPct}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-secondary h-3 rounded-full" style={{ width: "10%" }} />
                    </div>
                    <p className="text-sm text-foreground/60 mt-1">{t.bricksOne.hotelsDesc}</p>
                  </div>
                </div>
              </div>

              {/* Performance Chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-2xl text-foreground mb-2">{t.bricksOne.performance}</h3>
                <p className="text-foreground/60 mb-6">{t.bricksOne.performanceDesc}</p>

                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={performanceDataOne}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="year" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Bar dataKey="return" fill="#A98F5F" name={t.bricksOne.return + " (%)"} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Fees & Documents */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-2xl text-foreground mb-6">{t.bricksOne.fees}</h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-border">
                  <span className="text-foreground/70">{t.bricksOne.managementFee}</span>
                  <span className="text-foreground">{t.bricksOne.managementFeeValue}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border">
                  <span className="text-foreground/70">{t.bricksOne.performanceFee}</span>
                  <span className="text-foreground">{t.bricksOne.performanceFeeValue}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border">
                  <span className="text-foreground/70">{t.bricksOne.entryFee}</span>
                  <span className="text-secondary">{t.bricksOne.entryFeeValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t.bricksOne.exitFee}</span>
                  <span className="text-secondary">{t.bricksOne.exitFeeValue}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-2xl text-foreground mb-6">{t.bricksOne.documents}</h3>
              <div className="space-y-3">
                {[
                  t.bricksOne.prospectus,
                  t.bricksOne.regulations,
                  t.bricksOne.factsheet,
                  t.bricksOne.lastReport,
                ].map((doc, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                  >
                    <span className="text-foreground/80">{doc}</span>
                    <Download className="w-5 h-5 text-secondary" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
              onClick={() => setCurrentPage("contact")}
            >
              {language === "es" ? "Invertir en Bricks One" : "Invest in Bricks One"}
            </Button>
          </div>
        </div>
      </section>

      {/* BricksSeven Detailed Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-4xl text-foreground mb-4">{t.bricksSeven.name}</h2>
              <p className="text-primary italic mb-6 text-xl">
                "{t.bricksSeven.tagline}"
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {t.bricksSeven.fullDescription}
              </p>

              <h3 className="text-2xl text-foreground mb-4">{t.bricksSeven.whyInvest}</h3>
              <ul className="space-y-3">
                {[
                  t.bricksSeven.reason1,
                  t.bricksSeven.reason2,
                  t.bricksSeven.reason3,
                  t.bricksSeven.reason4,
                  t.bricksSeven.reason5,
                  t.bricksSeven.reason6,
                ].map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {/* Portfolio Composition */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-2xl text-foreground mb-2">{t.bricksSeven.portfolio}</h3>
                <p className="text-foreground/60 mb-6">{t.bricksSeven.portfolioDesc}</p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{t.bricksSeven.residential}</span>
                      <span className="text-primary">{t.bricksSeven.residentialPct}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: "50%" }} />
                    </div>
                    <p className="text-sm text-foreground/60 mt-1">{t.bricksSeven.residentialDesc}</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{t.bricksSeven.commercial}</span>
                      <span className="text-primary">{t.bricksSeven.commercialPct}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: "25%" }} />
                    </div>
                    <p className="text-sm text-foreground/60 mt-1">{t.bricksSeven.commercialDesc}</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{t.bricksSeven.offices}</span>
                      <span className="text-primary">{t.bricksSeven.officesPct}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: "15%" }} />
                    </div>
                    <p className="text-sm text-foreground/60 mt-1">{t.bricksSeven.officesDesc}</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{t.bricksSeven.healthcare}</span>
                      <span className="text-primary">{t.bricksSeven.healthcarePct}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: "10%" }} />
                    </div>
                    <p className="text-sm text-foreground/60 mt-1">{t.bricksSeven.healthcareDesc}</p>
                  </div>
                </div>
              </div>

              {/* Performance Chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-2xl text-foreground mb-2">{t.bricksSeven.performance}</h3>
                <p className="text-foreground/60 mb-6">{t.bricksSeven.performanceDesc}</p>

                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={performanceDataSeven}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="year" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Bar dataKey="return" fill="#7F8181" name={t.bricksSeven.return + " (%)"} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Fees & Documents */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-2xl text-foreground mb-6">{t.bricksSeven.fees}</h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-border">
                  <span className="text-foreground/70">{t.bricksSeven.managementFee}</span>
                  <span className="text-foreground">{t.bricksSeven.managementFeeValue}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border">
                  <span className="text-foreground/70">{t.bricksSeven.performanceFee}</span>
                  <span className="text-foreground">{t.bricksSeven.performanceFeeValue}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border">
                  <span className="text-foreground/70">{t.bricksSeven.entryFee}</span>
                  <span className="text-primary">{t.bricksSeven.entryFeeValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t.bricksSeven.exitFee}</span>
                  <span className="text-primary">{t.bricksSeven.exitFeeValue}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-2xl text-foreground mb-6">{t.bricksSeven.documents}</h3>
              <div className="space-y-3">
                {[
                  t.bricksSeven.prospectus,
                  t.bricksSeven.regulations,
                  t.bricksSeven.factsheet,
                  t.bricksSeven.lastReport,
                ].map((doc, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                  >
                    <span className="text-foreground/80">{doc}</span>
                    <Download className="w-5 h-5 text-primary" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => setCurrentPage("contact")}
            >
              {language === "es" ? "Invertir en Bricks Seven" : "Invest in Bricks Seven"}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
              {t.faq.title}
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: t.faq.q1, a: t.faq.a1 },
              { q: t.faq.q2, a: t.faq.a2 },
              { q: t.faq.q3, a: t.faq.a3 },
              { q: t.faq.q4, a: t.faq.a4 },
              { q: t.faq.q5, a: t.faq.a5 },
              { q: t.faq.q6, a: t.faq.a6 },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-secondary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

      {/* ROI Calculator Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator language={language} />
        </div>
      </section>
    </div>
  );
}