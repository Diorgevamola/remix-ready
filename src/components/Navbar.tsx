import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-zucco.png";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMobileMenuOpen(false);
  };
  const handleLogoClick = () => {
    if (location.pathname === '/pricing') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  return <>
    {/* Pink top bar like original site */}
    <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60]" />
    <nav className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-primary/20" : "bg-black/90"}`}>
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-2 hover:opacity-80 transition-opacity z-50">
            <img src={logo} alt="Zucco Puppets Logo" className="h-10 w-auto md:h-14" />
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors z-50" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium hover:text-primary transition-colors">
              Portfólio
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border/50 shadow-lg">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button onClick={() => scrollToSection("about")} className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors font-medium">
                Sobre
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors font-medium">
                Portfólio
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors font-medium">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors font-medium">
                Contato
              </button>
            </div>
          </div>}
      </div>
    </nav>
  </>;
};
export default Navbar;