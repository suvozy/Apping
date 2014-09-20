var sInvalidChars
sInvalidChars="1234567890";
var iTotalChecked=0;
function checkNumericVals(objV,  msg)
{
	for(var i=0;i<sInvalidChars.length;i++)
	{
		if(objV.value.indexOf(sInvalidChars.charAt(i))!=-1)
		{
			alert(msg);
			objV.focus();
			return false;
		}
	}
	return true;
}
function objChecked(obj)
{
	if(obj.checked)
		iTotalChecked = iTotalChecked + 1
	else
		iTotalChecked = iTotalChecked - 1
 }
function fnSearch(iID)
{
	document.forms[0].HID_SearchID.value=iID;
	document.forms[0].action="../Users/Search.asp"
	document.forms[0].submit();
}
function fn_ValidateZipPhone(obj, iLen, sMsg)
{
	if(obj.value.length<iLen)
	{
		alert(sMsg);
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

function CheckConfirmPassword(fldPass,fldConPass,minChars)
{
	//created on: 30th Jan 2003
	//Programmer: Anita Mourya
	//Purpose	: This function is used to check that Password contains minimum characters and confirm Password matches the password. 
	//Arguments : password field name , confirm password field name, minimum characters to check.


		if(fldPass.value.length == 0)
		{
			alert("Please enter your password");
			fldPass.focus();
			fldPass.select();
			return false;
		}
		h = fldPass.value.length;
		x = fldPass.value.value;

			for( i=0;i<h;i++)
			{
			 
				if (  h < minChars )
				{
								alert(" Password can't be less than " + minChars + " characters");
								fldPass.focus();
								fldPass.select();
								return false;
				}


			}
		//=============================


		if(fldConPass.value.length == 0)
		{
			alert("Please re-enter your password");
			fldConPass.focus();
			fldConPass.select();
			return false;
		}
	
//	alert(fldPass.value);	
	//	alert(fldConPass.value);
		if(fldPass.value != fldConPass.value)
		{
			alert("Please ensure that you have entered the same password twice");
			fldConPass.focus();
			fldConPass.select();
			return false;
		}
	return true;

}


function CheckCharWithinField(fldName, fldAlias, chkChar)
{
	//created on: 30th Jan 2003
	//Programmer: Anita Mourya
	//Purpose	: This function is used to check that username does not contain any spaces. 
	//Arguments : field name object, field alias to be used, character to be checked

		b= fldName.value.length
		x= fldName.value
		
		if (x == "")
		{
			alert ("Please Enter Your " + fldAlias)
			fldName.focus();
			fldName.select();
			return false;
		}

		for( i=0;i<b;i++)
		{
			z = x.substring(i,i+1);
			if(z== chkChar)
			{
				alert("Please enter valid " + fldAlias + " without any '" + chkChar + "' in-between");
				fldName.focus();
				fldName.select();
				return false;
			}
		}
		//------------------------------

return true;
}

function CheckAll(chk)
{
	//created on: 10th May 2002
	//Programmer: Prashant Sharma
	//Purpose	: This function is used to check all the checkboxes basedon state of chk checkbox. 
	//Arguments : checkbox object
	for (var i=0;i < document.forms[0].elements.length;i++)
	{
		var e = document.forms[0].elements[i];
		if (e.type == "checkbox")
		{
			e.checked = true;
		}
	}
}
function ClearAll(chk)
{
	//created on: 10th May 2002
	//Programmer: Prashant Sharma
	//Purpose	: This function is used to check all the checkboxes basedon state of chk checkbox. 
	//Arguments : checkbox object
	for (var i=0;i < document.forms[0].elements.length;i++)
	{
		var e = document.forms[0].elements[i];
		if (e.type == "checkbox")
		{
			e.checked = false;
		}
	}
}

function fnRemoveSpaces(sFldval)
{
	var sTemp=sFldval;
  var sNewval=sTemp;
  //remove spaces from the front
  for(var i=0;i<sTemp.length;i++)
  {	
		if(sTemp.charAt(i)!=" ")
			break;
		else
			sNewval = sTemp.substring(i+1);
	}
	return sNewval;
}

function fnFixSpace(sFldval)
{
	//created on: 10th May 2002
	//Programmer: Prashant Sharma
	//Purpose	: This function is used to remove spaces. 
	//Arguments : text field object value
	var sTemp=sFldval;
  var sReversedString="";
  var sTemp1;
  
  //remove spaces from the front
  sNewval = fnRemoveSpaces(sTemp);
  
  // reverse n remove spaces from the front
  for(var i=sNewval.length-1;i>=0;i--)
		sReversedString = sReversedString + sNewval.charAt(i);
	sTemp1 = fnRemoveSpaces(sReversedString);
	//reverse again
	sReversedString="";
	for(var i=sTemp1.length-1;i>=0;i--)
		sReversedString = sReversedString + sTemp1.charAt(i);
	sNewval = sReversedString;
	return sNewval;
}

function ValidateEMail(objName)
{
	//created on: 12th May 2002
	//Programmer: Prashant Sharma
	//Purpose	: This function is used to validate email. 
	//Arguments : Email object
		
	var sobjValue;
	var iobjLength;

	sobjValue=objName;
	iobjLength=sobjValue.length;
	iFposition=sobjValue.indexOf("@");
	iSposition=sobjValue.indexOf(".");
	iTmp=sobjValue.lastIndexOf(".");	
	iPosition=sobjValue.indexOf(",");
	iPos=sobjValue.indexOf(";");
	
	if (iobjLength!=0)
	{
		if ((iFposition == -1)||(iSposition == -1))
		{
			return false;
		}
		else if(sobjValue.charAt(0) == "@" || sobjValue.charAt(0)==".")
		{
			return false;				
		}
		else if(sobjValue.charAt(iobjLength) == "@" ||
sobjValue.charAt(iobjLength)==".")
		{
			return false;				
		}	
		else if((sobjValue.indexOf("@",(iFposition+1)))!=-1)
		{	
			return false;
		}
		else if ((iobjLength-(iTmp+1)<2)||(iobjLength-(iTmp+1)>3))
		{
			return false;
		}
		else if ((iPosition!=-1) || (iPos!=-1))
		{
			return false;
		}
		else
		{
			return true;
		}		
	}		
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/*--------------------------------------------------------------------------------------
	this sub routine checks for the mandatory fields, their data types and maximum length
	also validates valid email entered or not
	Return : True/False
	Input : objFrm ( form object name)
	Programmer : Prashant Sharma
	Dated : 22-05-2002
	Version : 1.0.0
----------------------------------------------------------------------------------------*/
function ValidateForm(objFrm)
{
	var iConventionPos;
	var sChangedName;
	for( var i =0; i< objFrm.length;i++)
	{
		if(objFrm[i].type=='text' || objFrm[i].type=='textarea' || objFrm[i].type=='select-one' || objFrm[i].type=='select-multiple' || objFrm[i].type=='password')
		{
			if(objFrm[i].type=='text' || objFrm[i].type=='textarea' || objFrm[i].type=='password')
				objFrm[i].value = fnFixSpace(objFrm[i].value);
			
			var objDataTypeHolder = objFrm[i].name.substring(0,3);
			if(objFrm[i].name.substring(0,5)=='TREF_' || objFrm[i].name.substring(0,5)=='TNEF_')
				objDataTypeHolder = objFrm[i].name.substring(0,5);
			if((objFrm[i].type=='select-one' && objFrm[i].options[objFrm[i].selectedIndex].value=='' && objDataTypeHolder=="TR_"))
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)
				alert("Please select "+ sChangedName +".");
				objFrm[i].focus();
				return false;
				break;
			}

			if(objFrm[i].type=='password' && objFrm[i].value!='' && objFrm[i].value.indexOf(" ")!=-1)
			{
				alert("Spaces are not allowed in password.");
				objFrm[i].select();
				return false;
				break;
			}
			if(objFrm[i].type=='password' && objFrm[i].name=='TR_Confirm_Password' && objFrm[i].value!=objFrm.TR_Password.value)
			{
				alert("Password and confirm password fields are not matching.");
				objFrm[i].select();
				return false;
				break;
			}
			
			if((objDataTypeHolder=="TR_" || objDataTypeHolder=="IR_" || objDataTypeHolder=="MR_"  )&& (objFrm[i].value==''))
			{	
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)
				alert("Please enter "+ sChangedName +".");
				objFrm[i].focus();
				return false;
				break;
			}
			if(objDataTypeHolder=="TREF_" && objFrm[i].value=='')
			{
				alert("Please enter email.");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}
			if((objDataTypeHolder=="IR_" || objDataTypeHolder=="MR_" )&& (isNaN(objFrm[i].value)))
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)
				alert("Please enter numeric "+ sChangedName +".");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}
			
			/*if((objDataTypeHolder=="IR_" || objDataTypeHolder=="MR_" )&& (objFrm[i].value)<0)
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)
				alert("Please enter valid "+ sChangedName +".");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}*/
			if((objDataTypeHolder=="IN_" || objDataTypeHolder=="MN_" )&& (isNaN(objFrm[i].value) && objFrm[i].value!='' ))
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)
				alert("Please enter numeric "+ sChangedName +".");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}
			/*if((objDataTypeHolder=="IN_" || objDataTypeHolder=="MN_" )&& (objFrm[i].value<0 && objFrm[i].value!=''))
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)
				alert("Please enter valid "+ sChangedName +".");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}
			if((objDataTypeHolder=="IR_" || objDataTypeHolder=="IN_" ) && (objFrm[i].value.indexOf(".")!=-1))
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)
				alert("Please enter valid "+ sChangedName +".");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}*/
			if((objDataTypeHolder=="TREF_") || (objDataTypeHolder=="TNEF_" && objFrm[i].value!='' ))
			{
				if(!ValidateEMail(objFrm[i].value))
				{
					alert("Please enter valid email.");
					objFrm[i].focus();
					objFrm[i].select();
					return false;
					break;
				}
			}
			//ValidateNumber(objName)
			if((objDataTypeHolder=="NR_"))
			{
				if(!ValidateNumber(objFrm[i].value))
				{
					objFrm[i].focus();
					return false;
					break;
				}
			}			
			if(objDataTypeHolder=="PHR")
			{
				var val=objFrm[i].value;
				if (val!="")
				{
					for(var j=0; j < val.length;j++)
					{
						if((val.charAt(j)!='(')&&(val.charAt(j)!=')')&&(val.charAt(j)!=' ')&&(val.charAt(j)!="-")&& !((val.charAt(j)>=0)&&(val.charAt(j)<=9)))
						{
							alert("Please enter valid Phone Number");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
					}
				}
				else
				{
					alert("Please Enter Phone Number");
					objFrm[i].focus();
					objFrm[i].select();
					return false;
					break;
				}
			}
			//ValidateNumber(objName)
			if((objDataTypeHolder=="NR_"))
			{
				if(!ValidateNumber(objFrm[i].value))
				{
					objFrm[i].focus();
					return false;
					break;
				}
				if(parseFloat(objFrm[i].value)<=0)
				{
					objFrm[i].focus();	
					alert('Price should be greater then 0');
					return false;
				}
			}
			if(objDataTypeHolder=="PHN")
			{
				var val=objFrm[i].value;
				if (val!="")
				{
					for(var j=0; j < val.length;j++)
					{
						if((val.charAt(j)!='(')&&(val.charAt(j)!=')')&&(val.charAt(j)!=' ')&&(val.charAt(j)!="-")&& !((val.charAt(j)>=0)&&(val.charAt(j)<=9)))
						{
							alert("Please enter valid Phone Number");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
					}
				}				
			}
		}
	}
	return true;
}


