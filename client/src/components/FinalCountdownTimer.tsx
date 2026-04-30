import { useEffect, useState } from 'react';

export default function FinalCountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
    milliseconds: 99
  });

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((difference % 1000) / 10);

        setTimeLeft({ hours, minutes, seconds, milliseconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
      }
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
        <div className="text-4xl md:text-5xl font-black text-white mb-2">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-sm text-white/80 uppercase tracking-wide">Часов</div>
      </div>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
        <div className="text-4xl md:text-5xl font-black text-white mb-2">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-sm text-white/80 uppercase tracking-wide">Минут</div>
      </div>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
        <div className="text-4xl md:text-5xl font-black text-white mb-2">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="text-sm text-white/80 uppercase tracking-wide">Секунд</div>
      </div>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
        <div className="text-4xl md:text-5xl font-black text-white mb-2">
          {String(timeLeft.milliseconds).padStart(2, '0')}
        </div>
        <div className="text-sm text-white/80 uppercase tracking-wide">Мс</div>
      </div>
    </div>
  );
}
