//EX 01
const dobro = (a) => a * 2;
console.log(dobro(2));

//EX 02
const dividir = (a, b) => a / b;
console.log(dividir(9, 3));

//EX 03
const mensagemBoasVindas = (nome) => "Seja bem-vindo," + nome;
console.log(mensagemBoasVindas(" Vinicius!"));

//EX 04
const aplicarOperacao = (a, b, operacao) => operacao(a, b);
console.log(aplicarOperacao(5, 10, (x, y) => x + y));
console.log(aplicarOperacao(5, 4, (x, y) => x * y));

//EX 05
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(valores => 10 / 100 * valores);
console.log(precosComDesconto);

//EX 06
const idades = [12, 20, 15, 18, 43, 32];
const maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade);

//EX 07
const numeros = [20, 11, 30, 40];
const soma = numeros.reduce((total, num) => total + num, 0);
console.log(soma);