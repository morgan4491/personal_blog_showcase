// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement = document.querySelector('mainElement');
const backBtn = document.querySelector('#back');

// TODO: Create a function that builds an element and appends it to the DOM

function outputBlogList() {
  const oldBlogArray = localStorage.getItem('blogs');
  let blogArray;
  if (oldBlogArray) {
    blogArray = JSON.parse(oldBlogArray);
  } else {
    blogArray = [];
  };
  const blogOutput = document.querySelector('#blogOuput');

  blogOutput.innerText = '';

  if (!blogArray.length) {
    blogOutput.innerText = `<li>No Blog posts yet...</li>`;
  }

  

}
// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() {
  const data = 
}

// TODO: Call the `renderBlogList` function

renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

