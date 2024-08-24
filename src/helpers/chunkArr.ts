export function chunkArr(target: unknown[], chunk: number) {
    if (!target) return [];

    const res = [];
    let k: number = 0;

    while (k < target.length) {
        res.push(target.slice(k, k + chunk));
        k += chunk;
    }

    return res;
}
