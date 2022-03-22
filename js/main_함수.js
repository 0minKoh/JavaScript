import _ from 'lodash'

console.log('hello')
console.log(_.camelCase('hello'))

//if 조건문
a = 0
if (a === 0) {
  console.log('a is 0')
} else if (a === 2) {
  console.log('a is 2')
} else {
  console.log('rest')
}

//switch 조건문
a = 0
switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  // 나머지(else와 같은 기능)
  default:
    console.log('rest')
  // break 필요 X
}

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {실행문장}

for (let i = 0; i < 3; i += 1) {
  console.log(i)
}

// 변수 유효범위
// 변수가 선언된 블록 내부에서만 변수 호출이 가능하다
function scope() {
  if (true) {
    const a = 123
    console.log(a)
  }
}

scope()

// 잘못된 사례
function scope() {
  if (true) {
    const a = 123
  }
}
console.log(a)
scope()

// 함수
// function 함수이름 (매개변수, ..) {실행문장}
  // 함수 선언(정의)

function sum(x,y) {
  console.log(x)
  return x + y
  // return을 만나면 함수 종료!
  console.log(y)
}

  // 함수 호출
sum (1, 3)

  // 함수를 변수에 담아 재사용을 실현
const a = sum(1, 3)

// arguments로 객체 만들기
function sum() {
  console.log(arguments)
}

sum(1, 3, 5)
// 실행결과
// 매개변수 객체 자동 생성{0: 1, 1: 3, 2: 5}

// argument[index]로 호출가능
console.log(argument[0], argument[1])


// 화살표 함수
// function () {}
const double = function (x) {
  return x * 2
} 

console.log('double: ', double(2))

// () => {}
const doubleArrow = (x) => {
  return x * 2
}

console.log('doubleArrow: ', doubleArrow(2))

// Tip
// 매개변수가 하나일 때 (소괄호) 생략 가능
const doubleArrow1 = x => { return x * 2 }

console.log('doubleArrow1: ', doubleArrow1(2))

// 실행문이 return(반환) 하나일 때 {중괄호} 생략 가능
const doubleArrow2 = x => x * 2

console.log('doubleArrow1: ', doubleArrow2(2))

  // return 값이 객체 데이터 일때 ({object})
const doubleArrow3 = x => ({name:'heropy'})
doubleArrow3 ('name')

// 즉시실행함수
// function () {}
const b = 7
function double () {
  console.log(b * 2)
}
double();
  //앞 실행문에 ; 세미클론 

// 즉시 실행함수 (function(){} ())
(function () {
  console.log(b * 2)
}())

// 콜백함수
// addEventListener(event, function()) 이때, function이 콜백함수
document.querySelectorAll('.box').addEventListener('click', function(){})

  // 용도: 함수의 순차적인 실행
function first(second) {
  console.log(1)
}

function second(){
  console.log(2)
}

first(second)