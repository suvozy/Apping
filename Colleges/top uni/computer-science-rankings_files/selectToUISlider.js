/*
 * --------------------------------------------------------------------
 * jQuery-Plugin - selectToUISlider - creates a UI slider component from a select element(s)
 * by Scott Jehl, scott@filamentgroup.com
 * http://www.filamentgroup.com
 * reference article: http://www.filamentgroup.com/lab/update_jquery_ui_16_slider_from_a_select_element/
 * demo page: http://www.filamentgroup.com/examples/slider_v2/index.html
 * 
 * Copyright (c) 2008 Filament Group, Inc
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 *
 * Usage Notes: please refer to our article above for documentation
 *  
 * --------------------------------------------------------------------
 */


jQuery.fn.selectToUISlider = function(settings){
	var selects = jQuery(this);
	
	//accessible slider options
	var options = jQuery.extend({
		labels: 3, //number of visible labels
		tooltip: true, //show tooltips, boolean
		tooltipSrc: 'text',//accepts 'value' as well
		labelSrc: 'value',//accepts 'value' as well	,
		sliderOptions: null,
		containLabels: false
	}, settings);


	//handle ID attrs - selects each need IDs for handles to find them
	var handleIds = (function(){
		var tempArr = [];
		selects.each(function(){
			tempArr.push('handle_'+jQuery(this).attr('id'));
		});
		return tempArr;
	})();
	
	//array of all option elements in select element (ignores optgroups)
	var selectOptions = (function(){
		var opts = [];
		selects.eq(0).find('option').each(function(){
			opts.push({
				value: jQuery(this).attr('value'),
				text: jQuery(this).text()
			});
		});
		return opts;
	})();
	
	//array of opt groups if present
	var groups = (function(){
		if(selects.eq(0).find('optgroup').size()>0){
			var groupedData = [];
			selects.eq(0).find('optgroup').each(function(i){
				groupedData[i] = {};
				groupedData[i].label = jQuery(this).attr('label');
				groupedData[i].options = [];
				jQuery(this).find('option').each(function(){
					groupedData[i].options.push({text: jQuery(this).text(), value: jQuery(this).attr('value')});
				});
			});
			return groupedData;
		}
		else {return null;}
	})();	
	
	//check if obj is array
	function isArray(obj) {
		return obj.constructor == Array;
	}
	//return tooltip text from option index
	function ttText(optIndex){
		return (options.tooltipSrc == 'text') ? selectOptions[optIndex].text : selectOptions[optIndex].value;
	}
	function valuechanged(e, ui){
		var thisHandle = jQuery(ui.handle);
		//handle feedback 
		var textval = ttText(ui.value);
		thisHandle
			.attr('aria-valuetext', textval)
			.attr('aria-valuenow', ui.value)
			.find('.ui-slider-tooltip .ttContent')
				.text( textval );

		//control original select menu
		var currSelect = jQuery('#' + thisHandle.attr('id').split('handle_')[1]);
		currSelect.find('option').eq(ui.value).attr('selected', 'selected');
	}
	
	//plugin-generated slider options (can be overridden)
	var sliderOptions = {
		step: 1,
		min: 0,
		orientation: 'horizontal',
		max: selectOptions.length-1,
		range: selects.length > 1,//multiple select elements = true
		slide: valuechanged,
		change: valuechanged,
		values: (function(){
			var values = [];
			selects.each(function(){
				values.push( jQuery(this).get(0).selectedIndex );
			});
			return values;
		})()
	};
	
	//slider options from settings
	options.sliderOptions = (settings) ? jQuery.extend(sliderOptions, settings.sliderOptions) : sliderOptions;
		
	//select element change event	
	selects.bind('change keyup click', function(){
		var thisIndex = jQuery(this).get(0).selectedIndex;
		var thisHandle = jQuery('#handle_'+ jQuery(this).attr('id'));
		var handleIndex = thisHandle.data('handleNum');
		thisHandle.parents('.ui-slider:eq(0)').slider("values", handleIndex, thisIndex);
	});
	

	//create slider component div
	var sliderComponent = jQuery('<div></div>');

	//CREATE HANDLES
	selects.each(function(i){
		var hidett = '';
		
		//associate label for ARIA
		var thisLabel = jQuery('label[for=' + jQuery(this).attr('id') +']');
		//labelled by aria doesn't seem to work on slider handle. Using title attr as backup
		var labelText = (thisLabel.size()>0) ? 'Slider control for '+ thisLabel.text()+'' : '';
		var thisLabelId = thisLabel.attr('id') || thisLabel.attr('id', 'label_'+handleIds[i]).attr('id');
		
		
		if( options.tooltip === false ){hidett = ' style="display: none;"';}
		jQuery('<a '+
				'href="#" tabindex="0" '+
				'id="'+handleIds[i]+'" '+
				'class="ui-slider-handle" '+
				'role="slider" '+
				'aria-labelledby="'+thisLabelId+'" '+
				'aria-valuemin="'+options.sliderOptions.min+'" '+
				'aria-valuemax="'+options.sliderOptions.max+'" '+
				'aria-valuenow="'+options.sliderOptions.values[i]+'" '+
				'aria-valuetext="'+ttText(options.sliderOptions.values[i])+'" '+
			'><span class="screenReaderContext">'+labelText+'</span>'+
			'<span class="ui-slider-tooltip ui-widget-content ui-corner-all"'+ hidett +'><span class="ttContent"></span>'+
				'<span class="ui-tooltip-pointer-down ui-widget-content"><span class="ui-tooltip-pointer-down-inner"></span></span>'+
			'</span></a>')
			.data('handleNum',i)
			.appendTo(sliderComponent);
	});
	
	//CREATE SCALE AND TICS
	
	//write dl if there are optgroups
	if(groups) {
		var inc = 0;
		var scale = sliderComponent.append('<dl class="ui-slider-scale ui-helper-reset" role="presentation"></dl>').find('.ui-slider-scale:eq(0)');
		jQuery(groups).each(function(h){
			scale.append('<dt style="width: '+ (100/groups.length).toFixed(2) +'%' +'; left:'+ (h/(groups.length-1) * 100).toFixed(2)  +'%' +'"><span>'+this.label+'</span></dt>');//class name becomes camelCased label
			var groupOpts = this.options;
			jQuery(this.options).each(function(i){
				var style = (inc == selectOptions.length-1 || inc === 0) ? 'style="display: none;"' : '' ;
				var labelText = (options.labelSrc == 'text') ? groupOpts[i].text : groupOpts[i].value;
				scale.append('<dd style="left:'+ leftVal(inc) +'"><span class="ui-slider-label">'+ labelText +'</span><span class="ui-slider-tic ui-widget-content"'+ style +'></span></dd>');
				inc++;
			});
		});
	}
	//write ol
	else {
		var scale = sliderComponent.append('<ol class="ui-slider-scale ui-helper-reset" role="presentation"></ol>').find('.ui-slider-scale:eq(0)');
		jQuery(selectOptions).each(function(i){
			var style = (i == selectOptions.length-1 || i === 0) ? 'style="display: none;"' : '' ;
			var labelText = (options.labelSrc == 'text') ? this.text : this.value;
			scale.append('<li style="left:'+ leftVal(i) +'"><span class="ui-slider-label">'+ labelText +'</span><span class="ui-slider-tic ui-widget-content"'+ style +'></span></li>');
		});
	}
	
	function leftVal(i){
		return (i/(selectOptions.length-1) * 100).toFixed(2)  +'%';
		
	}
	

	
	
	//show and hide labels depending on labels pref
	//show the last one if there are more than 1 specified
	if(options.labels > 1) {sliderComponent.find('.ui-slider-scale li:last span.ui-slider-label, .ui-slider-scale dd:last span.ui-slider-label').addClass('ui-slider-label-show');}

	//set increment
	var increm = Math.max(1, Math.round(selectOptions.length / options.labels));
	//show em based on inc
	for(var j=0; j<selectOptions.length; j+=increm){
		if((selectOptions.length - j) > increm){//don't show if it's too close to the end label
			sliderComponent.find('.ui-slider-scale li:eq('+ j +') span.ui-slider-label, .ui-slider-scale dd:eq('+ j +') span.ui-slider-label').addClass('ui-slider-label-show');
		}
	}

	//style the dt's
	sliderComponent.find('.ui-slider-scale dt').each(function(i){
		jQuery(this).css({
			'left': ((100 /( groups.length))*i).toFixed(2) + '%'
		});
	});
	

	//inject and return 

/* patch 1 of 2 for range:"min" and range:"max" */
	if ((jQuery.inArray(options.sliderOptions.range, ['min','max']) != -1) && options.sliderOptions.values.length < 2) {
		options.sliderOptions.value = options.sliderOptions.values[0];
		options.sliderOptions.values = undefined;
	}
/* end patch 1 of 2 */

	sliderComponent
	.insertAfter(jQuery(this).eq(this.length-1))
	.slider(options.sliderOptions)
	.attr('role','application');

    if (options.containLabels) {
        sliderComponent.find('li:last').css({left:'', right:0}).find('.ui-slider-label-show').css({position:'static'});
    }
    else {
    	sliderComponent
    	.find('.ui-slider-label')
    	.each(function(){
            jQuery(this).css('marginLeft', -jQuery(this).width()/2);
    	});
    }
	//update tooltip arrow inner color
	sliderComponent.find('.ui-tooltip-pointer-down-inner').each(function(){
				var bWidth = jQuery('.ui-tooltip-pointer-down-inner').css('borderTopWidth');
				var bColor = jQuery(this).parents('.ui-slider-tooltip').css('backgroundColor');
				jQuery(this).css('border-top', bWidth+' solid '+bColor);
	});
	
/* patch 2 of 2 for range:"min" and range:"max" */
//	var values = sliderComponent.slider('values');
    var values;
    if (sliderComponent.slider('option', 'range') == true) values = sliderComponent.slider('values');
    else values = sliderComponent.slider('value');
/* end patch 2 of 2 */
	
	if(isArray(values)){
		jQuery(values).each(function(i){
			sliderComponent.find('.ui-slider-tooltip .ttContent').eq(i).text( ttText(this) );
		});
	}
	else {
		sliderComponent.find('.ui-slider-tooltip .ttContent').eq(0).text( ttText(values) );
	}
	
	return this;
};

