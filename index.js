var animal = "dog"

function myAnimal() {
return animal
}
myAnimal()

function yourAnimal() {
  var animal = "cat"
  return animal
}
yourAnimal()

function add2(n) {
   n = 1
   two = 2
  return  (two + n)
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
