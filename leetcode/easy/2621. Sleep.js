// https://leetcode.com/problems/sleep/

async function sleep(millis) {
    const p = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, millis);
    });

    return p;
}
