import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function LiveViewersCounter() {
  const [viewers, setViewers] = useState(12); // Начальное значение

  useEffect(() => {
    // Функция для генерации случайного числа в диапазоне
    const getRandomViewers = () => Math.floor(Math.random() * (15 - 8 + 1)) + 8;

    // Обновление счётчика каждые 10-20 секунд
    const updateViewers = () => {
      const delay = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
      setTimeout(() => {
        setViewers(getRandomViewers());
        updateViewers(); // Рекурсивный вызов для следующего обновления
      }, delay);
    };

    updateViewers();

    // Cleanup не требуется, так как используется setTimeout с рекурсией
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-black/60 border border-[#ff007f]/30 px-4 py-2 rounded-sm">
      <Eye className="text-[#ff007f] w-4 h-4 animate-pulse" />
      <span className="text-sm text-white/80">
        <span className="font-bold text-[#ff007f]">{viewers}</span> человек сейчас на странице
      </span>
    </div>
  );
}