function FormatDate(d)
{
		var dd,mm;
		var l;
		l=d.indexOf("/");
		dd=d.substring(0,l);
		d=d.substring(l+1);
		l=d.indexOf("/");
		mm=d.substring(0,l);
		yy=d.substring(l+1);
		
		if (parseInt(dd) < 10)
			dd="0" + dd;
		if (parseInt(mm) < 10)
			mm="0" + mm;
		d= dd + "/" + mm + "/" + yy
		return d;
}

function ValidateImg(objImg, isRequired)
{
	if(isRequired ==1 && objImg.value=='')
	{
		alert("Please enter image.");
		objImg.focus();
		return false;
	}
	if(objImg.value.length!=0)
	{
		if(objImg.value.length<5)
		{
			alert("Please enter valid image.");
			objImg.focus();
			objImg.select();
			return false;
		}
		var iPos = objImg.value.lastIndexOf(".")
		var sExt = objImg.value.substring(iPos);
		if((sExt.toUpperCase()=='.JPEG') || (sExt.toUpperCase()=='.JPG') || (sExt.toUpperCase()=='.GIF') || (sExt.toUpperCase()=='.BMP') )
		{
			return true;
		}
		else
		{
			alert("Please enter valid image.");
			objImg.focus();
			objImg.select();
			return false;
		}
	}
	return true;
}

