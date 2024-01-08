function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

  document.addEventListener('DOMContentLoaded', function () {
    const bodyElement = document.body;
    const colorSpan = document.querySelector('.color');
    const changeColorButton = document.querySelector('.change-color');

  changeColorButton.addEventListener('click', function () {
    const randomColor = getRandomHexColor();
        
    bodyElement.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  });

  function hexToRgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
});