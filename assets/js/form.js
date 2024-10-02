// TODO: Create a variable that selects the form element
const inputForm = document.querySelector('#formInput'); // This variable 'inputForm' now represents the form element and 

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.


function handleFormSubmission(event) {
    event.preventDefault();

    const username = document.querySelector('#username');
    const title = document.querySelector('#title');
    const content = document.querySelector('#content');


};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

