
    document.getElementById("bookingForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var arrivalDate = document.getElementById("arrivalDate").value;
        var departureDate = document.getElementById("departureDate").value;
        var adults = document.getElementById("adults").value;
        var children = document.getElementById("children").value;


        var successMessage = document.createElement("p");
        successMessage.textContent = "Booking was successful!";
        successMessage.style.marginTop = "10px";

        var form = document.getElementById("bookingForm");
        form.parentNode.insertBefore(successMessage, form.nextSibling);
    });

  
    document.getElementById("subscribeButton").addEventListener("click", function(event) {
        event.preventDefault();
        var email = document.getElementById("emailInput").value;
        var subscribeMessage = document.getElementById("subscribeMessage");
        subscribeMessage.style.display = "block";
    });
    let slideIndex = 0;

    function showSlides() {
      const slides = document.querySelectorAll('.slider img');
      if (slideIndex >= slides.length) { slideIndex = 0; }
      if (slideIndex < 0) { slideIndex = slides.length - 1; }
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
      });
    }
  
    function nextSlide() {
      slideIndex++;
      showSlides();
    }
  
    function prevSlide() {
      slideIndex--;
      showSlides();
    }
  
    showSlides();
  


