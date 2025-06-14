const input = document.querySelector('input');
const button = document.querySelector('.error-button');
const errorMessage = document.querySelector('.error-message');


console.log(input , button, errorMessage);

function vaidate_email(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}


button.addEventListener('click', (e) => {
    e.preventDefault();


  const email = input.value.trim();
  if (vaidate_email(email)) {
    errorMessage.classList.add('hide-error');
    errorMessage.classList.remove('show-error');
    input.style.border= '1px solid hsl(0, 0%, 59%)';
    
  } else {
    errorMessage.classList.add('show-error');
    errorMessage.classList.remove('hide-error');
    input.style.border= '1px solid hsl(354, 100%, 66%)';
  }
}
);

