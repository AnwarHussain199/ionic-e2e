"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7014],{7014:function(te,O,m){m.r(O),m.d(O,{ion_virtual_scroll:function(){return U}});var I=m(8239),M=m(5134),R=m(7289),N=m(6054),A=m(8774),k=m.n(A),g=m(7629),F=m(7329),x="item",D="header",H="footer",K=function(e,t){var r=j(e,t);return r&&e.ownerDocument?e.ownerDocument.importNode(r.content,!0).children[0]:null},j=function(e,t){switch(t){case x:return e.querySelector("template:not([name])");case D:return e.querySelector("template[name=header]");case H:return e.querySelector("template[name=footer]")}},G=function(e,t){return 0===t?0:t===(e.length>0?e[e.length-1].index:0)+1?e.length:e.findIndex(function(i){return i.index===t})},Y=function(e,t,r){if(0===r&&t.length>=e.length)return t;for(var i=0;i<t.length;i++)e[i+r]=t[i];return e},T=function(e,t,r,i,n,a,s,l,o,c,d,y){for(var _=[],C=y+d,v=d;v<C;v++){var u=e[v];if(n){var p=n(u,v,e);null!=p&&_.push({i:c++,type:D,value:p,index:v,height:r?r(p,v):s,reads:r?0:2,visible:!!r})}if(_.push({i:c++,type:x,value:u,index:v,height:t?t(u,v):o,reads:t?0:2,visible:!!t}),a){var f=a(u,v,e);null!=f&&_.push({i:c++,type:H,value:f,index:v,height:i?i(f,v):l,reads:i?0:2,visible:!!i})}}return _},J=function(e,t,r){for(var i=e[r],n=r;n<e.length;n++)e[n]=i,i+=t[n].height;return i},Q=function(e,t){if(!e)return new Uint32Array(t);if(e.length===t)return e;if(t>e.length){var r=new Uint32Array(t);return r.set(e),r}return e.subarray(0,t)},U=function(){function h(e){var t=this;(0,M.Z)(this,h),(0,g.r)(this,e),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){t.updateVirtualScroll()}}return(0,R.Z)(h,[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"componentWillLoad",value:function(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")}},{key:"connectedCallback",value:(e=(0,I.Z)(k().mark(function r(){var i;return k().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(i=this.el.closest("ion-content")){a.next=4;break}return console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),a.abrupt("return");case 4:return a.next=6,i.getScrollElement();case 6:this.scrollEl=a.sent,this.contentEl=i,this.calcCells(),this.updateState();case 10:case"end":return a.stop()}},r,this)})),function(){return e.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(t){return Promise.resolve(function(e,t,r){var i=t.find(function(n){return n.type===x&&n.index===e});return i?r[i.i]:-1}(t,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:function(){var e=(0,I.Z)(k().mark(function r(i){var n,a,s,l,o=arguments;return k().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:-1,this.items){d.next=3;break}return d.abrupt("return");case 3:a=-1===n?this.items.length-i:n,s=G(this.cells,i),l=T(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,s,i,a),this.cells=Y(this.cells,l,s),this.lastItemLen=this.items.length,this.indexDirty=Math.max(i-1,0),this.scheduleUpdate();case 10:case"end":return d.stop()}},r,this)}));return function(r){return e.apply(this,arguments)}}()},{key:"checkEnd",value:function(){var e=(0,I.Z)(k().mark(function r(){return k().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this.items&&this.checkRange(this.lastItemLen);case 1:case"end":return n.stop()}},r,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateVirtualScroll",value:function(){!this.isEnabled||!this.scrollEl||(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),(0,g.f)(this.readVS.bind(this)),(0,g.c)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var t=this.contentEl,r=this.scrollEl,n=0,a=this.el;a&&a!==t;)n+=a.offsetTop,a=a.offsetParent;this.viewportOffset=n,r&&(this.viewportHeight=r.offsetHeight,this.currentScrollTop=r.scrollTop)}},{key:"writeVS",value:function(){var t=this.indexDirty,i=function(e,t,r){return{top:Math.max(e-100,0),bottom:e+t+100}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight),n=this.getHeightIndex(),a=function(e,t,r){for(var i=t.top,n=t.bottom,a=0;a<e.length&&!(e[a]>i);a++);for(var s=Math.max(a-2-1,0);a<e.length&&!(e[a]>=n);a++);return{offset:s,length:Math.min(a+2,e.length)-s}}(n,i),s=function(e,t,r){return e<=r.offset+r.length||t.offset!==r.offset||t.length!==r.length}(t,this.range,a);!s||(this.range=a,function(e,t,r,i){var a,n=(0,N.Z)(e);try{for(n.s();!(a=n.n()).done;){var s=a.value;s.change=0,s.d=!0}}catch(u){n.e(u)}finally{n.f()}for(var l=[],o=i.offset+i.length,c=function(p){var f=r[p],E=e.find(function(V){return V.d&&V.cell===f});if(E){var b=t[p];b!==E.top&&(E.top=b,E.change=1),E.d=!1}else l.push(f)},d=i.offset;d<o;d++)c(d);for(var y=e.filter(function(u){return u.d}),_=function(){var p=v[C],f=y.find(function(b){return b.d&&b.cell.type===p.type}),E=p.i;f?(f.d=!1,f.change=2,f.cell=p,f.top=t[E]):e.push({d:!1,cell:p,visible:!0,change:2,top:t[E]})},C=0,v=l;C<v.length;C++)_();e.filter(function(u){return u.d&&-9999!==u.top}).forEach(function(u){u.change=1,u.top=-9999})}(this.virtualDom,n,this.cells,a),this.nodeRender?function(e,t,r,i){for(var s,n=Array.from(e.children).filter(function(_){return"TEMPLATE"!==_.tagName}),a=n.length,l=0;l<r.length;l++){var o=r[l],c=o.cell;if(2===o.change){if(l<a)t(s=n[l],c,l);else{var d=K(e,c.type);(s=t(d,c,l)||d).classList.add("virtual-item"),e.appendChild(s)}s.$ionCell=c}else s=n[l];0!==o.change&&(s.style.transform="translate3d(0,".concat(o.top,"px,0)"));var y=c.visible;o.visible!==y&&(y?s.classList.remove("virtual-loading"):s.classList.add("virtual-loading"),o.visible=y),c.reads>0&&(i(c,s),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&(0,g.j)(this))}},{key:"updateCellHeight",value:function(t,r){var i=this,n=function(){if(r.$ionCell===t){var s=window.getComputedStyle(r),l=r.offsetHeight+parseFloat(s.getPropertyValue("margin-bottom"));i.setCellHeight(t,l)}};r?(0,F.c)(r,n):n()}},{key:"setCellHeight",value:function(t,r){var i=t.i;t===this.cells[i]&&(t.height!==r||!0!==t.visible)&&(t.visible=!0,t.height=r,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate())}},{key:"scheduleUpdate",value:function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)}},{key:"updateState",value:function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){!this.items||(this.lastItemLen=this.items.length,this.cells=T(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=Q(this.heightIndex,this.cells.length),this.totalHeight=J(this.heightIndex,this.cells,t),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(t){var r=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",r.onScroll)})}},{key:"renderVirtualNode",value:function(t){var r=t.cell,n=r.value,a=r.index;switch(r.type){case x:return this.renderItem(n,a);case D:return this.renderHeader(n,a);case H:return this.renderFooter(n,a)}}},{key:"render",value:function(){var t=this;return(0,g.h)(g.H,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&(0,g.h)(ee,{dom:this.virtualDom},this.virtualDom.map(function(r){return t.renderVirtualNode(r)})))}},{key:"el",get:function(){return(0,g.i)(this)}}],[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}]),h;var e}(),ee=function(e,t,r){var i=e.dom;return r.map(t,function(n,a){var s=i[a],l=n.vattrs||{},o=l.class||"";return o+="virtual-item ",s.visible||(o+="virtual-loading"),Object.assign(Object.assign({},n),{vattrs:Object.assign(Object.assign({},l),{class:o,style:Object.assign(Object.assign({},l.style),{transform:"translate3d(0,".concat(s.top,"px,0)")})})})})};U.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);