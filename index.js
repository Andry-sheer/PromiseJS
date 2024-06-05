
const buttonSearch = document.querySelector('.containerOne__buttonSearch');
const buttonComment = document.querySelector('.containerTwo__buttonComments');
const containerOne = document.querySelector('.containerOne');
const containerTwo = document.querySelector('.containerTwo');
const containerThree = document.querySelector('.containerThree');
const containerError = document.querySelector('.containerOne__error');
const inputSearch = document.querySelector('.containerOne__inputSearch');

buttonSearch.addEventListener('click', show);
function show(){

  

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(postsData => postsData.json())
  .then(posts => {

    if (inputSearch.value >= 1 && inputSearch.value <= 100){
      containerTwo.style.display = 'flex';
      console.log(posts);
    }else {
      containerError.style.display = 'flex';
      containerTwo.style.display = 'none';
    }
  })
  if (inputSearch.addEventListener('focusin', ()=> { containerError.style.display = 'none'; }) || containerOne.addEventListener('click', ()=> { containerError.style.display = 'none'; }));
}

buttonComment.addEventListener('click', comment); 
function comment(){
  containerThree.style.display = 'flex';

  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(commentData => commentData.json())
  .then(comment => {
    console.log(comment);
})
}

// https://jsonplaceholder.typicode.com/posts

// https://jsonplaceholder.typicode.com/comments



