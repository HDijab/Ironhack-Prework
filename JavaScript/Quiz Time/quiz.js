var user = {};
var responses = [];

function userName() {
	var name = prompt("What is your name?");
	user.name = name;
}

function question1() {
  var firstQuestion = prompt("Does null === 0 ? (Yes or No)");

  if (firstQuestion.toLowerCase() === "yes") {
    firstQuestion = true;
  } else if (firstQuestion.toLowerCase() === "no") {
    firstQuestion = false;
  } else {
    alert("Please answer either Yes or No");
    return question1();
  }
  responses.push(firstQuestion);
}

function question2() {
  var secondQuestion = prompt("What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?");
  secondQuestion = secondQuestion.toLowerCase();
  
  switch (secondQuestion) {
    case "java":
    	responses.push(false);
    	break;
    case "livescript":
    	responses.push(true);
    	break;
    case "javalive":
    	responses.push(false);
    	break;
    case "scriptyscript":
    	responses.push(false);
    	break;
    default:
    	alert("I didn't quite catch that, please retry");
    	return question2();
  }
}

function evaluate(array) {
	var correct = 0;
	var incorrect = 0;

	for (var value in array) {
		if (array[value]) {
			correct += 1;
		} else {
			incorrect += 1;
		}
	}
	
	user.correct = correct;
	user.incorrect = incorrect;

	showResults();
}

function showResults() {
	alert("Name: " + user.name + "\n" + "Correct Answers: " + user.correct + "\n" + "Incorrect Answers: " + user.incorrect);
}

userName();
question1();
question2();
evaluate(responses);