# Magnet Fishing — сайт игры

Лэндинг игры «Магнитная рыбалка» (Roblox): английская версия в корне, русская — в `/ru/`.
Чистый HTML/CSS/JS, сборка не нужна — GitHub Pages публикует файлы как есть.

## Структура

```
index.html            английская страница (основная)
ru/index.html         русская страница
assets/css/style.css  стили
assets/js/main.js     меню, анимации, кнопка «Играть» на телефоне
assets/img/           арты, иконки, превью для соцсетей, скриншоты миров (zones/)
robots.txt, sitemap.xml, site.webmanifest, 404.html, .nojekyll
```

## Публикация на GitHub Pages

1. Зарегистрируйся на https://github.com (бесплатно).
2. Справа сверху «+» → **New repository**. Имя: `magnet-fishing`, тип **Public** → **Create repository**.
3. На странице репозитория нажми **uploading an existing file** и перетащи **всё содержимое** папки `website`
   (не саму папку, а файлы и папки внутри неё). Внизу нажми **Commit changes**.
   Файл `.nojekyll` скрытый — включи в проводнике показ скрытых файлов, чтобы перетащить и его.
4. **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main**, папка **/(root)** → **Save**.
5. Через 1–2 минуты сайт откроется по адресу `https://ИМЯ.github.io/magnet-fishing/`.

## Адрес сайта

Сайт настроен на адрес **https://nikitasyagaev.github.io/magnet-fishing/**
(аккаунт GitHub `nikitaSyagaev`, репозиторий `magnet-fishing`).
Если назовёшь репозиторий иначе, поменяй `magnet-fishing` в `index.html`, `ru/index.html`,
`robots.txt`, `sitemap.xml` и `404.html`.

## После публикации (поиск)

- Google Search Console: https://search.google.com/search-console — добавить сайт, подтвердить,
  отправить `sitemap.xml`.
- Яндекс Вебмастер: https://webmaster.yandex.ru — то же самое.
- Для аналитики (Яндекс Метрика / Google Analytics) код вставляется в `<head>` обеих страниц.
  Кнопки «Играть» уже размечены `data-cta`, клики по ним можно считать целями.
