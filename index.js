import{a as m,S as h,i as f}from"./assets/vendor-hwdYKDic.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(s){const a={params:{key:"48865125-4f8597dc0399716036b78fee9",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}};return m.get("https://pixabay.com/api/",a)}const d=document.querySelector(".gallery"),n=document.querySelector(".loader-box");function p(s){const a=s.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:r,comments:l,downloads:u})=>`
            <li class="gallery-item">
              <a class="gallery-link" href="${o}">
                <figure class="thumb-container">
                  <img
                    class="thumb-image"
                    src="${i}"
                    data-source="${o}"
                    alt="${e}"
                  />
  
                  <figcaption class="thumb-data">
                    <dl class="thumb-data-list">
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Likes</dt>
                        <dd class="thumb-data-data">${t}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Views</dt>
                        <dd class="thumb-data-data">${r}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Comments</dt>
                        <dd class="thumb-data-data">${l}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Downloads</dt>
                        <dd class="thumb-data-data">${u}</dd>
                      </div>
                    </dl>
                  </figcaption>
                </figure>
              </a>
            </li>
          `).join("");d.innerHTML=a,y.refresh(),v()}const y=new h(".gallery a",{captionsData:"alt",captionDelay:250});function b(){d.classList.add("hidden"),n.classList.remove("hidden")}function v(){d.classList.remove("hidden"),n.classList.add("hidden")}function L(){f.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}const x=document.querySelector("form"),c=document.querySelector("#search-text");x.addEventListener("submit",S);function S(s){s.preventDefault();const a=c.value;a&&(c.value="",b(),g(a).then(i=>w(i.data.hits)).catch(i=>console.log(i)))}function w(s){s.length==0&&L(),p(s)}
//# sourceMappingURL=index.js.map
