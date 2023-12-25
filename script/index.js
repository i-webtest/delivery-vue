const modalFunc = () => {
  const modal = document.querySelector('.overlay');
  const cartBtn = document.querySelector('.cart');

  const openModal = () => {
    modal.classList.add('open');
  };

  const closeModal = () => {
    modal.classList.remove('open');
  };

  cartBtn.addEventListener('click', openModal);

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay') || e.target.closest('.cart-modal__close')) {
      closeModal();
    }
  });
};

const restFunc = () => {
  const container = document.querySelector('#rest-container');

  const restArray = [
    {
      id: 0,
      title: 'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'image.jpg',
    },
    {
      id: 1,
      title: 'Тануки',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'image-1.jpg',
    },
    {
      id: 2,
      title: 'FoodBand',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'image-2.jpg',
    },
    {
      id: 3,
      title: 'Жадина-пицца',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'image-3.jpg',
    },
    {
      id: 4,
      title: 'Точка еды',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'image-4.jpg',
    },
    {
      id: 5,
      title: 'PizzaBurger',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'image-5.jpg',
    },
  ];

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка...</p>';
  };

  const renderRests = (arr) => {
    container.innerHTML = '';

    arr.forEach((card) => {
      container.insertAdjacentHTML(
        'beforeend',
        `
        <li class="products__card">
          <a href="./goods.html?id=${card.id}">
            <img class="products__image" src="./image/rests/${card.image}" alt="${card.title}" />

            <div class="products__wrapper">
              <div class="products__wrapper-header">
                <h3 class="products__wrapper-title">${card.title}</h3>
                <p><span>${card.time} мин</span></p>
              </div>

              <div class="products__info">
                <div class="products__rating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M14.6515 6.24221C14.5553 5.94476 14.2915 5.73349 13.9793 5.70536L9.73947 5.32038L8.06292 1.39623C7.9393 1.10864 7.65776 0.922485 7.34495 0.922485C7.03215 0.922485 6.75061 1.10864 6.62699 1.39691L4.95043 5.32038L0.709893 5.70536C0.398319 5.73417 0.135163 5.94476 0.0384405 6.24221C-0.0582818 6.53966 0.0310434 6.86592 0.266741 7.07158L3.47158 9.88224L2.52655 14.0451C2.45739 14.3512 2.5762 14.6676 2.83016 14.8512C2.96667 14.9498 3.12638 15 3.28744 15C3.4263 15 3.56404 14.9626 3.68766 14.8886L7.34495 12.7028L11.0009 14.8886C11.2684 15.0495 11.6057 15.0349 11.8591 14.8512C12.1131 14.667 12.2318 14.3505 12.1627 14.0451L11.2177 9.88224L14.4225 7.07214C14.6582 6.86592 14.7482 6.54022 14.6515 6.24221Z"
                      fill="#FFC107"
                    />
                  </svg>

                  <span>${card.rating}</span>
                </div>

                <div class="products__price">
                  <span>От ${card.price} ₽</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                    <circle cx="2.68982" cy="3" r="2.5" fill="#8C8C8C" />
                  </svg>
                  <span>${card.type}</span>
                </div>
              </div>
            </div>
          </a>
        </li>
      `,
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderRests(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const container = document.querySelector('#goods-container');

  const goodsArray = [
    {
      id: 0,
      title: 'Ролл угорь стандарт',
      components: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
      price: 250,
      image: 'image.jpg',
    },
    {
      id: 1,
      title: 'Калифорния лосось стандарт',
      components: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
      price: 395,
      image: 'image-2.jpg',
    },
    {
      id: 2,
      title: 'Окинава стандарт',
      components: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий.',
      price: 250,
      image: 'image-4.jpg',
    },
    {
      id: 3,
      title: 'Цезарь маки хl',
      components: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь.',
      price: 250,
      image: 'image-1.jpg',
    },
    {
      id: 4,
      title: 'Ясай маки стандарт 185 г',
      components: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг.',
      price: 250,
      image: 'image-3.jpg',
    },
    {
      id: 5,
      title: 'Ролл с креветкой стандарт',
      components: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы.',
      price: 250,
      image: 'image-5.jpg',
    },
  ];

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка...</p>';
  };

  const renderGoods = (arr) => {
    container.innerHTML = '';

    arr.forEach((goods) => {
      container.insertAdjacentHTML(
        'beforeend',
        `
        <li class="products__card goods-card">
          <img
            class="products__image goods-card__image"
            src="./image/goods/${goods.image}"
            alt="${goods.title}"
          />

          <div class="products__wrapper">
            <h3 class="goods-card__title">${goods.title}</h3>

            <p class="goods-card__description">${goods.components}</p>

            <div class="goods-card__info">
              <button class="goods-card__btn" type="button">
                В корзину
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path
                    d="M14.4202 11.7302H5.11549L5.58268 10.7786L13.3452 10.7646C13.6077 10.7646 13.8327 10.5771 13.8796 10.3177L14.9546 4.3005C14.9827 4.14269 14.9405 3.98019 14.8374 3.85675C14.7864 3.796 14.7228 3.74707 14.6511 3.71334C14.5793 3.67961 14.501 3.6619 14.4217 3.66144L4.54674 3.62863L4.46237 3.23175C4.40924 2.97863 4.18112 2.79425 3.92174 2.79425H1.50768C1.36139 2.79425 1.2211 2.85236 1.11766 2.9558C1.01423 3.05924 0.956116 3.19953 0.956116 3.34581C0.956116 3.4921 1.01423 3.63239 1.11766 3.73583C1.2211 3.83926 1.36139 3.89738 1.50768 3.89738H3.47487L3.84362 5.6505L4.75143 10.0458L3.58268 11.9536C3.52198 12.0355 3.48543 12.1328 3.47714 12.2344C3.46886 12.336 3.48918 12.438 3.5358 12.5286C3.62955 12.7146 3.81862 12.8318 4.02799 12.8318H5.00924C4.80005 13.1096 4.68706 13.448 4.68737 13.7958C4.68737 14.6802 5.40612 15.3989 6.29049 15.3989C7.17487 15.3989 7.89362 14.6802 7.89362 13.7958C7.89362 13.4474 7.77799 13.1083 7.57174 12.8318H10.0889C9.87974 13.1096 9.76675 13.448 9.76705 13.7958C9.76705 14.6802 10.4858 15.3989 11.3702 15.3989C12.2546 15.3989 12.9733 14.6802 12.9733 13.7958C12.9733 13.4474 12.8577 13.1083 12.6514 12.8318H14.4217C14.7249 12.8318 14.9733 12.5849 14.9733 12.2802C14.9724 12.1341 14.9137 11.9942 14.8101 11.8912C14.7065 11.7881 14.5663 11.7303 14.4202 11.7302V11.7302ZM4.77643 4.71613L13.7733 4.74581L12.8921 9.68019L5.82487 9.69269L4.77643 4.71613ZM6.29049 14.2896C6.01862 14.2896 5.79674 14.0677 5.79674 13.7958C5.79674 13.5239 6.01862 13.3021 6.29049 13.3021C6.56237 13.3021 6.78424 13.5239 6.78424 13.7958C6.78424 13.9268 6.73222 14.0524 6.63962 14.1449C6.54703 14.2375 6.42144 14.2896 6.29049 14.2896V14.2896ZM11.3702 14.2896C11.0983 14.2896 10.8764 14.0677 10.8764 13.7958C10.8764 13.5239 11.0983 13.3021 11.3702 13.3021C11.6421 13.3021 11.8639 13.5239 11.8639 13.7958C11.8639 13.9268 11.8119 14.0524 11.7193 14.1449C11.6267 14.2375 11.5011 14.2896 11.3702 14.2896V14.2896Z"
                    fill="white"
                  />
                </svg>
              </button>

              <span class="goods-card__price">${goods.price} ₽</span>
            </div>
          </div>
        </li>
      `,
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderGoods(goodsArray);
    }, 1000);
  }
};

modalFunc();
restFunc();
goodsFunc();
