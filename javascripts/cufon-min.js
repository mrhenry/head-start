/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 */
var Cufon=((() => {
 var k=function(...args) {return k.replace.apply(null,args);};var u=k.DOM={ready:((() => {
  var z=false;
  var B={loaded:1,complete:1};
  var y=[];
  var A=() => {if(z){return}z=true;for(var C;C=y.shift();C()){}};
  if(document.addEventListener){document.addEventListener("DOMContentLoaded",A,false);window.addEventListener("pageshow",A,false)}if(!window.opera&&document.readyState){((function(...args) {B[document.readyState]?A():setTimeout(args.callee,10)}))()}if(document.readyState&&document.createStyleSheet){((function(...args) {try{document.body.doScroll("left");A()}catch(C){setTimeout(args.callee,1)}}))()}o(window,"load",A);return function(C){if(!arguments.length){A()}else{z?C():y.push(C)}}
 }))()};var l=k.CSS={Size(z, y) {this.value=parseFloat(z);this.unit=String(z).match(/[a-z%]*$/)[0]||"px";this.convert=function(A){return A/y*this.value};this.convertFrom=function(A){return A/this.value*y};this.toString=function(){return this.value+this.unit}},getStyle(z) {var y=document.defaultView;if(y&&y.getComputedStyle){return new a(y.getComputedStyle(z,null))}if(z.currentStyle){return new a(z.currentStyle)}return new a(z.style)},ready:((() => {
  var A=false;
  var z=[];
  var B=() => {A=true;for(var D;D=z.shift();D()){}};
  var y=Object.prototype.propertyIsEnumerable?f("style"):{length:0};var C=f("link");u.ready(function(...args) {
   var G=0;
   var F;
   for(var E=0,D=C.length;F=C[E],E<D;++E){if(!F.disabled&&F.rel.toLowerCase()=="stylesheet"){++G}}if(document.styleSheets.length>=y.length+G){B()}else{setTimeout(args.callee,10)}
  });return D => {if(A){D()}else{z.push(D)}};
 }))(),supports(A, z) {var y=document.createElement("span").style;if(y[A]===undefined){return false}y[A]=z;return y[A]===z},textAlign(B, A, y, z) {if(A.get("textAlign")=="right"){if(y>0){B=" "+B}}else{if(y<z-1){B+=" "}}return B},textDecoration(D, C) {if(!C){C=this.getStyle(D)}var z={underline:null,overline:null,"line-through":null};for(var y=D;y.parentNode&&y.parentNode.nodeType==1;){var B=true;for(var A in z){if(z[A]){continue}if(C.get("textDecoration").indexOf(A)!=-1){z[A]=C.get("color")}B=false}if(B){break}C=this.getStyle(y=y.parentNode)}return z},textShadow:i(C => {
  if(C=="none"){return null}
  var B=[];
  var D={};
  var y;
  var z=0;
  var A=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(y=A.exec(C)){if(y[0]==","){B.push(D);D={},z=0}else{if(y[1]){D.color=y[1]}else{D[["offX","offY","blur"][z++]]=y[2]}}}B.push(D);return B
 }),color:i(z => {var y={};y.color=z.replace(/^rgba\((.*?),\s*([\d.]+)\)/,(B, A, C) => {y.opacity=parseFloat(C);return"rgb("+A+")"});return y}),textTransform(z, y) {return z[{uppercase:"toUpperCase",lowercase:"toLowerCase"}[y.get("textTransform")]||"toString"]()}};function q(z){var y=this.face=z.face;this.glyphs=z.glyphs;this.w=z.w;this.baseSize=parseInt(y["units-per-em"],10);this.family=y["font-family"].toLowerCase();this.weight=y["font-weight"];this.style=y["font-style"]||"normal";this.viewBox=((() => {var B=y.bbox.split(/\s+/);var A={minX:parseInt(B[0],10),minY:parseInt(B[1],10),maxX:parseInt(B[2],10),maxY:parseInt(B[3],10)};A.width=A.maxX-A.minX,A.height=A.maxY-A.minY;A.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return A}))();this.ascent=-parseInt(y.ascent,10);this.descent=-parseInt(y.descent,10);this.height=-this.ascent+this.descent}function e(){
  var z={};
  var y={oblique:"italic",italic:"oblique"};
  this.add=A => {(z[A.style]||(z[A.style]={}))[A.weight]=A};this.get=(E, F) => {
   var D=z[E]||z[y[E]]||z.normal||z.italic||z.oblique;if(!D){return null}F={normal:400,bold:700}[F]||parseInt(F,10);if(D[F]){return D[F]}
   var B={1:1,99:0}[F%100];
   var H=[];
   var C;
   var A;
   if(B===undefined){B=F>400}if(F==500){F=400}for(var G in D){G=parseInt(G,10);if(!C||G<C){C=G}if(!A||G>A){A=G}H.push(G)}if(F<C){F=C}if(F>A){F=A}H.sort((J, I) => (B?(J>F&&I>F)?J<I:J>I:(J<F&&I<F)?J>I:J<I)?-1:1);return D[H[0]]
  }
 }function p(){function A(C,D){if(C.contains){return C.contains(D)}return C.compareDocumentPosition(D)&16}function y(D){var C=D.relatedTarget;if(!C||A(this,C)){return}z(this)}function B(C){z(this)}function z(C){setTimeout(() => {k.replace(C,d.get(C).options,true)},10)}this.attach=C => {if(C.onmouseenter===undefined){o(C,"mouseover",y);o(C,"mouseout",y)}else{o(C,"mouseenter",B);o(C,"mouseleave",B)}}}function x(){
  var A={};
  var y=0;
  function z(B){return B.cufid||(B.cufid=++y)}this.get=B => {var C=z(B);return A[C]||(A[C]={})}
 }function a(y){
  var A={};
  var z={};
  this.get=B => A[B]!=undefined?A[B]:y[B];this.getSize=function(C,B){return z[C]||(z[C]=new l.Size(this.get(C),B))};this.extend=function(B){for(var C in B){A[C]=B[C]}return this}
 }function o(z,y,A){if(z.addEventListener){z.addEventListener(y,A,false)}else{if(z.attachEvent){z.attachEvent("on"+y,() => A.call(z,window.event))}}}function r(z,y){var A=d.get(z);if(A.options){return z}if(y.hover&&y.hoverables[z.nodeName.toLowerCase()]){b.attach(z)}A.options=y;return z}function i(y){var z={};return function(A){if(!z.hasOwnProperty(A)){z[A]=y(...arguments)}return z[A]};}function c(D,C){
  if(!C){C=l.getStyle(D)}
  var z=C.get("fontFamily").split(/\s*,\s*/);
  var B;
  for(var A=0,y=z.length;A<y;++A){B=z[A].replace(/^(["'])(.*?)\1$/,"$2").toLowerCase();if(h[B]){return h[B].get(C.get("fontStyle"),C.get("fontWeight"))}}return null
 }function f(y){return document.getElementsByTagName(y)}function g(...args) {
  var y={};
  var B;
  for(var A=0,z=args.length;A<z;++A){for(B in args[A]){y[B]=args[A][B]}}return y
 }function m(B,J,z,K,C,A){
  var I=K.separate;if(I=="none"){return w[K.engine].apply(null,arguments)}
  var H=document.createDocumentFragment();
  var E;
  var F=J.split(n[I]);
  var y=(I=="words");
  if(y&&s){if(/^\s/.test(J)){F.unshift("")}if(/\s$/.test(J)){F.push("")}}for(var G=0,D=F.length;G<D;++G){E=w[K.engine](B,y?l.textAlign(F[G],z,G,D):F[G],z,K,C,A,G<D-1);if(E){H.appendChild(E)}}return H
 }function j(z,G){
  var A;
  var y;
  var D;
  var F;
  for(var B=r(z,G).firstChild;B;B=D){D=B.nextSibling;F=false;if(B.nodeType==1){if(!B.firstChild){continue}if(!/cufon/.test(B.className)){arguments.callee(B,G);continue}else{F=true}}if(!y){y=l.getStyle(z).extend(G)}if(!A){A=c(z,y)}if(!A){continue}if(F){w[G.engine](A,null,y,G,B,z);continue}var E=B.data;if(E===""){continue}var C=m(A,E,y,G,B,z);if(C){B.parentNode.replaceChild(C,B)}else{B.parentNode.removeChild(B)}}
 }var s=" ".split(/\s+/).length==0;var d=new x();var b=new p();var v=[];
 var w={};
 var h={};
 var t={enableTextDecoration:false,engine:null,hover:false,hoverables:{a:true},printable:true,selector:(window.Sizzle||window.jQuery||(window.dojo&&dojo.query)||(window.$$&&(y => $$(y)))||(window.$&&(y => $(y)))||(document.querySelectorAll&&(y => document.querySelectorAll(y)))||f),separate:"words",textShadow:"none"};
 var n={words:/\s+/,characters:""};k.now=() => {u.ready();return k};k.refresh=() => {var A=v.splice(0,v.length);for(var z=0,y=A.length;z<y;++z){k.replace.apply(null,A[z])}return k};k.registerEngine=(z, y) => {if(!y){return k}w[z]=y;return k.set("engine",z)};k.registerFont=A => {
  var y=new q(A);
  var z=y.family;
  if(!h[z]){h[z]=new e()}h[z].add(y);return k.set("fontFamily",z)
 };k.replace=function(A,z,y){z=g(t,z);if(!z.engine){return k}if(typeof z.textShadow=="string"){z.textShadow=l.textShadow(z.textShadow)}if(!y){v.push(arguments)}if(A.nodeType||typeof A=="string"){A=[A]}l.ready(() => {for(var C=0,B=A.length;C<B;++C){var D=A[C];if(typeof D=="string"){k.replace(z.selector(D),z,true)}else{j(D,z)}}});return k};k.set=(y, z) => {t[y]=z;return k};return k
}))();Cufon.registerEngine("canvas",((() => {var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return null}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode("@media screen,projection{.cufon-canvas{display:inline;display:inline-block;position:relative;vertical-align:middle"+(e?"":";font-size:1px;line-height:1px")+"}.cufon-canvas .cufon-alt{position:absolute;left:-10000in;font-size:1px}"+(a?".cufon-canvas canvas{position:relative}":".cufon-canvas canvas{position:absolute}")+"}@media print{.cufon-canvas{padding:0 !important}.cufon-canvas canvas{display:none}.cufon-canvas .cufon-alt{display:inline}}"));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){
 var n=0;
 var m=0;
 var g=[];
 var o=/([mrvxe])([^a-z]*)/g;
 var k;
 generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m](...g[j].a)}return g
}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m](...g.a)}}return (S, w, N, s, C, T) => {
 var k=(w===null);var A=S.viewBox;var m=N.getSize("fontSize",S.baseSize);var L=N.get("letterSpacing");L=(L=="normal")?0:m.convertFrom(parseInt(L,10));
 var B=0;
 var M=0;
 var K=0;
 var u=0;
 var z=s.textShadow;
 var I=[];
 if(z){for(var R=0,O=z.length;R<O;++R){var E=z[R];var H=m.convertFrom(parseFloat(E.offX));var G=m.convertFrom(parseFloat(E.offY));I[R]=[H,G];if(G<B){B=G}if(H>M){M=H}if(G>K){K=G}if(H<u){u=H}}}var W=Cufon.CSS.textTransform(k?C.alt:w,N).split("");
 var h=0;
 var v=null;
 for(var R=0,O=W.length;R<O;++R){var t=S.glyphs[W[R]]||S.missingGlyph;if(!t){continue}h+=v=Number(t.w||S.w)+L}if(v===null){return null}M+=(A.width-v);u+=A.minX;
 var r;
 var n;
 if(k){r=C;n=C.firstChild}else{r=document.createElement("span");r.className="cufon cufon-canvas";r.alt=w;n=document.createElement("canvas");r.appendChild(n);if(s.printable){var P=document.createElement("span");P.className="cufon-alt";P.appendChild(document.createTextNode(w));r.appendChild(P)}}var X=r.style;var F=n.style;var j=m.convert(A.height-B+K);var V=Math.ceil(j);var J=V/j;n.width=Math.ceil(m.convert(h+M-u)*J);n.height=V;B+=A.minY;F.top=Math.round(m.convert(B-S.ascent))+"px";F.left=Math.round(m.convert(u))+"px";var q=Math.ceil(m.convert(h*J))+"px";if(a){X.width=q;X.height=m.convert(S.height)+"px"}else{X.paddingLeft=q;X.paddingBottom=(m.convert(S.height)-1)+"px"}
 var U=n.getContext("2d");
 var D=V/A.height;
 U.scale(D,D);U.translate(-u,-B);U.lineWidth=S.face["underline-thickness"];U.save();function o(i,g){U.strokeStyle=g;U.beginPath();U.moveTo(0,i);U.lineTo(h,i);U.stroke()}var p=s.enableTextDecoration?Cufon.CSS.textDecoration(T,N):{};if(p.underline){o(-S.face["underline-position"],p.underline)}if(p.overline){o(S.ascent,p.overline)}U.fillStyle=N.get("color");function Q(){for(var x=0,g=W.length;x<g;++x){var y=S.glyphs[W[x]]||S.missingGlyph;if(!y){continue}U.beginPath();if(y.d){if(y.code){c(y.code,U)}else{y.code=d("m"+y.d,U)}}U.fill();U.translate(Number(y.w||S.w)+L,0)}}if(z){for(var R=0,O=z.length;R<O;++R){var E=z[R];U.save();U.fillStyle=E.color;U.translate(...I[R]);Q();U.restore()}}Q();U.restore();if(p["line-through"]){o(-S.descent,p["line-through"])}return r
};}))());Cufon.registerEngine("vml",((() => {if(!document.namespaces){return}document.write('<!--[if vml]><script type="text/javascript">Cufon.vmlEnabled=true;<\/script><![endif]-->');if(!Cufon.vmlEnabled){return}if(document.namespaces.cvml==null){document.namespaces.add("cvml","urn:schemas-microsoft-com:vml");document.write('<style type="text/css">@media screen{cvml\\:shape,cvml\\:group,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute}.cufon-vml-canvas{position:absolute;text-align:left}.cufon-vml{display:inline-block;position:relative;vertical-align:middle}.cufon-vml .cufon-alt{position:absolute;left:-10000in;font-size:1px}a .cufon-vml{cursor:pointer}}@media print{.cufon-vml *{display:none}.cufon-vml .cufon-alt{display:inline}}</style>')}function b(c,d){return a(c,/(?:em|ex|%)$/i.test(d)?"1em":d)}function a(f,g){
 if(/px$/i.test(g)){return parseFloat(g)}
 var e=f.style.left;
 var d=f.runtimeStyle.left;
 f.runtimeStyle.left=f.currentStyle.left;f.style.left=g;var c=f.style.pixelLeft;f.style.left=e;f.runtimeStyle.left=d;return c
}return (R, x, M, u, B, S, K) => {
 var f=(x===null);if(f){x=B.alt}var z=R.viewBox;var g=M.computedFontSize||(M.computedFontSize=new Cufon.CSS.Size(b(S,M.get("fontSize"))+"px",R.baseSize));var J=M.computedLSpacing;if(J==undefined){J=M.get("letterSpacing");M.computedLSpacing=J=(J=="normal")?0:~~g.convertFrom(a(S,J))}
 var r;
 var h;
 if(f){r=B;h=B.firstChild}else{r=document.createElement("span");r.className="cufon cufon-vml";r.alt=x;h=document.createElement("span");h.className="cufon-vml-canvas";r.appendChild(h);if(u.printable){var P=document.createElement("span");P.className="cufon-alt";P.appendChild(document.createTextNode(x));r.appendChild(P)}if(!K){r.appendChild(document.createElement("cvml:group"))}}var X=r.style;var E=h.style;
 var d=g.convert(z.height);
 var U=Math.ceil(d);
 var I=U/d;
 var H=z.minX;
 var G=z.minY;
 E.height=U;E.top=Math.round(g.convert(G-R.ascent));E.left=Math.round(g.convert(H));X.height=g.convert(R.height)+"px";var n=u.enableTextDecoration?Cufon.CSS.textDecoration(S,M):{};var w=M.get("color");var V=Cufon.CSS.textTransform(x,M).split("");
 var c=0;
 var F=0;
 var o=null;
 var v;
 var p;
 var y=u.textShadow;
 for(var Q=0,O=0,N=V.length;Q<N;++Q){v=R.glyphs[V[Q]]||R.missingGlyph;if(v){c+=o=~~(v.w||R.w)+J}}if(o===null){return null}var q=-H+c+(z.width-o);
 var W=g.convert(q*I);
 var L=Math.round(W);
 var D=q+","+z.height;
 var e;
 var A="r"+D+"nsnf";for(Q=0;Q<N;++Q){v=R.glyphs[V[Q]]||R.missingGlyph;if(!v){continue}if(f){p=h.childNodes[O];if(p.firstChild){p.removeChild(p.firstChild)}}else{p=document.createElement("cvml:shape");h.appendChild(p)}p.stroked="f";p.coordsize=D;p.coordorigin=e=(H-F)+","+G;p.path=(v.d?"m"+v.d+"xe":"")+"m"+e+A;p.fillcolor=w;var T=p.style;T.width=L;T.height=U;if(y){
  var m=y[0];
  var j=y[1];
  var t=Cufon.CSS.color(m.color);
  var s;
  var C=document.createElement("cvml:shadow");C.on="t";C.color=t.color;C.offset=m.offX+","+m.offY;if(j){s=Cufon.CSS.color(j.color);C.type="double";C.color2=s.color;C.offset2=j.offX+","+j.offY}C.opacity=t.opacity||(s&&s.opacity)||1;p.appendChild(C)
 }F+=~~(v.w||R.w)+J;++O}X.width=Math.max(Math.ceil(g.convert(c*I)),0);return r
};}))());