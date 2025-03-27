import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a');
searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value.trim();
    if (!query) {
        iziToast.error({ title: 'Error', message: 'Please enter a search query' });
        return;
    }
    gallery.innerHTML = '';
    loader.style.display = 'block';
    try {
        const images = await fetchImages(query);
        loader.style.display = 'none';
        if (!images || images.length === 0) {
            iziToast.warning({ title: 'No results', message: 'No images found' });
            return;
        }
        gallery.innerHTML = renderImages(images);
        lightbox.refresh();
        searchForm.reset();
      } catch (error) {
        iziToast.error({ title: 'Error', message: 'Something went wrong!' });
    }
});