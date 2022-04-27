let data = [{
    studNo: 101,
    studName: '조수연',
    engScore: 90,
    korScore: 80
  },
  {
    studNo: 102,
    studName: '황진주',
    engScore: 88,
    korScore: 91
  },
  {
    studNo: 103,
    studName: '권가희',
    engScore: 92,
    korScore: 89
  },
  {
    studNo: 104,
    studName: '유해정',
    engScore: 92,
    korScore: 83
  }
];

// 초기화
let list = document.getElementById('list');
data.forEach(function(elem, idx, ary){
list.appendChild(makeTr(elem));
});

// 변경버튼 이벤트.
let changeBtn = document.querySelector('input[type = "button"]');
changeBtn.addEventListener('click', function(e){
  //대상 찾아오도록
  let targetTr = document.querySelectorAll('#list>tr');
  console.log(targetTr)
  let sno = document.getElementById('sno').value;
  let eng = document.getElementById('eng').value;
  targetTr.forEach(function(tr){
    console.log(tr);
    if (tr.children[0].innerHTML == sno) {
        tr.children[2].innerHTML == eng; //영어점수 변경.
    }
  });
});

  e.preventDefault(); //기본기능 차단
  console.log('hhhh');
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;
  
  if(!(sno && sname && eng && kor)) {
    alert('필수값을 입력하세요>>');
  }

  // if(!sno){ //위에 if와 기능 같음
  //   alert('변경할 아이디를 선택>>');
  //   return;
  // } else if(!sname) {
  //   alert('변경할 이름을 입력>>>');
  //   return;
  // } else if (!eng) {
  //   alert('변경할 영어점수를 입력>>>');
  //   return;
  // } else if(!kor) {
  //   alert('변경할 국어점수를 입력>>>');
  //   return;
  // }

  let searchTr = document.getElementById(`sno_${sno}`);
  searchTr.children[1].innerHTML = sname;
  searchTr.children[2].innerHTML = eng;
  searchTr.children[3].innerHTML = kor;


function changeallBack1(e){
  
}

// data.forEach(function (elem, idx, ary) {
//   list.appendChild(makeTr(elem));
// });

//스튜던트 오브젝트를 가져오면 student 한건 => <tr><td>학번</td><td>학생이름</td><td>영어</td><td>영어</td></tr>
function makeTr(student) {
  let tr = document.createElement('tr');
  tr.setAttribute('id', 's_' + student.studNo);
  tr.addEventListener('click', function (e){
    // e.stopImmediatePropagation();
    console.log(this.children[0].innerHTML);
    document.getElementById('sno').value = this.children[0].innerHTML;
    document.getElementById('sname').value = this.children[1].innerHTML;
    document.getElementById('eng').value = this.children[2].innerHTML;
    document.getElementById('kor').value = this.children[3].innerHTML;
  }, false); // true: 상위 -> 하위. false: 하위 -> 상위
  for (let field in student) { //student['studNo']
    let td = document.createElement('td');
    td.innerHTML = student[field];
    tr.appendChild(td);
  }
  // 버튼 : 삭제.
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function (e) {
    // e.stopImmediatePropagation(); // 이벤트 전파 차단
    console.log(this);
    // e.target.parentEliemnt.parentEliemnt.remove();
  }, false);
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);
  
  return tr;
}
