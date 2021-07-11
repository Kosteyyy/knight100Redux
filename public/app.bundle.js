(()=>{"use strict";var e,t=[,(e,t,n)=>{var r=n(294);function a(){return r.createElement("div",{className:"knight"},"♘")}function l({dark:e,children:t}){const n=e?"#cc6600":"white";return r.createElement("div",{style:{backgroundColor:n,widgh:"100%",height:"100%"}},t)}function o(e,[t,n],o,s){const c=e%10,i=Math.floor(e/10),u=(c+i)%2==1,m=e===t+10*n;return r.createElement("div",{className:"square",key:e,onClick:()=>o(c,i)},r.createElement(l,{dark:u},m?r.createElement(a,null):s))}function s({knightPosition:e,moveKnight:t,movesField:n}){const a=[];for(let r=0;r<100;r++)a.push(o(r,e,t,n[r]));return r.createElement("div",{className:"board"},a)}function c({setGameStatus:e}){return r.createElement("div",null,r.createElement("div",null,"Добро пожаловать в игру 100 ходов конём"),r.createElement("div",null,"Ваша задача - делая ходы конём пройти все 100 клеток"),r.createElement("button",{className:"start-button",onClick:()=>e("play")},"Старт"))}function i({restart:e}){return r.createElement("button",{className:"start-button",onClick:e},"Начать заново")}function u(){const[e,t]=(0,r.useState)("start"),[n,a]=(0,r.useState)([0,0]);let l=new Array(100);const[o,u]=(0,r.useState)(l),[m,h]=(0,r.useState)(1);(0,r.useEffect)((()=>{100===m&&t("win"),E()&&t("lost")}),[n]);const v=()=>{u(l),a([0,0]),h(1)},d=(e,t)=>{if(o[f([e,t])]>0)return!1;const r=Math.abs(e-n[0]),a=Math.abs(t-n[1]);return 2===r&&1===a||1===r&&2===a},f=([e,t])=>e+10*t,E=()=>{let e=0;for(let t=0;t<100;t++){const n=t%10,r=Math.floor(t/10);d(n,r)&&e++}return 0===e},g=(e,t)=>{if(d(e,t)){h(m+1);let r=[...o];r[f([...n])]=m,u(r),a([e,t])}return!0};return r.createElement("div",{className:"container"},(()=>{switch(e){case"start":return r.createElement(c,{setGameStatus:t});case"play":return r.createElement(r.Fragment,null,r.createElement(s,{knightPosition:n,moveKnight:g,movesField:o}),r.createElement(i,{restart:v}));case"win":return r.createElement(r.Fragment,null,r.createElement(s,{knightPosition:n,moveKnight:g,movesField:o}),r.createElement("h1",null,"You Won!!!"));case"lost":return r.createElement(r.Fragment,null,r.createElement(s,{knightPosition:n,moveKnight:g,movesField:o}),r.createElement("h1",null,"Вы проиграли!!!"),r.createElement(i,{restart:v}));default:return r.createElement(s,{knightPosition:n,moveKnight:g,movesField:o})}})()," ")}n(935).render(r.createElement(u,null),document.getElementById("root"))}],n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,a,l)=>{if(!n){var o=1/0;for(i=0;i<e.length;i++){for(var[n,a,l]=e[i],s=!0,c=0;c<n.length;c++)(!1&l||o>=l)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,l<o&&(o=l));s&&(e.splice(i--,1),t=a())}return t}l=l||0;for(var i=e.length;i>0&&e[i-1][2]>l;i--)e[i]=e[i-1];e[i]=[n,a,l]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,[o,s,c]=n,i=0;for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var u=c(r);for(t&&t(n);i<o.length;i++)l=o[i],r.o(e,l)&&e[l]&&e[l][0](),e[o[i]]=0;return r.O(u)},n=self.webpackChunkknight100=self.webpackChunkknight100||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[736],(()=>r(1)));a=r.O(a)})();