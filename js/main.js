let inputBox = document.getElementById("input-box");
let listContent = document.getElementById("list-content");

function addTask () {
    if(inputBox.value === ''){
        alert("You must type task !");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContent.appendChild(li);
        let closeSpan = document.createElement("span");
        closeSpan.innerHTML = "\u00d7";
        li.appendChild(closeSpan);
    }

    inputBox.value = '';
    saveData();
};

function deleteAll(){
    localStorage.clear();
    showTask();
};

listContent.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContent.innerHTML);
}

function showTask() {
    listContent.innerHTML = localStorage.getItem("data");
}
showTask();

let modeIcon = document.getElementById('modeicon')
        modeIcon.addEventListener("click", ()=>{
            document.body.classList.toggle("darkmode");
            if(document.body.classList.contains("darkmode")){
                modeIcon.className = "fas fa-moon";
            }else{
                modeIcon.className = "fas fa-sun";
            }
        })