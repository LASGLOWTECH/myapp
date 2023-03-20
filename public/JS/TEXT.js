
//

// end of nav bar js


// set where count commence
let count= 0;
// get all the class and ids



    //  BBOX TWO CONTENT
const value = document.querySelector("#value");
const btns=document.querySelectorAll(".btn");
// this affects each of the buttons
btns.forEach(function (btn){
  btn.addEventListener("click", function(e){
   const mystyle= e.currentTarget.classList;

if(mystyle.contains("Dcris")){
    count--;
   }
  else if(mystyle.contains("Incris")){
    count++;
   }
else{
    count=0;
   }
if(count<0){
  value.style.color="red";
}
if(count>0){
  value.style.color="green";
}
if(count==0){
  value.style.color="yellow";
}
value.textContent=count;

  })
})
// end of count projecr

// queston project


