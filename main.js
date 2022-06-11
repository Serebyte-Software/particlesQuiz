//mainjs

//retrieve main section
var quizPanel = document.getElementById("quizPanel");

//create questions
var questions = [
	[
		"What are cosmic rays?",
		"High energy beams of particles that enter Earth's atmosphere from space",
		"High intensity bursts of gamma radiation released by stars",
		"Low intensity microwave signals released by stars",
		"Radio signals sent from Earth into outer space",
	],
	
	[
		"Which of these best describes a muon?",
		"A lepton with a mass greater than an electron, and an equal charge",
		"A lepton with a mass equal to that of an electron and a greater charge",
		"A hadron with a mass greater than an electron, and an equal charge",
		"A hadron with a mass equal to that of an electron and a greater charge",
	],
	
	[
		"Which of these best describes a pion?",
		"A meson that can have a charge of -1, +1 or 0, and with a mass in between the masses of an electron and a proton",
		"A meson that can have a charge of -1 or +1, and with a mass greater than a proton",
		"A baryon that can have a charge of -1, +1 or 0, and with a mass in between the masses of an electron and a proton",
		"A baryon that can have a charge of -1 or +1 and with a mass greater than a proton",
	],
	
	[
		"Which of these best describes a kaon?",
		"A strange meson with a mass greater than a pion but smaller than a proton, and a charge of +1, -1 or 0",
		"A strange meson with a mass greater than a proton, and a charge of -1 or 0",
		"A non-strange meson with a mass greater than a pion but smaller than a proton, and a charge of +1, -1 or 0",
		"A non-strange meson with a mass greater than a proton and a charge of -1 or 0",
	],
	
	[
		"How can cosmic rays help us learn about particles?",
		"Cosmic rays collide with atmospheric gases; due to their high energy, said collisions prodce many short-lived particles which can be observed",
		"Cosmic rays are often made of short-lived particles that are scarecely found elsewhere",
		"Cosmic rays are made of particles that can only be found on other planets",
		"Cloud chambers are used to absorb cosmic rays before they hit the ground. The rays react inside the cloud chamber, producing new particles",
	],
	
	[
		"What force is the pion the carrier exchange particle for?",
		"Strong nuclear force",
		"Weak nuclear force",
		"Electromagnetic force",
		"Gravity",
	],
	
	[
		"Why are kaons produced in pairs?",
		"Kaons are prouced via the strong interaction, in which strangeness must be conserved. Thus, a kaon and and anti-kaon must be produced",
		"Momentum must always be conserved. This requires two kaons to be produced.",
		"Charge is always conserved. Since kaons are produced via the decay of an uncharged neutron, two kaons with opposite charges must be created.",
		"Kaons are produced via the weak interaction, in which strangeness can vary by an even amount. As kaons may have a strangeness of -1 or 1, two must be produced.",
	],
	
	[
		"What are particle accelerators?",
		"Machines that accelerate charged particles using vast potential differences. When said particles collide, they have a lot of energy so produce a lot of particles via pair production.",
		"Machines that accelerate charged particles using vast potential differences. When said particles are accelerated, they cannot contain their kinetic energy and instantly transform into other particles.",
		"Machines that accelerate uncharged particles using nuclear decay. As said particles are accelerated, the radiation causes them to turn into other particles.",
		"Machines that accelerate uncharged particles using nuclear decay. The thermal energy from decay is concentrated into individual particles, forcing them to collide at high speeds, producing many particles via pair production.",
	],
	
	[
		"What do kaons decay into?",
		"Either pions, a muon and an antineutrino or an anti-muon and a neutrino",
		"Pions only",
		"Either a muon and an antineutrino or an anti-muon and a neutrino",
		"Muons only",
	],
	
	[
		"What do muons decay into?",
		"Electrons and an antineutrino only",
		"Either pions or an electron and an antineutrino",
		"Electrons only",
		"Either kaons, pions or an electron and an antineutrino",
	],
	
	[
		"What do pions decay into?",
		"Charged pions decay into muons and antineutrinos, uncharged ones decay into photons only",
		"Muons and antinetrinos only",
		"Photons only",
		"Charged pions decay into photons only, uncharged ones decay into muons and antineutrinos",
	],
	
	[
		"Which of these best describes a hadron?",
		"A particle that feels the strong nuclear force",
		"A particle that feels the weak nuclear force",
		"A particle that does not feel the strong nuclear force",
		"A particle that does not feel the weak nuclear force",
	],
	
	[
		"Which of these best describes a lepton?",
		"A particle that does not feel the strong nuclear force",
		"A particle that does not feel the weak nuclear force",
		"A particle which feels the strong nuclear force",
		"A particle which feels the weak nuclear force",
	],
	
	[
		"Which of these is true:",
		"Rest energy of particles before collision + kinetic energy of particles before collision = rest energy of products + kinetic energy of products",
		"Rest energy of particles before collision + kinetic energy of particles before collision + kinetic energy of products = rest energy of products",
		"Rest energy of particles before collision - kinetic energy of particles before collision = rest energy of products - kinetic energy of products",
		"Rest energy of particles before collision - kinetic energy of particles before collision - rest energy of products = kinetic energy of products",
	],
	
	[
		"What is the difference between a baryon and a meson?",
		"Baryons (e.g. protons and neutrons) are made of three quarks, whereas mesons (e.g. pions and kaons) are made of a quark and an antiquark",
		"Mesons (e.g. protons and neutrons) are made of three quarks, whereas baryons (e.g. pions and kaons) are made of a quark and an antiquark",
		"Baryons (e.g. pions and kaons) are made of three quarks, whereas mesons (e.g. protons and neutrons) are made of a quark and an antiquark",
		"Mesons (e.g. pions and kaons) are made of three quarks, whereas baryons (e.g. protons and neutrons) are made of a quark and an antiquark",
	],
	
	[
		"True or false: leptons collisions can produce hadrons?",
		"True, a lepton and antilepton may annihilate and produce quarks and antiquarks",
		"True, a lepton and antilepton can combine together to form a meson",
		"False, this would violate conservation of charge",
		"False, this would violate conservation of lepton number",
	],
	
	[
		"How do we know that there are different types of neutrino?",
		"Electron neutrinos will only ever create eletrons and muon neutrinos will only ever create muons in reactions",
		"Electron and muon neutrinos have charges of different magnitudes",
		"Electron and muon neutrinos have significantly different masses",
		"Trick question: there is only one type of neutrino",
	],
	
	[
		"Which of these is true for lepton number conservation?",
		"The lepton numbers for electrons and muons must be individually conserved",
		"The overall lepton number must remain constant, but muon and electron numbers can vary in the strong interaction",
		"The overall lepton number must remain constant, but muon and electron numbers can vary in the weak interaction",
		"Lepton number does not have to be conserved, only baryon number",
	],
	
	[
		"Which of these correctly summarise the charges of quarks?",
		"up: 2/3, down: -1/3, strange: -1/3",
		"up: 1/3, down: -2/3, strange: -2/3",
		"up: -2/3, down: 1/3, strange: 1/3",
		"up: -1/3, down: -2/3, strange: -2/3",
	],
	
	[
		"Which of these best summarises the baryon numbers of quarks?",
		"up: 1/3, down: 1/3, strange: 1/3",
		"up: 2/3, down: 2/3, strange: 2/3",
		"up: 2/3, down: -1/3, strange: -1/3",
		"up: -2/3, down: 1/3, strange: 1/3",
	],
	
	[
		"What are the quark combinations for a proton and neutron?",
		"p: uud, n: udd",
		"p: udd, n: uud",
		"p: uds, n: dds",
		"p: dds, n: uds",
	],
	
	[
		"What are the quark combinations for pions?",
		"+1: up-antidown, -1: down-antiup, 0: down-antidown or up-antiup",
		"+1: down-antiup, -1: up-antidown, 0: down-antiup or up-antiup",
		"+1: up-antiup, -1: down-antidown, 0: down-antiup or up-antidown",
		"+1: down-antidown, -1: up-antiup, 0: down-antiup or up-antidown",
	],
	
	[
		"What are the quark combinations for kaons?",
		"+1: up-antistrange, -1: strange-antiup, 0: strange-antidown, down-antistrange",
		"+1: strange-antiup, -1: up-antistrange, 0: strange-antidown, down-antistrange",
		"+1: strange-antidown, -1: down-antistrange, 0: strange-antiup and up-antistrange",
		"+1: down-antistrange, -1: strange-antidown, 0: strange-antiup  and up-antistrange",
	],
	
	[
		"When is strangeness not conserved?",
		"The weak interaction",
		"The strong interaction",
		"The gravitational force",
		"The electromagnetic fore",
	],
	
	[
		"When is baryon number conserved?",
		"Always",
		"In the strong interaction",
		"In the weak interaction",
		"In the electromagnetic interaction",
	],
	
	[
		"How much can strangeness vary by in the weak interaction?",
		"-1, 0 or 1",
		"Any value",
		"-1 or 1",
		"It cannot vary",
	],
	
	[
		"How do quarks change in beta minus decay?",
		"A neutron changes into a proton, so a down quark is converted into an up quark, releasing an electron and an electron antineutrino",
		"A proton changes into a neutron, so an up quark changes into a down quark, releasing an electron and an electron antineutrino",
		"A proton changes into a neutron, so a down quark changes into an up quark, releasing an electron and an electron antineutrino",
		"No quarks change, only protons, neutrons and electrons",
	],
	
	[
		"In which interaction can quarks change",
		"Weak only",
		"Weak and strong",
		"Strong only",
		"Quarks are fundamental particles so can never change",
	]
];

