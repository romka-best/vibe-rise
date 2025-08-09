import { BrandMark } from "../brand/brand-mark"

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white/50 dark:border-white/10 dark:bg-black/40">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <BrandMark size={20} className="text-[var(--brand)]" decorative />
            {"VibeRise"}
          </div>
          <p className="max-w-2xl text-black/70 dark:text-white/70">
            {"The world invests in what people build. VibeRisers invest in the people."}
          </p>
          <p className="text-xs text-black/50 dark:text-white/50">
            {"© "}
            {new Date().getFullYear()}
            {" VibeRise"}
          </p>
        </div>
      </div>
    </footer>
  )
}
