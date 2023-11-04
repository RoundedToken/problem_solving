export function clampToLength(state, length) {
    return state
        .concat(emptyDisplays(Math.max(0, length - state.length)))
        .slice(0, length);
}
export function emptyDisplays(amount) {
    return Array.from({ length: amount }, () => []);
}
