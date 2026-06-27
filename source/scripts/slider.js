const range = document.getElementById('sliderRange');
const leftImg = document.getElementById('leftImg');
const rightImg = document.getElementById('rightImg');
const sliderLine = document.getElementById('sliderLine');

function updateSlider(value) {
  const val = Number(value);
  sliderLine.style.left = `${val}%`;
  rightImg.style.clipPath = `polygon(${val}% 0, 100% 0, 100% 100%, ${val}% 100%)`;
  leftImg.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`;
}

range.addEventListener('input', (e) => {
  updateSlider(e.target.value);
});
