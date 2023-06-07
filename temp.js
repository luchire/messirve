const returnArr = () => [1, 2, 3]

const a = returnArr()
console.log(a)
console.log(Array.isArray(a))

const [b, c, d] = returnArr()
const [i, ...g] = returnArr()
console.log(b)
console.log(c)
console.log(d)
console.log(i)
console.log(g)


const returnObj = () => {return {string: 'hola', boolean: true, character: 'a', number: 9}}

const t = returnObj()
console.log(t)

const {string, number} = returnObj()
console.log(string)
console.log(number)

//como evito hacer despues const h = string?

const {string: h} = returnObj()
console.log(h)

