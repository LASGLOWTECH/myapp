
const randomInfo = document.querySelector(".Do-it")

// my skills object
const prof = [
  { id:"a" , Work: "Web developer" },
  { id:"b" , Work: "Graphics Designer" },
  {id:"d" , Work: "Ui/Ux Designer" },
  { id:"c" , Work: "Quantity Surveyor" },
  { id:"d" , Work: "Front-end Developer" },
]
// mapping through
const items = prof.map(item => {
  return `${item.Work}`
})




// mousing over the window randomly changes text
window.addEventListener("mouseover", myFam)

function myFam() {
  const raMo = randonD();
  console.log(raMo);
  randomInfo.textContent = items[raMo];
}

//  ramdom selection
function randonD() {
  return Math.floor(Math.random() * items.length);
}



// PROJECTS TO BE MAPPED



const projects = [
  {link:"/Random quotes.html", icon:" fa fa-quote-left",  id:1, img:"webpack.jpg", name: "RANDOM QUOTES ",
    },

  {
    link:"SNAPP 1.html", icon:" fas fa-home",id: 2, img: "Dogcateagle.jpg", name: "ANIMALS GALLERY",
      },

  {
    link:"ANIMIE.html", icon:"fa fa-car",id: 3, img: "REdCAR.png", name: "CAR ANIMATION",
    },

  {
    link:"counter.html", icon:"fa fa-plus-square-o",id: 4, img: "Counter.jpg", name: "COUNTER ",
     },
  {
    link:"Article.html", icon:"fas fa-box",id: 5, img: "Rdn.png", name: "COLLAPSE ARTICLE",
    },

  {
    link:"CALC.html", icon:"fa fa-calculator",id: 6, img: "calculator.png", name: "CALCULATOR",
     }

]

const Pro = document.querySelector("#camo");
console.log(Pro);

const Proud = projects.map(proj => {
  return ` <div class="caption col-lg-3 col-md-4 col-xsm-12 text-center key=${proj.id} " > 
    <image  src="images/${proj.img}" class="CAR" >
        <h2> ${proj.name}</h2>
        <a href="/${proj.link}"><i class="iconF ${proj.icon} aria-hidden="true  "></i></a>
    
      </div>`

});

Pro.innerHTML = Proud.join("");



console.log(Proud);




function validate() {
  var input = document.getElementById("exampleFormControlInput1").value;
  var text = document.getElementById("exampleFormControlTextarea1").value;
  if (input.trim() == "" || text == "") {
    alert("please enter your details");
    return false;
  }
  else {
    alert("Please wait for response");
    return true;
  }

}


// SCROLL LINK JS


const myScroll=()=>
{

  const Toplink= document.querySelector(".top-link")
console.log(Toplink)
const scrollHeight = window.pageYOffset;

console.log(scrollHeight);

if(scrollHeight >3000){
  Toplink.classList.add("hide")}
  else{Toplink.classList.remove("hide")}

}

window.addEventListener("scroll", myScroll);
// ENDING

// DATE OBJECT

const today = document.querySelector("#currentD");
console.log(today)
const currentDate =new Date().getFullYear();
today.innerHTML= currentDate