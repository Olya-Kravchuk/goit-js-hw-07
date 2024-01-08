  const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');

  nameInput.addEventListener('input', function() {
    const inputValue = nameInput.value.trim();

    nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
  }
);

console.log(nameOutput.textContent);

