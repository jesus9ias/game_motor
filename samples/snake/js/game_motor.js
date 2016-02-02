var gameMotor = Class.extend(function(){

	this.constructor = function(){
		//...
	};

	this.started = false;
	this.devMode = true;
	this.t = 0;
	this.config = {
		'interval' : 10,
		'state' : '',
		'key' : 0,
		'events' : {},
		'cicles' : {}
	};

	this.setState = function(state){
		this.config.state = state;
	};

	this.setInterval = function(interval){
		this.config.interval = interval;
	};

	this.setEvents = function(events){
		this.config.events = events;
	};

	this.setCicles = function(cicles){
		this.config.cicles = cicles;
	};

	this.cicle = function(){
		if(typeof this.config.cicles[this.config.state] != 'undefined'){
			for(i in this.config.cicles[this.config.state]){
				this[this.config.cicles[this.config.state][i]]();
			}
			if(this.devMode == true){
				console.log(this.config.state);
			}
		}
	};

	this.start = function(){
		this.started = true;
		this.t = setInterval(this.cicle, this.config.interval);
	};

	this.event_catcher = function(tecla){
		if(this.started == true){
			this.config.key = tecla.keyCode;
			if(typeof this.config.events[this.config.state] != 'undefined' && typeof this.config.events[this.config.state][this.config.key] != 'undefined'){
				this[this.config.events[this.config.state][this.config.key]]();
				if(this.devMode == true){
					console.log(this.config.state + ' --- ' + this.config.key);
				}
			}else{
				this.config.key = 0;
				if(this.devMode == true){
					console.log('not event');
				}
			}
		}

	};

	document.addEventListener("keydown", this.event_catcher.bind(this));
});
