// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement = document.querySelector('#mainElement');
const backBtn = document.querySelector('#back');
const blogOutput = document.querySelector('#blogOutput');

// TODO: Create a function that builds an element and appends it to the DOM

function outputBlogList() {
  const blogPosts = readLocalStorage();
  blogOutput.innerHTML = '';

  for (const blogObj of blogPosts) {
    mainElement.insertAdjacentHTML('beforeend', `
      <li>
        <h3>${blogObj.title} - by ${blogObj.username}</h3>
        <p>${blogObj.content}</p>
      </li>
      `);
  }
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

backBtn.addEventListener('click', () => {
  redirectPage('./index.html');
});