// JavaScript code for the image slider

      const imageUrls = [
        "images/cat1.jpg",
        "images/cat2.jpg",
        "images/cat3.jpg",
        "images/cat4.jpg",
        "images/cat5.jpg",
        // Add more image URLs here
      ];
      //Randomly select an image index
      function getRandomImageIndex() {
        return Math.floor(Math.random() * imageUrls.length);
      }

      function showRandomSlide() {
        const randomIndex = getRandomImageIndex();
        slides[currentSlide].style.display = "none";
        currentSlide = randomIndex;
        slides[currentSlide].style.display = "block";
      }

      let currentSlide = 0;
      const slides = document.querySelectorAll(".slide");

      function showSlide(n) {
        slides[currentSlide].style.display = "none";
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = "block";
      }

      function nextSlide() {
        showSlide(currentSlide + 1);
      }

      function prevSlide() {
        showSlide(currentSlide - 1);
      }

      // Automatically advance the slider
      setInterval(showRandomSlide, 3500); // Change image every 3.5 seconds



