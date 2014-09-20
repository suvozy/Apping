/* turns ?key1=value1&key2=value2 into /key1+value1/key2+value2

   NOTE: only fields in defaults are considered
   for serializing.

   NOTE: multi-value fields (e.g., checkboxes with a common name attribute)
   are written out with /fieldName+... repeated
   (e.g., /foo+bar/foo+baz/foo+qux).

   NOTE: multi-value fields (e.g., checkboxes with a common name attribute)
   can only have one "default" value suppressed.

   NOTE: defaults has a "special attribute" called _double_encode.
   If it exists, field names and values are double-encoded.
   (Do not create a field with the name '_double_encode'.)
*/
jQuery.fn.serializeAndSubmit = function(defaults, filter, callback) {
    defaults = jQuery.extend({}, defaults);
    var self = jQuery(this);

    self.bind("submit", function(event) {
        if (event) {
            event.preventDefault();
        }
        var params = [];
        jQuery.each(self.serializeArray(), function(index, field) {
            var fieldName = field.name.split(".");
            fieldName = fieldName[fieldName.length-1].split(":")[0];
            var value = '';
            if (filter) {
                var fieldval = filter(field, fieldName, defaults);
                if (fieldval && fieldval['name'] && fieldval['value']) params.push({key: fieldval['name'], value: fieldval['value']});
            }
            else if (field.value !== ""){
                if (fieldName in defaults){
                    if (defaults[fieldName] !== field.value) params.push({key: fieldName, value: field.value});
                }
                else params.push({key: fieldName, value: field.value});
            }
        });
        params = encode(params);
        if (callback) callback(this, params);
        else window.location = this.action + params;
    });

    encode = function(data)  {
        if (typeof data != typeof {}) {
            //if data param is not an object, then data cannot be encoded: returns false
            return false;
        }
        var encodedString = "";
        data.sort(function(a,b) { return a.key < b.key; });
        jQuery.each(data, function(index, item) {
            if ('_double_encode' in defaults) {
                encodedString += "/" + encodeURIComponent(encodeURIComponent(item.key)) + "+" + encodeURIComponent(encodeURIComponent(item.value));
            } else {
                encodedString += "/" + encodeURIComponent(item.key) + "+" + encodeURIComponent(item.value);
            }
        });
        return encodedString;
    };
    return self;
};

jQuery.fn.deserialize = function(querystring){
    var form = $(this);
    if (!querystring) return form;
    var params = {};
    var parts = querystring.split('/');
    for (var i = 0; i < parts.length; i++){ 
        var keyval = parts[i].split('+');
        if (keyval.length == 2){
            var key = decodeURIComponent(decodeURIComponent(keyval[0]));
            var val = decodeURIComponent(decodeURIComponent(keyval[1]));
            params[key] = val;
        }
    }
    form.find('input').each(function(ind,val){
        if (params[val.name]){
            switch (val.type){
                case 'checkbox':
                    if (val.value == params[val.name]) val.checked = 'checked';
                    break;
                case 'radio':
                    if (val.value == params[val.value]) {
                        form.find('input[name="'+val.name+'"]').attr('checked', '');
                        val.checked = 'checked';
                    }
                    break;
                default:
                    val.value = params[val.name];
            }
        }
    });
    form.find('select').each(function(ind, val){
        if (params[val.name]){
            var sel = $(this);
            sel.children().each(function(ind, val){
                if (val.value == params[sel.attr('name')]) sel[0].selectedIndex = ind;
            });
        }
    });
    return form;
};