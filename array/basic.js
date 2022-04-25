// array/basic.js

//배열선언 : [], new Array();
let arr = [1, 2];
let newAry = [3, 4, 5, 6];

//추가: push:마지막 위치, unshift:첫번째 위치
arr.push(3);
arr.unshift(0);

// 제거: pop():맨 뒤, shift() 맨 앞
arr.pop();
arr.shift();

// forEach
newAry.forEach(function (elem) {
  // arr.push(elem);
  arr.unshift(elem); // 6,5,4,3,1,2 순으로 출력
});

arr.pop(); // 6, 5, 4, 3, 1, 
arr.pop(); // 6, 5, 4, 3
arr.shift(); // 5, 4, 3

// splice(위치, 크기, 대체값) : 추가, 수정, 삭제 가능함.
newAry.forEach(function(elem){
  arr.splice(1, 0, elem); //5, 4, 3 > 4를 0으로 잡고 elem 값으로 잡겠다. >> 
                          //5, 6, 5, 4, 3, 4, 3이됨
  
  arr.splice(1, 1, elem); //5, 6, 5, 4, 3, 4, 3 >>
                          //5, 6, 3이 됨
});
// arr.splice(1, 2, 8, 9); // 4, 3대신에 8, 9로 대신함
//  arr.splice(1, 1, 8, 9); // 4, 3대신에 8, 9로 대신함 5, 8, 9, 3이 됨
// arr.splice(1, 0, 8, 9); // 

let names = [];
let anonym = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat repellat atque quis corporis reiciendis molestias, provident asperiores veritatis nobis repudiandae iste necessitatibus commodi minus incidunt a pariatur adipisci aut.';
anonym.split(' ').forEach(function(elem){
  names.push(elem);
});

console.log(names.toString()); //toString : 배열, 배열, 배열,....
console.log(names);

console.log(arr.toString());

// forEach() : 반환값은 없다.
// map() : 각요소에 해당되는 값을 mapping 작업(다른 형태로 반환)
// filter() : return 조건을 만족하는 값만 반환
let result = names.map(function(elem){
  return elem.toUpperCase();
}); //새로운 배열.

result = result.filter(function (elem){ 
  return elem.length >= 10;
});

result = names//
  .map(elem => elem.toUpperCase())//
  .filter(elem => elem.length >=10); // chain rules 위에 두 식을 하나로 합친거
console.log(result);