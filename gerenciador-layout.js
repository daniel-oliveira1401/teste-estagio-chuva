//variaveis da secao "resumo"
let btnVerMais = document.getElementById("btn-ver-mais");
let resumoConteudo = document.getElementById("resumo__conteudo");
let resumoExpandido = false;

// funcionalidade de expandir/colapsar da secao "resumo"
$("#resumo").click(() => {
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

function registrarEventosBootstrap() {
	//limpar qualquer listener que ja esteja registrado para esses eventos
	//para evitar listeners duplicados caso essa funcao seja chamada mais
	//de uma vez
	$(".collapse").unbind("show.bs.collapse");
	$(".collapse").unbind("hide.bs.collapse");

	//evento gerado pelo bootstrap ao expandir as respostas de uma pergunta
	$(".collapse").on("show.bs.collapse", (e) => {
		//✨ magia jquery ✨

		//(retorna o elemento que corresponde a pergunta que teve as respostas expandidas)
		let pergunta = $(e.target).parent(".pergunta")[0];

		//(expande o corpo da pergunta junto)
		let corpoPergunta = $(pergunta).find(".pergunta-body");
		$(corpoPergunta).addClass("pergunta-body-expanded");
	});

	//evento gerado pelo bootstrap ao colapsar as respostas de uma pergunta
	$(".collapse").on("hide.bs.collapse", (e) => {
		//✨ magia jquery ✨

		//(retorna o elemento que corresponde a pergunta que teve as respostas colapsadas)
		let pergunta = $(e.target).parent(".pergunta")[0];

		//(colapsa o corpo da pergunta junto)
		let corpoPergunta = $(pergunta).find(".pergunta-body");
		$(corpoPergunta).removeClass("pergunta-body-expanded");
	});
}

registrarEventosBootstrap();
