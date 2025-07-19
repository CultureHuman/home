import { useEffect, useState } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-6 flex justify-between items-center px-8 md:px-16 transition-all duration-500 ${
        isScrolled 
          ? "bg-brand-beige/90 backdrop-blur-lg shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <a 
        href="#" 
        className={`font-cormorant text-2xl md:text-3xl font-semibold tracking-wider transition-all duration-500 hover:text-brand-orange ${
          isScrolled ? "text-foreground" : "text-white"
        }`}
      >
        CultureHuman
      </a>
      
      <a 
        href="#about" 
        className={`font-outfit font-light text-lg tracking-wide transition-all duration-300 hover:text-brand-forest hover:translate-x-1 relative group ${
          isScrolled ? "text-foreground" : "text-white"
        }`}
      >
        <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-px bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        About Us
      </a>
    </nav>
  );
};