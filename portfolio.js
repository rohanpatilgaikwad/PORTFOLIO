let main = document.querySelector(".main")
let btn = document.querySelector(".menu-btn")

function toggel(){

    main.classList.toggle("active");
}
btn.addEventListener("click",()=>toggel()
)