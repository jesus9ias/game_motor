
var newGame = gameMotor.extend(function(){
	this.state = 'ini';

	this.ok = function(){
		console.log('tttt ' + this.state);
		this.state = 'jj';
	};

	this.bye = function(){
		console.log('byeeee');
	};

	this.pp = function(){
		console.log('jajaja');
		this.state = 'ini';
	};

	this.config = {
		'states' : {
			'ini' : {
				'49' : 'ok',
				'50' : 'bye'
			},
			'jj' : {
				'51' : 'pp',
			}
		}
	};
});
  
var game = new newGame();
//game['ok']();
//game.ok();

document.addEventListener("keydown", function(te){game.event_catcher(te);});




(function(){
	
	//start();
	//var t = setInterval(function(){g.cicle();}, 1000);
	
	
	//document.addEventListener("keydown", g.event_catcher);
	//document.addEventListener("keydown", function(te){g.state = 'ppp';});
	//document.addEventListener("keydown", function(te){game.event_catcher(te);});

	//g.start();
})();