function gg(){
	this.ok = function(){
		console.log('ok');
		//alert(state);
	}

	this.bye = function(){
		console.log('bye');
	}
}

var my_game = new gg();
//my_game.ok();

var game_states = {
	'ini' : {
		'49' : my_game.ok,
		'50' : my_game.bye
	}
};

/*var game_states = {
	'ini' : {
		'49' : function(){console.log('ok');},
		'50' : function(){console.log('bye');}
	}
};*/

//game_states['ini']['49']();
//game_states['ini']['49']();
//game_states['ini']['49']();
//alert(JSON.stringify(game_states));


(function(){
	game_motor.prototype.ok = function(){
		this.state = 'jj';
		console.log('okkkkk');
	};
	game_motor.prototype.bye = function(){
		console.log('byeeee');
	};
	
	var g = new game_motor();

	var t = setInterval(function(){g.cicle();}, 1000);

	//g.state = 'ini';

	var c = {
		'ini' : {
			'49' : g.ok,
			'50' : g.bye
		}
	};

	g.setConfig(c);
	//g.cicle();
	
	//document.addEventListener("keydown", g.event_catcher);
	document.addEventListener("keydown", function(t){g.event_catcher(t);});

	//g.start();
})();