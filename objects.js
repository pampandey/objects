
let person ={
    name: ":pam",
    age: 39,
    inClass:true,
    classesTaught: ['Javascript','arrays']

   }
   let {name,age} = person
   console.log(name)
   console.log(age)

console.log(person)
delete person.name


console.log(person.name)
person.name="Damian" // edit
console.log(person["name"])

const allProps = Object.keys(person)
console.log(allProps)
const hasAge = allProps.indexOf ("age")!= -1
console.log(hasAge)


person.hasGlasses = true;//add a new property
console.log(person)

person.Age = 21 //mistyped age.
console.log(person)




