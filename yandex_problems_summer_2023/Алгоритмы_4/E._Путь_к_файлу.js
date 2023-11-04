const solution = (str) => {
    const countLvl = (str) => {
        let count = 0;
        for (const char of str) {
            if (char === ' ') count++;
            else return count;
        }
    };
    let [fileName, _, ...paths] = str.trim().split('\n');
    paths = paths.map((p) => [p.trim(), countLvl(p)]);

    const curr = [];
    for (const path of paths) {
        const diff = curr.length === 0 ? 1 : path[1] - curr.at(-1)[1];

        if (diff > 0) curr.push(path);
        else if (diff === 0) {
            curr.pop();
            curr.push(path);
        } else {
            for (let i = 0; i <= Math.abs(diff); i++) curr.pop();
            curr.push(path);
        }

        if (path[0] === fileName) return '/' + curr.map((v) => v[0]).join('/');
    }
};

function main() {
    console.log(
        solution(`1.avi
    12
    emoh
     vonavi
      a.doc
      b.doc 
     vortep
      .bashrc
     vorodis
      onrop
       1.avi
       2.avi 
    rav
     bil`)
    );
}
if (require.main === module) {
    main();
}
