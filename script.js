function createArrayIterator(array) {
    let currentIndex = 0;

    return function () {
        if (currentIndex < array.length) {
            console.log(array[currentIndex]);
            currentIndex++;
        } else {
            console.log("End of the array reached.");
            // If you want to reset the iterator, uncomment the following line:
            // currentIndex = 0;
        }
    };
}

// Example usage:
const iterateArray = createArrayIterator([1, 2, 3, 4, 5]);