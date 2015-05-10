function Class(options, parent) {
  var child = function () {};

  if (parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
  }

  child.__super__ =  parent || Object;

  if (options.initialize) {
    child = options.initialize;
  }

  for (var name in options) {
    if (name != 'initialize') {
      child.prototype[name] = options[name];
    }
  }

  child.prototype.super = function () {

    var current_class = child;

    return function (methodName) {
      var current_class_old = current_class;
      current_class = current_class.__super__;
      var result = current_class.prototype[methodName].apply(this, [].slice.call(arguments, 1));
      current_class = current_class_old;
      return result;
    }
  }();

  return child;
}

module.exports = Class;