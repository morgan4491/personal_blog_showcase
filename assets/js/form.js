// TODO: Create a variable that selects the form element
const inputForm = document.querySelector('#formInput'); // This variable 'inputForm' now represents the form element and 

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', handleFormSubmission);
// });

function handleFormSubmission(event) {

    const username = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const errorMessage = document.querySelector('#error');

    if (!username || !title || !content) {
        event.preventDefault();
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';


        const blogPost = {
            username: username,
            title: title,
            content: content
        };

        const oldBlogArray = localStorage.getItem('blogs');
        let blogArray;
        if (oldBlogArray) {
            blogArray = JSON.parse(oldBlogArray);
        } else {
            blogArray = [];
        }

        blogArray.push(blogPost);

        localStorage.setItem('blogs', JSON.stringify(blogArray));

        let redirectURL = '';

        const redirectPage = function (url) {
            redirectURL = url;
            location.assign(url);
        };

        redirectPage('blog.html');
    }


};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

inputForm.addEventListener('submit', handleFormSubmission);