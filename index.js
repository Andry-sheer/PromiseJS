const buttonSearch = document.querySelector('.containerOne__buttonSearch');
const buttonComment = document.querySelector('.containerTwo__buttonComments');
const containerOne = document.querySelector('.containerOne');
const containerTwo = document.querySelector('.containerTwo');
const containerThree = document.querySelector('.containerThree');

buttonSearch.addEventListener('click', show);
function show(){
  setTimeout(()=> {
    containerTwo.style.display = 'flex';
  }, 1500);
};

buttonComment.addEventListener('click', comment); 
function comment(){
  setTimeout(()=> {
    containerThree.style.display = 'flex';
  }, 1500);
}







