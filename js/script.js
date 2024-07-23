window.addEventListener('DOMContentLoaded', () => {
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
        slidesPerView: 1.2,
        spaceBetween: 20,
        initialSlide: 1,

        breakpoints: {
            768: {
                slidesPerView: 3
            }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.portfolio-next',
          prevEl: '.portfolio-prev',
        },
    });
    
    const reviewsSlider = new Swiper('.reviews-slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 25,

        breakpoints: {
            768: {
                slidesPerView: 'auto'
            }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.reviews-next',
          prevEl: '.reviews-prev',
        },
    });
    
    const teamSlider = new Swiper('.team-slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 25,

        breakpoints: {
            768: {
                slidesPerView: 'auto'
            }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.team-next',
          prevEl: '.team-prev',
        },
    });

    const accountSlider = new Swiper('.account-slider', {
        direction: 'horizontal',
        loop: false,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 1,

        breakpoints: {
            768: {
                slidesPerView: 3
            }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.account-next',
          prevEl: '.account-prev',
        },
    });

    const historySlider = new Swiper('.history-swiper', {
        enabled: true,
        direction: 'horizontal',
        slidesPerView: 3,
        loop: false,
        centeredSlides: false,
        initialSlide: 8,

        breakpoints: {
            992: {
                slidesPerView: 9,
            },
            768: {
                loop: false,
                slidesPerView: 6,
                spaceBetween: 0,
            }
        },

        navigation: {
            nextEl: '.history-next',
            prevEl: '.history-prev',
          },
    });

    const feedbackSlider = new Swiper('.feedback-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,

        breakpoints: {
            768: {
                slidesPerView: 1,
            }
        },

        navigation: {
            nextEl: '.feedback-next',
            prevEl: '.feedback-prev',
          },
    });
    
    const burger = document.querySelector('#nav-burger'),
          headerNav = document.querySelector('.header__nav');
    
    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        headerNav.classList.toggle('nav-shown');
        document.body.classList.toggle('modal-open');
    });

    // modal
    if (document.querySelector('.modal')) {
        const modals = document.querySelectorAll('.modal'),
              modalBtns = document.querySelectorAll('.modal-btn');

        modalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modals.forEach(modal => {
                    if (btn.getAttribute('data-modal') == modal.getAttribute('data-modal')) {
                        modal.classList.add('show');
                        document.documentElement.style.overflow = 'hidden';
                        document.body.style.overflow = 'hidden';
                    }
                });
            });
        });

        modals.forEach(modal => {
            const closeBtns = modal.querySelectorAll('.modal-close');
            
            closeBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    modal.classList.remove('show');
                    document.documentElement.style.overflow = '';
                    document.body.style.overflow = ''; 
                });
            })
        });
        
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target == modal) {
                    modal.classList.remove('show');
                    document.documentElement.style.overflow = '';
                    document.body.style.overflow = ''; 
                }
            }); 
        });
    }

    // account login
    if (document.querySelector('.account-login')) {
        const loginModal = document.querySelector('.account-login');
        const loginSwitches = loginModal.querySelectorAll('.account-login__switch');
        const loginModalBlocks = loginModal.querySelectorAll('.account-login__block');
    
        loginSwitches.forEach(item => {
            item.addEventListener('click', () => {
                loginModalBlocks.forEach(block => {
                    block.classList.toggle('active-type');
                });
            });
        });
    }
    
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

    // basket delete

    if (document.querySelector('.basket__item') && document.querySelector('.basket__deleted-notification')) {
        const basketItems = document.querySelectorAll('.basket__item');
        
        const deletedNotification = document.querySelector('.basket__deleted-notification');

        basketItems.forEach(item => {
            const deleteBtn = item.querySelector('.delete-btn');

            deleteBtn.addEventListener('click', () => {
                item.classList.add('deleted-item');
                basketDelete(true);
            });
        });

        const returnBtn = deletedNotification.querySelector('.return-btn');

        returnBtn.addEventListener('click', () => {
            basketItems.forEach(item => {
                item.classList.remove('deleted-item');
            });

            basketDelete(false);
        });

        function basketDelete(state) {
            if (state == true) {
                deletedNotification.classList.add('notification-active');
            } else {
                deletedNotification.classList.remove('notification-active')
            }
        };

        basketItems.forEach(item => {
            const itemCounter = item.querySelector('.basket__item-counter');
            const counterValue = itemCounter.querySelector('.counter-num');
            const counterBtns = itemCounter.querySelectorAll('button');

            counterBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    if (e.target.closest('button').classList.contains('counter-decrement') && counterValue.innerHTML == 1) {
                        item.classList.add('deleted-item');
                        basketDelete(true)
                    }
                });
            });
        }); 
    }
    
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

    // account list
    if (document.querySelector('.account__list')) {
        const accountList = document.querySelector('.account__list'),
              accountListItems = accountList.querySelectorAll('.account__list-item');

        accountListItems.forEach(item => {
            console.log()
            item.addEventListener('click', (e) => {
                console.log(e.target)
                if (e.target.classList.contains('active-tab')) {
                    accountList.classList.add('expanded');
                } else {
                    accountList.classList.remove('expanded');
                }
            });
        });
    }
    
    // Catalog 
    
    if (document.querySelector('.product__card')) {
        const productCards = document.querySelectorAll('.product__card');
    
        productCards.forEach(card => {
            const cardColors = card.querySelector('.card__picture-colors'),
                  cardImgs = card.querySelectorAll('.card__picture-img');
    
            cardColors.addEventListener('click', (e) => {
                card.querySelectorAll('.card__picture-color').forEach(color => {
                    color.classList.remove('color-picked');
                });
    
                e.target.classList.add('color-picked');
                cardImgs.forEach(img => {
                    img.classList.remove('color-picked');
                    
                    if (e.target.getAttribute('data-color') == img.getAttribute('data-color')) {
                        img.classList.add('color-picked');
                    }
                });
            });
        });
    
        const sortBtn = document.querySelector('.products__filter-btn'),
          productsSort = document.querySelector('.products__filter-sort');

        if (sortBtn) {
            sortBtn.addEventListener('click', () => {
                productsSort.classList.toggle('sort-active');
            });
        }

        const productCardBtns = document.querySelectorAll('.product__card-btn');

        const inCard = 'В корзине',
              notInCard = 'В корзину'

        productCardBtns.forEach(btn => {
            let btnText = btn.querySelector('span');
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('btn-active')) {
                    btn.classList.add('btn-active')
                    btnText.textContent = inCard;
                } else {
                    btn.classList.remove('btn-active')
                    btnText.textContent = notInCard;
                }
            });
        });
    }

    // password show
    if (document.querySelector('.password-container')) {
        const passwordContainer = document.querySelectorAll('.password-container');

        passwordContainer.forEach(container => {
            const toggleBtn = container.querySelector('.toggle-password'),
                input = container.querySelector('input'),
                ico = container.querySelector('img');

            toggleBtn.addEventListener('click', () => {
                if (input.type == 'password') {
                    input.type = 'text';
                    ico.src = './img/password-hide.svg'
                } else {
                    input.type = 'password';
                    ico.src = './img/password-show.svg'
                }
            });
        });
    }

    // categories

    if (document.querySelector('.personalization__category')) {
        const categories = document.querySelectorAll('.personalization__category');

        categories.forEach(category => {
            category.addEventListener('click', () => {
                category.classList.toggle('active-item');
            });
        });
    };

    // factures
    if (document.querySelector('.content__factures-item')) {
        const facturesItems = document.querySelectorAll('.content__factures-item');

        facturesItems.forEach(item => {
            item.addEventListener('click', () => {
                facturesItems.forEach(item => {
                    item.classList.remove('active-item');
                });

                item.classList.add('active-item');
            });
        });
    }

    // Tabs

    if (document.querySelector('.tabs__list') || document.querySelector('.tabs__items')) {
        const tabsListItems = document.querySelectorAll('.tabs__list-item');
        const tabsItems = document.querySelectorAll('.tabs__item');
        
        tabsListItems.forEach(item => {
            item.addEventListener('click', () => {
                tabsListItems.forEach(listItem => {
                    listItem.classList.remove('active-tab');
                });

                item.classList.add('active-tab');

                const selectedTab = item.getAttribute('data-tab');

                tabsItems.forEach(tabsItem => {
                    if (tabsItem.getAttribute('data-tab') === selectedTab) {
                        tabsItems.forEach(item => {
                            item.classList.remove('active-tab');
                        });
                        
                        tabsItem.classList.add('active-tab');
                    }
                });
            });
        });
    }

    // account orders pagination
    if (document.querySelector('.account__orders')) {
        // Получаем все элементы order
        const orders = document.querySelectorAll('.account__order');
        const buttons = document.querySelectorAll('.pagination button:not(.pagination-prev):not(.pagination-next)');
        let currentPage = 1;
        const itemsPerPage = 2;

        // Функция для отображения нужных элементов
        function showPage(page) {
            // Прячем все элементы
            orders.forEach(order => order.style.display = 'none');

            // Вычисляем индексы элементов для отображения
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;

            // Показываем только нужные элементы
            for (let i = start; i < end && i < orders.length; i++) {
                orders[i].style.display = 'block';
            }

            // Обновляем активную кнопку
            buttons.forEach(button => button.classList.remove('active'));
            if (page <= buttons.length) {
                buttons[page - 1].classList.add('active');
            }
        }

        // Обработчики событий для кнопок пагинации
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                currentPage = index + 1;
                showPage(currentPage);
            });
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (currentPage < Math.ceil(orders.length / itemsPerPage)) {
                currentPage++;
                showPage(currentPage);
            }
        });

        // Показываем первую страницу по умолчанию
        showPage(currentPage);
    }

    // account order list
    if (document.querySelector('.account__order')) {
        const orders = document.querySelectorAll('.account__order');

        orders.forEach(order => {
            const orderBtn = order.querySelector('.account__order-more'),
                  orderContent = order.querySelector('.order__content');

            orderBtn.addEventListener('click', () => {
                orderBtn.classList.toggle('activeBtn');
                orderContent.classList.toggle('show');
            });
        });
    }

    if (document.querySelector('[data-fancybox]')) {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
    }

    // account types
    if (document.querySelector('.accountTypeBtn')) {
        const btns = document.querySelectorAll('.accountTypeBtn'),
              forms = document.querySelectorAll('.formBlock'),
              tabsItems = document.querySelectorAll('.account__list-item'),
              categories = document.querySelector('.account-personalization');

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(btn => {
                    btn.classList.remove('active-type');
                });
                
                btn.classList.add('active-type');

                forms.forEach(form => {
                    form.classList.remove('active-type');
                });

                forms.forEach(form => {
                    if (btn.getAttribute('data-type') == form.getAttribute('data-type')) {
                        form.classList.add('active-type');
                    }
                });

                tabsItems.forEach(item => {
                    item.classList.remove('hide');
                });
                
                tabsItems.forEach(item => {
                    if (btn.getAttribute('data-type') == 'entity') {
                        if (item.classList.contains('entity-inactive')) {
                            item.classList.add('hide')
                        }
                    }
                });

                if (btn.getAttribute('data-type') == 'entity') {
                    categories.classList.add('hide');
                } else {
                    categories.classList.remove('hide');
                }
            });
        });
    }

    if (document.querySelector('.favourite-btn')) {
        const favouriteBtns = document.querySelectorAll('.favourite-btn');

        favouriteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('btn-active');
            });
        });
    }

    // products filter
    
    if (document.querySelector('.filter-btn')) {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const filterItems = document.querySelectorAll('.filter-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(btn => {
                    btn.classList.remove('active-item');
                });

                filterItems.forEach(item => {
                    item.classList.remove('filtered');
                });

                filterItems.forEach(item => {
                    if (btn.getAttribute('data-filter') == item.getAttribute('data-filter')) {
                        btn.classList.add('active-item');
                        item.classList.toggle('filtered');
                    }
                });
            });
        });
    }

    // products categories
    if (document.querySelector('.categories__list-link')) {
        const categoriesLinks = document.querySelectorAll('.categories__list-link');

        const categoriesItems = document.querySelectorAll('.categories-item');

        categoriesLinks.forEach(link => {
            link.addEventListener('click', () => {
                categoriesLinks.forEach(linkItem => {
                    linkItem.classList.remove('active-item');
                });

                link.classList.add('active-item');

                categoriesItems.forEach(categoryItem => {
                    categoryItem.classList.remove('item-active');
                })

                categoriesItems.forEach(item => {
                    if (link.getAttribute('data-category') == 'all') {
                        item.classList.add('item-active');
                    } else if (link.getAttribute('data-category') == item.getAttribute('data-category')) {
                        item.classList.add('item-active');
                    }
                });
            });
        });
    }

    // categories select
    if (document.querySelector('.categories__select')) {
        
    }
    
    // Yandex map
    
    if (document.querySelector('#scheme-map')) {
        ymaps.ready(init);
        function init(){
            var map = new ymaps.Map("scheme-map", {
                center: [55.76, 37.64],
                zoom: 7
            });
    
            map.controls.remove('geolocationControl'); // удаляем геолокацию
            map.controls.remove('searchControl'); // удаляем поиск
            map.controls.remove('trafficControl'); // удаляем контроль трафика
            map.controls.remove('typeSelector'); // удаляем тип
            map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
            map.controls.remove('rulerControl'); // удаляем контрол правил
            map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
        }   
    }
});