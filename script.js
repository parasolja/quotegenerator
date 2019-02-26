var quoteParts = [
	{ 
		type: "Love",
		first: ["Everything small", "Nobody exists on purpose","There's nothing wrong", "It takes a lot more",
			    "And we're not afraid of anything","And we're not afraid of anything","Time", "Wine", "Dad, if you believe you're beautiful"],
		middle: ["is just a", "nobody belongs anywhere", "with talking to", "than a couple of cheap shots", "as long as",
				 "and the", "for the", "helps me", "you will be"],
		last: ["smaller version of something big", "we're all going to die. Come watch TV",
			   "yourself", "to make us cry", "we have each other", "favorite","charm bomb to explode","drink", "I did"]
			
	},
	{ 
		type: "Wisdom",
		first: ["Bad biscuits", "Sometimes life is scary and dark", "Responsibility", "Humor is", "Weddings", "Sometimes science", 
			    "To live is to risk it all", "If you need me", "Silly robot", "Please...I have no time for your tears", "You said to give everyone",
			    "One man's trash", "You should know when"],
		middle:["make the baker broke", "that is why", "demands", "the highest form of", "are basically", "is more art than", "otherwise you're just an",
			    "I'll be in the","school is", "why don't you go back outside and", "a little time to", "is another man's",
			    "hold hands with me, you're holding hands with"],
		last: ["bro", "we must find the light", "sacrifice", " intelligence", "funerals with cake", "science", 
			   "inert chunk of randomly assembled molecules drifting wherever the universe blows you", "Science Lab", "for kids", "talk to trees or whatever it is you do?",
			   "understand our specialness"]
		
	}	
];

// Returns a number between 0 and number-1
function getRandomNumberBetweenZeroAnd(number) {
	return Math.floor(Math.random() * (number));
}

function getExpressionFromquoteParts() {
	//Choose between Love and Wisdom and then choose a subpart of quote
	var first = quoteParts[getRandomNumberBetweenZeroAnd(2)].first;
	var middle = quoteParts[getRandomNumberBetweenZeroAnd(2)].middle;
    var last = quoteParts[getRandomNumberBetweenZeroAnd(2)].last;
    //Choose random index of subpart (first, middle or last) of a quote
    var indexFirst = getRandomNumberBetweenZeroAnd(first.length);
    var indexMiddle = getRandomNumberBetweenZeroAnd(middle.length);
    var indexLast = getRandomNumberBetweenZeroAnd(last.length);
    
    //Get the elements at the random indexes and concatenate them
	return first[indexFirst] + " " +
		   middle[indexMiddle] + " " +
		   last[indexLast];
}

// Use this index to display quote
function displayQuote() {
	var randomQuote = getExpressionFromquoteParts();
	document.getElementById('randomQuote').innerHTML =  randomQuote;
}

//Function clears a quote
function clearRandomQuote() {
	document.getElementById('randomQuote').innerHTML = "";
}


//Custom Quote Generator

function getExpressionForCustomQuotes() {
	var quoteThemeDropdown = document.getElementById("quoteTheme");
	var qtdIndex = quoteThemeDropdown.selectedIndex;
	if(qtdIndex === 0) {
		return "Please choose preferable theme and enjoy";
	} else {
		var first = quoteParts[qtdIndex-1].first;
		var middle = quoteParts[qtdIndex-1].middle;
	    var last = quoteParts[qtdIndex-1].last;

	    var indexFirst = getRandomNumberBetweenZeroAnd(first.length);
	    var indexMiddle = getRandomNumberBetweenZeroAnd(middle.length);
	    var indexLast = getRandomNumberBetweenZeroAnd(last.length);
	    
		return first[indexFirst] + " " +
			   middle[indexMiddle] + " " +
			   last[indexLast];
	}
}


function displayCustomQuote() {
	var numbersDropdown = document.getElementById("numbers");
	var numbersSelected = numbersDropdown.selectedIndex;
	if(numbersSelected === 0) {
		document.getElementById('customQuote').innerHTML = 
			"Wait! You need to choose a number to see some awesome quotes";
	} else {
		// remove old quotes
		clearCustomQuote();

		// generate multiple quotes (as defined in numbers-dropdown)
		var i;
		for (i = 1; i <= numbersSelected; i++) {
			var randomCustomQuote = getExpressionForCustomQuotes();
			var formerInnerHtml = document.getElementById('customQuote').innerHTML;
			document.getElementById('customQuote').innerHTML = 
				formerInnerHtml  + randomCustomQuote + "</b></br></br>";
		}
		
		// change bg color of custom quotes area
		if (document.getElementById("quoteTheme").selectedIndex != 0) {
			setColor();
		}
	}
}

//Clear custom quote button
function clearCustomQuote() {
	document.getElementById('customQuote').innerHTML = "";
}

//Colors in hex for background color custom quotes bg.
var colors = [
	"#A9B9CB",
	"#896A85",
	"#81B2C9",
	"#00C6AA",
	"#24343C",
	"#86C2A0",
	"#82F9BF",
	"#91A6B3",
	"#318477",
	"#824F65"
];

// set color of a custom quotes section to a random
function setColor() {
	var newColor = colors[Math.floor(Math.random() * (colors.length))];
	document.getElementById("customQuotesBackground").style.backgroundColor = newColor; 
}







