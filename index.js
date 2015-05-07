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
}

module.exports = Class;