var Ad = function() {
   this.ord = (function makeOrd() {
        var ord = Math.round(10000000*Math.random());
        while (ord.length<9){
            ord="0"+ord;
        }
        return ord;
    })();

    this.getSafeString = function (str, len) {
        var str_len = (arguments.length == 2) ? len : 32;
        return str.split(':').pop().replace(/[^A-Za-z\/]+/g, '').substring(0,str_len).toLowerCase();
    }

    this.makeKwList = function () {
        function inKws(kws,kw) {
            for (var i=0; i<kws.length;i++) {
                if (kws[i]==kw) return true;
            }
            return false;
        }
        var kws=new Array();
        var kw=USN.Ad.getSafeString(USN.site,32);
        var kwStr='kw='+kw+';';
        kws.push(kw);
        var zones = USN.Ad.getSafeString(USN.zone,45).split(/\//);
        $.each(zones, function () {
            if (!inKws(kws,this)) {
                kwStr+='kw='+this+';';
                kws.push(this);
            }
        })
        $("meta[name=keywords]").each(function(){
            var tags = this.content.split(/\s*[,;]\s*/);
            $.each(tags, function () {
                var kw=this.replace(/[^\w]+/g, '').toLowerCase();
                if (!inKws(kws,kw)) {
                    kwStr+='kw='+kw+';';
                    kws.push(kw);
                }
            });
        });
        if (document.cookie.match("compstat")) {
           var cookies=document.cookie.split(/\s*;\s*/);
           while (cookie = cookies.shift()) {
              if (cookie.match(/^compstat=/)) {
                 var compstat = cookie.substring(9);
                 kwStr += "kw=" + compstat +";";
                 kws.push(compstat);
              }
           }
        }

        return kwStr;
    };


    this.render = function(adPosition) {
        var ord = USN.Ad.ord;
        var kwStr = USN.Ad.makeKwList();
        var adSlots = {
            leaderboardA: {dim: '728x90,950x30,954x90,938x90' , tile:1, map:'top'},
            leaderboardB: { dim: '728x90', tile:3, map:'bot'},
            badgeA: {dim: '180x90'},
            badgeB: {dim: '120x90'},
            badgeC: {dim: '120x90'},
            badgeD: {dim: '120x90'},
            badgeE: {dim: '120x90', 'deferred': true},
            rectangleA: {dim: '336x280,300x250,300x600', tile:2, map:'top'},
            rectangleA_nosky: {dim: '336x280,300x250', tile:2, map:'top'},
            rectangleB: {dim: '336x280,300x250,300x600,330x140', map:'bot'},
            rectangleC: {dim: '300x150'},
            skyscraperA: {dim: '160x600'},
            skyscraperB: {dim: '160x600'},
            skyscraperC: {dim: '160x600'},
            verticalA: {dim: '120x240'},
            video1: {dim: '468x60'},
            boxA: {dim: '300x125'},
            boxB: {dim: '330x140'},
            anchor: {dim: '1x1,950x65'},
            stitial: {dim: '1x1,500x500'},
            featured: {dim: '620x120,620x210,620x300'}
        };
        var default_tile = 4;
        var dimension = adSlots[adPosition].dim;
        var tile = (adSlots[adPosition].tile !== undefined) ? adSlots[adPosition].tile : default_tile;
        var map = (adSlots[adPosition].map !== undefined) ? adSlots[adPosition].map : adPosition;
        if (typeof(segQS) == 'undefined') { segQS='';};
        var site = USN.Ad.getSafeString(USN.site, 32);
        var zone = USN.Ad.getSafeString(USN.zone, 45);
        var dcopt = (adPosition=='leaderboardA' ? 'dcopt=ist;' : '');
        var adURI = "http://ad.doubleclick.net/adj/usn." + site + "/" + zone + ';' + kwStr + segQS + dcopt + "sz=" + dimension + ";tile=" + tile + ";pos=" + map + ";ord=" + ord + "?";
        adURI = encodeURI(adURI);
        eval(document.write(unescape('%3Cscript src="' + adURI + '" type="text/javascript"%3E%3C/script%3E')));
    };
};
USN.Ad = new Ad();
dblclick = USN.Ad.render;
