const numberInput = document.getElementById('number-input');
const output = document.getElementById('output');

numberInput.addEventListener('input', () => {
  const inputNumber = parseInt(numberInput.value);

  if (inputNumber < 0) {
    output.innerText = 'Enter a positive value';
  } else if (inputNumber % 2 === 0) {
    const evenNumbers = [inputNumber + 2, inputNumber + 4, inputNumber + 6];
    output.innerText = `Next 3 even numbers: ${evenNumbers.join(', ')}`;
  } else {
    const oddNumbers = [inputNumber + 2, inputNumber + 4, inputNumber + 6];
    output.innerText = `Next 3 odd numbers: ${oddNumbers.join(', ')}`;
  }
});
