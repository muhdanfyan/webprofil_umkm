import { describe, it, expect } from 'vitest';

describe('Example Test', () => {
    it('should pass', () => {
        expect(1 + 1).toBe(2);
    });

    it('should be able to test logic', () => {
        const calculateTotal = (a, b) => a + b;
        expect(calculateTotal(10, 20)).toBe(30);
    });
});
