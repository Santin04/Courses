function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(5));
console.log(showData('testando generic'));
console.log(showData(true));
console.log(showData(["teste"]));
//aceita qualquer objeto que tenha a propriedade name, as outras não importa
function showProduct(obj) {
    return "O nome do produto \u00E9 ".concat(obj.name);
}
var myObj = { name: 'Porta', cor: 'Branca' };
console.log(showProduct(myObj));
var myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'black' };
var myPen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'blue' };
console.log(myCar);
console.log(myPen);
