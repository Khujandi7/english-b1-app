# Lingua B1 — Telegram Mini App

Ежедневное изучение английского уровня B1 в Telegram.
Stack: **React 18 + Vite + TypeScript + Tailwind + Supabase + Zustand**.
Vibe: Penguin Readers × Duolingo — серьёзная типографика + геймификация.

---

## 🗂️ Что внутри

- **8 экранов** — Home, Learn, Quiz, ScoreDashboard, Library, Reader, Vocabulary, Profile
- **5-балльная система оценок** с EWMA-сглаживанием по навыкам (grammar / vocabulary / reading / speaking / listening)
- **XP + streak + достижения** (8 ачивок из коробки)
- **Мини-библиотека** с 5 книгами B1 и ридером с tap-to-translate
- **Персональный словарь** (new → learning → mastered)
- **Telegram SDK** — haptics, BackButton, initData, тема

Работает и **без Supabase** — fallback на `localStorage`, удобно для превью на Vercel до настройки БД.

---

## 🚀 Быстрый старт

```bash
npm install
cp .env.example .env    # заполни VITE_SUPABASE_URL и VITE_SUPABASE_ANON_KEY
npm run dev             # http://localhost:5173
npm run build           # прод-сборка
npm run preview         # локально проверить билд
```

---

## 🤖 Telegram bot

1. Открой [@BotFather](https://t.me/BotFather), отправь `/newbot`, получи **BOT_TOKEN**
2. `/newapp` → выбери бота → название, описание, иконка, **Web App URL** (ссылка на Vercel-деплой)
3. Frontend ничего дополнительно делать не надо — `initTelegram()` в `src/services/telegram.ts` сам подхватит `window.Telegram.WebApp`
4. Для запуска из меню добавь кнопку: `/setmenubutton` → укажи URL Mini App

---

## 🗃️ Supabase

1. Создай проект на [supabase.com](https://supabase.com)
2. **SQL Editor** → открой `supabase/migrations/001_init.sql` → выполни
3. **Settings → API** → скопируй:
   - `Project URL` → `VITE_SUPABASE_URL`
   - `anon public` ключ → `VITE_SUPABASE_ANON_KEY`
4. ⚠️ Политики RLS по умолчанию **открыты** (MVP). Перед продом:
   - напиши Edge Function, которая валидирует [Telegram initData hash](https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app)
   - выпускай JWT для пользователя
   - замени `using (true)` на `using (auth.uid()::text = user_id)`

---

## ☁️ Deploy (Vercel)

```bash
npm i -g vercel
vercel
```

В настройках проекта Vercel добавь **Environment Variables**:

```
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

После деплоя скопируй URL и вставь в BotFather → `/setmenubutton`.

---

## 📁 Структура

```
src/
├── components/
│   ├── primitives.tsx        # Card, Badge, Progress, Button
│   ├── Header.tsx            # аватар + streak + уровень
│   ├── ProgressCard.tsx      # средний балл + XP + неделя
│   ├── LessonCard.tsx        # большая CTA "сегодняшний урок"
│   ├── QuickActionsGrid.tsx  # 2×2 быстрые ссылки
│   ├── BottomNav.tsx         # нижняя навигация
│   ├── QuizCard.tsx          # вопрос квиза с live feedback
│   ├── ResultModal.tsx       # экран результата
│   ├── BookCard.tsx          # обложка книги (Penguin-style)
│   ├── ScoreChart.tsx        # recharts — неделя
│   └── WordPopup.tsx         # bottom-sheet перевода
├── pages/
│   ├── Home.tsx
│   ├── Learn.tsx             # список + детали урока
│   ├── Quiz.tsx              # список + прохождение
│   ├── ScoreDashboard.tsx
│   ├── Library.tsx
│   ├── Reader.tsx            # ридер книги с tap-to-translate
│   ├── Vocabulary.tsx
│   └── Profile.tsx
├── services/
│   ├── telegram.ts           # initTelegram, haptic, BackButton
│   ├── supabase.ts           # клиент + graceful fallback
│   ├── api.ts                # CRUD поверх Supabase/localStorage
│   └── scoring.ts            # 5-балльная система, EWMA, XP
├── data/
│   ├── lessons.ts            # 3 урока B1
│   ├── quizzes.ts            # 3 квиза, 24 вопроса
│   ├── books.ts              # 5 мини-книг
│   └── achievements.ts       # 8 ачивок
├── store/
│   └── userStore.ts          # Zustand + persist
├── lib/
│   └── types.ts              # доменные типы
├── styles/
│   └── index.css             # tokens + компонентные классы
├── App.tsx                   # роутинг
└── main.tsx                  # entry
```

---

## 🎨 Design system

| Токен      | Значение                                         |
|------------|--------------------------------------------------|
| Base       | кремовый `#FBF7F0` (light) / `#0E1724` (dark)    |
| Primary    | индиго `#4F46E5`                                 |
| Accent     | терракота `#E85D3E` (книжный корешок)            |
| Success    | лайм `#BEF264`                                   |
| Streak/🔥  | `#F59E0B`                                        |
| Display    | **Fraunces** — переменная ось opsz/SOFT/WONK     |
| Body       | **Manrope**                                      |
| Mono       | **JetBrains Mono**                               |

«Pop» кнопки с нижней тенью и активным сдвигом в духе Duolingo.

---

## 🗺️ Roadmap

- [ ] Edge Function для валидации `initData` (безопасность)
- [ ] Spaced repetition (SM-2) для словаря
- [ ] Audio pronunciation через Supabase Storage
- [ ] Leaderboard между друзьями через Telegram `inline_query`
- [ ] Генерация уроков через Anthropic API
- [ ] Контент A2 и B2

---

Сделано с ☕ и 📚
