var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    len: 0
  };
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function (value) {
    if (this.len === 0) {
      this[0] = value;
      this.len++;
    } else {
      this[this.len] = value;
      this.len++;
    }
  },
  pop: function () {
    if (this.len === 0) {
      return 0;
    }
    this.len--;
    return this[this.len];
  },
  size: function () {
    return this.len;
  }
};


/*
//What is a data Structure?
//A way of formally arranging pieces of information that gives it specific properties and use for specific purposes

//CRUD - Create, Retrieve, Update, and Delete
//Store Information -> Properties -> Key-Value Pairs
//Behavior to do with that information ->  Functions -> Methods

//Literal Object
var Car = {
  mileage: 0,
  color: "green"
}

Car.drive = function() {
  Car.mileage++;
}

/////Factory of cars
//Functional Instantiation
function makeCar(paint) {
  var instance = {
    mileage: 0,
    color: paint
  }

  instance.drive = function() {
    instance.mileage++;
  }

  return instance;
}

var kevinsCar = makeCar("green");
kevinsCar.drive()
var minseoksCar = makeCar("red");
minseoksCar.mileage === 1
minseoksCar.drive()

//Functional-Shared Instantiation Pattern
function makeCarShared(paint) {
  var instance = {
    mileage: 0,
    color: paint,
    drive: carMethods.drive
  }

  return instance;
}

var carMethods = {};

carMethods.drive = function() {
  this.mileage++;
  //this === jenessasCar - line 57
  //this === tuckersCar - line 58
}

var jenessasCar = makeCarShared();
var tuckersCar = makeCarShared();
jenessasCar.drive();
tuckersCar.drive();
 */


