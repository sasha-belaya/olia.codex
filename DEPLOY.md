# Инструкция по обновлению сайта oliacodex.ru

## Шаг 1 — Загрузить на GitHub (локально)

```bash
# Перейти в папку проекта
cd olia.codex

# Инициализировать git (если ещё не сделано)
git init
git remote add origin https://github.com/sasha-belaya/olia.codex.git

# Добавить все файлы и сделать коммит
git add .
git commit -m "site update"

# Принудительно загрузить на GitHub (заменяет старую версию)
git push origin main --force
```

> Если ветка называется `master`, замените `main` на `master`.

---

## Шаг 2 — Обновить сайт на VDS сервере

Подключитесь к серверу по SSH и выполните:

```bash
# Разрешить git работать с папкой (нужно один раз)
git config --global --add safe.directory /home/iambillywhite/olia.codex

# Перейти в папку проекта
cd /home/iambillywhite/olia.codex

# Подтянуть последние изменения с GitHub
git fetch origin
git reset --hard origin/main

# Установить зависимости (если изменился package.json)
pnpm install

# Собрать проект
pnpm build
```

---

## Шаг 3 — Проверить что сайт обновился

```bash
# Проверить без браузера (должен вернуть текст с сайта)
curl -sk https://oliacodex.ru/ | grep -o "Нейрокреатор" | head -3
```

Если вернул `Нейрокреатор` — сайт обновлён.

Открыть в браузере в режиме **инкогнито** (Ctrl+Shift+N) или нажать **Ctrl+Shift+R** для жёсткого обновления.

---

## Nginx конфиг (уже настроен, не трогать)

Активный конфиг: `/etc/nginx/sites-available/oliacodex`  
Путь к файлам: `/home/iambillywhite/olia.codex/dist`  
Симлинк: `/etc/nginx/sites-enabled/oliacodex`

Если nginx нужно перезагрузить:
```bash
sudo nginx -t && sudo systemctl reload nginx
```

---

## Быстрая команда для обновления (всё в одном)

```bash
git config --global --add safe.directory /home/iambillywhite/olia.codex && \
cd /home/iambillywhite/olia.codex && \
git fetch origin && \
git reset --hard origin/main && \
pnpm install && \
pnpm build && \
echo "✓ Сайт обновлён"
```
