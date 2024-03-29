/* SiteCatalyst code version: H.17.
Copyright 1997-2008 Omniture, Inc. More info available at
http://www.omniture.com */

//if (window.s_account == null) {
  //Omniture hasn't run yet; we can proceed.
var s_account="usnews"
var s=s_gi(s_account)
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="UTF-8"
/* Conversion Config */
s.currencyCode="USD"
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls"
s.linkInternalFilters="javascript:,usnews,usnewshealth.com,usnewsbesthealth.com,usnews-best-health.com,usnewsbest-health.com,myusnews-besthealth.com,usnews-health-center.com,usnewshealthcenter.com,usnewsbesthealthcentral.com,usnewsbesthealthonline.com,besthealth-usnews.com,best-health.usnews.com,besthealth.usnews.com,health.usnews.com,americasbesteducationschools.com,americasbestengineeringschools.com,americasbestgraduateschools.com,americasbesthealthplans.com,americasbesthighschools.com,americasbestlawschools.com,americasbestleaders.com,americasbestmedicalschools.com,usnews.com"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"


/********************Code Below pulled from USNews' old H.4 version**********/

s.dynamicAccountSelection=true;
s.dynamicAccountList="usnewsdev=stag.usnews,dev.usnews.com,www-stag.usnews.com,www-dev.usnews.com,sand1.usnews.com,sand2.usnews.com,sand3.usnews.com,sand4.usnews.com,ashapp1.usnews.com,ashapp7.usnews.com,health-pre.usnews.com";
s.currencyCode="USD";
s.visitorNamespace="usnews";
s.vmk="447B553B"
/* Plugin Config */
s.siteID="";
s.defaultPage="index.htm";
s.queryVarsList="";
s.pathExcludeDelim=";";
s.pathConcatDelim="/";

s.formList="";
s.trackFormList=true;
s.trackPageName=true;




s.useCommerce=true;
s.varUsed="eVar10";
s.eventList="event2,event3";

s.usePlugins=true;
function s_usn_doPlugins(s) {
	if(!s.pageType&&!s.pageName)
		s.pageName=s.getPageName();
	
	s.eVar1=s.pageName;
	if(!s.evar4&&window.location.hostname.indexOf('search.usnews')>-1){
		s.eVar4=s.getQueryParam('q');
		if(s.eVar4)
			s.eVar5="+1";
	}
	s.eVar2=s.channel;
	s.eVar3=s.prop1;

	if(!s.hier1)
		s.hier1=s.getPageName();
	
	// Remove "usnews/" from hier1
	if(s.hier1.indexOf("usnews/")==0)
		s.hier1=s.hier1.substring(7);
	if(s.hier1.indexOf("snews/")==0)
	  	s.hier1=s.hier1.substring(6);

	if(!s.campaign)
		s.campaign=s.getQueryParam('s_cid');
	if(!s.campaign)
		s.campaign=s.getQueryParam('sssdmh');

	s.campaign=s.getValOnce(s.campaign,'cmp',0);

	// always fire pageView event
	s.events=s.events?s.events+",event1":"event1";

	var url=s.linkHandler("Print Article~window.print");
	if(url){
		s.events="event8";
		s.eVar8=s.eVar1;
		s.linkTrackVars="eVar8,events";
		s.linkTrackEvents="event8";
	}
	url=s.linkHandler("Respond~document.emailform.submit");
	if(url){
		s.eVar11=s.eVar1;
		s.events="event11";
		s.linkTrackVars="eVar11,events";
		s.linkTrackEvents="event11";
	}
	s.linkHandler('www.usnewsuniversitydirectory.com','e');
	s.linkHandler('/usnews/digitalweekly/','d');
}
s.doPlugins=s_usn_doPlugins;

/*** PLUGINS SECTION ***/
/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/*
 * Plugin: linkHandler 0.5 - identify and report custom links
 */
s.linkHandler=new Function("p","t",""
+"var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
+"ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
+"substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
+"e=l=='[['?'':l;s.linkType=t;return h;}return '';");
s.p_gn=new Function("t","h",""
+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+"return 0;");
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

s.getPageName=new Function(""
+"var s=this,pn=(s.siteID&&(''+s.siteID).length>0)?''+s.siteID:"
+"'',l=location,dp=(s.defaultPage)?''+s.defaultPage:'',e="
+"(s.pathExcludeDelim)?s.pathExcludeDelim:'',cs=(s.pathConcatDelim)?"
+"s.pathConcatDelim:'',q=l.search.substring(1),"
+"p=l.pathname.substring(1),x=p.indexOf(e);p=((x<0)?p:p.substring(0,"
+"x)).split('/');for(j=0;j<p.length;j++){if(p[j].length>0){if(pn."
+"length>0)pn+=cs;pn+=p[j]}else{if(dp.length>0){if(pn.length>0)pn+="
+"cs;pn+=dp}}}if(q.length>0){if(s.queryVarsList){var qpa=new Array()"
+",qv=s.split(s.queryVarsList,','),qp=s.split(q,'&'),tmp,idx;for(i="
+"0;i<qp.length;i++){tmp=s.split(qp[i],'=');qpa[i]=tmp[0]}for(i=0;"
+"i<qv.length;i++){idx=s.ia(qpa,qv[i]);if(idx>=0){if(pn.length"
+">0)pn+=cs;pn+=qp[idx]}}}}return pn");
s.split=new Function("str","sep",""
+"var si=0,sa=new Array(),i;while((str.length>0)&&(sep.length>0)){"
+"i=str.indexOf(sep);if((!i)&&(sep!=str.substring(0,sep.length)))"
+"break;if(i==-1){sa[si++] = str;break;}sa[si++]=str.substring(0,i);"
+"str=str.substring(i+sep.length,str.length)}return sa");
s.ia=new Function("ar","v",""
+"for(var i=0;i<ar.length;i++){if(ar[i]==v)return i}return -1");

s.getQueryParam=new Function("qp","d",""
+"var s=this,v='',i,t;d=d?d:'';while(qp){i=qp.indexOf(',');i=i<0?qp.l"
+"ength:i;t=s.gcgi(qp.substring(0,i));if(t)v+=v?d+t:t;qp=qp.substring"
+"(i==qp.length?i:i+1)}return v");
s.gcgi=new Function("k",""
+"var v='',s=this;if(k&&s.wd.location.search){var q=s.wd.location.sea"
+"rch.toLowerCase(),qq=q.indexOf('?');q=qq<0?q:q.substring(qq+1);v=s."
+"pt(q,'&','cgif',k.toLowerCase())}return v");
s.cgif=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),sk=i<0?t:t.substring(0,i),sv=i<0?"
+"'True':t.substring(i+1);if(sk.toLowerCase()==k)return s.epa(sv)}ret"
+"urn ''");

