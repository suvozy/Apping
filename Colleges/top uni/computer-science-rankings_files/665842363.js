/* AG-develop 12.7.1-48 (2011-07-13 07:11:32 UTC) */
rsinetsegs=['E08741_10032','E08741_10001','D08734_70068','E08741_50000','E08741_50075'];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiDom=location.hostname;
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.[a-zA-Z]{3}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.\w+\.[a-zA-Z]{2}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]{3,}\.[a-zA-Z]{2}$)/,'$1');
var rsiSegs="";
var rsiPat=/.*_5.*/;
var rsiPat2=new RegExp("^"+'e08741'+"_","i");
for(x=0;x<rsinetsegs.length;++x){if(!rsiPat.test(rsinetsegs[x]))rsiSegs+='|'+rsinetsegs[x].replace(rsiPat2,"");}
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['E08741_10032','E08741_10001','D08734_70068','E08741_50000','E08741_50075'],'e08741');}