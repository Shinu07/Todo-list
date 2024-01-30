const inputBox = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");
function addTask(){
    if (inputBox.value === ''){
        alert('write your task')
    }else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
},false);

function saveData(params) {
    localStorage.setItem('data',listContainer.innerHTML)
}