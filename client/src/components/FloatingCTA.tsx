import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показать кнопку после прокрутки на 300px вниз
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTariffs = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTariffs}
      className="fixed bottom-6 right-6 z-40 bg-[#ff007f] hover:bg-[#ff007f]/80 text-white font-bold px-6 py-4 rounded-sm border-2 border-white shadow-lg transition-all duration-300 pink-glow-hover flex items-center gap-2 animate-in slide-in-from-bottom"
      style={{
        boxShadow: "0 0 20px rgba(255, 0, 127, 0.5)",
      }}
    >
      <span className="text-sm md:text-base">ЗАПИСАТЬСЯ НА КУРС</span>
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
