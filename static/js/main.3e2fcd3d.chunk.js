(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{25:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(6),o=a.n(r),s=(a(25),a(11)),l=a(4),i=a(0);function u(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(l.a)(a,2),r=n[0],o=n[1];return Object(i.jsx)("header",{className:"Searchbar",children:Object(i.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r),o("")},children:[Object(i.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(i.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(i.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){var t=e.currentTarget.value;o(t)}})]})})}var j=a(10),b=a.n(j);b.a.defaults.baseURL="https://pixabay.com/api";var m=function(e,t){var a="/?q=".concat(e,"&page=").concat(t,"&key=").concat("20452679-d2c9a4c3f38fef4a414948741","&image_type=photo&orientation=horizontal&per_page=12");return b.a.get(a).then((function(e){return e.data.hits}))};function h(e){var t=e.gallerys,a=e.toggleModalImg;return t.map((function(e){var t=e.id,c=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(i.jsx)("li",{className:"ImageGalleryItem",children:Object(i.jsx)("img",{src:c,alt:n,className:"ImageGalleryItem-image",onClick:function(){return a({tags:n,largeImageURL:r})}})},t)}))}var O=document.querySelector("#modal-root");function g(e){var t=e.srcImgs,a=e.tags,c=e.onClose;return Object(r.createPortal)(Object(i.jsx)("div",{className:"Overlay",onClick:c,onKeyDown:function(e){if("Escape"===e.code)return c()},tabIndex:"-1",children:Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:t,alt:a})})}),O)}var f=a(20),d=a.n(f),p=function(){return Object(i.jsx)("div",{className:"loader spinner",children:Object(i.jsx)(d.a,{type:"ThreeDots",color:"#303f9f",height:80,width:80})})};function x(e){var t=e.onFetchGallery;return Object(i.jsx)("button",{type:"submit",className:"Button",onClick:t,children:"Load more"})}a(66);function v(e){var t=e.gallery,a=e.onFetchGallery,n=e.isLoader,r=Object(c.useState)(""),o=Object(l.a)(r,2),s=o[0],u=o[1],j=Object(c.useState)(""),b=Object(l.a)(j,2),m=b[0],O=b[1],f=Object(c.useState)(!1),d=Object(l.a)(f,2),v=d[0],y=d[1],S=function(){y((function(e){return!e}))};return Object(i.jsxs)("div",{className:"ImageBlock",children:[Object(i.jsx)("ul",{className:"ImageGallery",children:Object(i.jsx)(h,{gallerys:t,toggleModalImg:function(e){u(e.largeImageURL),O(e.tags),S()}})}),n&&Object(i.jsx)(p,{}),t.length>0&&!n&&Object(i.jsx)(x,{onFetchGallery:a}),v&&Object(i.jsx)(g,{srcImgs:s,tags:m,onClose:S})]})}function y(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),j=o[0],b=o[1],h=Object(c.useState)(1),O=Object(l.a)(h,2),g=O[0],f=O[1],d=Object(c.useState)(!1),p=Object(l.a)(d,2),x=p[0],y=p[1],S=Object(c.useState)(null),I=Object(l.a)(S,2),N=I[0],F=I[1];Object(c.useEffect)((function(){k()}),[j]);var k=function(){y(!x),m(j,g).then((function(e){n((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))})),f((function(e){return e+1}))})).then((function(){g>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return F(e)})).finally((function(){return y((function(e){return!e}))}))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{onSubmit:function(e){n([]),b(e),f(1),F(N)}}),Object(i.jsx)(v,{gallery:a,onFetchGallery:k,isLoader:x})]})}o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.3e2fcd3d.chunk.js.map