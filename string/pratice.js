// string/pratice.js

let str1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat repellat atque quis corporis reiciendis molestias, provident asperiores veritatis nobis repudiandae iste necessitatibus commodi minus incidunt a pariatur adipisci aut.'
// 단어의 길이가 10개 이상인 값을 골라내서
console.log('hello'.length);
// result = result.filter(function(val) {
//   return val;
// });
let result = (str1.split(' ').filter(el => el.length >=10).join(','));
console.log(result);