import{_ as a,o as p,c as f,b as e,w as i,v as l}from"./index-be0a815f.js";const u={data(){return{title:"",front:"",back:"",description:"",cards:[]}},components:{},methods:{add(){this.cards.push({front:this.front,back:this.back}),this.front="",this.back=""},async finish(){let r={title:this.title,cards:this.cards,description:this.description};await fetch("/api/decks/",{method:"POST",body:JSON.stringify(r),headers:{"X-CSRFToken":this.getCookie()}})},getCookie(){let r="";if(document.cookie&&document.cookie!=="")for(var t=document.cookie.split(";"),s=0;s<t.length;s++){var d=t[s].trim();if(d.substring(0,10)==="csrftoken="){r=decodeURIComponent(d.substring(10));break}}return r}}},b={class:"container"},m={class:"form-outline mb-4 col"},k=e("p",null,"Add deck details",-1),h={class:"form-outline mb-4 col"},v=e("p",null,"Add card",-1);function x(r,t,s,d,n,c){return p(),f("div",b,[e("div",m,[k,i(e("input",{type:"text",id:"deckTitle",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=o=>n.title=o),placeholder:"Enter deck title"},null,512),[[l,n.title]]),i(e("textarea",{id:"deckDesc",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=o=>n.description=o),placeholder:"Enter deck description"},null,512),[[l,n.description]])]),e("div",h,[v,i(e("textarea",{id:"card-front",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=o=>n.front=o),placeholder:"Enter front of card"},null,512),[[l,n.front]]),i(e("textarea",{id:"card-back",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=o=>n.back=o),placeholder:"Enter back of card"},null,512),[[l,n.back]]),e("button",{type:"button",onClick:t[4]||(t[4]=o=>c.add()),class:"btn btn-primary btn-block mb-4"},"Add"),e("button",{type:"button",onClick:t[5]||(t[5]=o=>c.finish()),class:"btn btn-primary btn-block mb-4"},"Finish")])])}const C=a(u,[["render",x]]);export{C as default};
