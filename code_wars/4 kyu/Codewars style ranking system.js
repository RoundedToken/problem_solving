// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript

class User {
    ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    rank = this.ranks[0];
    progress = 0;

    incProgress(rank) {
        const diff = this.ranks.indexOf(rank) - this.ranks.indexOf(this.rank);
        if (!this.ranks.includes(rank)) throw new Error();
        else if (diff === 0) this.progress += 3;
        else if (diff === -1) this.progress += 1;
        else if (diff > 0) {
            this.progress += 10 * diff ** 2;
        }

        if (this.progress >= 100) {
            const extraProgress = Math.floor(this.progress / 100);
            this.rank = this.ranks[this.ranks.indexOf(this.rank) + extraProgress];
            this.progress -= extraProgress * 100;
        }
        if (this.rank === 8) this.progress = 0;
    }
}

function main() {
    const user = new User();
    user.incProgress(1);
    console.log(user.progress);
    console.log(user.rank);
}
if (require.main === module) {
    main();
}
