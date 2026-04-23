import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId, useState } from "react";

function validatePositiveNumber(val: string): string | null {
  if (val === "") return null;
  const n = Number.parseFloat(val);
  if (Number.isNaN(n) || n <= 0) return "Must be a positive number";
  return null;
}

export default function App() {
  const widthId = useId();
  const heightId = useId();

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [widthTouched, setWidthTouched] = useState(false);
  const [heightTouched, setHeightTouched] = useState(false);
  const [area, setArea] = useState<number | null>(null);
  const [resultKey, setResultKey] = useState(0);

  const widthError = widthTouched ? validatePositiveNumber(width) : null;
  const heightError = heightTouched ? validatePositiveNumber(height) : null;

  const widthVal = Number.parseFloat(width);
  const heightVal = Number.parseFloat(height);
  const isValid =
    !Number.isNaN(widthVal) &&
    widthVal > 0 &&
    !Number.isNaN(heightVal) &&
    heightVal > 0;

  function handleCalculate() {
    if (!isValid) return;
    setArea(widthVal * heightVal);
    setResultKey((k) => k + 1);
  }

  function handleClear() {
    setWidth("");
    setHeight("");
    setWidthTouched(false);
    setHeightTouched(false);
    setArea(null);
    setResultKey(0);
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-foreground text-base tracking-tight">
              RectCalc
            </span>
            <span className="text-border select-none">|</span>
            <span className="text-muted-foreground text-sm font-body">
              Calculator
            </span>
          </div>
          <nav>
            <a
              href="#calculator"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-body"
            >
              Calculator
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main
        id="calculator"
        className="flex-1 flex items-center justify-center bg-background px-4 py-12"
      >
        <div
          className="w-full max-w-[420px] bg-card border border-border rounded-[10px] shadow-md p-8 flex flex-col gap-6"
          data-ocid="calculator.card"
        >
          {/* Title */}
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-foreground tracking-tight leading-tight">
              Rectangle Area Calculator
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground font-body">
              Enter the width and height of the rectangle below.
            </p>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4">
            {/* Width */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor={widthId}
                className="text-xs font-medium text-foreground font-body"
              >
                Width (cm)
              </Label>
              <Input
                id={widthId}
                data-ocid="calculator.width.input"
                type="number"
                min="0"
                step="any"
                placeholder="e.g. 12.5"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                onBlur={() => setWidthTouched(true)}
                className={[
                  "font-mono text-sm h-11 rounded-[6px] bg-card border-input",
                  "focus-visible:ring-ring focus-visible:border-ring",
                  widthError
                    ? "border-destructive focus-visible:ring-destructive"
                    : "",
                ].join(" ")}
                aria-describedby={widthError ? `${widthId}-error` : undefined}
                aria-invalid={!!widthError}
              />
              {widthError && (
                <span
                  id={`${widthId}-error`}
                  data-ocid="calculator.width.field_error"
                  className="text-xs text-destructive font-body"
                >
                  {widthError}
                </span>
              )}
            </div>

            {/* Height */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor={heightId}
                className="text-xs font-medium text-foreground font-body"
              >
                Height (cm)
              </Label>
              <Input
                id={heightId}
                data-ocid="calculator.height.input"
                type="number"
                min="0"
                step="any"
                placeholder="e.g. 8.0"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                onBlur={() => setHeightTouched(true)}
                className={[
                  "font-mono text-sm h-11 rounded-[6px] bg-card border-input",
                  "focus-visible:ring-ring focus-visible:border-ring",
                  heightError
                    ? "border-destructive focus-visible:ring-destructive"
                    : "",
                ].join(" ")}
                aria-describedby={heightError ? `${heightId}-error` : undefined}
                aria-invalid={!!heightError}
              />
              {heightError && (
                <span
                  id={`${heightId}-error`}
                  data-ocid="calculator.height.field_error"
                  className="text-xs text-destructive font-body"
                >
                  {heightError}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Button
              data-ocid="calculator.calculate.primary_button"
              onClick={handleCalculate}
              disabled={!isValid}
              className="h-12 w-full rounded-[8px] font-display font-semibold text-base bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-smooth"
            >
              Calculate Area
            </Button>

            <Button
              data-ocid="calculator.clear.secondary_button"
              onClick={handleClear}
              variant="outline"
              className="h-10 w-full rounded-[8px] font-body text-sm border-destructive/40 text-destructive hover:bg-destructive/5 hover:border-destructive transition-smooth"
            >
              Clear
            </Button>
          </div>

          {/* Result */}
          {area !== null && (
            <div
              key={resultKey}
              data-ocid="calculator.result.panel"
              className="result-enter bg-muted/40 border border-border rounded-[8px] px-6 py-5 text-center"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-1">
                Total Area
              </p>
              <p className="font-display font-bold text-3xl text-foreground leading-tight">
                {area % 1 === 0 ? area.toFixed(0) : area.toFixed(2)}
                <span className="text-xl ml-1 align-super font-mono">cm²</span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground font-body">
                {widthVal} cm × {heightVal} cm
              </p>
            </div>
          )}

          {area === null && (
            <div
              data-ocid="calculator.result.empty_state"
              className="bg-muted/20 border border-dashed border-border rounded-[8px] px-6 py-5 text-center"
            >
              <p className="text-xs text-muted-foreground font-body">
                Result will appear here after calculation
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between text-xs text-muted-foreground font-body">
          <span>© {new Date().getFullYear()} RectCalc</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
