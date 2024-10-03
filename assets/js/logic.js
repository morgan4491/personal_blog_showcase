// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const darkModebtn = document.querySelector('#toggle');
const btnChange = document.querySelectorAll('btn-change');

function toggleDarkMode() {
  const mode = localStorage.getItem('mode');

  if (mode === 'light') {
    document.body.classList.add('dark');
    localStorage.setItem('mode', 'dark');
    document.documentElement.style.setProperty('--circle-color', '#eee');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('mode', 'light');
    document.documentElement.style.setProperty('--circle-color', '#555');
  }
}

function pageLoad() {
  const mode = localStorage.getItem('mode');

  if (mode === 'dark') {
    document.body.classList.add('dark');
    localStorage.setItem('mode', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('mode', 'light');
  }

  darkModebtn.addEventListener('click', toggleDarkMode);
}

pageLoad();

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage() {
  return JSON.parse(localStorage.getItem('blogs')) || [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(blogPost) {
  const blogsArray = readLocalStorage();

  blogsArray.push(blogPost);

  localStorage.setItem('blogs', JSON.stringify(blogsArray));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

