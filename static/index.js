// анимации

window.addEventListener('load', function() {
  setTimeout(function() {
    const firsAnim = document.querySelectorAll('.animation-first-down');
    const secondAnim = document.querySelectorAll('.animation-second-down');
    const thirdAnim = document.querySelectorAll('.animation-third-down');
    const fourthAnim = document.querySelectorAll('.animation-fourth');
    const fifthAnim = document.querySelectorAll('.animation-fifth');
    const sixthAnim = document.querySelectorAll('.animation-sixth');
    const seventhAnim = document.querySelectorAll('.animation-seventh');

    firsAnim.forEach(function(element) {
      element.classList.add('animation-first-down-active');
    });

    secondAnim.forEach(function(element) {
      element.classList.add('animation-second-down-active');
    });

    thirdAnim.forEach(function(element) {
      element.classList.add('animation-third-down-active');
    });

    fourthAnim.forEach(function(element) {
      element.classList.add('animation-fourth-active');
    });

    fifthAnim.forEach(function(element) {
      element.classList.add('animation-fifth-active');
    });

    sixthAnim.forEach(function(element) {
      element.classList.add('animation-sixth-active');
    });

    seventhAnim.forEach(function(element) {
      element.classList.add('animation-seventh-active');
    });


  }, 400); 
});


  // анимация скрол
  const animItems = document.querySelectorAll(".anim-items");

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
  
    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 8;
  
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
  
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
  
        if (window.pageYOffset > animItemOffset - animItemPoint && window.pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('anim-active');
        } 
        // else {
        //   animItem.classList.remove('anim-active');
        // }
      }
    }
  
    function offset(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  
    animOnScroll()
}

// меню бургер

const burgerButton = document.getElementById('burger');
const burgerNav = document.getElementById('burger__block');
const burgerClose = document.querySelector('.burger__close');

function toggleBurgerNav() {
  burgerNav.classList.toggle('active');
}

burgerButton.addEventListener('click', toggleBurgerNav);
burgerClose.addEventListener('click', toggleBurgerNav);

// анимация бургер меню