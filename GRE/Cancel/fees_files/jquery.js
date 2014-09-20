/*
 * jQuery Corners 0.3
 * Copyright (c) 2008 David Turnbull, Steven Wittens
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 */
jQuery.fn.corners=function(c){var o="rounded_by_jQuery_corners";var y=b(c);var f=false;try{f=(document.body.style.WebkitBorderRadius!==undefined);var C=navigator.userAgent.indexOf("Chrome");if(C>=0){f=true}}catch(e){}var z=false;try{z=(document.body.style.MozBorderRadius!==undefined);var C=navigator.userAgent.indexOf("Firefox");if(C>=0&&parseInt(navigator.userAgent.substring(C+8))<3){z=false}if(C>=0&&parseInt(navigator.userAgent.substring(C+8))>=4){z=true}}catch(e){}return this.each(function(F,J){$e=jQuery(J);if($e.hasClass(o)){return}$e.addClass(o);var E=/{(.*)}/.exec(J.className);var G=E?b(E[1],y):y;var K=J.nodeName.toLowerCase();if(K=="input"){J=q(J)}if(f&&G.webkit){l(J,G)}else{if(z&&G.mozilla&&(G.sizex==G.sizey)){n(J,G)}else{if($.browser.opera){p(J,G)}else{if($.browser.msie&&parseInt($.browser.version,10)>8){A(J,G)}else{var H=d(J.parentNode);var I=d(J);switch(K){case"a":case"input":D(J,G,H,I);break;default:v(J,G,H,I);break}}}}}});function l(H,G){var E=""+G.sizex+"px "+G.sizey+"px";var F=jQuery(H);if(G.tl){F.css("WebkitBorderTopLeftRadius",E)}if(G.tr){F.css("WebkitBorderTopRightRadius",E)}if(G.bl){F.css("WebkitBorderBottomLeftRadius",E)}if(G.br){F.css("WebkitBorderBottomRightRadius",E)}}function n(H,G){var E=""+G.sizex+"px";var F=jQuery(H);if(parseInt(navigator.userAgent.substring(C+8))>=4){if(G.tl){F.css("border-top-left-radius",E)}if(G.tr){F.css("border-top-right-radius",E)}if(G.bl){F.css("border-bottom-left-radius",E)}if(G.br){F.css("border-bottom-right-radius",E)}}else{if(G.tl){F.css("-moz-border-radius-topleft",E)}if(G.tr){F.css("-moz-border-radius-topright",E)}if(G.bl){F.css("-moz-border-radius-bottomleft",E)}if(G.br){F.css("-moz-border-radius-bottomright",E)}}}function p(H,G){var E=""+G.sizex+"px";var F=jQuery(H);if(G.tl){F.css("border-top-left-radius",E)}if(G.tr){F.css("border-top-right-radius",E)}if(G.bl){F.css("border-bottom-left-radius",E)}if(G.br){F.css("border-bottom-right-radius",E)}}function A(H,G){var E=""+G.sizex+"px";var F=jQuery(H);if(G.tl){F.css("border-top-left-radius",E)}if(G.tr){F.css("border-top-right-radius",E)}if(G.bl){F.css("border-bottom-left-radius",E)}if(G.br){F.css("border-bottom-right-radius",E)}}function D(M,P,N,E){var O=u("table");var K=u("tbody");O.appendChild(K);var L=u("tr");var H=u("td","top");L.appendChild(H);var J=u("tr");var G=x(M,P,u("td"));J.appendChild(G);var I=u("tr");var F=u("td","bottom");I.appendChild(F);if(P.tl||P.tr){K.appendChild(L);B(H,P,N,E,true)}K.appendChild(J);if(P.bl||P.br){K.appendChild(I);B(F,P,N,E,false)}M.appendChild(O);if(jQuery.browser.msie){O.onclick=t}M.style.overflow="hidden"}function t(){if(!this.parentNode.onclick){this.parentNode.click()}}function q(G){var F=document.createElement("a");F.id=G.id;F.className=G.className;if(G.onclick){F.href="javascript:";F.onclick=G.onclick}else{jQuery(G).parent("form").each(function(){F.href=this.action});F.onclick=j}var E=document.createTextNode(G.value);F.appendChild(E);G.parentNode.replaceChild(F,G);return F}function j(){jQuery(this).parent("form").each(function(){this.submit()});return false}function v(H,E,F,G){var I=x(H,E,document.createElement("div"));H.appendChild(I);if(E.tl||E.tr){B(H,E,F,G,true)}if(E.bl||E.br){B(H,E,F,G,false)}}function x(I,H,J){var F=jQuery(I);var K;while(K=I.firstChild){J.appendChild(K)}if(I.style.height){var G=parseInt(F.css("height"));J.style.height=G+"px";G+=parseInt(F.css("padding-top"))+parseInt(F.css("padding-bottom"));I.style.height=G+"px"}if(I.style.width){var E=parseInt(F.css("width"));J.style.width=E+"px";E+=parseInt(F.css("padding-left"))+parseInt(F.css("padding-right"));I.style.width=E+"px"}J.style.paddingLeft=F.css("padding-left");J.style.paddingRight=F.css("padding-right");if(H.tl||H.tr){J.style.paddingTop=w(I,H,F.css("padding-top"),true)}else{J.style.paddingTop=F.css("padding-top")}if(H.bl||H.br){J.style.paddingBottom=w(I,H,F.css("padding-bottom"),false)}else{J.style.paddingBottom=F.css("padding-bottom")}I.style.padding=0;return J}function w(I,E,H,G){if(H.indexOf("px")<0){try{console.error("%s padding not in pixels",(G?"top":"bottom"),I)}catch(F){}H=E.sizey+"px"}H=parseInt(H);if(H-E.sizey<0){try{console.error("%s padding is %ipx for %ipx corner:",(G?"top":"bottom"),H,E.sizey,I)}catch(F){}H=E.sizey}return H-E.sizey+"px"}function u(F,E){var G=document.createElement(F);G.style.border="none";G.style.borderCollapse="collapse";G.style.borderSpacing=0;G.style.padding=0;G.style.margin=0;if(E){G.style.verticalAlign=E}return G}function d(F){try{var G=jQuery.css(F,"background-color");if(G.match(/^(transparent|rgba\(0,\s*0,\s*0,\s*0\))$/i)&&F.parentNode){return d(F.parentNode)}if(G==null){return"#ffffff"}if(G.indexOf("rgb")>-1){G=a(G)}if(G.length==4){G=m(G)}return G}catch(E){return"#ffffff"}}function m(E){return"#"+E.substring(1,2)+E.substring(1,2)+E.substring(2,3)+E.substring(2,3)+E.substring(3,4)+E.substring(3,4)}function a(J){var E=255;var G="";var F;var H=/([0-9]+)[, ]+([0-9]+)[, ]+([0-9]+)/;var I=H.exec(J);for(F=1;F<4;F++){G+=("0"+parseInt(I[F]).toString(16)).slice(-2)}return"#"+G}function b(F,H){var F=F||"";var G={sizex:5,sizey:5,tl:false,tr:false,bl:false,br:false,webkit:true,mozilla:true,transparent:false};if(H){G.sizex=H.sizex;G.sizey=H.sizey;G.webkit=H.webkit;G.transparent=H.transparent;G.mozilla=H.mozilla}var E=false;var I=false;jQuery.each(F.split(" "),function(J,L){L=L.toLowerCase();var K=parseInt(L);if(K>0&&L==K+"px"){G.sizey=K;if(!E){G.sizex=K}E=true}else{switch(L){case"no-native":G.webkit=G.mozilla=false;break;case"webkit":G.webkit=true;break;case"no-webkit":G.webkit=false;break;case"mozilla":G.mozilla=true;break;case"no-mozilla":G.mozilla=false;break;case"anti-alias":G.transparent=false;break;case"transparent":G.transparent=true;break;case"top":I=G.tl=G.tr=true;break;case"right":I=G.tr=G.br=true;break;case"bottom":I=G.bl=G.br=true;break;case"left":I=G.tl=G.bl=true;break;case"top-left":I=G.tl=true;break;case"top-right":I=G.tr=true;break;case"bottom-left":I=G.bl=true;break;case"bottom-right":I=G.br=true;break}}});if(!I){if(!H){G.tl=G.tr=G.bl=G.br=true}else{G.tl=H.tl;G.tr=H.tr;G.bl=H.bl;G.br=H.br}}return G}function s(H,F,I){var G=Array(parseInt("0x"+H.substring(1,3)),parseInt("0x"+H.substring(3,5)),parseInt("0x"+H.substring(5,7)));var E=Array(parseInt("0x"+F.substring(1,3)),parseInt("0x"+F.substring(3,5)),parseInt("0x"+F.substring(5,7)));r="0"+Math.round(G[0]+(E[0]-G[0])*I).toString(16);g="0"+Math.round(G[1]+(E[1]-G[1])*I).toString(16);F="0"+Math.round(G[2]+(E[2]-G[2])*I).toString(16);return"#"+r.substring(r.length-2)+g.substring(g.length-2)+F.substring(F.length-2)}function B(I,E,F,H,G){if(E.transparent){h(I,E,F,G)}else{k(I,E,F,H,G)}}function k(J,U,O,E,M){var I,H;var K=document.createElement("div");K.style.fontSize="1px";K.style.backgroundColor=O;var F=0;for(I=1;I<=U.sizey;I++){var R,Q,P;arc=Math.sqrt(1-Math.pow(1-I/U.sizey,2))*U.sizex;var G=U.sizex-Math.ceil(arc);var T=Math.floor(F);var S=U.sizex-G-T;var N=document.createElement("div");var L=K;N.style.margin="0px "+G+"px";N.style.height="1px";N.style.overflow="hidden";for(H=1;H<=S;H++){if(H==1){if(H==S){R=((arc+F)*0.5)-T}else{Q=Math.sqrt(1-Math.pow(1-(G+1)/U.sizex,2))*U.sizey;R=(Q-(U.sizey-I))*(arc-T-S+1)*0.5}}else{if(H==S){Q=Math.sqrt(1-Math.pow((U.sizex-G-H+1)/U.sizex,2))*U.sizey;R=1-(1-(Q-(U.sizey-I)))*(1-(F-T))*0.5}else{P=Math.sqrt(1-Math.pow((U.sizex-G-H)/U.sizex,2))*U.sizey;Q=Math.sqrt(1-Math.pow((U.sizex-G-H+1)/U.sizex,2))*U.sizey;R=((Q+P)*0.5)-(U.sizey-I)}}i(U,N,L,M,s(O,E,R));L=N;var N=L.cloneNode(false);N.style.margin="0px 1px"}i(U,N,L,M,E);F=arc}if(M){J.insertBefore(K,J.firstChild)}else{J.appendChild(K)}}function i(G,E,I,H,F){if(H&&!G.tl){E.style.marginLeft=0}if(H&&!G.tr){E.style.marginRight=0}if(!H&&!G.bl){E.style.marginLeft=0}if(!H&&!G.br){E.style.marginRight=0}E.style.backgroundColor=F;if(H){I.appendChild(E)}else{I.insertBefore(E,I.firstChild)}}function h(G,O,L,I){var H=document.createElement("div");H.style.fontSize="1px";var E=document.createElement("div");E.style.overflow="hidden";E.style.height="1px";E.style.borderColor=L;E.style.borderStyle="none solid";var M=O.sizex-1;var J=O.sizey-1;if(!J){J=1}for(var F=0;F<O.sizey;F++){var N=M-Math.floor(Math.sqrt(1-Math.pow(1-F/J,2))*M);if(F==2&&O.sizex==6&&O.sizey==6){N=2}var K=E.cloneNode(false);K.style.borderWidth="0 "+N+"px";if(I){K.style.borderWidth="0 "+(O.tr?N:0)+"px 0 "+(O.tl?N:0)+"px"}else{K.style.borderWidth="0 "+(O.br?N:0)+"px 0 "+(O.bl?N:0)+"px"}I?H.appendChild(K):H.insertBefore(K,H.firstChild)}if(I){G.insertBefore(H,G.firstChild)}else{G.appendChild(H)}}};