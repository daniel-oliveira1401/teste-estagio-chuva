// funcionalidade de expandir/colapsar da secao "resumo"

//variaveis da secao "resumo"
let btnVerMais = document.getElementById("btn-ver-mais");
let resumoDOM = document.getElementById("resumo");
let resumoConteudo = document.getElementById("resumo__conteudo");
let resumoExpandido = false;

resumoDOM.addEventListener("click", () => {
	if (resumoExpandido) {
		//colapsa o resumo e mostra o "ver mais"

		resumoConteudo.style.height = "115px";
		btnVerMais.style.display = "block";
	} else {
		//expande o resumo e esconde o "ver mais"

		resumoConteudo.style.height = resumoConteudo.scrollHeight + "px";
		btnVerMais.style.display = "none";
	}
	resumoExpandido = !resumoExpandido;
});
