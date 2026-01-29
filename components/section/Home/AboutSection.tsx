import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="aboutus" className="h-full">
      <div className="mx-auto max-w-7xl pt-30 lg:pt-36 pb-16 lg:pb-20 h-full flex flex-col justify-between px-6 lg:px-0">
        {/* Top Content */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
            <div>
              <h1 className="font-normal text-xl lg:text-2xl tracking-tight">
                ABOUT CENTRIA
              </h1>
            </div>

            <div className="lg:col-span-2 lg:ms-16">
              <p className="font-normal text-xl lg:text-2xl mb-6 lg:mb-10 leading-snug">
                We&apos;re a creative sanctuary dedicated to transforming
                visions into timeless architectural masterpieces. Our design
                philosophy centers on harmony and precision.
              </p>

              <div className="text-sm flex flex-col gap-5 lg:gap-6 leading-relaxed text-black/80">
                <p>
                  Established in 1997, CV Centria Arsitektur brings extensive
                  experience in interior design, with a strong focus on the
                  residential sector. For more than two decades, we have been
                  dedicated to transforming living spaces into environments that
                  are not only beautiful but also meaningful and functional.
                  Through intricate detailing and thoughtful planning, we
                  translate design concepts into engaging, refined visuals that
                  truly reflect our clients lifestyles, aspirations, and
                  practical needs.
                </p>

                <p>
                  For over 20 years, we have remained committed to creating
                  designs that align seamlessly with the functional and
                  aesthetic requirements of each space. We believe that every
                  project deserves a personalized approach, carefully
                  considering proportions, materials, and long-term usability.
                  Through continuous refinement, technical expertise, and
                  hands-on experience, we ensure that every piece of furniture
                  and interior element is crafted using high-quality tools and
                  premium materials.
                </p>

                <p>
                  Our designs consistently evolve in response to technological
                  advancements, innovative materials, and contemporary trends
                  within the industry. By embracing new techniques and staying
                  attentive to shifting market preferences, we are able to
                  deliver solutions that remain relevant, adaptable, and
                  forward-thinking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-8 lg:mt-0">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
            <h1 className="text-sm tracking-tight">
              WE&apos;RE AN INTERIOR DESIGN STUDIO
            </h1>

            <div className="flex text-black/70 hover:text-black transition-colors duration-200 gap-2 text-sm items-center w-fit">
              <Link href={""}>Book Consultation</Link>
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:block hidden relative">
        <div className="absolute w-full border-t border-black/10 bottom-10 lg:bottom-14"></div>
      </div>
    </section>
  );
}
