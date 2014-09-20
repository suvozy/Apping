/* USE WORDWRAP & MAXIMIZE THE WINDOW TO SEE THIS FILE
========================================
 SmartMenus v5.5 Script LOADER
 Commercial License No.: UN-LICENSED
========================================
 Please note: THIS IS NOT FREE SOFTWARE.
 Available licenses for use:
 http://www.smartmenus.org/license.php
========================================
 (c)2005 ET VADIKOM-VASIL DINKOV
========================================
 IE4+ NS4+ Opera5+ Konqueror2+ Safari
========================================
 Get the menus with a great manual & examples at:
 http://www.smartmenus.org
 LEAVE THESE NOTES PLEASE - delete the comments if you want */

//alert("in loader");
//alert(ROOT);
// USE WORDWRAP AND MAXIMIZE THE WINDOW TO SEE THIS FILE
// v5

// === 1 === EXTRAS
s_hideTimeout=500;//1000=1 second
s_subShowTimeout=300;//if <=100 the menus will function like SM4.x
s_subMenuOffsetX=4;//pixels (if no subs, leave as you like)
s_subMenuOffsetY=1;
s_showLinkCursor=true;
s_statusShowLinks=true;
s_keepHighlighted=true;
s_autoSELECTED=false;//make the item linking to the current page SELECTED
s_autoSELECTEDItemsClickable=false;//look at IMPORTANT NOTES 1 in the Manual
s_scrollingInterval=30;//scrolling for tall menus
s_rightToLeft=false;
s_hideSELECTsInIE=false;//look at IMPORTANT HOWTOS 7 in the Manual


// === 2 === Default TARGET for all the links
// for navigation to frame, calling functions or
// different target for any link look at
// IMPORTANT HOWTOS 1 NOTES in the Manual
s_target='self';//(newWindow/self/top)


// === 3 === STYLESHEETS- you can define different arrays and then asign
// them to any menu you want with the s_add() function
s_CSSTop=[
'#FFFFFF',	// BorderColorDOM ('top right bottom left' or 'all')
'#FFFFFF',	// BorderColorNS4
0,		// BorderWidth
'#F6B124',	// BgColor
0,		// Padding
'#6C3D00',	// ItemBgColor - need's to be changed
'#C9C9C9',	// ItemOverBgColor - need's to be changed
'#FFFFFF',	                // ItemFontColor
'#6C3D00',	// ItemOverFontColor
'Arial',	                // ItemFontFamily
'11px',		// ItemFontSize (css)
'1',		// ItemFontSize Netscape4 (look at KNOWN BUGS 3 in the Manual)
'normal',		// ItemFontWeight (bold/normal)
'left',		// ItemTextAlign (left/center/right)
3,		// ItemPadding
1,		// ItemSeparatorSize
'#FFFFFF',	// ItemSeparatorColor
'',		// IEfilter (look at Samples\IE4(5.5)Filters dirs)
true,				// UseSubImg
ROOT+'arrow.gif',		// SubImgSrc
ROOT+'arrow_over.gif',	// OverSubImgSrc
7,				// SubImgWidth
7,				// SubImgHeight
5,				// SubImgTop px (from item top)
'#8A8CCC',			// SELECTED ItemBgColor
'#FFFFFF',			// SELECTED ItemFontColor
ROOT+'arrow_over.gif',	// SELECTED SubImgSrc
true,				// UseScrollingForTallMenus
ROOT+'images/scrolltop.gif',	// ScrollingImgTopSrc
ROOT+'images/scrollbottom.gif',	// ScrollingImgBottomSrc
68,				// ScrollingImgWidth
12,				// ScrollingImgHeight
'',		// ItemClass (css)
'',		// ItemOverClass (css)
''		// SELECTED ItemClass (css)
];



