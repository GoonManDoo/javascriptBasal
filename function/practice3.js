//practice2

const num1 = 10; //

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

//-------------------------------------
const persons = [person, person1, person2];

const newPersons = persons.map(function(val, idx) {
  let newObj = {}; //오브젝트 타입을 선언.
  newObj.index = idx + 1; //오브젝트의 속성(필드)를 추가.
  newObj.fName = val.fullName;
  newObj.age = val.age;
  newObj.height = val.height;

  return newObj;
  // return val.fullName;
});

console.log(newPersons);

//함수 정의문
function tableList(personAry) { // line 생성.
  document.write('<table border=1>');
  document.write('<tr><th>순번</th><th>이름</th><th>나이</th><th>키</th></tr>')
  for(let person of personAry){
    document.write('<tr>');
    for(let field in person) { // 컬럼생성.
    document.write(`<td>${person[field]}</td>`);
    }

    document.write('</tr>');
  }
  document.write('</table>');
}
//함수실행
tableList(newPersons);