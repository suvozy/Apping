var profile_area = null;
var section_title = null;
var profile_filter = null;
var search_name = null;
var name_altered = false;
var search_go = null;
var callouts_fx = new Array();
var current_callout_index = -1;
var profile_cells = new Array();
var focus_profile = null;
var department_index = { 1 : 'Applied Physics', 2 : 'Biomedical Engineering', 3 : 'Chemical &amp; Environmental Engineering', 4 : 'Electrical Engineering', 5 : 'Environmental Engineering', 6 : 'Mechanical Engineering &amp; Materials Science' };
var faculty_page_index = { 1 : 'faculty-physics.php', 2 : 'faculty-biomedical.php', 3 : 'faculty-chemical.php', 4 : 'faculty-electrical.php', 5 : 'faculty-environmental.php', 6 : 'faculty-mechanical.php' };
var highestIndex = 50;
var profile_mode = false;
var layer_fader = null;
var view_mode = 'grid';
var c = false;

if(typeof IE6=="undefined"){var IE6=false;}
if(typeof com=="undefined"){var com={}}if(typeof com.asual=="undefined"){com.asual={}}if(typeof com.asual.util=="undefined"){com.asual.util={}}com.asual.util.Browser=new function(){var J=-1;var I=navigator.userAgent;var H=false,F=false,E=false,D=false,C=false,B=false,A=false;var G=function(L,K){return parseFloat(I.substr(I.indexOf(L)+K))};if(H=/MSIE/.test(I)){J=G("MSIE",4)}if(E=/AppleWebKit/.test(I)){J=G("Safari",7)}if(D=/Opera/.test(I)){J=parseFloat(navigator.appVersion)}if(F=/Camino/.test(I)){J=G("Camino",7)}if(C=/Firefox/.test(I)){J=G("Firefox",8)}if(B=/Netscape/.test(I)){J=G("Netscape",9)}if(A=/Mozilla/.test(I)&&/rv:/.test(I)){J=G("rv:",3)}this.getVersion=function(){return J};this.isIE=function(){return H};this.isSafari=function(){return E};this.isOpera=function(){return D};this.isCamino=function(){return F};this.isFirefox=function(){return C};this.isNetscape=function(){return B};this.isMozilla=function(){return A}};com.asual.util.Events=new function(){var B=[];var A=com.asual.util.Browser;var D="DOMContentLoaded";if(A.isIE()||A.isSafari()){(function(){try{if(A.isIE()||!/loaded|complete/.test(document.readyState)){document.documentElement.doScroll("left")}}catch(F){return setTimeout(arguments.callee,0)}for(var E=0,F;F=B[E];E++){if(F.t==D){F.l.call(null)}}})()}this.addListener=function(G,F,E){B.push({o:G,t:F,l:E});if(!(F==D&&(A.isIE()||A.isSafari()))){if(G.addEventListener){G.addEventListener(F,E,false)}else{if(G.attachEvent){G.attachEvent("on"+F,E)}}}};this.removeListener=function(I,G,E){for(var F=0,H;H=B[F];F++){if(H.o==I&&H.t==G&&H.l==E){B.splice(F,1);break}}if(!(G==D&&(A.isIE()||A.isSafari()))){if(I.removeEventListener){I.removeEventListener(G,E,false)}else{if(I.detachEvent){I.detachEvent("on"+G,E)}}}};var C=function(){for(var F=0,E;E=B[F];F++){if(E.t!=D){com.asual.util.Events.removeListener(E.o,E.t,E.l)}}};this.addListener(window,"unload",C)};SWFAddressEvent=function(C){this.toString=function(){return"[object SWFAddressEvent]"};this.type=C;this.target=[SWFAddress][0];this.value=SWFAddress.getValue();this.path=SWFAddress.getPath();this.pathNames=SWFAddress.getPathNames();this.parameters={};var B=SWFAddress.getParameterNames();for(var D=0,A=B.length;D<A;D++){this.parameters[B[D]]=SWFAddress.getParameter(B[D])}this.parametersNames=B};SWFAddressEvent.INIT="init";SWFAddressEvent.CHANGE="change";SWFAddress=new function(){var _21=com.asual.util.Browser;var _22=com.asual.util.Events;var _23=_21.getVersion();var _24=false;if(_21.isIE()){_24=_23>=6}if(_21.isSafari()){_24=_23>=312}if(_21.isOpera()){_24=_23>=9.02}if(_21.isCamino()){_24=_23>=1}if(_21.isFirefox()){_24=_23>=1}if(_21.isNetscape()){_24=_23>=8}if(_21.isMozilla()){_24=_23>=1.8}var _t=top;var _d=_t.document;var _h=_t.history;var _l=_t.location;var _st=setTimeout;var _2a="function";var _2b="undefined";var _2c="swfaddress";var _2d,_2e,_2f;var _30=_d.title;var _31=_h.length;var _32=false;var _33={};var _34=[];var _35=[];var _36={};_36.history=true;_36.html=false;_36.strict=true;_36.tracker="_trackDefault";if((!_24&&_l.href.indexOf("#")!=-1)||(_21.isSafari()&&_23<412&&_l.href.indexOf("#")!=-1&&_l.search!="")){_d.open();_d.write('<html><head><meta http-equiv="refresh" content="0;url='+_l.href.substr(0,_l.href.indexOf("#"))+'" /></head></html>');_d.close()}var _37=function(){var _38=_l.href.indexOf("#");if(_38!=-1){var _39=unescape(_l.href.substr(_38+1));if(/^[a-z0-9 ,=_&\-\.\?\+\/]*$/i.test(_39)){return _39}else{_l.replace(_l.href.substr(0,_38))}}return""};var _3a=_37();var _3b=function(_3c,_3d){if(_36.strict){_3c=_3d?(_3c.substr(0,1)!="/"?"/"+_3c:_3c):(_3c==""?"/":_3c)}return _3c};var _3e=function(_3f){return(_21.isIE()&&_l.protocol=="file:")?_3a.replace(/\?/,"%3F"):_3f};var _40=function(el){if(el.src&&/swfaddress\.js(\?.*)?$/.test(el.src)){return el}for(var i=0,l=el.childNodes.length,s;i<l;i++){if(s=_40(el.childNodes[i])){return s}}};var _45=function(){if(_21.isIE()&&_d.title!=_30){SWFAddress.setTitle(_30)}};var _46=function(){if(!_32){var _47=_37();if(_21.isIE()){if(_3a!=_47){if(_23<7){_l.reload()}else{SWFAddress.setValue(_47)}}}else{if(_21.isSafari()&&_23<523){if(_31!=_h.length){_31=_h.length;if(typeof _34[_31-1]!=_2b){_3a=_34[_31-1]}_48()}}else{if(_3a!=_47){_3a=_47;_48()}}}_45()}};var _49=function(_4a){if(SWFAddress.hasEventListener(_4a)){SWFAddress.dispatchEvent(new SWFAddressEvent(_4a))}_4a=_4a.substr(0,1).toUpperCase()+_4a.substr(1);if(typeof SWFAddress["on"+_4a]==_2a){SWFAddress["on"+_4a]()}};var _4b=function(){_49("init")};var _4c=function(){_49("change")};var _4d=function(){for(var i=0,id,_50=SWFAddress.getValue(),_51="setSWFAddressValue";id=_35[i];i++){var obj=document.getElementById(id);if(obj){if(obj.parentNode&&typeof obj.parentNode.so!=_2b){obj.parentNode.so.call(_51,_50)}else{if(!(obj&&typeof obj[_51]!=_2b)){var _53=obj.getElementsByTagName("object");var _54=obj.getElementsByTagName("embed");obj=((_53[0]&&typeof _53[0][_51]!=_2b)?_53:((_54[0]&&typeof _54[0][_51]!=_2b)?_54[0]:null))}if(obj){obj[_51](_50)}}}else{if(obj=document[id]){if(typeof obj[_51]!=_2b){obj[_51](_50)}}}}};var _48=function(){_4d();_4c();_st(_55,10)};var _56=function(_57){if(typeof urchinTracker==_2a){urchinTracker(_57)}if(typeof pageTracker!=_2b&&typeof pageTracker._trackPageview==_2a){pageTracker._trackPageview(_57)}};eval("var _trackDefault = "+_56+";");var _55=function(){if(typeof _36.tracker!=_2b&&eval("typeof "+_36.tracker+' != "'+_2b+'"')){var fn=eval(_36.tracker);if(typeof fn==_2a){fn((_l.pathname+(/\/$/.test(_l.pathname)?"":"/")+SWFAddress.getValue()).replace(/\/\//,"/").replace(/^\/$/,""))}}};var _59=function(){var doc=_2d.contentWindow.document;doc.open();doc.write("<script>var "+_2c+' = "'+_37()+'";<\/script>');doc.close()};var _5b=function(){var win=_2d.contentWindow;if(_36.html){var src=win.location.href;_3a=(src.indexOf("?")>-1)?src.substr(src.indexOf("?")+1):""}else{_3a=(typeof win[_2c]!=_2b)?win[_2c]:""}win.document.title=_d.title;if(_3a!=_37()){_48();_l.hash=_3e(_3a)}};var _5e=function(){var _5f='id="'+_2c+'" style="position:absolute;top:-9999px;"';if(_21.isIE()){document.body.appendChild(document.createElement("div")).innerHTML="<iframe "+_5f+' src="'+(_36.html?_2f.replace(/\.js(\?.*)?$/,".html")+"?"+_37():"javascript:false;")+'" width="0" height="0"></iframe>';_2d=document.getElementById(_2c);_st(function(){_22.addListener(_2d,"load",_5b);if(!_36.html&&typeof _2d.contentWindow[_2c]==_2b){_59()}},10)}else{if(_21.isSafari()){if(_23<412){document.body.innerHTML+="<form "+_5f+' method="get"></form>';_2e=document.getElementById(_2c)}if(typeof _l[_2c]==_2b){_l[_2c]={}}if(typeof _l[_2c][_l.pathname]!=_2b){_34=_l[_2c][_l.pathname].split(",")}}else{if(_21.isOpera()&&_35.length==0&&typeof navigator.plugins["Shockwave Flash"]=="object"){document.body.innerHTML+="<embed "+_5f+' src="'+_2f.replace(/\.js(\?.*)?$/,".swf")+'" type="application/x-shockwave-flash" />'}}}_st(_4b,1);_st(_4c,2);_st(_55,10);setInterval(_46,50)};this.onInit=null;this.onChange=null;this.toString=function(){return"[class SWFAddress]"};this.back=function(){_h.back()};this.forward=function(){_h.forward()};this.go=function(_60){_h.go(_60)};this.href=function(url,_62){_62=(typeof _62!=_2b)?_62:"_self";if(_62=="_self"){self.location.href=url}if(_62=="_top"){_l.href=url}if(_62=="_blank"){window.open(url)}else{_t.frames[_62].location.href=url}};this.popup=function(url,_64,_65,_66){var _67=window.open(url,_64,eval(_65));eval(_66)};this.addEventListener=function(_68,_69){if(typeof _33[_68]==_2b){_33[_68]=[]}_33[_68].push(_69)};this.removeEventListener=function(_6a,_6b){if(typeof _33[_6a]!=_2b){for(var i=0,l;l=_33[_6a][i];i++){if(l==_6b){break}}_33[_6a].splice(i,1)}};this.dispatchEvent=function(_6e){if(typeof _33[_6e.type]!=_2b&&_33[_6e.type].length){_6e.target=this;for(var i=0,l;l=_33[_6e.type][i];i++){l(_6e)}return true}return false};this.hasEventListener=function(_71){return(typeof _33[_71]!=_2b&&_33[_71].length>0)};this.getBaseURL=function(){var url=_l.href;if(url.indexOf("#")!=-1){url=url.substr(0,url.indexOf("#"))}if(url.substr(url.length-1)=="/"){url=url.substr(0,url.length-1)}return url};this.getStrict=function(){return _36.strict};this.setStrict=function(_73){_36.strict=_73};this.getHistory=function(){return _36.history};this.setHistory=function(_74){_36.history=_74};this.getTracker=function(){return _36.tracker};this.setTracker=function(_75){_36.tracker=_75};this.getIds=function(){return _35};this.getId=function(_76){return _35[0]};this.setId=function(id){_35[0]=id};this.addId=function(id){this.removeId(id);_35.push(id)};this.removeId=function(id){for(var i=0;i<_35.length;i++){if(id==_35[i]){_35.splice(i,1);break}}};this.getTitle=function(){return _d.title};this.setTitle=function(_7b){if(!_24){return null}if(typeof _7b==_2b){return }if(_7b=="null"){_7b=""}_30=_d.title=_7b;_st(function(){if(_2d&&_2d.contentWindow&&_2d.contentWindow.document&&_2d.contentWindow.title){_2d.contentWindow.document.title=_30}},1000)};this.getStatus=function(){return _t.status};this.setStatus=function(_7c){if(!_24){return null}if(typeof _7c==_2b){return }if(!_21.isSafari()){_7c=_3b((_7c!="null")?_7c:"",true);if(_7c=="/"){_7c=""}if(!(/http(s)?:\/\//.test(_7c))){var _7d=_l.href.indexOf("#");_7c=(_7d==-1?_l.href:_l.href.substr(0,_7d))+"#"+_7c}_t.status=_7c}};this.resetStatus=function(){_t.status=""};this.getValue=function(){if(!_24){return null}return _3b(_3a,false)};this.setValue=function(_7e){if(!_24){return null}if(typeof _7e==_2b){return }if(_7e=="null"){_7e=""}_7e=_3b(_7e,true);if(_7e=="/"){_7e=""}if(_3a==_7e){return }_3a=_7e;_32=true;_48();_34[_h.length]=_3a;if(_21.isSafari()){if(_36.history){_l[_2c][_l.pathname]=_34.toString();_31=_h.length+1;if(_23<412){if(_l.search==""){_2e.action="#"+_3a;_2e.submit()}}else{if(_23<523){var evt=document.createEvent("MouseEvents");evt.initEvent("click",true,true);var _80=document.createElement("a");_80.href="#"+_3a;_80.dispatchEvent(evt)}else{_l.hash="#"+_3a}}}else{_l.replace("#"+_3a)}}else{if(_3a!=_37()){if(_36.history){_l.hash="#"+_3e(_3a)}else{_l.replace("#"+_3a)}}}if(_21.isIE()&&_36.history){if(_36.html){var loc=_2d.contentWindow.location;loc.assign(loc.pathname+"?"+_37())}else{_59()}}if(_21.isSafari()){_st(function(){_32=false},1)}else{_32=false}};this.getPath=function(){var _82=this.getValue();return(_82.indexOf("?")!=-1)?_82.split("?")[0]:_82};this.getPathNames=function(){var _83=SWFAddress.getPath();var _84=_83.split("/");if(_83.substr(0,1)=="/"){_84.splice(0,1)}if(_83.substr(_83.length-1,1)=="/"){_84.splice(_84.length-1,1)}return _84};this.getQueryString=function(){var _85=this.getValue();var _86=_85.indexOf("?");return(_86!=-1&&_86<_85.length)?_85.substr(_86+1):""};this.getParameter=function(_87){var _88=this.getValue();var _89=_88.indexOf("?");if(_89!=-1){_88=_88.substr(_89+1);var _8a=_88.split("&");var p,i=_8a.length;while(i--){p=_8a[i].split("=");if(p[0]==_87){return p[1]}}}return""};this.getParameterNames=function(){var _8d=this.getValue();var _8e=_8d.indexOf("?");var _8f=[];if(_8e!=-1){_8d=_8d.substr(_8e+1);if(_8d!=""&&_8d.indexOf("=")!=-1){var _90=_8d.split("&");var i=0;while(i<_90.length){_8f.push(_90[i].split("=")[0]);i++}}}return _8f};if(_24){for(var i=1;i<_31;i++){_34.push("")}_34.push(_37());if(_21.isIE()&&_l.hash!=_37()){_l.hash="#"+_3e(_37())}try{_2f=String(_40(document).src);var qi=_2f.indexOf("?");if(_2f&&qi>-1){var _94,_95=_2f.substr(qi+1).split("&");for(var i=0,p;p=_95[i];i++){_94=p.split("=");if(/^(history|html|strict)$/.test(_94[0])){_36[_94[0]]=(isNaN(_94[1])?eval(_94[1]):(parseFloat(_94[1])>0))}if(/^tracker$/.test(_94[0])){_36[_94[0]]=_94[1]}}}}catch(e){}if(/file:\/\//.test(_l.href)){_36.html=false}_45();_22.addListener(document,"DOMContentLoaded",_5e)}else{_55()}};new function(){var C,B;var A="undefined";if(typeof swfobject!=A){SWFObject=swfobject}if(typeof FlashObject!=A){SWFObject=FlashObject}if(typeof SWFObject!=A){if(SWFObject.prototype&&SWFObject.prototype.write){C=SWFObject.prototype.write;SWFObject.prototype.write=function(){B=arguments;if(this.getAttribute("version").major<8){this.addVariable("$swfaddress",SWFAddress.getValue());((typeof B[0]=="string")?document.getElementById(B[0]):B[0]).so=this}var D;if(D=C.apply(this,B)){SWFAddress.addId(this.getAttribute("id"))}return D}}else{C=SWFObject.registerObject;SWFObject.registerObject=function(){B=arguments;C.apply(this,B);SWFAddress.addId(B[0])};C=SWFObject.createSWF;SWFObject.createSWF=function(){B=arguments;C.apply(this,B);SWFAddress.addId(B[0].id)};C=SWFObject.embedSWF;SWFObject.embedSWF=function(){B=arguments;C.apply(this,B);SWFAddress.addId(B[8].id)}}}if(typeof UFO!=A){C=UFO.create;UFO.create=function(){B=arguments;C.apply(this,B);SWFAddress.addId(B[0].id)}}if(typeof AC_FL_RunContent!=A){C=AC_FL_RunContent;AC_FL_RunContent=function(){B=arguments;C.apply(this,B);for(var E=0,D=B.length;E<D;E++){if(B[E]=="id"){SWFAddress.addId(B[E+1])}}}}};

window.addEvent('domready', function() {
	profile_area = $('profile-area');
	section_title = $('maintitle');
	search_go = $('search-go');
	search_name = $('search-name');
	callouts = $('bottom-callouts');
	quote = $('faculty-quote');
	
	search_name.addEvent('click', function() {
		if(name_altered == false) {
			search_name.value = '';
			name_altered = true;
		}

		return false;
	});

	search_go.addEvent('click', function() {
		if(name_altered == false) {
			alert('Please enter the name of the person you\'re searching for!');
			search_name.focus();
		} else {
			SWFAddress.setValue("?" + "name=" + escape(search_name.value));
		}

		return false;
	});
	
	window.addEvent('resize', function() {
		bindProfileCells();
	});

	profile_filter = new StudentProfileFilter();
});

function bindProfileCells() {
	for(i = 0; i < profile_cells.length; i++) {
		if(profile_cells[i]) {
			profile_cells[i].bindFX();
		}
	}
}

function highlightProfile(in_profile_id) {
	focus_profile = $('profile_' + in_profile_id);
	
	if(flipX(focus_profile)) {
		flipProfileDetails();
	}

	focus_profile.addEvent('mouseleave', unhighlightProfile);
}

function flipProfileDetails(in_profile) {
	focus_profile.getElements('div');
}

function flipX(temp_profile) {
	if((profile_area.getWidth() - 100) < temp_profile.getLeft()) {
		return true;
	} else {
		return false;
	}
}

function getFirstLetter(in_string) {
	return String(in_string).substring(0, 1);
}

function fixEmail(in_email) {
	return in_email.replace(' [at] ', '@');
}

function getProfileCell(in_div) {
	return profile_cells[in_div.getAttribute('rel')];
}

function fadeOtherCells(ev) {
	layer_fader.style.zIndex = highestIndex - 2;
	//layer_fader.set('morph', {onComplete : null})
	//layer_fader.morph({'opacity' : .75});
}

function revealOtherCells(ev) {
	//layer_fader.set('morph', {onComplete : function() { layer_fader.style.zIndex = 0; }});
	//layer_fader.morph({'opacity' : 0});
}

var ProfileCell = new Class ({
	// @ student JSON oject
	initialize: function(in_student){
		this.self = null;
		this.content_container = null;
		this.cell_contact = null;
		this.cell_image = null;
		this.fx_binded = false;

		this.profile_id = in_student.profile_id;
		this.id = in_student.id;
		this.type = in_student.type;
		this.departments = in_student.departments;
		this.firstname = in_student.firstname;
		this.lastname = in_student.lastname;
		this.title = in_student.title;
		this.description = in_student.description;
		this.image = in_student.image;
		this.phone = in_student.phone;
		this.email = fixEmail(in_student.email);
		this.contents_morpher = this.cell_morpher = null;
	},

	bindFX: function() {
		this.self = $('profile_' + this.profile_id);
		this.content_container = this.self.getElements('.profile-cell-details-content')[0];
		this.cell_contact = this.content_container.getElements('.profile-cell-details-contact')[0];
		this.cell_image = this.content_container.getElements('.cell-image')[0];
		this.cell_mini_details = this.self.getElements('.profile-cell-mini-details')[0];

		this.cell_morpher = new Fx.Morph(this.cell_contact, {wait: false, duration: 400});
		this.contents_morpher = new Fx.Morph(this.content_container, {wait: false, duration: 400});
		this.mini_details_morpher = new Fx.Morph(this.cell_mini_details, {wait: false, duration: 400});

		if(flipX(this.self)) {
			//alert(this.self.id);
			this.cell_image.style.left = 'auto';
			this.cell_image.style.right = '0px';
			this.cell_image.style.marginRight = '4px';
			this.cell_image.style.marginLeft = 'auto';

			this.cell_contact.style.left = '0';
			this.cell_contact.style.width = '112px';

			this.reveal = function(in_callback) {
				this.self.style.zIndex = highestIndex;
				highestIndex++;

				//this.contents_morpher.onComplete = fadeOtherCells;
				
				fadeOtherCells();

				this.contents_morpher.start({
					'width' : 360,
					'height' : 116,
					'margin-left' : -249,
					'margin-top': -5,
					'border-width' : 1,
					'border-color' : '#f87620',
					'background-color' : '#bab0a6'
				});

				this.cell_morpher.start({
					'width' : 235
				});

				this.mini_details_morpher.start({
					'margin-top' : -12,
					'opacity' : 0
				});
			};

			this.hide = function(in_callback) {
				revealOtherCells();

				this.contents_morpher.start({
					'width' : 116,
					'height' : 112,
					'border-width' : 1,
					'margin-left' : -5,
					'border-color' : '#fff',
					'background-color' : '#fff'
				});

				this.cell_morpher.start({
					'width' : 112
				});

				this.mini_details_morpher.start({
					'margin-top' : 0,
					'opacity' : 1
				});
			};
		} else {
			this.cell_image.style.left = '0px';
			this.cell_image.style.right = 'auto';
			this.cell_image.style.marginLeft = '4px';
			this.cell_image.style.marginRight = 'auto';

			this.cell_contact.style.left = '120px';
			this.cell_contact.style.width = '235px';

			this.reveal = function(in_callback) {
				this.self.style.zIndex = highestIndex;
				highestIndex++;

				fadeOtherCells();

				this.contents_morpher.start({
					'width' : 360,
					'height' : 116,
					'margin-top': -5,
					'border-width' : 1,
					'border-color' : '#f87620',
					'background-color' : '#bab0a6'
				});

				this.cell_morpher.start({
					'width' : 235
				});

				this.mini_details_morpher.start({
					'margin-top' : -12,
					'opacity' : 0
				});
			};

			this.hide = function(in_callback) {

				revealOtherCells();

				this.contents_morpher.start({
					'width' : 116,
					'height' : 112,
					'border-width' : 1,
					'border-color' : '#fff',
					'background-color' : '#fff'
				});

				this.cell_morpher.start({
					'width' : 235
				});

				this.mini_details_morpher.start({
					'margin-top' : 0,
					'opacity' : 1
				});
			};
		}

		$('profile_' + this.profile_id).addEvent('mouseenter', function(e) {
			getProfileCell(this).reveal();
		});

		$('profile_' + this.profile_id).addEvent('click', function(e) {
			var profile_cell = getProfileCell(this);
			if(profile_cell.id != 39){
				document.location.href = profile_cell.type + '-detail.php?id=' + profile_cell.id;
			}
			else{
				//window.open('http://www.eng.yale.edu/gomez-lab/');
				document.location.href = 'http://www.eng.yale.edu/gomez-lab/';
			}
		});

		$('profile_' + this.profile_id).addEvent('mouseleave', function(e) {
			getProfileCell(this).hide();
		});
	},

	getHTML: function(in_iterator, in_type) {
		switch(view_mode) {
			case 'grid':
				return '\
				<div class="profile-cell" id="profile_' + this.profile_id + '" rel="' + this.profile_id + '"> \n \
					<div class="profile-cell-content" style="z-index; 2"> \n \
						<div class="profile-cell-details"> \n \
							<div class="profile-cell-details-content"> \n \
								<img src="' + this.image + '" alt="" width="116" height="116" class="cell-image"/> \n \
								<div class="profile-cell-details-contact"> \n \
									<h4>' + this.firstname + ' ' + this.lastname + '</h4> \n \
									<sup>' + this.title + '</sup> \n \
									<span>' + (String(this.phone).length > 0 ? ('p ' + this.phone) : '') + '</span><br /> \n \
									<span>' + (String(this.phone).length > 0 ? ('e <a href="mailto:' + this.email + '">' + this.email + '</a>') : '') + '</span><br /><br /> \n \
								</div> \n \
							</div> \n \
						</div> \n \
						<div class="profile-cell-mini-details" style="width: 116px; overflow: hidden; position: absolute; z-index 1;"> \n \
							<span>' + " " + this.lastname + '</span> \n \
						</div> \n \
					</div> \n \
				</div>';
			
			case 'list':
				in_iterator = (in_iterator == null) ? 0 : in_iterator;
				
				switch(this.type) {
					case 'faculty':
						in_detail_page = 'faculty-detail.php';
						break;
					default:
						in_detail_page = 'staff-detail.php';

				}
				if(in_type != null && (in_type == 'r' || in_type == 'f')) {
					return '\
						<tr class="row-' + ((in_iterator % 2) == 0 ? 'a' : 'b') + '">  \n \
							<td><a href="' + in_detail_page + '?id=' + this.id + '">' + this.firstname + ' ' + this.lastname + '</a></td> \n \
							<td><a href="' + in_detail_page + '?id=' + this.id + '">' + this.title + '</a></td> \n \
							<td><a href="' + in_detail_page + '?id=' + this.id + '">' + this.email + '</a></td> \n \
							<td><div class="department-icons">' + getDepartmentIconsHTML(this.departments) + '</div></td> \n \
						</tr> \n \
						';
				} else {
					return '\
						<tr class="row-' + ((in_iterator % 2) == 0 ? 'a' : 'b') + '">  \n \
							<td><a href="' + in_detail_page + '?id=' + this.id + '">' + this.firstname + ' ' + this.lastname + '</a></td> \n \
							<td><a href="' + in_detail_page + '?id=' + this.id + '">' + this.title + '</a></td> \n \
							<td><a href="' + in_detail_page + '?id=' + this.id + '">' + this.email + '</a></td> \n \
						</tr> \n \
						';
				}
		}
	}
});


function getDepartmentIcon(in_department_id) {
	switch(parseInt(in_department_id)) {
		case 1:
			return 'Applied Physics';
		case 2:
			return 'Biomedical Engineering';
		case 3:
			return 'Chemical &amp; Environmental Engineering';
		case 4:
			return 'Electrical Engineering';
		case 5:
			return 'Environmental Engineering';
		case 6:
			return 'Mechanical Engineering &amp; Materials Science';
		default:
			return '';
	}

	return '';
}

function getDepartmentIconsHTML(in_departments) {
	var department_ids = in_departments.split(',');
	var return_html = '';

	for(var i = 0; i < department_ids.length; i++) {
		return_html += getDepartmentIcon(department_ids[i]);
	}

	return return_html;
}

var StudentProfileFilter = new Class({
	initialize: function(){
		this.type = '';
		this.department = '';
		this.name = '';
		this.students = null;
	},

	setType: function(in_type) {
		this.type = in_type;
		this.name = '';

		if(this.type == 'f' && parseInt(this.department) > 0 && typeof faculty_page_index[this.department] !== "undefined") {
			window.location.href = faculty_page_index[this.department];
			return false;
		}

		SWFAddress.setValue("?" + "type=" + this.type + "&department=" + this.department + "&mode=" + (in_type == 'f' ? 'grid' : 'list'));

		return false;
	},

	setDepartment: function(in_department) {
		this.department = in_department;
		this.name = '';

		if(this.type == 'f' && parseInt(this.department) > 0 && typeof faculty_page_index[this.department] !== "undefined") {
			window.location.href = faculty_page_index[this.department];
			return false;
		}

		SWFAddress.setValue("?" + "type=" + this.type + "&department=" + this.department + "&mode=" + (this.type == 'f' ? 'grid' : 'list'));

		return false;
	},
	
	showLoading: function() {
		profile_area.innerHTML = '<img src="images/ajax-loader.gif" alt=""/>';
	},

	refreshStudents: function() {
		if(this.type == 'f' && parseInt(this.department) > 0 && typeof faculty_page_index[this.department] !== "undefined") {
			window.location.href = faculty_page_index[this.department];
			return false;
		}

		if(profile_mode == false) {
			profile_mode = true;

			var fx_a = new Fx.Morph(quote, { duration:1200, wait:false, fps: 60 } );
			var fx_b = new Fx.Morph(callouts, { duration:1200, wait:false, fps: 60 } );
			
			$('Content').set('class', 'full-width');
			$('mainContainer').style.paddingBottom = '20px';

			fx_a.start({
				'opacity': 0
			});

			fx_b.start({
				'opacity': 0
			});

		} else {}

		var request = new Request.JSON({
			url: "get-faculty-and-staff.php",
			
			onRequest: this.showLoading,

			onComplete: this.setStudentsXML
				
			}).get({'type': this.type, 'department': this.department, 'name': this.name});
	},

	setStudentsXML: function(in_json) {
		var temp_student = null;
		if($defined(in_json.response.students)) {
			profile_cells = new Array();
			this.students = in_json.response.students.slice();

			switch(view_mode) {
				case 'list':
					var new_html = '<table class="fancy-list">';
					
					switch(profile_filter.type) {
						case 'f':
						case 'r':
							new_html += '\
								<thead> \n \
								<tr> \n \
									<th>Name</th> \n \
									<th>Title</th> \n \
									<th>Email</th> \n \
									<th class="header-thin">Departments</th> \n \
								</tr> \n \
								</thead> \n \
								<tbody> \n \
									';
							break;
						default:
							new_html += '\
								<thead> \n \
								<tr> \n \
									<th>Name</th> \n \
									<th>Title</th> \n \
									<th>Email</th> \n \
								</tr> \n \
								</thead> \n \
								<tbody> \n \
									';
					}

					for(i = 0; i < this.students.length; i++) {
						temp_student = new ProfileCell(this.students[i]);
						new_html += temp_student.getHTML(i, profile_filter.type);
						profile_cells[this.students[i].profile_id] = (temp_student);
					}

					new_html += '</table>';
					break;
				case 'grid':
					var new_html = '<div class="profile-layer">';

					for(i = 0; i < this.students.length; i++) {
						temp_student = new ProfileCell(this.students[i]);
						new_html += temp_student.getHTML(); //'<li><a>' + this.students[i].firstname + ' ' + this.students[i].lastname + '</a></li>';
						profile_cells[this.students[i].profile_id] = (temp_student);
					}

					new_html += '<div id="layer-fader"></div>';

					new_html += '</div>';

					//new_html += '<a href="javascript:void(0);" style="clear: both;" onclick="setMode(\'list\');">View as List</a>';

					break;
			}
		}  else {
			var new_html = '<ul class="content-list"><li><span>No faculty or staff were found</span></li></ul>';
		}

		profile_area.innerHTML = new_html;
	
		layer_fader = null;
		layer_fader = $('layer-fader');

		if($defined(layer_fader)) {
			for(var i = 0; i < this.students.length; i++) {
				$('profile_' + this.students[i].profile_id).addEvent('mouseenter', initialMouseOver);
			}

			//layer_fader.set('morph', {duration: 100, fps: 60})
			//layer_fader.setStyle('height',layer_fader.getSize().y - 845);
			//layer_fader.setStyle('width',$('contentContainer').getStyle('width'));
			layer_fader.setStyle('opacity',0);
		}

	}

});

function initialMouseOver() {
	focus_cell = getProfileCell(this);

	if($defined(focus_cell) && focus_cell.fx_binded == false) {
		focus_cell.bindFX();
		focus_cell.reveal();
		$('profile_' + focus_cell.profile_id).removeEvent('mouseenter', initialMouseOver);
	}
}

function setMode(in_mode) {
	SWFAddress.setValue("?" + "type=" + profile_filter.type + "&department=" + profile_filter.department + "&mode=" + in_mode);
}

function handleChange(event) {	
	var type_title = '';
	var department_title = '';
	
	var temp_location = new String(document.location.href);

	if(temp_location.indexOf('faculty.php') == -1) {
		if(typeof detail_loaded !== "undefined" && detail_loaded == true) {
			//document.location = "?" + "type=" + profile_filter.type + "&department=" + profile_filter.department + "&mode=" + in_mode;
		} else {
			detail_loaded = true;
		}
	}

	var temp_parameters = null;
	var temp_type = SWFAddress.getParameter('type');
	var temp_department = SWFAddress.getParameter('department');
	var temp_name = SWFAddress.getParameter('name');
	var temp_mode = SWFAddress.getParameter('mode');

	if(temp_type == 'f' && (temp_mode != 'grid' || temp_mode != 'list')) { temp_mode = 'grid'; }
	view_mode = temp_mode != 'grid' ? 'list' : 'grid';
		

	if(IE6) {
		view_mode = 'list';
	}

	switch(temp_type) {
		case 'f':
			type_title = 'Faculty';
			break;
		case 'r':
			type_title = 'Research Staff';
			break;
		case 'a':
			type_title = 'Administrative Staff';
			break;
		case 't':
			type_title = 'Technical Staff';
			break;
		case 'at':
			type_title = 'Administrative &amp; Technical Staff';
			break;
		default:
			type_title = 'Faculty &amp; Staff';
	}

	if(typeof department_index[temp_department] !== "undefined") {
		department_title = department_index[temp_department];
	} else {
		department_title = '';
	}

	temp_parameters = SWFAddress.getParameterNames();
	
	if(temp_parameters.indexOf('name') > -1) {
		section_title.innerHTML = getSectionTitleHTML('Faculty &amp; Staff', 'Searching for ' + unescape(temp_name));

		profile_filter.name = temp_name;
		profile_filter.type = '';
		profile_filter.department = '';

		if(temp_name.length == 0) {
			alert("Please enter the name of the person you're searching for!");
			return -1;
		}

		profile_filter.refreshStudents();

		search_name.value = unescape(temp_name);
		name_altered = true;
	} else if(temp_parameters.length > 0) {
		search_name.value = 'Enter Name';
		section_title.innerHTML = getSectionTitleHTML(type_title, department_title);
		profile_filter.type = temp_type;
		profile_filter.department = temp_department;
		profile_filter.refreshStudents();
	}

	return 0;
}

function getSectionTitleHTML(in_type, in_departments) {
	return "<h1>" + in_departments + ' ' + in_type + "</h1>";
}

function fixMailto(str){
	return 'mailto:'+fixEmail(str);
}


SWFAddress.addEventListener(SWFAddressEvent.CHANGE, handleChange);

/*
*/