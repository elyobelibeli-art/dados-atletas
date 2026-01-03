class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // 1. Calcula a categoria
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    // 2. Calcula o IMC
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    // 3. Calcula a média válida
    calculaMediaValida() {
        // Copia e ordena as notas
        let notasOrdenadas = [...this.notas].sort((a, b) => a - b);

        // Remove a menor e a maior
        let notasValidas = notasOrdenadas.slice(1, 4);

        // Soma as notas válidas
        let soma = 0;
        notasValidas.forEach(nota => soma += nota);

        // Retorna a média
        return soma / notasValidas.length;
    }

    // Métodos de acesso (getters)
    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas.join(",");
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

