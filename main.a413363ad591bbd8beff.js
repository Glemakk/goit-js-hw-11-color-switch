(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7hx4":function(t,n,o){"use strict";o.r(n);o("L1EO");var i=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],r={startBtn:document.querySelector("button[data-action=start]"),stopBtn:document.querySelector("button[data-action=stop]"),body:document.body};r.startBtn.addEventListener("click",(function(){e.start()})),r.stopBtn.addEventListener("click",(function(){e.stop()}));var e=new(function(){function t(t){var n=t.onTick;this.intervalId=null,this.isActive=!1,this.onTick=n}var n=t.prototype;return n.start=function(){var t=this;this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){t.onTick(),console.log(c())}),1e3))},n.stop=function(){clearInterval(this.intervalId),this.isActive=!1,r.body.style.backgroundColor="transparent"},t}())({onTick:c});function c(){return r.body.style.backgroundColor=i[s(0,i.length-1)],r.body.style.backgroundColor}var s=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}},L1EO:function(t,n,o){}},[["7hx4",1]]]);
//# sourceMappingURL=main.a413363ad591bbd8beff.js.map