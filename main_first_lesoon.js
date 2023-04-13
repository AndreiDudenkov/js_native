// примитивы:
// number, string, boolean, null, undefined, NaN, Infinity, BigInt, Symbol
// объекты:
// array, function, object


//1. Сложная структура
//2. Имеют свойства и методы
//3. Ссылочный тип данных

const num = 5

const obj = {} // №234 new Object()
const num_2 = num   //(5 & 5)
const obj_2 = obj // №234

obj_2.name = "Alex"
console.log(obj)

//const arr = []  // new Array()

class Student {
}
const st = new Student()


const user = {  // №345
    name: "Bob",
    age: 22,
    isStudent: false
}
// Боб стал студентом
const copyUser = {  // №346
    ...user,
    // name: "Bob",
    // age: 22,
    //isStudent: false,
    isStudent: true
}

const arr = [1,2,3,4,5]
const copyArr = [...arr]


console.log(user === copyUser) //false

function stateChecker(curr, next) {
    if(curr === next){
        alert("Изменений нет. Страницу не меняем")
    } else {
        alert("Изменения произошли, надо обновить представление")
    }
}

//stateChecker(user, copyUser)


const students = [  // state
    {
        name: "Bob",
        age: 34,
    },
    {
        name: "Alex",
        age: 32,
    },
]

//CRUD:
//Create
//Read (filter, sort, search)
//Update
//Delete

// add new student "CREATE"

const newStudent = {
    name: "John",
    age: 23,

}

const students_1 = [newStudent, ...students,]  // [old, old, new]


// stateChecker(students, students_1)

//const students_2 = [...students, {...newStudent, address:{...newStudent.address, street: "FIFA"}}]

// change age to John

const students_2 = students_1.map(el =>{
    if(el.name === "John"){
        return {...st, age: 24}
    }
    return el
  }                                              // false
)
//stateChecker(students_1, students_2)

// delete Bob

const students_3 = students_2.filter(el => el.name !== "Bob")   // []


stateChecker(students_2, students_3)