s_CSSTop_sub=[
'#FFFFFF',	// BorderColorDOM ('top right bottom left' or 'all')
'#000000',	// BorderColorNS4
1,		// BorderWidth
'#b7ddf4',	// BgColor
0,		// Padding
'#52A8DC',	// ItemBgColor
'#7FC4EE',	// ItemOverBgColor
'#FFFFFF',	// ItemFontColor
'#1C4D84',	// ItemOverFontColor
'arial',	// ItemFontFamily
'11px',		// ItemFontSize (css)
'1',		// ItemFontSize Netscape4 (look at KNOWN BUGS 3 in the Manual)
'normal',		// ItemFontWeight (bold/normal)
'left',		// ItemTextAlign (left/center/right)
2,		// ItemPadding
1,		// ItemSeparatorSize
'#90C7E8',	// ItemSeparatorColor
'',		// IEfilter (look at Samples\IE4(5.5)Filters dirs)
true,				// UseSubImg
ROOT+'images/navbar/arrow.gif',		// SubImgSrc
ROOT+'images/navbar/arrow_over.gif',	// OverSubImgSrc
8,				// SubImgWidth
8,				// SubImgHeight
5,				// SubImgTop px (from item top)
'#8A8CCC',			// SELECTED ItemBgColor
'#FFFFFF',			// SELECTED ItemFontColor
ROOT+'images/arrowover.gif',	// SELECTED SubImgSrc
true,				// UseScrollingForTallMenus
ROOT+'images/scrolltop.gif',	// ScrollingImgTopSrc
ROOT+'images/scrollbottom.gif',	// ScrollingImgBottomSrc
68,				// ScrollingImgWidth
12,				// ScrollingImgHeight
'',		// ItemClass (css)
'',		// ItemOverClass (css)
''		// SELECTED ItemClass (css)
];


s_CSSred=['#ff0000','#ff0000',2,'#ffffff',0,'#fffbf0','#bebddf','#ff0000','#ff0000','arial,helvetica,sans-serif','10pt','2','normal','center',5,0,'#fff5c6','',true,'scripts/images/arrow2.gif','scripts/images/arrow3.gif',7,7,9,'#C0C0C0','#FFFFFF','scripts/images/arrow2.gif',true,'scripts/images/scrolltop.gif','scripts/images/scrollbottom.gif',68,12,'','',''];


// SAMPLE FUNCTION USED FOR RELATIVE POSITIONING
function s_getStart(e,y){
var o=s_iE?e.srcElement:e.target;if(!o)return 0;
if(s_nS4)return y?o.y:o.x;
var P=o.offsetParent,L=o.offsetLeft,T=o.offsetTop;
if(typeof L=="undefined"){L=o.parentNode.offsetLeft;T=o.parentNode.offsetTop};
while(P){L+=P.offsetLeft;T+=P.offsetTop;P=P.offsetParent};
return y?T:L;
} 

if(ROOT=='')
{
	s_The_Arrays_Source=ROOT+'s_arrays.js';// the source of the menu definitions
	s_Script_DOM_Source=ROOT+'s_script_dom.js';// the source of your script
	s_Script_NS4_Source=ROOT+'s_script_ns4.js';
	s_Script_OLD_Source=ROOT+'s_script_old.js';
	s_Any_Add_On_Source='';// if you need any add-on
}
else
{
	s_The_Arrays_Source=ROOT+'s_arrays_inside.js';// the source of the menu definitions
	s_Script_DOM_Source=ROOT+'s_script_dom.js';// the source of your script
	s_Script_NS4_Source=ROOT+'s_script_ns4.js';
	s_Script_OLD_Source=ROOT+'s_script_old.js';
	s_Any_Add_On_Source='';// if you need any add-on
}




