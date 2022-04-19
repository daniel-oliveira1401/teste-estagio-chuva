// funcionalidade de expandir/colapsar da secao "resumo"
let resumoDOM = document.getElementById("resumo");

let resumoExpandido = false;

resumoDOM.addEventListener("click", () => {
	//resumoDOM.classList.toggle("resumo-expandido");

	if (resumoExpandido) {
		resumoDOM.style.height = "200px";
	} else {
		resumoDOM.style.height = resumoDOM.scrollHeight + "px";
	}
	resumoExpandido = !resumoExpandido;
});
