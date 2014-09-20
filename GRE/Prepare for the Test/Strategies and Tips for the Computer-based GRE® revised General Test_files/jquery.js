/*
 * jQuery Corners 0.3
 * Copyright (c) 2008 David Turnbull, Steven Wittens
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 */
jQuery.fn.corners=function(c){var o="rounded_by_jQuery_corners";var y=b(c);var f=false;try{f=(document.body.style.WebkitBorderRadius!==undefined);var B=navigator.userAgent.indexOf("Chrome");if(B>=0){f=true}}catch(e){}var z=false;try{z=(document.body.style.MozBorderRadius!==undefined);var B=navigator.userAgent.indexOf("Firefox");if(B>=0&&parseInt(navigator.userAgent.substring(B+8))<3){z=false}if(B>=0&&parseInt(navigator.userAgent.substring(B+8))>=4){z=true}}catch(e){}return this.each(function(E,I){$e=jQuery(I);if($e.hasClass(o)){return}$e.addClass(o);var D=/{(.*)}/.exec(I.className);var F=D?b(D[1],y):y;var J=I.nodeName.toLowerCase();if(J=="input"){I=q(I)}if(f&&F.webkit){l(I,F)}else{if(z&&F.mozilla&&(F.sizex==F.sizey)){n(I,F)}else{if($.browser.opera){p(I,F)}else{var G=d(I.parentNode);var H=d(I);switch(J){case"a":case"input":C(I,F,G,H);break;default:v(I,F,G,H);break}}}}});function l(G,F){var D=""+F.sizex+"px "+F.sizey+"px";var E=jQuery(G);if(F.tl){E.css("WebkitBorderTopLeftRadius",D)}if(F.tr){E.css("WebkitBorderTopRightRadius",D)}if(F.bl){E.css("WebkitBorderBottomLeftRadius",D)}if(F.br){E.css("WebkitBorderBottomRightRadius",D)}}function n(G,F){var D=""+F.sizex+"px";var E=jQuery(G);if(parseInt(navigator.userAgent.substring(B+8))>=4){if(F.tl){E.css("border-top-left-radius",D)}if(F.tr){E.css("border-top-right-radius",D)}if(F.bl){E.css("border-bottom-left-radius",D)}if(F.br){E.css("border-bottom-right-radius",D)}}else{if(F.tl){E.css("-moz-border-radius-topleft",D)}if(F.tr){E.css("-moz-border-radius-topright",D)}if(F.bl){E.css("-moz-border-radius-bottomleft",D)}if(F.br){E.css("-moz-border-radius-bottomright",D)}}}function p(G,F){var D=""+F.sizex+"px";var E=jQuery(G);if(F.tl){E.css("border-top-left-radius",D)}if(F.tr){E.css("border-top-right-radius",D)}if(F.bl){E.css("border-bottom-left-radius",D)}if(F.br){E.css("border-bottom-right-radius",D)}}function C(L,O,M,D){var N=u("table");var J=u("tbody");N.appendChild(J);var K=u("tr");var G=u("td","top");K.appendChild(G);var I=u("tr");var F=w(L,O,u("td"));I.appendChild(F);var H=u("tr");var E=u("td","bottom");H.appendChild(E);if(O.tl||O.tr){J.appendChild(K);A(G,O,M,D,true)}J.appendChild(I);if(O.bl||O.br){J.appendChild(H);A(E,O,M,D,false)}L.appendChild(N);if(jQuery.browser.msie){N.onclick=t}L.style.overflow="hidden"}function t(){if(!this.parentNode.onclick){this.parentNode.click()}}function q(F){var E=document.createElement("a");E.id=F.id;E.className=F.className;if(F.onclick){E.href="javascript:";E.onclick=F.onclick}else{jQuery(F).parent("form").each(function(){E.href=this.action});E.onclick=j}var D=document.createTextNode(F.value);E.appendChild(D);F.parentNode.replaceChild(E,F);return E}function j(){jQuery(this).parent("form").each(function(){this.submit()});return false}function v(G,D,E,F){var H=w(G,D,document.createElement("div"));G.appendChild(H);if(D.tl||D.tr){A(G,D,E,F,true)}if(D.bl||D.br){A(G,D,E,F,false)}}function w(H,G,I){var E=jQuery(H);var J;while(J=H.firstChild){I.appendChild(J)}if(H.style.height){var F=parseInt(E.css("height"));I.style.height=F+"px";F+=parseInt(E.css("padding-top"))+parseInt(E.css("padding-bottom"));H.style.height=F+"px"}if(H.style.width){var D=parseInt(E.css("width"));I.style.width=D+"px";D+=parseInt(E.css("padding-left"))+parseInt(E.css("padding-right"));H.style.width=D+"px"}I.style.paddingLeft=E.css("padding-left");I.style.paddingRight=E.css("padding-right");if(G.tl||G.tr){I.style.paddingTop=x(H,G,E.css("padding-top"),true)}else{I.style.paddingTop=E.css("padding-top")}if(G.bl||G.br){I.style.paddingBottom=x(H,G,E.css("padding-bottom"),false)}else{I.style.paddingBottom=E.css("padding-bottom")}H.style.padding=0;return I}function x(H,D,G,F){if(G.indexOf("px")<0){try{console.error("%s padding not in pixels",(F?"top":"bottom"),H)}catch(E){}G=D.sizey+"px"}G=parseInt(G);if(G-D.sizey<0){try{console.error("%s padding is %ipx for %ipx corner:",(F?"top":"bottom"),G,D.sizey,H)}catch(E){}G=D.sizey}return G-D.sizey+"px"}function u(E,D){var F=document.createElement(E);F.style.border="none";F.style.borderCollapse="collapse";F.style.borderSpacing=0;F.style.padding=0;F.style.margin=0;if(D){F.style.verticalAlign=D}return F}function d(E){try{var F=jQuery.css(E,"background-color");if(F.match(/^(transparent|rgba\(0,\s*0,\s*0,\s*0\))$/i)&&E.parentNode){return d(E.parentNode)}if(F==null){return"#ffffff"}if(F.indexOf("rgb")>-1){F=a(F)}if(F.length==4){F=m(F)}return F}catch(D){return"#ffffff"}}function m(D){return"#"+D.substring(1,2)+D.substring(1,2)+D.substring(2,3)+D.substring(2,3)+D.substring(3,4)+D.substring(3,4)}function a(I){var D=255;var F="";var E;var G=/([0-9]+)[, ]+([0-9]+)[, ]+([0-9]+)/;var H=G.exec(I);for(E=1;E<4;E++){F+=("0"+parseInt(H[E]).toString(16)).slice(-2)}return"#"+F}function b(E,G){var E=E||"";var F={sizex:5,sizey:5,tl:false,tr:false,bl:false,br:false,webkit:true,mozilla:true,transparent:false};if(G){F.sizex=G.sizex;F.sizey=G.sizey;F.webkit=G.webkit;F.transparent=G.transparent;F.mozilla=G.mozilla}var D=false;var H=false;jQuery.each(E.split(" "),function(I,K){K=K.toLowerCase();var J=parseInt(K);if(J>0&&K==J+"px"){F.sizey=J;if(!D){F.sizex=J}D=true}else{switch(K){case"no-native":F.webkit=F.mozilla=false;break;case"webkit":F.webkit=true;break;case"no-webkit":F.webkit=false;break;case"mozilla":F.mozilla=true;break;case"no-mozilla":F.mozilla=false;break;case"anti-alias":F.transparent=false;break;case"transparent":F.transparent=true;break;case"top":H=F.tl=F.tr=true;break;case"right":H=F.tr=F.br=true;break;case"bottom":H=F.bl=F.br=true;break;case"left":H=F.tl=F.bl=true;break;case"top-left":H=F.tl=true;break;case"top-right":H=F.tr=true;break;case"bottom-left":H=F.bl=true;break;case"bottom-right":H=F.br=true;break}}});if(!H){if(!G){F.tl=F.tr=F.bl=F.br=true}else{F.tl=G.tl;F.tr=G.tr;F.bl=G.bl;F.br=G.br}}return F}function s(G,E,H){var F=Array(parseInt("0x"+G.substring(1,3)),parseInt("0x"+G.substring(3,5)),parseInt("0x"+G.substring(5,7)));var D=Array(parseInt("0x"+E.substring(1,3)),parseInt("0x"+E.substring(3,5)),parseInt("0x"+E.substring(5,7)));r="0"+Math.round(F[0]+(D[0]-F[0])*H).toString(16);g="0"+Math.round(F[1]+(D[1]-F[1])*H).toString(16);E="0"+Math.round(F[2]+(D[2]-F[2])*H).toString(16);return"#"+r.substring(r.length-2)+g.substring(g.length-2)+E.substring(E.length-2)}function A(H,D,E,G,F){if(D.transparent){h(H,D,E,F)}else{k(H,D,E,G,F)}}function k(I,T,N,D,L){var H,G;var J=document.createElement("div");J.style.fontSize="1px";J.style.backgroundColor=N;var E=0;for(H=1;H<=T.sizey;H++){var Q,P,O;arc=Math.sqrt(1-Math.pow(1-H/T.sizey,2))*T.sizex;var F=T.sizex-Math.ceil(arc);var S=Math.floor(E);var R=T.sizex-F-S;var M=document.createElement("div");var K=J;M.style.margin="0px "+F+"px";M.style.height="1px";M.style.overflow="hidden";for(G=1;G<=R;G++){if(G==1){if(G==R){Q=((arc+E)*0.5)-S}else{P=Math.sqrt(1-Math.pow(1-(F+1)/T.sizex,2))*T.sizey;Q=(P-(T.sizey-H))*(arc-S-R+1)*0.5}}else{if(G==R){P=Math.sqrt(1-Math.pow((T.sizex-F-G+1)/T.sizex,2))*T.sizey;Q=1-(1-(P-(T.sizey-H)))*(1-(E-S))*0.5}else{O=Math.sqrt(1-Math.pow((T.sizex-F-G)/T.sizex,2))*T.sizey;P=Math.sqrt(1-Math.pow((T.sizex-F-G+1)/T.sizex,2))*T.sizey;Q=((P+O)*0.5)-(T.sizey-H)}}i(T,M,K,L,s(N,D,Q));K=M;var M=K.cloneNode(false);M.style.margin="0px 1px"}i(T,M,K,L,D);E=arc}if(L){I.insertBefore(J,I.firstChild)}else{I.appendChild(J)}}function i(F,D,H,G,E){if(G&&!F.tl){D.style.marginLeft=0}if(G&&!F.tr){D.style.marginRight=0}if(!G&&!F.bl){D.style.marginLeft=0}if(!G&&!F.br){D.style.marginRight=0}D.style.backgroundColor=E;if(G){H.appendChild(D)}else{H.insertBefore(D,H.firstChild)}}function h(F,N,K,H){var G=document.createElement("div");G.style.fontSize="1px";var D=document.createElement("div");D.style.overflow="hidden";D.style.height="1px";D.style.borderColor=K;D.style.borderStyle="none solid";var L=N.sizex-1;var I=N.sizey-1;if(!I){I=1}for(var E=0;E<N.sizey;E++){var M=L-Math.floor(Math.sqrt(1-Math.pow(1-E/I,2))*L);if(E==2&&N.sizex==6&&N.sizey==6){M=2}var J=D.cloneNode(false);J.style.borderWidth="0 "+M+"px";if(H){J.style.borderWidth="0 "+(N.tr?M:0)+"px 0 "+(N.tl?M:0)+"px"}else{J.style.borderWidth="0 "+(N.br?M:0)+"px 0 "+(N.bl?M:0)+"px"}H?G.appendChild(J):G.insertBefore(J,G.firstChild)}if(H){F.insertBefore(G,F.firstChild)}else{F.appendChild(G)}}};