// ===
s_x=document;s_ua=navigator.userAgent.toLowerCase();s_dl=s_x.getElementById?1:0;s_iE=s_x.all&&!window.innerWidth&&s_ua.indexOf("msie")!=-1?1:0;s_oP=s_ua.indexOf("opera")!=-1&&s_x.clear?1:0;s_oP7=s_oP&&s_x.appendChild?1:0;s_oP7m=s_oP&&!s_oP7?1:0;s_nS=s_dl&&!s_x.all&&s_ua.indexOf("opera")==-1?1:0;s_nS4=s_x.layers?1:0;s_kNv=s_ua.indexOf("konqueror")!=-1?parseFloat(s_ua.substring(s_ua.indexOf("konqueror/")+10)):0;s_kN=s_kNv>=2.2?1:0;s_kN3p=s_kNv>=3?1:0;s_kN31p=s_kNv>=3.1?1:0;s_kN32p=s_kNv>=3.2?1:0;s_mC=s_ua.indexOf("mac")!=-1?1:0;s_sF=s_mC&&s_ua.indexOf("safari")!=-1?1:0;s_eS=s_ua.indexOf("escape")!=-1?1:0;s_iE5M=s_mC&&s_iE&&s_dl&&!s_eS?1:0;s_iE4=!s_mC&&s_iE&&!s_dl?1:0;s_ct=0;var s_ML,s_AL;s_=[""];s_a="undefined";s_1=[];s_2=[];function s_add(a,b){s_ct++;s_[s_ct]=[];s_[s_ct][0]={IEF:a.S[17],B:a.S[3],BC:a.S[0],BCNS4:a.S[1],BW:a.S[2],PD:a.S[4],SC:a.S[27],SCT:a.S[28],SCB:a.S[29],SCW:a.S[30],SCH:a.S[31]};for(var k in a)s_[s_ct][0][k]=a[k];for(var i=0;i<b.length;i++){if(s_autoSELECTED){if(b[i].Show&&b[i].Show!=""){if(typeof s_1[b[i].Show]==s_a)s_1[b[i].Show]=[];s_1[b[i].Show][s_1[b[i].Show].length]=[s_ct,i+1]}var u,h,t;h=location.href;u=b[i].U;t=h.substring(h.length-u.length);if(t==u&&u!=""){s_2[s_2.length]=a.N;b[i].SELECTED=true;if(!s_autoSELECTEDItemsClickable)b[i].U=""}}s_[s_ct][i+1]={BgColor:b[i].SELECTED?a.S[24]:a.S[5],OverBgColor:a.S[6],FontColor:b[i].SELECTED?a.S[25]:a.S[7],OverFontColor:a.S[8],FontFamily:a.S[9],FontSize:a.S[10],FontSizeNS4:a.S[11],FontWeight:a.S[12],TextAlign:a.S[13],Padding:a.S[14],SeparatorSize:a.S[15],SeparatorColor:a.S[16],UseSubImg:a.S[18],SubImgSrc:b[i].SELECTED?a.S[26]:a.S[19],OverSubImgSrc:a.S[20],SubImgWidth:a.S[21],SubImgHeight:a.S[22],SubImgTop:a.S[23],Target:s_target,Class:b[i].SELECTED?a.S[34]:a.S[32],OverClass:b[i].SELECTED?a.S[34]:a.S[33],BorderColor:b[i].SELECTED?a.S[38]:a.S[36],OverBorderColor:a.S[37],BorderWidth:a.S[35]?a.S[35]:0,SeparatorSpacing:a.S[39]?a.S[39]:0,SeparatorBgImage:a.S[40]};for(var j in b[i])s_[s_ct][i+1][j]=b[i][j];if(b[i].BgImage){s_[s_ct][i+1].FS=new Image;s_[s_ct][i+1].FS.src=b[i].BgImage}if(b[i].OnBgImage){s_[s_ct][i+1].NS=new Image;s_[s_ct][i+1].NS.src=b[i].OnBgImage}if(b[i].Image){s_[s_ct][i+1].Fs=new Image;s_[s_ct][i+1].Fs.src=b[i].Image[0]}if(b[i].OnImage){s_[s_ct][i+1].Ns=new Image;s_[s_ct][i+1].Ns.src=b[i].OnImage}}};s_tm1="<script language=JavaScript1.2 src='"+s_The_Arrays_Source+"' type=text/javascript></script>";s_tm2="<script language=JavaScript1.2 src='"+(s_nS4?s_Script_NS4_Source:s_iE&&!s_dl||s_kN&&!s_kN3p||s_oP7m?s_Script_OLD_Source:s_Script_DOM_Source)+"' type=text/javascript></script>";s_tm3=s_Any_Add_On_Source!=""?"<script language=JavaScript1.2 src='"+s_Any_Add_On_Source+"' type=text/javascript></script>":"";if(s_iE||s_nS4||s_nS||s_oP){s_x.write(s_tm1);s_x.write(s_tm2);if(s_tm3!="")s_x.write(s_tm3)}if(s_kN)s_x.write(s_tm1+s_tm2+s_tm3);