function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var r=l("eWCmQ");const i=document.querySelector(".form");i.addEventListener("submit",(function(t){t.preventDefault();let n=Number(i.elements.delay.value);const o=Number(i.elements.step.value),l=Number(i.elements.amount.value);let u=0;s=setInterval((()=>{var t,i;u+=1,(t=u,i=n,new Promise(((e,n)=>{const o=Math.random()>.3;setTimeout((()=>{o?e({position:t,delay:i}):n({position:t,delay:i})}),i)}))).then((({position:t,delay:n})=>{console.log(`✅ Fulfilled promise ${t} in ${n}ms`),e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{console.log(`❌ Rejected promise ${t} in ${n}ms`),e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),n+=o,l===u&&clearInterval(s)}),o),t.currentTarget.reset()}));let s=null;
//# sourceMappingURL=03-promises.af795440.js.map
