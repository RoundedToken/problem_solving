'use strict';

((global) => {
    const addTimeout = (fn) => {
        return () => {
            setTimeout(() => {
                fn();
            }, 100 * Math.random());
        };
    };

    const addRandomError = (fn, result) => {
        return () => {
            const isError = Math.random() <= 0.2;

            if (isError) {
                fn(new Error('Something went wrong'), null);
            } else {
                fn(null, result);
            }
        };
    };

    const getModifiedCallback = (fn, result) => {
        return addTimeout(addRandomError(fn, result));
    };

    class Entity {
        constructor(name, isActive) {
            this.getName = (callback) => {
                getModifiedCallback(callback, name)();
            };

            this.checkIsActive = (callback) => {
                getModifiedCallback(callback, isActive)();
            };
        }
    }

    class Category extends Entity {
        constructor(name, status, children) {
            super(name, status);

            this.getChildren = (callback) => {
                getModifiedCallback(callback, children)();
            };
        }
    }

    class Product extends Entity {
        constructor(name, status, price) {
            super(name, status);

            this.getPrice = (callback) => {
                getModifiedCallback(callback, price)();
            };
        }
    }

    global.Product = Product;
    global.Category = Category;
})(typeof window === 'undefined' ? global : window);

// решение задачи
async function solution({ minPrice, maxPrice, catalog }) {
    //Создадим результирующий массив
    const result = [];
    //Создадим массив асинхронных задач
    const asyncTasks = [catalog];
    //Создадим свою функцию промисификации с бесконечным лупом для отлова ошибки
    const promisification = async (fn) => {
        while (true) {
            try {
                return await new Promise((resolve, reject) =>
                    fn((error, res) => (error === null ? resolve(res) : reject(error)))
                );
            } catch (error) {}
        }
    };

    //Запускаем цикл по условию наличия задач
    while (asyncTasks.length > 0) {
        //Параллельно запускаем методы у задач, продумывая порядок и дальнейший парсинг, учитывая тип
        const responseStack = await Promise.all(
            asyncTasks.reduce((arr, obj) => {
                if (obj instanceof Category) {
                    arr.push(
                        'Category',
                        promisification(obj.checkIsActive),
                        promisification(obj.getChildren)
                    );
                    return arr;
                } else {
                    arr.push(
                        'Product',
                        promisification(obj.checkIsActive),
                        promisification(obj.getName),
                        promisification(obj.getPrice)
                    );
                    return arr;
                }
            }, [])
        );

        //Обнуляем массив задач перед новым заполнением
        asyncTasks.length = 0;

        //Индекс в этом цикле нужно увеличивать на величину, зависящую от типа
        for (let ind = 0; ind < responseStack.length; ) {
            const type = responseStack[ind];
            const isActive = responseStack[ind + 1];

            //Проверяем какой тип
            if (type === 'Category') {
                const children = responseStack[ind + 2];

                //Добавляем новые задачи
                if (isActive) asyncTasks.push(...children);

                //Не забываем двигать индекс
                ind += 3;
            } else {
                const price = responseStack[ind + 3];
                const name = responseStack[ind + 2];

                //По условию добавляем в результат продукт
                if (isActive && price >= minPrice && price <= maxPrice)
                    result.push({ name, price });

                //Не забываем двигать индекс
                ind += 4;
            }
        }
    }

    //Возвращаем результат, отсортированный по условию
    return result.sort((a, b) => {
        const diff = a.price - b.price;
        return diff === 0 ? a.name.localeCompare(b.name) : diff;
    });
}

module.exports = solution;

// проверка решения
const input = {
    minPrice: 300,
    maxPrice: 1500,
    catalog: new Category('Catalog', true, [
        new Category('Electronics', true, [
            new Category('Smartphones', true, [
                new Product('Smartphone 1', true, 1000),
                new Product('Smartphone 2', true, 900),
                new Product('Smartphone 3', false, 900),
                new Product('Smartphone 4', true, 900),
                new Product('Smartphone 5', true, 900),
            ]),
            new Category('Laptops', true, [
                new Product('Laptop 1', false, 1200),
                new Product('Laptop 2', true, 900),
                new Product('Laptop 3', true, 1500),
                new Product('Laptop 4', true, 1600),
            ]),
        ]),
        new Category('Books', true, [
            new Category('Fiction', false, [
                new Product('Fiction book 1', true, 350),
                new Product('Fiction book 2', false, 400),
            ]),
            new Category('Non-Fiction', true, [
                new Product('Non-Fiction book 1', true, 250),
                new Product('Non-Fiction book 2', true, 300),
                new Product('Non-Fiction book 3', true, 400),
            ]),
        ]),
    ]),
};

const answer = [
    { name: 'Non-Fiction book 2', price: 300 },
    { name: 'Non-Fiction book 3', price: 400 },
    { name: 'Laptop 2', price: 900 },
    { name: 'Smartphone 2', price: 900 },
    { name: 'Smartphone 4', price: 900 },
    { name: 'Smartphone 5', price: 900 },
    { name: 'Smartphone 1', price: 1000 },
    { name: 'Laptop 3', price: 1500 },
];

solution(input).then((result) => {
    const isAnswerCorrect = JSON.stringify(answer) === JSON.stringify(result);
    console.log(result);

    if (isAnswerCorrect) {
        console.log('OK');
    } else {
        console.log('WRONG');
    }
});
