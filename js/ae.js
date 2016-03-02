
var aeDeckInit = [
"Blitz-1.png",
"Blue-1.png",
"Blue-2.png",
"Blue-3.png",
"Blue-4.png",
"Blue-5.png",
"Blue-6.png",
"Gold-1.png",
"Gold-2.png",
"Gold-3.png",
"Gold-4.png",
"Gold-5.png",
"Gold-6.png",
"Green-1.png",
"Green-2.png",
"Green-3.png",
"Green-4.png",
"Green-5.png",
"Green-6.png",
"Red-1.png",
"Red-2.png",
"Red-3.png",
"Red-4.png",
"Red-5.png",
"Red-6.png"
];
$('#ae-drawn-card').hide();
$('#ae-draw-pile').click(function() {
	if(ae.aeDeck.length > 0){
		ae.draw();
	} else {
		ae.init();
	}
});

$('#numBlitz').change(function(event) {
	ae.init();
	ae.cleanOutBlitz();
	var blitzCards = parseInt(event.target.value, 10);
	ae.insertBlitz(blitzCards);
});

var ae = {
	aeDeck: [],
	init: function() {
		this.aeDeck = aeDeckInit.slice(0);
		$('#ae-deck-back').show();
		$('#ae-drawn-card').hide();
	},
	draw: function() {
		var index = Math.random() * (this.aeDeck.length - 1);
		var img = this.aeDeck.splice(index, 1);
		$('#ae-drawn-card').attr('src', imgRoot + 'AE/' + img);
		$('#ae-drawn-card').show();
		if(this.aeDeck.length === 0){
			$('#ae-deck-back').hide();
		}
	},
	cleanOutBlitz: function() {
		var index;
		while ((index = this.aeDeck.indexOf("Blitz-1.png")) !== -1) {
			this.aeDeck.splice(index, 1);
		}
	},
	insertBlitz: function(numBlitz) {
		for(var i = 0; i < numBlitz; i++){
			this.aeDeck.push("Blitz-1.png");
		}
	},
	getDeck: function() {
		console.log(JSON.stringify(this.aeDeck));
	}
};

ae.init();