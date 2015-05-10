<<<<<<< HEAD
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
=======
function Class(argument){
	var cons = function(){};
	if (argument['initialize']){
		cons = argument['initialize'];
	}
	var name ='';
	for(name in argument){
		if (name !== 'initialize'){
			cons.prototype[name] = argument[name];
		}
	}
	return cons;
>>>>>>> 3b2e4656c85b15a4736fe8fa819ea311c6e42c48
}

module.exports = Class;