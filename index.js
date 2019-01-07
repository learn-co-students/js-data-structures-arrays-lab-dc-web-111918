// Write your solution here!
//push() pushes elements onto the ends of arrays
//pop() pops them off
//unshift() adds elements to the beginnings of arrays
//shift() pulls them off.
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver (name) {
  drivers.push(name);
}

function destructivelyPrependDriver (name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
}

function destructivelyRemoveFirstDriver () {
  drivers.shift();
}

function appendDriver (name) {
  return [...drivers, name];
}

function prependDriver (name) {
  return [name, ...drivers];
}

function removeFirstDriver () {
  return drivers.slice(1);
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
}
