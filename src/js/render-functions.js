'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const loading = document.querySelector(".loading-container-hide");

export function showLoading() {
    loading.classList.replace("loading-container-hide", "loading-container-show");
}

export function hideLoading() {
    loading.classList.replace("loading-container-show", "loading-container-hide");
}

export function showLoadMoreBtn(loadingMoreBtn) {
  if (loadingMoreBtn) {
    loadingMoreBtn.classList.replace("loading-btn-hide", "loading-btn-show");
  }
}

export function hideLoadMoreBtn(loadingMoreBtn) {
  if (loadingMoreBtn) {
    loadingMoreBtn.classList.replace("loading-btn-show", "loading-btn-hide");
  }
}

export function showErrorToast(message = "Error") {
    iziToast.error({
        position: 'topRight',
        message: message
    });
}

export function showInfoToast(message = "Info") {
    iziToast.info({
        position: 'topRight',
        message: message
    });
}

export function createMarkup(array) {
    return array.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-item">
            <a
              class="gallery-link"
              href="${largeImageURL}"
            >
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
                width="360"
                height="200"
              />
              <ul class="gallery-card-list">
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Likes</p>
                    <p class="gallery-card-list-info-text">${likes}</p>
                  </div>
                </li>
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Views</p>
                    <p class="gallery-card-list-info-text">${views}</p>
                  </div>
                </li>
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Comments</p>
                    <p class="gallery-card-list-info-text">${comments}</p>
                  </div>
                </li>
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Downloads</p>
                    <p class="gallery-card-list-info-text">${downloads}</p>
                  </div>
                </li>
              </ul>
            </a>
          </li>`
      }).join('');
}
