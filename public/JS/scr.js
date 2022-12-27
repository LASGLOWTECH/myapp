const Farm= document.querySelector(".form-control")
const subBTN= document.querySelector("#subtn")
subBTN.addEventListener("click", validate)
   


function validate() {
  var input =Farm.value;
console.log(Farm)
  if (input.trim() == "" || text == "") {
    alert("please enter your details");
    return false;
  }
  else {
    alert("message sent");
    return true;
  }

}