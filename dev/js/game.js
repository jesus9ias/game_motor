
var newGame = gameMotor.extend(function(){
	this.state = 'ini';

	this.devMode = false;

	this.config = {
		'events' : {
			'ini' : {
				'49' : 'ok',
				'50' : 'bye'
			},
			'extra' : {
				'51' : 'pp',
				'49' : 'oo',
			}
		}
	};

	this.ok = function(){
		console.log('ok ' + this.state);
		this.state = 'extra';
	};

	this.bye = function(){
		console.log('bye!');
	};

	this.pp = function(){
		console.log('muy bien '+ this.state);
		this.state = 'ini';
	};

	this.oo = function(){
		console.log('oh!');
	};

});

var game = new newGame();
game.start();




(function(){


})();
