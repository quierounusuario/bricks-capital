import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Language, translations } from "../translations";
import { toast } from "sonner";

interface ContactPageProps {
  language: Language;
  setCurrentPage: (page: string) => void;
}

export function ContactPage({ language, setCurrentPage }: ContactPageProps) {
  const t = translations[language].contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fund: "",
    investmentAmount: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error(
        language === "es"
          ? "Debes aceptar la política de privacidad"
          : "You must accept the privacy policy"
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(
      language === "es"
        ? "¡Mensaje enviado! Nos pondremos en contacto contigo pronto."
        : "Message sent! We'll contact you soon."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      fund: "",
      investmentAmount: "",
      subject: "",
      message: "",
      consent: false,
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-secondary/5 to-primary/5">
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

      {/* Main Contact Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl text-foreground mb-4">{t.form.title}</h2>
              </div>

              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-border space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">{t.form.name}</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">{t.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">{t.form.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fund">{t.form.fund}</Label>
                    <Select
                      value={formData.fund}
                      onValueChange={(value) =>
                        setFormData({ ...formData, fund: value })
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder={t.form.fundPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bricks-one">Bricks One</SelectItem>
                        <SelectItem value="bricks-seven">Bricks Seven</SelectItem>
                        <SelectItem value="both">{language === "es" ? "Ambos fondos" : "Both funds"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="investment">{t.form.investmentAmount}</Label>
                    <Select
                      value={formData.investmentAmount}
                      onValueChange={(value) =>
                        setFormData({ ...formData, investmentAmount: value })
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder={t.form.investmentPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="range1">{t.investmentRanges.range1}</SelectItem>
                        <SelectItem value="range2">{t.investmentRanges.range2}</SelectItem>
                        <SelectItem value="range3">{t.investmentRanges.range3}</SelectItem>
                        <SelectItem value="range4">{t.investmentRanges.range4}</SelectItem>
                        <SelectItem value="range5">{t.investmentRanges.range5}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">{t.form.subject}</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder={t.form.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t.form.message}</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="cursor-pointer leading-relaxed">
                    {t.form.consent}
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    t.form.sending
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      {t.form.submit}
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl border border-secondary/20">
                <h3 className="text-2xl text-foreground mb-6">{t.direct.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">{t.direct.general}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-secondary" />
                      </div>
                      <a
                        href={`mailto:${t.direct.generalEmail}`}
                        className="text-foreground hover:text-secondary transition-colors"
                      >
                        {t.direct.generalEmail}
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-border/50 pt-6">
                    <p className="text-sm text-foreground/60 mb-2">{t.direct.investors}</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-secondary" />
                        </div>
                        <a
                          href={`mailto:${t.direct.investorsEmail}`}
                          className="text-foreground hover:text-secondary transition-colors"
                        >
                          {t.direct.investorsEmail}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-5 h-5 text-secondary" />
                        </div>
                        <a
                          href={`https://wa.me/${t.direct.investorsPhone.replace(/\s+/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-secondary transition-colors"
                        >
                          {t.direct.investorsPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border/50 pt-6">
                    <p className="text-sm text-foreground/60 mb-2">{t.direct.press}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-secondary" />
                      </div>
                      <a
                        href={`mailto:${t.direct.pressEmail}`}
                        className="text-foreground hover:text-secondary transition-colors"
                      >
                        {t.direct.pressEmail}
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-border/50 pt-6">
                    <p className="text-sm text-foreground/60 mb-2">{t.direct.careers}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-secondary" />
                      </div>
                      <a
                        href={`mailto:${t.direct.careersEmail}`}
                        className="text-foreground hover:text-secondary transition-colors"
                      >
                        {t.direct.careersEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl text-foreground">{t.schedule.title}</h3>
                </div>
                <div className="space-y-3 text-foreground/70">
                  <div className="flex justify-between">
                    <span>{t.schedule.weekdays}</span>
                    <span className="text-secondary">{t.schedule.weekdaysTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.schedule.weekends}</span>
                    <span className="text-foreground/40">{t.schedule.weekendsTime}</span>
                  </div>
                  <p className="text-sm text-foreground/60 pt-3 border-t border-border">
                    {t.schedule.note}
                  </p>
                </div>
              </div>

              {/* FAQ CTA */}
              <div className="bg-muted/50 p-8 rounded-2xl border border-border">
                <h3 className="text-xl text-foreground mb-3">{t.faq.title}</h3>
                <p className="text-foreground/70 mb-6">
                  {t.faq.description}
                </p>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={() => setCurrentPage("funds")}
                >
                  {t.faq.button}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
              {t.offices.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Madrid Office */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl text-foreground mb-2">{t.offices.madrid}</h3>
              <p className="text-foreground/70 whitespace-pre-line">
                {t.offices.madridAddress}
              </p>
            </div>

            {/* Barcelona Office */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl text-foreground mb-2">{t.offices.barcelona}</h3>
              <p className="text-foreground/70 whitespace-pre-line">
                {t.offices.barcelonaAddress}
              </p>
            </div>

            {/* Mexico Office */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl text-foreground mb-2">{t.offices.mexico}</h3>
              <p className="text-foreground/70 whitespace-pre-line">
                {t.offices.mexicoAddress}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
