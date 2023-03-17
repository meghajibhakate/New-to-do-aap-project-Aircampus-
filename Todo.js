
let inputField = document.getElementById("myInput");
let addBtn = document.getElementById("addToDo");
let container = document.getElementById("todoBox");
let mainbody = document.getElementById("mainbody");
let CompleteBox = document.getElementById("footer");



let complete = document.getElementById("CompleteBox");

addBtn.addEventListener('click', getElement)

var paragraph;
function getElement() {

    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    if (paragraph.innerText === "") {
        alert("Please add your task")
    return
    }
    container.appendChild(paragraph);
    mainbody.style.display = 'block'
    clear();

    paragraph.addEventListener('dblclick', dblclick_function)


    function dblclick_function() {
        complete.appendChild(paragraph);
        CompleteBox.style.display = 'block'
    }

    paragraph.addEventListener('click', click_function);
    function click_function() {
        console.log("ppppp" + paragraph)
        complete.removeChild(paragraph)
    } 
}




// // clear function------------------------
function clear() {
    output = document.getElementById("myInput").value = "";
}


// //In progress button Delete function-------------------------------------
function In_Prodelbutton() {
    var x = document.getElementById("todoBox").innerHTML = "";
    mainbody.style.display = 'none'
}


// // complete task Delete function-------------------------------------
function delbutton() {
    var y = document.getElementById("CompleteBox").innerHTML = "";
    CompleteBox.style.display = 'none'
}

