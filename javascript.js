const inputBox = document.getElementById('input-box');
const listCont = document.getElementById('list-container');

function addList() {
    if (inputBox.value === ''){
        alert ('Enter something!');
        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }

    inputBox.value = "";
    saveData();
}


// To check and Delete list
listCont.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData();
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// To save Data
function saveData(){
    localStorage.setItem('data', listCont.innerHTML);
}

// To show Data
function show(){
    listCont.innerHTML = localStorage.getItem('data')
}

show();