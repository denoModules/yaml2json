
##

```
import * as yaml2json from 'https://deno.land/x/yaml2json/mod.ts'
const jsonobject = await yaml2json.obj("./test.yaml")
const jsontext = await yaml2json.txt("./test.yaml")
console.log('name:', jsonobject.name)
console.log('age:', jsonobject.age)
console.log('json text:', jsontext)
```


## example
```
cd example
deno test --allow-read
```