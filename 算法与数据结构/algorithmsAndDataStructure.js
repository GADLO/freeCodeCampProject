//Functional Programming
function splitify(str) {
  return str.split(/\W|\s/);
}
splitify('Hello World,I-am code');

//Combine an Array into a String Using the join Method
function sentensify(str) {
  // Only change code below this line
  let arr = str.split(/\W|\s/);
  str = arr.join(' ');
  return str;
  // Only change code above this line
}

sentensify('May-the-force-be-with-you');

//Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
  let arr = title.toLowerCase().split(/\W|\s/);
  let str = arr.filter((i) => i !== '').join('-');
  return str;
}
urlSlug(' Winter Is  Coming');
