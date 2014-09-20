/* College Compass promo */
// We will use a straightforward hyperlink instead of requestpremium() for now.
/*
$(document).ready(function() {
    if(window.FooBar !== undefined) {
        $('a.request-premium').click(function() {
            FooBar.requestpremium();
            return false;
        });
    } else {
        window.console.log('FooBar did not load; cannot add requestpremium() action.');
    }
});
*/

/* collapsible college compass promos */
$(document).ready(function() {
    var to_collapse = $('.college-scout-promo');
    if (to_collapse.length) {
        to_collapse.each(function () {
            $(this).before($('<a class="collapsible-controller">More</a>'
            ).addClass('collapsed'
            ).click(function() {
                $(this).next('div').slideToggle('fast');
                $(this).toggleClass('collapsed');
                return false;
            }));
        });
        $(to_collapse).hide();
    }
});

/* collapsible datafields */
$(document).ready(function() {
    var fields = [
        {name: 'v_concentration_offered_list',
         count_elem: 'td',
         display_count: true,
         min_count: 5},
        {name: 'v_edu_programs',
         count_elem: 'td',
         display_count: true,
         min_count: 5}
    ];

    $.each(fields, function() {
        var $self = $('tr.' + this.name + '-extra-row');
        var item_count = $self.find('table.zebra-stripe ' + this.count_elem).length;
        if (item_count > this.min_count) {
            var $control = $self.prev().children('td').eq(0);
            $control.wrapInner('<a class="collapsible-controller" />').children('a').eq(0
            ).addClass('collapsed'
            ).click(function() {
//                $self.toggle();
//  http://www.code-styling.de/english/jquery-132-causes-problems-at-ie-8
                  $self.toggle($self.css('display') == 'none');
                $(this).toggleClass('collapsed');
                return false;
            });
            if (this.display_count) {
                $control.prepend('<span class="collapse-count">(' + item_count + ')</span>');
            }
            $self.hide();
        }
    });
});

/* collapse specialties on:
   * non big 5 directory pages 
   * big 5 overview directory page
   * big 5 ranking directory page
*/
// based on collapsible datafields code above
$(document).ready(function() {
    var min_count = 1;
    var display_count = true;
    $('body.project-grad_schools-other p.specialties, body.project-grad_schools-school-index p.specialties, body.project-grad_schools-school-ranking p.specialties').each(function() {
        var $self = $(this);
        var $to_toggle = $self.nextUntil();
        var item_count = $to_toggle.length;
        if (item_count >= min_count) {
            var $control = $self;
            $control.wrapInner('<a class="collapsible-controller" />').children('a').eq(0
            ).addClass('collapsed'
            ).click(function() {
                  $to_toggle.toggle($to_toggle.css('display') == 'none');
                $(this).toggleClass('collapsed');
                return false;
            });
            if (display_count) {
                $control.prepend('<span class="collapse-count">(' + item_count + ')</span>');
            }
            $to_toggle.hide();
        }
    });
});

/* tooltips */
/* fix U.S. News style in tooltips */
$(document).ready(function() {
    $('span.rankings-score-rnp span[title], span.rankings-score-unranked span[title]').each(function () {
        this.title = this.title.replace(/U\.S\. News/g, '<em>U.S. News</em>');
    });
});

/* create tooltips */
$(document).ready(function() {
    if($.fn.cluetip) {
        var options = {
            splitTitle: ' | ',
            positionBy: 'mouse',
            tracking: true
        };
        $('table.fields tr[title]').cluetip(options);

        // for rankings score
        $('span.rankings-score span[title!=""]').cluetip(options);
        $('span.rankings-score-rnp span[title!=""]').cluetip(options);
        $('span.rankings-score-unranked span[title!=""]').cluetip(options);
    }
});

/* create tooltips for unlinkable truncated urls */
$(document).ready(function() {
    if($.fn.cluetip) {
        $('span.full-url').cluetip({
            cluetipClass: 'full-url',
            splitTitle: ' | ',
            arrows: true,
            dropShadow: false,
            width: '445px',
            sticky: true,
            positionBy: 'fixed',
            topOffset: 25,
            leftOffset: -227,
            onShow: function(ct, c){
              var ct_title = ct.find('h3');
              ct_title.replaceWith('<input type="text" readonly="readonly" value="' + ct_title.text() + '" />');
              ct_title = ct.find('input');
              ct_title.focus(function() {
                  this.select();
              }).mouseup(function(e){
                  e.preventDefault();
              }).trigger('focus');
            }
        });
    }
});


