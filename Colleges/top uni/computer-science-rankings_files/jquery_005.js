/*jquery.select_skin.js */
/*
 * jQuery select element skinning
 * version: 1.0.4 (03/03/2009)
 * @requires: jQuery v1.2 or later
 * adapted from Derek Harvey code
 *   http://www.lotsofcode.com/javascript-and-ajax/jquery-select-box-skin.htm
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Copyright 2009 Colin Verot
 */


(function (jQuery) {

    jQuery.fn.select_skin = function (w) {
        return jQuery(this).each(function(i) {
            s = jQuery(this);

            if (!s.attr('multiple')) {
                // create the container
                s.wrap('<div class="cmf-skinned-select"></div>');
                c = s.parent();
                c.children().before('<div class="cmf-skinned-text">&nbsp;</div>').each(function() {
                    if (this.selectedIndex >= 0) jQuery(this).prev().text(this.options[this.selectedIndex].text)
                });
                c.width(s.outerWidth()-2);
                c.height(s.outerHeight()-2);

                // skin the container
                c.css('background-color', s.css('background-color'));
                c.css('color', s.css('color'));
                c.css('font-size', s.css('font-size'));
                c.css('font-family', s.css('font-family'));
                c.css('font-style', s.css('font-style'));
                c.css('position', 'relative');

                // hide the original select
                // s.css( { 'opacity': 0,  'position': 'relative', 'z-index': 100 } );
                s.css( { 'opacity': 0,  'position': 'absolute', 'z-index': 100 } );

                // get and skin the text label
                var t = c.children().prev();
                t.height(c.outerHeight()-s.css('padding-top').replace(/px,*\)*/g,"")-s.css('padding-bottom').replace(/px,*\)*/g,"")-t.css('padding-top').replace(/px,*\)*/g,"")-t.css('padding-bottom').replace(/px,*\)*/g,"")-2);
                t.width(c.innerWidth()-s.css('padding-right').replace(/px,*\)*/g,"")-s.css('padding-left').replace(/px,*\)*/g,"")-t.css('padding-right').replace(/px,*\)*/g,"")-t.css('padding-left').replace(/px,*\)*/g,"")-c.innerHeight());
                // t.css( { 'opacity': 100, 'overflow': 'hidden', 'position': 'absolute', 'text-indent': '0px', 'z-index': 1, 'top': 0, 'left': 0 } );
                t.css( { 'overflow': 'hidden', 'position': 'absolute', 'z-index': 1, 'top': 0, 'left': 0 } );

                // add events
                c.children().click(function() {
                    t.text( (this.options.length > 0 && this.selectedIndex >= 0 ? this.options[this.selectedIndex].text : '') );
                });
                c.children().change(function() {
                    t.text( (this.options.length > 0 && this.selectedIndex >= 0 ? this.options[this.selectedIndex].text : '') );
                });
             }
        });
    }
    jQuery(document).ready(function() {

        jQuery(".select_skin")
    
            .mouseover(function(){
                jQuery(this)
                    .data("origWidth", jQuery(this).css("width"))
                    .css("width", "auto")
                    .css("min-width", "100%"); // make 100% in case options are shorter than select box 
            })
    
            .change(function(){
                jQuery(this).css("width", jQuery(this).data("origWidth"));
            });
    
    });
}(jQuery));
