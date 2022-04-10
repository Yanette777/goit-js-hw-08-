let x = 10;

function createFunction1() {
  let x = 20;
  return new Function('return x;'); // this |x| refers global |x|
}
