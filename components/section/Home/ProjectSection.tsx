"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Marquee from "react-fast-marquee";

import pro1 from "@/public/images/pro1.webp";
import pro2 from "@/public/images/pro2.webp";
import pro3 from "@/public/images/pro3.webp";

export default function ProjectSection() {
  return (
    <section id="projects" className="pt-16 lg:pt-30 pb-12 px-5 lg:px-0">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto pb-8 lg:pb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-6">
          <h1 className="text-xl lg:text-2xl tracking-wide">
            RECENT TRANSFORMATIONS
          </h1>

          <p className="text-sm lg:w-1/3 leading-relaxed text-black/70">
            A curated selection of our latest interior projects, showcasing,
            thoughtful design, refined details, and timeless spatial characters.
          </p>
        </div>
      </div>

      <div className="w-full border-t border-black/10"></div>

      {/* PROJECT 1 */}
      <div className="max-w-7xl mx-auto mt-8 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <Image
              src={pro1}
              alt=""
              className="object-cover aspect-video w-full rounded-md lg:rounded-none"
            />
          </div>

          <div className="flex flex-col justify-between py-2 lg:py-4">
            <div>
              <h1 className="text-lg lg:text-2xl font-medium">
                Citraland Gama City Medan
              </h1>
              <p className="text-sm lg:text-base font-normal mt-2 lg:mt-4">
                06.2023 - 09.2023
              </p>
            </div>

            <div className="mt-6 lg:mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
                <div>
                  <h1 className="text-gray-400 text-sm">Project Type</h1>
                  <p className="text-sm font-normal mt-2 lg:mt-4">
                    Residential Renovation
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <h1 className="text-gray-400 text-sm">Design Focus</h1>
                  <p className="text-sm font-normal mt-2 lg:mt-4">
                    Thoughtful seating layouts balancing comfort and spatial
                    harmony.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-black/10 my-8"></div>

      {/* PROJECT 2 */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <Image
              src={pro2}
              alt=""
              className="object-cover aspect-video w-full rounded-md lg:rounded-none"
            />
          </div>

          <div className="flex flex-col justify-between py-2 lg:py-4">
            <div>
              <h1 className="text-lg lg:text-2xl font-medium">
                CBD Villa Polonia
              </h1>
              <p className="text-sm lg:text-base font-normal mt-2 lg:mt-4">
                06.2023 - 09.2023
              </p>
            </div>

            <div className="mt-6 lg:mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
                <div>
                  <h1 className="text-gray-400 text-sm">Project Type</h1>
                  <p className="text-sm font-normal mt-2 lg:mt-4">Villa</p>
                </div>

                <div className="lg:col-span-2">
                  <h1 className="text-gray-400 text-sm">Design Focus</h1>
                  <p className="text-sm font-normal mt-2 lg:mt-4">
                    Natural light, soft material layering, balanced proportions
                    and calm ambience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-black/10 my-8"></div>

      {/* PROJECT 3 */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <Image
              src={pro3}
              alt=""
              className="object-cover aspect-video w-full rounded-md lg:rounded-none"
            />
          </div>

          <div className="flex flex-col justify-between py-2 lg:py-4">
            <div>
              <h1 className="text-lg lg:text-2xl font-medium">
                Condominium Podomoro
              </h1>
              <p className="text-sm lg:text-base font-normal mt-2 lg:mt-4">
                06.2023 - 09.2023
              </p>
            </div>

            <div className="mt-6 lg:mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
                <div>
                  <h1 className="text-gray-400 text-sm">Project Type</h1>
                  <p className="text-sm font-normal mt-2 lg:mt-4">
                    Condominium
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <h1 className="text-gray-400 text-sm">Design Focus</h1>
                  <p className="text-sm font-normal mt-2 lg:mt-4">
                    Dark material palettes enhancing warmth, depth, and visual
                    richness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12 lg:mt-16">
        <div className="flex text-black/80 hover:text-black transition-colors duration-200 gap-2 border-b border-black/30 h-10 lg:h-16 items-center w-fit text-sm lg:text-base">
          <Link href="">View Projects</Link>
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Marquee */}
      <div className="my-16 lg:my-20 lg:block hidden">
        <Marquee
          speed={30}
          gradient={false}
          pauseOnHover
          autoFill
          className="overflow-hidden"
        >
          <span className="mx-10 lg:mx-20 text-xl lg:text-5xl font-light tracking-wide">
            CRAFTED INTERIOR SPACES / TIMELESS DESIGN
          </span>
        </Marquee>
      </div>
    </section>
  );
}
