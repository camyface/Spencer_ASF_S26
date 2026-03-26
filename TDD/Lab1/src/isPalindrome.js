function isPalindrome(input) {
    if (typeof input !== "string") return false;
    if (input.trim() === "") return true;

    if (input.length === 1) return true;
    let normalInput = input.replace(/[^a-zA-Z0-9\s]/g, "");

    normalInput = normalInput.trim().toLowerCase().split(/\s+/);
    let testInput = "";
    for (let h = 0; h < normalInput.length; h++) {
        testInput = testInput + normalInput[h];
    }

    let temp = "";
        for (let i = testInput.length - 1; i >= 0; i--) {
            temp = temp + testInput.charAt(i);
        }

    return temp === testInput;
}

module.exports = isPalindrome;