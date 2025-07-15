function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}
console.log(showData(5))
console.log(showData('testando generic'))
console.log(showData(true))
console.log(showData(["teste"]))

//aceita qualquer objeto que tenha a propriedade name, as outras não importa
function showProduct<T extends {name: string}>(obj: T) {
    return `O nome do produto é ${obj.name}`
}
const myObj = {name: 'Porta', cor: 'Branca'}
console.log(showProduct(myObj))

//mudando o type das propriedades
interface myObject<T, U, Q> {
    name: string,
    wheels: T,
    engine: U,
    color: Q
}
type Car = myObject<number, number, string>
type Pen = myObject<boolean, boolean, string>

const myCar:Car = {name: 'Fusca', wheels: 4, engine: 1.0, color: 'black'}
const myPen:Pen = {name: 'Caneta BIC', wheels: false, engine: false, color: 'blue'}
console.log(myCar)
console.log(myPen)

//
function getSomeKey<T, K extends keyof T>(obj: T, key: K): string {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${String(obj[key])}`
}
const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'hd'))
console.log(getSomeKey(server, 'ram'))