import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Gift } from "lucide-react";

export default function Home() {
  const benefits = [
    "Понимание, что такое AI-креаторство в 2026 и почему именно этот навык выбирают для роста и дохода",
    "Картину рынка AI-контента: кто заказывает, за что платят и какие форматы востребованы",
    "Роль нейросетей в контенте — где они усиливают креатора, а где не дают результата",
    "Логику роста аудитории для AI-креатора: как набирать подписчиков без личного бренда и 'старта с нуля'",
    "Понимание, как превратить AI-навык в деньги, а не просто в эксперименты и красивые работы",
  ];

  const bonuses = [
    "Список нейросетей для жизни и заработка",
    "Инструкция по оплате нейросетей из России",
  ];

  const testimonials = [
    "/images/testimonial-1.jpg",
    "/images/testimonial-2.jpg",
    "/images/testimonial-3.jpg",
    "/images/testimonial-4.jpg",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Background Neural Network */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff007f" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ff007f" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="3" fill="#ff007f" opacity="0.6" />
            <circle cx="900" cy="150" r="3" fill="#ff007f" opacity="0.6" />
            <circle cx="800" cy="800" r="3" fill="#ff007f" opacity="0.6" />
            <circle cx="200" cy="900" r="3" fill="#ff007f" opacity="0.6" />
            <circle cx="500" cy="500" r="3" fill="#ff007f" opacity="0.4" />
            <line x1="100" y1="100" x2="500" y2="500" stroke="#ff007f" strokeWidth="1" opacity="0.2" />
            <line x1="900" y1="150" x2="500" y2="500" stroke="#ff007f" strokeWidth="1" opacity="0.2" />
            <line x1="800" y1="800" x2="500" y2="500" stroke="#ff007f" strokeWidth="1" opacity="0.2" />
            <line x1="200" y1="900" x2="500" y2="500" stroke="#ff007f" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 lg:hidden opacity-20 pointer-events-none">
          <img
            src="/images/olia-hero.jpeg"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Date/Time Badge */}
              <div className="inline-block">
                <span className="font-body text-xs text-muted-foreground tracking-wide uppercase">
                  5 февраля • 18:00 (мск)
                </span>
              </div>

              {/* Free Badge */}
              <div className="inline-block">
                <div className="relative inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-primary bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm">
                  <span className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-wider uppercase font-black">
                    БЕСПЛАТНЫЙ ВЕБИНАР
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="font-display-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                  Что делать, чтобы <span className="text-primary">зарабатывать</span> и набирать <span className="text-primary">аудиторию</span>
                </h1>
                <p className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
                  в 2026
                </p>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-display-bold text-base px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
              >
                <a href="https://t.me/oliacodex_bot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 whitespace-nowrap">
                  ЗАРЕГИСТРИРОВАТЬСЯ
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
              </Button>
            </div>

            {/* Right Image - Desktop Only */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative">
                <img
                  src="/images/olia-hero.jpeg"
                  alt="Ольга"
                  className="w-full h-auto max-w-sm object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-8 sm:mb-12 uppercase">
            Что ты получишь на вебинаре?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 auto-rows-max">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 p-4 lg:p-6 rounded-lg bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-colors ${
                  idx === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-display-bold text-xs lg:text-sm text-black">{idx + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="font-body text-xs sm:text-sm lg:text-base text-foreground">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BONUSES SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-2 uppercase">
            Бонусы для участников
          </h2>
          <p className="text-center text-xs sm:text-sm text-primary mb-8 sm:mb-12">
            После регистрации ты сразу получишь:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {bonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 lg:p-6 rounded-lg bg-primary/10 border border-primary/30"
              >
                <Gift className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                <p className="font-body text-xs sm:text-sm lg:text-base text-foreground">{bonus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-8 sm:mb-12 uppercase">
            Отзывы учеников
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <img
                  src={testimonial}
                  alt={`Testimonial ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl p-6 sm:p-8 lg:p-12 border border-primary/30">
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight">
                НЕ УПУСТИ СВОЙ ШАНС!
              </h2>
              <p className="font-body text-sm sm:text-base lg:text-lg text-muted-foreground">
                5 февраля в 18:00 по московскому времени я проведу вебинар, где поделюсь стратегиями, которые помогли мне и моим ученикам зарабатывать с помощью нейросетей.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-display-bold text-base px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
              >
                <a href="https://t.me/oliacodex_bot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 whitespace-nowrap">
                  ЗАРЕГИСТРИРОВАТЬСЯ
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPEAKER SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl uppercase">
                Кто ведёт вебинар
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-display-bold text-xl sm:text-2xl lg:text-3xl text-primary">
                  Ольга | olia.codex
                </h3>
                <div className="space-y-2 font-body text-sm sm:text-base text-muted-foreground">
                  <p>✦ Создатель школы AI CODEX</p>
                  <p>✦ За месяц набрала 10 000 подписчиков исключительно на нейро-контенте</p>
                  <p>✦ Работает с нейросетями и контентом на практике и показывает, как использовать это для роста и заработка</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="/images/speaker-olia.jpg"
                  alt="Ольга"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-12 sm:mb-16 uppercase">
            Часто задаваемые вопросы
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <details className="group border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer bg-secondary/30 group-open:bg-secondary/50 transition-colors">
                <span className="font-display-bold text-base sm:text-lg text-white">Когда будет вебинар?</span>
                <span className="text-primary text-xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="p-4 sm:p-6 bg-black/50 border-t border-primary/20">
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Вебинар пройдет 5 февраля 2026 года в 18:00 (МСК). Ссылка на подключение будет отправлена всем зарегистрировавшимся участникам за 30 минут до начала.
                </p>
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer bg-secondary/30 group-open:bg-secondary/50 transition-colors">
                <span className="font-display-bold text-base sm:text-lg text-white">Сколько это будет длиться?</span>
                <span className="text-primary text-xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="p-4 sm:p-6 bg-black/50 border-t border-primary/20">
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Вебинар продлится примерно 60-90 минут. Это включает презентацию, ответы на вопросы и бонусный контент. Точное время будет известно ближе к дате.
                </p>
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer bg-secondary/30 group-open:bg-secondary/50 transition-colors">
                <span className="font-display-bold text-base sm:text-lg text-white">Будет ли запись вебинара?</span>
                <span className="text-primary text-xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="p-4 sm:p-6 bg-black/50 border-t border-primary/20">
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Да, запись будет доступна для всех зарегистрировавшихся участников в течение 7 дней после вебинара. Ссылка на запись будет отправлена на указанный при регистрации адрес.
                </p>
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer bg-secondary/30 group-open:bg-secondary/50 transition-colors">
                <span className="font-display-bold text-base sm:text-lg text-white">Нужно ли что-то подготавливать?</span>
                <span className="text-primary text-xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="p-4 sm:p-6 bg-black/50 border-t border-primary/20">
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Нет, специальной подготовки не требуется. Просто зарегистрируйтесь, получите ссылку и подключитесь в указанное время. Вебинар подходит как для новичков, так и для опытных.
                </p>
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer bg-secondary/30 group-open:bg-secondary/50 transition-colors">
                <span className="font-display-bold text-base sm:text-lg text-white">Это действительно бесплатно?</span>
                <span className="text-primary text-xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="p-4 sm:p-6 bg-black/50 border-t border-primary/20">
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Да, участие в вебинаре полностью бесплатно. Никаких скрытых платежей или обязательных покупок. Это возможность получить ценные знания от эксперта без каких-либо затрат.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ===== CTA BUTTON SECTION ===== */}
      <section className="relative py-8 sm:py-12 border-t border-primary/20">
        <div className="container mx-auto px-4 flex justify-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-black font-display-bold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg h-auto"
          >
            <a href="https://t.me/oliacodex_bot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 whitespace-nowrap">
              ЗАРЕГИСТРИРОВАТЬСЯ
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-8 sm:py-12 border-t border-primary/20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-2">
              <h3 className="font-display-bold text-lg sm:text-xl text-primary">AI CODEX</h3>
              <p className="font-body text-xs sm:text-sm text-muted-foreground">
                Школа нейросетей и нейро-контента
              </p>
            </div>

            {/* Contacts */}
            <div className="space-y-2">
              <h4 className="font-display-bold text-base sm:text-lg uppercase">Контакты</h4>
              <div className="space-y-1 font-body text-xs sm:text-sm text-muted-foreground">
                <p>Instagram: <a href="https://instagram.com/olia.codex" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@olia.codex</a></p>
                <p>Telegram: <a href="https://t.me/olia_codex" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@olia_codex</a></p>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-2">
              <h4 className="font-display-bold text-base sm:text-lg uppercase">Юридическая информация</h4>
              <div className="space-y-1 font-body text-xs sm:text-sm text-muted-foreground">
                <p>ИП КОДИНЦЕВА ОЛЬГА ДМИТРИЕВНА</p>
                <p>ИНН 667118064398</p>
                <p>ОГРНИП 322665800198411</p>
              </div>
            </div>
          </div>

          {/* Bottom Links and Copyright */}
          <div className="border-t border-primary/20 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <div className="flex flex-wrap gap-2 sm:gap-4 font-body text-xs sm:text-sm">
                <a href="https://disk.yandex.ru/i/xlpfh6YDYAuIig" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Политика конфиденциальности
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="https://disk.yandex.ru/i/HV-uoW9wA9ZIZA" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Публичная оферта
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="https://disk.yandex.ru/i/Q41RGOoSp1u5kw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Обработка данных
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="https://disk.yandex.ru/i/Q41RGOoSp1u5kw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Рассылка
                </a>
              </div>
            </div>
            <p className="font-body text-xs sm:text-sm text-muted-foreground">
              © AI CODEX. Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
