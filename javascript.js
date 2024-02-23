const inputBox = document.getElementById('input-box');
const listCont = document.getElementById('list-container');

function addList() {
    if (inputBox.value === ''){
        alert ('Enter something!')
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
}

listCont.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
}, false);