var bookNowButton = document.querySelector('.primary-btn');

    bookNowButton.addEventListener('click', function() {

    var bookingSection = document.getElementById('booking');

      window.scrollTo({
        top: bookingSection.offsetTop,
        behavior: 'smooth'
      });
    });