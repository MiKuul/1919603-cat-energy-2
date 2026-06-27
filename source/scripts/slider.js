const range = document.getElementById('slider-range');
const leftImg = document.getElementById('left-img');
const rightImg = document.getElementById('right-img');
const sliderLine = document.getElementById('slider-line');

function updateSlider(value) {
  const val = Number(value);
  sliderLine.style.left = `${val}%`;
  rightImg.style.clipPath = `polygon(${val}% 0, 100% 0, 100% 100%, ${val}% 100%)`;
  leftImg.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`;
}

range.addEventListener('input', (e) => {
  updateSlider(e.target.value);
});
