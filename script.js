let createInput = document.querySelector(".input-box")
let createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".box")


function showNotes(){
    createInput.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", createInput.innerHTML)
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img")
    inputBox.className = "box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "/image/delete.png";
    createInput.appendChild(inputBox).appendChild(img);
})

createInput.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

