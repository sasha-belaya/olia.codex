import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function EnrollmentCounter() {
  const targetNumber = 547; // Целевое число записавшихся
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Анимация счётчика от 0 до целевого числа
    const duration = 2000; // 2 секунды
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 bg-[#222222] border-2 border-[#ff007f] px-6 py-3 rounded-sm">
      <Users className="text-[#ff007f] w-6 h-6" />
      <div className="flex flex-col">
        <span className="text-3xl font-black text-[#ff007f]">{count}+</span>
        <span className="text-sm text-white/70">учеников уже записались</span>
      </div>
    </div>
  );
}
