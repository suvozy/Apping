// Minified using Javascript Aggregator - see /sites/www.media.mit.edu/files/js/js_e1a59ec367f039bae0476bf0c76ee352.js for original source including licensing information.

Drupal.behaviors.gaTrackerAttach=function(context){$('a',context).click(function(){var ga=Drupal.settings.googleanalytics;var isInternal=new RegExp("^(https?):\/\/"+window.location.host,"i");var isInternalSpecial=new RegExp("(\/go\/.*)$","i");var isDownload=new RegExp("\\.("+ga.trackDownloadExtensions+")$","i");try{if(isInternal.test(this.href)){if(ga.trackDownload&&isDownload.test(this.href)){var extension=isDownload.exec(this.href);pageTracker._trackEvent("Downloads",extension[1].toUpperCase(),this.href.replace(isInternal,''));}
else if(isInternalSpecial.test(this.href)){pageTracker._trackPageview(this.href.replace(isInternal,''));}}
else{if(ga.trackMailto&&$(this).is("a[href^=mailto:]")){pageTracker._trackEvent("Mails","Click",this.href.substring(7));}
else if(ga.trackOutgoing){pageTracker._trackEvent("Outgoing links","Click",this.href);}}}catch(err){}});};