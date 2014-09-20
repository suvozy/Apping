/** 
 * Megamenu
 * @see jquery.megamenu.js
 * @blame Martin Tomsik <m.tomsik@qs.com>
 */

/**
 * Menu arrow pic change on mouse over/leave
 */
$(document).ready( function(){  
    $(".megamenu2 li img").mouseover(function() {
        $(this).attr("src", $(this).attr("srcHover"));
    });
    $(".megamenu2 li img").mouseleave(function() {
        $(this).attr("src", $(this).attr("srcNormal"));
    });
});

