import { segmentNames } from "./model";
import { clampToLength } from "./utils";
export function transition(from: typeof segmentNames[number][][], to: typeof segmentNames[number][][], animateDisplay: typeof segmentBySegment & typeof layerByLayer, animateDisplayOptions: typeof animateDisplay extends typeof segmentBySegment ? {dense?: boolean} : never) {
    from = clampToLength(from, to.length);
    const displayFrames = from.map((startDisplayState, i) => {
        return animateDisplay(startDisplayState, to[i], animateDisplayOptions);
    });
    const maxFrames = Math.max(...displayFrames.map((f) => f.length));
    const frames = [];
    for (let i = 0; i < maxFrames; i += 1) {
        frames.push(displayFrames.map((frames) => frames[i] || frames.at(-1)));
    }
    return frames;
}
export function segmentBySegment(from: typeof segmentNames[number][], to: typeof segmentNames[number][], options: {dense?: boolean}) {
    const curState = new Set(from);
    const toState = new Set(to);
    const res = [[...curState]];
    for (const segmentName of segmentNames) {
        const changed = toState.has(segmentName) !== curState.has(segmentName);
        if (!changed && options?.dense) {
            continue;
        }
        if (toState.has(segmentName)) {
            curState.add(segmentName);
        }
        else {
            curState.delete(segmentName);
        }
        res.push([...curState]);
    }
    return res;
}
const layers = [
    ["a", "b", "c", "d", "e", "f"],
    ["h", "j", "k", "m"],
    ["i", "l", "g1", "g2"],
] as const;
export function layerByLayer(from: typeof segmentNames[number][], to: typeof segmentNames[number][]) {
    const curState = new Set(from);
    const toState = new Set(to);
    const res = [[...curState]];
    for (const layer of layers) {
        for (const segment of layer) {
            curState.add(segment);
        }
        res.push([...curState]);
    }
    for (let i = layers.length - 1; i >= 0; i -= 1) {
        for (const segment of layers[i]) {
            if (!toState.has(segment)) {
                curState.delete(segment);
            }
        }
        res.push([...curState]);
    }
    return res;
}
