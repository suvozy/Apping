
/* - email_spam_prot.js - */
// http://www.seas.harvard.edu/portal_javascripts/email_spam_prot.js?original=1
function showPrettyEmailAddresses(){addresses=jq('.emailAddress');for(i=0;i<addresses.length;i++){text=addresses.eq(i).text();text=text.replace(/ \[ AT \] /,'@');text=text.replace(/ \[ DOT \] /g,'.');text=text.replace(/ \[ UNDERSCORE \] /g,'_');text=text.replace(/ \[ DASH \] /g,'_');html='<'+'a href="mailto:'+text+'">'+text+'<'+'/a>';addresses.eq(i).html(html)}}
jq(showPrettyEmailAddresses);
