document.getElementById("year").innerHTML = new Date().getFullYear()

let g_counter = 0;


function enableItemClickAnimations() {
    let items = document.querySelectorAll("a.item")

    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.addEventListener("mousedown",(a,b)=>{
            element.classList.add("active")
        })
        element.addEventListener("mouseup",(a,b)=>{
            element.classList.remove("active")
        })
        element.addEventListener("keydown",(a,b)=>{
            if(a.key == "Enter" || a.key == "Tab")
                element.classList.add("active")
        })
        element.addEventListener("keyup",(a,b)=>{
            if(a.key == "Enter" || a.key == "Tab")
                element.classList.remove("active")
        })
        element.addEventListener("blur",(a,b)=>{
            element.classList.remove("active")
        })
    }
}

document.addEventListener("DOMContentLoaded", ()=>{

    console.log("%c No esperaba verte por aqui...","font-size:2em")

    enableItemClickAnimations();
    
})
