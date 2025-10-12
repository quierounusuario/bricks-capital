import { Button } from "../components/ui/button";
import {
  Building2,
  Eye,
  TrendingUp,
  Award,
  Target,
  Heart,
  Lightbulb,
  ShieldCheck,
  CheckCircle2,
  Users,
} from "lucide-react";
import { Language, translations } from "../translations";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface AboutPageProps {
  language: Language;
  setCurrentPage: (page: string) => void;
}

export function AboutPage({ language, setCurrentPage }: AboutPageProps) {
  const t = translations[language].about;

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
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-10 border border-secondary/20">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl text-foreground mb-6">{t.mission.title}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.mission.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl p-10 border border-primary/20">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl text-foreground mb-6">{t.vision.title}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t.values.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: t.values.value1Title, desc: t.values.value1Desc, icon: Heart },
              { title: t.values.value2Title, desc: t.values.value2Desc, icon: Award },
              { title: t.values.value3Title, desc: t.values.value3Desc, icon: ShieldCheck },
              { title: t.values.value4Title, desc: t.values.value4Desc, icon: Lightbulb },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm border border-border"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t.history.title}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 transform -translate-x-1/2" />

            <div className="space-y-12">
              {[
                { year: t.history.year1, title: t.history.year1Title, desc: t.history.year1Desc },
                { year: t.history.year2, title: t.history.year2Title, desc: t.history.year2Desc },
                { year: t.history.year3, title: t.history.year3Title, desc: t.history.year3Desc },
                { year: t.history.year4, title: t.history.year4Title, desc: t.history.year4Desc },
                { year: t.history.year5, title: t.history.year5Title, desc: t.history.year5Desc },
                { year: t.history.year6, title: t.history.year6Title, desc: t.history.year6Desc },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 0 ? "lg:text-right" : "lg:col-start-2"}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border inline-block lg:block">
                      <div className="flex items-center gap-3 mb-3 lg:justify-end">
                        <span className="text-3xl text-secondary">{item.year}</span>
                      </div>
                      <h3 className="text-xl text-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-secondary rounded-full border-4 border-background" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t.team.title}
            </h2>
            <p className="text-xl text-secondary">
              {t.team.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: t.team.member1Name, role: t.team.member1Role, bio: t.team.member1Bio },
              { name: t.team.member2Name, role: t.team.member2Role, bio: t.team.member2Bio },
              { name: t.team.member3Name, role: t.team.member3Role, bio: t.team.member3Bio },
              { name: t.team.member4Name, role: t.team.member4Role, bio: t.team.member4Bio },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-border"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl text-foreground mb-1">{member.name}</h3>
                <p className="text-secondary mb-4">{member.role}</p>
                <p className="text-foreground/70 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Approach Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t.approach.title}
            </h2>
            <p className="text-xl text-secondary">
              {t.approach.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t.approach.step1Title, desc: t.approach.step1Desc },
              { title: t.approach.step2Title, desc: t.approach.step2Desc },
              { title: t.approach.step3Title, desc: t.approach.step3Desc },
              { title: t.approach.step4Title, desc: t.approach.step4Desc },
              { title: t.approach.step5Title, desc: t.approach.step5Desc },
              { title: t.approach.step6Title, desc: t.approach.step6Desc },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t.certifications.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              t.certifications.cert1,
              t.certifications.cert2,
              t.certifications.cert3,
              t.certifications.cert4,
              t.certifications.cert5,
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{cert}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
              onClick={() => setCurrentPage("contact")}
            >
              {language === "es" ? "Comienza a invertir" : "Start investing"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
