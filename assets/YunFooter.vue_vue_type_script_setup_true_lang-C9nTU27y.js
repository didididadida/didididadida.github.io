import{d as x,q as C,ax as T,y as w,Y as V,j as d,ay as f,o as c,e as u,f as e,g as o,t as n,k as p,m as r,F,n as v,az as Y,r as $}from"./app-BWEwKBPc.js";function q(s,a){return Math.random()*(a-s)+s}function A(s,a){let i,l=!1;return()=>{i&&clearTimeout(i),l?i=setTimeout(s,a):(s(),l=!0,setTimeout(()=>{l=!1},a))}}const z={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},B={key:0,class:"beian",m:"y-2"},D={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},H={class:"copyright flex justify-center items-center gap-2",p:"1"},M=["href","title"],N={key:1,class:"powered",m:"2"},S=["innerHTML"],j=["href","title"],E=x({__name:"YunFooter",setup(s){const{t:a}=C(),i=T(),l=w(),t=V(),_=new Date().getFullYear(),k=d(()=>_===t.value.footer.since),y=d(()=>a("footer.powered",[`<a href="${f.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${f.version}`])),m=d(()=>t.value.footer.icon||{url:f.repository.url,name:"i-ri-cloud-line",title:f.name});return(b,I)=>{var h,g;return c(),u("footer",z,[(h=e(t).footer.beian)!=null&&h.enable&&e(t).footer.beian.icp?(c(),u("div",B,[o("a",D,n(e(t).footer.beian.icp),1)])):p("v-if",!0),o("div",H,[o("span",null,[r(" © "),k.value?p("v-if",!0):(c(),u(F,{key:0},[r(n(e(t).footer.since)+" - ",1)],64)),r(" "+n(e(_)),1)]),(g=e(t).footer.icon)!=null&&g.enable?(c(),u("a",{key:0,class:v(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:m.value.url,target:"_blank",title:m.value.title},[o("div",{class:v(m.value.name)},null,2)],10,M)):p("v-if",!0),o("span",null,n(e(l).author.name),1)]),e(t).footer.powered?(c(),u("div",N,[o("span",{innerHTML:y.value},null,8,S),r(" | "),o("span",null,[r(n(e(a)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},n(Y(e(i).theme)),9,j),r(" v"+n(e(t).pkg.version),1)])])):p("v-if",!0),$(b.$slots,"default")])}}});export{E as _,q as r,A as t};