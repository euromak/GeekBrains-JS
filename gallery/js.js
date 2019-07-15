"use strict";

/**
 * @property {Object} settings Объект с настройками галереи.
 * @property {string} settings.previewSelector Селектор обертки для миниатюр галереи.
 * @property {string} settings.openedImageWrapperClass Класс для обертки открытой картинки.
 * @property {string} settings.openedImageClass Класс открытой картинки.
 * @property {string} settings.openedImageScreenClass Класс для ширмы открытой картинки.
 * @property {string} settings.openedImageCloseBtnClass Класс для картинки кнопки закрыть.
 * @property {string} settings.openedImageCloseBtnSrc Путь до картинки кнопки открыть.
 */
const gallery = {
  settings: {
    previewSelector: '.mySuperGallery',
    openedImageWrapperClass: 'galleryWrapper',
    openedImageClass: 'galleryWrapper__image',
    openedImageScreenClass: 'galleryWrapper__screen',
    openedImageCloseBtnClass: 'galleryWrapper__close',
    openedImageCloseBtnSrc: 'images/gallery/close.png',
  },

  /**
   * Инициализирует галерею, ставит обработчик события.
   * @param {Object} userSettings Объект настроек для галереи.
   */
  init(userSettings = {}) {
    // свойство для индекса картинки с информацией о большой картинке(data-full_image_url), по которой кликнули
    currentImage: '',
    // Записываем настройки, которые передал пользователь в наши настройки.
    Object.assign(this.settings, userSettings);

    // Находим элемент, где будут превью картинок и ставим обработчик на этот элемент,
    // при клике на этот элемент вызовем функцию containerClickHandler в нашем объекте
    // gallery и передадим туда событие MouseEvent, которое случилось.
    document
      .querySelector(this.settings.previewSelector)
      .addEventListener('click', event => this.containerClickHandler(event));
  },

  /**
   * Обработчик события клика для открытия картинки.
   * @param {MouseEvent} event Событие клики мышью.
   * @param {HTMLElement} event.target Целевой объект, куда был произведен клик.
   */
  containerClickHandler(event) {
    // Если целевой тег не был картинкой, то ничего не делаем, просто завершаем функцию.
    if (event.target.tagName !== 'IMG') {
      return;
    }
    // Открываем картинку с полученным из целевого тега (data-full_image_url аттрибут).

    this.openImage(event.target.dataset.full_image_url);

    gallery.currentImage = event.target;
  },

  /**
   * Открывает картинку.
   * @param {string} src Ссылка на картинку, которую надо открыть.
   */
  openImage(src) {
    /* Получаем контейнер для открытой картинки, в нем находим тег img и ставим ему нужный src. Если не нашли картинку
      то выводим заглушку.
    */
    let img = this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`);
    img.src = src;

    // проверка на наличие картинки на сервере
    img.onerror = function(){
      img.src = 'images/gallery/404.png';
    };

    // ошибка в пути картники
    if (src === undefined ) {
        img.src = 'images/gallery/404.png';
    }
  },

  /**
   * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
   * @returns {Element}
   */
  getScreenContainer() {
    // Получаем контейнер для открытой картинки.
    const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
    // Если контейнер для открытой картинки существует - возвращаем его.
    if (galleryWrapperElement) {
      return galleryWrapperElement;
    }

    // Возвращаем полученный из метода createScreenContainer контейнер.
    return this.createScreenContainer();
  },

  /**
   * Создает контейнер для открытой картинки.
   * @returns {HTMLElement}
   */
  createScreenContainer() {
    // Создаем сам контейнер-обертку и ставим ему класс.
    const galleryWrapperElement = document.createElement('div');
    galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

    galleryWrapperElement.addEventListener('click', () => {this.nextImage(event)});
    galleryWrapperElement.addEventListener('click', () => {this.prevImage(event)});

    // Создаем контейнер занавеса, ставим ему класс и добавляем в контейнер-обертку.
    const galleryScreenElement = document.createElement('div');
    galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
    galleryWrapperElement.appendChild(galleryScreenElement);

    // Создаем картинку для кнопки закрыть, ставим класс, src и добавляем ее в контейнер-обертку.
    const closeImageElement = new Image();
    closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
    closeImageElement.src = this.settings.openedImageCloseBtnSrc;
    closeImageElement.addEventListener('click', () => this.close());
    galleryWrapperElement.appendChild(closeImageElement);

    // Создаем иконку влево
    const arrowLeft = document.createElement('div');
    arrowLeft.classList.add('arrowLeft');
    arrowLeft.innerHTML = '<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>';
    galleryWrapperElement.appendChild(arrowLeft);

    // Создаем иконку вправо
    const arrowRight = document.createElement('div');
    arrowRight.classList.add('arrowRight');
    arrowRight.innerHTML = '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>';
    galleryWrapperElement.appendChild(arrowRight);

    // Создаем картинку, которую хотим открыть, ставим класс и добавляем ее в контейнер-обертку.
    const image = new Image();
    image.classList.add(this.settings.openedImageClass);
    galleryWrapperElement.appendChild(image);

    // Добавляем контейнер-обертку в тег body.
    document.body.appendChild(galleryWrapperElement);

    // Возвращаем добавленный в body элемент, наш контейнер-обертку.
    return galleryWrapperElement;
  },

  /**
   * Переключение картинок по клику на стрелку вправо
   */
  nextImage() {
    if (event.target.className === 'fa fa-chevron-circle-right') {
        const currentImage = document.querySelector(`.${this.settings.openedImageClass}`);
        const images = document.getElementsByClassName('galleryPreviewsContainer');

        /* Ищем в массиве маленьких картинок, элемент с одинаковым значением в атрибуте dataset. Берем у следующего
        * элемента в этом массиве src и перезаписываем значение у текущей картинки. Запоминаем новый элемент в свойстве
        * this.currentImage.
        * */
        for (let i = 0; i < images[0].children.length; i++) {
          if (gallery.currentImage.src === images[0].children[i].src) {
              currentImage.src = images[0].children[i+1].dataset.full_image_url;
              gallery.currentImage = images[0].children[i+1];

              break;
          } else if (gallery.currentImage.src === images[0].children[images[0].children.length-1].src) {
            currentImage.src = images[0].children[0].dataset.full_image_url;
            gallery.currentImage = images[0].children[0];

            break;
          }
      }
    }
  },
  /**
   * Переключение картинок по клику на стрелку влево
   */
  prevImage() {
    if (event.target.className === 'fa fa-chevron-circle-left') {
        const currentImage = document.querySelector(`.${this.settings.openedImageClass}`);
        const images = document.getElementsByClassName('galleryPreviewsContainer');

        /* Ищем в массиве маленьких картинок, элемент с одинаковым значением в атрибуте dataset. Берем у следующего
        * элемента в этом массиве src и перезаписываем значение у текущей картинки. Запоминаем новый элемент в свойстве
        * this.currentImage.
        * */
        for (let i = 0; i < images[0].children.length; i++) {
            if ((gallery.currentImage.src === images[0].children[i].src)
                && (gallery.currentImage.src !== images[0].children[0].src)) {
                currentImage.src = images[0].children[i-1].dataset.full_image_url;
                gallery.currentImage = images[0].children[i-1];
                console.log(gallery.currentImage);

                break;
            } else if (gallery.currentImage.src === images[0].children[images[0].children.length - 4].src) {
                currentImage.src = images[0].children[1].dataset.full_image_url;
                gallery.currentImage = images[0].children[images[0].children.length-1];

                break;
            }
        }
      }
  },
  /**
   * Закрывает (удаляет) контейнер для открытой картинки.
   */
  close() {
    document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
  }
};

// Инициализируем нашу галерею при загрузке страницы.
window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});