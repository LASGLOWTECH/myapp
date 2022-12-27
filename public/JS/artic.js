
const myItems = document.querySelector('.mystyle')

const Btn = document.querySelector('.btns')

console.log(myItems)

const PlusBtn  = document.querySelector('.plus-btn');
const minu = document.querySelector('.minus-btn')


const Artics= document.querySelector(".artics")  
const myFac=()=>{
   
    myItems.classList.toggle("active");
    Artics.classList.add("incris");
         PlusBtn.classList.toggle("hide");
         minu.classList.add("show")
         console.log("works")}
         

       
       PlusBtn.addEventListener("click", myFac)

       const myFa=()=>{
        myItems.classList.toggle("active");
        Artics.classList.remove("incris");
             PlusBtn.classList.toggle("hide");
             minu.classList.remove("show")
             console.log("works")}
        
       

             minu.addEventListener("click", myFa)