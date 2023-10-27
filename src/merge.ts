export function merge(collection_1: number[], collection_2: number[]): number[] {
    const result = [...collection_1, ...collection_2];
    return result.sort((a, b) => a - b);
}