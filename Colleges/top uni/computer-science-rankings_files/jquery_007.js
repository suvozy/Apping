/**
 * jQuery gMap
 *
 * @url		http://gmap.nurtext.de/
 * @author	Cedric Kastner <cedric@nur-text.de>
 * @version	1.0.4
 */
(function($)
{
	// Main plugin function
	$.fn.gMap = function(options)
	{
		// Check if the browser is compatible with Google Maps
		if (!window.GBrowserIsCompatible || !GBrowserIsCompatible()) return this;
		
		// Build main options before element iteration
		var opts = $.extend({}, $.fn.gMap.defaults, options);
    
		// Iterate each matched element
		return this.each(function()
		{
			// Create new map and set initial options
			$gmap = new GMap2(this);
			
			// Try to center to the first marker
			if (!opts.latitude && !opts.longitude)
			{
				// Check for at least one marker
				if ($.isArray(opts.markers) && opts.markers.length >= 1)
				{
					// Center to the first marker
					opts.latitude  =  opts.markers[0].latitude;
					opts.longitude =  opts.markers[0].longitude;
				}
				else
				{
					// Center Earth and lower zoom
					opts.latitude = 34.885931;
					opts.longitude = 9.84375;
					opts.zoom = 2;
					
				}
				
			}
			
			// Center the map and set the maptype
			$gmap.setCenter(new GLatLng(opts.latitude, opts.longitude), opts.zoom);
			//$gmap.setMapType(opts.maptype);
			
			// Check for custom map controls
			if (opts.controls.length == 0)
			{
				// Default map controls
				$gmap.setUIToDefault();
				
			}
			else
			{
				// Add custom map controls
				for (var i = 0; i < opts.controls.length; i++)
				{
					// Eval is evil - I know. ;)
					eval('$gmap.addControl(new ' + opts.controls[i] + '());');
					
				}
				
			}
						
			// Check if scrollwheel should be enabled when using custom controls
			if (opts.scrollwheel == true && opts.controls.length != 0) { $gmap.enableScrollWheelZoom(); }
									
			// Add all map markers
			for (var j = 0; j < opts.markers.length; j++)
			{
				// Get the options from current marker
				marker = opts.markers[j];
				
				// Create new icon
				gicon = new GIcon();
				
				// Set icon properties from global options
				gicon.image = opts.icon.image;
				gicon.shadow = opts.icon.shadow;
				gicon.iconSize = ($.isArray(opts.icon.iconsize)) ? new GSize(opts.icon.iconsize[0], opts.icon.iconsize[1]) : opts.icon.iconsize;
				gicon.shadowSize = ($.isArray(opts.icon.shadowsize)) ? new GSize(opts.icon.shadowsize[0], opts.icon.shadowsize[1]) : opts.icon.shadowsize;
				gicon.iconAnchor = ($.isArray(opts.icon.iconanchor)) ? new GPoint(opts.icon.iconanchor[0], opts.icon.iconanchor[1]) : opts.icon.iconanchor;
				gicon.infoWindowAnchor = ($.isArray(opts.icon.infowindowanchor)) ? new GPoint(opts.icon.infowindowanchor[0], opts.icon.infowindowanchor[1]) : opts.icon.infowindowanchor;
				
				if (marker.icon)
				{
					// Overwrite global options with ther marker one's
					gicon.image = marker.icon.image;
					gicon.shadow = marker.icon.shadow;
					gicon.iconSize = ($.isArray(marker.icon.iconsize)) ? new GSize(marker.icon.iconsize[0], marker.icon.iconsize[1]) : marker.icon.iconsize;
					gicon.shadowSize = ($.isArray(marker.icon.shadowsize)) ? new GSize(marker.icon.shadowsize[0], marker.icon.shadowsize[1]) : marker.icon.shadowsize;
					gicon.iconAnchor = ($.isArray(marker.icon.iconanchor)) ? new GPoint(marker.icon.iconanchor[0], marker.icon.iconanchor[1]) : marker.icon.iconanchor;
					gicon.infoWindowAnchor = ($.isArray(marker.icon.infowindowanchor)) ? new GPoint(marker.icon.infowindowanchor[0], marker.icon.infowindowanchor[1]) : marker.icon.infowindowanchor;
					
				}
								
				// Create a new marker on the map
				gmarker = new GMarker(new GPoint(marker.longitude, marker.latitude), gicon);
				
				// Only display info window if the marker contains a description
				if (marker.html)
				{
					// Bind the info window to marker
					gmarker.bindInfoWindowHtml(opts.html_prepend + marker.html + opts.html_append);
					
					// Add overlay if marker was created and check if popup should be shown when map is loaded
					if (gmarker) { $gmap.addOverlay(gmarker); }
					if (marker.popup == true) { gmarker.openInfoWindowHtml(opts.html_prepend + marker.html + opts.html_append); }
					
				}
				else
				{
					// Add overlay marker
					if (gmarker) { $gmap.addOverlay(gmarker); }
					
				}
				
			}
			
		});
		
	}
		
	// Set default settings
	$.fn.gMap.defaults =
	{
		latitude:				0,
		longitude:				0,
		zoom:					6,
		markers:				[],
		controls:				[],
		scrollwheel:			true,
		//maptype:				G_NORMAL_MAP,
		html_prepend:			'<div class="gmap_marker">',
		html_append:			'</div>',
		icon:
		{
			image:				"http://www.google.com/mapfiles/marker.png",
			shadow:				"http://www.google.com/mapfiles/shadow50.png",
			iconsize:			[20, 34],
			shadowsize:			[37, 34],
			iconanchor:			[9, 34],
			infowindowanchor:	[9, 2]
			
		}
		
	}
	
})(jQuery);