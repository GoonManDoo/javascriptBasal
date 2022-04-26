// dom./practice1.js

document.addEventListener('DOMContentLoaded', function () {

  let menus = ['고슴도치', '청설모', '미어캣'];

  let ulTag = document.createElement('ul'); //element node
  menus.forEach(menu => {

    // for(let i=0; i<menus.length;i++) {

    let liTag = document.createElement('li');
    liTag.innerHTML = menu;
    // liTag.innerHTML = menus[i];
    
    // 하위요소로 추가
    ulTag.appendChild(liTag);
    // }
  });
  console.log(ulTag);

  let divShow = document.getElementById('show');
  divShow.appendChild(ulTag); //화면출력

})

//1.아메리카노
// liTag = document.createElement('li');
// liTag.innerHTML = '미지근한아메리카노';
// // 하위요소로 추가
// ulTag.appendChild(liTag);

// liTag = document.createElement('li');
// liTag.innerHTML = '시원한카페라떼';
// // 하위요소로 추가
// ulTag.appendChild(liTag);

// liTag = document.createElement('li');
// liTag.innerHTML = '시원한레몬에이드';
// // 하위요소로 추가
// ulTag.appendChild(liTag);