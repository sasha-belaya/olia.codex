/*
 * DESIGN PHILOSOPHY: Premium Editorial Design
 * Брендбук Olia Codex — малиново-красный #960830, графит #1D1D1D, белый
 * Montserrat Black для заголовков, Inter для текста
 * Чередование тёмных/светлых секций, жирные акценты, editorial-стиль
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CountdownTimer from "@/components/CountdownTimer";
import FloatingCTA from "@/components/FloatingCTA";
import SocialProofToast from "@/components/SocialProofToast";
import { Check, ArrowRight, Sparkles, Users, ShieldCheck, Zap, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

export default function Home() {

  const tariffs = [
    {
      id: "basic",
      name: "Самостоятельный",
      features: [
        "5 модулей — база нейро-контента",
        "Обучение в своём темпе",
        "Доступ — 4 месяца",
        "Чек-листы промптов",
        "Шаблоны для работы с клиентами",
        "Закрытый чат выпускников",
        "База клиентов и площадок",
      ],
      oldPrice: "39 900 ₽",
      newPrice: "22 900 ₽",
      link: "https://neirocreator.lpxl.ru/samost",
    },
    {
      id: "curator",
      name: "С куратором",
      features: [
        "Все 9 модулей полной программы",
        "Длительность 2 месяца",
        "Доступ к урокам 6 месяцев",
        "Модули по стилистике, контенту и монетизации",
        "Еженедельные созвоны с куратором",
        "Проверка домашних заданий",
        "1 мастермайнд с Олей",
        "Все бонусы включены",
      ],
      oldPrice: "70 900 ₽",
      newPrice: "39 900 ₽",
      discount: "",
      link: "https://neirocreator.lpxl.ru/curator",
      featured: true,
    },
    {
      id: "vip",
      name: "VIP",
      features: [
        "Все модули + эксклюзивные материалы",
        "Длительность 2 месяца",
        "Доступ к урокам 12 месяцев",
        "Личная работа в мини-группе с Олей",
        "Еженедельные мастермайнды",
        "Веду «за ручку» до результата",
        "Даю проекты уже во время обучения",
        "Возможность попасть ко мне в команду",
      ],
      oldPrice: "189 000 ₽",
      newPrice: "99 900 ₽",
      link: "https://neirocreator.lpxl.ru/vip",
    },
  ];

  const modules = [
    {
      num: "1",
      title: "База, распаковка и бренд",
      subtitle: "Работа с ChatGPT и нейросетями",
      duration: "4 урока",
      desc: "Учимся работать с ChatGPT и нейросетями как с инструментами. Распаковываешь себя, понимаешь свой стиль, нишу, за что можешь брать деньги.",
      content: [
        "Работа с ChatGPT и нейросетями как с инструментами",
        "Распаковка себя: стиль, ниша, за что брать деньги",
        "Сборка первой упаковки и позиционирования",
      ],
      result: "У тебя есть позиционирование, упаковка и понимание, за что ты будешь брать деньги.",
    },
    {
      num: "2",
      title: "Реалистичные AI-фото",
      subtitle: "Полноценные фотосессии",
      duration: "4 урока",
      desc: "Создаёшь реалистичные профессиональные фотографии с помощью нейросетей — полноценные фотосессии без фотографа.",
      content: [
        "Генерация реалистичных фото с нейросетями",
        "Промпты для профессионального результата",
        "Обработка и финальный вид",
      ],
      result: "У тебя есть портфолио нейрофото, которое можно сразу продавать.",
    },
    {
      num: "3",
      title: "Midjourney — премиальный визуал",
      subtitle: "Стильный, дорогой, брендовый контент",
      duration: "4 урока",
      desc: "Осваиваешь Midjourney для создания стильного, дорогого, брендового контента. Визуал, который выделяет тебя среди конкурентов.",
      content: [
        "Работа с Midjourney: промпты и стили",
        "Создание брендового визуала",
        "Дорогая эстетика без дизайнера",
      ],
      result: "Умеешь создавать премиальный визуал для себя и клиентов.",
    },
    {
      num: "4",
      title: "AI-видео",
      subtitle: "Живые видео, которые продают",
      duration: "7 уроков",
      desc: "Создаёшь живые видео с нейросетями. Рилсы, клипы, видео для брендов — всё это без оператора и монтажёра.",
      content: [
        "Генерация видео с AI-инструментами",
        "Монтаж и озвучка с нейросетями",
        "Форматы для разных платформ",
      ],
      result: "Умеешь создавать видеоконтент для клиентов и личного бренда.",
    },
    {
      num: "5",
      title: "Стилистика и стилизация",
      subtitle: "Про «дорогую картинку»",
      duration: "6 уроков",
      desc: "Разбираешься, как сделать картинку дорогой. Создаёшь контент с уникальным стилем, который узнают и запоминают.",
      content: [
        "Принципы дорогой картинки",
        "Цветовые решения и эстетика",
        "Создание узнаваемого стиля",
      ],
      result: "У тебя есть свой уникальный стиль, который выделяет тебя среди конкурентов.",
      unique: true,
    },
    {
      num: "6",
      title: "Контент и первые заявки",
      subtitle: "Что с этим всем делать дальше",
      duration: "5 уроков",
      desc: "Учишься превращать контент в заявки. Строишь систему, которая приносит первых клиентов ещё во время обучения.",
      content: [
        "Контент, который привлекает клиентов",
        "Первые заявки и как с ними работать",
        "Система регулярного контента",
      ],
      result: "Первые заявки от клиентов уже во время обучения.",
    },
    {
      num: "7",
      title: "Монетизация и клиенты",
      subtitle: "За что платят и как брать деньги",
      duration: "6 уроков",
      desc: "Учишься зарабатывать на нейро-контенте. Понимаешь, за что платят клиенты, как выставлять цены и работать с заказами.",
      content: [
        "За что платят клиенты",
        "Как выставлять цены и не продешевить",
        "Работа с заказами и клиентами",
      ],
      result: "Первые деньги от нейро-контента уже во время обучения.",
    },
    {
      num: "8",
      title: "Выход на рынок и рост",
      subtitle: "Собираешь всё в систему",
      duration: "4 урока",
      desc: "Собираешь всё в систему и выходишь на рынок. Масштабируешь доход, строишь поток клиентов и понимаешь, как расти дальше.",
      content: [
        "Выход на рынок с готовым портфолио",
        "Масштабирование дохода",
        "Система привлечения клиентов",
      ],
      result: "Стабильный доход и понимание, как расти дальше.",
    },
    {
      num: "9",
      title: "Юридический блок",
      subtitle: "Бизнес без юридических рисков",
      duration: "3 урока",
      desc: "Формы работы и налоги, договоры с клиентами, политика конфиденциальности, авторское право на ИИ-контент, правила маркировки рекламы, финансовые документы.",
      content: [
        "Формы работы и налоги для фрилансера",
        "Договоры с клиентами и закрытие сделок",
        "Авторское право на ИИ-контент",
        "Правила маркировки рекламы",
        "Финансовые документы и отчётность",
      ],
      result: "Полный пакет документов и понимание, как вести бизнес с ИИ-контентом без юридических рисков.",
    },
  ];

  const pains = [
    "Хочешь зарабатывать на нейросетях, но не знаешь с чего начать",
    "Видишь, что другие делают деньги на AI-контенте, а у тебя не получается",
    "Тратишь часы на контент, который не приносит результата",
    "Не понимаешь, как превратить нейросети в стабильный доход",
    "Боишься, что без технических знаний не справишься",
    "Хочешь свободный график и работу из любой точки мира",
  ];

  const forWhom = [
    { icon: "🚀", title: "Новичкам", description: "Хотите освоить новую профессию с нуля — опыт не нужен" },
    { icon: "📱", title: "SMM-специалистам", description: "Хотите добавить AI в арсенал и увеличить ценность на рынке" },
    { icon: "✨", title: "Экспертам и блогерам", description: "Нужен визуал для личного бренда без фотографов и дизайнеров" },
    { icon: "💼", title: "Фрилансерам", description: "Ищете новое востребованное направление для заработка" },
    { icon: "🎨", title: "Дизайнерам", description: "Хотите создавать визуал быстрее и дешевле с помощью AI" },
    { icon: "💰", title: "Всем, кто хочет зарабатывать", description: "Пробовали нейросети, но пока не видите денег — поможем монетизировать" },
  ];

  const stats = [
    { value: "100+", label: "учеников" },
    { value: "42", label: "урока" },
    { value: "8", label: "недель" },
    { value: "►", label: "доступ сразу" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalSlides = 12;

  useEffect(() => {
    const updateSPV = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    updateSPV();
    window.addEventListener('resize', updateSPV);
    return () => window.removeEventListener('resize', updateSPV);
  }, []);

  const maxSlide = totalSlides - slidesPerView;

  const goToNext = useCallback(() => {
    setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
  }, [maxSlide]);

  const goToPrev = useCallback(() => {
    setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
  }, [maxSlide]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setTimeout(goToNext, 3500);
    }
    return () => { if (autoPlayRef.current) clearTimeout(autoPlayRef.current); };
  }, [currentSlide, isAutoPlaying, goToNext]);

  const reviewImages = [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-1_9d64a2e3.jpg",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-2_aa3b6265.jpg",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-3_d0f20fa1.jpg",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-4_c1453d68.jpg",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-5_693e623d.jpg",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-6_f8e00d87.jpg",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-7_7866b17a.jpg",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-8_487cf432.jpg",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-9_e66434c7.jpg",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-10_19bcb196.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-11_d8687e2c.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/review-12_477a28e8.png",
  ];

  const olyaPhoto = "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/bKKZDyvgJmVAHs2qWrVycB/olya-hero-2_b1fc066b.webp";

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{fontFamily:'Inter, sans-serif'}}>
      <FloatingCTA />
      <SocialProofToast />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* NAVBAR */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#960830] flex items-center justify-center transition-transform group-hover:scale-95" style={{boxShadow:'3px 3px 0 #6d0420'}}>
                <span className="font-black text-xl leading-none text-white" style={{fontFamily:'Montserrat, sans-serif'}}>К</span>
              </div>
              <div className="leading-tight">
                <div className="text-[9px] text-[#1D1D1D]/40 font-bold tracking-[0.25em] uppercase">Академия нейросетей</div>
                <div className="text-[17px] font-black text-[#960830] tracking-tight leading-none" style={{fontFamily:'Montserrat, sans-serif'}}>КОДЕКС</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {[
                { label: 'Программа', href: '#program' },
                { label: 'Тарифы', href: '#tariffs' },
                { label: 'Instagram', href: 'https://instagram.com/olia.codex', external: true },
                { label: 'Telegram', href: 'https://t.me/olia_codex', external: true },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-sm font-semibold text-[#1D1D1D]/70 hover:text-[#960830] transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="https://neirocreator.lpxl.ru/curator"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#960830] text-white text-sm font-bold px-6 py-3 hover:bg-[#7a0628] transition-all hover:-translate-y-px active:translate-y-0"
              style={{boxShadow:'3px 3px 0 #6d0420'}}
            >
              Записаться
              <ArrowRight className="w-4 h-4" />
            </a>
            {/* Mobile: hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-[#1D1D1D] hover:text-[#960830] transition-colors"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileMenuOpen ? '400px' : '0',
            opacity: mobileMenuOpen ? 1 : 0,
            borderTop: mobileMenuOpen ? '1px solid #e8e8e8' : 'none',
          }}
        >
          <nav className="flex flex-col px-4 pb-4 pt-2 gap-1 bg-white">
            {[
              { label: 'Программа', href: '#program', external: false },
              { label: 'Тарифы', href: '#tariffs', external: false },
              { label: 'Instagram', href: 'https://instagram.com/olia.codex', external: true },
              { label: 'Telegram', href: 'https://t.me/olia_codex', external: true },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-base font-semibold text-[#1D1D1D] border-b border-[#f0f0f0] last:border-0 hover:text-[#960830] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#960830]" />
              </a>
            ))}
            <a
              href="https://neirocreator.lpxl.ru/curator"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-[#960830] text-white font-bold text-sm px-6 py-3.5 hover:bg-[#7a0628] transition-colors"
              style={{boxShadow:'3px 3px 0 #6d0420', color:'#ffffff'}}
            >
              Записаться на курс
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* HERO */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        {/* Large decorative number */}
        <div
          className="absolute right-0 top-0 select-none pointer-events-none leading-none"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(200px, 30vw, 420px)',
            fontWeight: 900,
            color: 'rgba(150,8,48,0.04)',
            lineHeight: 1,
            right: '-2%',
            top: '-5%',
          }}
        >
          AI
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="min-h-[80vh] flex flex-col justify-center py-16 sm:py-20 lg:py-32">

            <div className="space-y-6 sm:space-y-10 animate-fade-in-up">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-[#960830]" />
                <span className="text-xs font-bold text-[#960830] uppercase tracking-[0.25em]">Курс · Профессия</span>
              </div>

              {/* Headline */}
              <div>
                <h1
                  className="font-black leading-[0.92] text-[#1D1D1D]"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(2.2rem, 9vw, 7.5rem)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  Профессия<br />
                  <span style={{color:'#960830'}}>Нейро</span><span style={{color:'#1D1D1D'}}>креатор</span>
                </h1>
                <div className="mt-4 sm:mt-8 max-w-2xl">
                  <p className="text-base sm:text-xl text-[#1D1D1D]/60 leading-relaxed">
                    Освой профессию, на которую <strong className="text-[#960830] font-bold">уже сейчас</strong> есть спрос — и начни зарабатывать ещё в процессе обучения
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                <a
                  href="#tariffs"
                  className="inline-flex items-center justify-center gap-2 bg-[#960830] text-white font-bold text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-5 hover:bg-[#7a0628] transition-all hover:-translate-y-0.5 active:translate-y-0"
                  style={{boxShadow:'4px 4px 0 #6d0420'}}
                >
                  Начать обучение
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#1D1D1D]/20 text-[#1D1D1D] font-bold text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-5 hover:border-[#960830] hover:text-[#960830] transition-all"
                >
                  Смотреть программу
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-6 sm:pt-10 border-t border-[#1D1D1D]/15">
                {/* 100+ учеников */}
                <div>
                  <div className="font-black text-[#960830] leading-none" style={{fontFamily:'Montserrat, sans-serif', fontSize:'clamp(2rem, 4vw, 3rem)'}}>100+</div>
                  <div className="text-xs text-[#1D1D1D]/40 font-semibold uppercase tracking-wider mt-2">учеников</div>
                </div>
                {/* 42 урока */}
                <div>
                  <div className="font-black text-[#960830] leading-none" style={{fontFamily:'Montserrat, sans-serif', fontSize:'clamp(2rem, 4vw, 3rem)'}}>42</div>
                  <div className="text-xs text-[#1D1D1D]/40 font-semibold uppercase tracking-wider mt-2">урока</div>
                </div>
                {/* 8 недель */}
                <div>
                  <div className="font-black text-[#960830] leading-none" style={{fontFamily:'Montserrat, sans-serif', fontSize:'clamp(2rem, 4vw, 3rem)'}}>8</div>
                  <div className="text-xs text-[#1D1D1D]/40 font-semibold uppercase tracking-wider mt-2">недель</div>
                </div>
                {/* Доступ сразу */}
                <div>
                  <div className="font-black text-[#960830] leading-none" style={{fontFamily:'Montserrat, sans-serif', fontSize:'clamp(2rem, 4vw, 3rem)'}}>►</div>
                  <div className="text-xs text-[#1D1D1D]/40 font-semibold uppercase tracking-wider mt-2">доступ</div>
                  <div className="text-xs text-[#1D1D1D]/40 font-semibold uppercase tracking-wider">сразу после оплаты</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* PROBLEMS — dark section */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#1D1D1D] relative overflow-hidden">
        {/* Decorative large text */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(120px, 20vw, 280px)',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.03)',
            right: '-2%',
          }}
        >
          ?
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-[#960830]" />
              <span className="text-xs font-bold text-[#960830] uppercase tracking-[0.25em]">Это про тебя?</span>
            </div>
            <h2
              className="font-black text-white"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              Это звучит<br />знакомо?
            </h2>
          </div>

          {/* Pain points grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {pains.map((pain, idx) => (
              <div
                key={idx}
                className="p-8 hover:bg-[#960830]/10 transition-colors duration-300 group" style={{backgroundColor:'#1D1D1D'}}
              >
                <div
                  className="text-5xl font-black mb-4 leading-none transition-colors"
                  style={{fontFamily:'Montserrat, sans-serif', color:'rgba(255,255,255,0.15)'}}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <p className="font-medium leading-relaxed text-sm" style={{color:'rgba(255,255,255,0.75)'}}>{pain}</p>
              </div>
            ))}
          </div>

          {/* Answer banner */}
          <div className="mt-8 bg-[#960830] p-8 flex items-center justify-between gap-6 flex-wrap">
            <p className="font-black text-xl" style={{fontFamily:'Montserrat, sans-serif', color:'#ffffff', textShadow:'0 1px 3px rgba(0,0,0,0.3)'}}>Этот курс — твой ответ на все эти проблемы</p>
            <a
              href="https://neirocreator.lpxl.ru/curator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#960830] font-bold text-sm px-6 py-3 hover:bg-white/90 transition-colors flex-shrink-0"
            >
              Записаться сейчас
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* INSTRUCTOR — white section */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden" style={{aspectRatio:'3/4', maxHeight:'580px'}}>
                <img
                  src={olyaPhoto}
                  alt="Ольга Кодекс"
                  className="w-full h-full object-cover object-top"
                />
                {/* Decorative border offset */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#960830]/20 -z-10" />
              </div>
              {/* Stats badge */}
              <div
                className="absolute -bottom-6 -left-4 bg-[#960830] p-6 text-white"
                style={{boxShadow:'5px 5px 0 #6d0420'}}
              >
                <div className="text-4xl font-black leading-none" style={{fontFamily:'Montserrat, sans-serif'}}>18K</div>
                <div className="text-[11px] font-bold uppercase tracking-widest opacity-75 mt-1">подписчиков</div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-12 bg-[#960830]" />
                  <span className="text-xs font-bold text-[#960830] uppercase tracking-[0.25em]">Кто ведёт курс</span>
                </div>
                <h2
                  className="font-black text-[#1D1D1D] mb-3"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.05,
                  }}
                >
                  Ольга<br />Кодекс
                </h2>
                <p className="text-lg text-[#960830] font-semibold">Создаёт нейро-контент с миллионными охватами</p>
              </div>

              <div className="space-y-4">
                {[
                  "18 000 подписчиков — только за счёт нейро-контента",
                  "Миллионные охваты без рекламы",
                  "Обучает созданию нейро-контента, который приводит заявки",
                  "Ученики зарабатывают уже на первых этапах",
                  "Работает с экспертами, блогерами и брендами",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 bg-[#960830] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <p className="text-[#1D1D1D]/75 font-medium leading-snug">{item}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="border-l-4 border-[#960830] pl-6 py-2">
                <p className="text-[#1D1D1D]/70 italic text-lg leading-relaxed">
                  "Показывает не «как генерировать», а как выстроить систему: контент → внимание → заявки → деньги."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* FOR WHOM — dark section */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#111111] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[#960830]" />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(120px, 20vw, 300px)',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.02)',
            lineHeight: 1,
          }}
        >
          ДЛЯ
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-[#960830]" />
                <span className="text-xs font-bold text-[#960830] uppercase tracking-[0.25em]">Для кого</span>
              </div>
              <h2
                className="font-black text-white"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                }}
              >
                Кому подойдёт<br />курс
              </h2>
            </div>
            <p className="text-base max-w-xs md:text-right" style={{color:'#ada9a9'}}>
              Опыт в дизайне, монтаже или IT — не нужен
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {forWhom.map((item, idx) => (
              <div
                key={idx}
                className="p-8 hover:bg-white/5 transition-colors duration-300 group cursor-default" style={{backgroundColor:'#111111'}}
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3
                  className="font-bold text-lg mb-2 group-hover:text-[#960830] transition-colors"
                  style={{fontFamily:'Montserrat, sans-serif', color:'#ffffff'}}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.70)'}}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* PROGRAM — white section */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section id="program" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-[#e8e8e8]" />

        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-[#960830]" />
              <span className="text-xs font-bold text-[#960830] uppercase tracking-[0.25em]">Что внутри</span>
            </div>
            <h2
              className="font-black text-[#1D1D1D] mb-4"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              Программа курса
            </h2>
            <p className="text-[#1D1D1D]/65 text-lg">
              9 модулей — от первого знакомства с нейросетями до стабильного заработка
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-1">
            {modules.map((module, idx) => (
              <AccordionItem
                key={idx}
                value={`module-${idx}`}
                className="border border-[#e8e8e8] data-[state=open]:border-[#960830] transition-colors overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline px-6 py-5 hover:bg-[#fafafa] data-[state=open]:bg-[#960830]/3">
                  <div className="flex items-center gap-5 w-full text-left">
                    <div
                      className="text-3xl font-black text-[#960830]/25 flex-shrink-0 w-12 text-right leading-none"
                      style={{fontFamily:'Montserrat, sans-serif'}}
                    >
                      {module.num}
                    </div>
                    <div className="w-px h-10 bg-[#e8e8e8] flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-bold text-[#1D1D1D] text-base">{module.title}</span>
                        {module.unique && (
                          <span className="text-[9px] font-black bg-[#960830] text-white px-2 py-0.5 uppercase tracking-wider">УНИКАЛЬНЫЙ</span>
                        )}
                      </div>
                      <div className="flex gap-4 text-sm mt-0.5">
                        <span className="text-[#960830] font-medium">{module.subtitle}</span>
                        <span className="text-[#1D1D1D]/30">· {module.duration}</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="pl-17 space-y-4" style={{paddingLeft:'5rem'}}>
                    <p className="text-[#1D1D1D]/65 text-sm leading-relaxed">{module.desc}</p>
                    <ul className="space-y-2">
                      {module.content.map((item, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <div className="w-4 h-4 bg-[#960830]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-2.5 w-2.5 text-[#960830]" />
                          </div>
                          <span className="text-[#1D1D1D]/70 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-[#e8e8e8]">
                      <p className="text-sm font-bold text-[#960830]">→ {module.result}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Result banner */}
          <div className="mt-8 bg-[#1D1D1D] p-8 flex items-center justify-between gap-6 flex-wrap">
            <div className="border-l-4 border-[#960830] pl-6" style={{color:'#ffffff'}}>
              <p className="font-black text-xl" style={{fontFamily:'Montserrat, sans-serif', color:'#ffffff'}}>
                Через 8 недель — профессия Нейрокреатор
              </p>
              <p className="text-sm mt-1" style={{color:'rgba(255,255,255,0.7)'}}>
                Портфолио работ, первые клиенты и система заработка от 50к/мес
              </p>
            </div>
            <a
              href="https://neirocreator.lpxl.ru/curator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#960830] text-white font-bold text-sm px-6 py-3 hover:bg-[#7a0628] transition-colors flex-shrink-0"
              style={{boxShadow:'3px 3px 0 #6d0420'}}
            >
              Записаться
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* TESTIMONIALS — light gray */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-[#960830]" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-[#960830]" />
                <span className="text-xs font-bold text-[#960830] uppercase tracking-[0.25em]">Говорят ученики</span>
              </div>
              <h2
                className="font-black text-[#1D1D1D]"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                }}
              >
                Реальные<br />результаты
              </h2>
            </div>
            <p className="text-[#1D1D1D]/40 text-base max-w-xs md:text-right">
              
            </p>
          </div>

          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
              >
                {reviewImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    <div className="overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={src}
                        alt={`Отзыв ${idx + 1}`}
                        className="w-full h-auto block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center shadow-lg hover:bg-[#960830] hover:border-[#960830] transition-all group z-10"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="w-5 h-5 text-[#1D1D1D] group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center shadow-lg hover:bg-[#960830] hover:border-[#960830] transition-all group z-10"
              aria-label="Следующий"
            >
              <ChevronRight className="w-5 h-5 text-[#1D1D1D] group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrentSlide(idx); setIsAutoPlaying(false); }}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: currentSlide === idx ? '32px' : '8px',
                  height: '8px',
                  backgroundColor: currentSlide === idx ? '#960830' : '#1D1D1D',
                  opacity: currentSlide === idx ? 1 : 0.15,
                  borderRadius: '4px',
                }}
                aria-label={`Слайд ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* PRICING — white */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section id="tariffs" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-[#e8e8e8]" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12 bg-[#960830]" />
              <span className="text-xs font-bold text-[#960830] uppercase tracking-[0.25em]">Цены</span>
              <div className="h-px w-12 bg-[#960830]" />
            </div>
            <h2
              className="font-black text-[#1D1D1D] mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              Выбери свой тариф
            </h2>

            {/* Discount + timer */}
            <div className="inline-flex flex-col items-center gap-4">
              <div
                className="inline-flex items-center gap-2 bg-[#960830] text-white font-bold px-6 py-3"
                style={{boxShadow:'3px 3px 0 #6d0420'}}
              >
                <Zap className="w-4 h-4" />
                Специальная цена — ограниченное время
              </div>
              <div className="bg-[#1D1D1D] px-8 py-5">
                <CountdownTimer />
              </div>
            </div>
          </div>

          {/* Tariff cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {tariffs.map((tariff) => (
              <div
                key={tariff.id}
                className={`relative overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  tariff.featured
                    ? "ring-2 ring-[#960830] shadow-2xl"
                    : "border border-[#e8e8e8] hover:border-[#960830]/30 hover:shadow-lg"
                }`}
              >
                {tariff.featured && (
                  <div className="bg-[#960830] py-3 text-center font-bold text-xs uppercase tracking-[0.15em] text-white">
                    ⭐ Популярный выбор
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1 bg-white">
                  <h3
                    className="text-xl font-black text-[#1D1D1D] mb-8"
                    style={{fontFamily:'Montserrat, sans-serif'}}
                  >
                    {tariff.name}
                  </h3>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span
                        className="font-black text-[#960830]"
                        style={{fontFamily:'Montserrat, sans-serif', fontSize:'clamp(2rem, 4vw, 2.5rem)'}}
                      >
                        {tariff.newPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#1D1D1D]/35 line-through text-sm">{tariff.oldPrice}</span>
                      {tariff.discount && (
                        <span className="text-xs font-bold text-[#960830] bg-[#960830]/8 px-2 py-0.5">−{tariff.discount}</span>
                      )}
                    </div>
                  </div>

                  <a
                    href={tariff.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center font-bold py-4 text-sm mb-8 transition-all hover:-translate-y-px ${
                      tariff.featured
                        ? "bg-[#960830] text-white hover:bg-[#7a0628]"
                        : "bg-[#1D1D1D] text-white hover:bg-[#960830]"
                    }`}
                    style={{boxShadow: tariff.featured ? '3px 3px 0 #6d0420' : '3px 3px 0 #000'}}
                  >
                    Выбрать тариф
                  </a>

                  <ul className="space-y-3 flex-1">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <div className="w-5 h-5 bg-[#960830]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-[#960830]" />
                        </div>
                        <span className="text-[#1D1D1D]/65 text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e8e8]">
            {[
              { icon: ShieldCheck, title: "Гарантия 7 дней", desc: "Если не подойдёт — вернём деньги без вопросов" },
              { icon: Zap, title: "Рассрочка без %", desc: "Напишите в Telegram @olia_codex" },
              { icon: Users, title: "100+ учеников", desc: "Уже учатся и зарабатывают прямо сейчас" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 p-8 bg-white hover:bg-[#fafafa] transition-colors">
                <div className="w-10 h-10 bg-[#960830]/8 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#960830]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1D1D1D] mb-1 text-sm">{item.title}</h4>
                  <p className="text-sm text-[#1D1D1D]/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* FAQ — light gray */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-[#e8e8e8]" />

        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-[#960830]" />
              <span className="text-xs font-bold text-[#960830] uppercase tracking-[0.25em]">Частые вопросы</span>
            </div>
            <h2
              className="font-black text-[#1D1D1D]"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              Вопросы<br />и ответы
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-1">
            {[
              { q: "Нужен ли опыт работы с нейросетями?", a: "Нет, курс рассчитан на полных новичков. Мы учим всё с нуля." },
              { q: "Сколько времени нужно уделять обучению?", a: "В среднем 5-10 часов в неделю. Вы можете учиться в своём темпе." },
              { q: "Можно ли оплатить частями?", a: "Да, напишите в Telegram @olia_codex — подберём удобный вариант." },
              { q: "Что если мне не подойдёт?", a: "Гарантия 7 дней. Если курс не подойдёт — вернём деньги без вопросов." },
              { q: "Нужны ли технические навыки?", a: "Нет. Нужен только компьютер и интернет." },
              { q: "Как долго доступ к материалам?", a: "От 4 до 12 месяцев в зависимости от тарифа." },
              { q: "Есть ли поддержка и кураторы?", a: "Да, на тарифах «С куратором» и «VIP» вы получаете еженедельные созвоны и проверку домашних заданий." },
              { q: "Выдаётся ли сертификат?", a: "Да, после прохождения курса вы получите сертификат о завершении." },
            ].map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border border-[#e8e8e8] bg-white data-[state=open]:border-[#960830]/30 transition-colors overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline px-6 py-5 hover:bg-[#fafafa] text-left">
                  <span className="font-bold text-[#1D1D1D] text-base pr-4 text-left">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-[#1D1D1D]/60 leading-relaxed text-sm">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* FINAL CTA — dark red */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{background:'linear-gradient(135deg, #5a0420 0%, #7a0628 50%, #960830 100%)'}}>



        <div className="max-w-4xl mx-auto relative text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12" style={{background:'rgba(255,255,255,0.4)'}} />
            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{color:'rgba(255,255,255,0.9)'}}>Готов начать?</span>
            <div className="h-px w-12" style={{background:'rgba(255,255,255,0.4)'}} />
          </div>

          <h2
            className="font-black mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: '#ffffff',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            Начни путь<br />в профессию<br />Нейрокреатор
          </h2>

          <a
            href="#tariffs"
            className="inline-flex items-center gap-3 bg-white font-black text-lg px-12 py-5 hover:bg-white/90 transition-all hover:-translate-y-1 active:translate-y-0"
            style={{boxShadow:'5px 5px 0 #6d0420', fontFamily:'Montserrat, sans-serif', color:'#7a0628'}}
          >
            Выбрать тариф по специальной цене
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm font-semibold" style={{color:'#ffffff'}}>
            <span>✓ Гарантия 7 дней</span>
            <span>✓ Рассрочка без %</span>
            <span>✓ 100+ учеников</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* FOOTER */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#0d0d0d] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-[#960830] flex items-center justify-center">
                  <span className="font-black text-lg text-white" style={{fontFamily:'Montserrat, sans-serif'}}>К</span>
                </div>
                <div>
                  <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/50">Академия нейросетей</div>
                  <div className="text-base font-black text-[#960830]" style={{fontFamily:'Montserrat, sans-serif'}}>КОДЕКС</div>
                </div>
              </div>

            </div>
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-white/60">Навигация</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#program" className="text-white/60 hover:text-[#960830] transition-colors">Программа</a></li>
                <li><a href="#tariffs" className="text-white/60 hover:text-[#960830] transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-white/60">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="https://instagram.com/olia.codex" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#960830] transition-colors">Instagram</a></li>
                <li><a href="https://t.me/olia_codex" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#960830] transition-colors">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-xs text-white/40">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <a href="https://disk.yandex.ru/i/xlpfh6YDYAuIig" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#960830] transition-colors">Политика конфиденциальности</a>
                <span className="text-white/20">&bull;</span>
                <a href="https://disk.yandex.ru/i/HV-uoW9wA9ZIZA" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#960830] transition-colors">Публичная оферта</a>
                <span className="text-white/20">&bull;</span>
                <a href="https://disk.yandex.ru/i/Q41RGOoSp1u5kw" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#960830] transition-colors">Обработка данных</a>
                <span className="text-white/20">&bull;</span>
                <a href="https://disk.yandex.ru/i/emJcy_MpPsderw" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#960830] transition-colors">Рассылка</a>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <p>&copy; 2026 Академия Кодекс. Все права защищены.</p>
                <p className="text-white/30">ИП КОДИНЦЕВА ОЛЬГА ДМИТРИЕВНА &nbsp;&middot;&nbsp; ИНН 667118064398 &nbsp;&middot;&nbsp; ОГРНИП 322665800198411</p>
              </div>
              <p className="text-white/25 text-xs mt-3">* Instagram — социальная сеть, запрещённая на территории Российской Федерации.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
