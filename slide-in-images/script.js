function debounce(func, wait = 20) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}

const images = document.querySelectorAll(".slide-in");

/**
 * For each image, check if the image is half shown and not scrolled past, if so, add the class
 * 'active' to the image, otherwise remove the class 'active' from the image.
 */
function slideImage() {
  images.forEach((image) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(slideImage));
