if (window.console !== undefined) {
    window.alert = window.console.log;
}

var Manager = function() {
    this.VERSION = "3.0";
    this.modules = [];
    this.errors = [];

    _metaTag = function(tagName) {
        var tag = $('meta[name="' + tagName + '"]').attr('content');
        if (!tag) {
            return 'Uncategorized';
        }
        else {
            return tag;
        }
    };
    this.site = _metaTag('site');
    this.zone = _metaTag('zone');

    this.load = function(module) {
        var usngooglemapkey = 'ABQIAAAAUL-WRzPk3uGRWwlo4MpYxRQKRiq8lNJaxupx8aaQXwDifYaUYRThUZmJAgcBiY-MuW1aml-WpYZ6UQ';
        var rrgooglemapkey = 'ABQIAAAAUL-WRzPk3uGRWwlo4MpYxRRC8LpXqa7dvOnGnzV1_MR_CWLS6RREEnb26TGQZtPbc5xFU7I-tD04gA';
        var googlemapkey = (location.hostname.indexOf('rankingsandreviews.com') >= 0 ? rrgooglemapkey : usngooglemapkey);
        var includes = {
            jqueryui: "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/jquery-ui.min.js",
            swfobject: "http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",
            ckeditor: "/static/packages/ckeditor/ckeditor.js",
            googlemaps: "http://maps.google.com/maps?file=api&v=2&key=" + googlemapkey
            /* the API key for googlemaps can be used for all of *.usnews.com */
            /*
            ads: "http://www.usnews.com/usnews/v3/scripts/ads.js",
            printing: "http://www.usnews.com/usnews/v3/scripts/print.js",
            socialBookmarking: "http://www.usnews.com/usnews/v3/scripts/shareLinks.js",
            striping: "http://www.usnews.com/usnews/v3/scripts/stripe.js",
            tabs: "http://www.usnews.com/usnews/v3/scripts/tabs.js",
            slider: "http://www.usnews.com/usnews/v3/scripts/slide.js",
            effects: "http://www.usnews.com/usnews/v3/scripts/effects.js",
            analyticsExtensions: "http://www.usnews.com/usnews/v3/scripts/analyticsCustom.js",
            windows: "http://www.usnews.com/usnews/v3/scripts/window.js",
            technorati: "http://www.usnews.com/usnews/v3/scripts/technorati.js",
            gallery: "http://www.usnews.com/usnews/v3/scripts/ibox.js"
            */
        };
        // var mod = document.createElement('script');
        var mod = {};
        mod.id = module.replace(/\./g,'-');
        mod.type = 'text/javascript';
        mod.src = includes[module] ? includes[module] : '/static/scripts/jquery/' + module + '.js';
        // (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(mod);
        document.write(unescape('%3Cscript id="' + mod.id + '" type="' + mod.type + '" src="' + mod.src + '"%3E%3C/script%3E'));

        this.modules.push(module);
    };

    /* tabbify widget clusters */
    _getClusterId = function(elem) {
        var cluster_id = false;
        $($(elem).attr('class').split(' ')).each(function(){
            if (/^cluster:/.test(this)) {
                cluster_id = this.substr(8);
            }
        });
        return cluster_id;
    };
    
    this.tabbify = function() {
        var widgets = $('dl.widget');
        widgets.filter('[class*=cluster:]').each(function() {
            var widget = this;
            var tab_text = $.trim($(widget).children('dt:first').text());
            var tab_id = tab_text.toLowerCase().replace(/[^0-9a-z]/g, '-');
            var cluster_id = _getClusterId(widget);
            if ($('dl.cluster\\:' + cluster_id).length >= 2) {
                if ($('ul.cluster\\:' + cluster_id ).length === 0) {
                    $(widget).before('<ul class="cluster\:' + cluster_id + ' cluster-tabs"></ul>');
                }
                $('ul.cluster\\:' + cluster_id ).append('<li><a id="' + tab_id + '">' + tab_text + '</a></li>');
                $(widget).addClass('widget-tabbed');
            }
        });
        $('ul[class*=cluster:]').each(function() {
            var cluster_id = _getClusterId(this);
            $(this).find('a').each(function(idx) {
                var tabbed_widget = widgets.filter('[class*=cluster\:' + cluster_id + ']').eq(idx);
                $(this).click(function() {
                    $(this).parent().siblings().removeClass('tab-selected');
                    $(this).parent().addClass('tab-selected');
                    widgets.filter('[class*=cluster\:' + cluster_id + ']').hide();
                    tabbed_widget.show();
                });
            });
            $(this).children('li:first').addClass('tab-selected').children('a:first').trigger('click');
        });
    };
};


var newwindow = "";
function openWindow(url,width,height) 
{
	if (!newwindow.closed && newwindow.location) { newwindow.location.href = url; }
	else 
	{
		params = (arguments[3])?','+arguemnts[3]:',resizable=yes,scrollbars=no,status=no,toolbar=no';
		var windowOptionsString = [
			'height=',
			height,
			',width=',
			width,
			params
		];
		var windowOptionsString = windowOptionsString.join('');
		newwindow=window.open(url,'window',windowOptionsString);
		if (!newwindow.opener) newwindow.opener = self;
	}
	if (window.focus) { newwindow.focus(); }
	if (this != window) { return false; }
}
function openWindowTMP(url,width,height) 
{
	if (!newwindow.closed && newwindow.location) { newwindow.location.href = url; }
	else 
	{
		params = (arguments[3])?','+arguemnts[3]:',resizable=yes,scrollbars=no,status=no,toolbar=no';
		var windowOptionsString = [
			'height=',
			height,
			',width=',
			width,
			params
		];
		var windowOptionsString = windowOptionsString.join('');
		newwindow=window.open(url,'window',windowOptionsString);
		if (!newwindow.opener) newwindow.opener = self;
	}
	if (window.focus) { newwindow.focus(); }
	if (this != window) { return false; }
}
