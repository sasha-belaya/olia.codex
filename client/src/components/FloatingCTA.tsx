import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

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
    const pricingSection = document.getElementById("tariffs");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTariffs}
      className="fixed bottom-6 right-6 z-40 font-bold px-6 py-4 transition-all duration-300 flex items-center gap-2"
      style={{
        backgroundColor: "#960830",
        color: "#ffffff",
        boxShadow: "4px 4px 0 #6d0420",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "14px",
        letterSpacing: "0.05em",
      }}
    >
      <span>Записаться на курс</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}
