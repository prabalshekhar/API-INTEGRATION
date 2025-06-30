// script.js
async function fetchDogImage() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      const img = document.getElementById('dog-image');
      img.src = data.message;
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  }
  
  // Load one image on page load
  fetchDogImage();
  