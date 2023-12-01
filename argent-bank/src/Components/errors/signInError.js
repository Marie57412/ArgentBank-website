function signInError() {
  const secondInputWrapper = document.querySelector('.input-wrapper:nth-child(2)');
  const containerErrorClassName = 'error-container';
  const customErrorMessageClassName = 'custom-error-message';
  const errorTextMessage = 'Email or Password invalid !';

  if (
    secondInputWrapper.nextSibling &&
    !secondInputWrapper.nextSibling.classList.contains(containerErrorClassName)
  ) {
    const errorContainer = document.createElement('div');
    const errorMessage = document.createElement('span');

    errorContainer.className = containerErrorClassName;
    errorMessage.textContent = errorTextMessage;
    errorMessage.classList.add(customErrorMessageClassName);

    errorContainer.appendChild(errorMessage);
    secondInputWrapper.insertAdjacentElement('afterend', errorContainer);
  }
}

export default signInError;
