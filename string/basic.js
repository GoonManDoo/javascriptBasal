//string/basic.js
//문자열 vs 문자열 객체
let str1 = '문자열';
console.log(typeof str1);

let str2 = new String('문자열'); //오브젝트.
console.log(typeof str2);

console.log(str1 == str2); //비교연산자 == 값을 비교.
console.log(str1 === str2); //비교연산자 === 값과 타입을 비교

let result = str1.substring(0, 2); //index:0 ~ index: 2 잘라내기.
console.log(result);
str2.substr(0, 2); //index:0 크기 2 잘라내기.
console.log(result);

const cal1 = '1 + 2 * 3'; //string
const cal2 = new String('1 + 2 * 3'); //object

// eval() : 문자열 => 수식변경.
console.log(eval(cal1)); // 1 + 2 * 3 => 7
console.log(eval(cal2)); //object
console.log(eval(cal2.valueOf())); //object => 1 + 2 * 3 => 7 (문자열)

// trim() : 좌우의 여백을 잘라내기.
console.log(' 문자열 공백 테스트 '.trim());
console.log(' 문자열 공백 테스트 '.trimStart()); //왼쪽 공백만 잘라낸다.
console.log(' 문자열 공백 테스트 '.trimStart().trimEnd()); //trimStart 왼쪽 공백만, trimEnd 오른쪽 공백만.

//문자열의 공백 제거.
result = ' 문자열 공백 테스트 '.split(' '); //매개값을 기준으로 문장을 잘라서 배열 상태로 리턴.
result = result.filter(function (val, ind, ary) { //filter : 문장 다 붙이는거
  return val; //  ['' '문자열', '공백', '테스트', '']
}); //배열의 각 요소의 true => 배열
console.log(result.join('')); //join : 배열 => 문자열 변환

result = ' 문자열 공백 테스트 '.split(' ').filter(val => val).join(',');
console.log(result);

//자바스크립트 boolean 값: null, ' ', 0, undefined => false;
if ('문자열') { // null => false
  console.log('false값.')
}

// slice, substring, substr(Deprecated);
console.log('안녕하세요 반갑습니다.'.slice(0, 5)); // 인덱스 기준 0 ~ 5 잘라내기. slice는 -값도 가질 수 있음.)
console.log('안녕하세요 반갑습니다.'.substring(0, 6)); // 인덱스 기준 0 ~ 5 잘라내기.
console.log('안녕하세요 반갑습니다.'.substr(2, 3)); // 두번째부터 3자리를 가져오겠다.

// toString() : 문자열로 변환.
let num1 = 123;
console.log(typeof num1);
num1 = num1.toString();
console.log(typeof num1);

true.toString(); // 'true'

let obj = {
  key: 'Hong',
  value: 15
}
console.log(obj.toString()); // 오브젝트는 toString로 변환이 안됨
console.log(obj.key.toString());
console.log(obj.value.toString());