/* specialty */
$(document).ready(function() {
    if ($.fn.menu) {
        $('.fg-menu ul').hide();
        $('.fg-menu .current').addClass('current-js').menu({
            'content': '<div>' + $('.fg-menu ul').html() + '</div>',
            'showSpeed':0,
            'width':380
        });
        if($('.fg-menu .current').length == 1) {
            $(window).resize(function() {
                var current_left = $('.fg-menu .current').offset().left;
                //window.console.log(current_left);
                $('.positionHelper').css({'left': current_left + 'px'});
            });
        }
    }
});

/* dl.specialtyrankings with dd.more-specialties */
$(document).ready(function() {
    if ($('dl.specialtyrankings dd.more-specialties').length) {
        $('dl.specialtyrankings').css({'overflow': 'visible'});
        $('dl.specialtyrankings p.featured-specialties').show();
        $('dl.specialtyrankings dd.more-specialties p.more').wrapAll('<div class="all-specialties" />');
        $('dl.specialtyrankings .all-specialties').before('<a class="more more-specialties" href="#">More specialties</a>');
        $('a.more-specialties').click(function() {
            $(this).next('.all-specialties').toggle();
            $(this).toggleClass('more-specialties-collapsed');
            return false;
        });
        $('a.more-specialties').trigger('click');
    }
});

/* add to saved schools links */
$(document).ready(function() {
    $('dl.save-compare a.add').click(function(){
        if (window['FooBar'] && FooBar.initialized && this.href){
            var href = this.href.split('/');
            FooBar.saveschool(href[href.length-1]);
        }
        return false;
    });
});

//foobar
$(document).ready(function(){
    if (window['FooBar']){
        //ensure we have a placeholder.  do this before any foobar code so event handlers will be triggered.
        var placeholder = $('#foobar');
        if (!placeholder.length) placeholder = $('<div/>').attr('id', 'foobar').appendTo($('#footer'));
        //logout/login links in the banner
        var buttons = $('.foobar-login');
        var greetings = $('.foobar-greeting');
        /*$('.foobar-login').click(function(){
            if (FooBar.initialized){
                if (FooBar.isloggedin()) FooBar.dologout();
                else FooBar.dologin();
            }
            return false;
        });*/
        //show the name, etc in the header
        $('#foobar').bind('foobarinit', function(){
            if (FooBar.isloggedin()){
                greetings.show();
                greetings.children('span').html(FooBar.getname());
                buttons.hide().filter('.logout').show();
            } else {
                greetings.hide();
                buttons.show().filter('.logout').hide();
            }
        });
        //engage
        FooBar.init(placeholder, '/toolbar');
    }
});

//save school checkboxes
$(document).ready(function() {
    $('#foobar').bind('foobarinit', function() {
        $('table.ranking-data .saveschool').each(function(){
            if (FooBar.issaved(this.value)) this.checked = true;
            else this.checked = false;
        }).click(function(event){
            if (this.checked) FooBar.saveschool(this.value);
            else FooBar.removeschool(this.value);
        });
    });
});

