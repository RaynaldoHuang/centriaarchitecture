import Link from "next/link";

export default function NavBar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* dekstop view */}
      <nav className="absolute z-20 top-0 right-0 left-0 border-b border-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-lg py-6">CENTRIA</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
