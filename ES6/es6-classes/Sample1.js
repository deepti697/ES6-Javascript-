function Person(name){
    this.name= name;
}
//In javascript evry function and object has property named prototype by default
Person.prototype.gender = 'male';
Person.prototype.getName =function(){
    return this.name;
}

var p1= new Person("John");
console.log(p1.getName());
console.log(p1.gender);
console.log(p1 instanceof Person)