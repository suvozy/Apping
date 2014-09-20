
/* - calendar.js - */
/* Distributed as a part of CalendarX version > 0.4.5  */
/* minor typo fixed on line 52 (lenght => length)    */
/* and modded for 0.6.2 and 0.6.3 for multimonth view  */
/* and modded for 0.6.3 for fixCategories function (controls Categories checkbox behavior)  */
/* and modded for 0.6.6: to read values for mouseover highlighting from CX_props_css) */

/* calendar functions */

var PREFIX = "cal";
var MAX_ID = 0;

/**
 * Functions called from pt. Calls highlightEventRange() and showCalPopup() or clearEventRange() and hideCalPopup().
 */
function mouseOverEvent(start, end, eventID) {
    showCalPopup(eventID);
}
function mouseOutEvent(start, end, eventID) {
    hideCalPopup(eventID);
}
/**
 * Added these functions to test array passing instead of a linear arrange.  
 *   Updated to use in in eventlist view (previously for multimonth view).
 */
function mMmouseOverEvent(array, eventID) {
    showCalPopup(eventID);
}
function mMmouseOutEvent(array, eventID) {
    hideCalPopup(eventID);
}



/**
 * Functions used for highlighting the time-range of an event in the current (month, week, week2, day) calendarview.
 */
function setMax(maxID) {
    MAX_ID = maxID;
}

function highlightEventRange(start, end) {
    for(i = start; i <= end; i++) {
        if ((MAX_ID > 0) && (i > MAX_ID)) {
            i = end;
        }
        else {
            getElem("id", PREFIX + i, null).style.backgroundColor = BGCOLOR_HIGHLIGHTED;
        }
    }
}

function clearEventRange(start, end) {
    for(i = start; i <= end; i++) {
        if ((MAX_ID > 0) && (i > MAX_ID)) {
            i = end;
        }
        else {
            elem = getElem("id", PREFIX + i, null);
            elemClass = getAttr("id", PREFIX + i, null, "class");
            bgcolor = "";
            for(j = 0; j < BGCOLOR_DEFAULT.length; j++) {
                if (BGCOLOR_DEFAULT[j][0] == elemClass) {
                    bgcolor = BGCOLOR_DEFAULT[j][1];
                    j = BGCOLOR_DEFAULT.length;
                }
            }
            getElem("id", PREFIX + i, null).style.backgroundColor = bgcolor;
        }
    }
}
function mMhighlightEventRange(array) {
    start = 0;
    end = array.length;
    for(i = start; i < end ; i++) {
        if ((MAX_ID > 0) && (i > MAX_ID)) {
            i = end;
        }
        else {
            getElem("id", PREFIX + array[i], null).style.backgroundColor = BGCOLOR_HIGHLIGHTED;
        }
    }
}
function mMclearEventRange(array) {
    start = 0;
    end = array.length;
    for(i = start; i < end; i++) {
        if ((MAX_ID > 0) && (i > MAX_ID)) {
            i = end;
        }
        else {
            elem = getElem("id", PREFIX + array[i], null);
            elemClass = getAttr("id", PREFIX + array[i], null, "class");
            bgcolor = "";
            for(j = 0; j < BGCOLOR_DEFAULT.length; j++) {
                if (BGCOLOR_DEFAULT[j][0] == elemClass) {
                    bgcolor = BGCOLOR_DEFAULT[j][1];
                    j = BGCOLOR_DEFAULT.length;
                }
            }
            getElem("id", PREFIX + array[i], null).style.backgroundColor = bgcolor;
        }
    }
}
function mmMhighlightEventRange(array) {
    //array is a list of pairs of start,end tags. loop through each pair as a range of integers
    numpairs = array.length / 2;
    for(h = 0; h < numpairs ; h++) {    
        start = array[2*h];
        end = array[2*h+1];
        for(i = start; i <= end ; i++) {
            getElem("id", PREFIX + i, null).style.backgroundColor = BGCOLOR_HIGHLIGHTED;
        }
    }
}
function mmMclearEventRange(array) {
    //array is a list of pairs of start,end tags. loop through each pair as a range of integers
    numpairs = array.length / 2;
    for(h = 0; h < numpairs ; h++) {    
        start = array[2*h];
        end = array[2*h+1];
        for(i = start; i <= end; i++) {
            elem = getElem("id", PREFIX + i, null);
            elemClass = getAttr("id", PREFIX + i, null, "class");
            bgcolor = "";
            for(j = 0; j < BGCOLOR_DEFAULT.length; j++) {
                if (BGCOLOR_DEFAULT[j][0] == elemClass) {
                    bgcolor = BGCOLOR_DEFAULT[j][1];
                    j = BGCOLOR_DEFAULT.length;
                }
            }
            getElem("id", PREFIX + i, null).style.backgroundColor = bgcolor;
        }
    }
}
/**
 * function used to show/hide popup "window" (div-tag)
 */
function showCalPopup(tagID) {
    getElem("id", tagID, null).style.visibility = "visible";
}
function hideCalPopup(tagID) {
    getElem("id", tagID, null).style.visibility = "hidden";
}


function fixCategories(param1,param2) {
// (1) checks/unchecks all as ViewAll is checked/unchecked  // use param='ALL' in the form for the View All choice.
// (2) unchecks ViewAll if any others get checked.  // use no param for all other choices in the xsub checkboxes
    //var catlen = document.subjectform.xsub.length; 
    var catlen = param2.xsub.length;
    args = fixCategories.arguments;
    if (param1 == 'ALL') {  //then View All was clicked, either checked or not
        if (param2.xsubALL.checked) {
            for (i=0;i<catlen;i++) {
                param2.xsub[i].checked = true ;
            }
        }
        else {
            for (i=0;i<catlen;i++) {
                param2.xsub[i].checked = false ;
            }
            param2.xsubALL.checked = false ;
        }
    }
    else {
        var flag = false;
        for (i=0;i<catlen;i++) {
            flag = param2.xsub[i].checked ;
            if (flag) break;
        }
        param2.xsubALL.checked = false ;
    }
}

