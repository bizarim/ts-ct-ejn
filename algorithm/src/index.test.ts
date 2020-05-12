import solution from './index';


describe('Pocketmon GO', () => {

    test('Expected 0', () => {
        expect(solution(3, 9)).toBe(0);
    });

    test('Expected 500', () => {
        expect(solution(1, 23)).toBe(500);
    });

    test('Expected 1500', () => {
        expect(solution(5, 36)).toBe(1500);
    });

    test('Expected 6500', () => {
        expect(solution(13, 144)).toBe(6500);
    });
});