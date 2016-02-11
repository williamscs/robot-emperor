
var aeDeck = [
"Blitz-1.jpg",
"Blitz-10.jpg",
"Blitz-2.jpg",
"Blitz-3.jpg",
"Blitz-4.jpg",
"Blitz-5.jpg",
"Blitz-6.jpg",
"Blitz-7.jpg",
"Blitz-8.jpg",
"Blitz-9.jpg",
"Blue-1.jpg",
"Blue-2.jpg",
"Blue-3.jpg",
"Blue-4.jpg",
"Blue-5.jpg",
"Blue-6.jpg",
"Gold-1.jpg",
"Gold-2.jpg",
"Gold-3.jpg",
"Gold-4.jpg",
"Gold-5.jpg",
"Gold-6.jpg",
"Green-1.jpg",
"Green-2.jpg",
"Green-3.jpg",
"Green-4.jpg",
"Green-5.jpg",
"Green-6.jpg",
"Red-1.jpg",
"Red-2.jpg",
"Red-3.jpg",
"Red-4.jpg",
"Red-5.jpg",
"Red-6.jpg"
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