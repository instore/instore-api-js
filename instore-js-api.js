//define getScript function
var getScriptPath = function() {
  var scripts = document.getElementsByTagName('script');
  var path = '';  
  if (scripts && scripts.length > 0) {  
    for ( var i in scripts ) {
      if (scripts[i].src && scripts[i].src.match(/instore\-api(.*)$/)) {
        path = scripts[i].src.replace(/instore-js-api(.*)\.js$/, '$1');
      }
    }
  }
  return path;
};

//define require function
function require(file) {
  try {
    document.write('<script type="text\/javascript" src="'+file+'" charset="utf-8"><\/s' + 'cript>');
  }
  catch(exc)
  {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = file;
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}

//include lib and endpoints
var path = getScriptPath();
require(path + "lib/instore-api.core.js");
var types = ["categories", "held_orders", "ingredients", "location-groups", "locations", "menu-categories", 
         "menu-items", "order-discounts", "order-line-ingredients", "order-lines", "order-payments",
         "orders", "taxes", "unique-qualities"];

for(var type in types) {
  require(path + "lib/endpoint/instore-api."+ types[type] +".js");
}