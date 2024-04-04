"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5570],{5570:function(V,C,f){f.r(C),f.d(C,{ion_refresher:function(){return O},ion_refresher_content:function(){return G}});var y=f(3512),D=f(5134),M=f(7289),v=f(8239),L=f(8774),h=f.n(L),l=f(7629),m=f(6897),I=f(9914),d=f(7329),Z=f(2429),b=f(2240),T=f(8380),U=f(972),W=function(r){var n=r.previousElementSibling;return null!==n&&"ION-HEADER"===n.tagName?"translate":"scale"},B=function(r,n,i){return"scale"===r?Y(n,i):K(n,i)},A=function(r){var n=r.querySelector("ion-spinner"),i=n.shadowRoot.querySelector("circle"),s=r.querySelector(".spinner-arrow-container"),a=r.querySelector(".arrow-container"),t=a?a.querySelector("ion-icon"):null,e=(0,b.c)().duration(1e3).easing("ease-out"),o=(0,b.c)().addElement(s).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),g=(0,b.c)().addElement(i).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),w=(0,b.c)().addElement(n).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(a&&t){var x=(0,b.c)().addElement(a).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),p=(0,b.c)().addElement(t).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);e.addAnimation([x,p])}return e.addAnimation([o,g,w])},Y=function(r,n){var i=n.clientHeight,s=(0,b.c)().addElement(r).keyframes([{offset:0,transform:"scale(0) translateY(-".concat(i,"px)")},{offset:1,transform:"scale(1) translateY(100px)"}]);return A(r).addAnimation([s])},K=function(r,n){var i=n.clientHeight,s=(0,b.c)().addElement(r).keyframes([{offset:0,transform:"translateY(-".concat(i,"px)")},{offset:1,transform:"translateY(100px)"}]);return A(r).addAnimation([s])},H=function(r){return(0,b.c)().duration(125).addElement(r).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")},z=function(r,n){r.style.setProperty("opacity",n.toString())},j=function(r,n,i){(0,l.c)(function(){r.forEach(function(a,t){var e=t*(1/n),w=(0,d.k)(0,(i-e)/(1-e),1);a.style.setProperty("opacity",w.toString())})})},$=function(r,n){(0,l.c)(function(){r.style.setProperty("--refreshing-rotation-duration",n>=1?"0.5s":"2s"),r.style.setProperty("opacity","1")})},R=function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;if(!r)return Promise.resolve();var s=(0,d.t)(r,i);return(0,l.c)(function(){r.style.setProperty("transition","".concat(i,"ms all ease-out")),void 0===n?r.style.removeProperty("transform"):r.style.setProperty("transform","translate3d(0px, ".concat(n,", 0px)"))}),s},N=function(){var c=(0,v.Z)(h().mark(function r(n,i){var s,a,t;return h().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(s=n.querySelector("ion-refresher-content")){o.next=3;break}return o.abrupt("return",Promise.resolve(!1));case 3:return o.next=5,new Promise(function(g){return(0,d.c)(s,g)});case 5:return a=n.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=n.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),o.abrupt("return",null!==a&&null!==t&&("ios"===i&&(0,m.a)("mobile")&&void 0!==n.style.webkitOverflowScrolling||"md"===i));case 8:case"end":return o.stop()}},r)}));return function(n,i){return c.apply(this,arguments)}}(),O=function(){function c(r){(0,D.Z)(this,c),(0,l.r)(this,r),this.ionRefresh=(0,l.e)(this,"ionRefresh",7),this.ionPull=(0,l.e)(this,"ionPull",7),this.ionStart=(0,l.e)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}return(0,M.Z)(c,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"checkNativeRefresher",value:(r=(0,v.Z)(h().mark(function i(){var s,a;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(this.el,(0,m.b)(this));case 2:(s=e.sent)&&!this.nativeRefresher?(a=this.el.closest("ion-content"),this.setupNativeRefresher(a)):s||this.destroyNativeRefresher();case 4:case"end":return e.stop()}},i,this)})),function(){return r.apply(this,arguments)})},{key:"destroyNativeRefresher",value:function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}},{key:"resetNativeRefresher",value:function(){var r=(0,v.Z)(h().mark(function i(s,a){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state=a,"ios"!==(0,m.b)(this)){e.next=6;break}return e.next=4,R(s,void 0,300);case 4:e.next=8;break;case 6:return e.next=8,(0,d.t)(this.el.querySelector(".refresher-refreshing-icon"),200);case 8:this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach(function(o){return o.destroy()}),this.animations=[],this.progress=0,this.state=1;case 15:case"end":return e.stop()}},i,this)}));return function(i,s){return r.apply(this,arguments)}}()},{key:"setupiOSNativeRefresher",value:function(){var r=(0,v.Z)(h().mark(function i(s,a){var e,o,g,t=this;return h().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return this.elementToTransform=this.scrollEl,e=s.shadowRoot.querySelectorAll("svg"),o=.16*this.scrollEl.clientHeight,g=e.length,(0,l.c)(function(){return e.forEach(function(p){return p.style.setProperty("animation","none")})}),this.scrollListenerCallback=function(){!t.pointerDown&&1===t.state||(0,l.f)(function(){var p=t.scrollEl.scrollTop,_=t.el.clientHeight;if(p>0){if(8===t.state){var u=(0,d.k)(0,p/(.5*_),1);return void(0,l.c)(function(){return z(a,1-u)})}}else{t.pointerDown&&(t.didStart||(t.didStart=!0,t.ionStart.emit()),t.pointerDown&&t.ionPull.emit());var E=t.didStart?30:0,k=t.progress=(0,d.k)(0,(Math.abs(p)-E)/o,1);8===t.state||1===k?(t.pointerDown&&$(a,t.lastVelocityY),t.didRefresh||(t.beginRefresh(),t.didRefresh=!0,(0,Z.d)({style:"light"}),t.pointerDown||R(t.elementToTransform,"".concat(_,"px")))):(t.state=2,j(e,g,k))}})},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),x.next=9,Promise.resolve().then(f.bind(f,8751));case 9:this.gesture=x.sent.createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:function(){t.pointerDown=!0,t.didRefresh||R(t.elementToTransform,"0px"),0===o&&(o=.16*t.scrollEl.clientHeight)},onMove:function(_){t.lastVelocityY=_.velocityY},onEnd:function(){t.pointerDown=!1,t.didStart=!1,t.needsCompletion?(t.resetNativeRefresher(t.elementToTransform,32),t.needsCompletion=!1):t.didRefresh&&(0,l.f)(function(){return R(t.elementToTransform,"".concat(t.el.clientHeight,"px"))})}}),this.disabledChanged();case 11:case"end":return x.stop()}},i,this)}));return function(i,s){return r.apply(this,arguments)}}()},{key:"setupMDNativeRefresher",value:function(){var r=(0,v.Z)(h().mark(function i(s,a,t){var o,g,w,e=this;return h().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return o=(0,d.g)(a).querySelector("circle"),g=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),w=(0,d.g)(t).querySelector("circle"),null!==o&&null!==w&&(0,l.c)(function(){o.style.setProperty("animation","none"),t.style.setProperty("animation-delay","-655ms"),w.style.setProperty("animation-delay","-655ms")}),p.next=6,Promise.resolve().then(f.bind(f,8751));case 6:this.gesture=p.sent.createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:function(){return 8!==e.state&&32!==e.state&&0===e.scrollEl.scrollTop},onStart:function(u){u.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:function(u){if(u.velocityY<0&&0===e.progress&&!u.data.didStart||u.data.cancelled)u.data.cancelled=!0;else{if(!u.data.didStart){u.data.didStart=!0,e.state=2,(0,l.c)(function(){return e.scrollEl.style.setProperty("--overflow","hidden")});var E=W(s),k=B(E,g,e.el);return u.data.animation=k,k.progressStart(!1,0),e.ionStart.emit(),void e.animations.push(k)}e.progress=(0,d.k)(0,u.deltaY/180*.5,1),u.data.animation.progressStep(e.progress),e.ionPull.emit()}},onEnd:function(u){if(u.data.didStart){if((0,l.c)(function(){return e.scrollEl.style.removeProperty("--overflow")}),e.progress<=.4)return e.gesture.enable(!1),void u.data.animation.progressEnd(0,e.progress,500).onFinish(function(){e.animations.forEach(function(S){return S.destroy()}),e.animations=[],e.gesture.enable(!0),e.state=1});var E=(0,I.g)([0,0],[0,0],[1,1],[1,1],e.progress)[0],k=H(g);e.animations.push(k),(0,l.c)((0,v.Z)(h().mark(function S(){return h().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return g.style.setProperty("--ion-pulling-refresher-translate","".concat(100*E,"px")),u.data.animation.progressEnd(),P.next=4,k.play();case 4:e.beginRefresh(),u.data.animation.destroy();case 6:case"end":return P.stop()}},S)})))}}}),this.disabledChanged();case 8:case"end":return p.stop()}},i,this)}));return function(i,s,a){return r.apply(this,arguments)}}()},{key:"setupNativeRefresher",value:function(){var r=(0,v.Z)(h().mark(function i(s){var a,t;return h().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!this.scrollListenerCallback&&s&&!this.nativeRefresher&&this.scrollEl){o.next=2;break}return o.abrupt("return");case 2:this.setCss(0,"",!1,""),this.nativeRefresher=!0,a=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===(0,m.b)(this)?this.setupiOSNativeRefresher(a,t):this.setupMDNativeRefresher(s,a,t);case 7:case"end":return o.stop()}},i,this)}));return function(i){return r.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.checkNativeRefresher()}},{key:"connectedCallback",value:function(){var r=(0,v.Z)(h().mark(function i(){var a,s=this;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("fixed"===this.el.getAttribute("slot")){e.next=3;break}return console.error('Make sure you use: <ion-refresher slot="fixed">'),e.abrupt("return");case 3:if(a=this.el.closest("ion-content")){e.next=7;break}return console.error("<ion-refresher> must be used inside an <ion-content>"),e.abrupt("return");case 7:return e.next=9,new Promise(function(o){return(0,d.c)(a,o)});case 9:return e.next=11,a.getScrollElement();case 11:return this.scrollEl=e.sent,this.backgroundContentEl=(0,d.g)(a).querySelector("#background-content"),e.next=15,N(this.el,(0,m.b)(this));case 15:if(!e.sent){e.next=19;break}this.setupNativeRefresher(a),e.next=23;break;case 19:return e.next=21,Promise.resolve().then(f.bind(f,8751));case 21:this.gesture=e.sent.createGesture({el:a,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:function(){return s.canStart()},onStart:function(){return s.onStart()},onMove:function(g){return s.onMove(g)},onEnd:function(){return s.onEnd()}}),this.disabledChanged();case 23:case"end":return e.stop()}},i,this)}));return function(){return r.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(){var r=(0,v.Z)(h().mark(function i(){var s=this;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||(0,d.r)(function(){return(0,d.r)(function(){return s.resetNativeRefresher(s.elementToTransform,32)})})):this.close(32,"120ms");case 1:case"end":return t.stop()}},i,this)}));return function(){return r.apply(this,arguments)}}()},{key:"cancel",value:function(){var r=(0,v.Z)(h().mark(function i(){var s=this;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.nativeRefresher?this.pointerDown||(0,d.r)(function(){return(0,d.r)(function(){return s.resetNativeRefresher(s.elementToTransform,16)})}):this.close(16,"");case 1:case"end":return t.stop()}},i,this)}));return function(){return r.apply(this,arguments)}}()},{key:"getProgress",value:function(){return Promise.resolve(this.progress)}},{key:"canStart",value:function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}},{key:"onStart",value:function(){this.progress=0,this.state=1}},{key:"onMove",value:function(n){if(this.scrollEl){var i=n.event;if(!(i.touches&&i.touches.length>1)&&0==(56&this.state)){var s=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,a=n.deltaY*s;if(a<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(i.cancelable&&i.preventDefault(),this.setCss(a,"0ms",!0,""),0===a)return void(this.progress=0);var e=this.pullMin;if(this.progress=a/e,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),a<e)return void(this.state=2);if(a>this.pullMax)return void this.beginRefresh();this.state=4}}}},{key:"onEnd",value:function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}},{key:"beginRefresh",value:function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}},{key:"close",value:function(n,i){var s=this;setTimeout(function(){s.state=1,s.progress=0,s.didStart=!1,s.setCss(0,"0ms",!1,"")},600),this.state=n,this.setCss(0,this.closeDuration,!0,i)}},{key:"setCss",value:function(n,i,s,a){var t=this;this.nativeRefresher||(this.appliedStyles=n>0,(0,l.c)(function(){if(t.scrollEl&&t.backgroundContentEl){var e=t.scrollEl.style,o=t.backgroundContentEl.style;e.transform=o.transform=n>0?"translateY(".concat(n,"px) translateZ(0px)"):"",e.transitionDuration=o.transitionDuration=i,e.transitionDelay=o.transitionDelay=a,e.overflow=s?"hidden":""}}))}},{key:"render",value:function(){var n,i=(0,m.b)(this);return(0,l.h)(l.H,{slot:"fixed",class:(n={},(0,y.Z)(n,i,!0),(0,y.Z)(n,"refresher-".concat(i),!0),(0,y.Z)(n,"refresher-native",this.nativeRefresher),(0,y.Z)(n,"refresher-active",1!==this.state),(0,y.Z)(n,"refresher-pulling",2===this.state),(0,y.Z)(n,"refresher-ready",4===this.state),(0,y.Z)(n,"refresher-refreshing",8===this.state),(0,y.Z)(n,"refresher-cancelling",16===this.state),(0,y.Z)(n,"refresher-completing",32===this.state),n)})}},{key:"el",get:function(){return(0,l.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),c;var r}();O.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};var G=function(){function c(r){(0,D.Z)(this,c),(0,l.r)(this,r)}return(0,M.Z)(c,[{key:"componentWillLoad",value:function(){if(void 0===this.pullingIcon){var n=(0,m.b)(this),i=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=m.c.get("refreshingIcon","ios"===n&&(0,m.a)("mobile")?m.c.get("spinner",i):"circular")}if(void 0===this.refreshingSpinner){var s=(0,m.b)(this);this.refreshingSpinner=m.c.get("refreshingSpinner",m.c.get("spinner","ios"===s?"lines":"circular"))}}},{key:"render",value:function(){var n=this.pullingIcon,i=null!=n&&void 0!==U.S[n],s=(0,m.b)(this);return(0,l.h)(l.H,{class:s},(0,l.h)("div",{class:"refresher-pulling"},this.pullingIcon&&i&&(0,l.h)("div",{class:"refresher-pulling-icon"},(0,l.h)("div",{class:"spinner-arrow-container"},(0,l.h)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===s&&"circular"===this.pullingIcon&&(0,l.h)("div",{class:"arrow-container"},(0,l.h)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!i&&(0,l.h)("div",{class:"refresher-pulling-icon"},(0,l.h)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&(0,l.h)("div",{class:"refresher-pulling-text",innerHTML:(0,T.s)(this.pullingText)})),(0,l.h)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&(0,l.h)("div",{class:"refresher-refreshing-icon"},(0,l.h)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&(0,l.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,T.s)(this.refreshingText)})))}},{key:"el",get:function(){return(0,l.i)(this)}}]),c}()}}]);