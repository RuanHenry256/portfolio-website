document.addEventListener('mousemove', (e) => {
  // Parallax background movement
  const body = document.body;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const moveRangeX = 15;
  const moveRangeY = 15;

  const mouseXRatio = (e.clientX / viewportWidth - 0.5) * -1;
  const mouseYRatio = (e.clientY / viewportHeight - 0.5) * -1;

  const bgPosX = 50 + (mouseXRatio * moveRangeX);
  const bgPosY = 50 + (mouseYRatio * moveRangeY);

  body.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
});

// Carousel functionality
document.querySelectorAll('.project-carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  const leftArrow = carousel.querySelector('.left-arrow');
  const rightArrow = carousel.querySelector('.right-arrow');
  let currentIndex = 0;
  let interval;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  rightArrow.addEventListener('click', () => {
    nextImage();
    resetInterval();
  });

  leftArrow.addEventListener('click', () => {
    prevImage();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextImage, 4000);
  }

  // Initial setup
  showImage(currentIndex);
  interval = setInterval(nextImage, 4000);
});

// Lightbox functionality for image click-to-zoom
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('img'); // optional chaining in case it’s missing

if (lightbox && lightboxImg) {
  document.querySelectorAll('.project-carousel img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
      // Optional: prevent background scroll when lightbox is open
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
      document.body.style.overflow = ''; // restore scroll
    }
  });
}
