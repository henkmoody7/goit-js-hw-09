!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),a=document.querySelector(".form");a.addEventListener("submit",(function(n){n.preventDefault();var t=Number(a.elements.delay.value),o=Number(a.elements.step.value),r=Number(a.elements.amount.value),u=0;l=setInterval((function(){var n,r;(n=u+=1,r=t,new Promise((function(e,t){var o=Math.random()>.3;setTimeout((function(){o?e({position:n,delay:r}):t({position:n,delay:r})}),r)}))).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),t+=o}),o),setTimeout((function(){clearInterval(l)}),r*o+t),n.currentTarget.reset()}));var l=null}();
//# sourceMappingURL=03-promises.334053f2.js.map