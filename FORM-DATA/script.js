const form = document.getElementById("form");
const btn = document.getElementById("btn");

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  // console.log(formData);
  for (const keyValue of formData.entries()) {
    console.log(keyValue[0], ":", keyValue[1]);
  }
})