function ValidateFileType(objImg, isRequired)
{
	if(isRequired ==1 && objImg.value=='')
	{
		alert("Please enter image.");
		objImg.focus();
		return false;
	}
	if(objImg.value.length!=0)
	{
		if(objImg.value.length<5)
		{
			alert("Please enter valid file.");
			objImg.focus();
			objImg.select();
			return false;
		}
		var iPos = objImg.value.lastIndexOf(".")
		var sExt = objImg.value.substring(iPos);
		if((sExt.toUpperCase()=='.XLS') || (sExt.toUpperCase()=='.PDF') )
		{
			return true;
		}
		else
		{
			alert("Please enter valid Excel or Pdf file.");
			objImg.focus();
			objImg.select();
			return false;
		}
	}
	return true;
}

function ValidateNumber(objName)
{
	//created on: 12th May 2002
	//Programmer: Shadab Shafiq
	//Purpose	: This function is used to validate email. 
	//Arguments : Email object
		
	var h;
	var x;
	
	h=objName.length;
	x = objName;
	if (h==0)
	{
		alert("Price Can be numeric only");
		return false;
	}			
	for( i=0;i<h;i++)
	{
		z = x.substring(i,i+1);
		if ( z=="'"||z=='"' || (z >= "a" && z <= "z" ) || (z >= "A" && z <= "Z") )
		{
			alert("Price Can be numeric only");
			return false;
		}			
	}
	jj=x.indexOf(".");
	if (jj != "-1") 
		{
		hh=x.substring(jj);
		ll=hh.length;
		if (ll > 3) 
			{
			alert("Price Can have upto 2 decimal places");
			return false;
			}
		}
	x = objName;
	return true;
	
}

