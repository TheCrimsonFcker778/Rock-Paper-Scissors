let playerScore = 1;
let computerScore = 1;
function game() {
	const playerChoice = prompt('Choose a weapon').toLowerCase();

	function computerPlay() {
		const choices = ['rock', 'paper', 'scissors'];
		const computerChoice = choices[Math.floor(choices.length * Math.random())];
		return computerChoice;
	}

	function win() {
		return playerScore++;
	}

	function lose() {
		return computerScore++;
	}

	function draw() {
		console.log('draw');
	}

	function playRound() {
		switch (playerChoice + computerPlay()) {
			case 'rockscissors':
			case 'paperrock':
			case 'scissorspaper':
				console.log(win() + ' player won');
				break;
			case 'rockpaper':
			case 'paperscissors':
			case 'scissorsrock':
				console.log(lose() + ' computer won');
				break;
			case 'rockrock':
			case 'paperpaper':
			case 'scissorsscissors':
				draw();
				break;
		}
	}

	playRound();
}
for (i = 0; i < 5; i++) game();
