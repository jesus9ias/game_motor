var gameMotor = Class.extend(function(){

	this.constructor = function(){
		//...
	};

	this.started = false;

	this.t = 0;
	this.state = '';
	this.key = 10;
	this.config = {
		'states' : {}
	};

	//document.addEventListener("keydown", function(){this.event_catcher();});

	this.setConfig = function(config){
		this.config.states = config;
	};

	this.cicle = function(){
		//console.log(this.state + ' ' + this.key);
		if(this.key != 0 && this.config['states'] != {}){
			/*if(typeof this.config.states[this.state] != 'undefined'){
				if(typeof this.config.states[this.state][this.key] != 'undefined'){
					this.config.states[this.state][this.key]();
				}
			}*/
		}
		//this.key = 0;
	};

	this.start = function(){
		this.started = true;
		this.t = setInterval(this.cicle, 1000);
	};

	this.event_catcher = function(tecla){
		if(this.started == true){
			this.key = tecla.keyCode;
			//console.log(this.state + ' --- ' + this.key);
			if(typeof this.config.states[this.state] != 'undefined' && typeof this.config.states[this.state][this.key] != 'undefined'){
				this[this.config.states[this.state][this.key]]();
				//console.log('algo');
			}else{
				this.key = 0;
				console.log('nadaa');
			}
		}
		
	};

	document.addEventListener("keydown", this.event_catcher.bind(this));
});
  

//document.addEventListener("keydown", function(te){game.event_catcher(te);});


