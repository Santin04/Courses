function showDetails(product) {
    console.log("O produto ".concat(product.name, " custa R$").concat(product.price, " "));
    if (product.isAvaliable) {
        console.log('O produto está disponivel');
    }
}
var shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvaliable: true,
};
function showUser(user) {
    console.log('O email do usuário é: ' + user.email);
    if (user.role) {
        console.log('E sua função é: ' + user.role);
    }
}
var u1 = { email: 'mateus@gmail.com', role: 'admin' };
var u2 = { email: 'roberto@gmail.com' };
showUser(u1);
showUser(u2);
var fusca = {
    brand: 'VW',
    wheels: 4
};
var coords = {
    x: 1
};
coords.y = 15;
console.log(coords);
var matheus = {
    name: 'Mateus',
    age: 30
};
console.log(matheus);
var goku = {
    name: 'Goku',
    age: 512,
    superPowers: ['kamehameha', 'genki dama']
};
console.log(goku);
var arnold = {
    name: 'Arnold',
    type: 'shotgun',
    caliber: 12
};
console.log(arnold);
