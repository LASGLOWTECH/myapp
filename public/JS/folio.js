
const randomInfo = document.querySelector(".Do-it")

// my skills object
const prof = [
  { id:"a" , Work: "Web Developer" },
  { id:"b" , Work: "Graphics Designer" },
  {id:"d" , Work: "UI/UX Designer" },

 
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
  {link:"Random quotes.html", icon:" fa fa-quote-left",  id:1, img:"webpack.jpg", name: "RANDOM QUOTES ",
    },

  {
    link:"Gallery.html", icon:" fas fa-home",id: 2, img: "Dogcateagle.jpg", name: "ANIMALS GALLERY",
      },

  {
    link:"ANIMIE.html", icon:"fa fa-car",id: 3, img: "REDCAR.png", name: "CAR ANIMATION",
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
        <a href="/${proj.link}"><i class="iconF ${proj.icon} aria-hidden="true"></i></a>
    
      </div>`

});

Pro.innerHTML = Proud.join("");



console.log(Proud);


const ContactResult=document.querySelector("#Details")

function validate() {
  var input = document.getElementById("exampleFormControlInput1").value;
  var text = document.getElementById("exampleFormControlTextarea1").value;
  if (input.trim() == "" || text == "") {
     ContactResult.innerHTML="<p style='color:red; 'font-weight:bold'> Please fill in your details</p>"
     ContactResult.reset()
     
    return false;
  }
  else {
    ContactResult.innerHTML="<p style='color:green; 'font-weight:bold'> you may pass</p>"
    return true;
  }

}




// SCROLL LINK JS



window.addEventListener("scroll", function()
{

  const topLink= document.querySelector("#top-Link")
console.log(topLink)
const scrollHeight = window.pageYOffset;
console.log(scrollHeight);

if(scrollHeight >3000){
  topLink.classList.add("hide")}
  else{topLink.classList.remove("hide")}
}

);


// ENDING

// DATE OBJECT

const today = document.querySelector("#currentD");
console.log(today)
const currentDate =new Date().getFullYear();
today.innerHTML= currentDate
