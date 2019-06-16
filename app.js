const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#unitSelect');

input.addEventListener('input', convertItems);

function convertItems () {
  let units = select.value;
  let num = input.value;

  if (isNaN(num)) {
    result.innerHTML = "Please enter a number";
    } else if (input.value === "") {
    result.innerHTML = "";
    } else {
      switch (units) {
        case "mile": result.innerHTML = (num*1.609).toFixed(2) + " km";
        break;

        case "foot": result.innerHTML = (num*0.3048).toFixed(2) + " m";
        break;

        case "pound": result.innerHTML = (num*0.4536).toFixed(3) + " kg";
        break;

        case "gallon": result.innerHTML = (num*3.785).toFixed(2) + " l";
        break;

        case "inch": result.innerHTML = (num*2.54).toFixed(2) + " cm";
        break;
    }
  }
}