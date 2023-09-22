const catalogSlider = new Swiper('.main__catalog-slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        768: {
            slidesPerView: 4
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

if (document.querySelector('.main__catalog-slider')) {
    if (window.innerWidth <= 768) {
        catalogSlider.destroy();
    }
}

const advantagesSlider = new Swiper('.advantages-slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.advantages-next',
      prevEl: '.advantages-prev',
    },
});

const portfolioSlider = new Swiper('.portfolio-slider', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.portfolio-next',
      prevEl: '.portfolio-prev',
    },
});

const reviewsSlider = new Swiper('.reviews-slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 25,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-next',
      prevEl: '.reviews-prev',
    },
});

const teamSlider = new Swiper('.team-slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 25,
  
    // Navigation arrows
    navigation: {
      nextEl: '.team-next',
      prevEl: '.team-prev',
    },
});

const burger = document.querySelector('#nav-burger'),
      headerNav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    headerNav.classList.toggle('nav-shown');
    document.body.classList.toggle('modal-open');
});

// Faq

const questions = document.querySelectorAll('.faq__question');

questions.forEach(question => {
    const questionBottom = question.querySelector('.faq__question-bottom'),
          questionPlus = question.querySelector('.question-plus'),
          questionMinus = question.querySelector('.question-minus');
    question.addEventListener('click', () => {
        questionBottom.classList.toggle('question-open');
        questionPlus.classList.toggle('question-hide');
        questionMinus.classList.toggle('question-open');
    });
});

// Counter

if (document.querySelector('.counter')) {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const decrement = counter.querySelector('.counter-decrement'),
        increment = counter.querySelector('.counter-increment'),
        number = counter.querySelector('.counter-num');
        decrement.addEventListener('click', () => {
            number.textContent = Number(number.textContent)-1;
            if (+number.textContent <= 0) {
                number.textContent = 1;
            }
        });
        
        increment.addEventListener('click', () => {
            number.textContent = Number(number.textContent)+1;
        })
    });
}

// History 

const timelineBlocks = document.querySelectorAll('.history__timeline-block'),
      textBlocks = document.querySelectorAll('.about__history-text');

const clearArr = (arr, itemClass) => {
    arr.forEach(item => {
        item.classList.remove(itemClass);
    });
};

const clearDateElems = (arr, elemClass, dataAttrName, dataAttr) => {
    arr.forEach(item => {
        item.classList.remove(elemClass);

        if (item.getAttribute(dataAttrName) == dataAttr) {
            item.classList.add(elemClass);
        }
    });
};

timelineBlocks.forEach(block => {
    block.addEventListener('click', (e) => {
        if (!e.target.classList.contains('history-active')) {
            clearArr(timelineBlocks, 'history-active');
            e.target.classList.add('history-active');
  
            clearDateElems(textBlocks, 'text-show', 'data-date', e.target.getAttribute('data-date'));
        }
    });
});

// Production

const bigImgs = document.querySelectorAll('.production__bigimg-item'),
      imgsItems = document.querySelectorAll('.production__images-item');

imgsItems.forEach(img => {
    img.addEventListener('click', (e) => {
        if (!e.target.classList.contains('item-active')) {
            clearArr(imgsItems, 'item-active');
            e.target.classList.add('item-active');

            clearDateElems(bigImgs, 'item-active', 'data-count', e.target.getAttribute('data-count'));
        }
    });
});

// Page nav

if (document.querySelector('.page__navigation')) {
    const pageSelect = document.querySelector('.page__navigation'),
      pageSelectItems = pageSelect.querySelectorAll('.page__navigation-item');

    pageSelect.addEventListener('click', () => {
        pageSelectItems.forEach(item => {
            item.classList.toggle('page-show');
        });
    });
}