//create score variable
var score = 0;

//create question index
var questionIndex = 0;

//create menu function
function createMenu(){
	//set inner html of main panel
	quizPanel.innerHTML = "<h2>Particles Quiz</h2><br/><h3>Click the button below to start.</h3><br/><br/><button onclick=\"startQuiz()\">Start</button>";
};

//start quiz
function startQuiz(){
	//reset score and question index
	score = 0;
	questionIndex = 0;
	
	//start first question
	startQuestion();
};

//start question
function startQuestion(){
	//create html string
	var htmlString = "<h2>Question " + (questionIndex + 1) + " out of " + questions.length + "</h2>";

	//add question text
	htmlString += "<br/><h3>" + questions[questionIndex][0] + "</h3><br/>";

	//create answer buttons
	var answers = [-1, -1, -1, -1];
	
	for(i = 0; i < 4; i++){
		var found = false;
		var num = -1;
		
		do {
			//reset found
			found = false;
			
			//generate a random number
			num = Math.floor(Math.random() * 4) + 1;
			
			for(j = 0; j < 4; j++){
				if(answers[j] == num){
					found = true;
				};
			};
		} while(found == true);
		console.log(num);
		//num not in answers, add to answers
		answers[i] = num;
		
		//check if correct
		if(num == 1){
			//add correct button
			htmlString += "<button onclick=\"correct()\">" + questions[questionIndex][num] + "</button><br/><br/>";
		} else {
			//add incorrect button
			htmlString += "<button onclick=\"incorrect()\">" + questions[questionIndex][num] + "</button><br/><br/>";
		};
	};
	
	quizPanel.innerHTML = htmlString;
};

//correct
function correct(){
	//set correct text
	quizPanel.innerHTML= "<h2 style=\"color:green\">Correct!</h2><br/><h3>Your answer was correct!</h3><br/><button onClick=\"nextQuestion()\">Next</button>";
	
	//increment score
	score += 1;
};

//incorrect
function incorrect(){
	//set correct text
	quizPanel.innerHTML= "<h2 style=\"color:red\">Incorrect</h2><br/><h3>The correct answer was: \"" + questions[questionIndex][1] + "\"</h3><br/><button onClick=\"nextQuestion()\">Next</button>";
};

//nextQuestion
function nextQuestion(){
	//check if there is a question next
	if(questionIndex < questions.length - 1){
		//increment question
		questionIndex += 1;
		startQuestion();
	} else {
		//show score
		showScore();
	};
};

//show score
function showScore(){
	//display score
	quizPanel.innerHTML = "<h2>Quiz Complete!</h2><br/><h3>You scored " + score + " out of " + questions.length + ".</h3><br/><button onclick=\"startQuiz()\">Retry</button>";
};

//create menu
createMenu();