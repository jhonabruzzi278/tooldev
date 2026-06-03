import { useState, useId, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getLicenseInfo } from "@/lib/licenses";
import { cn } from "@/lib/utils";

interface LicenseToggleProps {
  license: string;
  size?: "sm" | "md";
  className?: string;
}

export default function LicenseToggle({ license, size = "md", className }: LicenseToggleProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const info = getLicenseInfo(license);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const btnSize = size === "sm" ? "xs" : "sm";

  return (
    <div ref={ref} className={cn("relative inline-flex flex-col", className)}>
      <Button
        variant="outline"
        size={btnSize}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={`license-panel-${id}`}
        className={cn(
          "gap-1",
          open && "border-primary bg-primary/5"
        )}
      >
        {license}
        <svg
          className={cn(
            "shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
          width={size === "sm" ? "10" : "12"}
          height={size === "sm" ? "10" : "12"}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`license-panel-${id}`}
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 mt-1 left-0"
          >
            <Card size="sm" className="w-72 p-3 text-xs leading-relaxed shadow-lg">
              {info ? (
                <>
                  <p className="text-muted-foreground">{info.explanation}</p>
                  {info.url && (
                    <a
                      href={info.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-primary hover:underline"
                    >
                      Más información
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </>
              ) : (
                <p className="text-muted-foreground">
                  Licencia: {license}. Revisa el sitio oficial para conocer los términos específicos.
                </p>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
