const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', objectElem => {
    objectElem.preventDefault();
    const email = formElem.elements.email.value.trim()
    const password = formElem.elements.password.value.trim()
    const data = {email, password}
    if (email.length === 0 || password.length === 0){
        alert('All form fields must be filled in');
    }
    console.log(data);
    formElem.reset();
});
