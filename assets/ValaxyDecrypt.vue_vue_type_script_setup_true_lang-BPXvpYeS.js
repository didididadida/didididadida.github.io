import{d as p,z as a,A as _,o as s,e as l,g as t,B as w,C,n as b,D as k,m as g,k as V,i as A,f as D,E as T,G as E}from"./app-BWEwKBPc.js";import{r as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang-Bks08gzW.js";import{u as B}from"./decrypt-CjT1eIGt.js";const I={key:0,"w-full":"","pt-14":"","pb-10":""},N={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},P={key:0,class:"-bottom-6",absolute:"","text-xs":"",op:"50"},W=t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_blank"},[t("span",null,"Web Crypto API")],-1),z={key:1},M=p({__name:"ValaxyDecrypt",props:{encryptedContent:{}},setup(v){const f=v,n=a(""),r=a(""),c=a(!1),{decrypt:y}=B();async function i(){const o=f.encryptedContent;if(o)try{const e=await y(n.value,o);r.value=e||"",setTimeout(()=>{m()},16)}catch{c.value=!0}}function h(){r.value="",n.value="",setTimeout(()=>{m()},16)}const x=p({name:"ValaxyDeprecatedContent",props:{html:String},render(){const o=`<div>${this.html}</div>`;return T({setup:()=>({frontmatter:E()}),template:o})}}),u=a(!1);return _(()=>{location.protocol!=="https:"&&(u.value=!0)}),(o,e)=>(s(),l("div",null,[r.value?(s(),l("div",z,[A(D(x),{html:r.value},null,8,["html"]),t("div",{"w-full":"","text-center":"","mt-8":""},[t("button",{"m-auto":"",class:"btn","font-bold":"",onClick:h}," Encrypt Again ")])])):(s(),l("div",I,[t("div",N,[w(t("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>n.value=d),"w-full":"",border:"~ solid dark:dark-100","pl-5":"","pr-11":"","py-3":"","rounded-full":"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:b(c.value&&"border-red"),onInput:e[1]||(e[1]=d=>c.value=!1),onKeyup:k(i,["enter"])},null,34),[[C,n.value]]),t("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:i}),u.value?(s(),l("div",P,[W,g(" Only works in HTTPS ")])):V("v-if",!0)])]))]))}});export{M as _};