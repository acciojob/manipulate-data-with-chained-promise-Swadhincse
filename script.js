//your JS code here. If required.
function manipulateArray(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
  .then(numbers => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    return evenNumbers;
  })
  .then(evenNumbers => {
    const doubledNumbers = evenNumbers.map(num => num * 2);
    return doubledNumbers;
  })
  .then(finalNumbers => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = finalNumbers.join(", ");
  })
  .catch(error => {
    console.log(error);
  });
}

