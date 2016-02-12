
var aeDeck = [
"Blitz-1.png",
"Blitz-10.png",
"Blitz-2.png",
"Blitz-3.png",
"Blitz-4.png",
"Blitz-5.png",
"Blitz-6.png",
"Blitz-7.png",
"Blitz-8.png",
"Blitz-9.png",
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
$('#ae-deck-back').click(function() {
	if(aeDeck.length > 0){
		var index = Math.random() * (aeDeck.length - 1);
		var img = aeDeck.splice(index, 1);
		$('#ae-drawn-card').attr('src', imgRoot + 'AE/' + img);
		if(aeDeck.length === 0){
			$('#ae-deck-back').hide();
		}
	}
});

var ae = {
	draw: function() {

	}
}