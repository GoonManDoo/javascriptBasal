//object/basic.js

const member = {
  memberId: 'user1',
  memberName: 'Hong',
  getMemberName: function(){
    return `회원아이디 ${this.memberId}`;
  },
  setMemberName: function(name) {
    this.memberName = name;
  }
}

console.log(member.memberId);
member.setMemberName("Hwang");
console.log(member.getMemberName);

member.memberAge = 20;
delete member.memberAge; //나이를 콘솔에서 지우겠다.
member['memberPoing'] = 1000;
member.grade = function (){
  if(this.memberPoing > 500) { //this는 member을 가르킴
    return 'gold'
  } else if(this.memberPoing > 1000) {
    return 'platinum'
  }
}
// console.log(member);
console.log(member.grade); //grade라는 속성 값을 보여줌

// 클래스, Construct 함수. => objecte 생성.
class Student{
  constructor (sno, sname){ //두개의 매개값을 받는 생성자 constructor
    this.sno = sno;
    this.sname = sname;
  }
  set mathScore(score){
    this._mathScore = score; //생성자에 선언되지 않은 속성추가.. 실질적으로 값을 담는 곳은 _mathScore임
  }
  get mathScore(){
    return this._mathScore; //_mathScore 속성값을 읽어오겠음.
  }
  getSno(){
    return this.sno;
  }
  setSno(sno) {
    this.sno = sno;
  }
}

const s1 = new Student('1111', 'Hong');
const s2 = new Student('2222', 'Hwang');
console.log(s1.getSno());
s1.engScore = 80;
s1.mathScore = 90;
console.log(s1.engScore);
console.log(s1.mathScore);

function Person(ssn, sname){
  this.ssn = ssn;
  this.sname = sname;
  this.getInfo = function(){
    return `주민번호 ${this.ssn}, 이름${this.sname}`;
  }
}
const p1 = new Person('951111-1111111', 'Hong');
const p2 = new Person('972222-2222222', 'Hwang');
const p3 = new Person('333333-3333333', 'Park');
console.log(p1.getInfo());