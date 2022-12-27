
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






//     var cars=["Camry", "Audi","Saad","Toyota"];

//     for(  i=0; i<4;  i++){
//     console.log("<h4>"+ cars[i]+"</h4>");}

//     function abc(firstName, middleName, lastName, Address){
//  this.firstName=firstName; 
//  this.middleName=middleName;
//  this.lastName=lastName;
// this.address=Address;
//     }
//     abc.prototype.getAddress=function(){
//       return this.Address;
//     }
//     abc.prototype.grades="C";
//     // var name1 =new name("Omozemoje", "Augustine", "Oisasoje");
    // console.log(name1)

    // var names={firstName:"Omozemoje",
    //  middleName:"Austine",
    //   lastName:"Oisasoje"};
// var name1= new abc("omozemoje", "Augustine", "Oisasoje","Bukansidi");
//     console.log(name1);

//     var circle= new Object();
//     circle.diameter=7;
//     circle.pi=3.142;
//      circle.getarea=function(){
//          return circle.diameter *circle .pi
//      };
// console.log(circle.getarea());

// object prototype

