 // How to do protitipes in JS

/*
function Person (name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

Person.prototype.high = function(){
  return true;
}

var andres =  new Person('Andres', 'Gutierrez')
*/

class Person {

  constructor(name, lastname, high=0){
    this.name = name;
    this.lastname = lastname;
    this.high = high;
  }

  salute(){
    console.log(`Hi, this is ${this.name} ${this.lastname}`)
  }


} //end class

var andres = new Person('Andres', 'Gutierrez', 1.76)

class Developer extends Person{

  constructor(name, lastname, position){
    super(name, lastname)
  }
}

var freddy = new Developer('Freddy', 'Vega')
