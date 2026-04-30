import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  city: string;
  tariff: string;
  time: string;
}

const names = ["Анна", "Мария", "Елена", "Дарья", "Ольга", "Екатерина", "Алина", "Виктория", "Полина", "Юлия"];
const cities = ["Москвы", "Санкт-Петербурга", "Казани", "Екатеринбурга", "Новосибирска", "Краснодара", "Нижнего Новгорода", "Самары", "Ростова-на-Дону", "Уфы"];
const tariffs = ["Самостоятельный", "С куратором", "VIP"];

export default function PurchaseNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomTariff = tariffs[Math.floor(Math.random() * tariffs.length)];
      const minutesAgo = Math.floor(Math.random() * 10) + 1;

      const newNotification: Notification = {
        id: nextId,
        name: randomName,
        city: randomCity,
        tariff: randomTariff,
        time: `${minutesAgo} ${minutesAgo === 1 ? 'минуту' : minutesAgo < 5 ? 'минуты' : 'минут'} назад`,
      };

      setNotifications((prev) => [...prev, newNotification]);
      setNextId((prev) => prev + 1);

      // Автоматически удалить уведомление через 6 секунд
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
      }, 6000);
    };

    // Показать первое уведомление через 30 секунд
    const initialTimeout = setTimeout(showNotification, 30000);

    // Затем показывать новые уведомления каждые 2 минуты
    const interval = setInterval(() => {
      showNotification();
    }, 120000); // 2 минуты

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [nextId]);

  const handleClose = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-xs">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-[#222222]/95 border border-[#ff007f] rounded-sm p-3 shadow-lg animate-in slide-in-from-top duration-300 flex items-center gap-2 backdrop-blur-sm"
        >
          <CheckCircle className="text-[#ff007f] w-4 h-4 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-white text-xs">
              <span className="font-semibold">{notification.name}</span> записалась на <span className="text-[#ff007f] font-bold">{notification.tariff}</span>
            </p>
          </div>
          <button
            onClick={() => handleClose(notification.id)}
            className="text-white/50 hover:text-white transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
    </div>
  );
}
