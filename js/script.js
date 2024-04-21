const deliveryButton = document.getElementById('deliveryButton');
    const deliveryFormContainer = document.getElementById('deliveryFormContainer');

    deliveryButton.addEventListener('click', function() {
      if (deliveryFormContainer.style.display === 'none') {
        deliveryFormContainer.style.display = 'block';
      } else {
        deliveryFormContainer.style.display = 'none';
      }
    });
