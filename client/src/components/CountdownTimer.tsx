/**
 * DESIGN: Нейро-Брутализм
 * Таймер обратного отсчёта 24 часа с Inter 28pt для цифр
 * Розовый цвет, мигающие двоеточия
 */

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Таймер закончился - сбрасываем на 24 часа
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff007f]" style={{ fontFamily: 'Inter, sans-serif' }}>
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-xs text-white/70 mt-1">ЧАСОВ</div>
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff007f] animate-pulse">:</div>
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff007f]" style={{ fontFamily: 'Inter, sans-serif' }}>
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-xs text-white/70 mt-1">МИНУТ</div>
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff007f] animate-pulse">:</div>
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff007f]" style={{ fontFamily: 'Inter, sans-serif' }}>
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-xs text-white/70 mt-1">СЕКУНД</div>
      </div>
    </div>
  );
}
