const nameInput = document.getElementById('contact-name');
const phoneInput = document.getElementById('contact-phone');
const emailInput = document.getElementById('contact-email');
const messageInput = document.getElementById('contact-message');
const submitButton = document.getElementById('submit');

const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('subit-error');

nameInput.addEventListener('input', validateName);
phoneInput.addEventListener('input', validatePhone);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);
submit.addEventListener('click', validateForm);

function validateName() {
  const name = nameInput.value;
  console.log(name);
  if (name.trim() === '') {
    nameError.textContent = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.textContent = 'Only lettters';
    return false;
  }
  if (!name.trim().includes(' ')) {
    nameError.textContent = 'enter both first name and second name';
    return false;
  }

  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatePhone() {

  const phoneNumber = phoneInput.value.replace(/\D+/g, '');
  // remove non-digit characters
  //  * replace() is a method that replaces some or all matches of a pattern in a string with a new string.
  //* /\D +/g is the pattern being used to match characters to replace.
  // *  \D + matches one or more non - digit characters(i.e., characters that are not digits).The + quantifier means "one or more".
  //* The g flag at the end of the pattern makes the replacement global, so that all matches in the string are replaced, not just the first one.
  const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // add spaces
  phoneInput.value = formattedPhoneNumber;

  var phone = document.getElementById('contact-phone').value;

  if (phoneNumber.length == 0) {
    phoneError.innerHTML = 'Phone no is required';
    return false;
  }
  if (phoneNumber.length !== 10) {
    phoneError.innerHTML = 'Phone no should be 10 digits';
    return false;
  }
  // if (!/^\d{10}$/.test(phoneNumber)) {
  //   phoneError.textContent = 'Only digits please.';
  //   return false;
  // }
  //*   The regular expression /^\d{ 10 } $ / is used to validate a phone number input field.Here's a breakdown of what it does:

  //  *   ^ matches the start of the string.
  //  * \d matches a single digit(0 - 9).
  //* { 10 } specifies that the preceding pattern(\d) should be matched exactly 10 times.
  //* $ matches the end of the string.
  // *    So, the regular expression /^\d{ 10 } $ / matches a string that:

  //* Starts with a digit(^).
  //* Consists of exactly 10 digits(\d{ 10}).
  //* Ends with the end of the string($).

  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}


function validateEmail() {
  // var email = document.getElementById('contact-email').value;
  const email = emailInput.value;
  if (email.length == 0) {
    emailError.innerHTML = 'Email is required'
    return false;
  }
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    emailError.textContent = 'Email is not valid'
    return false
  }
  //   Let me break it down:

  // ^ matches the start of the string
  //   [a - zA - Z0 -9._ % +-] + matches one or more of the following characters:
  //   a - z(lowercase letters)
  //   A - Z(uppercase letters)
  //   0 - 9(digits)
  //     ._ % +- (special characters)
  //   @matches the @symbol
  //   [a - zA - Z0 - 9. -] + matches one or more of the following characters:
  //   a - z(lowercase letters)
  //   A - Z(uppercase letters)
  //   0 - 9(digits)
  //     .- (dot and hyphen)
  //   \. matches a period(escaped with a backslash because.has a special meaning in regex)
  //   [a - zA - Z]{ 2,} matches the top - level domain(it must be at least 2 characters long)
  // $ matches the end of the string
  // Here's the revised code:




  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateMessage() {
  const message = messageInput.value;
  // var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.textContent = `${left} more characters required`;
    return false;
  }

  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    submitError.style.display = 'block';
    submitError.textContent = 'Please fix error to submit';
    setTimeout(() => { submitError.style.display = 'none'; }, 3000);
    return false;
  }
}

// function validateForm() {
//   if (![validateName(), validatePhone(), validateEmail(), validateMessage()].every(Boolean)) {
//     submitError.style.display = 'block';
//     submitError.innerHTML = 'Please fix error to submit';
//     setTimeout(() => { submitError.style.display = 'none'; }, 3000);
//     return false;
//   }
// }

// const validationFunctions = [validateName, validatePhone, validateEmail, validateMessage];

// function validateForm() {
//   if (!validationFunctions.every(fn => fn())) {
//     submitError.style.display = 'block';
//     submitError.innerHTML = 'Please fix error to submit';
//     setTimeout(() => { submitError.style.display = 'none'; }, 3000);
//     return false;
//   }
// }