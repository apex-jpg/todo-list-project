const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");



function addTask(){
    //if no user input and tries to submit something
    if(inputBox.value == ''){
        alert("You have to write something!!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //so you can remove the added task once completed/if no longer relevant
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    //if button clicked has 'li' element, then change icon to checked icon
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    //if clicked on the cross icon, delete parent element of span, which is the task itself(li element)
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

displayData()