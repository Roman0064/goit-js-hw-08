import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import { galleryItems } from './gallery-items.js';
// Change code below this line
const bodyEl = document.querySelector("#root");

const galleryContainer = document.querySelector('.gallery');

const galleryItem = galleryItems.map(({ preview, original, description }) => {
  const galleryList = `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </li>`;
  return galleryList;
});
galleryContainer.insertAdjacentHTML("beforeend", galleryItem.join(""));

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});