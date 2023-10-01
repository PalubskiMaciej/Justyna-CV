const galleryItems = document.querySelectorAll(".galleryItem img");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupImage = document.querySelector(".popup__img");
const arrowRight = document.querySelector(".popup__arrow--right");
const arrowLeft = document.querySelector(".popup__arrow--left");

let currentImgIndex;

galleryItems.forEach((galleryItem, index) => {
  galleryItem.addEventListener("click", ({ target }) => {
    popup.classList.toggle("popup__hidden");
    popupImage.src = target.src;
    currentImgIndex = index;
  });
});

popupClose.addEventListener("click", () => {
  popup.classList.add("popup__hidden");
});

arrowRight.addEventListener("click", () => {
  if (currentImgIndex === galleryItems.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex = currentImgIndex + 1;
  }
  popupImage.src = galleryItems[currentImgIndex].src;
});

arrowLeft.addEventListener("click", () => {
  if (currentImgIndex === 0) {
    currentImgIndex = galleryItems.length - 1;
  } else {
    currentImgIndex = currentImgIndex - 1;
  }
  popupImage.src = galleryItems[currentImgIndex].src;
});
