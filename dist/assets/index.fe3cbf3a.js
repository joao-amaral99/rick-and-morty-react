import{s as n,j as w,r as m,B as R,a as D,R as I,b as E,W as N,c as O,d as P,e as T}from"./vendor.1d6c8f64.js";const W=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function d(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=d(t);fetch(t.href,r)}};W();const A=n.main`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 1.5rem;
  justify-content: center;
`,q=n.img`
  height: 220px;
  left: 50%;
  margin: 2rem 0;
  position: relative;
  transform: translateX(-50%);
  width: 640px;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 400px;
  }

  @media (max-width: 420px) {
    max-width: 100%;
    width: 320px;
  }

  @media (max-width: 380px) {
    width: 280px;
  }

  @media (max-width: 320px) {
    visibility: hidden;
  }
`,G=n.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 4rem;
  top: 2rem;
  
  svg {
    color: ${i=>i.darkMode?i.light:i.dark};
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    left: 50%;
    margin-top: 5rem;
    right: 50%;
    transform: translateX(-50%);

    svg {
      font-size: 5rem;
    }
  }
`,H=n.form`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 1rem;

  input {
    background-color: #eaecef;
    border: 2px solid #d6deeb;
    border-radius: 5px;
    font-size: 1.1rem;
    height: 2.5rem;
    letter-spacing: 0.6px;
    padding: 2px 8px;
    width: 400px;
    

    &:focus {
      background-color: #fff;
      box-shadow: 0 0 0 3px rgba(4, 173, 209, 0.8);
      outline: none;
    }

    @media (max-width: 480px) {
    width: 300px;
  }
  }
