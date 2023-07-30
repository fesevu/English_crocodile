# English_crocodile
Курсовая работа по курсу разработка клиент-серверных приложений. Финальная версия выгружена в SmartMarket от Sber. Приложение работает на устройстве SberBox под названием "Английский крокодил". Опубликованно 14.06.2023

## Описание приложения "Слова для Крокодила"
"Английский крокодил" - новый взгляд на игру для компании крокодил (возрастная маркировка 16+). Правила игры соответвуют оригинальным правилам игры крокодил, но с тем отличием, что слова для игркоов выбираются случайны образом из списка, в котором только английские слова. Игра совмещает полезное с приятным, благодаря инновационным функциям и интерактивному игровому процессу, игроки могут научиться новым словам, развить свою лексику и улучшить навыки общения на английском языке, и все это в увлекательной и захватывающей игровой форме. 

Игра разработана специально для семейства голосовых помощников "Салют"

Для более детального ознакомления с смартапом перейдите по [ссылке](https://apps.sber.ru/salute-apps/45f102ab-d2b2-4f39-8be3-b59ffe0803dc/)

## Инструкция по использованию
Игра "Английский крокодил" проста и легка в использовании. Вы должны объяснить слово, используя жесты, мимику и другие способы, не используя слова и звуки, которые напоминают это слово. Другие пользователи должны угадать, что вы объясняете.

## Статистика на момент публикции кода в GitHub

![image](https://github.com/fesevu/English_crocodile/assets/105602239/56d2ecdf-1c6d-495f-91b3-50cea9b5beba)

![image](https://github.com/fesevu/English_crocodile/assets/105602239/52c0e878-1f74-4ee1-ae80-0c532636b04b)

## Стэк технологий

В приложении "Слова для Крокодила" используются следующие технологии:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - язык программирования, который используется для разработки приложения;
- [TypeScript](https://www.typescriptlang.org/docs/) - язык программирования, который используется для разработки приложения; 
- [Dialute](https://github.com/Dikower/Dialute) - библиотека для создания интерфейсов на языке JavaScript;
- [Svelte](https://svelte.dev/docs) - фреймворк для создания пользовательских интерфейсов;
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) и [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - языки разметки и стилей, которые используются для создания веб-страниц.
- [SmartMarket](https://developers.sber.ru/docs/) - документация для разработки смартапов для ассистентов "Салют"

## Установка и локальный запуск

1. Клонируйте репозиторий на свой компьютер.
2. Установите Dialute с помощью команды `npm install -g dialute`.
3. Установите пакет с виртуальными ассистентами "Салют" с помощью команды `npm install @sberdevices/assistant-client`.
4. Установите себе клиент [ngrok](https://ngrok.com).
6. Перейдите в папку `app` и напишите `npm run dev`
   ```
   cd app
   npm run dev
      ```
6. Перейдите в папку `hook` и напишите `npm run dev`
   ```
   cd hook
   npm run dev
   ```
 7. Запустите сервер ngrok на 8000 порту командой `./ngrok http 8000`
 8. Перейдите по полученной ссылке!
