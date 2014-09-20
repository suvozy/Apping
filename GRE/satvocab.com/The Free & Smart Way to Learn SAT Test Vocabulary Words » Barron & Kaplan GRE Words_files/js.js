

var SendStaf = "/wp-content/plugins/sendtoafriend/sendtoafriend.php?staf=true";

function initStaf() {
	// initiates the object for sending and receiving data
	httpStaf = staf_getHTTPObject();
	oRemovedNode = document.getElementById("stafBlock");
	oRemovedNode.parentNode.removeChild(oRemovedNode);
	document.body.appendChild(oRemovedNode);
	
	stafLnk = document.getElementById('stafLink');
	staffrm = document.getElementById('stafForm').innerHTML;
	if(stafLnk) {
		stafLnk.onclick = function() {
			document.getElementById('stafUrl').value = document.URL;
			document.getElementById('stafBlock').style.display = 'block';
//			document.getElementById('stafBlock').style.visibility = 'visible';
			ws = staf_windowsize();
			w = parseInt(document.getElementById('stafBlock').offsetWidth);
			h = parseInt(document.getElementById('stafBlock').offsetHeight);
			stafTopOffset =0;
			if(document.body.scrollTop) {
				stafTopOffset = document.body.scrollTop;
			} else if(document.documentElement.scrollTop){ 
				stafTopOffset = document.documentElement.scrollTop;
			}
			document.getElementById('stafBlock').style.top =  (stafTopOffset + ((ws.y/2)-(h/2)))+"px" ;
			document.getElementById('stafBlock').style.left =  ((ws.x/2)-(w/2))+"px";
			return false;
		}
	}
}


function staf_Close() {
	document.getElementById('stafBlock').style.display = 'none';
//	document.getElementById('stafBlock').style.visibility = 'hidden';		
	return false;
}
function staf_Reset() {

	document.getElementById('stafBlock').style.display = 'none';
//	document.getElementById('stafBlock').style.visibility = 'hidden';	
	document.getElementById('stafForm').innerHTML = staffrm;
}
function staf_Error(stafErrorArr) {
	document.getElementById('stafLblFromName').style.color = "inherit";
	document.getElementById('stafLblFromMail').style.color = "inherit";
	document.getElementById('stafLblToName').style.color = "inherit";
	document.getElementById('stafLblToMail').style.color = "inherit";
	
	for(i = 0; i < stafErrorArr.length; i++) {
		document.getElementById(stafErrorArr[i]).style.color = '#ff0000';
	}
	
}

function staf_Submit() {
	if (httpStaf.readyState == 4 || httpStaf.readyState == 0) {
		httpStaf.open("POST", SendStaf, true);
		httpStaf.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  		params = 'url='+document.getElementById('stafUrl').value;
		params+= '&fromname='+document.getElementById('stafFromName').value;
		params+= '&frommail='+document.getElementById('stafFromMail').value;
		params+= '&toname='+document.getElementById('stafToName').value;
		params+= '&tomail='+document.getElementById('stafToMail').value;
		httpStaf.send(params);
		httpStaf.onreadystatechange = function () {
			if (httpStaf.readyState == 4) {
				results = httpStaf.responseText;
				if(results.substring(0,5) == "Array") {
					results = eval(results);
					staf_Error(results);
				} else {
					document.getElementById("stafForm").innerHTML = staf_confirmtext;
					setTimeout('staf_Reset()', 1000);
				}
    		}
		}
  	} else {
  	    setTimeout('staf()', 400)
  	}
	
	return false;
}

//returns the window size 
function staf_windowsize() {
	var x,y;
	if (self.innerHeight) // all except Explorer
	{
		x = self.innerWidth;
		y = self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight)
		// Explorer 6 Strict Mode
	{
		x = document.documentElement.clientWidth;
		y = document.documentElement.clientHeight;
	}
	else if (document.body) // other Explorers
	{
		x = document.body.clientWidth;
		y = document.body.clientHeight;
	}
	retval = new Object;
	retval.x = x;
	retval.y = y; 
	return retval;
}
//initiates and handles the XMLHttpRequest object
//as found here: http://www.webpasties.com/xmlHttpRequest

function staf_getHTTPObject() {
  var xmlhttp;
  /*@cc_on
  @if (@_jscript_version >= 5)
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (E) {
        xmlhttp = false;
      }
    }
  @else
  xmlhttp = false;
  @end @*/
  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
    try {
      xmlhttp = new XMLHttpRequest();
    } catch (e) {
      xmlhttp = false;
    }
  }
  return xmlhttp;
}


// brothercake's generic onload
// http://www.brothercake.com/site/resources/scripts/onload/

if(typeof window.addEventListener != 'undefined')
{
	//.. gecko, safari, konqueror and standard
	window.addEventListener('load', initStaf, false);
}
else if(typeof document.addEventListener != 'undefined')
{
	//.. opera 7
	document.addEventListener('load', initStaf, false);
}
else if(typeof window.attachEvent != 'undefined')
{
	//.. win/ie
	window.attachEvent('onload', initStaf);
}