!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};console.log(t.startBtn),console.log(t.stopBtn),t.startBtn.addEventListener("click",(function(){e();if(o)return;o=!0,t.startBtn.disabled=!0,t.stopBtn.disabled=!1,n=setInterval((function(){t.body.style.backgroundColor=e()}),1e3),console.log("Interval ID:",n)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),o=!1,t.startBtn.disabled=!1,t.stopBtn.disabled=!0,console.log("Interval ID:",n)}));var n=null,o=!1;function e(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.startBtn.disabled=!1,t.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.58bce156.js.map