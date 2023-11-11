const solution = (input) => {
    let [params, ...matrix] = input.trim().split('\n');
    const [N, S, F] = params.trim().split(' ').map(Number);
    matrix = [
        Array(N + 1).fill(0),
        ...matrix.map((row) => [0, ...row.trim().split(' ').map(Number)]),
    ];
    const visit = Array(N + 1).fill(false);
    const dist = Array(N + 1).fill(Infinity);
    const prev = [];
    prev[S] = -1;
    dist[S] = 0;

    while (true) {
        let minInd;
        let min = Infinity;

        //Ищем грань с минимальным расстоянием
        for (let i = 1; i < visit.length; i++) {
            const isVisit = visit[i];
            const d = dist[i];

            if (d < min && !isVisit) {
                min = d;
                minInd = i;
            }
        }

        //Помечаем найденную минимальную грань
        if (minInd) {
            visit[minInd] = true;
        } else {
            break;
        }

        //Проверяем не пришли ли в конечную точку
        if (minInd === F) {
            break;
        }

        //Прокладываем все новые пути
        for (let i = 1; i < matrix.length; i++) {
            const d = matrix[minInd][i];

            if (d + min < dist[i] && i !== minInd && d > -1) {
                dist[i] = d + min;
                prev[i] = minInd;
            }
        }
    }

    if (dist[F] === Infinity) {
        return -1;
    }

    const way = [F];

    //Восстанавливаем путь
    while (true) {
        if (prev[way[way.length - 1]] === -1) {
            break;
        }

        way.push(prev[way[way.length - 1]]);
    }

    return way.reverse().join(' ');
};

function main() {
    console.log(
        solution(`3 2 1
        0 1 1
        4 0 1
        2 1 0`)
    );
}
if (require.main === module) {
    main();
}
