 // How to do protitipes in JS


function Person (name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

Person.prototype.high = function(){
  return true;
}

var andres =  new Person('Andres', 'Gutierrez')
