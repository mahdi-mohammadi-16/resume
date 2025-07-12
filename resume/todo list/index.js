const buttonAdd = document.getElementById("button-add");

const themeBut = document.getElementById("toggle-theme")

themeBut.addEventListener("click" , ()=>{
  document.body.classList.toggle('dark-theme')
})


buttonAdd.addEventListener('click', () => {
  const ul = document.getElementById("ul");
  const div = document.createElement("div");
  const newP = document.createElement("p");
  const newLi = document.createElement("li");
  const newCk = document.createElement("input");
  const button = document.createElement("button");
  const valueInput = document.getElementById("input").value.trim();

  if (valueInput === "") {
    alert('The field is empty.');
    return;
  }

  newP.textContent = valueInput;
  newCk.type = "checkbox";
  newCk.classList = 'ui-checkbox';

  newLi.classList.add("animate__animated");

  button.classList.add("delete-btn");
  div.appendChild(button);
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M 10.8 2 C 10.29 2 9.8 2.2 9.43 2.57 L 9 3 H 4 A 1 1 0 1 0 4 5 H 20 A 1 1 0 1 0 20 3 H 15 L 14.57 2.57 C 14.2 2.2 13.71 2 13.19 2 H 10.8 Z M 4.36 7 L 5.89 20.26 C 6.02 21.25 6.88 22 7.88 22 H 16.12 C 17.12 22 17.97 21.25 18.11 20.26 L 19.63 7 H 4.36 Z"/></svg>`;

  div.appendChild(newCk);
  newLi.appendChild(newP);
  newLi.appendChild(div);
  ul.appendChild(newLi);

  requestAnimationFrame(() => {
    newLi.classList.add("animate__fadeIn");
  });

  input.value = "";
  input.focus();

  // دکمه حذف
  button.onclick = () => {
    newLi.classList.remove("animate__fadeIn");
    newLi.classList.add("animate__fadeOut");
    setTimeout(() => ul.removeChild(newLi), 500); // حذف با تاخیر
  };
});
const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.remove(); // فقط همون li که دکمه داخلشه حذف می‌شه
  });
});