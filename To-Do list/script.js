const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
  const inputValue = inputBox.value.trim();
  if (!inputValue) {
    alert('please enter a task');
  }
  const li = document.createElement('li');
  li.textContent = inputValue;
  const span = document.createElement("span");
  span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  li.appendChild(span);
  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
});
listContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "LI") {
    target.classList.toggle("checked");
    saveData();
  }
  else if (target.tagName === "I") {
    target.parentNode.parentNode.remove(); // remove the LI element
    saveData();
  }
  // else if (target.closest("span")) {
  //   target.closest("li").remove();
  // }
});

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML)
}
const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();