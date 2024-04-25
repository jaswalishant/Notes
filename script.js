let create=document.querySelector(".create");
let notes=document.querySelector(".notes");

show=()=>{
    notes.innerHTML=localStorage.getItem("notes");
}

show();

save=()=>{
    localStorage.setItem("notes" , notes.innerHTML);
}

createNotes=()=>{
    let p=document.createElement("p");
    let img=document.createElement("img");
    p.setAttribute("contenteditable", "true");
    p.className="input_box";
    img.src="images/images.jfif";
    notes.appendChild(p).appendChild(img);
}

notes.addEventListener("click" , function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        save();
    }
    else if(e.target.tagName==="P"){
        let input=document.querySelectorAll(".input_box");
        input.forEach(nt=>{
            nt.onkeyup=function(){
                save();
            }
        })
    }
})

document.addEventListener("keydown", event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})