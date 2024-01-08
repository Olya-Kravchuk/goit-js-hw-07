const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
  
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email;
    const password = form.elements.password;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
      alert('All form fields must be filled in');
      return;
    }


  const formData = {
    email: emailValue,
    password: passwordValue
  };

  console.log(formData);

  form.reset();
});