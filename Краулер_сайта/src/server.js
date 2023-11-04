const express = require('express');
const { fetcher } = require('../fetcher.js');

//Создаем приложение, хардкодим порт, подключаем работу с json
const app = express();
const PORT = 3000;
app.use(express.json());

//Описываем ручку краулера
const siteCrawler = async (req, res) => {
    //Получаем корневой URL, в пределах которого буде работать
    const rootUrl = req.body.domainName;
    //Создадим set для проверки на уникальность и итогового результата
    const resultSet = new Set();
    //Так же создадим очередь с начальным корневым URL
    const queue = [rootUrl];
    //Создадим parser для html
    const parser = (html) => {
        //Парсим регуляркой и проверяем URL
        return [...html.matchAll(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"/g)]
            .map((match) => match[1])
            .filter((url) => url.startsWith(rootUrl));
    };

    //Запускаем цикл по условию наличия URL в очереди
    while (queue.length > 0) {
        //Забираем URL из очереди
        const urlFromQueue = queue.shift();

        //Проверяем уникальность URL
        if (resultSet.has(urlFromQueue)) continue;

        //Первый fetch
        let data = await fetcher(urlFromQueue);

        //Получаем статус и проверяем на 500 ошибку
        let status = data.status;
        if (status === 500) {
            //Refetch и новый статус в случаи 500 ошибки
            data = await fetcher(urlFromQueue);
            status = data.status;
        }
        //Проверяем итоговый статус и добавляем в set
        if (status !== 200) continue;
        else resultSet.add(urlFromQueue);

        //Забираем текст из fetch и прогоняем через parser
        const text = await data.text();
        const newUrls = parser(text);

        //Добавляем новые URL в очередь
        queue.push(...newUrls);
    }

    //Возвращаем по условию задачи string[]
    return res.json([...resultSet]);
};

//Добавляем ручку в приложение по условию задачи
app.post('/parse', siteCrawler);

//Запускаем приложение
const startServer = () => {
    try {
        app.listen(PORT, console.log(`Server started on ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};
startServer();
