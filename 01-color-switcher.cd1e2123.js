const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled"),document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.stopBtn.setAttribute("disabled",!0),t.startBtn.removeAttribute("disabled"),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.cd1e2123.js.map