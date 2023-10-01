{
  const galleryItems = document.querySelectorAll(".galleryItem img");
  const popup = document.querySelector(".popup");
  const popupClose = document.querySelector(".popup__close");
  const popupImage = document.querySelector(".popup__img");
  const arrowRight = document.querySelector(".popup__arrow--right");
  const arrowLeft = document.querySelector(".popup__arrow--left");

  let currentImgIndex;

  const showNextImage = () => {
    if (currentImgIndex === galleryItems.length - 1) {
      currentImgIndex = 0;
    } else {
      currentImgIndex = currentImgIndex + 1;
    }
    popupImage.src = galleryItems[currentImgIndex].src;
  };

  const showPreviousImage = () => {
    if (currentImgIndex === 0) {
      currentImgIndex = galleryItems.length - 1;
    } else {
      currentImgIndex = currentImgIndex - 1;
    }
    popupImage.src = galleryItems[currentImgIndex].src;
  };

  galleryItems.forEach((galleryItem, index) => {
    galleryItem.addEventListener("click", ({ target }) => {
      popup.classList.toggle("popup__hidden");
      popupImage.src = target.src;
      currentImgIndex = index;
    });
  });

  const closePopup = () => {
    popup.classList.add("popup__hidden");
  };

  popupClose.addEventListener("click", closePopup);

  arrowRight.addEventListener("click", showNextImage);

  arrowLeft.addEventListener("click", showPreviousImage);

  document.addEventListener("keydown", ({ code, keyCode }) => {
    if (!popup.classList.contains("popup__hidden")) {
      if (code === "ArrowRight" || keyCode === 39) {
        showNextImage();
      }

      if (code === "ArrowLeft" || keyCode === 37) {
        showPreviousImage();
      }

      if (code === "Escape" || keyCode === 27) {
        closePopup();
      }
    }
  });

  popup.addEventListener("click", ({ target }) => {
    if (target === popup) {
      closePopup();
    }
  });
}
