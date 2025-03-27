import{a as f,S as g,i}from"./assets/vendor-C-_r3anN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="48848335-f5abf64d59c2aabc1155fb6ba",p="https://pixabay.com/api/";async function y(s){try{return(await f.get(p,{params:{key:m,q:s,Image_type:"photo",orientation:"horisontal",safesearch:!0}})).data.hits}catch(t){return console.error("Sorry, there are no images matching your search query. Please try again!",t),[]}}function h(s){return s.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:n,downloads:d})=>`<div class="photo-card">
                    <a href="${o}" class="gallery-link">
                        <img src="${t}" alt="${a}" loading="lazy" />
                    </a>
                    <div class="info">
                        <p><strong>Likes:</strong> ${e}</p>
                        <p><strong>Views:</strong> ${r}</p>
                        <p><strong>Comments:</strong> ${n}</p>
                        <p><strong>Downloads:</strong> ${d}</p>
                    </div>
                </div>`).join("")}const c=document.querySelector("#search-form"),l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new g(".gallery a");c.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query"});return}l.innerHTML="",u.style.display="block";try{const o=await y(t);if(u.style.display="none",!o||o.length===0){i.warning({title:"No results",message:"No images found"});return}l.innerHTML=h(o),b.refresh(),c.reset()}catch{i.error({title:"Error",message:"Something went wrong!"})}});
//# sourceMappingURL=index.js.map
