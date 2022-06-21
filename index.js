const slideContainer = document.getElementById('slide');
const slideItems = Array.from(document.querySelectorAll("#slide li"));
const left = document.getElementById('left');
const right = document.getElementById('right');
let current = 0;
function displayControl(arr) {
arr.forEach((value) => {
  let getDatasetValue = Number(value.dataset.slideItem);
  if (getDatasetValue === current) {
  value.style.display = "block";
  } else {
  value.style.display = "none";
  }
});
}
displayControl(slideItems);
function buttonEvent(eventTrigger, targetElement) {
eventTrigger.addEventListener('click', function () {
  if (eventTrigger === left) {
    current--;
    if (current < 0) {
      current = targetElement.length - 1;
    }
    displayControl(targetElement);
  }
  if (eventTrigger === right) {
    current++;
    if (current >= targetElement.length) {
      current = 0;
    }
    displayControl(targetElement);
  }
});
};

buttonEvent(left, slideItems);
buttonEvent(right, slideItems);

