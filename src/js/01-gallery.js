import { galleryItems } from './gallery-items';

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox'; // Описаний в документації

import 'simplelightbox/dist/simple-lightbox.min.css'; // Додатковий імпорт стилів

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML(
  'beforeend',
  galleryItems
    .map(
      galleryItem =>
        `<div class="gallery__item">
        <a clss="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image"
        src="${galleryItem.preview}" 
        data-source="${galleryItem.original}"
        alt= "${galleryItem.description}"></a></div>`
    )
    .join('')
);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
