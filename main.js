// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal=document.getElementById("modal").className="hidden";
let likeIcon = document.querySelectorAll('.like-glyph');
likeIcon.foreach(e=>{
  e.addEventListener("click",likeFun);
});

function likeFun(e){
  mimicServerCall()
  .then(() => {
    if(e.target.innerHtml==FULL_HEART){
       e.target.innerHtml = FULL_HEART;
      e.target.classList.add('.activated-heart');
    }
    else if(e.target.innerHtml==EMPTY_HEART){
      e.target.innerHtml = FULL_HEART;
      e.target.classList.add('.activated-heart');
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
