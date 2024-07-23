const productImg = document.getElementById("productImg");
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    productImg.src = `./images/image${index + 1}.png`;
    buttons.forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");
  });
});