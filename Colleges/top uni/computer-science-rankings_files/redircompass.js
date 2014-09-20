var cookies=document.cookie.split(/;\s*/);
for (var i=0; i<cookies.length; i++) {
	if (cookies[i].indexOf("usn_c=")==0) {
		document.write('<scr'+'ipt type="text/javascript" src="http://secure.rankingsandreviews.com/usnews/redir-compass.php"></script>');
		break;
	}
}
