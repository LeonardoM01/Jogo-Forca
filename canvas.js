function desenharCanvas() {
	tabuleiro.lineWidth = 8;
	tabuleiro.lineCap = "round";
	tabuleiro.LineJoin = "round";
	tabuleiro.fillStyle = "#F3F5FC";
	tabuleiro.strokeStyle = "#0A3871";

	tabuleiro.fillRect(0,0, 350, 480);
	tabuleiro.beginPath();

	tabuleiro.moveTo(44, 250);
	tabuleiro.lineTo(331, 250);
	tabuleiro.stroke();

	tabuleiro.moveTo(110, 250);
	tabuleiro.lineTo(110, 50);
	tabuleiro.stroke();

	tabuleiro.moveTo(110, 50);
	tabuleiro.lineTo(185, 50);
	tabuleiro.stroke();

	tabuleiro.moveTo(185, 50);
	tabuleiro.lineTo(185, 73);
	tabuleiro.stroke();


	tabuleiro.closePath();
}

function desenharLinhas() {
	tabuleiro.beginPath();
	tabuleiro.lineWidth = 4;
	tabuleiro.lineCap = "round";
	tabuleiro.LineJoin = "round";
	tabuleiro.fillStyle = "#F3F5FC";
	tabuleiro.strokeStyle = "#0A3871";

	let largura = 350/palavraSecreta.length
	for (let i = 0; i < palavraSecreta.length; i++) {
		tabuleiro.moveTo(10 + (largura * i), 330);
		tabuleiro.lineTo(25 + (largura * i), 330);
	}
	tabuleiro.stroke();
	tabuleiro.closePath();
}

function desenharLetras(key) {
	tabuleiro.beginPath();
	tabuleiro.font='24px Inter';
  	tabuleiro.lineWidth=2;
	tabuleiro.fillStyle = "#F3F5FC";

	let largura = 350/palavraSecreta.length;
	for (let i = 0; i < palavraSecreta.length; i++) {
		if (key === palavraSecreta[i]) {
			tabuleiro.strokeText(key.toUpperCase(), 10 + largura * i, 310);
			letrasAcertadas.push(key)
		}
	}
	tabuleiro.closePath();
	if (letrasAcertadas.length === palavraSecreta.length) {
		setTimeout(function() {ganhou();}, 200)
	}
}

function desenharLetrasErradas(key) {
	tabuleiro.beginPath();
	tabuleiro.font='24px Inter';
  	tabuleiro.lineWidth = 3;
	tabuleiro.fillStyle = "#F3F5FC";
	let largura = 300/palavraSecreta.length;
	tabuleiro.strokeText(key.toUpperCase(), 20 + 30 * erros, 400);
	tabuleiro.closePath();
	desenharBoneco();

}

let erros = 0;
function desenharBoneco() {
	if (erros !== 6) {
		tabuleiro.beginPath();
		tabuleiro.font='24px Inter';
  		tabuleiro.lineWidth=3;
		tabuleiro.fillStyle = "#F3F5FC";
		erros++;
		if (erros === 1) {
			tabuleiro.arc(185, 95, 20, 0, 2*Math.PI);
			tabuleiro.stroke();
			tabuleiro.closePath();
		} else if (erros === 2) {
			tabuleiro.moveTo(185, 115);
			tabuleiro.lineTo(185, 190);
			tabuleiro.stroke();
			tabuleiro.closePath();
		} else if (erros === 3) {
			tabuleiro.moveTo(185, 115);
			tabuleiro.lineTo(160, 155);
			tabuleiro.stroke();
			tabuleiro.closePath();
		} else if (erros === 4) {
			tabuleiro.moveTo(185, 115);
			tabuleiro.lineTo(210, 155);
			tabuleiro.stroke();
			tabuleiro.closePath();
		} else if (erros === 5) {
			tabuleiro.moveTo(185, 190);
			tabuleiro.lineTo(160, 225);
			tabuleiro.stroke();
			tabuleiro.closePath();
		} else if (erros === 6) {
			tabuleiro.moveTo(185, 190);
			tabuleiro.lineTo(210, 225);
			tabuleiro.stroke();
			tabuleiro.closePath();
			setTimeout(function() {perdeu();}, 200)
		}
	}
}