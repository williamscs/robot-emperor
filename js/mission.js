var missionList = {
	"A Bounty Protected": {
		"back":  "/img/Mission/AVP/A-Bounty-Protected-Back.jpg",
		"front": "/img/Mission/AVP/A-Bounty-Protected-Front.jpg"
	},
	"Armed and Operational": {
		"back":  "/img/Mission/AVP/Armed-and-Operational-Back.jpg",
		"front": "/img/Mission/AVP/Armed-and-Operational-Front.jpg"
	},
	"Back Room Bargains": {
		"back":  "/img/Mission/AVP/Back-Room-Bargains-Back.jpg",
		"front": "/img/Mission/AVP/Back-Room-Bargains-Front.jpg"
	},
	"Binary Revolution": {
		"back":  "/img/Mission/AVP/Binary-Revolution-Back.jpg",
		"front": "/img/Mission/AVP/Binary-Revolution-Front.jpg"
	},
	"Brace for Impact": {
		"back":  "/img/Mission/AVP/Brace-For-Impact-Back.jpg",
		"front": "/img/Mission/AVP/Brace-For-Impact-Front.jpg"
	}

}
/*
	"Brute-Force-Back.jpg",
	"Brute-Force-Front.jpg",
	"Bunker-Buster-Back.jpg",
	"Bunker-Buster-Front.jpg",
	"Celebration-Back.jpg",
	"Celebration-Front.jpg",
	"Communication-Breakdown-Back.jpg",
	"Communication-Breakdown-Front.jpg",
	"Forest-Ambush-Back.jpg",
	"Forest-Ambush-Front.jpg",
	"Fully-Charged-Back.jpg",
	"Fully-Charged-Front.jpg",
	"Imperial-Entanglements-Back.jpg",
	"Imperial-Entanglements-Front.jpg",
	"Infection-Back.jpg",
	"Infection-Front.jpg",
	"Open-to-Interpretation-Back.jpg",
	"Open-to-Interpretation-Front.jpg",
	"Predator-and-Prey-Back.jpg",
	"Predator-and-Prey-Front.jpg",
	"Snowcrash-Back.jpg",
	"Snowcrash-Front.jpg",
	"Strength-of-Command-Back.jpg",
	"Strength-of-Command-Front.jpg"
 */

$(function() {
	var availableTags = Object.keys(missionList);
	$( "#mission-title" ).autocomplete({
		source: availableTags,
		select: function( event, ui ) {
			if(ui.item){
				var missionName = ui.item.value;
				console.log(missionName);
				var missionCard = missionList[missionName];
				console.log(JSON.stringify(missionCard));
				$('#mission-card-front').attr('src', missionCard.front);
				console.log(JSON.stringify(missionCard.front));
				$('.flip-container').slideDown();
				$('#mission-card-back').attr('src', missionCard.back);


				$('#mission-card-front').click(function() {
					$(".flipper").toggleClass("flip")
				});
				$('#mission-card-back').click(function() {
					$(".flipper").toggleClass("flip");
				});
			}
	}});
});