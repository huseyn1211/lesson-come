class Person {
    constructor(surname,age,name){
        this.surname = surname;
        this.age = age;
        this.name = name
    }
    changeName(){
        this.name = "selim"
    }
}

class Admin extends Person{
    constructor(surname,age,name,role,salary){
        super(surname,age,name);
        this.role = role;
        this.salary = salary

    }
}
class Player extends Admin{
    constructor(surname,age,name,role,salary,id){
        super(surname,age,name,role,salary);
        this.id = id
    }

}

let a = new Person("quluzade",26,"huseyn")
a.changeName()
console.log(a)


let b = new Admin('quluzade',26,'huseyn',"salam","1600manat")
b.changeName()
console.log(b)



let c = new Player("hesimov",33,"aga","main","1300","1212")
c.changeName()
console.log(c)