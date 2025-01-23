const telegramBot = require(`node-telegram-bot-api`);

const token = '7796792998:AAH1ZbTJOwUZmEC379e0JDdenHGW3HptA98';

// инициализация бота с указанным ботом и включает режим polling.
// polling - процесс, при котором бот постоянно проверяет сервер telegram на наличие новых сообщений
const bot = new telegramBot(token, {polling: true});

const words = [
    'яблоко', 'самолет', 'компьютер', 'рыба', 'стол', 'телефон', 'машина', 'дом',
    'солнце', 'звезда', 'дерево', 'цветок', 'река', 'кошка', 'собака', 'шоколад'
];

// Приветствие
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Напиши /word, чтобы получить случайное слово!');
});

bot.onText(/\/word/, (msg) => {
    const chatId = msg.chat.id;
    const randomIndex = Math.floor(Math.random() * words.length);

    const word = words[randomIndex]
    bot.sendMessage(chatId, `Ваше слово: ${word}`);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (!msg.text.startsWith('/')) bot.sendMessage(chatId, 'Я не понял вашу команду. Напишите /word, чтобы получить слово для игры.');
})