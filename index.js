import{a as x,i as u,S as I}from"./assets/vendor-4dYZuk4Q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const q="https://pixabay.com/api/",g=15;async function y(e=1,t){const{data:a}=await x(q,{params:{key:void 0,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e,q:t}});return a}const h=document.querySelector(".loading-container-hide");function p(){h.classList.replace("loading-container-hide","loading-container-show")}function m(){h.classList.replace("loading-container-show","loading-container-hide")}function T(e){e&&e.classList.replace("loading-btn-hide","loading-btn-show")}function L(e){e&&e.classList.replace("loading-btn-show","loading-btn-hide")}function d(e="Error"){u.error({position:"topRight",message:e})}function $(e="Info"){u.info({position:"topRight",message:e})}function b(e){return e.map(({webformatURL:t,largeImageURL:a,tags:l,likes:i,views:r,comments:s,downloads:E})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${a}"
            >
              <img
                class="gallery-image"
                src="${t}"
                alt="${l}"
                width="360"
                height="200"
              />
              <ul class="gallery-card-list">
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Likes</p>
                    <p class="gallery-card-list-info-text">${i}</p>
                  </div>
                </li>
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Views</p>
                    <p class="gallery-card-list-info-text">${r}</p>
                  </div>
                </li>
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Comments</p>
                    <p class="gallery-card-list-info-text">${s}</p>
                  </div>
                </li>
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Downloads</p>
                    <p class="gallery-card-list-info-text">${E}</p>
                  </div>
                </li>
              </ul>
            </a>
          </li>`).join("")}const w=document.querySelector(".form"),v=document.querySelector(".gallery"),c=document.querySelector(".loading-btn"),S=new I(".gallery a",{captionDelay:250,captionType:"attr",captionsData:"alt",captionPosition:"bottom"});let o=1,n="";w.addEventListener("submit",M);c.addEventListener("click",O);async function M(e){if(e.preventDefault(),n=e.target.elements.search.value.trim(),o=1,!n){d("Sorry, the search field is empty. Please try again!");return}L(c),f([]),p();try{const t=await y(o,n);if(!t.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");f(t.hits),P(g*o>=Number(t.totalHits))}catch(t){d(t.message)}finally{m()}w.reset()}async function O(e){o++,e.target.disabled=!0,L(c),p();try{const t=await y(o,n);A(t.hits),P(g*o>=Number(t.totalHits));const l=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:2*l+80,behavior:"smooth"})}catch(t){d(t.message)}finally{m(),e.target.disabled=!1}}function f(e){v.innerHTML=b(e),S.refresh()}function A(e){v.insertAdjacentHTML("beforeend",b(e)),S.refresh()}function P(e=!1){e?$("We're sorry, but you've reached the end of search results."):T(c)}
//# sourceMappingURL=index.js.map
