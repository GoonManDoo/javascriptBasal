// dom/practice4.js

document.addEventListener('DOMContentLoaded', function () {

  let showDiv = document.querySelector('#show');
  showDiv.style.width = '300px';
  showDiv.style.height = '300px';
  showDiv.style.backgroundColor = 'black';

  let inputTag = document.getElementById('userName');
  inputTag.addEventListener('change', function(){
    let span = document.createElement('span'); 
    span.style.display = 'inline-block'; // span : inline-level
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginLeft = '2px';
    span.style.marginRight = '2px';
    span.style.backgroundColor = 'grey';
    span.style.color = 'white';
    span.innerHTML = document.querySelector('#userName').value;
    showDiv.appendChild(span);

    //value => clear
    document.querySelector('#userName').value = '';
  });
 
  // button 이벤트 추가
  let add = document.querySelector('#addBtn');
  add.addEventListener('click', function () {
    let span = document.createElement('span'); 
    span.style.display = 'inline-block'; // span : inline-level
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginLeft = '2px';
    span.style.marginRight = '2px';
    span.style.backgroundColor = 'grey';
    span.style.color = 'white';
    span.innerHTML = document.querySelector('#userName').value;
    showDiv.appendChild(span);

    //value => clear
    document.querySelector('#userName').value = '';
  })
})