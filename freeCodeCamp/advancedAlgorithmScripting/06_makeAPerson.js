/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it
has to be a string.

These methods must be the only available means of interacting with the object.

Here are some helpful links:
Closures
Details of the Object Model
*/
var Person = function(firstAndLast) {

  var fullName = firstAndLast;

  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  };
  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };
  this.setFullName = function(full) {
    fullName = full;
  };


  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    var firstName = fullName.split(" ");
      firstName = firstName[0];
      return firstName;
  };
  this.getLastName = function() {
    var lastName = fullName.split(" ");
      lastName = lastName[1];
      return lastName;
  };

};

var bob = new Person('Bob Ross');
bob.getLastName();

/*
Object.keys(bob).length should return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return "Bob".
bob.getLastName() should return "Ross".
bob.getFullName() should return "Bob Ross".
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry")
*/
