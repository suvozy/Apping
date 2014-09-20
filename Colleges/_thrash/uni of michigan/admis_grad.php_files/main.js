var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-725196-12']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
$(document).ready(function() {
function deframe(){if (top.location != location) top.location.href = document.location.href;}
deframe();

currentpage = location.pathname;
currentpage = currentpage.replace(/\/$/,"/index");
currentpage = currentpage.replace(".php","");

function recordOutgoingLink(category, action, opt_label) {
try {
_um_gae = _gat._createTracker('UA-725196-13', '_um_gae');
_um_gae._trackEvent('/outgoing' + currentpage + category, action, opt_label);
setTimeout('document.location = "' + action + '"', 100);
} catch(err) {
document.location = action;
}
}

function recordInpageActivity(category, action, opt_label) {
  try {
	_um_gae = _gat._createTracker('UA-725196-13', '_um_gae');
	_um_gae._trackEvent('/inpage' + currentpage + category, action, opt_label);
  }catch(err){}
}

// Give
$('#giving').click(function() {action = $(this).attr('href');recordOutgoingLink('/give/', action, 'Give to U-M');return false;});
// Quicklinks
$('#quicklinks a').click(function() {action = $(this).attr('href');label = $(this).html();recordOutgoingLink('/quick/', action, label);return false;});
// Focus
$('#focuslinks a').click(function() {action = $(this).attr('href');label = $(this).html();recordOutgoingLink('/focus/', action, label);return false;});
// Connect
$('#connect dt a').click(function() {action = $(this).attr('href');label = $('#connect dd a').html();recordOutgoingLink('/connect/', action, label);return false;});
$('#connect dd a').click(function() {action = $(this).attr('href');label = $(this).html();recordOutgoingLink('/connect/', action, label);return false;});
$('#social a').click(function() {action = $(this).attr('href');label = $(this).attr('title');recordOutgoingLink('/connect/', action, label);return false;});
// News
$('#news dt a').click(function() {action = $(this).attr('href');label = $(this).parent().parent().find('.headline a').html();recordOutgoingLink('/news/', action, label);return false;});
$('#news dd.headline a').click(function() {action = $(this).attr('href');label = $(this).html();recordOutgoingLink('/news/', action, label);return false;});
$('#news dd.source a').click(function() {action = $(this).attr('href');label = $(this).html();recordOutgoingLink('/news/', action, label);return false;});
// Audience #main content
$('body[class="inside audience"] #main a').click(function() {action = $(this).attr('href');label = $(this).html();recordOutgoingLink('/audience main/', action, label);return false;});
// Spotlight Links
$('#spotlights a').click(function() {action = $(this).attr('href');label = $('#spotBlurb a').html();recordOutgoingLink('/spotlight/', action, label);return false;});
$('#spotBlurb a').click(function() {action = $(this).attr('href');label = $(this).html();recordOutgoingLink('/spotlight/', action, label);return false;});
// Feature Links
$('#f-headline a').click(function() {action = $(this).attr('href');label = $(this).find('span').html();recordOutgoingLink('/feature/', action, label);return false;});
$('.f-image-wrap a').click(function() {action = $(this).attr('href');label = $('#f-headline span').html();recordOutgoingLink('/feature/', action, label);return false;});
// Search bar text removal on click
function textFocus(){if (!this.newText){this.value = '';this.newText = true;}}

if (document.getElementById && document.createTextNode){
	var nodes = document.getElementById("head").getElementsByTagName("input");
	for (var i=0; i<nodes.length; ++i){if (nodes[i].type == "text"){nodes[i].onfocus = textFocus;}}
}
}); // document ready