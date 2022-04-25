// dom/basic.js

// DOM : 생성, 속성, 삭제, 부모-자식 관계.
// addEventListenr('이벤트이름', '실행할 이벤트 핸들러(코드)')


document.addEventListener('DOMContentLoaded', function(){ 
 //다큐먼트 = body영역, EventListener = 클릭, 키보드 입력, 마우스 움직이기
let h3Tag = document.getElementsByTagName('h3'); // HTMLCollection
console.log(h3Tag);
h3Tag[1].innerHTML = 'content changed.';

let first = document.getElementById('first'); // element 하나를 가져옴
console.log(first);
first.innerHTML = 'Git Chaged';

let second = document.getElementsByClassName('first');
second[0].innerHTML = '사과';

// CSS의 선택자 h3 > div
// let list = document.querySelector('ul>li');
let list = document.querySelectorAll('ul>li');

console.log(list);
list[0].style.backgroundColor = 'grey';
list[1].style.backgroundColor = 'red';
list[2].style.backgroundColor = 'yellow';


// DOM 생성.
let newList = document.createElement('li'); // <li>Mango</li>
newList.innerHTML = 'Mango';

console.log(newList);

// ul 하위요소 <li>Mango</li>
let ulTag = document.querySelector('ul');
ulTag.appendChild(newList);


});


