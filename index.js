// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(driver) {
  arr = drivers.push(driver);
  return arr;
}

function destructivelyPrependDriver(driver) {
  arr = drivers.unshift(driver);
  return arr;
}

function destructivelyRemoveLastDriver(driver) {
  arr = drivers.pop();
  return arr;
}

function destructivelyRemoveFirstDriver(driver) {
  arr = drivers.shift();
  return arr;
}

function appendDriver(name) {
  arr = [...drivers, (name)]
  return arr;
}

function prependDriver(name) {
  arr = [(name), ...drivers]
  return arr;
}

function removeLastDriver() {
  driver = drivers.slice(0, drivers.length - 1);
  return driver;
}

function removeFirstDriver() {
  driver = drivers.slice(1);
  return driver;
}
