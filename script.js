//EX 01
const dobro = (a) => a * 2;
console.log(dobro(2));

//EX 02
const dividir = (a, b) => a / b;
console.log(dividir(9, 3))

//EX 03
const mensagemBoasVindas = (nome) => "Seja bem-vindo," + nome
console.log(mensagemBoasVindas(" Vinicius!"))

//EX 04
const aplicarOperacao = (a, b, operacao) => operacao(a, b);
console.log(aplicarOperacao(5, 10, (x, y) => x + y));
console.log(aplicarOperacao(5, 4, (x, y) => x * y));
