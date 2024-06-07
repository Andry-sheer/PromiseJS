
const buttonSearch = document.querySelector('.containerOne__buttonSearch');
const containerOne = document.querySelector('.containerOne');
const containerTwo = document.querySelector('.containerTwo');
const containerThree = document.querySelector('.containerThree');
const containerError = document.querySelector('.containerOne__error');
const inputSearch = document.querySelector('.containerOne__inputSearch');

buttonSearch.addEventListener('click', show);
function show(){

  const Search = document.getElementById('Search').value

    if (Search >= 1 && Search <= 100){
      containerTwo.style.display = 'flex';
    }
    else {
      containerError.style.display = 'flex';
      containerTwo.style.display = 'none';
      containerThree.style.display = 'none';
    }

  if (inputSearch.addEventListener('focusin', ()=> { containerError.style.display = 'none'; }));


    const post = fetch(`https://jsonplaceholder.typicode.com/posts/${Search}`)
      .then(responsePosts => responsePosts.json());

    const comment = fetch(`https://jsonplaceholder.typicode.com/comments/${Search}`)
      .then(responseComment => responseComment.json());

      Promise.all([post, comment]).catch(() => {
        containerError.style.display = 'flex';
        containerError.textContent = 'Server Error (Catch)';
        containerTwo.style.display = 'none';
        containerThree.style.display = 'none';
      })
      .then(data => {

        const id = document.querySelector('.containerTwo__id');
        const title = document.querySelector('.containerTwo__title');
        const userId = document.querySelector('.containerTwo__userId');
        const body = document.querySelector('.containerTwo__body');
        const buttonComment = document.querySelector('.containerTwo__buttonComments');
        const comment_1 = document.querySelector('.containerThree__comment1');
        const comment_2 = document.querySelector('.containerThree__comment2');
        const comment_3 = document.querySelector('.containerThree__comment3');
        const comment_4 = document.querySelector('.containerThree__comment4');

        body.textContent = `BODY: ${data[0].body}`;
        id.textContent = `ID: ${data[0].id}`;
        title.textContent = `TITLE: ${data[0].title}`;
        userId.textContent = `USER_ID: ${data[0].userId}`;

    buttonComment.addEventListener('click', commenti);
      function commenti() {
        containerThree.style.display = 'flex';
        comment_1.textContent = `COMMENTAR ID: ${data[1].id}`;
        comment_2.textContent = `${data[1].body}`;
        comment_3.textContent = `EMAIL: ${data[1].email}`;
        comment_4.textContent = `NAME: ${data[1].name}`;
    }
  })
};
