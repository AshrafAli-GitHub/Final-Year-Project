import{_ as Be,o as T,c as B,w as L,g as Ce,b as m,t as E,n as W,h as J,i as ve,j as h,k as C,l as u,m as S,p as De,q as Fe,s as Ve,u as Ae,x as le,y as Ne,F as ce,z as _,r as V,e as H,f as se,v as G,d as Re,A as Pe}from"./index-be0a815f.js";const ze={data(){return{isToggle:!1}},props:{imgFront:{type:String,default:""},imgBack:{type:String,default:""},front:{type:String,default:""},back:{type:String,default:""},textSizeFront:{type:String,default:"2em"},textSizeBack:{type:String,default:"2em"},colorTextFront:{type:String,default:"black"},colorTextBack:{type:String,default:"white"},colorFront:{type:String,default:"white"},colorBack:{type:String,default:"#2ecc71"},headerFront:{type:String,default:"Do you know?"},headerBack:{type:String,default:"Answer"},footerFront:{type:String,default:"Click to show Back"},footerBack:{type:String,default:"Click to show Front"}}},Ue={class:"card-header",style:{"padding-bottom":"15px"}},Xe={class:"card-content center"},Ye=["src"],We={class:"card-footer"},He={class:"card-header",style:{"padding-bottom":"15px"}},Ge={class:"card-content center"},Je=["src"],qe={class:"card-footer"};function Ke(n,t,e,l,o,r){return T(),B("div",null,[L(m("div",{onClick:t[0]||(t[0]=d=>o.isToggle=!o.isToggle),style:W({backgroundColor:e.colorFront,color:e.colorTextFront}),class:"animated flipInX flashcard"},[m("div",Ue,E(e.headerFront),1),m("div",Xe,[m("p",{style:W({fontSize:e.textSizeFront,fontWeight:"bold"})},E(e.front),5),e.imgFront!=""?(T(),B("img",{key:0,src:e.imgFront,width:"200",height:"200"},null,8,Ye)):J("",!0)]),m("div",We,E(e.footerFront),1)],4),[[Ce,!o.isToggle]]),L(m("div",{onClick:t[1]||(t[1]=d=>o.isToggle=!o.isToggle),style:W({backgroundColor:e.colorBack,color:e.colorTextBack}),class:"animated flipInX flashcard"},[m("div",He,E(e.headerBack),1),m("div",Ge,[m("p",{style:W({fontSize:e.textSizeBack,fontWeight:"bold"})},E(e.back),5),e.imgBack!=""?(T(),B("img",{key:0,src:e.imgBack,width:"200",height:"200"},null,8,Je)):J("",!0)]),m("div",qe,E(e.footerBack),1)],4),[[Ce,o.isToggle]])])}const Qe=Be(ze,[["render",Ke],["__scopeId","data-v-0e99f284"]]);/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const g={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Oe={itemsToShow:{default:g.itemsToShow,type:Number},itemsToScroll:{default:g.itemsToScroll,type:Number},wrapAround:{default:g.wrapAround,type:Boolean},throttle:{default:g.throttle,type:Number},snapAlign:{default:g.snapAlign,validator(n){return["start","end","center","center-even","center-odd"].includes(n)}},transition:{default:g.transition,type:Number},breakpoints:{default:g.breakpoints,type:Object},autoplay:{default:g.autoplay,type:Number},pauseAutoplayOnHover:{default:g.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:g.mouseDrag,type:Boolean},touchDrag:{default:g.touchDrag,type:Boolean},dir:{default:g.dir,validator(n){return["rtl","ltr"].includes(n)}},i18n:{default:g.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ze({config:n,slidesCount:t}){const{snapAlign:e,wrapAround:l,itemsToShow:o=1}=n;if(l)return Math.max(t-1,0);let r;switch(e){case"start":r=t-o;break;case"end":r=t-1;break;case"center":case"center-odd":r=t-Math.ceil((o-.5)/2);break;case"center-even":r=t-Math.ceil(o/2);break;default:r=0;break}return Math.max(r,0)}function $e({config:n,slidesCount:t}){const{wrapAround:e,snapAlign:l,itemsToShow:o=1}=n;let r=0;if(e||o>t)return r;switch(l){case"start":r=0;break;case"end":r=o-1;break;case"center":case"center-odd":r=Math.floor((o-1)/2);break;case"center-even":r=Math.floor((o-2)/2);break;default:r=0;break}return r}function ue({val:n,max:t,min:e}){return t<e?n:Math.min(Math.max(n,e),t)}function et({config:n,currentSlide:t,slidesCount:e}){const{snapAlign:l,wrapAround:o,itemsToShow:r=1}=n;let d=t;switch(l){case"center":case"center-odd":d-=(r-1)/2;break;case"center-even":d-=(r-2)/2;break;case"end":d-=r-1;break}return o?d:ue({val:d,max:e-r,min:0})}function je(n){return n?n.reduce((t,e)=>{var l;return e.type===ce?[...t,...je(e.children)]:((l=e.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?[...t,e]:t},[]):[]}function q({val:n,max:t,min:e=0}){return n>t?q({val:n-(t+1),max:t,min:e}):n<e?q({val:n+(t+1),max:t,min:e}):n}function tt(n,t){let e;return t?function(...l){const o=this;e||(n.apply(o,l),e=!0,setTimeout(()=>e=!1,t))}:n}function nt(n,t){let e;return function(...l){e&&clearTimeout(e),e=setTimeout(()=>{n(...l),e=null},t)}}function Me(n="",t={}){return Object.entries(t).reduce((e,[l,o])=>e.replace(`{${l}}`,String(o)),n)}var ot=ve({name:"ARIA",setup(){const n=h("config",C(Object.assign({},g))),t=h("currentSlide",u(0)),e=h("slidesCount",u(0));return()=>S("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Me(n.i18n.itemXofY,{currentSlide:t.value+1,slidesCount:e.value}))}}),at=ve({name:"Carousel",props:Oe,setup(n,{slots:t,emit:e,expose:l}){var o;const r=u(null),d=u([]),c=u(0),f=u(0),i=C(Object.assign({},g));let w=Object.assign({},g),s;const v=u((o=n.modelValue)!==null&&o!==void 0?o:0),j=u(0),R=u(0),x=u(0),I=u(0);let M,K;_("config",i),_("slidesCount",f),_("currentSlide",v),_("maxSlide",x),_("minSlide",I),_("slideWidth",c);function Q(){s=Object.assign({},n.breakpoints),w=Object.assign(Object.assign(Object.assign({},w),n),{i18n:Object.assign(Object.assign({},w.i18n),n.i18n),breakpoints:void 0}),ge(w)}function P(){if(!s||!Object.keys(s).length)return;const a=Object.keys(s).map(p=>Number(p)).sort((p,k)=>+k-+p);let b=Object.assign({},w);a.some(p=>{const k=window.matchMedia(`(min-width: ${p}px)`).matches;return k&&(b=Object.assign(Object.assign({},b),s[p])),k}),ge(b)}function ge(a){Object.entries(a).forEach(([b,p])=>i[b]=p)}const me=nt(()=>{P(),D()},16);function D(){if(!r.value)return;const a=r.value.getBoundingClientRect();c.value=a.width/i.itemsToShow}function Z(){f.value<=0||(R.value=Math.ceil((f.value-1)/2),x.value=Ze({config:i,slidesCount:f.value}),I.value=$e({config:i,slidesCount:f.value}),i.wrapAround||(v.value=ue({val:v.value,max:x.value,min:I.value})))}De(()=>{Fe(()=>D()),setTimeout(()=>D(),1e3),P(),Se(),window.addEventListener("resize",me,{passive:!0}),e("init")}),Ve(()=>{K&&clearTimeout(K),M&&clearInterval(M),window.removeEventListener("resize",me,{passive:!0})});let y=!1;const z={x:0,y:0},U={x:0,y:0},A=C({x:0,y:0}),X=u(!1),$=u(!1),Ee=()=>{X.value=!0},Le=()=>{X.value=!1};function pe(a){["INPUT","TEXTAREA","SELECT"].includes(a.target.tagName)||(y=a.type==="touchstart",y||a.preventDefault(),!(!y&&a.button!==0||N.value)&&(z.x=y?a.touches[0].clientX:a.clientX,z.y=y?a.touches[0].clientY:a.clientY,document.addEventListener(y?"touchmove":"mousemove",he,!0),document.addEventListener(y?"touchend":"mouseup",be,!0)))}const he=tt(a=>{$.value=!0,U.x=y?a.touches[0].clientX:a.clientX,U.y=y?a.touches[0].clientY:a.clientY;const b=U.x-z.x,p=U.y-z.y;A.y=p,A.x=b},i.throttle);function be(){const a=i.dir==="rtl"?-1:1,b=Math.sign(A.x)*.4,p=Math.round(A.x/c.value+b)*a;if(p&&!y){const k=oe=>{oe.stopPropagation(),window.removeEventListener("click",k,!0)};window.addEventListener("click",k,!0)}O(v.value-p),A.x=0,A.y=0,$.value=!1,document.removeEventListener(y?"touchmove":"mousemove",he,!0),document.removeEventListener(y?"touchend":"mouseup",be,!0)}function Se(){!i.autoplay||i.autoplay<=0||(M=setInterval(()=>{i.pauseAutoplayOnHover&&X.value||Y()},i.autoplay))}function we(){M&&(clearInterval(M),M=null),Se()}const N=u(!1);function O(a){const b=i.wrapAround?a:ue({val:a,max:x.value,min:I.value});v.value===b||N.value||(e("slide-start",{slidingToIndex:a,currentSlideIndex:v.value,prevSlideIndex:j.value,slidesCount:f.value}),N.value=!0,j.value=v.value,v.value=b,K=setTimeout(()=>{if(i.wrapAround){const p=q({val:b,max:x.value,min:0});p!==v.value&&(v.value=p,e("loop",{currentSlideIndex:v.value,slidingToIndex:a}))}e("update:modelValue",v.value),e("slide-end",{currentSlideIndex:v.value,prevSlideIndex:j.value,slidesCount:f.value}),N.value=!1,we()},i.transition))}function Y(){O(v.value+i.itemsToScroll)}function ee(){O(v.value-i.itemsToScroll)}const ye={slideTo:O,next:Y,prev:ee};_("nav",ye),_("isSliding",N);const ke=Ae(()=>et({config:i,currentSlide:v.value,slidesCount:f.value}));_("slidesToScroll",ke);const Ie=Ae(()=>{const a=i.dir==="rtl"?-1:1,b=ke.value*c.value*a;return{transform:`translateX(${A.x-b}px)`,transition:`${N.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${f.value*c.value}px`:"",width:"100%"}});function _e(){Q(),P(),Z(),D(),we()}Object.keys(Oe).forEach(a=>{["modelValue"].includes(a)||le(()=>n[a],_e)}),le(()=>n.modelValue,a=>{a!==v.value&&O(Number(a))}),le(f,Z),e("before-init"),Q();const xe={config:i,slidesCount:f,slideWidth:c,next:Y,prev:ee,slideTo:O,currentSlide:v,maxSlide:x,minSlide:I,middleSlide:R};l({updateBreakpointsConfigs:P,updateSlidesData:Z,updateSlideWidth:D,initDefaultConfigs:Q,restartCarousel:_e,slideTo:O,next:Y,prev:ee,nav:ye,data:xe});const te=t.default||t.slides,ne=t.addons,Te=C(xe);return()=>{const a=je(te==null?void 0:te(Te)),b=(ne==null?void 0:ne(Te))||[];a.forEach((ae,ie)=>ae.props.index=ie);let p=a;if(i.wrapAround){const ae=a.map((re,F)=>Ne(re,{index:-a.length+F,isClone:!0,key:`clone-before-${F}`})),ie=a.map((re,F)=>Ne(re,{index:a.length+F,isClone:!0,key:`clone-after-${F}`}));p=[...ae,...a,...ie]}d.value=a,f.value=Math.max(a.length,1);const k=S("ol",{class:"carousel__track",style:Ie.value,onMousedownCapture:i.mouseDrag?pe:null,onTouchstartPassiveCapture:i.touchDrag?pe:null},p),oe=S("div",{class:"carousel__viewport"},k);return S("section",{ref:r,class:{carousel:!0,"is-sliding":N.value,"is-dragging":$.value,"is-hover":X.value,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":i.i18n.ariaGallery,tabindex:"0",onMouseenter:Ee,onMouseleave:Le},[oe,b,S(ot)])}}}),de;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(de||(de={}));const it={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function rt(n){return n in de}const fe=n=>{const t=h("config",C(Object.assign({},g))),e=String(n.name),l=`icon${e.charAt(0).toUpperCase()+e.slice(1)}`;if(!e||typeof e!="string"||!rt(e))return;const o=it[e],r=S("path",{d:o}),d=t.i18n[l]||n.title||e,c=S("title",d);return S("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":d},[c,r])};fe.props={name:String,title:String};const lt=(n,{slots:t,attrs:e})=>{const{next:l,prev:o}=t||{},r=h("config",C(Object.assign({},g))),d=h("maxSlide",u(1)),c=h("minSlide",u(1)),f=h("currentSlide",u(1)),i=h("nav",{}),{dir:w,wrapAround:s,i18n:v}=r,j=w==="rtl",R=S("button",{type:"button",class:["carousel__prev",!s&&f.value<=c.value&&"carousel__prev--disabled",e==null?void 0:e.class],"aria-label":v.ariaPreviousSlide,onClick:i.prev},(o==null?void 0:o())||S(fe,{name:j?"arrowRight":"arrowLeft"})),x=S("button",{type:"button",class:["carousel__next",!s&&f.value>=d.value&&"carousel__next--disabled",e==null?void 0:e.class],"aria-label":v.ariaNextSlide,onClick:i.next},(l==null?void 0:l())||S(fe,{name:j?"arrowLeft":"arrowRight"}));return[R,x]},st=()=>{const n=h("config",C(Object.assign({},g))),t=h("maxSlide",u(1)),e=h("minSlide",u(1)),l=h("currentSlide",u(1)),o=h("nav",{}),r=c=>q({val:l.value,max:t.value,min:0})===c,d=[];for(let c=e.value;c<t.value+1;c++){const f=S("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(c)},"aria-label":Me(n.i18n.ariaNavigateToSlide,{slideNumber:c+1}),onClick:()=>o.slideTo(c)}),i=S("li",{class:"carousel__pagination-item",key:c},f);d.push(i)}return S("ol",{class:"carousel__pagination"},d)};var ct=ve({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(n,{slots:t}){const e=h("config",C(Object.assign({},g))),l=h("currentSlide",u(0)),o=h("slidesToScroll",u(0)),r=h("isSliding",u(!1)),d=()=>n.index===l.value,c=()=>n.index===l.value-1,f=()=>n.index===l.value+1,i=()=>{const w=Math.floor(o.value),s=Math.ceil(o.value+e.itemsToShow-1);return n.index>=w&&n.index<=s};return()=>{var w;return S("li",{style:{width:`${100/e.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":i(),"carousel__slide--active":d(),"carousel__slide--prev":c(),"carousel__slide--next":f(),"carousel__slide--sliding":r.value},"aria-hidden":!i()},(w=t.default)===null||w===void 0?void 0:w.call(t))}}});const ut={data(){return{id:this.$route.params.id,cards:[],front:"",back:"",show:!1,show2:!1,current_card:0}},components:{vueFlashcard:Qe,Carousel:at,Slide:ct,Pagination:st,Navigation:lt},methods:{async get_cards(){let t=await(await fetch("/api/deck/"+this.id+"/")).json();this.cards=t.cards},async save(){let n={front:this.front,back:this.back},e=await(await fetch("/api/flashcard/"+this.cards[this.current_card].id+"/",{method:"PUT",body:JSON.stringify(n),headers:{"X-CSRFToken":this.getCookie()}})).json();this.cards[this.current_card]=e},async add(){let n={front:this.front,back:this.back,deck_id:this.id},e=await(await fetch("/api/flashcards/",{method:"POST",body:JSON.stringify(n),headers:{"X-CSRFToken":this.getCookie()}})).json();this.cards.push(e)},async delete_card(){await fetch("/api/flashcard/"+this.cards[this.current_card].id+"/",{method:"DELETE",headers:{"X-CSRFToken":this.getCookie()}}),this.cards.splice(this.current_card,1)},getCookie(){let n="";if(document.cookie&&document.cookie!=="")for(var t=document.cookie.split(";"),e=0;e<t.length;e++){var l=t[e].trim();if(l.substring(0,10)==="csrftoken="){n=decodeURIComponent(l.substring(10));break}}return n}},async mounted(){await this.get_cards()}},dt={class:"container col-md-4 text-center mx-auto mt-3"},ft={key:0},vt={key:1};function gt(n,t,e,l,o,r){const d=V("vue-flashcard"),c=V("Slide"),f=V("Navigation"),i=V("Pagination"),w=V("Carousel");return T(),B(ce,null,[H(w,{modelValue:o.current_card,"onUpdate:modelValue":t[0]||(t[0]=s=>o.current_card=s)},{addons:se(()=>[H(f),H(i)]),default:se(()=>[(T(!0),B(ce,null,Re(o.cards,s=>(T(),Pe(c,{key:s.id},{default:se(()=>[H(d,{front:s.front,back:s.back},null,8,["front","back"])]),_:2},1024))),128))]),_:1},8,["modelValue"]),m("div",dt,[m("button",{onClick:t[1]||(t[1]=s=>o.show=!o.show),class:"btn btn-outline-info m-2"},"Edit card"),m("button",{onClick:t[2]||(t[2]=s=>o.show2=!o.show2),class:"btn btn-outline-success m-2"},"Add card"),o.show?(T(),B("div",ft,[L(m("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>o.front=s),class:"form-control m-1",placeholder:"New front"},null,512),[[G,o.front]]),L(m("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=s=>o.back=s),class:"form-control m-1",placeholder:"New back"},null,512),[[G,o.back]]),m("button",{onClick:t[5]||(t[5]=s=>r.save()),class:"btn btn-success m-2"},"Save")])):J("",!0),o.show2?(T(),B("div",vt,[L(m("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=s=>o.front=s),class:"form-control m-1",placeholder:"Front"},null,512),[[G,o.front]]),L(m("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=s=>o.back=s),class:"form-control m-1",placeholder:"Back"},null,512),[[G,o.back]]),m("button",{onClick:t[8]||(t[8]=s=>r.add()),class:"btn btn-success m-2"},"Save")])):J("",!0),m("button",{onClick:t[9]||(t[9]=s=>r.delete_card()),class:"btn btn-outline-danger"},"Delete")])],64)}const pt=Be(ut,[["render",gt]]);export{pt as default};