//Accessing DOM elements
const input = document.querySelector('.input');
const result = document.querySelector('.result');
const select = document.querySelector('.unitSelect');
const toggleBtn = document.querySelector('.toggleBtn');
const options = document.querySelectorAll('option');
const header = document.querySelector('.header');

// Event Listeners
toggleBtn.addEventListener('click', toggleUnits);

select.addEventListener('change', clear);

input.addEventListener('input', convertUnits);

// Switch Units Systems
function toggleUnits() {
  // toggle select options
  options.forEach(option => {
    if (option.classList.contains('off')) {
      option.classList.remove('off');
      option.classList.add('on');
    } else {
      option.classList.remove('on');
      option.classList.add('off');
    }
  });

  // change the view
  let active = document.querySelectorAll('.on');
  active[0].selected = true;
  header.innerHTML === 'Convert US units to metric' ? header.innerHTML = 'Convert metric to US units' : header.innerHTML = 'Convert US units to metric';
  toggleBtn.innerHTML === 'Metric to US' ? toggleBtn.innerHTML = 'US to metric' : toggleBtn.innerHTML = "Metric to US";
  clear();
}

function clear() {
  // clear input and output
  input.value = '';
  result.innerHTML = '';
}

// Convertion Functionality
function convertUnits() {
  let units = select.value;
  let num = input.value;

  if (isNaN(num)) {
    result.innerHTML = "Please enter a number";
  } else if (input.value === "") {
    result.innerHTML = "";
  } else {
    switch (units) {
      case "mile": result.innerHTML = (num * 1.609).toFixed(2) + " km";
        break;

      case "foot": result.innerHTML = (num * 0.3048).toFixed(2) + " m";
        break;

      case "pound": result.innerHTML = (num * 0.4536).toFixed(3) + " kg";
        break;

      case "gallon": result.innerHTML = (num * 3.785).toFixed(2) + " l";
        break;

      case "inch": result.innerHTML = (num * 2.54).toFixed(2) + " cm";
        break;

      case "km": result.innerHTML = (num * 0.6214).toFixed(2) + " mi";
        break;

      case "m": result.innerHTML = (num * 3.28084).toFixed(2) + " ft";
        break;

      case "kg": result.innerHTML = (num * 2.20462).toFixed(3) + " lbs";
        break;

      case "liter": result.innerHTML = (num * 0.264172).toFixed(2) + " gal";
        break;

      case "cm": result.innerHTML = (num * 0.3937).toFixed(2) + " in";
        break;
    }
  }
}