jQuery.fn.selectToUISliderUSN = function(settings){
    if($.fn.selectToUISlider) {
        var options = {
            labels: 2,
            tooltip: true,
            tooltipSrc: "text",
            labelSrc: "text",
            containLabels: true,
            sliderOptions: {
                
            }
        };
        if (!settings) settings = {};
        if (settings.onchange) options.sliderOptions.change = settings.onchange;
        slider = $(this);
        processed = {};
        var parents = [];
        slider.each(function() {
            options.sliderOptions.range = undefined;
            var cur_id = this.id.substring(0,this.id.lastIndexOf('-'));
            var cur_obj = slider.filter('[id^=' + cur_id + ']');
            if (cur_obj.length == 1) {
                if (cur_obj.filter('[id$=min]').length) {
                    options.sliderOptions.range = 'min';
                } else if (cur_obj.filter('[id$=max]').length) {
                    options.sliderOptions.range = 'max';
                }
            }
            if (cur_obj.length && !processed[cur_id]) {
                options.sliderOptions.disabled = cur_obj[0].disabled && cur_obj[1].disabled;
                cur_obj.selectToUISlider(options).hide();
                parents.push($('.ui-slider #handle_'+cur_obj[0].name).parent())
                if (options.sliderOptions.disabled) parents[parents.length-1].addClass('disabled');
            }
            processed[cur_id] = 1;
        });
        
        
        for (var i = 0; i < parents.length; i++){
            var p = parents[i];
            /* add class for half-height tic marks */
            p.find('ol.ui-slider-scale').each(function(key, sel) {
                var tics = $(sel).children();
                for (var tic = 0; tic < tics.length; tic++) {
                    if (tic % 2) {
                        $(tics[tic]).addClass('even');
                    } else {
                        $(tics[tic]).addClass('odd');
                    }
                }
            });
        }
    }
};

