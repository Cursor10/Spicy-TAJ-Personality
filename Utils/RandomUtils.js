/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function randomInteger(min, max) {
    if(min >= max) {
        return max;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWinnerIndex(array) {
    let maxChance = 0;
    for(let index = 0; index < array.length; index++) {
        maxChance += array[index];
    }

    const randomInt = randomInteger(0, maxChance);

    let currentChance = 0;

    for(let index = 0; index < array.length; index++) {
        currentChance += array[index];

        if(randomInt < currentChance) {
            return index;
        }
    }

    return -1;
}

/**
 * Shuffles array in place.
 * @param {Array} a items an array containing the items.
 */
function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function isChance(percentage) {
    return randomInteger(1, 100) <= percentage;
}

function random() {
    return arguments[randomInteger(0, arguments.length - 1)];
}