function ValidateNumber(objName)
{
	//created on: 12th May 2002
	//Programmer: Shadab Shafiq
	//Purpose	: This function is used to validate email. 
	//Arguments : Email object
		
	var h;
	var x;
	
	h=objName.length;
	x = objName;
	if (h==0)
	{
		alert("Price cannot be left blank");
		return false;
	}			
	for( i=0;i<h;i++)
	{
		z = x.substring(i,i+1);
		if ( z=="'"||z=='"' || (z >= "a" && z <= "z" ) || (z >= "A" && z <= "Z") )
		{
			alert("Price Can be numeric only");
			return false;
		}			
	}
	jj=x.indexOf(".");
	if (jj != "-1") 
		{
		hh=x.substring(jj);
		ll=hh.length;
		if (ll > 3) 
			{
			alert("Price Can have upto 2 decimal places");
			return false;
			}
		}
	return true;
	
}

function checkname(pn, dipname)
{
		var n,s,z;
		n=0;
		s=0;
		z=pn.value.length;
		alert(pn.name + z);
		for(var i=0;i<z;i++)
		{		
			alert(pn.charCodeAt(i));
			if((pn.charCodeAt(i)>=48 && pn.charCodeAt(i)<=57))
				n=n+1;
			else
				s=s+1;
		}
		alert(pn.name + ' '+ n + ' ' + s);
		if (s==0)
		{
			alert(dipname + ' cannot be just numbers!!');
			return false;
		}
		else
		{
			return true;
		}
}

function getFormattedmsg(sVal)
{
	while(sVal.indexOf("_")!=-1)
	{
		sVal = sVal.replace("_", " ")
	}
	return sVal;
	
}
//This function is added to be used in Classified section of Community site
function fnClassified()
{
		iLeft = screen.width/2-300
		iTop = screen.height/2-200
		win = 	window.open("Validate.asp?page=addClassified.asp", "s", "toolbars=0, menubar=0, noresize, left=" + iLeft + ",top=" + iTop + ", width=600, height=400")	
}
//This function is added to be used in Our Community section of Community site
function fnListing()
{
		iLeft = screen.width/2-300
		iTop = screen.height/2-250
		win = 	window.open("Validate.asp?page=addListing.asp", "s", "toolbars=0, menubar=0, noresize, left=" + iLeft + ",top=" + iTop + ", width=600, height=500")	
}

