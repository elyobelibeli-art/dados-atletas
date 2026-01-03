🏅 Avaliação de Atletas – JavaScript (POO)

📌 Sobre o Projeto

Este projeto implementa uma aplicação em JavaScript, utilizando Programação Orientada a Objetos (POO), capaz de receber informações de atletas, realizar cálculos específicos e exibir os resultados de forma estruturada.

A aplicação foi desenvolvida como parte de um desafio de certificação, evoluindo um projeto anterior de cálculo de médias em competições esportivas.

🎯 Funcionalidades

A aplicação permite:

Cadastro de atletas

Cálculo automático da categoria etária

Cálculo do IMC (Índice de Massa Corporal)

Cálculo da média válida das notas (descartando maior e menor)

Exibição organizada de todas as informações do atleta

🧱 Estrutura da Classe Atleta
🔹 Atributos

A classe Atleta recebe os seguintes atributos no construtor:

nome

idade

peso

altura

notas (array com 5 notas)

🔹 Métodos Implementados
Métodos de cálculo

calculaCategoria()

calculaIMC()

calculaMediaValida()

Métodos de acesso (getters)

obtemNomeAtleta()

obtemIdadeAtleta()

obtemPesoAtleta()

obtemNotasAtleta()

obtemCategoria()

obtemIMC()

obtemMediaValida()

📐 Regras de Negócio
📊 Categoria Etária
Idade	Categoria
9 a 11	Infantil
12 a 13	Juvenil
14 a 15	Intermediário
16 a 30	Adulto
Outros	Sem categoria
⚖️ Cálculo do IMC
IMC = peso / (altura × altura)

🏆 Média Válida

5 notas por atleta

Desconsidera a maior e a menor

Média calculada com as 3 notas centrais

Metodologia herdada do Projeto de Certificação 1

📥 Exemplo de Uso
Entrada
const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);

Saída Esperada
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9,25333333

🛠️ Tecnologias Utilizadas

JavaScript (ES6+)

Programação Orientada a Objetos

Métodos de array (sort, slice, reduce, forEach)

▶️ Como Executar
🔹 Via Navegador

Abra o console do navegador

Cole o código JavaScript

Pressione Enter

🔹 Via Node.js
node index.js

📂 Estrutura do Repositório
avaliacao-atletas/
├── index.js
└── README.md

📌 Observações

Código sem hardcoding

Estrutura modular e reutilizável

Fácil adaptação para interface web (HTML/CSS)

Ideal para estudos em JavaScript

📄 Licença

Este projeto está sob a licença livre.
Sinta-se livre para usar, modificar e distribuir.

✍️ Autor
JB
Desenvolvido para fins educacionais, com foco em JavaScript, lógica de programação e boas práticas de desenvolvimento.
