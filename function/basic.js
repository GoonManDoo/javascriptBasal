//function/basic.js
//펑션은 자바의 메소드랑 비슷하다
//자바스크립트는 타입을 따로 지정 안하고 변수명만 지정해줌
// 1.함수 선언식으로 정의

function sum(num1, num2) {
  console.log(num1, num2);
  return num1 + num2;
}
// => let sum = function(num1, num2) {}
let result = sum(10, 20, 30);
console.log('결과는 ' + result)
//----------------------------------
//2.함수표현식으로 정의
let myfnc = function (val1, val2){
  var myVal = 10;
  return val1 + val2 + myVal;
}
console.log(typeof myfnc, myfnc);
result = myfnc(10, 20);
console.log(result);

let mysum = myfnc;
result = mysum(20, 30);
console.log(result);

const person = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person1 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person2 = {
  fullName: 'Park',
  age: 25,
  height: 165.3
}
// 함수표현식 myinfo.
let myinfo = function (obj) {
  var info = `${obj.fullName}이고, ${obj.age}살이고, 키는 ${obj.height}센치 입니다.`;
  return info;
}

result = myinfo(person);
console.log(result);

// 배열을 활용, 출력.
const persons = [person, person1, person2];
for (let person of persons) {
  let result = myinfo(person);
  console.log(result);
}

console.clear();
// 자바스크립트에서 문자열, 숫자, boolean, 배열 => 매개값으로 사용가능
// 함수를 매개변수로 사용가능.
// persons.forEach(function (val, ind, ary) { //forEach는 persons의 
//   // console.log(val, ind, ary);
//   console.log(myinfo(val));
// });

let funcParam = function (val, ind, ary) {
  console.log(myinfo(val));
};
persons.forEach(funcParam); // 메소드의 매개값으로 활용되는 함수 => 콜백함수.
