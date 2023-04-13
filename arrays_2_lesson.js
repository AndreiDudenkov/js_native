let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

//CRUD
//C => [...students, newStudent]
//R => map (obj => JSX.Element)
//U => map (condition ? obj => {...obj, prop: newValue} : obj)
//D => filter (condition)

const getNames = (array) => {
    const result = []
    const elMapFn = (st) => st.name
    for (let i = 0; i < array.length; i++) {
       const newValue = elMapFn(array[i])
       result[i] = newValue
    }
    return result
}

console.log(students.map((st) => st.name))
console.log(getNames(students))

const getSimpleStudents = (array) => {
    const result = []
    const elMapFn = (st) => ({
        name: st.name,
        scores: st.scores
    })
    for (let i = 0; i < array.length; i++) {
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}

const selfMadeMap = (array, elMapFn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}

console.log(students.map((st) => ({name: st.name, scores: st.scores})))
console.log(selfMadeMap(students, (st) => ({name: st.name, scores: st.scores})))


const selfMadeFilter = (array, conditionFn) => { // true || false
    const result = []
    for (let i = 0; i < array.length; i++) {
        if(conditionFn(array[i], i) === true){
            result.push(array[i])
        }
    }
    return result
}

console.log(students.filter(st => st.scores >= 100))
console.log(selfMadeFilter(students, (st, i)=> st.scores >= 100))


const selfMadePush = (array, ...els) => {
    console.log(els)
    for (let i = 0; i < els.length; i++) {
        array[array.length] = els[i]
    }
    return array.length
}
const arr = [1,2,3,4,5]
// console.log(selfMadePush( arr, 6,7,8))
console.log(arr.push(6,7,8))
console.log(arr)


const selfMadeIncludes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value){
            return true
        }
    }
    return false
}

console.log(arr.includes(4))
console.log(selfMadeIncludes(arr, 4))




