const previewBtnHoverElements = document.querySelectorAll('.previewBtnHover');

previewBtnHoverElements.forEach((Hover) => {
  Hover.addEventListener('mouseover', () => {
    Hover.classList.add('previewBtn-div');

    Hover.querySelector('.previewBtn-div').style.display = 'block';
  });

  Hover.addEventListener('mouseout', () => {
    Hover.querySelector('.previewBtn-div').style.display = 'none';
  });
});


// const productsContainer = document.querySelector('products-container');
//   const coralsLeft = document.querySelector('.corals-left');
//   const coralsRight = document.querySelector('.corals-right');

//   coralsLeft.addEventListener('click', () => {
//     productsContainer.scrollBy({
//       left: -200, // adjust the scroll amount as needed
//       behavior: 'smooth'
//     });
//   });

//   coralsRight.addEventListener('click', () => {
//     productsContainer.scrollBy({
//       left: 200, // adjust the scroll amount as needed
//       behavior: 'smooth'
//     });
//   });



const coralsLeft = document.querySelectorAll('.corals-left');
const coralsRight = document.querySelectorAll('.corals-right');
const containers = document.querySelectorAll('.scrowForLaptop');

// Define the scroll amount
const scrollAmount = 1000;

// Add event listeners
coralsLeft.forEach((left, index) => {
  left.addEventListener('click', () => {
    containers[index].scrollLeft -= scrollAmount;
  });
});

coralsRight.forEach((right, index) => {
  right.addEventListener('click', () => {
    containers[index].scrollLeft += scrollAmount;
  });
});

