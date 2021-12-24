
// gotop

const button_go_top = window.document.getElementById("go_top")

button_go_top.addEventListener('click',()=>{
   window.scroll({
       top:0,
       behavior:'smooth'
   })
})


window.addEventListener("scroll",()=>{
    if(scrollY >1269){
        button_go_top.classList.add("off")
        
        
    }else{
        button_go_top.classList.remove("off")
    }
})

// gotop_final