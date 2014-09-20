var FooBar = function($){
    var factoids = [
        'Beloit College in Beloit, WI is home to the world\'s largest can of chili. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'Spelman is the oldest historically black college for women in America. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'There are no grades on tests at Reed College if students get over a \'C\'. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'USC\'s campus in L.A. is in movies like The Graduate and Forrest Gump. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'USC film school graduates include Judd Apatow and George Lucas. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'Penn State students dance for 46 hours fight pediatric cancer. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'At Clearwater Christian College, 100 percent of students join a frat or sorority. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'Abilene Christian\'s newspaper was the first college paper published on the iPad. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'Penn\'s Franklin Field is the oldest college football stadium still in use. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'Penn started the nation\'s first medical and business schools. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'The MIT $100K Entrepreneurship Challenge awards students\' business plans. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'Bob Barker donated $1 million to UVA for an animal law program. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'In some dorms at MIT, students can have cats and can paint their walls. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'About 10 percent UVA Darden graduate students are military veterans. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'The UCLA Lab School experiments with education practices for grades K-12. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'More than 30 engineering programs at USC are also offered online. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'At Yale Law, the only grades given are Honors, Pass, Low Pass, or Fail. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'Boston College has a Catholic Leadership Program for grad students. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'Barack and Michelle Obama both graduated from Harvard Law School. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>',
        'Amherst, known as the singing college, has many a capella groups. <a href="http://www.usnews.com/usnews/store/college_compass.htm?src=bar" class="highlight-blue">Check out U.S. News College Compass for more!</span>'
    ];
    
    var is_iOS = (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') ? true : false;

    var iframehelper = function(){
        //url param can include "@@server@@" which will be replace by "-dev.", "-stag.", etc.
        //ex: http://static@@server@@usnews.com
        var expandserver = function(url){
            var server = /dev.|stag.|sand1.|sand2.|sand3.|sand4./.exec(document.location.href);
            if (server) server = '-'+server[0].replace(/sand[1-4]/, 'dev');
            else server = '.';
            return url.replace('@@server@@', server);
        };
        var transport = 0;
        return {
            expandserver:expandserver,
            clearpopup:function(){
                transport.destroy();
            },
            //url param can include "@@server@@" which will be replace by "-dev.", "-stag.", etc.
            makepopup:function(url, iframeclass, overlayclass, continuation, args){
                url = escape(expandserver(url));
                var server = expandserver('https://secure@@server@@usnews.com');//url.substring(0, url.indexOf('.com')+'.com'.length);
                if ($('.'+(iframeclass || 'loginiframe')).length) return;
                var $overlay = $('<div/>').
                    html('&nbsp;').
                    addClass(overlayclass || 'loginoverlay').
                    appendTo('body');
                var $ifr_container = $('<div/>').
                    addClass(iframeclass || 'loginiframe').
                    appendTo('body');
                var $ifr = 0;
                transport = new easyXDM.Socket({
                    remote: server+'/scripts/iframehost.html?page='+url,
                    container: $ifr_container[0],
                    onMessage: function(message, origin){
                        $ifr = $ifr_container.find('iframe:first');
                        message = message.split(':');
                        switch (message[0]){
                            case 'size':
                                if (message.length == 2){
                                    var $body = $('body');
                                    var dim = message[1].split('x');
                                    $ifr.css({width:dim[0], height:dim[1]});
                                    $ifr.parent().css({left:Math.floor($body.width()/2)-parseInt(Math.floor(dim[0]/2))})
                                }
                                break;
                            case 'sizereset':
                                $ifr.css({width:'', height:''});
                                break;
                            case 'close':
                                transport.destroy();
                                $overlay.remove();
                                $ifr_container.remove();
                                if (continuation) continuation.apply(null, args || [message]);
                                break;
                            case 'logout':
                                fb.requestlogout();
                                break;
                        }
                        $ifr.trigger(message[0]);
                    }
                });
            }
        }
    }();
    var configuresliders = function($el){
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
        if (!$el) $el = $('*');
        processed = {};
        $el.find('select.slider').each(function() {
            options.sliderOptions.range = undefined;
            var cur_id = this.id.substring(0,this.id.lastIndexOf('-'));
            var cur_obj = $el.find('select.slider').filter('[id^=' + cur_id + ']');
            if (cur_obj.length == 1) {
                if (cur_obj.filter('[id$=min]').length) {
                    options.sliderOptions.range = 'min';
                } else if (cur_obj.filter('[id$=max]').length) {
                    options.sliderOptions.range = 'max';
                }
            }
            if (cur_obj.length && !processed[cur_id]) {
                cur_obj.selectToUISlider(options).hide();
            }
            processed[cur_id] = 1;
        });

        /* add class for half-height tic marks */
        $el.find('ol.ui-slider-scale').each(function(key, sel) {
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
    };
    var configureselectskin = function($el){
        if(!($.browser.msie && $.browser.version == '6.0') && $.fn.select_skin) {
            $el.find('select.select_skin').select_skin();
        }
    };
    var configureclearfield = function($el){
        if($.fn.clearField) {
            $el.find('input.clearfield').clearField({ blurClass: 'clearfield-blurred', activeClass: 'clearfield-focused' });
        }
    };
    var configurejhtmlarea = function($el){
        var area = $el.find('textarea.jHtmlArea');
        if (area.length) {
            if ($.fn.htmlarea && !is_iOS){
                area.htmlarea({
                    toolbar: ['bold', 'italic', 'orderedlist', 'unorderedlist'],
                    inlinecss: 'body{font-family:monospace;}'
                })
            } else {
                area.keyup(function(){
                    area.trigger('change');
                });
            }
            area.data('lastvalue', area.val());
            area.data('autosavetimer', 0);
            area.change(function(){
                if (area.val() != area.data('lastvalue') && !area.data('autosavetimer')) area.data('autosavetimer', setTimeout(function(){
                    if (area.val() != area.data('lastvalue')){
                        area.data('lastvalue', area.val());
                        area.data('autosavetimer', setTimeout(arguments.callee, 2000));
                        return;
                    }
                    area.data('autosavetimer', 0);
                    $el.find('.savingnotification').show();
                    savenotes($el.attr('id'), area.val(), function(){
                        $el.find('.savingnotification').hide();
                        var notification = $el.find('.savednotification');
                        notification.show().fadeIn().fadeOut().fadeIn().fadeOut(function(){notification.hide();});
                    });
                }, 2000))
            });
        }
    };
    //$el should represent the tab element
    var configureschoolctrlpanel = function($el){
        $el.find('.trash').click(function(){
            removeschool($el.find('a[href]').eq(0).attr('href').substring(1));
        });
        $el.hover(function(){
                $el.find('.ctrlpanel').show();
            }, function(){
                $el.find('.ctrlpanel').hide();
            }
        );
    };
    
    var enablesizing = function($el){
        $el.css({visibility:'hidden', position:'absolute'});
        $el.addClass('overridedisplay');
    };
    var disablesizing = function($el){
        $el.removeClass('overridedisplay');
        $el.css({visibility:'', position:''});
    };
    
    var waitforsize = function($el, continuation){
        var sizer = $('<div/>').html('&nbsp;').addClass('sizer').appendTo($el);
        setTimeout(function(){
            //the iframe is loading separately, so we need so make SURE that it can measure it's own size
            if (sizer.length && !sizer.outerHeight()) {
                var f = arguments.callee, a = arguments, _self = this;
                setTimeout(function(){f.apply(_self, a);}, 0);
                return;
            } else {
                sizer.remove();
            }
            continuation();
        }, 0);
    };
    
    var initializedtabs = {};
    var initfunctions = {
        academics:function($el){
            $el.find('a.templatelink').click(function(){
                var $a = $(this);
                var $template = $('#foobar '+$a.attr('href'));
                var $newnode = $template.clone();
                $newnode.attr({id:''});
                $newnode.find('a.templatelink').click(arguments.callee);
                $a.parent('td').parent('tr').after($newnode).find('a.templatelink').remove();
            });
        },
        aboutme:function($el){
            waitforsize($el.parent(), function(){
                var s = new easyXDM.Socket({
                    remote: iframehelper.expandserver('https://secure@@server@@usnews.com/premium/cin_profile.jsp'),
                    container: $el.find('.configpanel')[0],
                    onMessage: function(message, origin){
                        message = message.split(':');
                        if (message.length >= 2){
                            if(message[0] == 'dialog'){
                                var url = unescape(message[1]);
                                iframehelper.makepopup(url, 'foobariframe', 'loginoverlay');
                                $('.foobariframe').bind('passwordchanged', function(){
                                    s.postMessage('passwordchanged');
                                });
                            }
                            else if (message[0] == 'degree'){
                                var base = fb.getelement().find('#myschools .tabcontent');
                                base.tabs('select', -1);
                                myschoolsdata = 0;
                                setoption('proj', message[1]);
                                //if (message[1] == 'best-colleges') opts['comparison_url'] = opts['comparison_url'].replace('best-graduate-schools', 'best-colleges');
                                //else opts['comparison_url'] = opts['comparison_url'].replace('best-colleges', 'best-graduate-schools');
                                removealltabs('myschools');
                                getschooldata();
                            }
                        }
                    }
                });
            });
            $el.find('.scout img').click(function(){
                fb.requestpremium();
                return false;
            });
        },
        myschools:function($el){
            if (!myschoolsdata){
                getschooldata(arguments.callee, [$el])
                return;
            }
            $el.find('.ui-tabs-nav').sortable({
                handle:'.ctrlpanel img.reorder',
                scroll: false,
                tolerance: 'pointer',
                update:function(){
                    var _self = $(this);
                    var order = [];
                    _self.find('li a[href]').each(function(ind, val){order.push(val.href.split('#')[1])});
                    sortschools(order);
                    _self.parent().tabs('refreshPositions');
                }
            });
            $el.find('a.compare').click(function(){
                var appendix = (opts['isgrad']?opts['grad_comparison_url']:opts['coll_comparison_url']) + opts['proj'] + '/index';
                $el.find('ul.ui-tabs-nav input').each(function(){
                    if (this.checked) appendix += '/item+'+this.value;
                });
                if (appendix) document.location.href = appendix;
                return false;
            });
            //var schools = {};
            if ($.fn.non_ui_autocomplete) $el.find('.addnew input').non_ui_autocomplete(function(params){
                    var url = '/best-colleges/collegenames/name+';
                    if (opts['autocomplete_url']) url = opts['autocomplete_url']+opts['proj']+'/name+';
                    url += escape(escape(params.q).replace(/\//g, '%2F'))
                    return url;
                }, {
                    dataType: 'json',
                    parse:function(data){
                        //schools = data;
                        retval = [];
                        for (m in data) if (!myschoolsdata[data[m]]) retval.push({data:[m], value:m, result:m, schoolid:data[m]});
                        return retval;
                    }
                }
            ).keyup(function(event){
                if(event.keyCode == 13){
                    $el.find('.addnew img').click();
                }
            });
            $el.find('.addnew img').click(function(){
                var schoolnameinput = $el.find('.addnew input')
                var schoolid = 0;
                schoolnameinput.search(function(data){
                    if (data) schoolid = data.schoolid;
                    if (schoolid) saveschool(schoolid, opts['proj']);
                    if (schoolnameinput.length) schoolnameinput[0].value = '';
                });
            });
        },
        __all__:function($el){
            enablesizing($el);
            var $tabcontent = $el.children('.tabcontent:first');
            if ($tabcontent.length) {
                $el.find('.closebutton').click(function(){
                    $el.parent().tabs('select', -1);
                });
                $subtab = $tabcontent.children('.secondarytab').eq($tabcontent.tabs('option', 'selected'));
                if ($subtab.length) arguments.callee($subtab);
            }
            else {
                configuresliders($el);
                configureselectskin($el);
                configureclearfield($el);
                configurejhtmlarea($el);
            }
            if (initfunctions[$el.attr('id')]) initfunctions[$el.attr('id')]($el)
            initializedtabs[$el.attr('id')] = 1;
            disablesizing($el);
        }
    };

    //trim trailing and leading whitespace
    //---replacement for trim() for IE---
    var trim = function(s){
        return s.replace(/^\s+|\s+$/g, '');
    };
    var contains = function(array, obj){
        for (var i = 0; i < array.length; i++) if (array[i] == obj) return true;
        return false;
    };
    //get a cookie
    var getcookie = function(name){
        var cookies = document.cookie.split(';');
        for (var i=0, c=[]; i<cookies.length; i++) {
            c = trim(cookies[i]).split('=');
            if (c[0] == name) return c[1];
        }
    };
    var setcookie = function(name, value, expiredays){
        var datetime = new Date();
        datetime.setDate(datetime.getDate()+expiredays);
        document.cookie = name+'='+value+';expires='+datetime.toUTCString()+';domain=usnews.com;path=/';
    };
    var clearcookie = function(name){
        setcookie(name, '', -1);
    };
    //make the server request for the customer data
    var requestCustData = function(callback){
        var custId = getcookie("c");
        if (custId) {
            custdata = 0;
            $.ajax({
              url: 'https://secure.usnews.com/premium/json-cust.jsp?custId='+custId+'&callback=?',
              dataType: 'json',
              success: function(data){
                custdata = data;
                callback(data);
              },
              cache: true
            });
        }
    };
    //cust data stored here when requestCustData is called
    //var custdata = 0;
    //generic options that can be set by outside functions
    var opts = {};
    //variable to hold myschools data in ajax operations
    var myschoolsdata = 0;
    var custid = getcookie('c');
    var fb = function(){
        var lasturl = 0;
        var lastelem = 0;
        var isloggedin = !!custid;
        var selected = '';
        var sub_tab_waitforsize = false;
        //holds the ajax request so it can be aborted later
        var xhr = 0;
        var initloggedin = function($elem){
            var inittab = function(event, ui){
                if (ui.index == $(this).tabs('option', 'selected')) $('#foobaroverlay').hide();
                else $('#foobaroverlay').show();
                if (!initializedtabs[ui.panel.id]) initfunctions['__all__']($(ui.panel));
                else {
                    $panel = $(ui.panel);
                    var subtab = $panel.find('.tabcontent:first'), subtabid = -1;
                    if (subtab.length) subtabid = subtab.tabs('option', 'selected');
                    if (subtabid != -1) {
                        subtabid = subtab.find('ul.subnav li a').eq(subtabid).attr('href').substring(1);
                        if (!initializedtabs[subtabid]) {
                            enablesizing($panel);
                            initfunctions['__all__'](subtab.children('#'+subtabid));
                            disablesizing($panel);
                        }
                    }
                }
            };
            $elem.tabs({
                fx:{height:'toggle'},
                selected:-1,
                collapsible:true,
                select:function(event, ui){
                    selected = ui.panel.id;
                    inittab.apply(this, [event, ui]);
                }
            }).attr({href:''});
            $elem.find('.primarytab').each(function(ind, val){
                var parenttabid = val.id;
                $(val).find('.tabcontent ul.subnav').parent().foobartabs({
                    fx:{opacity:'toggle'},
                    select:function(event, ui){
                        if (parenttabid == selected){
                            if (sub_tab_waitforsize) waitforsize($(ui.panel).parent(), function(){inittab(event, ui);});
                            else inittab(event, ui);
                        }
                        //if ($elem.tabs('option', 'selected') == 
                            //$elem.find('ul#main li').has('a[href="#'+$(ui.panel).parents('.primarytab').attr('id')+'"]').index())
                                //inittab(event, ui);
                    }
                }).attr({href:''});
            });
            if (opts['savedschools'].length) setmyschoolscount(opts['savedschools'].length);
            lastelem.before(
                $('<div id="foobaroverlay">&nbsp;</div>').click(function(){
                    $('#foobar').tabs('select', -1);
                })
            );
            //adjust for premium users
            if (opts['is_premium']){
                lastelem.find('.no_premium').remove();
            }
        };
        var initloggedout = function($elem){
            lastelem.find('ul#main #userlogin-button').click(function(){
                requirelogin();
                return false;
            });
            lastelem.find('#greeting').html(factoids[Math.floor(Math.random()*factoids.length)]);
        };
        //make asynchronous server request for Frank's html
        var requestfoobar = function(frankurl, callback, custid){
            //process the url
            var pageurl = document.location.href;
            var i = -1;
            //find the tld (assuming .com)
            if ((i = pageurl.indexOf('.com')) != -1) {
                i += '.com'.length;
                var j = -1;
                //put the url path after the first slash (in case our current address has a port number
                if ((j = pageurl.indexOf('/', i)) != -1) return $.ajax({
                    url:pageurl.substring(0, j) + frankurl + (custid?'/'+custid:''),
                    success:callback,
                    type:'GET',
                    dataType:'html'
                });
                //otherwise assume .com is the last part before appending the rest of the url
                return $.ajax({
                    url:pageurl.substring(0, i) + frankurl + (custid?'/'+custid:''),
                    type:'GET',
                    dataType:'html',
                    success:callback
                });
            }
        };
        var init = function(elem, url, callback){
            //return;
            if (!url || !elem) return;
            //elem may be a jquery object or a plain array
            var $elem = elem.length?(elem.first?elem.first():$(elem[0])):$(elem);
            //elem.html('');
            lastelem = elem;
            lasturl = url;
            initializedtabs = {};
            myschoolsdata = 0;
            if (xhr) xhr.abort();
            var finishload = function(){
                xhr = requestfoobar(url, function(foobarhtml){
                    xhr = 0;
                    //fix for position on i-devices
                    if(is_iOS)
                    {
                        $('#footer').css('position', 'relative');
                        lastelem.css('position', 'absolute');
                    };
    
                    $elem.html(foobarhtml);
                    if (isloggedin) initloggedin($elem);
                    else initloggedout($elem);
                    
                    //----close button
                    $elem.find('#foobar-close').toggle(
                        function(){
                            $elem.addClass('closed');
                        },
                        function(){
                            $elem.removeClass('closed');
                        }
                    );
                    //
                    
                    if (callback) callback();
                    $elem.trigger('foobarinit');
                }, custid);
            };
            if (isloggedin) requestCustData(function(data){
                //if we didn't get an email address in the returned data, let's assume the data is invalid
                //this can happen if your cookie is bad
                if (!data['email']){
                    //reset the custid so we get the logged out version of the foobar
                    custid = 0;
                    finishload();
                    return;
                }
                setoption('proj', data['degree'] || 'best-colleges');
                setoption('namefirst', data['firstName'] || 'First');
                setoption('namelast', data['lastName'] || 'Last');
                setoption('is_premium', (data['is_premium'] || 'false') == 'true');
                finishload();
            });
            else {
                finishload();
            }
        };
        var requestpremium = function(continuation, args){
            /*iframehelper.makepopup('https://secure@@server@@usnews.com/premium/cin_poe_long_form.jsp','foobariframe','loginoverlay',function(message){
                //init();
                if (continuation) continuation.apply(null, args || []);
                if (message.length > 1 && message[1] == 'premium'){
                    var newhost = document.location.host.replace('colleges', 'premium').replace('best-graduate', 'premium');
                    document.location.href = document.location.href.replace(document.location.host, newhost);
                }
            });*/
            if (opts['store_path'] && opts['store_appendix']) document.location.href = opts['store_path'] + opts['store_appendix'];
        };
        var requirelogin = function(continuation, args){
            if (!isloggedin){
                /*iframehelper.makepopup('https://secure@@server@@usnews.com/premium/cin_reg_login.jsp','foobariframe','loginoverlay',function(message){
                    custid = getcookie('c');
                    isloggedin = !!custid;
                    if (isloggedin) {
                        if (message.length > 1 && message[1] == 'premium'){
                            if (continuation) continuation.apply(null, args || []);
                            var newhost = document.location.host.replace('colleges', 'premium').replace('best-graduate', 'premium');
                            document.location.href = document.location.href.replace(document.location.host, newhost);
                        }
                        else init(lastelem, lasturl, function(){
                            if (continuation) continuation.apply(null, args || []);
                        });
                    }
                });*/
                if (opts['loginurl']) document.location.href = opts['loginurl'];
            }
            else if (continuation) continuation.apply(null, args || []);
        };
        var requestlogout = function(continuation, args){
            //clearcookie('c');
            //clearcookie('c_savedschools');
            custid = '';
            /*isloggedin = false;
            $('#foobaroverlay').remove();
            //make sure our tabs don't visually explode when we start breaking things down
            lastelem.hide();
            lastelem.tabs('destroy');
            lastelem.html('');
            lastelem.show();
            init(lastelem, lasturl, function(){
                if (continuation) continuation.apply(null, args || []);
            });*/
            document.location.href = opts['logouturl'];
        };
        return {
            init:init,
            requestpremium:requestpremium,
            requirelogin:requirelogin,
            requestlogout:requestlogout,
            isloggedin:function(){return isloggedin;},
            getelement:function(){return lastelem;},
            sub_tab_waitforsize:function(disable){sub_tab_waitforsize = disable;}
        };
    }();
    
    var tab_class = function(){
        this.el = 0;
        this.parent = 0;
        this.init = function(){
            this.specialinit();
        };
        this.specialinit = function(){
        };
    };
    tab_class.prototype = {
    };
    
    var myschools = function(){
        var saveschool = function(name){
            fb.requirelogin(function(){
                var isundergrad = document.location.href.indexOf('best-colleges') != -1;
                var poststring = schoolid+ (isundergrad?':best-colleges':':best-graduate-schools');
                $.post(opts['myschools_url']+opts['proj']+'/'+custid, {add:poststring}, updateschools, 'json');
            });
        };
        return {
            saveschool:saveschool
        };
    }();
    
    var addtab = function(section, id, tabhtml, contenthtml){
        var subnav = fb.getelement().find('#'+section+' .tabcontent');
        //set the options explicitly, because jqui wants to call _tabify each time
        subnav.data('tabs').options.tabTemplate = tabhtml;
        subnav.data('tabs').options.panelTemplate = contenthtml;
        subnav.tabs('add', '#'+id, id);
    };
    var removetab = function(section, id){
        var base = $('#foobar #'+section+' .tabcontent');
        //removing a selected tab will try to select another one.
        //  we want to make sure we wait until it can measure itself if this tab is visible
        fb.sub_tab_waitforsize(true);
        base.tabs('remove', id);
        fb.sub_tab_waitforsize(false);
        //if (base.tabs('option', 'selected') == -1) base.tabs('select', 0);
    };
    var removealltabs = function(section){
        var base = $('#foobar #'+section+' .tabcontent');
        var iter = base.tabs('length');
        if (iter) while (iter--) base.tabs('remove', 0);
    };
    var setmyschoolscount = function(count){
        $('#foobar ul#main #myschools-button a').html('My Schools ('+count+')');
    };
    var getschooldata = function(callback, args){
        if (custid) $.get(opts['myschools_url']+opts['proj']+'/'+custid, '', function(data){
            updateschools(data);
            if (callback) callback.apply(null, args || []);
        }, 'json');
    };
    var updateschools = function(schools){
        if (FooBar.initialized){
            var addthese = schools['__order__'].slice(), removethese = [];
            $('#foobar #myschools .secondarytab').each(function(ind, val){removethese.push(val.id)});
            for (var j = 0; j < addthese.length; j++) for (var i = 0; i < removethese.length; i++) if (addthese[j] == removethese[i]){
                addthese.splice(j--, 1);
                removethese.splice(i, 1);
                break;
            }
            var subnav = $('#foobar #myschools .subnav');
            var $tabs = subnav.parent();
            var re_initialize = $tabs.tabs('length') == 0;
            var j = 0;
            var time = 40;
            (function(){
                var d = new Date();
                var max = j + Math.max(1, 50-time);
                for (; j < max && j < addthese.length; j++) {
                    var s = addthese[j];
                    var content = schools[s]['content'];
                    addtab('myschools', s, schools[s]['tab'], content);
                    initializedtabs[s] = 0;
                    configureschoolctrlpanel(subnav.children('li:last'));
                }
                time = new Date() - d;
                if (j < addthese.length){
                    setTimeout(arguments.callee, Math.min(time, 50));
                } else {
                    for (var i = 0; i < removethese.length; i++) removetab('myschools', removethese[i]);
                    if (re_initialize){
                        $tabs.data('tabs').lis.eq(0).removeClass('ui-tabs-selected');
                        $tabs.tabs('select', 0);
                    } else if ($tabs.tabs('option', 'selected') == -1) {
                        //$tabs.tabs('select', 0);
                    }
                    if (!schools['__order__'].length) fb.getelement().find('#myschools .myschools-empty').show()
                    else fb.getelement().find('#myschools .myschools-empty').hide()
                }
            })();
        }
        myschoolsdata = schools;
        //set the little counter on the main button
        setmyschoolscount(schools['__order__'].length);
        setoption('savedschools', schools['__order__']);
    };
    var savenotes = function(schoolid, noteshtml, continuation){
        fb.requirelogin(function(){
            $.post(opts['myschools_url']+opts['proj']+'/'+custid, {notes:[schoolid,noteshtml]}, continuation, 'json');
        });
    };
    var saveschool = function(schoolid, schooltype){
        fb.requirelogin(function(){
            var poststring = schoolid;
            //we need to tell the controller if it's grad or undergrad; add this information if it's part of the id already
            if (!schooltype){
                var isundergrad = document.location.href.indexOf('best-colleges') != -1;
                poststring += isundergrad?':best-colleges':':best-graduate-schools';
            }
            else poststring += ':'+schooltype;
            $.post(opts['myschools_url']+opts['proj']+'/'+custid, {add:poststring}, updateschools, 'json');
        });
    };
    var removeschool = function(schoolid){
        fb.requirelogin(function(){
            var sid = schoolid;
            /*if (!myschoolsdata[sid]){
                sid = 0;
                for (var s in myschoolsdata) if (myschoolsdata[s].usnews_id == schoolid) {
                    sid = myschoolsdata[s].usnews_id;
                    break;
                }
            }*/
            if (sid) $.post(opts['myschools_url']+opts['proj']+'/'+custid, {remove:sid}, updateschools, 'json');
        });
    };
    //this method expects a parameter like: ['2155' '1234']
    var sortschools = function(order){
        fb.requirelogin(function(){
            $.post(opts['myschools_url']+opts['proj']+'/'+custid, {sort:order}, updateschools, 'json');
        });
    };
    var initsavedschools = function(){
        var cookieschools = getcookie('c_savedschools');
        if (cookieschools){
            cookieschools = cookieschools.split(', ');
            opts['savedschools'] = cookieschools;
        }
        else opts['savedschools'] = [];
    };    
    var issaved = function(schoolid){
        if (opts['savedschools']){
            return contains(opts['savedschools'], schoolid);
        }
        return false;
    };
    var setoption = function(key, value){
        //console.log(key, value)
        if (key == 'savedschools'){
            cookievalue = '';
            for (var i = 0; i < value.length; i++) cookievalue += ', ' + value[i];
            if (cookievalue.length) cookievalue = cookievalue.substring(2);
            //var datetime = new Date();
            //datetime.setDate(datetime.getDate()+7);
            //document.cookie = 'c_savedschools='+cookievalue+';expires='+datetime.toUTCString();
            setcookie('c_savedschools', cookievalue, 7);
        } else if (key == 'initialoptionsset'){
            fb.getelement().trigger('foobarinitoptions');
        } else if (key == 'proj'){
            opts['isgrad'] = value != 'best-colleges';
            var store_appendices = {
                'best-colleges':'college_compass.htm',
                'top-business-schools':'/business_school_compass.htm',
                'top-education-schools':'/education_compass.htm',
                'top-engineering-schools':'/engineering_compass.htm',
                'top-law-schools':'/law_school_compass.htm',
                'top-medical-schools':'/medical_school_compass.htm'
            };
            if (store_appendices[opts['proj']]) opts['store_appendix'] = store_appendices[opts['proj']];
            else opts['store_appendix'] = store_appendices['best-colleges'];
            
            var tools_select = (opts['isgrad'] && (value != 'top-law-schools' && value != 'top-business-schools')) ? 'best-graduate-schools' : value;
            fb.getelement().find('#mytools .mytools-content')
                .removeClass('best-colleges top-law-schools top-business-schools best-graduate-schools')
                .addClass(tools_select);
        }
        opts[key] = value;
    };
    var getoption = function(key){
        return opts[key];
    };
    var getname = function(){
        return opts['namefirst']+' '+opts['namelast'];
    };
    
    
    //try to get the current saved schools from a cookie
    initsavedschools();
    
    //base object for main foobar... bar
    var init = function(elem, url){
        if (elem && url){
            var scriptserver = iframehelper.expandserver('http://static@@server@@usnews.com/scripts/');
            var scripts = [
                [$.fn.htmlarea,'jquery/jquery.jHtmlArea-0.7.0.js'],
                [$.fn.autoSubmit,'jquery/jquery.autoSubmit.js'],
                [window.easyXDM,'easyXDM.min.js'],
                [$.fn.non_ui_autocomplete,'jquery/jquery.autocomplete.1.1.1.js'],
                [$.ui.foobartabs,'jquery/jquery.ui.foobartabs.js']
            ];
            var scriptsloaded = 0;
            for (var i = 0; i < scripts.length; i++){
                var dependency = scripts[i][0], urlappendix = scripts[i][1];
                if (!dependency) $.ajax({
                    url: scriptserver+urlappendix, 
                    success: function(){
                        if (++scriptsloaded == scripts.length){
                            $(elem).bind('foobarinit', function(){
                                //make the additional functions public-facing
                                $.extend(FooBar, afterinit);
                            });                        
                            fb.init(elem, url);
                        }
                    },
                    dataType: "script",
                    cache: true
                });
                else scriptsloaded++;
            }
        }
    };
    var wrapfb = function(name){
        return function(){
            return fb[name].apply(fb, arguments);
        }
    }
    
    //public facing members that are applied after initialization
    var afterinit = {
        init:function(){},
        initialized:true
    };
    if (jQuery) {
        return {
            init:init,
            initialized:false,
            setoption:setoption,
            //getoption:getoption,
            getname:getname,
            issaved:issaved,
            saveschool:saveschool,
            removeschool:removeschool,
            dologin:wrapfb('requirelogin'),
            requestpremium:wrapfb('requestpremium'),
            dologout:wrapfb('requestlogout'),
            isloggedin:wrapfb('isloggedin')
        };
    }
}(jQuery);