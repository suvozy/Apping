if(!Array.indexOf){Array.prototype.indexOf=function(b){for(var a=0;a<this.length;a++){if(this[a]==b){return a}}return -1}}$(document).ready(function(){$("table.line-h").each(function(){$("tr:last",this).addClass("lastrow")});$("table.line-v").each(function(){$("tr",this).each(function(){$("th:last",this).addClass("lastColumn");$("td:last",this).addClass("lastColumn")})});$("table.data-table > thead > tr:nth-child(2)").each(function(){$(this).addClass("subhead").addClass("subhead-first")});$("table.data-table > thead > tr:nth-child(n+3)").each(function(){$(this).addClass("subhead").addClass("subhead-nth")});$("table.columnborder").each(function(){$("thead tr",this).each(function(){$("th:last",this).addClass("bottom-row")});var a=new Array();$("thead tr:first th",this).each(function(){a.push(parseInt($(this).attr("colspan")))});var c=new Array();var b=0;$.each(a,function(){b+=this;c.push(b-1)});$("tr th, tr td",this).each(function(){var e=$(this);var h=$(e).parent("tr");var g=e[0].cellIndex;var i=h[0].sectionRowIndex;var d=c[c.length-1];var f=0;e.prevUntil("tr").each(function(){f+=$(this).attr("colspan")});f=f+$(this).attr("colspan")-1;if(c.indexOf(f)>-1){$(this).addClass("primaryborder")}else{$(this).addClass("secondaryborder")}});$("tbody tr:last",this).addClass("bottom-row")});$("table.subsections").each(function(){$("tbody tr.section:first td").css("border-top","0");$("tbody tr.section").prev("tr").addClass("lastbeforesection");$("tbody tr th").removeClass("lastColumn").addClass("normal")});$("table.rowheadings").each(function(){$("tbody tr",this).each(function(){$("td:first",this).addClass("heading")});$("tbody tr:last",this).each(function(){$("td:first",this).css("border-bottom","0")})});$("table.stripe-h tbody tr").each(function(){var d=$(this);var a=$("td:first-child",this).attr("rowspan");if(a>1){spanCount=a;if(d.prev().attr("class")==undefined){d.addClass("noshade");for(var c=0;c<a-1;c++){d.nextAll().eq(c).addClass("noshade")}}else{var b="shade";if(d.prev().hasClass("shade")){b="noshade"}d.addClass(b);for(var c=0;c<a-1;c++){d.nextAll().eq(c).addClass(b)}}}else{if(d.prev().attr("class")==undefined){d.addClass("noshade")}else{if(!d.hasClass("shade")&&!d.hasClass("noshade")){var b="shade";if(d.prev().hasClass("shade")){b="noshade"}d.addClass(b)}}}});$("table.stripe-v td").each(function(){var a=$(this);var b=a[0].cellIndex;if(b%2){$(this).addClass("shade")}})});