s.setupFormAnalysis=new Function(""
+"var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s."
+"wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even"
+"tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''"
+",'','')}");
s.sendFormEvent=new Function("t","pn","fn","en",""
+"var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='"
+"s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");
s.faol=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd."
+"event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng"
+"th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name"
+";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);"
+"if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='"
+"No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element"
+"s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.on"
+"mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin"
+"g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd"
+"=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s"
+".wd.onunload;s.wd.onunload=s.fasl;}return r;");
s.faos=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v"
+"u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru"
+"e;");
s.fasl=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag"
+"eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path"
+"name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]="
+"'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]"
+"='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]"
+"!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV"
+"ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars="
+"ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt"
+"e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'"
+",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s"
+".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f."
+"vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;s.tl(true,'o','Form A"
+"nalysis');s[f.vu]='';s.usePlugins=up}return f.ul&&e!='e'&&e!='s'?f."
+"ul(e):true;");
s.fam=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas"
+"tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this."
+"form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e."
+"which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW"
+"N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM"
+"AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e"
+"n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1"
+"){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va["
+"1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s"
+"_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak"
+"d(e);");
s.ee=new Function("e","n",""
+"return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
s.fage=new Function("e","a",""
+"var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");

/*
 * Plugin: downloadLinkHandler 0.5 - identify and report download links
 */
s.downloadLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
+"ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
+"if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");


/********************Code Above pulled from USNews' old H.4 version**********/


