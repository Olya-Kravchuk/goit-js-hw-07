function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
  
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = '';

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);

    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', function() {

  const input = document.querySelector('input');
  const amount = Number(input.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  createBoxes(amount);
  input.value = '';
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
  
