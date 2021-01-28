import * as yaml2json from '../mod.ts'

const jsonobject = await yaml2json.obj("./test.yaml")

const jsontext = await yaml2json.txt("./test.yaml")

console.log('name:', jsonobject.name)
console.log('age:', jsonobject.age)
console.log('json text:', jsontext)