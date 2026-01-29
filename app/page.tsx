import FooterSection from "@/components/layout/FooterSection";
import AboutUs from "@/components/section/Home/AboutSection";
import HeroSection from "@/components/section/Home/HeroSection";
import ProjectSection from "@/components/section/Home/ProjectSection";
import ServiceSection from "@/components/section/Home/ServicesSection";

export default function Home() {
  return (
    <>
      <div
        id="scroll-container"
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <div className="lg:h-screen lg:snap-start">
          <HeroSection />
        </div>
        <div className="lg:h-screen lg:snap-start">
          <AboutUs />
        </div>
        <div className="lg:h-screen lg:snap-start">
          <ServiceSection />
        </div>
        <div className="lg:snap-start">
          <ProjectSection />
        </div>
         <div className="lg:h-screen lg:snap-start">
          <FooterSection />
        </div>
      </div>
    </>
  );
}
