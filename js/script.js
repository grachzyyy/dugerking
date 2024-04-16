// JavaScript code to handle form navigation
document.getElementById('openFormButton').addEventListener('click', function() {
    // Create a new form page with the form
    const formContainer = document.getElementById('formContainer');
    const form = document.createElement('form');
    const addressInput = document.createElement('input');
    const houseInput = document.createElement('input');
    const floorInput = document.createElement('input');
    const submitButton = document.createElement('button');

    addressInput.type = 'text';
    addressInput.placeholder = 'Address';
    houseInput.type = 'text';
    houseInput.placeholder = 'House';
    floorInput.type = 'text';
    floorInput.placeholder = 'Floor';
    submitButton.textContent = 'Submit';

    form.appendChild(addressInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(houseInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(floorInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    formContainer.innerHTML = '';
    formContainer.appendChild(form);
});