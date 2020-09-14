export const validator = (pattern, text) => {
    return new RegExp(pattern).test(text);
}
