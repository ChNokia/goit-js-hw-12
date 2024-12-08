import{a as I,i as g,S as x}from"./assets/vendor-4dYZuk4Q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const q="47390664-00e9f6e051e23aada86cf3665",T="https://pixabay.com/api/",u=15;async function h(e=1,t){const{data:r}=await I(T,{params:{key:q,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e,q:t}});return r}const y=document.querySelector(".loading-container-hide");function p(){y.classList.replace("loading-container-hide","loading-container-show")}function m(){y.classList.replace("loading-container-show","loading-container-hide")}function $(e){e&&e.classList.replace("loading-btn-hide","loading-btn-show")}function L(e){e&&e.classList.replace("loading-btn-show","loading-btn-hide")}function n(e="Error"){g.error({position:"topRight",message:e})}function A(e="Info"){g.info({position:"topRight",message:e})}function b(e){return e.map(({webformatURL:t,largeImageURL:r,tags:l,likes:i,views:a,comments:s,downloads:E})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${r}"
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
                    <p class="gallery-card-list-info-text">${a}</p>
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
          </li>`).join("")}const w=document.querySelector(".form"),v=document.querySelector(".gallery"),d=document.querySelector(".loading-btn"),S=new x(".gallery a",{captionDelay:250,captionType:"attr",captionsData:"alt",captionPosition:"bottom"});let o=1,c="";w.addEventListener("submit",M);d.addEventListener("click",O);function M(e){if(e.preventDefault(),c=e.target.elements.search.value.trim(),o=1,!c){n("Sorry, the search field is empty. Please try again!");return}L(d),f([]),p(),h(o,c).then(t=>{if(!t.hits.length){f([]),n("Sorry, there are no images matching your search query. Please try again!");return}f(t.hits),P(u*o>=Number(t.totalHits))}).catch(t=>n(t.message)).finally(()=>{m()}),w.reset()}async function O(e){o++,e.target.disabled=!0,L(d),p();try{const t=await h(o,c);_(t.hits),P(u*o>=Number(t.totalHits));const l=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:2*l+80,behavior:"smooth"})}catch(t){n(t.message)}finally{m(),e.target.disabled=!1}}function f(e){v.innerHTML=b(e),S.refresh()}function _(e){v.insertAdjacentHTML("beforeend",b(e)),S.refresh()}function P(e=!1){e?A("We're sorry, but you've reached the end of search results."):$(d)}
//# sourceMappingURL=index.js.map
