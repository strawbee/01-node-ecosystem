'use strict';

const arithmetic = require('../lib/arithmetic');

describe('Arithmetic Module', () => {
    describe('#Add', () => {
        it('should be invoked only with numerical arguments', () => {
            expect(arithmetic.add(1, 2)).toBe(3);
            expect(arithmetic.add(-5, 0)).toBe(-5);
            expect(arithmetic.add('a', 1)).toBeNull();
            expect(arithmetic.add(1, [2])).toBeNull();
            expect(arithmetic.add({'key': 1}, [4])).toBeNull();
            expect(arithmetic.add('', 3)).toBeNull();
            expect(arithmetic.add('5', '2')).toBeNull();
            expect(arithmetic.add(true, 0)).toBeNull();
        });
    });
    describe('#Subtract', () => {
        it('should be invoked only with numerical arguments', () => {
            expect(arithmetic.sub(1, 2)).toBe(-1);
            expect(arithmetic.sub(-5, 0)).toBe(-5);
            expect(arithmetic.sub('a', 1)).toBeNull();
            expect(arithmetic.sub(1, [2])).toBeNull();
            expect(arithmetic.sub({ 'key': 1 }, [4])).toBeNull();
            expect(arithmetic.sub('', 3)).toBeNull();
            expect(arithmetic.sub('5', '2')).toBeNull();
            expect(arithmetic.sub(true, 0)).toBeNull();
        });
    });
});