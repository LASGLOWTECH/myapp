


// RANDOM QUOTES GENERATOR

const colors=["red","green", "blue","rgba(246,57,120,0.5)","crimson","purple"]
const Quotes=[

  { quotes:"if you can dream it , you can achieve it", Autur:"Zig Ziglar",id:1 },
  { quotes:"If you hear a voice within you, say you cannot paint,then by all means paint and that voice will be silenced" 
  , Autur:"-Vincent Van Gogh",id:2 },
  { quotes:"An unexamined life is not worth leaving", Autur:"Socrates",id:3 },
  { quotes:"I have a dream", Autur:"Marthi Lurther King Jnr",id:4 },
  { quotes:"Youths are the future of tomorrow", Autur:"-Nelson Mandella",id:5 },
  { quotes:"What an elder can see while sitting, a child can't see while standing", Autur:"-Wise quotes",id:1 },
  { quotes:"Never Throw stone in the market, it can it a relation", Autur:"Sugar girl",id:6 },
  { quotes:"Pressure is proportional to volume", Autur:"Boyles Law",id:7 },
  { quotes:"volume is proportional to Temperature", Autur:"Charles Law",id:8 },
  { quotes:"An object will remain in state of rest or of uniform motion, until acted upon by external force ", Autur:"Newton",id:9},

]

const btn = document.querySelector("#nexto")
const romeo = document.querySelector(" .orient");
console.log(romeo);
const rentor = document.querySelector("#Zig");
console.log(rentor);
console.log(btn);

let curitems=7;
window.addEventListener("DOMContentLoaded", yourFunc)
  



// showitems based on current items
function yourFunc(){
const items = Quotes[curitems]
rentor.textContent= items.quotes
romeo.textContent= items.Autur


}

btn.addEventListener("click", myPride)

function myPride(){
 curitems = Math.floor(Math.random() * Quotes.length);
 
romeo.style.color=colors[randonD()]
 document.body.style.backgroundColor= colors[randonD()]
  yourFunc()
  };
//     console.log(raMo);
// Qts.textContent = Quas[raMo];
  
// }



const randonD=()=> {
    return Math.floor(Math.random() * colors.length);
  }
  console.log(randonD)
  


