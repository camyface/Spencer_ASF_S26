const isPalindrome = require('../src/isPalindrome');

describe("Edge Cases", () => {
    test('returns true for an empty string', () => {
        expect(isPalindrome("")) .toBe(true);
    });

    test('returns true for a single character', () => {
        expect(isPalindrome("a")).toBe(true);
    });
});

describe("Palindrome Test Cases", () => {
    test('returns true for a palindrome', () => {
        expect(isPalindrome("bob")).toBe(true);
    });

    test('return true for a palindrome', () => {
        expect(isPalindrome("racecar")).toBe(true);
    });
});

describe("Edge Palindrome Test Cases", () => {
    test('return true for a palindrome with capital letters', () => {
        expect(isPalindrome("Bob")).toBe(true);
    });
    test('return true for a palindrome with spaces in between words', () => {
        expect(isPalindrome("Race car")).toBe(true);
    });
    test('return true with whitespace', () => {
        expect(isPalindrome("  Race car    ")).toBe(true);
    });
    test('return true for a palindrome with punctuation', () => {
        expect(isPalindrome("Racecar!")).toBe(true);
        expect(isPalindrome("Doc, note: I dissent. A fast never prevents a fatness. I diet on cod")).toBe(true);
    });

});

describe("Non-String inputs", () => {
    test('return false if input not a string', () => {
        expect(isPalindrome(121)).toBe(false);
        expect(isPalindrome(null)).toBe(false);
        expect(isPalindrome(true)).toBe(false);
    });
})