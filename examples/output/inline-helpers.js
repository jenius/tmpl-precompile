(function(){window.inlineHelpers = window.inlineHelpers || {};
inlineHelpers.layout = function anonymous(locals) {
var buf = [];
with (locals || {}) {
buf.push("<div id=\"content\"><h1>Hello world!</h1></div>");
}
return buf.join("");
};
inlineHelpers.root = function anonymous(locals) {
var buf = [];
with (locals || {}) {
buf.push("<h2>Hello</h2><p>World!</p>");
}
return buf.join("");
};
})();