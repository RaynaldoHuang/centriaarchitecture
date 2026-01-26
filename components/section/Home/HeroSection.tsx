import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 1. Background Image Layer */}
      <div
        className="absolute inset-0 bg-[url(/images/bg1.webp)] bg-cover bg-no-repeat bg-position-[55%_center]"
        aria-hidden="true"
      />

      {/* 2. Overlay Hitam (Opacity 50%) */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* 3. Content Layer */}
      <div className="relative z-10 flex h-full max-w-7xl mx-auto items-end">
        <div className="w-full">
          <h1 className="font-normal text-white uppercase text-6xl mb-12 w-1/2 tracking-tight">
            Design that feels like home
          </h1>

          <div className="py-12 flex items-center justify-between">
            <p className="text-white text-sm w-1/4">
              Centria creates functional, timeless interiors tailored to the way
              you live.
            </p>

            <div className="flex gap-12">
              <div className="flex text-white/80 hover:text-white transition-colors duration-200 gap-2 border-b border-white/30 h-10">
                <Link href={""}>Book Consultation</Link>
                <ArrowUpRight/>
              </div>

              <div className="flex text-white/80 hover:text-white transition-colors duration-200 gap-2 border-b border-white/30 h-10">
                <Link href={""}>View Projects</Link>
                <ArrowUpRight/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-20 top-0 bottom-34 right-0 left-0 border-b border-white/30"></div>
    </section>
  );
}
