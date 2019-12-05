// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal=document.getElementById("modal").className="hidden";
let likeIcon = document.querySelectorAll('.like-glyph');
likeIcon.forEach(e=>{
  e.addEventListener("click",likeFun);
});

function likeFun(e){
  let l = e.target;
  console.log("hhhhhhhhhhhhhhh");
  mimicServerCall()
  .then(() => {
    if(l.innerText==FULL_HEART){
      l.innerText = EMPTY_HEART;
      l.classList.remove('.activated-heart');
    }
    else{
      l.innerText = FULL_HEART;
      l.style.color="red";
      l.classList.add('.activated-heart');
    }
  })
  .catch((error) => {
    document.getElementById('modal-message').innerHtml=error;
    modal.classList.remove('hidden');
    setTimeout(e=>{
      document.getElementById('modal').classList.add = 'hidden';
    },5000);
    
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
