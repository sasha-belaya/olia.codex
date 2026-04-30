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

  const TimeBlock = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div
        className="w-16 md:w-20 h-14 md:h-16 flex items-center justify-center font-black text-2xl md:text-3xl"
        style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          color: '#ffffff',
          fontFamily: 'Montserrat, sans-serif',
          border: '1px solid rgba(255,255,255,0.25)',
        }}
      >
        {value}
      </div>
      <div
        className="text-[10px] font-bold mt-1.5 tracking-widest uppercase"
        style={{ color: 'rgba(255,255,255,0.55)' }}
      >
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2">
      <TimeBlock value={formatNumber(timeLeft.hours)} label="Часов" />
      <div className="text-2xl md:text-3xl font-black pb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>:</div>
      <TimeBlock value={formatNumber(timeLeft.minutes)} label="Минут" />
      <div className="text-2xl md:text-3xl font-black pb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>:</div>
      <TimeBlock value={formatNumber(timeLeft.seconds)} label="Секунд" />
    </div>
  );
}
