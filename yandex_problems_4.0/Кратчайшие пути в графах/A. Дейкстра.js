const solution = (input) => {
    let [params, ...matrix] = input.trim().split('\n');
    const [N, S, F] = params.trim().split(' ').map(Number);
    matrix = [
        Array(N + 1).fill(0),
        ...matrix.map((row) => [0, ...row.trim().split(' ').map(Number)]),
    ];
    const visit = Array(N + 1).fill(false);
    const dist = Array(N + 1).fill(Infinity);
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
            }
        }
    }

    return dist[F] === Infinity ? -1 : dist[F];
};

function main() {
    console.log(
        solution(`6 2 6
        0 -1 1 -1 -1 -1
        1 0 -1 4 2 -1
        -1 -1 0 1 -1 -1
        -1 -1 -1 0 -1 2
        -1 -1 -1 -1 0 4
        -1 -1 -1 -1 -1 0`)
    );
}
if (require.main === module) {
    main();
}