// Function for new user sign up in Classified section
function fnLogin()
{
		iLeft = screen.width/2-200
		iTop = screen.height/2-100
		win = 	window.open("SignUp.asp", "s", "toolbars=0, menubar=0, noresize, left=" + iLeft + ",top=" + iTop + ", width=400, height=200")	
}

// Function for new user sign up in Community section
function fnCommunityLogin()
{
		iLeft = screen.width/2-200
		iTop = screen.height/2-100
		win = 	window.open("../community-classified/SignUp.asp", "s", "toolbars=0, menubar=0, noresize, left=" + iLeft + ",top=" + iTop + ", width=400, height=200")	
}

// Function for cheking the proper Email ID while making login in Classified and Community section
	function valLoginForm(obj)
{

	if(ValidateForm(obj))
	{
			if (ValidateEMail(obj.TR_Email_ID.value))
			{
				return true;
			}
			else
			{
				alert("Please enter Email ID in proper format");
				obj.TR_Email_ID.focus();
				return false;			
			}
	}
	return false;
}

function fnHomeLogin()
{
		iLeft = screen.width/2-200
		iTop = screen.height/2-100
		win = 	window.open("community-classified/SignUp.asp", "s", "toolbars=0, menubar=0, noresize, left=" + iLeft + ",top=" + iTop + ", width=400, height=200")	
}

function fnCommunitySearch()
{
		//alert("hh")
		//alert("value" + frmSearch.Select1.value)
		if(frmSearch.Select1.value == "")
		{
		alert("Please select category!")
		}
		else
		{
		document.frmSearch.action = 'yellow-pages-detail.asp?catid=' + frmSearch.Select1.value + "&Title=" + frmSearch.txtSearch.value
		document.frmSearch.submit();
		}
}

//Functions used in admin section of Calling Card

function fnNext(frmaction)
{
	document.frmInbox.action = frmaction;
	document.frmInbox.submit();
}
function fnPrev(frmaction)
{
	document.frmInbox.action = frmaction;
	document.frmInbox.submit();
}
function fnDelete(obj,frmaction)
{
var chk = 0;

if (obj.chk_delete != null){
	if(obj.chk_delete.length>1)
	{
		
		for(i=0;i<=obj.chk_delete.length-1;i++)
		{
			if(obj.chk_delete[i].checked)
			{
				chk = 1;
			}
		}
	}
	else
	{
		if(obj.chk_delete.checked)
		{
			chk = 1;
		}
	}
	if(chk==1)
	{
		if(confirm("Are u sure u want to delete these records?"))
		{
			obj.action = frmaction;
			obj.submit();
			return true;
		}
		else
		{	return false;	}
	}
	else
	{
		alert("Please select a record to delete.");
		return false;		
	}
	}
	return false;

}
function fnActive(obj,frmaction)
{
obj.hid_chk_active.value = "";
	if(obj.chk_active.length>1)
	{
		
		for(i=0;i<=obj.chk_active.length-1;i++)
		{
			if(obj.chk_active[i].checked)
			{
				obj.hid_chk_active.value = obj.hid_chk_active.value + obj.chk_active[i].value + ",1##";
			}
			else
			{
				obj.hid_chk_active.value = obj.hid_chk_active.value + obj.chk_active[i].value + ",0##";
			}
		}
	}
	else
	{
		if(obj.chk_active.checked)
		{
			obj.hid_chk_active.value = obj.hid_chk_active.value + obj.chk_active.value + ",1##";
		}
		else
		{
			obj.hid_chk_active.value = obj.hid_chk_active.value + obj.chk_active.value + ",0##";
		}
	}
	obj.action = frmaction;
	obj.submit();
}

function fnDetails(detailpage,iwidth,iheight)
{
	iLeft = parseInt(screen.width)/2-parseInt(iwidth)/2
	iTop = parseInt(screen.height)/2-parseInt(iheight)/2
	window.open(detailpage, "a", "toolbars=0,scrollbars=1,menubar=0, noresize, left=" + iLeft + ",top=" + iTop + ", width=" + iwidth + ", height=" + iheight)
}
function fnPrint(pagetoprint)
{
	location.href = pagetoprint
}
function fnPrintPage()
{
	document.all["tbPrint"].style.display = "none"
	window.print()
	document.all["tbPrint"].style.display = "inline"
}