/* kaplan sponsored scores and dialog */
$(document).ready(function() {
  function updateTips( t, tips ) {
    tips
      .text( t )
      .addClass( "ui-state-highlight" );
    setTimeout(function() {
      tips.removeClass( "ui-state-highlight", 1500 );
    }, 500 );
  }
  function checkLength( o, n, min, max, tips ) {
    if ( o.val().length > max || o.val().length < min ) {
      o.addClass( "ui-state-error" );
      updateTips( "Length of " + n + " must be between " +
        min + " and " + max + ".", tips );
      return false;
    } else {
      return true;
    }
  }
  function checkRegexp( o, regexp, n, tips ) {
    if ( !( regexp.test( o.val() ) ) ) {
      o.addClass( "ui-state-error" );
      updateTips( n, tips );
      return false;
    } else {
      return true;
    }
  }
  if (document.location.hostname.indexOf('.rankingsandreviews.com') !== -1 && $.cookie !== undefined) {
    var cookie_vals = {
      'permanent': $.cookie('usn_edu_test_prm'), // permanent is a misnomer; technically it expires in a year.
      'session': $.cookie('usn_edu_test_prm_session')
    };
    $.each(cookie_vals, function(k, v) {
      if (v) {
        cookie_vals[k] = v.split('|');
      } else {
        cookie_vals[k] = [];
      }
    });
    var kaplan_hovered = false;
    var school_name = document.location.href.split('/')[4].split('-')[1];
    var school_test_hash = $.parseJSON('{"business": "GMAT", "education": "GRE", "engineering": "GRE", "law": "LSAT", "medical": "MCAT"}');
    var test_name = school_test_hash[school_name];
    var kaplan_dialog = $('<div></div>');
    kaplan_dialog.html('<p>' +
      'Are you interested in improving your ' + test_name +
      ' score and becoming a more competitive applicant? ' +
      'Sign up here to get free info on Kaplan\'s programs, complimentary ' + school_name +
      ' school events and webinars.' +
      '</p>' +
      '<form>' +
        '<fieldset>' +
          '<label for="email">Enter Email</label>' +
          '<input type="text" name="email" id="email" value="" class="text ui-widget-content ui-corner-all" />' +
          '<p class="validateTips"></p>' +
        '</fieldset>' +
        '</form>')
      .dialog({
        autoOpen: false,
        title: 'Kaplan Test Prep',
        width:230,
        dialogClass: 'kaplan-dialog',
        modal: true,
        resizable: false,
        buttons: {
          "Sign up": function() {
            var email = $( "#email" ),
              allFields = $( [] ).add( email ),
              tips = $( ".validateTips" );
            var bValid = true;
            allFields.removeClass( "ui-state-error" );
            bValid = bValid && checkLength( email, "Email", 6, 80 , tips);
            // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
            bValid = bValid && checkRegexp( email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "Email address must be valid", tips );
            if ( bValid ) {
              $.post(
                "/best-graduate-schools/kaplan/interest",
                {
                  'email': $( "#email" ).val(),
                  'test': test_name,
                  'category': school_name
                },
                function(data) {
                  if(data) {
                    cookie_vals.permanent = cookie_vals.permanent.concat([test_name]);
                    $.cookie('usn_edu_test_prm', cookie_vals.permanent.join('|'), { expires: 365, path: '/', domain: '.rankingsandreviews.com' });
                    kaplan_dialog.html('<p>' +
                          'Thank you. Kaplan will send you information on their complimentary '+ school_name +
                          ' events, webinars and programs shortly.' +
                        '</p>')
                      .dialog("option", {
                        "buttons": {},
                        "hide": {
                          effect:"fade", 
                          duration:5000, 
                          easing:"easeInExpo"
                        }
                      })
                      .dialog('close');
                  } else {
                    updateTips('Server error. Please try again later.', tips);
                    return false;
                  }
                }
              );
            }
          }
        }
      });
    kaplan_dialog.find('form').submit(function() {return false;});
    var kaplan_link = $('<a />')
      .addClass('kaplan-link')
      .hover(function() {
        if (!kaplan_hovered && $.inArray(test_name, cookie_vals.permanent.concat(cookie_vals.session)) === -1) {
          kaplan_dialog.dialog('open');
          cookie_vals.session = cookie_vals.session.concat([test_name]);
          $.cookie('usn_edu_test_prm_session', cookie_vals.session.join('|'), { path: '/', domain: '.rankingsandreviews.com' });
        }
        kaplan_hovered = true;
        return false;
      }).click(function() {
        if ($.inArray(test_name, cookie_vals.permanent) === -1) {
          kaplan_dialog.dialog('open');
        }
        return false;
      });
    $('.ui-widget-overlay').live('click', function() {
      kaplan_dialog.dialog('close');
    });
    if ($.inArray(test_name, cookie_vals.permanent) === -1) {
      $('td.b_test_score, td.c_mean_verbal_gre, td.c_mean_quant_gre, td.ave_gre_quant, td.all_lsat_combined, td.test_score').not(':has(a)').wrapInner(kaplan_link);
    }
  }
});
