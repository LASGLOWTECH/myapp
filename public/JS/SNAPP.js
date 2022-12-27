

// select all the contacts all the constant first

const animals=[


  
  { id:1,
    image :"BIRD.jpg",
    name:"PARROT",
    para:"Not friendly at all, hence not a pet"},
    
    { id:2,
      image :"NUTRIA.jpg",
      name:"Nutria",
      para:"A big dark Nutria"},

   { id:3,
        image :"BEER.jpg",
        name:"BEER",
        para:"Big dark Beer, not a pet"},

    { id:4,
          image :"CALF.jpg",
          name:"A CAlF",
          para:"Elephants are friendly, but not pets"},

         { id:5,
            image :"CAT.jpg",
            name:"CAT",
            para:"The Cat is a pet, and pleasing to look at"},

            { id:6,
              image :"CHEETAH.jpg",
              name:"CHEETAH",
              para:"The Cheetah is another type of Cat but, fastest four footed animal"},
   
              { id:7,
                image :"DEEER.jpg",
                name:"DEER",
                para:"The Deer is an herbivores animal  forest based"},
              
                
            { id:8,
              image :"EAGLE.jpg",
              name:"EAGLE",
              para:"Most powerful bird, not friendly"},

           
             
                { id:9,
                  image :"ELEPHANT.jpg",
                  name:"ELEPHANT",
                  para:"The elephant is the biggest forest animal"},


                  { id:10,
                    image :"ANTELOPE.jpg",
                    name:"Roaring Lion",
                    para:"Never near a roaring lion"},


                        { id:11,
                          image :"PARROT.jpg",
                          name:"BUTTERFLY",
                          para:"An insect that feedson necta of flowers"},



                          { id:12,
                            image :"PARROT2.jpg",
                            name:"Beautifu Parrot",
                            para:"it can be housed as a pet"},


                            { id:13,
                              image :"PEEACOCK.jpg",
                              name:"PEA COCK",
                              para:"The Cheetah is another type of Cat but, forest based"},


                              { id:14,
                                image :"ZENBRA.jpg",
                                name:"ZEBRA",
                                para:"The animal with black and white stripes"},

                                
                              { id:14,
                                image :"ANTELOPE.jpg",
                                name:"ANTELOPE",
                                para:"A forest based  wild life "},


              ] 
const rowObj= document.querySelector(".row");  
const closeBtn= document.querySelector(".closebtn");
const navLinks=document.querySelector(".navLinks ");
const openButton=document.querySelector(".Hamburger");
 const currrentDate= document.querySelector("#currentD");
 const topLink=document.querySelector(".top-link")
const today=new Date().getFullYear();
const nav= document.querySelector(".navbar");

// toggle the li

openButton.addEventListener("click", function(){
navLinks.classList.toggle('active')
});

closeBtn.addEventListener("click", function(){
navLinks.classList.remove('active')
  });

// when the page loads show items

window.addEventListener("DOMContentLoaded",

function displayItems(){
  // i assigned the value menu to
var menu= animals.map((item)=>{
  // use the string interpolation method to output your object
  return `

  <div class="imagecaption col-lg-4 col-md-6 col-xsm-12" >
  <image src="./images/${item.image } " alt=${item.id} id="Img"></image>
  <h3>${item.name}</h3>
  <p>${item.para}</p>
</div>
`
 
  
  }
  );
  // to prevent commas from showing
 const dwell= menu.join("");
 console.log(dwell);
// all the object in div class row wil
  rowObj.innerHTML=dwell
// add current Date

  
  })

// fixed nav bar

window.addEventListener("scroll", function(){
const navHeight= nav.getBoundingClientRect().height;
const scrollHeight= window.pageYOffset;


if(scrollHeight > navHeight){
  nav.classList.add('fixedo');
}
else{ nav.classList.remove('fixedo')}

if(scrollHeight >3000){
  topLink.classList.add("hide")}
  else{topLink.classList.remove("hide")}}
);

// seeting the date
currrentDate.innerHTML=today;

const imageCap=document.querySelector("#im");
const myBTN=document.querySelector("#Button");




console.log(newNumbers);