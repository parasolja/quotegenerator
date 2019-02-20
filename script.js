var firstBucket = [
	"Bad biscuits",
	"Sometimes life is scary and dark",
	"Everything small",
	"Responsibility",
	"Humor is",
	"Nobody exists on purpose",
	"Weddings",
	"Sometimes science",
	"To live is to risk it all",
	"Does grandpa",
	"This is not fantasy,",
	"This better be important, woman",
	"If you need me",
	"Silly robot,",
	"Please...I have no time for your tears,",
	"There's nothing wrong",
	"It takes a lot more",
	"And we're not afraid of anything",
	"I'm the cutest",
	"You said to give everyone",
	"One man's trash",
	"You should know when",
	"Time",
	"Wine",
	"Dad, if you believe you're beautiful"
	
]

var middleBucket = [
	"make the",
	"that is why",
	"is just a",
	"demands",
	"the highest form of",
	"nobody belongs anywhere,",
	"are basically",
	"is more art than",
	"otherwise you're just an",
	"turn into a",
	"this is reality",
	"you are interrupting",
	"I'll be in the",
	"school is",
	"why don't you go back outside and",
	"with talking to",
	"than a couple of cheap shots",
	"as long as",
	"and the",
	"a little time to",
	"is another man's",
	"hold hands with me, you're holding hands with",
	"for the",
	"helps me",
	"you will be"
	
]

var lastBucket = [
	"baker broke, bro",
	"we must find the light",
	"smaller version of something big",
	"sacrifice",
	"intelligence",
	"we're all going to die. Come watch TV",
	"funerals with cake",
	"science",
	"inert chunk of randomly assembled molecules drifting wherever the universe blows you",
	"pickle often",
	"I'm stuck for my life! I'm stuck and I'll be stuck forever!",
	"my very delicate calculations",
	"Science Lab",
	"for kids",
	"talk to trees or whatever it is you do?",
	"yourself",
	"to make us cry",
	"we have each other",
	"favorite",
	"understand our specialness",
	"Christmas gift for Dad!",
	"everything I've ever eaten",
	"charm bomb to explode",
	"drink",
	"I did"
	
]

// reminder: indexes - 1
var filter = [
	[0, 2, 4 ],
	[1, 2, 4 ]
]

function getRandomIndexFrom(bucket) {
	return Math.floor(Math.random() * (bucket.length));
}

function getExpressionFromBuckets() {
//	var first = quoteParts[throwDiceFunction()].first;
//	var middle = quoteParts[throwDiceFunction()].middle;
//	var last = quoteParts[throwDiceFunction()].last;
	
	var indexFirst = getRandomIndexFrom(firstBucket);
	var indexMiddle = getRandomIndexFrom(middleBucket);
	var indexLast = getRandomIndexFrom(lastBucket);
	
	while(!indexCombinationAllowed(indexFirst, indexMiddle, indexLast)) {
		// indexes not allowed, try again!
		var indexFirst = getRandomIndexFrom(firstBucket);
		var indexMiddle = getRandomIndexFrom(middleBucket);
		var indexLast = getRandomIndexFrom(lastBucket);
	}
	
	return firstBucket[indexFirst] + " " +
		   middleBucket[indexMiddle] + " " +
		   lastBucket[indexLast];
}

function displayQuote() {
	var randomQuote = getExpressionFromBuckets();
	document.getElementById('randomQuote').innerHTML = "<b>" + randomQuote + "</b>";
}

function clearQuote() {
	document.getElementById('randomQuote').innerHTML = "";
}

function indexCombinationAllowed(indexFirst, indexMiddle, indexLast) {
	var allowed = true;
	for (var i = 0; i < filter.length; i++) {
		firstFilterElem = filter[i][0];
		secondFilterElem = filter[i][1];
		thirdFilterElem = filter[i][2];
		if (indexFirst === firstFilterElem &&
			indexMiddle === secondFilterElem &&
			indexLast === thirdFilterElem) {
			allowed = false;
		}
	}
	return allowed;
}

//PART 2

var timeAnimation = 500;
var randomQuote = $('#randomQuote');
//fade out animation with callback
randomQuote.fadeOut(timeAnimation, function(){
	randomQuote.html('');


