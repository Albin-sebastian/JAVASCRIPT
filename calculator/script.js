// select the display element
const display = document.getElementById('disp');
//select all button element
const buttons = document.querySelectorAll(".calculator_keys button");

//initilize the display value
let currValue = "";

//add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;

    //handle different button types
    switch (buttonText) {
      case 'AC':
        currValue = "";
        break;
      case 'DE':
        currValue = currValue.slice(0, -1);
        break;
      case "=":
        try {
          currValue += `${"="}` + eval(currValue);

        } catch (error) {
          currValue = 'Error';
        }
        break;
      default:
        currValue += buttonText;
    }
    display.textContent = currValue;
  })
});