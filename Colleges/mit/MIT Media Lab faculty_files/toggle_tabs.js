/**
 * @file
 * Toggle Tabs
 * 
 * Gives you a button to press that shows/hides editing tabs. Saves your
 * show/hide state in a cookie.
 *
 * looks for tabs in .tabs.primary and will put a hover on either
 * #content-header or the parent element of the tabs.
 * 
 * @author
 * Steve Pomeroy <stevep@media.mit.edu>
 */
jQuery(document).ready(function(){
    var tabs = $('.tabs.primary');
    var cookie_name = 'drupal-toggle-tabs';
    if($.cookie(cookie_name) == 'hide'){
        tabs.show();
        $('#block-user-1').show();
        $('#block-devel-1').show();
    }
    // build the control
    var control = $('<div title="toggle editing tabs" class="toggle-tabs" id="toggle-tabs-control">toggle editing tabs</div>');
    control.hide();
    control.click(function(){
        // done this way to work around the missing callback on toggle()
        if(tabs.is(':hidden')){
            tabs.show('slow');
            $('#block-user-1').show('slow');
            $('#block-devel-1').show('slow');
            $.cookie( cookie_name, 'show', { path: '/' } );

        }else{
            tabs.hide('slow');
            $('#block-user-1').hide('slow');
            $('#block-devel-1').hide('slow');
            $.cookie( cookie_name, 'hide' , { path: '/' });
        }
    });
    // this is a zen-specific trigger that works better than 
    // the tab's parent.
    var hover_trigger = $('#content-header');
    if(hover_trigger.length == 0){
        hover_trigger = tabs.parent();
    }
    // check the CSS for this hook
    hover_trigger.addClass('toggle-tabs-trigger');
    //tabs.before(control);
    if( tabs.length ){
        $('body').append(control);
    }
});
