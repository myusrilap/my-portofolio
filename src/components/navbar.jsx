import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-5">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between px-5 py-4 rounded-2xl border border-white/10 bg-gray-950/70 backdrop-blur-xl">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-white"
            onClick={handleNavClick}
          >
            MY<span className="text-blue-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-white transition"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-2 p-3 rounded-2xl border border-white/10 bg-gray-950/95 backdrop-blur-xl">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;