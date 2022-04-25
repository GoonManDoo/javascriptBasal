// string/basic3.js
// 'hello', "hello", `hello` => 문자열(3개 다 똑같음).
let str1 = 'hello';

console.log(`${str1}`);
let str2 = `Welcome 
to my home,
This is house.
`;
// ``을 쓰면 여러 라인에 걸쳐서 글을 적을 수 있음. 다른건 줄바꿈을 넣어줘야됨 \n
console.log(str2);

let age = 22;
console.log(`${age>=20?'성인' : '청소년'}`);

