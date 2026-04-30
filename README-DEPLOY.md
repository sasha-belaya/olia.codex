# Инструкция по загрузке на GitHub

## Быстрая загрузка в репозиторий olia.codex

### Шаг 1: Клонируйте репозиторий

```bash
git clone https://github.com/ВАШ-USERNAME/olia.codex.git
cd olia.codex
```

**Замените `ВАШ-USERNAME` на ваше имя пользователя GitHub!**

---

### Шаг 2: Создайте резервную копию (опционально)

```bash
git checkout -b backup-old
git push origin backup-old
git checkout main
```

Это сохранит старую версию в отдельной ветке.

---

### Шаг 3: Удалите старые файлы

**Windows (PowerShell):**
```powershell
Get-ChildItem -Exclude .git,README.md | Remove-Item -Recurse -Force
```

**macOS/Linux:**
```bash
find . -maxdepth 1 ! -name '.git' ! -name 'README.md' ! -name '.' -exec rm -rf {} +
```

---

### Шаг 4: Распакуйте новые файлы

1. Распакуйте архив `ai-creator-landing.zip` в папку репозитория
2. Все файлы должны быть в корне (не в подпапке!)

Структура должна выглядеть так:
```
olia.codex/
├── .git/
├── client/
├── package.json
├── vite.config.ts
└── ...
```

---

### Шаг 5: Установите зависимости

**Если используете npm:**
```bash
npm install
```

**Если используете pnpm (рекомендуется):**
```bash
pnpm install
```

**Если pnpm не установлен:**
```bash
npm install -g pnpm
pnpm install
```

---

### Шаг 6: Проверьте локально

```bash
# npm
npm run dev

# pnpm
pnpm dev
```

Откройте http://localhost:3000 в браузере и проверьте сайт.

---

### Шаг 7: Закоммитьте изменения

```bash
git add .
git commit -m "Update AI-CREATOR landing page"
```

---

### Шаг 8: Отправьте на GitHub

```bash
git push origin main
```

Если попросит ввести логин/пароль, используйте Personal Access Token вместо пароля.

---

## Автоматический деплой

### GitHub Pages
1. Зайдите в Settings → Pages
2. Source: Deploy from a branch
3. Branch: main, папка: / (root)
4. Сайт будет доступен через 1-5 минут

### Vercel
1. Импортируйте репозиторий в Vercel
2. Framework Preset: Vite
3. Build Command: `pnpm build` или `npm run build`
4. Output Directory: `dist`
5. Деплой произойдёт автоматически

### Netlify
1. Импортируйте репозиторий в Netlify
2. Build command: `pnpm build` или `npm run build`
3. Publish directory: `dist`
4. Деплой произойдёт автоматически

---

## Важно перед деплоем!

### 1. Замените Telegram Bot Token

Откройте `client/src/pages/Home.tsx` и найдите строку:

```javascript
const response = await fetch(`https://api.telegram.org/bot8544567019:AAF1O2LgPY_HT3kBn8GzUX0DfLC--aYBk5c/sendMessage`, {
```

Замените токен на свой:
1. Откройте @BotFather в Telegram
2. Создайте нового бота командой `/newbot`
3. Скопируйте токен
4. Вставьте в код

### 2. Узнайте свой Chat ID

1. Откройте @userinfobot в Telegram
2. Отправьте любое сообщение
3. Скопируйте ваш ID
4. Замените `chat_id: '48350436'` на ваш ID в `client/src/pages/Home.tsx`

### 3. Замените ссылки на оплату

В `client/src/pages/Home.tsx` найдите массив `tariffs` и замените:

```javascript
link: "https://t.me/olya_kodeks"
```

на реальные ссылки на платёжные страницы (Stripe, Robokassa, ЮKassa и т.д.)

---

## Проблемы и решения

### "git: command not found"
Установите Git: https://git-scm.com/downloads

### "pnpm: command not found"
```bash
npm install -g pnpm
```

### Ошибки при установке зависимостей
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Сайт не обновляется после деплоя
1. Очистите кэш браузера (Ctrl+Shift+R)
2. Подождите 5-10 минут
3. Проверьте логи деплоя на хостинге

---

## Контакты

Если возникли проблемы, создайте Issue в репозитории.