`,U=n.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;

  @media (max-width: 480px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`,u=n.button`
  align-items: center;
  background-color: transparent;
  border: 3px solid rgba(4, 173, 209, 0.8);
  border-radius: 7px;
  color: rgba(4, 173, 209, 0.8);
  display: flex;
  font-size: 1.12rem;
  font-weight: bold;
  height: 2.5rem;
  justify-content: center;
  letter-spacing: 0.7px;
  margin-bottom: 2rem;
  transition: all 0.2s;
  width: 8rem;

  &:disabled {
    border: none;
    background-color: #b4b4b4;
    cursor: not-allowed;
    color: #ccc;

    &:hover {
      box-shadow: none;
    }
  }

  &:hover {
    box-shadow: 0 0 0 1px rgba(4, 173, 209, 0.8);
  }

  @media (max-width: 480px) {
    width: 10rem;
  }
`,V=n.div`
  align-items: center;
  background-color: rgba(30, 30, 30, 0.95);
  border-radius: 8px;
  box-shadow: 2px 3px 5px rgba(30, 30 ,30, 0.6);
  cursor: pointer;
  display: flex;
  height: 80px;
  transition: 0.2s;
  width: 340px;

  &:hover {
    box-shadow: 0 0 0 4px rgba(4, 173, 209, 0.8);
  }

  @media (max-width: 380px) {
    width: 300px;
  }
`,X=n.img`
  border-radius: 50%;
  height: 70px;
  margin-left: .5rem;
  width: 70px;

`,K=n.strong`
  color: #e5e5e5;
  font-size: 1.11rem;
  letter-spacing: 0.6px;
  margin-left: 0.8rem;

  @media (max-width: 380px) {
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Y=n.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 380px) {
    overflow: hidden;
  }
`,J=n.strong`
  align-items: center;
  border-radius: 3px;
  color: #9e9e9e;
  display: flex;
  justify-content: center;
  margin-left: 0.6rem;
  margin-top: 5px;
  width: 75px;

  &::before {
    background-color: 
    ${i=>i.status==="Dead"?i.dead:i.status==="Alive"?i.alive:""};
    border-radius: 50%;
    content: '';
    height: 10px;
    margin-right: 0.5rem;
    width: 10px;
    
  }
`,Q=n.div`
  align-items: center;
  background-color: #3c3e44;
  border-radius: 10px;
  display: flex;
  height: 500px;
  justify-content: space-evenly;
  max-width: 100%;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 920px;

  @media (max-width: 1200px) {
    width: 800px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
    width: 500px;
  }

  @media (max-width: 540px) {
    width: 350px;
  }
`,Z=n.img`
  border-radius: 50%;
  image-rendering: pixeated;
  max-width: 100%;
  width: 350px;

  @media (max-width: 1200px) {
    width: 290px;
  }

  @media (max-width: 950px) {
    width: 200px;
    
  }
`,x=n.strong`
  color: #e5e5e5;
  font-size: 1.15rem;
  letter-spacing: 0.7px;
  margin: 0.8rem 0;

  span {
    color: #9e9e9e;
  }
`,_=n.button`
  background-color: #d63d2e;
  border: none;
  border-radius: 3px;
  color: #FFF;
  font-size: 1.1rem;
  font-weight: bold;
  height: 2rem;
  letter-spacing: 2px;
  margin-top: 1rem;
  transition: .2s;
  width: 6rem;
  
  &:hover {
    box-shadow: 0 0 0 3px #d63d2e;
  }

  @media (max-width: 950px) {
    margin: 1rem auto;
  }
`,ee=n.div`
  display: flex;
  flex-direction: column;
`,te=n.h2`
  color: #e5e5e5;
  font-size: 2.2rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-align: center;
`,e=w.exports.jsx,s=w.exports.jsxs,k=w.exports.Fragment;function re({image:i,name:a,status:d,gender:l,species:t,totalEpisode:r,location:c,handleClick:h}){return s(Q,{children:[e("div",{children:e(Z,{src:i,alt:"Character picture"})}),s(ee,{children:[e(te,{children:a}),s(x,{children:["Status: ",e("span",{children:d})]}),s(x,{children:["Gender: ",e("span",{children:l})]}),s(x,{children:["Specie: ",e("span",{children:t})]}),s(x,{children:["Episodes: ",e("span",{children:r})]}),s(x,{children:["Location: ",e("span",{children:c})]}),e(_,{onClick:h,children:"Fechar"})]})]})}function oe({name:i,status:a,image:d,location:l,totalEpisode:t,gender:r,species:c}){const[h,g]=m.exports.useState(!1);function f(){g(!h)}return s(k,{children:[s(V,{onClick:f,children:[e(X,{src:d,alt:"Character picture",width:"100",height:"90"}),s(Y,{children:[e(K,{children:i}),e(J,{status:a,alive:"#55CC44",dead:"#D63D2E",children:a})]})]}),h?e(re,{name:i,status:a,image:d,location:l,totalEpisode:t,gender:r,species:c,handleClick:f}):""]})}var ne="/assets/rickandmorty.01e7a934.png";function ie(){const[i,a]=m.exports.useState([]),[d,l]=m.exports.useState(!1),[t,r]=m.exports.useState({}),[c,h]=m.exports.useState(""),[g,f]=m.exports.useState("");console.log(g);const y="https://rickandmortyapi.com/api/character/";m.exports.useEffect(async()=>{const o=await b(y);a(o.results),r(o.info)},[]);const b=async o=>(await fetch(o)).json(),v=async o=>{const p=await b(o);a(p.results),r(p.info)},C=()=>{const o=document.body;d?o.classList.remove("dark-mode"):o.classList.add("dark-mode"),l(!d)},S=async o=>{o.preventDefault(),j(c.trim())},j=async o=>{const p=await b(`${y}?name=${o}`);a(p.results),r(p.info)};return s(k,{children:[e(q,{src:ne,alt:"Logo image",width:"600",height:"360"}),e(G,{onClick:C,darkMode:d,light:"#e5e5e5",dark:"#272727",children:d?e(R,{}):e(D,{})}),e(H,{onSubmit:S,children:e("input",{type:"text",placeholder:"Busque por algum personagem...",onChange:o=>h(o.target.value)})}),e(A,{children:i.map(({name:o,image:p,id:M,status:F,species:B,episode:L,location:$,gender:z})=>e(oe,{image:p,name:o,status:F,species:B,gender:z,totalEpisode:L.length,location:$.name},M))}),s(U,{children:[t.prev?e(u,{onClick:()=>v(t.prev),children:"\u2190 Prev"}):e(u,{disabled:!0,children:"\u2190 Prev"}),t.next?e(u,{onClick:()=>v(t.next),children:"Next \u2192"}):e(u,{disabled:!0,children:"Next \u2192"})]})]})}const ae=()=>e(I,{children:e(E,{exact:!0,path:"/",element:e(ie,{})})});var se=N`
  * {
    box-sizing: border-box;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background-color: #f7f7f7;
  }

  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  .dark-mode {
    background-color: #333;
  }
`;function de(){return s(O,{children:[e(ae,{}),e(se,{})]})}P.render(e(T.StrictMode,{children:e(de,{})}),document.getElementById("root"));
