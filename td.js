let dare_btn = document.getElementById('dare_btn');
	let truth_btn = document.getElementById('truth_btn');
	let reset=document.getElementById("reset");

let output = document.getElementById('output');
let dare = [
    "Get a bar of soap from the bathroom and sell it to the group for 3 minutes.",
"Go outside, and while skipping down the street, sing “Let it Go’ from Frozen.",
"With your eyes closed, pick someone from your contact list and send them a text.",
"Stand up and do your best impersonation of the person on your right.",
"Go in the kitchen and rearrange everything in the food pantry in alphabetical order.",
"Imagine that you are a dog and act like it until your next turn.",
"Describe what the sky looks like without using the words blue or white.",
"Sing the chorus of your favorite song.",
"Make up a song about the host of the party.",
"Exchange shirts with the person to your left and wear it for the remainder of the game.",
"For the next 15 minutes, everything you say must be spoken in baby talk.",
"Make a sandwich while blindfolded.",
"Eat a spoonful of hot sauce.",
"From now until your next turn, every time someone talks, interrupt by saying, “that’s a lie.”",
"Get down on one knee and propose to the person on your left.",
"Open Facebook and “like” the first thing that pops up even if you disagree with it.",

];

let truth = [
    "What is your least favorite thing about family gatherings?",
"What is your favorite thing about family gatherings?",
"What is one thing that makes you relax?" ,
"Tell about the last dream you had and don’t leave anything out.",
"Have you ever told someone you wouldn’t be home just so they wouldn’t come over?",
"Have you ever danced on a table when you were drunk?",
"Have you ever shared chewing gum with anyone?",
"If anyone in your family could win an award for the most annoying, who would it be?",
"Have you ever cheated on a test?",
"If you could create your own job title, what would it be?",
"What is your excuse to get out of exercising?",
"What was the one thing you could never learn how to do no matter how hard you tried?",
"What was your favorite childhood television show?",
"What makes you laugh?",
"If you had a remote control that would operate anything, what would you control?",
"What is your guilty pleasure?",
"Where is your favorite vacation spot?"
];

dare_btn.addEventListener('click', function(){
	document.getElementById("container").style.background="purple";
    var randomDare = dare[Math.floor(Math.random() * dare.length)]
    output.innerHTML = randomDare;
})
truth_btn.addEventListener('click', function(){
	document.getElementById("container").style.background="indigo";
    var randomTruth = truth[Math.floor(Math.random() * truth.length)]
    output.innerHTML = randomTruth;
    })
reset.addEventListener('click',function()
{
	document.getElementById("output").innerHTML="Press the button to generate a Truth & Dare";
})