interface Product {
    name: string,
    price: number,
    isAvaliable: boolean
}

function showDetails(product: Product) {
    console.log(`O produto ${product.name} custa R$${product.price} `)
    if (product.isAvaliable) {
        console.log('O produto está disponivel')
    }
}

const shirt:Product = {
    name: 'Camisa',
    price: 19.99,
    isAvaliable: true,
}

//propriedade opcional
interface User {
    email: string,
    role?: string
}

function showUser(user: User) {
    console.log('O email do usuário é: ' + user.email)

    if (user.role) {
        console.log('E sua função é: ' + user.role)
    }
}

const u1: User = {email: 'mateus@gmail.com', role: 'admin'}
const u2: User = {email: 'roberto@gmail.com'}

showUser(u1)
showUser(u2)

//propriedade que não pode ser alterada (readonly)
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca: Car = {
    brand: 'VW',
    wheels: 4
}

//esse comando a baixo vai dar erro, pois está tentando atribuir outra valor em um readonly
// fusca.wheels = 6

interface Coords {
    //todas as chaves tem que ser string e os valores numeros
    [index: string]: number
}

let coords: Coords = {
    x: 1
}
coords.y = 15
console.log(coords)

//extends
interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superPowers: string[]
}

const matheus: Human = {
    name: 'Mateus',
    age: 30
}
console.log(matheus)
const goku: SuperHuman = {
    name: 'Goku',
    age: 512,
    superPowers: ['kamehameha', 'genki dama']
}
console.log(goku)

//Marge entre interface
interface Human02 {
    name: string
}
interface Gun {
    type: string,
    caliber: number
}
//assim você junta os dois
type HumanWithGun = Human02 & Gun

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'shotgun',
    caliber: 12
}
console.log(arnold)