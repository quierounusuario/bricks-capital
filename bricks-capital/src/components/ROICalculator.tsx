import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";
import { Language, translations } from "../translations";

interface ROICalculatorProps {
  language: Language;
}

export function ROICalculator({ language }: ROICalculatorProps) {
  const t = translations[language].calculator;
  
  const [fund, setFund] = useState<"one" | "seven">("one");
  const [amount, setAmount] = useState<string>("25000");
  const [years, setYears] = useState<number>(5);
  const [results, setResults] = useState<{
    initialInvestment: number;
    guaranteedTotal: number;
    guaranteedEarnings: number;
    guaranteedAnnual: number;
    potentialTotal: number;
    potentialEarnings: number;
    potentialAnnual: number;
  } | null>(null);

  const fundDetails = {
    one: {
      name: "Bricks One",
      minReturn: 0.07,
      maxReturn: 0.15,
      maxYears: 10,
    },
    seven: {
      name: "Bricks Seven",
      minReturn: 0.07,
      maxReturn: 0.10,
      maxYears: 7,
    },
  };

  const currentFund = fundDetails[fund];
  const maxYears = currentFund.maxYears;

  useEffect(() => {
    if (years > maxYears) {
      setYears(maxYears);
    }
  }, [fund, maxYears, years]);

  const calculateROI = () => {
    const principal = parseFloat(amount) || 0;
    
    if (principal <= 0) {
      return;
    }

    // Cálculo con interés simple (la rentabilidad se paga cada año y sale)
    const guaranteedAnnual = principal * currentFund.minReturn;
    const guaranteedEarnings = guaranteedAnnual * years;
    const guaranteedTotal = principal + guaranteedEarnings;
    
    const potentialAnnual = principal * currentFund.maxReturn;
    const potentialEarnings = potentialAnnual * years;
    const potentialTotal = principal + potentialEarnings;

    setResults({
      initialInvestment: principal,
      guaranteedTotal: guaranteedTotal,
      guaranteedEarnings: guaranteedEarnings,
      guaranteedAnnual: guaranteedAnnual,
      potentialTotal: potentialTotal,
      potentialEarnings: potentialEarnings,
      potentialAnnual: potentialAnnual,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(language === "es" ? "es-ES" : "en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-secondary to-primary p-6">
        <div className="flex items-center gap-3 text-white">
          <Calculator className="w-8 h-8" />
          <div>
            <h3 className="text-2xl">{t.title}</h3>
            <p className="text-white/90 text-sm">{t.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="fund">{t.fund}</Label>
              <Select
                value={fund}
                onValueChange={(value: "one" | "seven") => setFund(value)}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="one">{t.bricksOne}</SelectItem>
                  <SelectItem value="seven">{t.bricksSeven}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="amount">{t.amount}</Label>
              <div className="relative mt-2">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60">
                  €
                </span>
                <Input
                  id="amount"
                  type="number"
                  min="0"
                  step="1000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="years">{t.years}</Label>
              <Select
                value={years.toString()}
                onValueChange={(value) => setYears(parseInt(value))}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 {t.years_plural}</SelectItem>
                  <SelectItem value="7" disabled={fund === "seven" && maxYears < 7}>
                    7 {t.years_plural}
                  </SelectItem>
                  <SelectItem value="10" disabled={maxYears < 10}>
                    10 {t.years_plural}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={calculateROI}
              className="w-full bg-secondary hover:bg-secondary/90"
              size="lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              {t.calculate}
            </Button>
          </div>

          {/* Results Section */}
          <div>
            {results ? (
              <div className="space-y-4">
                <h4 className="text-xl text-foreground mb-4">{t.results}</h4>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-foreground/60 mb-1">{t.initialInvestment}</p>
                  <p className="text-2xl text-foreground">
                    {formatCurrency(results.initialInvestment)}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-primary/5 p-4 rounded-lg border border-secondary/20">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">{t.guaranteedReturn}</p>
                      <p className="text-2xl text-secondary">
                        {formatCurrency(results.guaranteedTotal)}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                  <p className="text-sm text-secondary">
                    {t.earnings}: +{formatCurrency(results.guaranteedEarnings)}
                  </p>
                  <p className="text-xs text-secondary/70 mt-1">
                    {formatCurrency(results.guaranteedAnnual)}/año
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/5 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">
                        {t.potentialReturn} ({Math.round(currentFund.maxReturn * 100)}%)
                      </p>
                      <p className="text-2xl text-primary">
                        {formatCurrency(results.potentialTotal)}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-primary">
                    {t.earnings}: +{formatCurrency(results.potentialEarnings)}
                  </p>
                  <p className="text-xs text-primary/70 mt-1">
                    {formatCurrency(results.potentialAnnual)}/año
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-foreground/60 italic leading-relaxed">
                    {t.note}
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center text-foreground/40">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>
                    {language === "es"
                      ? "Completa los datos y calcula tu rentabilidad"
                      : "Fill in the details and calculate your returns"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
