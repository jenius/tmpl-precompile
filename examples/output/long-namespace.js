(function(){window.very = window.very || {};
window.very.long = window.very.long || {};
window.very.long.namespace = window.very.long.namespace || {};
very.long.namespace.level1 = very.long.namespace.level1 || {};
very.long.namespace.level1.level2 = very.long.namespace.level1.level2 || {};
very.long.namespace.level1.level2.level3 = very.long.namespace.level1.level2.level3 || {};
function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + exports.escape(val.join(' ')) + '"');
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var jade = {
  attrs: attrs,
  escape: escape
};
very.long.namespace.layout = function (locals){ return fn(locals, Object.create(runtime)) };
very.long.namespace.root = function (locals){ return fn(locals, Object.create(runtime)) };
very.long.namespace.level1.root = function (locals){ return fn(locals, Object.create(runtime)) };
very.long.namespace.level1.level2.root = function (locals){ return fn(locals, Object.create(runtime)) };
very.long.namespace.level1.level2.level3.root = function (locals){ return fn(locals, Object.create(runtime)) };
})();