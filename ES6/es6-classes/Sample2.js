class Person{
    constructor(name){
        this.name= name;
    }
    getName(){
        return this.name;
    }
}
let p1 = new Person("John");
console.log(p1.getName())