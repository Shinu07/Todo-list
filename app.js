const inputBox = document.querySelector("#task-input");
const listContainer = document.querySelector("#list-container");
const addBtn = document.querySelector(".add-btn");

//when its empty it give alert message else it execute task on list

const addTask=()=>{
    if(inputBox.value === ''){
        alert(`Enter your Todo Tasks`)
    }else{
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerText = '\u00d7';
        li.appendChild(span);
    }

    inputBox.value = '';
}

//if i click on li element it toggle(checked/uncheked) and if i click on span it remove the whole list
listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }

},false)

function saveData(params) {
    localStorage.setItem('data',listContainer.innerHTML)
}

inputBox.addEventListener("keydown", handleKey);
addBtn.addEventListener("click", handleKey);

function handleKey(e) {
    if (e.type === "click" || e.key === "Enter") {
        // e.preventDefault(); // Prevents the default behavior of the Enter key (form submission)
        addTask();
    }
}