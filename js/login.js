// Step-1: add event handler with the submit
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address inside the email input field
    // Always remember to use .Value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // Denger: Do nbot verify email password on the client side
    // Step-4: Verify email and password and check whether valid user or not
    if( email === 'shrabon@gmail.com' && password === '654321@'){
        window.location.href = 'bank.html';
    }
    else{
        alert('You are not! Your father son!!');
    }
})

