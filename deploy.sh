#!/bin/bash

# Скрипт для развертывания сайта oliacodex.ru на VDS сервере
# Использование: ./deploy.sh

set -e  # Остановить выполнение при ошибке

echo "=== Развертывание сайта oliacodex.ru ==="
echo ""

# Проверка наличия собранных файлов
if [ ! -d "dist" ]; then
    echo "Ошибка: Папка dist не найдена. Сначала выполните: pnpm build"
    exit 1
fi

if [ ! -d "veb/dist/public" ]; then
    echo "Ошибка: Папка veb/dist/public не найдена. Сначала выполните: cd veb && pnpm build"
    exit 1
fi

# Целевая директория
TARGET_DIR="/var/www/oliacodex.ru"

echo "1. Создание резервной копии..."
if [ -d "$TARGET_DIR" ]; then
    BACKUP_DIR="/root/backup-oliacodex-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$BACKUP_DIR"
    cp -r "$TARGET_DIR"/* "$BACKUP_DIR/" 2>/dev/null || true
    echo "   Резервная копия создана: $BACKUP_DIR"
fi

echo ""
echo "2. Очистка целевой директории..."
rm -rf "$TARGET_DIR"/*

echo ""
echo "3. Копирование основного сайта..."
cp -r dist/* "$TARGET_DIR/"

echo ""
echo "4. Копирование проекта /veb..."
mkdir -p "$TARGET_DIR/veb"
cp -r veb/dist/public/* "$TARGET_DIR/veb/"

echo ""
echo "5. Исправление путей в /veb/index.html..."
cd "$TARGET_DIR/veb"
sed -i 's|src="/assets/|src="/veb/assets/|g' index.html
sed -i 's|href="/assets/|href="/veb/assets/|g' index.html
sed -i 's|src="/__manus__|src="/veb/__manus__|g' index.html
cd -

echo ""
echo "6. Установка прав доступа..."
chown -R www-data:www-data "$TARGET_DIR"
chmod -R 755 "$TARGET_DIR"

echo ""
echo "7. Перезапуск Nginx..."
systemctl reload nginx

echo ""
echo "=== Развертывание завершено успешно! ==="
echo ""
echo "Проверьте сайт:"
echo "  - Основной сайт: https://oliacodex.ru"
echo "  - Проект /veb:   https://oliacodex.ru/veb"
echo ""
