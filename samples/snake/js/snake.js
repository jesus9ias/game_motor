
var newGame = gameMotor.extend(function(){
	this.setState('playing');

	this.devMode = false;

	this.setEvents({
		'paused' : {
			'80' : 'continue'
		},
		'playing' : {
			'80' : 'pause',
			'37' : 'turnLeft',
			'39' : 'turnRight'
		},
		'ending' : {

		}
	});

	this.setCicles({
		'playing' : ['renderGame']
	});

	this.pause = function(){
		this.setState('paused');
	}

	this.continue = function(){
		this.setState('playing');
	}

	this.turnLeft = function(){
		console.log('turn left');
	}

	this.turnRight = function(){
		console.log('turn right');
	}

	this.renderGame = function(){
		console.log('rendering');
	};



});

var game = new newGame();
//game.start();
