//npm i -g typescript => para instalar o typescript globalmente
//tsc arquivo.ts => cria um arquivo js com o código do ts
//tsc --init => cria o tsconfig
//tsc -w => assim você não precisa ficar compilando toda hora o seu arquivo ts
//numbers
var numero01 = 10;
var numero02 = 3;
function exibir(n1, n2) {
    var soma = n1 + n2;
    return soma;
}
;
exibir(numero01, numero02);
//string
var firstName = 'Mateus';
//boolean
var a = true;
//array
var numbers = [1, 2, 3];
var nomes = ['Mateus', 'Santin'];
//any => definir um dado como any, significa que ele aceita qualquer tipo (evitar)
function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    if (c !== undefined) {
        console.log('C: ' + c);
    }
}
//o terceiro para parâmetro, pro conta do ?, faz com que ele não seja obrigatório
showNumbers(1, 3);
//Union type:
function unionType(a) {
    console.log('R$' + a);
}
unionType(500);
unionType('600');
function showId(id) {
    console.log('ID: ' + id);
}
showId(21);
showId('2i3');
function showDirection(direction) {
    console.log("Dire\u00E7\u00E3o: ".concat(direction));
}
showDirection('left');
//Com '!' você consegue anular o erro do ts
function showText(text) {
    if (typeof text === 'string') {
        console.log(text);
    }
}
function funcNoReturn() {
    console.log('O void indica que essa é uma função sem retorno');
}
//callback
function greet(name, callback) {
    var message = "Hello, ".concat(name, "!");
    callback(message);
}
greet("Bruno", function (message) {
    console.log(message);
});
//valor pre definido
function preDefinido(num01, num02) {
    if (num02 === void 0) { num02 = 0; }
    var ret = num01 + num02;
    return ret;
}
console.log(preDefinido(10));
//unknown
function desconhecido(x) {
    console.log(x);
}
desconhecido('1');
desconhecido(2);
desconhecido([1, 2, 3]);
//never indica que a função não vai ter nenhum retorno
function showError(msg) {
    throw new Error(msg);
}
// showError('Erro de teste')
//REST operator
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
}
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(5, 348, 2348));
//destructuring
function showProduct(_a) {
    var name = _a.name, price = _a.price;
    return "O produto ".concat(name, " tem o valor de ").concat(price);
}
var product = { name: 'Vaso', price: 49.90 };
console.log(showProduct(product));
