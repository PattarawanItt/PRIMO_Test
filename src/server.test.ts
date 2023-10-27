import { merge } from './merge';

describe('merge', () => {
    it('should merge and sort two arrays', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const merged = merge(collection1, collection2);
        expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
    });
});