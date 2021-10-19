let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('playerscore');
const computerScore_span = document.getElementById('computerscore');
const scoreBoard_section = document.querySelector('#scoreboard');
const rock_img = document.getElementById('rock');
const paper_img = document.getElementById('paper');
const scissors_img = document.getElementById('scissors');
const result_p = document.getElementById('result');
const modalbox_div = document.querySelector('.modalbox');

function computerPlay() {
	const choices = ['rock', 'paper', 'scissors'];
	const computerChoice = choices[Math.floor(choices.length * Math.random())];
	return computerChoice;
}

function game(playerChoice) {
	const computerChoice = computerPlay();
	switch (playerChoice + computerChoice) {
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			win();
			break;
		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			lose();
			break;
		case 'rockrock':
		case 'paperpaper':
		case 'scissorsscissors':
			draw();
			break;
	}
}

function win() {
	playerScore++;
	playerScore_span.innerHTML = playerScore;
	result_p.innerHTML = 'You win!';
}

function lose() {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = 'You lose!';
}

function draw() {
	result_p.innerHTML = "It's a draw!";
}

function events() {
	rock_img.addEventListener('click', function () {
		game('rock');
	});

	paper_img.addEventListener('click', function () {
		game('paper');
	});

	scissors_img.addEventListener('click', function () {
		game('scissors');
	});
}

events();
