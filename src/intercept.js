var intercept = function (obj, attr, interceptor)
  'use strict';
    
  var target = obj[attr];

  obj[attr] = function () {
    var exit = interceptor.apply(this, arguments);
    if (typeof exit !== 'undefined') { return exit; }
    return target.apply(this, arguments);
  };
  
  var restore = function () {
    obj[attr] = target;
  };
  
  return restore;
};
