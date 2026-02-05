//Exemplos for of
const livros = ['Seleção', 'Rainha vermelha', 'A garota do lado'];
const frase = 'Livros são muito bons';

for(const livro of livros) {
  console.log(livro);
}

for(const char of frase) {
  console.log(char);
}

//Exemplo for in
const caderno = {
  marca: 'Tilibra',
  materias: 15,
}

for(const propriedade in caderno) {
  console.log(propriedade);
}

//Exemplo arrays for in
const cores = ['Azul', 'Rosa', 'Laranja'];

for(const index in cores) {
  console.log(index);
}

for(const index in cores) {
  console.log(cores[index]);
}

//Exemplo do while
let i = 0;
do {
  console.log(i++)
} while (i <= 10);

//Exemplo regular expressão
const padraoRegexp = /y/;

const texto = 'Python';
const novoTexto = texto.replace(padraoRegexp, 'B');

console.log(novoTexto)

//Exemplo literal
const regexp = /Java/;

console.log('JavaScript'.replace(regexp, 'Type'));

//Exemplo flag: g
const regexp2 = /a/g;

console.log('JavaScript'.replace(regexp2, 'i'));