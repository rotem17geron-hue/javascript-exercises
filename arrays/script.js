function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}



function sumOfTripledEvensNew(array) {
    function isEven(num) {
        return num % 2 === 0;
    }
    const evens = array.filter(isEven);
    const tripledEvens = evens.map((num) => num * 3);
    const sum = tripledEvens.reduce((total, currentItem) => {
        return total + currentItem;})
    return sum;
}

const arr = [1, 2, 3, 4];
console.log(sumOfTripledEvens(arr));
console.log(sumOfTripledEvensNew(arr));