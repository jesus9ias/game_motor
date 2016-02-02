
var newGame = gameMotor.extend(function(){
	this.state = 'ini';

	this.devMode = false;

	this.setEvents({
		'ini' : {
			'49' : 'ok',
			'50' : 'bye'
		},
		'extra' : {
			'51' : 'pp',
			'49' : 'oo',
		}
	});

	this.setCicles({
		'ini' : [
			'pom',
		],
		'extra' : [
			'jaa',
		]
	});

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

	this.pom = function(){
		console.log('pom pom');
	};

	this.jaa = function(){
		console.log('jaaaa!');
	};

});

var game = new newGame();
game.start();




(function(){


})();
