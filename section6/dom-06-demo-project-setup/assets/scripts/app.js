// variables
const addMovieModalEl = document.getElementById('add-modal');

const startAddMovieBtn = document.querySelector('header button');

const backdropEl = document.getElementById('backdrop');
const cancelAddMovieBtn = addMovieModalEl.querySelector('.btn--passive');

const confirmAddMovieBtn = addMovieModalEl.querySelector('.btn--success');

const userinputElList = document.querySelectorAll('input');
const entryTextEl = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const movies = [];

// functions
//  deleting >>>>>>

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  deleteMovie();
  const cancelDelectionBtn = document.querySelector('.btn--passive');
  const confirmDelectionBtn = document.querySelector('.btn--success');
  cancelDelectionBtn.addEventListener('click', closeMovieDelectionModal);
  confirmDelectionBtn.addEventListener('click', deleteMovie(null, movieId));
};

// handling backdrops >>> and modals

const closeMovieDelectionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const closeMovieModal = () => {
  addMovieModalEl.classList.remove('visible');
};

const toggleBackdrop = () => {
  backdropEl.classList.toggle('visible');
};

const showMovieModal = () => {
  addMovieModalEl.classList.add('visible');
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDelectionModal();
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInput();
};

const clearMovieInput = () => {
  for (const usrInput of userinputElList) {
    usrInput.value = '';
  }
};

//add movies >>>>>>>

// updating DOM
const updateUI = () => {
  if (movies.length === 0) {
    entryTextEl.style.display = 'block';
  } else {
    entryTextEl.style.display = 'none';
  }
};

// add new movie to DOM
const renderNewMovieElement = (id, title, imageURL, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class = 'movie-element_image'>
  <img src='${imageURL} alt='${title}'</div>
  <div class='movies-element_info'>
  <h2>${title}</h2>
  <p>${rating}/5</p>
  </div>`;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.appendChild(newMovieElement);
};

// add movie
const addMovieHander = () => {
  const titleValue = userinputElList[0].value;
  const imageUrlValue = userinputElList[1].value;
  const ratingValue = userinputElList[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please fill in all fields');
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(newMovie, movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

// event listeners >>>>
startAddMovieBtn.addEventListener('click', showMovieModal);
backdropEl.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHander);
