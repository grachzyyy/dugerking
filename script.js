// JavaScript code to handle form navigation
document.getElementById('openFormButton').addEventListener('click', function() {
    // Create a new form page with the form
    const formPage = document.createElement('html');
    const formHead = document.createElement('head');
    const formTitle = document.createElement('title');
    const formBody = document.createElement('body');
    const form = document.createElement('form');
    const addressInput = document.createElement('input');
    const houseInput = document.createElement('input');
    const floorInput = document.createElement('input');
    const submitButton = document.createElement('button');

    formTitle.textContent = 'Delivery Form';
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

    formBody.appendChild(form);
    formHead.appendChild(formTitle);
    formPage.appendChild(formHead);
    formPage.appendChild(formBody);

    // Open the new form page in a new window
    const newWindow = window.open('', '_blank');
    newWindow.document.write(formPage.outerHTML);
    newWindow.document.close();
});