/**
 * SocialProofToast — всплывающие уведомления о покупках/регистрациях
 * Брендбук Olia Codex: белый фон, #960830 акцент, #1D1D1D текст
 * Появляется снизу-слева каждые ~60 секунд, автоматически скрывается через 5 сек
 */

import { useState, useEffect } from "react";
import { Users, ShoppingBag, X } from "lucide-react";

const NOTIFICATIONS = [
  { type: "join",     name: "Анастасия К.",  city: "Москва",         text: "присоединилась к курсу" },
  { type: "buy",      name: "Мария Л.",       city: "Санкт-Петербург", text: "купила тариф «С куратором»" },
  { type: "join",     name: "Екатерина В.",   city: "Новосибирск",    text: "записалась на курс" },
  { type: "buy",      name: "Ольга Т.",       city: "Краснодар",      text: "купила тариф «VIP»" },
  { type: "join",     name: "Юлия М.",        city: "Казань",         text: "присоединилась к курсу" },
  { type: "buy",      name: "Дарья С.",       city: "Екатеринбург",   text: "купила тариф «Самостоятельный»" },
  { type: "join",     name: "Наталья П.",     city: "Ростов-на-Дону", text: "записалась на курс" },
  { type: "buy",      name: "Алина Р.",       city: "Уфа",            text: "купила тариф «С куратором»" },
  { type: "join",     name: "Виктория Н.",    city: "Воронеж",        text: "присоединилась к курсу" },
  { type: "buy",      name: "Светлана И.",    city: "Пермь",          text: "купила тариф «VIP»" },
  { type: "join",     name: "Ирина Ж.",       city: "Самара",         text: "записалась на курс" },
  { type: "buy",      name: "Кристина Б.",    city: "Омск",           text: "купила тариф «С куратором»" },
  { type: "join",     name: "Валерия Ф.",     city: "Челябинск",      text: "присоединилась к курсу" },
  { type: "buy",      name: "Татьяна Г.",     city: "Красноярск",     text: "купила тариф «Самостоятельный»" },
  { type: "join",     name: "Полина Д.",      city: "Тюмень",         text: "записалась на курс" },
];

function getTimeAgo(): string {
  const minutes = Math.floor(Math.random() * 15) + 1;
  if (minutes === 1) return "1 минуту назад";
  if (minutes < 5) return `${minutes} минуты назад`;
  return `${minutes} минут назад`;
}

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [timeAgo, setTimeAgo] = useState("");
  const [exiting, setExiting] = useState(false);

  const showNext = (index: number) => {
    setTimeAgo(getTimeAgo());
    setCurrent(index);
    setExiting(false);
    setVisible(true);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => setVisible(false), 400);
    }, 5000);
  };

  useEffect(() => {
    // First show after 8 seconds
    const initialTimer = setTimeout(() => {
      showNext(Math.floor(Math.random() * NOTIFICATIONS.length));
    }, 8000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!visible && !exiting) return;

    // Schedule next notification ~60 seconds after current one disappears
    const interval = setInterval(() => {
      const nextIndex = Math.floor(Math.random() * NOTIFICATIONS.length);
      showNext(nextIndex);
    }, 60000);

    return () => clearInterval(interval);
  }, [visible]);

  const dismiss = () => {
    setExiting(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  const notif = NOTIFICATIONS[current];
  const isJoin = notif.type === "join";

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '80px',
        left: '16px',
        zIndex: 9999,
        maxWidth: '320px',
        width: 'calc(100vw - 32px)',
        transform: exiting ? 'translateX(-110%)' : 'translateX(0)',
        opacity: exiting ? 0 : 1,
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease',
        animation: !exiting ? 'slideInLeft 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' : undefined,
      }}
    >
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-110%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>

      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e8e8e8',
          borderLeft: '4px solid #960830',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12), 3px 3px 0 #e8e8e8',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          position: 'relative',
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: '40px',
            height: '40px',
            background: isJoin ? '#960830' : '#1D1D1D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {isJoin
            ? <Users style={{width:'18px', height:'18px', color:'#ffffff'}} />
            : <ShoppingBag style={{width:'18px', height:'18px', color:'#ffffff'}} />
          }
        </div>

        {/* Text */}
        <div style={{flex: 1, minWidth: 0}}>
          <p style={{
            margin: 0,
            fontSize: '13px',
            fontWeight: 700,
            color: '#1D1D1D',
            fontFamily: 'Montserrat, sans-serif',
            lineHeight: 1.3,
          }}>
            {notif.name}
            <span style={{color: '#960830'}}> {notif.text}</span>
          </p>
          <p style={{
            margin: '3px 0 0',
            fontSize: '11px',
            color: '#1D1D1D',
            opacity: 0.45,
            fontFamily: 'Inter, sans-serif',
          }}>
            {notif.city} · {timeAgo}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={dismiss}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            color: '#1D1D1D',
            opacity: 0.3,
            flexShrink: 0,
            lineHeight: 1,
          }}
          aria-label="Закрыть"
        >
          <X style={{width:'14px', height:'14px'}} />
        </button>
      </div>
    </div>
  );
}
