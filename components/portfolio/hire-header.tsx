import { HireNav } from "@/components/portfolio/hire-nav";

/* Dark header bar wrapping the orange nav — for inner pages that have no hero gradient. */
export function HireHeader() {
  return (
    <header className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <HireNav />
      </div>
    </header>
  );
}
