

const movebtn= document.querySelector("#moveBtn");
const sportCar=document.querySelector(".scar");
const stopBTN=document.querySelector("#stopBtn");




    movebtn.addEventListener("click", function(e){
    console.log(e.currentTarget)
        
    sportCar.classList.toggle("speedup")
    
    }
    )

    
    stopBTN.addEventListener("click", function(e){
        console.log(e.currentTarget)
    
        sportCar.classList.toggle("slowdown")
        
        } )
    


        