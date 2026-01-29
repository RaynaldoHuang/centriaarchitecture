export default function FooterSection() {
  return (
    <>
      <section id="contact" className="relative bg-black/90 text-white min-h-[85vh] lg:min-h-screen flex flex-col justify-between pt-12 lg:pt-16 overflow-hidden">
        {/* Vertical Lines (hide on mobile) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/10"></div>
          <div className="absolute right-1/4 top-0 bottom-0 w-px bg-white/10"></div>
        </div>

        {/* Top Contact */}
        <div className="text-center pt-12 lg:pt-16 px-6">
          <p className="text-xl lg:text-3xl tracking-wide">+62 61 4524278</p>
          <p className="text-xl lg:text-3xl mt-2 tracking-wide break-words">
            hrd@centriaarchitecture.com
          </p>
          <p className="text-[10px] lg:text-xs mt-6 tracking-[0.25em] lg:tracking-[0.3em] text-white/60">
            CRAFTED INTERIOR SPACES
          </p>
        </div>

        {/* Side Info (becomes normal flow on mobile) */}
        <div className="relative lg:absolute lg:left-10 lg:top-1/3 text-xs space-y-6 text-white/70 text-center lg:text-left mt-16 lg:mt-0 px-6">
          <p>INTERIOR</p>
          <div className="space-y-1">
            <p>JL. SEI DELI NO.90</p>
            <p>MEDAN, SUMATERA UTARA</p>
            <p>INDONESIA</p>
          </div>
        </div>

        <div className="relative lg:absolute lg:right-10 lg:top-1/3 text-xs space-y-6 text-white/70 text-center lg:text-right mt-12 lg:mt-0 px-6">
          <p>CENTRIA ARCHITECTURE</p>
          <div className="space-y-1">
            <p>2026 CENTRIA.</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>
        </div>

        {/* Big Background Text */}
        <div className="relative w-full flex justify-center pt-16 lg:pt-0 pb-8 lg:pb-10">
          <h1 className="text-[20vw] lg:text-[22vw] font-light leading-none tracking-tight text-white/90 select-none">
            CENTRIA
          </h1>
        </div>
      </section>
    </>
  );
}