/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="usnews"
s.dc=122

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="=fun@6(~){`Ks=^S~$h ~.substring(~.indexOf(~;@t~';`Bt`t~=new Fun@6(~.toLowerCase()~s_c_il['+s^sn+']~};s.~`m@t~.length~.toUpperCase~=new Object~s"
+".wd~','~){@t~')q='~.location~var ~s.pt(~dynamicAccount~link~s.apv~='+@y(~)@tx^m!Object$eObject.prototype$eObject.prototype[x])~);s.~Element~.getTime()~=new Array~ookieDomainPeriods~s.m_~referrer~.p"
+"rotocol~=new Date~BufferedRequests~}c$s(e){~visitor~;@X^js[k],255)}~=''~javaEnabled~conne@6^M~@0c_i~Name~:'')~onclick~}@t~else ~ternalFilters~javascript~s.dl~@Os.b.addBehavior(\"# default# ~=parseF"
+"loat(~'+tm.get~=='~cookie~s.rep(~s.^T~track~o@0oid~browser~.parent~window~colorDepth~String~while(~.host~.lastIndexOf('~s.sq~s.maxDelay~s.vl_g~r=s.m(f)?s[f](~for(~s.un~s.eo~&&s.~parseInt(~t=s.ot(o)"
+"~j='1.~#4URL~lugins~dynamicVariablePrefix~document~Type~Sampling~s.rc[un]~Download~Event~');~this~tfs~resolution~s.c_r(~s.c_w(~s.eh~s.isie~s.vl_l~s.vl_t~Height~t,h){t=t?t~tcf~isopera~ismac~escape(~"
+".href~screen.~s.fl(~Version~harCode~&&(~_'+~variableProvider~s.pe~)?'Y':'N'~:'';h=h?h~._i~e&&l$HSESSION'~f',~onload~name~home#4~objectID~}else{~.s_~s.rl[u~Width~s.ssl~o.type~Timeout(~ction~Lifetime"
+"~.mrq(\"'+un+'\")~sEnabled~;i++)~'){q='~&&l$HNONE'){~ExternalLinks~charSet~onerror~lnk~currencyCode~.src~s=s_gi(~etYear(~&&!~Opera~'s_~;try{~Math.~s.fsg~s.ns6~s.oun~InlineStats~Track~'0123456789~&&"
+"t~s[k]=~s.epa(~m._d~n=s.oid(o)~,'sqs',q);~LeaveQuery~')>=~'=')~)+'/~){n=~\",''),~vo)~s.sampled~=s.oh(o);~+(y<1900?~s.disable~ingServer~n]=~true~sess~campaign~lif~if(~'http~,100)~s.co(~x in ~s.ape~f"
+"fset~s.c_d~s.br~'&pe~s.gg(~s.gv(~s[mn]~s.qav~,'vo~s.pl~=(apn~Listener~\"s_gs(\")~vo._t~b.attach~d.create~=s.n.app~(''+~!='~'||t~'+n~s()+'~){p=~():''~a):f(~+1))~a['!'+t]~){v=s.n.~channel~un)~.target"
+"~o.value~g+\"_c\"]~\".tl(\")~etscape~(ns?ns:~s_')t=t~k',s.bc~omePage~s.d.get~')<~||!~[b](e);~m[t+1](~return~mobile~height~events~random~code~'MSIE ~rs,~un,~,pev~floor(~atch~s.num(~[\"s_\"+~s.c_gd~s"
+".dc~s.pg~,'lt~.inner~transa~;s.gl(~\"m_\"+n~idt='+~page~Group,~.fromC~sByTag~?'&~+';'~t&&~1);~){s.~[t]=~>=5)~[t](~=l[n];~!a[t])~~s._c=@Nc';`F=^1`5!`F`hn){`F`hl`U;`F`hn=0;}s^sl=`F`hl;s^sn=`F`hn;s^sl"
+"[s^s@os;`F`hn++;s.m`0m){`2$Gm)`4'{$d0`Afl`0x,l){`2x?$Gx)`30,l):x`Aco`0o`H!o)`2o;`Kn`E,x;^B@xo)@tx`4'select$d0&&x`4'filter$d0)n[x]=o[x];`2n`Anum`0x){x`e+x;^B`Kp=0;p<x`C;p++)@t(@V')`4x`3p,p$O<0)`20;`"
+"21`Arep=s_r;@y`0x`1,h=@VABCDEF',i,c=s.@E,n,l,e,y`e;c=c?c`D$M`5x){x`e+x`5c`tAUTO'^m'').c^lAt){^Bi=0;i<x`C@A{c=x`3i,i+#Bn=x.c^lAt(i)`5n>127){l=0;e`e;^4n||l<4){e=h`3n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+"
+"='%u'+e}`Bc`t+')y+='%2B';`my+=^gc)}x=y^zx=x?`v^g''+x),'+`G%2B'):x`5x&&c^Eem==1&&x`4'%u$d0&&x`4'%U$d0){i=x`4'%^R^4i>=0){i++`5h`38)`4x`3i,i+1)`D())>=0)`2x`30,i)+'u00'+x`3i);i=x`4'%',i)}}}}`2x`Aepa`0x"
+"`1;`2x?un^g`v''+x,'+`G ')):x`Apt`0x,d,f,a`1,t=x,z=0,y,r;^4t){y=t`4d);y=y<0?t`C:y;t=t`30,y);^At,$Nt,a)`5r)`2r;z+=y+d`C;t=x`3z,x`C);t=z<x`C?t:''}`2''`Aisf`0t,a){`Kc=a`4':')`5c>=0)a=a`30,c)`5t`30,2)`t"
+"$Z`32);`2(t!`e@W==a)`Afsf`0t,a`1`5`La,`G,'is^ut))@Q+=(@Q!`e?`G`j+t;`20`Afs`0x,f`1;@Q`e;`Lx,`G,'fs^uf);`2@Q`Ac_d`e;$vf`0t,a`1`5!$tt))`21;`20`Ac_gd`0`1,d=`F`J^5^w,n=s.fpC`V,p`5!n)n=s.c`V`5d@L$0@gn?^F"
+"n):2;n=n>2?n:2;p=d^6.')`5p>=0){^4p>=0&&n>1$Ld^6.',p-#Bn--}$0=p>0&&`Ld,'.`Gc_gd^u0)?d`3p):d}}`2$0`Ac_r`0k`1;k=@y(k);`Kc=' '+s.d.`u,i=c`4' '+k+@e,e=i<0?i:c`4';',i),v=i<0?'':@Yc`3i+2+k`C,e<0?c`C:e));`"
+"2v$H[[B]]'?v:''`Ac_w`0k,v,e`1,d=$v(),l=s.`u@7,t;v`e+v;l=l?$Gl)`D$M`5^t@Ct=(v!`e?^Fl?l:0):-60)`5t){e`Z;e.setTime(e`T+(t*1000))}`lk@Cs.d.`u=k+'`Pv!`e?v:'[[B]]')+'; path=/;'+(^t?' expires='+e.toGMT^3("
+")#9`j+(d?' domain='+d#9`j;`2^Vk)==v}`20`Aeh`0o,e,r,f`1,b='s^ne+'^ns^sn,n=-1,l,i,x`5!^Xl)^Xl`U;l=^Xl;^Bi=0;i<l`C&&n<0;i++`Hl[i].o==o&&l[i].e==e)n=i`ln<0@gi;l[n]`E}x#Gx.o=o;x.e=e;f=r?x.b:f`5r||f){x.b"
+"=r?0:o[e];x.o[e]=f`lx.b){x.o[b]=x.b;`2b}`20`Acet`0f,a,t,o,b`1,r,^d`5`O>=5^m!s.^e||`O>=7)){^d`7's`Gf`Ga`Gt`G`Ke,r@O^A$Na)`br=s.m(t)?s#Fe):t(e)}`2r^Rr=^d(s,f,a,t)^z@ts.^f^Eu`4$n4@d0)r=s.m(b)?s[b](a):"
+"b(a);else{^X(`F,'@F',0,o);^A$Na`Reh(`F,'@F',1)}}`2r`Ag^Tet`0e`1;`2`w`Ag^Toe`7'e`G`Ks=`9,c;^X(^1,\"@F\",1`Re^T=1;c=s.t()`5c)s.d.write(c`Re^T=0;`2@p'`Rg^Tfb`0a){`2^1`Ag^Tf`0w`1,p=w^0,l=w`J;`w=w`5p&&p"
+"`J!=l&&p`J^5==l^5){`w=p;`2s.g^Tf(`w)}`2`w`Ag^T`0`1`5!`w){`w=`F`5!s.e^T)`w=s.cet('g^T^u`w,'g^Tet',s.g^Toe,'g^Tfb')}`2`w`Amrq`0u`1,l=@1],n,r;@1]=0`5l)^Bn=0;n<l`C;n++){r#Gs.mr(0,0,r.r,0,r.t,r.u)}`Abr`"
+"0id,rs`1`5@m`a$e^W@Nbr',rs))$1l=rs`Aflush`a`0`1;s.fbr(0)`Afbr`0id`1,br=^V@Nbr')`5!br)br=$1l`5br`H!@m`a)^W@Nbr`G'`Rmr(0,0,br)}$1l=0`Amr`0@q,q,$oid,ta,u`1,dc=$w,t1=s.`x@n,t2=s.`x@nSecure,ns=s.`c`ispa"
+"ce,un=u?u:$Ys.f$S,unc=`v$p'_`G-'),r`E,l,imn=@Ni^n($S,im,b,e`5!rs){rs=@u'+(@3?'s'`j+'://'+(t1?(@3@W2?t2:t1):($Y(@3?'102':unc))+'.'+($w?$w:112)+'.2o7.net')@fb/ss/'+^C+'/'+(s.$i?'5.1':'1'@fH.17/'+@q+'"
+"?AQB=1&ndh=1'+(q?q`j+'&AQE=1'`5^Y@Ls.^f`H`O>5.5)rs=^j$o4095);`mrs=^j$o2047)`lid){$1(id,rs);$h}`ls.d.images&&`O>=3^m!s.^e||`O>=7)^m@R<0||`O>=6.1)`H!s.rc)s.rc`E`5!^O){^O=1`5!s.rl)s.rl`E;@1n]`U;set@5'"
+"@t^1`hl)^1.`9@8',750)^zl=@1n]`5l){r.t=ta;r.u=un;r.r=rs;l[l`C]=r;`2''}imn+='^n^O;^O++}im=`F[imn]`5!im)im=`F[im@onew Image;im@0l=0;im.^v`7'e`G^S@0l=1`5^1`hl)^1.`9@8^Rim@I=rs`5rs`4$2=@d0^m!ta||ta`t_se"
+"lf$Ia`t_top'||(`F.^w@Wa==`F.^w))){b=e`Z;^4!im@0l&&e`T-b`T<500)e`Z}`2''}`2'<im'+'g sr'+'c=\"'+rs+'\" width=1 $j=1 border=0 alt=\"\">'`Agg`0v`1`5!`F['s^nv])`F['s^nv]`e;`2`F['s^nv]`Aglf`0t,a`Ht`30,2)`"
+"t$Z`32);`Ks=^S,v=$3t)`5v)s#Dv`Agl`0v`1`5$x)`Lv,`G,'gl^u0)`Agv`0v`1;`2s['vpm^nv]?s['vpv^nv]:(s[v]?s[v]`j`Ahavf`0t,a`1,b=t`30,4),x=t`34),n=^Fx),k='g^nt,m='vpm^nt,q=t,v=s.`N@UVa$oe=s.`N@U^Qs,mn;@X$4t)"
+"`5s.@G||^D||^p`H^p^Epe`30,4)$H@G_'){mn=^p`30,1)`D()+^p`31)`5$5){v=$5.`xVars;e=$5.`x^Qs}}v=v?v+`G+^Z+`G+^Z2:''`5v@L`Lv,`G,'is^ut))s[k]`e`5t`t$k'&&e)@Xs.fs(s[k],e)}s[m]=0`5t`t^K`ID`6`cID`Ivid`6^I@Bg'"
+"`d`Bt`t`X@Br'`d`Bt`tvmk`Ivmt`6@E@Bce'`5s[k]&&s[k]`D()`tAUTO')@X'ISO8859-1';`Bs[k]^Eem==2)@X'UTF-8'}`Bt`t`c`ispace`Ins`6c`V`Icdp`6`u@7`Icl`6^o`Ivvp`6@H`Icc`6$R`Ich`6#0@6ID`Ixact`6@r`Iv0`6^U`Is`6^2`I"
+"c`6`o^k`Ij`6`f`Iv`6`u@9`Ik`6`z@2`Ibw`6`z^b`Ibh`6`g`Ict`6^x`Ihp`6p^J`Ip';`B$tx)`Hb`tprop`Ic$J;`Bb`teVar`Iv$J;`Bb`thier@Bh$J`d`ls[k]@W$H`N`i'@W$H`N^M')$6+='&'+q+'`Ps[k]);`2''`Ahav`0`1;$6`e;`L^a,`G,'h"
+"av^u0);`2$6`Alnf`0^c`8^r`8:'';`Kte=t`4@e`5t@We>0&&h`4t`3te$O>=0)`2t`30,te);`2''`Aln`0h`1,n=s.`N`is`5n)`2`Ln,`G,'ln^uh);`2''`Altdf`0^c`8^r`8:'';`Kqi=h`4'?^Rh=qi>=0?h`30,qi):h`5#Ah`3h`C-(t`C$O`t.'+t)"
+"`21;`20`Altef`0^c`8^r`8:''`5#Ah`4t)>=0)`21;`20`Alt`0h`1,lft=s.`N^PFile^Ms,lef=s.`NEx`n,@s=s.`NIn`n;@s=@s?@s:`F`J^5^w;h=h`8`5s.`x^PLinks&&lf#A`Llft,`G$yd^uh))`2'd'`5s.`x@D&&h`30,1)$H# '^mlef||@s)^m!"
+"lef||`Llef,`G$ye^uh))^m!@s$e`L@s,`G$ye^uh)))`2'e';`2''`Alc`7'e`G`Ks=`9,b=^X(^S,\"`k\"`R@G=@w^S`Rt(`R@G=0`5b)`2^S$f`2@p'`Rbc`7'e`G`Ks=`9,f,^d`5s.d^Ed.all^Ed.all.cppXYctnr)$h;^D=e@I`S?e@I`S:e$T;^d`7"
+"\"s\",\"`Ke@O@t^D^m^D.tag`i||^D^0`S||^D^0Node))s.t()`b}\");^d(s`Reo=0'`Roh`0o`1,l=`F`J,h=o^h?o^h:'',i,j,k,p;i=h`4':^Rj=h`4'?^Rk=h`4'/')`5h^mi<0||(j>=0&&i>j)||(k>=0&&i>k))$Lo`Y&&o`Y`C>1?o`Y:(l`Y?l`Y"
+"`j;i=l.path^w^6/^Rh=(p?p+'//'`j+(o^5?o^5:(l^5?l^5`j)+(h`30,1)$H/'?l.path^w`30,i<0?0:i@f'`j+h}`2h`Aot`0o){`Kt=o.tag`i;t=t@W`D?t`D$M`5t`tSHAPE')t`e`5t`Ht`tINPUT'&&@4&&@4`D)t=@4`D();`B!#Ao^h)t='A';}`2"
+"t`Aoid`0o`1,^G,p,c,n`e,x=0`5t@L`y$Lo`Y;c=o.`k`5o^h^mt`tA$I`tAREA')^m!c$ep||p`8`4'`o$d0))n@k`Bc@g`vs.rep(`vs.rep$Gc,\"\\r@h\"\\n@h\"\\t@h' `G^Rx=2}`B$U^mt`tINPUT$I`tSUBMIT')@g$U;x=3}`Bo@I@W`tIMAGE')"
+"n=o@I`5n){`y=^jn@v;`yt=x}}`2`y`Arqf`0t,un`1,e=t`4@e,u=e>=0?`G+t`30,e)+`G:'';`2u&&u`4`G+un+`G)>=0?@Yt`3e$O:''`Arq`0un`1,c=un`4`G),v=^V@Nsq'),q`e`5c<0)`2`Lv,'&`Grq^u$S;`2`L$p`G,'rq',0)`Asqp`0t,a`1,e="
+"t`4@e,q=e<0?'':@Yt`3e+1)`Rsqq[q]`e`5e>=0)`Lt`30,e),`G@b`20`Asqs`0$pq`1;^7u[u@oq;`20`Asq`0q`1,k=@Nsq',v=^Vk),x,c=0;^7q`E;^7u`E;^7q[q]`e;`Lv,'&`Gsqp',0);`L^C,`G@bv`e;^B@x^7u`Q)^7q[^7u[x]]+=(^7q[^7u[x"
+"]]?`G`j+x;^B@x^7q`Q&&^7q[x]^mx==q||c<2)){v+=(v#8'`j+^7q[x]+'`Px);c++}`2^Wk,v,0)`Awdl`7'e`G`Ks=`9,r=@p,b=^X(`F,\"^v\"),i,o,oc`5b)r=^S$f^Bi=0;i<s.d.`Ns`C@A{o=s.d.`Ns[i];oc=o.`k?\"\"+o.`k:\"\"`5(oc`4$"
+"B<0||oc`4\"@0oc(\")>=0)&&oc`4$W<0)^X(o,\"`k\",0,s.lc);}`2r^R`Fs`0`1`5`O>3^m!^Y$es.^f||`O#E`Hs.b^E$D^Q)s.$D^Q('`k',s.bc);`Bs.b^Eb.add^Q$A)s.b.add^Q$A('clic$a,false);`m^X(`F,'^v',0,`Fl)}`Avs`0x`1,v=s"
+".`c^N,g=s.`c^N#5k=@Nvsn^n^C+(g?'^ng`j,n=^Vk),e`Z,y=e.g@K);e.s@Ky+10@l1900:0))`5v){v*=100`5!n`H!^Wk,x,e))`20;n=x`ln%10000>v)`20}`21`Adyasmf`0t,m`H#Am&&m`4t)>=0)`21;`20`Adyasf`0t,m`1,i=t?t`4@e:-1,n,x"
+"`5i>=0&&m){`Kn=t`30,i),x=t`3i+1)`5`Lx,`G,'dyasm^um))`2n}`20`Auns`0`1,x=s.`MSele@6,l=s.`MList,m=s.`MM$s,n,i;^C=^C`8`5x&&l`H!m)m=`F`J^5`5!m.toLowerCase)m`e+m;l=l`8;m=m`8;n=`Ll,';`Gdyas^um)`5n)^C=n}i="
+"^C`4`G`Rfun=i<0?^C:^C`30,i)`Asa`0un`1;^C=un`5!@S)@S=un;`B(`G+@S+`G)`4$S<0)@S+=`G+un;^Cs()`Am_i`0n,a`1,m,f=n`30,1),r,l,i`5!`Wl)`Wl`E`5!`Wnl)`Wnl`U;m=`Wl[n]`5!a&&m&&m._e@Lm^s)`Wa(n)`5!m){m`E,m._c=@Nm"
+"';m^sn=`F`hn;m^sl=s^sl;m^sl[m^s@om;`F`hn++;m.s=s;m._n=n;m._l`U('_c`G_in`G_il`G_i`G_e`G_d`G_dl`Gs`Gn`G_r`G_g`G_g1`G_t`G_t1`G_x`G_x1`G_l'`Rm_l[@om;`Wnl[`Wnl`C]=n}`Bm._r@Lm._m){r=m._r;r._m=m;l=m._l;^B"
+"i=0;i<l`C@A@tm[l[i]])r[l[i]]=m[l[i]];r^sl[r^s@or;m=`Wl[@or`lf==f`D())s[@om;`2m`Am_a`7'n`Gg`G@t!g)g=#2;`Ks=`9,c=s[$V,m,x,f=0`5!c)c=`F$u$V`5c&&s_d)s[g]`7\"s\",s_ft(s_d(c)));x=s[g]`5!x)x=`F$ug];m=`Wi("
+"n,1)`5x){m^s=f=1`5(\"\"+x)`4\"fun@6\")>=0)x(s);`m`Wm(\"x\",n,x)}m=`Wi(n,1)`5@Zl)@Zl=@Z=0;`pt();`2f'`Rm_m`0t,n,d){t='^nt;`Ks=^S,i,x,m,f='^nt`5`Wl&&`Wnl)^Bi=0;i<`Wnl`C@A{x=`Wnl[i]`5!n||x==n){m=`Wi(x)"
+"`5m[t]`Ht`t_d')`21`5d)m#Fd);`mm#F)`lm[t+1]@Lm[f]`Hd)$gd);`m$g)}m[f]=1}}`20`AloadModule`0n,u,d,l`1,m,i=n`4':'),g=i<0?#2:n`3i+1),o=0,f,c=s.h?s.h:s.b,^d`5i>=0)n=n`30,i);m=`Wi(n)`5(l$e`Wa(n,g))&&u^Ed&&"
+"c^E$E`S`Hd){@Z=1;@Zl=1`l@3)u=`vu,@u:`Ghttps:^Rf`7'e`G`9.m_a(\"$J+'\",\"'+g+'\")^R^d`7's`Gf`Gu`Gc`G`Ke,o=0@Oo=s.$E`S(\"script\")`5o){@4=\"text/`o\"`5f)o.^v=f;o@I=u;c.appendChild(o)}`bo=0}`2o^Ro=^d(s"
+",f,u,c)}`mm=`Wi(n);m._e=1;`2m`Avo1`0t,a`Ha[t]||$P)^S#Da[t]`Avo2`0t,a`H#H{a#D^S[t]`5#H$P=1}`Adlt`7'`Ks=`9,d`Z,i,vo,f=0`5`pl)^Bi=0;i<`pl`C@A{vo=`pl[i]`5vo`H!`Wm(\"d\")||d`T-$C>=^8){`pl[i]=0;s.t(@i}`m"
+"f=1}`l`pi)clear@5`pi`Rdli=0`5f`H!`pi)`pi=set@5`pt,^8)}`m`pl=0'`Rdl`0vo`1,d`Z`5!@ivo`E;`L^9,`G$72',@i;$C=d`T`5!`pl)`pl`U;`pl[`pl`C]=vo`5!^8)^8=250;`pt()`At`0vo,id`1,trk=1,tm`Z,sed=Math&&@P$l?@P$r@P$"
+"l()*10000000000000):tm`T,@q='s'+@P$rtm`T/10800000)%10+sed,y=tm.g@K),vt=tm.getDate(@f`sMonth(@f'@ly+1900:y)+' `sHour$K:`sMinute$K:`sSecond$K `sDay()+' `sTimezoneO@z(),^d,^T=s.g^T(),ta`e,q`e,qs`e,$m`"
+"e,vb`E#1^9`Runs()`5!s.td){`Ktl=^T`J,a,o,i,x`e,c`e,v`e,p`e,bw`e,bh`e,^H0',k=^W@Ncc`G@p',0^q,hp`e,ct`e,pn=0,ps`5^3&&^3.prototype){^H1'`5j.m$s){^H2'`5tm.setUTCDate){^H3'`5^Y^E^f&&`O#E^H4'`5pn.toPrecis"
+"ion){^H5';a`U`5a.forEach){^H6';i=0;o`E;^d`7'o`G`Ke,i=0@Oi=new Iterator(o)`b}`2i^Ri=^d(o)`5i&&i.next)^H7'}}}}`l`O>=4)x=^iwidth+'x'+^i$j`5s.isns||s.^e`H`O>=3$Q`f(^q`5`O>=4){c=^ipixelDepth;bw=`F$z@2;b"
+"h=`F$z^b}}$8=s.n.p^J}`B^Y`H`O>=4$Q`f(^q;c=^i^2`5`O#E{bw=s.d.^L`S.o@z@2;bh=s.d.^L`S.o@z^b`5!s.^f^Eb){^d`7's`Gtl`G`Ke,hp=0`qh$b\");hp=s.b.isH$b(tl)?\"Y\":\"N\"`b}`2hp^Rhp=^d(s,tl);^d`7's`G`Ke,ct=0`qc"
+"lientCaps\");ct=s.b.`g`b}`2ct^Rct=^d(s)}}}`mr`e`l$8)^4pn<$8`C&&pn<30){ps=^j$8[pn].^w@v#9`5p`4ps)<0)p+=ps;pn++}s.^U=x;s.^2=c;s.`o^k=j;s.`f=v;s.`u@9=k;s.`z@2=bw;s.`z^b=bh;s.`g=ct;s.^x=hp;s.p^J=p;s.td"
+"=1`l@i{`L^9,`G$72',vb);`L^9,`G$71',@i`ls.useP^J)s.doP^J(s);`Kl=`F`J,r=^T.^L.`X`5!s.^I)s.^I=l^h?l^h:l`5!s.`X@Ls._1_`X#C`X=r;s._1_`X=1}`Wm('g')`5(vo&&$C)$e`Wm('d')`Hs.@G||^D){`Ko=^D?^D:s.@G`5!o)`2'';"
+"`Kp=$4'#4`i'),w=1,^G,@a,x=`yt,h,l,i,oc`5^D&&o==^D){^4o@Ln@W$HBODY'){o=o^0`S?o^0`S:o^0Node`5!o)`2'';^G;@a;x=`yt}oc=o.`k?''+o.`k:''`5(oc`4$B>=0&&oc`4\"@0oc(\")<0)||oc`4$W>=0)`2''}ta=n?o$T:1;h@ki=h`4'"
+"?^Rh=s.`N@c^3||i<0?h:h`30,i);l=s.`N`i?s.`N`i:s.ln(h);t=s.`N^M?s.`N^M`8:s.lt(h)`5t^mh||l))q+=$2=@G^n(t`td$I`te'?@y(t):'o')+(h?$2v1`Ph)`j+(l?$2v2`Pl)`j;`mtrk=0`5s.`x@T`H!p$L$4'^I^Rw=0}^G;i=o.sourceIn"
+"dex`5$3'^y')@g$3'^y^Rx=1;i=1`lp&&n@W)qs='&pid`P^jp,255))+(w#8p#3w`j+'&oid`P^jn@v)+(x#8o#3x`j+'&ot`Pt)+(i#8oi='+i`j}`l!trk@Lqs)`2'';@j=s.vs(sed)`5trk`H@j)$m=s.mr(@q,(vt#8t`Pvt)`j+s.hav()+q+(qs?qs:s."
+"rq(^C)),0,id,ta);qs`e;`Wm('t')`5s.p_r)s.p_r(`R`X`e}^7(qs);^z`p(@i;`l@i`L^9,`G$71',vb`R@G=^D=s.`N`i=s.`N^M=`F@0^y=s.ppu=^p=^pv1=^pv2=^pv3`e`5$x)`F@0@G=`F@0eo=`F@0`N`i=`F@0`N^M`e`5!id@Ls.tc#Ctc=1;s.f"
+"lush`a()}`2$m`Atl`0o,t,n,vo`1;s.@G=@wo`R`N^M=t;s.`N`i=n;s.t(@i}`5pg){`F@0co`0o){`K@J\"_\",1,#B`2@wo)`Awd@0gs`0$S{`K@J$p1,#B`2s.t()`Awd@0dc`0$S{`K@J$p#B`2s.t()}}@3=(`F`J`Y`8`4@us@d0`Rd=^L;s.b=s.d.bo"
+"dy`5$c`S#7`i#Ch=$c`S#7`i('HEAD')`5s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;@R=s.u`4'N$X6/^R`Kapn$F`i,v$F^k,ie=v`4$n'),o=s.u`4'@M '),i`5v`4'@M@d0||o>0)apn='@M';^Y$9`tMicrosoft Internet Explore"
+"r'`Risns$9`tN$X'`R^e$9`t@M'`R^f=(s.u`4'Mac@d0)`5o>0)`O`rs.u`3o+6));`Bie>0){`O=^Fi=v`3ie+5))`5`O>3)`O`ri)}`B@R>0)`O`rs.u`3@R+10));`m`O`rv`Rem=0`5^3#6^l){i=^g^3#6^l(256))`D(`Rem=(i`t%C4%80'?2:(i`t%U0"
+"100'?1:0))}s.sa(un`Rvl_l='^K,`cID,vmk,ppu,@E,`c`ispace,c`V,`u@7,#4`i,^I,`X,@H';^a=^Z+',^o,$R,server,#4^M,#0@6ID,purchaseID,@r,state,zip,$k,products,`N`i,`N^M';^B`Kn=1;n<51;n++)^a+=',prop$J+',eVar$J"
+"+',hier$J;^Z2=',^U,^2,`o^k,`f,`u@9,`z@2,`z^b,`g,^x,pe$q1$q2$q3,p^J';^a+=^Z2;^9=^a+',$i,`c^N,`c^N#5`MSele@6,`MList,`MM$s,`x^PLinks,`x@D,`x@T,`N@c^3,`N^PFile^Ms,`NEx`n,`NIn`n,`N@UVa$o`N@U^Qs,`N`is,@G"
+",eo';$x=pg#1^9)`5!ss)`Fs()",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(un){un=un.toLowerCase();if(l)for(i=0;i<l.length;i++){s=l[i];if(s._c=='s_c'){if(s.oun==un)return s;else if(s.fs&&s.sa&&s.fs(s.oun,un)){s.sa(un);return s}}}}
w.s_r=new Function("x","o","n","var i=x.indexOf(o);if(i>=0&&x.split)x=(x.split(o)).join(n);else while(i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o)}return x");
w.s_d=new Function("x","var t='`^@$#',l='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',d,n=0,b,k,w,i=x.lastIndexOf('~~');if(i>0){d=x.substring(0,i);x=x.substring(i+2);while(d){w=d;i"
+"=d.indexOf('~');if(i>0){w=d.substring(0,i);d=d.substring(i+1)}else d='';b=(n-n%62)/62;k=n-b*62;k=t.substring(b,b+1)+l.substring(k,k+1);x=s_r(x,k,w);n++}for(i=0;i<5;i++){w=t.substring(i,i+1);x=s_r(x"
+",w+' ',w)}}return x");
w.s_fe=new Function("c","return s_r(s_r(s_r(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){w.s_c=new Function("un","pg","ss","var s=this;"+c);return new s_c(un,pg,ss)}else s=new Function("un","pg","ss","var s=new Object;"+s_ft(c)+";return s");return s(un,pg,ss)}

/* SiteCatalyst code version: H.17.
Copyright 1997-2008 Omniture, Inc. More info available at
http://www.omniture.com */
 
/* You may give each page an identifying name, server, and channel on
the next lines. */
var source;
var metas = document.getElementsByTagName('META');
for (var i = 0; i < metas.length; i++) {
    if (metas[i].name === "keywords") {
        s.prop2 = metas[i].content;
    }

    if (metas[i].name === "source") {
        source = metas[i].content;
    }
    else {
        source = "Uncategorized";
  }
}
if (metas.length === 0) {
    source = "Uncategorized";
}
/*  USN Code                                              */
//initialize some default values
//phase I variables
    s.channel = USN.site + '/' + USN.zone;
    s.channel = s.channel.replace(/-/g,'');

//Choose report suites
s.dynamicAccountMatch=window.location.host+window.location.pathname;
function isDevServer() {
     var usnHostMatch = window.location.host;
     if (usnHostMatch.indexOf("dev") > -1 || usnHostMatch.indexOf("stag") > -1 || usnHostMatch.indexOf("sandb") > -1) {
               return true;
     } else{
               return false;
    }
}
function isBiskContent() {
       //if (s.channel.indexOf("Education") == 0 || s.channel.indexOf("College") == 0 || s.channel.indexOf("Grad") == 0 || s.channel.indexOf("Money: Career Center") == 0)  {
	var path = window.location.pathname;
       if (s.channel.indexOf("College") == 0 || s.channel.indexOf("Grad") == 0 || s.channel.indexOf("Premium College") == 0 || s.channel.indexOf("Premium Grad") == 0)  {
		if (path.indexOf("blogs") > -1 || path.indexOf("articles/education") > -1 || path.indexOf("multimedia") > -1 || path.indexOf("features") > -1) {
			return false;
		}else{
			return true;
		}
	}
	if (path.indexOf("online-education") > -1) {
	    return true;		
	} else {
            return false;
        }
}
if (isDevServer()) {
        if (isBiskContent()) {
             s.dynamicAccountList="usnewsdev,usnewsbiskdev="+s.dynamicAccountMatch;
        }
} else {
//    --this remains commented until we go live ---
        if (isBiskContent()) {
             s.dynamicAccountList="usnews,usnewsbisklive="+s.dynamicAccountMatch;
        }
}
//end choose report suites

s.prop1 = USN.site+":"+USN.zone;

//get and assign the page number to s.prop3
var path = document.location.pathname;
var dirsArr = path.split("/");

if (path.indexOf("articles") > -1 || path.indexOf("archives") > -1 || path.indexOf("rankings/tour") > -1) {
	var fname = path.substring(path.lastIndexOf("/"));
	var fnameregex = /.*\_([0-9]{1,2})\.(php|htm)$/;
	if (fname.match(fnameregex)) {
		s.prop3 = RegExp.$1;
	}else{
		s.prop3 = 1;
	}
}

if (path.indexOf('info') != -1 && document.location.search.indexOf('thanks') != -1) {
   s.prop5='SFL:'+window.document.referrer;
}
//populate non-usnews sites' hierarchy
if(window.location.hostname.indexOf("usnews.com") == -1) {
	s.hier1 = "nonusnews/" + s.channel;	
	//set vars if we're on palmcoast
	if(window.location.hostname.indexOf("palmcoastd.com") != -1) {
		//...document/Specialconf = subscription start/end
		//...drenew/DRenewInsert = gift start/end
		if (source == "none") {
			source = "palmcoastd";
		}
		var fname = path.substring(path.lastIndexOf("/"));
		if (fname == 'document') {
			s.events = 'event13';
		}else if (fname == 'Specialconf') {
			s.events = 'event14';
		}else if (fname == 'drenew') {
			s.events = 'event15';
		}else if (fname == 'DRenewInsert') {
			s.events = 'event16';
		}
	}
}else{
	//hardcode level1 hierarchy
	level1 = new Array('edu','health','home.htm','index.htm','news','biztech','search','rankguide','opinion','politics','photo','issue','dynamic');
	var isLevel1 = false;
	for (i=0;i<level1.length;i++) {
		//clean up folders
		if (dirsArr[2] == level1[i] && dirsArr[1] == "usnews") {
			isLevel1 = true;
			i = level1.length;
		}
	}
	if (!isLevel1) {
		//s.hier1 = "miscellaneous/" + s.channel;
		if(!s.hier1)
			s.hier1=s.getPageName();
		if(s.hier1.indexOf("usnews/")==0)
			s.hier1=s.hier1.substring(7);
		if(s.hier1.indexOf("/usnews/")==0)
			s.hier1=s.hier1.substring(8);
		s.hier1 = "miscellaneous/" + s.hier1;

	}
}
s.prop6 = source;

//This stuff is left over from the demo implementation.  
s.pageName=window.location.pathname;
s.server="";
//s.channel="";
s.pageType="";
/*s.prop1=""*/
/* E-commerce Variables */

if (typeof( window[ 'sEvents' ] ) != "undefined") {
	s.events=sEvents;
}
if (typeof( window[ 'sProducts' ] ) != "undefined") {
	s.products=sProducts;
}
if (typeof( window[ 'sEvar7' ] ) != "undefined") {
	s.eVar7=sEvar7;
}
if (typeof( window[ 'sEvar8' ] ) != "undefined") {
	s.eVar8=sEvar8;
}

s.campaign=""
s.state=""
s.zip=""
s.purchaseID=""
s.eVar1=""


/**** This section is a new test for assigning the PageName var to searches ***/
var pn = 'College';
var usepn=0;
if (path.indexOf("+") > -1) {
if (path.indexOf("search") > -1) {
if (path.indexOf("college") > -1 || path.indexOf("grad") > -1) {  //I think this is invalid for 2010 grad
	if (path.indexOf("grad") > -1) {
		pn = 'Grad';
	}
	usepn=1;
}
} // college and grad cases covered
if (path.indexOf("/directories/") > -1) {
	pn=path.substr(path.indexOf("/directories/")+13);
	pn=pn.substr(0,pn.indexOf("/"));
	usepn=1;
} // other data projects
if (usepn==1) {
        for (i=2;i<=dirsArr.length;i++) {
	if (dirsArr[i]) {
               	if (dirsArr[i].indexOf('+') > -1) {
			var keyAndVal = dirsArr[i].split('+'); 
			pn+="-"+keyAndVal[0];
		}else{
			pn+="-"+dirsArr[i];
		}
	}
	}
	s.pageName = pn;
}
}
//don't even count search or compare parameters in 2010 grad.
if (path.indexOf("best-graduate-schools") > -1 && path.indexOf("/rankings/") > -1) {
        s.pageName = path.substr(0,path.indexOf("/rankings/")+10);
}
if ((path.indexOf("best-graduate-schools") > -1 || path.indexOf("college") > -1) && path.indexOf("compare") > -1) {
        s.pageName = path.substr(0,path.indexOf("/compare/")+9);
}
//don't even count search parameters in Best Places or best-hospitals.
if (path.indexOf("best-") > -1 && path.indexOf("search") > -1) {
        s.pageName = path.substr(0,path.indexOf("search")+6);
}
if (path.indexOf("best-hospitals") > -1 && path.indexOf("-hospital-rankings") > -1) {
        s.pageName = path.substr(0,path.indexOf("-hospital-rankings")+18);
}

//Compress Careers to save page count
if (path.indexOf("all-jobs") > -1) {
	var shortpath = path;
	//remove patterns
	var pat = /\/l\-[^\/]+/g;
	shortpath = shortpath.replace(pat,'');
	pat = /\/pn\-[0-9]+/g;
	shortpath = shortpath.replace(pat,'');
	pat = /\/mi\-[0-9]+/g;
	shortpath = shortpath.replace(pat,'');
	pat = /\/o\-[0-9]+/g;
	shortpath = shortpath.replace(pat,'');
	pat = /\/$/;
	shortpath = shortpath.replace(pat,'');
	s.pageName = shortpath;
}
//compress adamcontent
if (path.indexOf("adamcontent") > -1) {
	var shortpath = path;
	//remove patterns
	var pat = /\/[0-9]+$/g;
	shortpath = shortpath.replace(pat,'');
	s.pageName = shortpath;
}
//compress blogs
if (path.indexOf("/blogs/") > -1) {
	var shortpath = path;
	var pat = /\/[0-9]+$/g;
	shortpath = shortpath.replace(pat,'');
	s.pageName = shortpath;
}
//compress articles 
if (path.indexOf("/articles/") > -1) {
	var shortpath = path;
	var pat = /\/[0-9]+$/g;
	shortpath = shortpath.replace(pat,'');
	pat = /\/comments\//g;
	shortpath = shortpath.replace(pat,'');
	pat = /\/$/;
	shortpath = shortpath.replace(pat,'');
	pat = /\.html$/;
	shortpath = shortpath.replace(pat,'');
	pat = /\_[0-9]+\.htm$/;
	shortpath = shortpath.replace(pat,'');
	s.pageName = shortpath;
}



//compress photo galleries
if (path.indexOf("gallery.php") > -1) {
	nextslash=path.indexOf('/',path.indexOf("gallery.php")+14);
	s.pageName=path.substr(0,nextslash);
}
if (path.indexOf("/photos/") > -1) {
        nextslash=path.indexOf('/',path.indexOf("/photos/")+10);
        s.pageName=path.substr(0,nextslash);
}

//set page type for error reporting
if (s.prop1 == "404:Error") {
	s.pageType = "errorPage";
	s.pageName = '';
}
/*** end PageName assignment test ***/

$("meta").each(function () {
    if ($(this).attr("name") == 'usn-content-type') {
        s.prop10 = $(this).attr("content");
    }
});

/* check anchor for Healthination -- JQUERY-specific */

$(function() {
    $("a").each(function () {
        $(this).click(function() {
            if (this.href && this.href.indexOf('video.healthination.com') >= 0) {
                s.eVar21 = this.href.substring(this.href.lastIndexOf('/')+1,this.href.lastIndexOf('.'));
                s.linkTrackVars="eVar21";
            }
        });
    });
    $("a.usnud").each(function() {
        $(this).click(function () {
        	var s=s_gi('usnews');
        	s.linkTrackVars='None';
        	s.linkTrackEvents='None';
		var dest = a.href.substring(a.href.indexOf('.com/')+5,a.href.lastIndexOf('.'));
		var src = (location.pathname.indexOf('best-graduate-schools') != -1) ? 'grad' :
				(location.pathname.indexOf('best-colleges') != -1) ? 'college' :
				(location.pathname.indexOf('online-education') != -1) ? 'online-ed' : 'other';
        	s.tl(a,'o','USNUD: ' + dest + ': ' + src);            
        });
    });
    $("a.usnudw-submitButton").each(function() {
        $(this).click(function () {
        	var s=s_gi('usnews');
        	s.linkTrackVars='None';
        	s.linkTrackEvents='None';
		var src = (location.pathname.indexOf('best-graduate-schools') != -1) ? 'grad' :
				(location.pathname.indexOf('best-colleges') != -1) ? 'college' :
				(location.pathname.indexOf('online-education') != -1) ? 'online-ed' : 'other';
		s.tl(a,'o','USNUD: Concierge: ' + src);    
        });
    });
});

/************* DO NOT ALTER THE FOLLOWING LINE ! **************/
var s_code=s.t();if(s_code)document.write(s_code);

//} /* END if (window.s_account == null) { */

/************* Google Analytics **************/

/* Google Analytics code version: .4
 * Based on instructions from Carson Smith.
 * OO-based implementation ideas by Doug Lay.
 * substringByDelimiter() by Adam Hutton.
 * More info available at
 * http://www.google.com/support/googleanalytics/bin/static.py?hl=en&page=guide.cs&topic=19783&answer=55488 */

function substringByDelimiter(stringVal, delim, start, stop) {
  /* takes string, returns string */
  if (!start || isNaN(start)) {start = 0;}
  if (!stop || isNaN(stop)) {stop = 0;}
  if (stringVal.indexOf(delim) != -1) {
    var myArr = stringVal.split(delim);
    var myArr2 = [];
    for (i = start; i <= stop; i++) {
      myArr2.push(myArr[i]);
    }
    return myArr2.join(delim);
  }
  return stringVal;
}

function TrackerCode() {
  /* defaults; arguments to get/set functions in GA tracker code */
  this.trackerID = null;
  this.allowHash = 'false';
  this.domainName = 'none';
  this.allowLinker = 'true';
  this.trackPageView = '';
  this.USN_Site = 'Uncategorized';
  this.USN_Zone = 'Uncategorized';
  this.USN_Subdomain = 'sitewide';
}

TrackerCode.prototype.writeTrackerCode = function() {
  /* substitutes values into boilerplate, writes out code */
  if (this.trackerID !== null) {
    // defer='defer' is necessary to tell IE to process this script after ga.js has loaded.
    var bp  = "%3Cscript type='text/javascript' defer='defer'%3E";
        bp += "  try {";
        bp += "  var {{accountID}} = _gat._getTracker('{{trackerID}}');";
        bp += "  {{accountID}}._setAllowHash({{allowHash}});";
        bp += "  {{accountID}}._setDomainName('{{domainName}}');";
        bp += "  {{accountID}}._setAllowLinker({{allowLinker}});";
        bp += "  {{accountID}}._setCustomVar(1, 'Site', '{{USN_Site}}', 3);";
        bp += "  {{accountID}}._setCustomVar(2, 'Zone', '{{USN_Zone}}', 3);";
        bp += "  {{accountID}}._setCustomVar(3, 'Subdomain', '{{USN_Subdomain}}', 3);";
        bp += "  {{accountID}}._trackPageview({{trackPageView}});";
        bp += "  {{accountID}}._trackPageLoadTime();";
        bp += "  } catch(err) {";
        bp += "  window.myError = err;";
        bp += "  }";
        bp += "%3C/script%3E";

    bp = bp.replace(/\{\{accountID\}\}/g, 'myTracker');
    bp = bp.replace('{{trackerID}}', String(this.trackerID));
    bp = bp.replace('{{allowHash}}', String(this.allowHash));
    bp = bp.replace('{{domainName}}', String(this.domainName));
    bp = bp.replace('{{allowLinker}}', String(this.allowLinker));
    bp = bp.replace('{{trackPageView}}', (this.trackPageView !== '') ? "'" + String(this.trackPageView) + "'" : '');
    bp = bp.replace('{{USN_Site}}', String(this.USN_Site));
    bp = bp.replace('{{USN_Zone}}', String(this.USN_Zone));
    bp = bp.replace('{{USN_Subdomain}}', String(this.USN_Subdomain));

    document.write(unescape(bp));
  } else {
    document.write(unescape("%3C!--no trackerID --%3E"));
  }
};



if (window.gaCalled == null) {
  // Analytics hasn't run yet; we can proceed.
  window.gaCalled = true;

  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
  eval(document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")));

  var USNhostname = location.hostname;

  switch(USNhostname)
  {
  case ('jobs.usnews.com'):
    var firstAccount = new TrackerCode();
    firstAccount.trackerID = 'UA-8279968-1';
    firstAccount.trackPageView = '/careers/jobsearch';
    firstAccount.writeTrackerCode();
    var secondAccount = new TrackerCode();
    secondAccount.trackerID = 'UA-8279968-2';
    secondAccount.trackPageView = '/careers/jobsearch';
    secondAccount.writeTrackerCode();
    var thirdAccount = new TrackerCode();
    thirdAccount.trackerID = 'UA-8279968-3';
    thirdAccount.trackPageView = '/careers/jobsearch';
    thirdAccount.writeTrackerCode();
    break;
  case ('www.bestlawyers.com'):
    // Load best lawyers tracker.
    break;
  default: // Assume hostname == *.usnews.com.
    /* firstAccount loads on every page */
    var firstAccount = new TrackerCode();
    firstAccount.trackerID = 'UA-8279968-1';

    if (window.USN !== undefined) {
      // We're using USN.js
      firstAccount.USN_Site = (USN.site !== undefined) ? USN.site : 'Uncategorized';
      firstAccount.USN_Zone = (USN.zone !== undefined) ? USN.zone : 'Uncategorized';
    } else {
      // We're supporting a legacy page
      firstAccount.USN_Site = (document.getElementsByName('site')[0] !== undefined) ? document.getElementsByName('site')[0].content : 'Uncategorized';
      firstAccount.USN_Zone = (document.getElementsByName('zone')[0] !== undefined) ? document.getElementsByName('zone')[0].content : 'Uncategorized';
    }

    var USNsubdomain = location.hostname.split('.')[0];
    switch(USNsubdomain)
    {
    case ('politics'):
      firstAccount.USN_Subdomain = 'politics';
      break;
    case ('money'):
      firstAccount.USN_Subdomain = 'money';
      break;
    case ('health'):
      firstAccount.USN_Subdomain = 'health';
      break;
    case ('search'):
      firstAccount.USN_Subdomain = 'search';
      break;
    case ('colleges'):
      firstAccount.USN_Subdomain = 'colleges';
      break;
    case ('grad-schools'):
      firstAccount.USN_Subdomain = 'grad-schools';
      break;
    default:
      firstAccount.USN_Subdomain = 'sitewide';
    } /* END switch(USNsubdomain) */

    firstAccount.writeTrackerCode();

  } /* END switch(USNhostname) */
} /* END if (window.gaCalled == null) */

/************* Nielsen Online SiteCensus V6.0 **************/
var _nielsen = '%3Cscript type="text/javascript"%3E';
_nielsen += '(function () {';
_nielsen += 'var d = new Image(1, 1);';
_nielsen += 'd.onerror = d.onload = function () {';
_nielsen += 'd.onerror = d.onload = null;};';
_nielsen += 'd.src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=us-503850h&cg=0&cc=1&si=", escape(window.location.href), "&rp=", escape(document.referrer), "&ts=compact&rnd=", (new Date()).getTime()].join(\'\');})();';
_nielsen += '%3C/script%3E';
document.write(unescape(_nielsen));

//rubicon tracking 
var rub = "%3Cscript type='text/javascript' defer='defer' src='http://tap-cdn.rubiconproject.com/partner/scripts/rubicon/alice.js?pc=7715/12318&autorun=true'%3E%3C/script%3E";
document.write(unescape(rub));

/************* Quantcast **************/

_qoptions={ qacct:"p-efoP1AkkGV9EU" };
var _quant = '%3Cscript type="text/javascript" src="http://edge.quantserve.com/quant.js"%3E%3C/script%3E';
document.write(unescape(_quant));
