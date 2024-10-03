// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement = document.querySelector('#mainElement');
const backBtn = document.querySelector('#back');
const blogOutput = document.querySelector('#blogOutput');

// TODO: Create a function that builds an element and appends it to the DOM

function createAppendElement (type, attributes, content, parent) {
  const element = document.createElement (type);

  for (const key of attributes) {
    element.setAttribute(key, attributes[key]);
  }
  if (content) {
    element.innerText = content;
  }

  parent.appendChild(element);

}

function outputBlogList() {
  const oldBlogArray = localStorage.getItem('blogs');
  let blogArray;
  if (oldBlogArray) {
    blogArray = JSON.parse(oldBlogArray);
  } else {
    blogArray = [];
  };

  blogOutput.innerText = '';
  
  
}
// TODO: Create a function that handles the case where there are no blog posts to display

function noBlogPosts () {
  blogOutput.innerHTML = `<li>No Blog posts yet...</li>`;
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() {
  const blogPosts = readLocalStorage();

  if (blogPosts.length) {
    outputBlogList();
  } else {
    noBlogPosts();
  }
}

// TODO: Call the `renderBlogList` function

renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

