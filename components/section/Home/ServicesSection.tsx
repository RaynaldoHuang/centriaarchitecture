import Image from "next/image";

import img1 from "@/public/images/img1.webp";
import img2 from "@/public/images/img2.webp";
import img3 from "@/public/images/img3.webp";
import Marquee from "react-fast-marquee";

export default function ServiceSection() {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto pt-24 lg:pt-36 pb-12 lg:pb-20 overflow-hidden px-6 lg:px-0">
          
          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
            
            {/* Card 1 */}
            <div className="bg-black p-8 lg:p-10">
              <p className="text-white text-sm opacity-70">01</p>

              <div className="flex justify-center mt-8 lg:mt-12">
                <Image src={img1} alt="" className="w-36 lg:w-50" />
              </div>

              <h1 className="text-white mt-8 lg:mt-12 text-lg lg:text-xl">
                Residential Interiors
              </h1>

              <p className="text-white font-light text-sm mt-3 lg:mt-4 leading-relaxed opacity-90">
                Warm, functional living spaces thoughtfully designed around
                daily rituals, comfort, and personal moments that make a house
                truly feel like home.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-black p-8 lg:p-10">
              <p className="text-white text-sm opacity-70">02</p>

              <div className="flex justify-center mt-8 lg:mt-12">
                <Image src={img2} alt="" className="w-36 lg:w-50" />
              </div>

              <h1 className="text-white mt-8 lg:mt-12 text-lg lg:text-xl">
                Commercial Spaces
              </h1>

              <p className="text-white font-light text-sm mt-3 lg:mt-4 leading-relaxed opacity-90">
                Modern, efficient environments carefully crafted to enhance
                productivity, reflect brand identity, and create meaningful
                experiences for clients and teams.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-black p-8 lg:p-10">
              <p className="text-white text-sm opacity-70">03</p>

              <div className="flex justify-center mt-8 lg:mt-12">
                <Image src={img3} alt="" className="w-36 lg:w-50" />
              </div>

              <h1 className="text-white mt-8 lg:mt-12 text-lg lg:text-xl">
                Renovation & Styling
              </h1>

              <p className="text-white font-light text-sm mt-3 lg:mt-4 leading-relaxed opacity-90">
                End-to-end interior transformations, guiding every stage from
                concept development through execution, styling, and refined
                final detailing.
              </p>
            </div>

          </div>
        </div>

        {/* Marquee */}
        <div className="pb-10 lg:pb-0">
          <Marquee
            speed={30}
            gradient={false}
            pauseOnHover
            autoFill
            className="lg:mt-6 overflow-hidden"
          >
            <span className="mx-12 lg:mx-20 text-2xl lg:text-5xl font-light tracking-wide">
              CRAFTED INTERIOR SPACES / TIMELESS DESIGN
            </span>
          </Marquee>
        </div>
      </section>
    </>
  );
}
