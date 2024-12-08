'use strict'

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData, IMAGES_PER_PAGE } from "./js/pixabay-api.js";
import * as render from "./js/render-functions.js";


const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loadingMoreBtn = document.querySelector(".loading-btn");

const galleryLightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom'
});

let currentPage = 1;
let searchText = "";

form.addEventListener("submit", handleSubmit);
loadingMoreBtn.addEventListener("click", handleClick);


function handleSubmit(event) {
    event.preventDefault();

    searchText = event.target.elements.search.value.trim();
    currentPage = 1;

    if (!searchText) {
        render.showErrorToast("Sorry, the search field is empty. Please try again!");
        return;
    }

    render.hideLoadMoreBtn(loadingMoreBtn);
    fillInGallery([]);
    render.showLoading();

    fetchData(currentPage, searchText)
        .then(result => {
            if (!result.hits.length) {
                fillInGallery([]);
                render.showErrorToast("Sorry, there are no images matching your search query. Please try again!");
                return;
            }

            fillInGallery(result.hits);
            chackIsLastPage((IMAGES_PER_PAGE * currentPage) >= Number(result.totalHits));
        })
        .catch(error => render.showErrorToast(error.message))
        .finally(() => {
            render.hideLoading();
        })
    
    form.reset();
}

async function handleClick(event) {
    currentPage++;
    event.target.disabled = true;
    render.hideLoadMoreBtn(loadingMoreBtn);
    render.showLoading();

    try {
        const data = await fetchData(currentPage, searchText);

        addToGallery(data.hits);
        chackIsLastPage((IMAGES_PER_PAGE * currentPage) >= Number(data.totalHits));

        const galleryItem = document.querySelector(".gallery-item");
        const galleryItemHeight = galleryItem.getBoundingClientRect().height;

        window.scrollBy({
            left: 0,
            top: 2 * galleryItemHeight + 80,
            behavior: "smooth"
        })

    } catch (error) {
        render.showErrorToast(error.message);
    } finally {
        render.hideLoading();
        event.target.disabled = false;
    }
}

function fillInGallery(array) {
    gallery.innerHTML = render.createMarkup(array);
    galleryLightbox.refresh();
}

function addToGallery(array) {
    gallery.insertAdjacentHTML("beforeend", render.createMarkup(array));
    galleryLightbox.refresh();
}

function chackIsLastPage(isLastPage = false) {
    if (isLastPage) {
        render.showInfoToast("We're sorry, but you've reached the end of search results.");
    } else {
        render.showLoadMoreBtn(loadingMoreBtn);
    }
}
