import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored === "light" || stored === "dark" ? stored : "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[var(--glow-primary)]"
    >
      <Sun className="h-4.5 w-4.5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4.5 w-4.5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
