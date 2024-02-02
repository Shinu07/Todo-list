const inputBox = document.querySelector("#task-input");
const listContainer = document.querySelector("#list-container");
const addBtn = document.querySelector(".add-btn");

//when its empty it give alert message else it execute task on list

const addTask = () => {
  const textInput = inputBox.value.trim();
  if (!textInput) {
    alert(`Enter your Todo Tasks`);
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
};

//if i click on li element it toggle(checked/uncheked) and if i click on span element it remove the whole list
listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// it save listcontainer data in local Storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//after reload  it show saved data in local storage, if it exist
function showTask() {
  const savedData = localStorage.getItem("data");
  if (savedData) {
    listContainer.innerHTML = savedData;
  }
}
showTask();

inputBox.addEventListener("keydown", handleKey);
addBtn.addEventListener("click", handleKey);

function handleKey(e) {
  if (e.type === "click" || e.key === "Enter") {
    addTask();
  }
}
