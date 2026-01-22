/**
 * DESIGN PHILOSOPHY: Нейро-Брутализм
 * - Черный фон, белый текст, розовые акценты
 * - Асимметричные диагональные срезы между секциями
 * - Крупная типографика Montserrat Black
 * - Глитч-эффекты на заголовках
 * - Резкие переходы, технологичная эстетика
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CountdownTimer from "@/components/CountdownTimer";
import LiveViewersCounter from "@/components/LiveViewersCounter";
import PurchaseNotifications from "@/components/PurchaseNotifications";
import FloatingCTA from "@/components/FloatingCTA";
import FinalCountdownTimer from "@/components/FinalCountdownTimer";
import { Check, ArrowRight, Sparkles, Brain, TrendingUp, Users, Video, Image as ImageIcon, DollarSign, Target } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {


  const tariffs = [
    {
      id: "basic",
      name: "Самостоятельный",
      features: ["4 модуля", "Обучение в своём темпе", "Доступ — 3 месяца"],
      oldPrice: "25 571 ₽",
      newPrice: "17 900 ₽",
      link: "https://payform.ru/rrar0rs/",
    },
    {
      id: "curator",
      name: "С куратором",
      features: ["6 модулей", "Поддержка куратора", "Созвоны", "1 личная встреча со мной"],
      oldPrice: "62 714 ₽",
      newPrice: "43 900 ₽",
      link: "https://payform.ru/haaonv5/",
      featured: true,
    },
    {
      id: "vip",
      name: "VIP",
      features: ["Личная работа со мной", "Еженедельные встречи", "Работа до внедрения"],
      oldPrice: "128 429 ₽",
      newPrice: "89 900 ₽",
      link: "https://payform.ru/moaonxY/",
    },
  ];

  const modules = [
    { 
      num: "0", 
      title: "Вводный", 
      subtitle: "Как пройти курс и получить деньги",
      duration: "1 урок + домашнее задание",
      desc: "Это не просто знакомство с платформой — это твоя точка старта. Ты узнаешь, как устроен курс, какой результат ты получишь через 6 недель, и поймёшь, что это не марафон по нейросетям, а система заработка.",
      content: [
        "Полная карта курса: из чего состоит обучение и как двигаться по модулям",
        "Правила прохождения: без пропусков, без 'потом', без хаоса",
        "Твоя точка А → точка Б: где ты сейчас и где будешь через 6 недель",
        "Домашнее задание: заполнишь анкету о своих целях, навыках и желаемом доходе"
      ],
      result: "Ты понимаешь, что тебя ждёт, и готов идти по системе. У тебя есть мотивация и доверие к процессу."
    },
    { 
      num: "1", 
      title: "AI-База, распаковка и бренд", 
      subtitle: "От новичка к AI-креатору с позиционированием",
      duration: "5 уроков + домашние задания",
      desc: "Это фундамент твоей будущей карьеры. Ты не просто изучишь нейросети — ты поймёшь, кто ты, какой у тебя стиль, кому ты нужен и за что будешь брать деньги.",
      content: [
        "AI-рынок и экосистема нейросетей: какие бывают инструменты, где деньги и почему важно уметь выбирать",
        "ChatGPT как рабочий инструмент: как формулировать запросы и получать структуру для работы",
        "Доступы, оплата, безопасность: как оплатить нейросети и работать через VPN",
        "Распаковка личности и стратегия дохода (ключевой урок 40-60 мин): кто я, какой мой стиль, какие услуги буду продавать и за сколько",
        "Canva для упаковки бренда: как сделать аватар, обложку и первый визуальный стиль"
      ],
      result: "У тебя есть позиционирование, стиль и понимание, что и за сколько ты будешь продавать. Ты больше не 'новичок в нейросетях' — ты будущий AI-креатор с брендом."
    },
    { 
      num: "2", 
      title: "Реалистичные AI-фото", 
      subtitle: "От идеи до готовой фотосессии",
      duration: "9 уроков + итоговая мини-фотосессия",
      desc: "Здесь ты научишься не просто 'нажимать generate', а планировать и создавать коммерческие AI-фотосессии. Ты поймёшь разницу между 'красиво' и 'продаёт'.",
      content: [
        "Коммерческий реализм: почему пластик не работает, примеры хороших и плохих AI-фото",
        "Экосистема фото-нейросетей: Freepik, Higgsfield, Nano — чем отличаются и когда что выбирать",
        "Поиск идей для фотосессий: Pinterest, реклама брендов, Instagram",
        "Работа с референсами: что можно копировать, как превращать чужое в своё",
        "Раскадровка фотосессии: как из идеи сделать 6-8 кадров (шаблон прилагается)",
        "Ракурсы, планы и композиция: портрет, ¾, полный рост, динамика",
        "Живые лица, кожа и свет: как писать промпты и добиваться реализма",
        "Как убрать пластик и фейк: типовые ошибки и доработка"
      ],
      result: "Ты собираешь мини-фотосессию из 4-6 реалистичных кадров в своём стиле. Это уже портфолио, которое можно показывать клиентам."
    },
    { 
      num: "3", 
      title: "Midjourney — премиальный визуал", 
      subtitle: "Стильный, брендовый, дорогой контент",
      duration: "6 уроков + итоговое портфолио",
      desc: "Midjourney — это инструмент для создания визуала премиум-класса. Здесь ты научишься делать контент, который можно продавать за высокий чек: для брендов, экспертов, рекламы.",
      content: [
        "Оплата, доступы, безопасность: как подключить Midjourney и не ловить блокировки",
        "Персонализация: как заставить Midjourney понимать тебя и адаптироваться под твой стиль",
        "Midjourney как система (главный урок 40-50 мин): логика работы, порядок слов, все настройки (stylize, chaos, seed, weird), omni-reference, moodboards",
        "Свет, композиция и атмосфера: как управлять светом, глубиной и киношностью",
        "Фирменный визуальный стиль: как повторять свой вайб и не быть 'одинаковым'",
        "Коммерческий визуал: визуал для брендов, экспертов, соцсетей, рекламы"
      ],
      result: "Ты создаёшь 3-5 кадров в своём фирменном стиле для портфеля. Это премиальный контент, который выделяет тебя на рынке."
    },
    { 
      num: "4", 
      title: "AI-видео", 
      subtitle: "Реализм, досматриваемость и деньги",
      duration: "6 уроков + итоговый говорящий ролик",
      desc: "AI-видео — это охваты и клиенты. Здесь ты научишься делать живые видео, которые выглядят реалистично, удерживают внимание и продаются брендам и экспертам.",
      content: [
        "Почему AI-видео = охваты и клиенты: как работают Reels, почему видео важнее фото",
        "Экосистема AI-видео: Kling, Higgsfield, Runway, HeyGen — чем отличаются",
        "Оживление изображений: как получить живого человека — микродвижения, моргание, ветер, дыхание, взгляд",
        "Ракурсы и планы: почему одни видео смотрят, а другие пролистывают",
        "Эмоции и реализм: как управлять лицом и задавать улыбку, напряжение, энергию",
        "HeyGen: говорящие лица — создание аватара, текст → видео, где это покупают клиенты"
      ],
      result: "Ты создаёшь 1 говорящий AI-ролик. Это формат, который активно покупают эксперты и бренды."
    },
    { 
      num: "5", 
      title: "Контент, площадки и первые заявки", 
      subtitle: "Как AI-контент приводит клиентов",
      duration: "4-5 уроков + воронка продаж",
      desc: "Навык без клиентов — это хобби. Здесь ты поймёшь, что публиковать, где и как, чтобы твой AI-контент начал приводить заявки.",
      content: [
        "Контент, который приводит клиентов: почему 'красиво' ≠ 'продаёт', какие форматы работают",
        "Первая 1000 подписчиков без бюджета: как стартовать с нуля, почему важна регулярность",
        "Площадки: Instagram, Reels, Threads — чем отличаются, где проще находить клиентов",
        "Простая воронка из контента в заявки: путь подписчика — где он пишет, как становится клиентом"
      ],
      result: "У тебя есть платформа, идеи контента и логика, как из просмотров появляются заявки. Ты больше не 'просто постишь' — ты строишь поток клиентов."
    },
    { 
      num: "6", 
      title: "Монетизация и работа с клиентами", 
      subtitle: "За что брать деньги и как работать с заказами",
      duration: "4 урока + скрипты продаж",
      desc: "Самый важный модуль для тех, кто боится брать деньги. Здесь ты поймёшь, за что платят в AI-контенте, как формировать пакеты, ставить цены и вести клиентов.",
      content: [
        "За что платят в AI-контенте: какие услуги реально покупают — фото, видео, упаковка, реклама",
        "Как формировать пакеты и цены: почему не продавать 'по картинке', как ставить цену без страха",
        "Где брать клиентов: Instagram, Threads, личный бренд, сарафан — выбираешь 2 канала",
        "Переписка и ведение клиента: как отвечать, как сдавать результат и не работать бесплатно"
      ],
      result: "У тебя есть оффер, цены, понимание, как общаться с клиентами. Ты готов брать деньги, а не просто показывать работы."
    },
    { 
      num: "7", 
      title: "Выход на рынок и закрепление в профессии", 
      subtitle: "Твоя позиция, продуктовая линейка и первые 100-300k",
      duration: "4 урока + модель дохода на 3 месяца",
      desc: "Финальный модуль — это не 'подумать о будущем', а зафиксировать тебя как AI-креатора, который вышел на рынок и знает, как расти дальше.",
      content: [
        "Твоя позиция на рынке: низкий, средний, премиум сегмент — где ты находишься, где твои клиенты",
        "Твоя продуктовая линейка: разовый проект, пакеты, подписка, ретейнер — как из AI-навыка делается долгий доход",
        "Твоя точка входа в деньги: как брать первый заказ, как закрывать на деньги и не работать бесплатно",
        "Как выглядят следующие 100-300k: математика роста — сколько клиентов, по какой цене, какими услугами"
      ],
      result: "Ты считаешь свою модель дохода на 3 месяца. Ты понимаешь, как зарабатывать не разово, а системно."
    },
  ];

  const handleTariffClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#222222]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/images/logo.png" alt="AI CODEX" className="h-12" />
          <a href="#pricing" className="text-[#ff007f] hover:text-white transition-colors font-bold">
            ВЫБРАТЬ ТАРИФ
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 glitch">
            AI-CREATOR
          </h1>
          <p className="text-xl md:text-2xl lg:text-4xl mb-4 font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Новая профессия в нейро-контенте
          </p>
          <p className="text-base md:text-lg lg:text-2xl mb-8 max-w-3xl mx-auto text-white/80">
            Обучение для тех, кто хочет не просто попробовать нейро-контент,
            <br />а разобраться, как сделать из этого навык и зарабатывать на нём.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12 text-sm md:text-lg lg:text-xl">
            <span className="text-white/60">Навык</span>
            <ArrowRight className="text-[#ff007f]" />
            <span className="text-white/60">контент</span>
            <ArrowRight className="text-[#ff007f]" />
            <span className="text-white/60">клиенты</span>
            <ArrowRight className="text-[#ff007f]" />
            <span className="text-[#ff007f] font-bold">деньги</span>
          </div>
          <a href="#pricing">
            <Button 
              size="lg" 
              className="bg-[#ff007f] hover:bg-[#ff007f]/80 text-white text-xl px-12 py-8 pink-glow-hover font-bold"
            >
              ХОЧУ СТАТЬ AI-CREATOR
            </Button>
          </a>
          <div className="mt-8 flex justify-center">
            <LiveViewersCounter />
          </div>
        </div>
      </section>

      {/* What is this */}
      <section className="py-8 md:py-12 bg-[#222222]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 text-center">Что это за обучение</h2>
          
          {/* Главное описание */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-xl md:text-2xl mb-4">
              <span className="text-[#ff007f] font-bold">AI-CREATOR</span> — флагманский курс школы AI CODEX<br />
              с фокусом на реалистичный нейро-контент.
            </p>
            <p className="text-base md:text-lg text-white/80">
              Вы учитесь работать с конкретными нейросетями и инструментами<br />
              и создавать нейро-фото и видео так,<br />
              чтобы они выглядели как настоящие.
            </p>
          </div>

          {/* Карточки с результатами */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-black border border-[#ff007f] p-5 hover:border-[#ff007f] hover:shadow-[0_0_20px_rgba(255,0,127,0.2)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-sm bg-[#ff007f]/20 border border-[#ff007f] flex items-center justify-center mb-4">
                  <ImageIcon className="w-7 h-7 text-[#ff007f]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Делаете реалистичный<br />нейро-контент</h3>
                <p className="text-sm text-white/70">Фото и видео, которые нельзя отличить от настоящих</p>
              </div>
            </Card>

            <Card className="bg-black border border-[#ff007f] p-5 hover:border-[#ff007f] hover:shadow-[0_0_20px_rgba(255,0,127,0.2)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-sm bg-[#ff007f]/20 border border-[#ff007f] flex items-center justify-center mb-4">
                  <Video className="w-7 h-7 text-[#ff007f]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Собираете визуал<br />под реальные задачи</h3>
                <p className="text-sm text-white/70">Короткие видео, карусели, контент для соцсетей</p>
              </div>
            </Card>

            <Card className="bg-black border border-[#ff007f] p-5 hover:border-[#ff007f] hover:shadow-[0_0_20px_rgba(255,0,127,0.2)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-sm bg-[#ff007f]/20 border border-[#ff007f] flex items-center justify-center mb-4">
                  <DollarSign className="w-7 h-7 text-[#ff007f]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Понимаете<br />как зарабатывать</h3>
                <p className="text-sm text-white/70">Контент, проекты, работа с клиентами — все способы монетизации</p>
              </div>
            </Card>
          </div>

          {/* Заключительный блок */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-[#ff007f]/10 border border-[#ff007f] p-6 rounded-sm">
              <p className="text-lg md:text-xl font-bold">
                Это обучение про практику и применение.<br />
                Про навык, который можно использовать сразу,<br />
                а не про теорию <span className="text-[#ff007f]">«на будущее»</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-8 md:py-12 bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8">Кому подойдёт курс</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "только начинаете и вообще не в теме",
              "уже пробовали нейросети, но пока не видите денег",
              "ищете направление, которое реально востребовано сейчас",
              "хотите новую профессию или дополнительный доход",
              "хотите работать удалённо и гибко",
              "готовы учиться и применять навыки на практике",
            ].map((text, idx) => (
              <Card key={idx} className="bg-[#222222] border border-[#ff007f] p-6 hover:bg-[#ff007f]/10 transition-colors">
                <p className="text-lg">{text}</p>
              </Card>
            ))}
          </div>
          <p className="text-xl mt-12 text-center text-white/80">
            Опыт в дизайне, монтаже или IT не нужен.
          </p>
        </div>
      </section>

      {/* How you will learn */}
      <section className="py-8 md:py-12 bg-[#222222] relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(/images/neural-pattern.png)',
            backgroundSize: '400px',
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8">Как вы будете учиться</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-black text-[#ff007f]" style={{ fontFamily: 'Inter, sans-serif' }}>1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Разбираемся, как всё устроено</h3>
                  <p className="text-lg text-white/80">Понимаем основы и логику работы нейросетей</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="text-6xl font-black text-[#ff007f]" style={{ fontFamily: 'Inter, sans-serif' }}>2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Делаем контент</h3>
                  <p className="text-lg text-white/80">Практикуемся на реальных задачах и проектах</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="text-6xl font-black text-[#ff007f]" style={{ fontFamily: 'Inter, sans-serif' }}>3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Смотрим, как он работает</h3>
                  <p className="text-lg text-white/80">Анализируем результаты и привлечение аудитории</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="text-6xl font-black text-[#ff007f]" style={{ fontFamily: 'Inter, sans-serif' }}>4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Превращаем в деньги</h3>
                  <p className="text-lg text-white/80">Находим клиентов и монетизируем навык</p>
                </div>
              </div>
            </div>
            <p className="text-xl mt-12 text-center">
              Я выстроила обучение так, чтобы вы не терялись на старте
              и спокойно разбирались, даже если раньше вообще не работали с нейросетями.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8 md:py-12 bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8">Что будет в итоге</h2>
          <div className="max-w-4xl mx-auto">
            <div>
              <p className="text-xl mb-6">
                В результате обучения вы осваиваете профессию <span className="text-[#ff007f] font-bold">AI-CREATOR</span> —<br />
                одну из самых востребованных сейчас в сфере нейро-контента.
              </p>
              <p className="text-lg mb-6 text-white/80">
                Это не набор разрозненных навыков.<br />
                Это понятная профессия, с которой можно выходить на рынок.
              </p>
              <p className="text-lg mb-4 font-semibold">После курса у вас есть:</p>
              <ul className="space-y-4 mb-8">
                {[
                  "понимание, как работают нейросети и как с ними взаимодействовать",
                  "навык создания реалистичных нейро-фото и видео",
                  "готовый визуал, который можно использовать для себя или клиентов",
                  "понимание, за что в этой нише платят деньги и как формируется доход",
                  "уверенность в том, что вы умеете это делать и можете применять навык дальше",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Check className="text-[#ff007f] w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#ff007f]/10 border-2 border-[#ff007f] p-6 rounded-sm mb-8">
                <p className="text-xl font-bold mb-2 text-[#ff007f]">Важно:</p>
                <p className="text-lg">
                  Многие ученики начинают зарабатывать и набирать подписчиков<br />
                  <span className="text-[#ff007f] font-bold">уже во время обучения</span>,<br />
                  а не только после его завершения.
                </p>
              </div>
              <p className="text-2xl font-bold">
                Вы выходите не «после обучения»,
                <br />
                <span className="text-[#ff007f]">а с профессией и рабочим инструментом в руках.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-8 md:py-12 bg-[#222222]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8">Программа курса</h2>
          <p className="text-xl mb-12 max-w-3xl">
            Обучение выстроено так, чтобы шаг за шагом перейти от знакомства с инструментами к реальной работе и деньгам.
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, idx) => (
              <AccordionItem 
                key={idx} 
                value={`module-${idx}`}
                className="bg-black border-2 border-[#ff007f] data-[state=open]:border-[#ff007f] data-[state=open]:shadow-[0_0_20px_rgba(255,0,127,0.3)]"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[#ff007f]/5 transition-colors">
                  <div className="flex items-start gap-6 w-full text-left">
                    <div className="text-5xl font-black text-[#ff007f] opacity-30" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {module.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">Модуль {module.num}. {module.title}</h3>
                      <p className="text-base text-[#ff007f] font-semibold mb-2">{module.subtitle}</p>
                      <p className="text-sm text-white/50">{module.duration}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-[4.5rem] space-y-6">
                    <p className="text-lg text-white/90 leading-relaxed">
                      {module.desc}
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-[#ff007f]">Что внутри:</h4>
                      <ul className="space-y-2">
                        {module.content.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="text-[#ff007f] flex-shrink-0 mt-1" size={20} />
                            <span className="text-white/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-[#ff007f]/10 border-l-4 border-[#ff007f]">
                      <h4 className="text-lg font-bold mb-2">Результат модуля:</h4>
                      <p className="text-white/90">{module.result}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 p-8 bg-black border-2 border-[#ff007f]">
            <h3 className="text-2xl font-bold mb-6 text-center">Итог курса</h3>
            <div className="mb-8 p-6 bg-[#ff007f]/5 border-l-4 border-[#ff007f]">
              <p className="text-xl font-bold mb-4">Через 6 недель у тебя:</p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-center gap-3">
                  <Check className="text-[#ff007f] flex-shrink-0" />
                  <span>Навык создания реалистичного AI-контента (фото и видео)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-[#ff007f] flex-shrink-0" />
                  <span>Портфолио с работами в своём фирменном стиле</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-[#ff007f] flex-shrink-0" />
                  <span>Позиционирование и бренд</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-[#ff007f] flex-shrink-0" />
                  <span>Контент на площадках</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-[#ff007f] flex-shrink-0" />
                  <span>Понимание, как брать клиентов и деньги</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-[#ff007f] flex-shrink-0" />
                  <span>Модель дохода на ближайшие 3 месяца</span>
                </li>
              </ul>
              <p className="text-lg font-semibold mt-6 text-center text-[#ff007f]">
                Ты не просто изучил нейросети — ты стал AI-креатором, который умеет зарабатывать.
              </p>
            </div>
            <h3 className="text-2xl font-bold mb-4">Формат обучения</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center gap-3">
                <Check className="text-[#ff007f]" />
                <span>видеоуроки</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-[#ff007f]" />
                <span>практика и задания</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-[#ff007f]" />
                <span>доступ к материалам</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-[#ff007f]" />
                <span>обучение в своём темпе</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Course Bonuses */}
      <section className="py-8 md:py-12 bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 text-center">Бонусы курса</h2>
          <p className="text-xl text-center mb-12 text-white/80 max-w-3xl mx-auto">
            Кроме основной программы, вы получаете дополнительные материалы,<br />
            которые ускорят ваш старт и помогут зарабатывать быстрее.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#222222] border-2 border-[#ff007f] p-6 hover:border-[#ff007f] hover:shadow-[0_0_30px_rgba(255,0,127,0.3)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-sm bg-[#ff007f]/20 border-2 border-[#ff007f] flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-[#ff007f]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Чек-листы промптов</h3>
                <p className="text-white/70 text-sm">Готовые шаблоны запросов для разных нейросетей и задач</p>
              </div>
            </Card>

            <Card className="bg-[#222222] border-2 border-[#ff007f] p-6 hover:border-[#ff007f] hover:shadow-[0_0_30px_rgba(255,0,127,0.3)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-sm bg-[#ff007f]/20 border-2 border-[#ff007f] flex items-center justify-center mb-4">
                  <ImageIcon className="w-8 h-8 text-[#ff007f]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Шаблоны для работы</h3>
                <p className="text-white/70 text-sm">Готовые коммерческие предложения и презентации для клиентов</p>
              </div>
            </Card>

            <Card className="bg-[#222222] border-2 border-[#ff007f] p-6 hover:border-[#ff007f] hover:shadow-[0_0_30px_rgba(255,0,127,0.3)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-sm bg-[#ff007f]/20 border-2 border-[#ff007f] flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-[#ff007f]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Закрытый чат</h3>
                <p className="text-white/70 text-sm">Доступ к сообществу выпускников и обмен опытом</p>
              </div>
            </Card>

            <Card className="bg-[#222222] border-2 border-[#ff007f] p-6 hover:border-[#ff007f] hover:shadow-[0_0_30px_rgba(255,0,127,0.3)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-sm bg-[#ff007f]/20 border-2 border-[#ff007f] flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-[#ff007f]" />
                </div>
                <h3 className="text-xl font-bold mb-3">База клиентов</h3>
                <p className="text-white/70 text-sm">Список площадок и способов поиска первых заказов</p>
              </div>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-[#ff007f]/10 border-2 border-[#ff007f] p-8 rounded-sm text-center">
              <p className="text-2xl font-bold mb-4">
                Все бонусы включены в любой тариф
              </p>
              <p className="text-lg text-white/80">
                Вы получаете доступ ко всем материалам независимо от выбранного тарифа.<br />
                Разница только в уровне поддержки и обратной связи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-8 md:py-12 bg-[#222222]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 text-center">Тарифы участия</h2>
          <div className="text-center mb-12">
            <p className="text-2xl mb-6">Сейчас действует скидка <span className="text-[#ff007f] font-bold">30%</span></p>
            <p className="text-lg text-white/70 mb-8">Скидка активна 24 часа после входа на страницу</p>
            <div className="inline-block p-8 bg-black border-4 border-[#ff007f] pink-glow">
              <p className="text-sm text-white/70 mb-4">До конца скидки осталось:</p>
              <CountdownTimer />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {tariffs.map((tariff) => (
              <Card 
                key={tariff.id}
                className={`bg-black p-8 relative ${
                  tariff.featured 
                    ? 'border-[#ff007f] border-4 pink-glow scale-105' 
                    : 'border-[#222222] border-2'
                }`}
              >
                {tariff.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff007f] px-6 py-2 font-bold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="flex justify-center items-center mb-6">
                  <h3 className="text-3xl font-black text-center">{tariff.name}</h3>
                </div>
                <ul className="space-y-3 mb-8 min-h-[200px]">
                  {tariff.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-[#ff007f] flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <div className="text-2xl line-through text-white/40">{tariff.oldPrice}</div>
                  <div className="text-5xl font-black text-[#ff007f]">{tariff.newPrice}</div>
                </div>
                <Button 
                  className={`w-full text-lg py-6 ${
                    tariff.featured
                      ? 'bg-[#ff007f] hover:bg-[#ff007f]/80 pink-glow-hover'
                      : 'bg-[#222222] hover:bg-[#ff007f] border-2 border-[#ff007f]'
                  }`}
                  onClick={() => handleTariffClick(tariff.link)}
                >
                  ВЫБРАТЬ ТАРИФ
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 md:py-12 bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8">Отзывы учеников</h2>
          
          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/testimonial_1.jpg", alt: "Отзыв ученицы о работе с Ольей" },
              { src: "/images/testimonial_2.jpg", alt: "Благодарность за индивидуальное обучение" },
              { src: "/images/testimonial_3.jpg", alt: "Отзыв о создании первого ролика" },
              { src: "/images/testimonial_4.jpg", alt: "Результат: заработок 25к за неделю" },
              { src: "/images/testimonial_5.jpg", alt: "Восхищение наставником и практиком" },
            ].map((testimonial, idx) => (
              <div key={idx} className="border-2 border-[#ff007f]/20 hover:border-[#ff007f] transition-colors overflow-hidden rounded-sm inline-block">
                <img 
                  src={testimonial.src} 
                  alt={testimonial.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {[
                  { src: "/images/testimonial_1.jpg", alt: "Отзыв ученицы о работе с Ольей" },
                  { src: "/images/testimonial_2.jpg", alt: "Благодарность за индивидуальное обучение" },
                  { src: "/images/testimonial_3.jpg", alt: "Отзыв о создании первого ролика" },
                  { src: "/images/testimonial_4.jpg", alt: "Результат: заработок 25к за неделю" },
                  { src: "/images/testimonial_5.jpg", alt: "Восхищение наставником и практиком" },
                ].map((testimonial, idx) => (
                  <CarouselItem key={idx}>
                    <div className="p-1">
                      <Card className="bg-black border-2 border-[#ff007f] overflow-hidden">
                        <img 
                          src={testimonial.src} 
                          alt={testimonial.alt}
                          className="w-full h-auto object-cover"
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 bg-[#ff007f] border-none text-white hover:bg-[#ff007f]/80" />
              <CarouselNext className="-right-4 bg-[#ff007f] border-none text-white hover:bg-[#ff007f]/80" />
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(5)].map((_, idx) => (
                  <button
                    key={idx}
                    className="w-2 h-2 rounded-full bg-white/30 hover:bg-[#ff007f] transition-colors"
                    aria-label={`Перейти к отзыву ${idx + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          <p className="text-center text-white/60 mt-8 text-sm md:text-base">Реальные отзывы учеников из чата курса</p>
        </div>
      </section>

      {/* Результаты учеников */}
      <section className="py-8 md:py-12 bg-[#222222]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 text-center">Результаты учеников</h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card className="bg-black border-2 border-[#ff007f] overflow-hidden">
                    <img 
                      src="/images/photo_1_2026-01-19_11-48-24.jpg" 
                      alt="Галина Кузнецова - результаты ученицы" 
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="bg-black border-2 border-[#ff007f] overflow-hidden">
                    <img 
                      src="/images/photo_2_2026-01-19_11-48-24.jpg" 
                      alt="Точка А - история трансформации" 
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="bg-black border-2 border-[#ff007f] overflow-hidden">
                    <img 
                      src="/images/photo_3_2026-01-19_11-48-24.jpg" 
                      alt="Точка Б - результаты после обучения" 
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="bg-black border-2 border-[#ff007f] overflow-hidden">
                    <img 
                      src="/images/photo_4_2026-01-19_11-48-24.jpg" 
                      alt="Статистика видео Reels - аналитика" 
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="bg-black border-2 border-[#ff007f] overflow-hidden">
                    <img 
                      src="/images/photo_5_2026-01-19_11-48-24.jpg" 
                      alt="Статистика видео Reels - детальная аналитика" 
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="bg-black border-2 border-[#ff007f] overflow-hidden">
                    <img 
                      src="/images/photo_6_2026-01-19_11-48-24.jpg" 
                      alt="Заработок за сутки 16500 рублей" 
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="bg-black border-2 border-[#ff007f] overflow-hidden">
                    <img 
                      src="/images/photo_7_2026-01-19_11-48-24.jpg" 
                      alt="Отзыв ученицы о курсе" 
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12 bg-[#ff007f] border-none text-white hover:bg-[#ff007f]/80" />
            <CarouselNext className="-right-4 md:-right-12 bg-[#ff007f] border-none text-white hover:bg-[#ff007f]/80" />
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(7)].map((_, idx) => (
                <button
                  key={idx}
                  className="w-2 h-2 rounded-full bg-white/30 hover:bg-[#ff007f] transition-colors"
                  aria-label={`Перейти к слайду ${idx + 1}`}
                />
              ))}
            </div>
          </Carousel>
          <p className="text-center text-white/60 mt-8 text-sm md:text-base">Пролистайте, чтобы увидеть реальные результаты учеников: статистику, заработки и отзывы</p>
        </div>
      </section>

      {/* Работы учеников */}
      <section className="py-8 md:py-12 bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 text-center">Работы учеников</h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {[
                'IMG_3092.PNG', 'IMG_3093.PNG', 'IMG_3094.PNG', 'IMG_3095.PNG', 'IMG_3096.PNG',
                'IMG_3097.JPG', 'IMG_3098.JPG', 'IMG_3099.JPG', 'IMG_3100.JPG', 'IMG_3101.JPG',
                'IMG_3102(2).JPG', 'IMG_3103.JPG', 'IMG_3104.JPG', 'IMG_3105.JPG', 'IMG_3106.JPG',
                'IMG_3107.JPG', 'IMG_3108.JPG', 'IMG_3109.JPG', 'IMG_3110.JPG', 'IMG_3111.JPG',
                'IMG_3112.JPG', 'IMG_3113.JPG', 'IMG_3114.JPG', 'IMG_3115.JPG'
              ].map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="p-1">
                    <Card className="bg-black border-2 border-[#ff007f] overflow-hidden">
                      <img 
                        src={`/images/${img}`}
                        alt="Работы учеников курса AI-CREATOR"
                        className="w-full h-auto object-cover"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12 bg-[#ff007f] border-none text-white hover:bg-[#ff007f]/80" />
            <CarouselNext className="-right-4 md:-right-12 bg-[#ff007f] border-none text-white hover:bg-[#ff007f]/80" />
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(24)].map((_, idx) => (
                <button
                  key={idx}
                  className="w-2 h-2 rounded-full bg-white/30 hover:bg-[#ff007f] transition-colors"
                  aria-label={`Перейти к слайду ${idx + 1}`}
                />
              ))}
            </div>
          </Carousel>
          <p className="text-center text-white/60 mt-8 text-sm md:text-base">Нейро-контент, созданный учениками в процессе обучения</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-12 bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-10 text-center">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            <AccordionItem value="item-1" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Нужен ли опыт работы с нейросетями?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Нет, курс построен так, что вы начинаете с нуля. Я объясняю все основы и логику работы нейросетей простым языком. Даже если вы никогда не работали с AI, вы спокойно разберётесь и начнёте создавать контент уже на первых уроках.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Сколько времени нужно уделять обучению?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Курс построен так, чтобы вы могли учиться в своём темпе. В среднем достаточно 1-2 часов в день. Все материалы остаются с вами, и вы можете возвращаться к ним в любое время. Главное — практика и применение знаний.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Что если у меня не получится?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Я выстроила обучение так, чтобы вы не терялись на старте и спокойно разбирались, даже если раньше вообще не работали с нейросетями. Плюс в тарифах с куратором и VIP есть поддержка — вы всегда можете задать вопрос и получить помощь.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Я новичок, смогу ли я разобраться?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Да, курс специально создан для новичков. Все объясняется простым языком, без сложных терминов. Вы начинаете с самых основ и постепенно переходите к более продвинутым техникам. Даже если вы никогда не работали с нейросетями — вы точно разберётесь.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Можно ли оплатить частями?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Да, доступна рассрочка. Вы можете оплатить курс частями без переплат и процентов. Подробности по рассрочке уточняйте при оформлении заявки — мы подберём удобный вариант.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Гарантируете ли вы результат?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Я гарантирую качество обучения и поддержку на всём пути. Результат зависит от вашей практики и применения знаний. Если вы проходите уроки и выполняете задания — вы точно получите навык и сможете создавать контент на уровне.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Нужны ли технические навыки?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Нет, технические навыки не нужны. Курс построен так, чтобы любой человек мог освоить материал. Вам не нужно уметь программировать, монтировать или работать в сложных программах. Всё максимально просто и понятно.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Как долго доступ к материалам?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Доступ к материалам зависит от выбранного тарифа. На тарифе «Самостоятельный» — 3 месяца. На тарифах с куратором и VIP — 6 месяцев. За это время вы успеете пройти весь курс и вернуться к урокам при необходимости.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Есть ли поддержка и кураторы?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Да, на тарифах «С куратором» и «VIP» есть поддержка. Вы можете задавать вопросы, получать обратную связь по работам и разбирать сложные моменты. На VIP-тарифе — еженедельные личные встречи со мной.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Выдаётся ли сертификат?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Да, после прохождения курса вы получаете сертификат о завершении обучения. Но главное — это не бумажка, а реальный навык и портфолио работ, которые вы создадите во время обучения.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border-2 border-[#ff007f] bg-[#222222] px-6 rounded-sm">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-[#ff007f] transition-colors py-6">
                Что если мне не подойдёт?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                Если в течение первых 7 дней вы поймёте, что курс вам не подходит — мы вернём деньги без вопросов. Главное — напишите в поддержку, и мы всё оформим.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>


      {/* Author */}
      <section className="py-8 md:py-12 bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8">Кто ведёт обучение</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <img 
                src="/images/olga.jpg" 
                alt="Ольга Кодинцева" 
                className="w-full border-4 border-[#ff007f] pink-glow"
              />
            </div>
            <div>
              <h3 className="text-4xl font-black mb-4">Ольга | olia.codex</h3>
              <p className="text-xl mb-6 text-[#ff007f]">Создатель школы AI CODEX</p>
              <p className="text-lg mb-4">
                За 4 недели набрала 9000 подписчиков исключительно на нейро-контенте.
              </p>
              <p className="text-lg mb-4">
                Работает с нейросетями на практике и показывает, как использовать их не «для экспериментов», а для создания контента, роста и заработка.
              </p>
              <p className="text-lg mb-4">
                В обучении Ольга делится своим рабочим подходом. Ученики получают навык и показывают заметные результаты в контенте и проектах.
              </p>
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://instagram.com/olia.codex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ff007f] hover:text-white transition-colors"
                >
                  Instagram: @olia.codex
                </a>
              </div>
              <div className="flex gap-4 mt-2">
                <a 
                  href="https://t.me/olia_codex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ff007f] hover:text-white transition-colors"
                >
                  Telegram: @olia_codex
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Timer */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff007f] via-[#ff0055] to-[#cc0044]" />
        
        {/* Large geometric shapes */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
        </div>
        
        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(255,255,255,0.1) 40px,
                rgba(255,255,255,0.1) 80px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                rgba(0,0,0,0.1) 40px,
                rgba(0,0,0,0.1) 80px
              )
            `
          }} />
        </div>
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="4" numOctaves="3" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
          backgroundSize: '150px 150px',
          mixBlendMode: 'overlay'
        }} />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white">
              Начните зарабатывать<br />на нейро-контенте уже сейчас
            </h2>
            
            <Button 
              size="lg" 
              className="bg-white text-[#ff007f] hover:bg-white/90 text-xl px-12 py-8 h-auto font-black shadow-2xl hover:scale-105 transition-transform"
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              ВЫБРАТЬ ТАРИФ СЕЙЧАС
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#222222] border-t-4 border-[#ff007f]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/images/logo.png" alt="AI CODEX" className="h-12 mb-4" />
              <p className="text-white/70">школа нейросетей и нейро-контента</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>
                  <a 
                    href="https://www.instagram.com/olia.codex/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#ff007f] transition-colors"
                  >
                    Instagram: @olia.codex
                  </a>
                </p>
                <p>
                  <a 
                    href="https://t.me/olia_codex" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#ff007f] transition-colors"
                  >
                    Telegram: @olia_codex
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Юридическая информация</h4>
              <div className="space-y-1 text-sm text-white/70">
                <p>ИП КОДИНЦЕВА ОЛЬГА ДМИТРИЕВНА</p>
                <p>ИНН 667118064398</p>
                <p>ОГРНИП 322665800198411</p>
              </div>
            </div>
          </div>
          <div className="text-center text-white/50 text-sm pt-8 border-t border-white/10 space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-2">
              <a 
                href="https://disk.yandex.ru/i/xlpfh6YDYAuIig" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#ff007f] transition-colors"
              >
                Политика конфиденциальности
              </a>
              <span>•</span>
              <a 
                href="https://disk.yandex.ru/i/HV-uoW9wA9ZIZA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#ff007f] transition-colors"
              >
                Публичная оферта
              </a>
              <span>•</span>
              <a 
                href="https://disk.yandex.ru/i/Q41RGOoSp1u5kw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#ff007f] transition-colors"
              >
                Обработка данных
              </a>
              <span>•</span>
              <a 
                href="https://disk.yandex.ru/i/emJcy_MpPsderw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#ff007f] transition-colors"
              >
                Рассылка
              </a>
            </div>
            <div>
              © AI CODEX. Все права защищены
            </div>
          </div>
        </div>
      </footer>
      <PurchaseNotifications />
      <FloatingCTA />
    </div>
  );
}
