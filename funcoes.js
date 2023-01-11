var letrasErradas = [];
var letrasAcertadas = [];

var input = document.querySelector("textarea");

let palavras = ["dois", "comida", "tapete", "dedo", "parede", "livro", "seis"];

let tabuleiro = document.getElementById("forca").getContext('2d');

let palavraSecreta = "";

function escolherPalavraSecreta() {
	let palavra = palavras[Math.floor(Math.random() * palavras.length)]
	palavraSecreta = palavra;
}

function menuPrincipal() {
	mostrarMenu();
	esconderAreaTexto();
	esconderAreaJogo();
	esconderBotoesJogo();
}

function mostrarAreaJogo() {
	document.getElementById("areaJogo").style.display = "flex";
}
function esconderAreaJogo() {
	document.getElementById("areaJogo").style.display = "none";
}
function mostrarBotoesJogo() {
	document.getElementById("botao__novoJogo").style.display = "flex";

	document.getElementById("botao__desistir").style.display = "flex";
}
function esconderBotoesJogo() {
	document.getElementById("botao__novoJogo").style.display = "none";

	document.getElementById("botao__desistir").style.display = "none";
}


function esconderMenu() {
	document.getElementById("tela__inicial").style.display = "none";
}
function mostrarMenu() {
	document.getElementById("tela__inicial").style.display = "flex";
}

function esconderAreaTexto() {
	document.getElementById("areaTexto-container").style.display = "none";
}
function mostrarAreaTexto() {
	document.getElementById("areaTexto-container").style.display = "flex";
}	

function adicionarPalavra() {
	esconderMenu();
	mostrarAreaTexto();
	letrasAcertadas.length = 0;
	letrasErradas.length = 0;
	erros = 0;
}

function salvarPalavra() {
	let novaPalavra = input.value;
	palavras.push(novaPalavra);
	jogar();
}

function jogar(){
	esconderAreaTexto();
	esconderMenu();
	mostrarAreaJogo();
	mostrarBotoesJogo();
	letrasErradas.length = 0;
	letrasAcertadas.length = 0;
	erros = 0;
	escolherPalavraSecreta();
	console.log(palavraSecreta);
	desenharCanvas();
	desenharLinhas();
}

function novoJogo() {
	letrasErradas.length = 0;
	letrasAcertadas.length = 0;
	erros = 0;
	escolherPalavraSecreta();
	desenharCanvas();
	desenharLinhas();
}

function letraAcertada() {
	var akey = window.event.keyCode;
	var key = String.fromCharCode(akey);
	verificarLetra(key);
}

function verificarLetra(key) {				
	if (palavraSecreta.includes(key)) {
	desenharLetras(key);
} else {
		errou(key);
		letrasErradas.push(key);
	}
}

function errou(key) {
	if (!letrasErradas.includes(key)){
					desenharLetrasErradas(key);
	}
}

function perdeu() {
	alert("Você perdeu, a palavra era: " + palavraSecreta);
	menuPrincipal();
}

function ganhou() {
	alert("Parabens, você ganhou, a palavra era: " + palavraSecreta);
	menuPrincipal();
}

var botaoAdd = document.getElementById("botaoEnviar");
botaoAdd.onclick = salvarPalavra;