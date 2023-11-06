class personagem {
	constructor(nome, idade){
		this.nome = nome,
		this.idade = idade,
		this.tipo = {
			0: ["guerreiro", "espada"],
			1: ["monge", "artes marciais"],
			2: ["mago", "magia"],
			3: ["ninja", "shuriken"]
		}
	}
	   
	imprimirAtaque(tipo){
		for (let index in this.tipo) {
			let [classe, ataque] = this.tipo[index];
			if (classe === tipo){
				console.log(`O ${classe} atacou usando ${ataque}`);
			}
		}
	}
}

// Main
(function () {	
	let heroi = new personagem("M4SC-321", 22);
	heroi.imprimirAtaque("ninja");
})();