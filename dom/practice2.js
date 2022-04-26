// dom/practice2.js

document.addEventListener('DOMContentLoaded', function () {

  let div1 = document.createElement('div'); //element node

    let spanName = document.createElement('span');
    spanName.setAttribute('id', 'name');
    let name = document.createTextNode('홍길동')
    spanName.appendChild(name); // <span>홍길동</span>
    // spanName.innerHTML = '홍길동'; 
    

    let spanAge = document.createElement('span');
    spanAge.setAttribute('class', 'age'); // attribute 노드 추가 ,이거는 자식이 아니고 속성임
    let age = document.createTextNode('20살');
    spanAge.appendChild(age); // <span>20살</span>
    // spanAge.innerHTML = '20살';

    // 하위요소로 추가
    let hypen = document.createTextNode(' - ');

    div1.appendChild(spanName);
    div1.appendChild(hypen);
    div1.appendChild(spanAge);

    let divShow = document.getElementById('show').appendChild(div1);
});
  // divShow.appendChild(div1); //화면출력