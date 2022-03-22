// 데이터의 종류

const { indexOf } = require("lodash")

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// object: {}


// String

str.indexOf(데이터) = 'str데이터 속에, 해당 문자 데이터가 있는 인덱스(숫자)를 반환'
str.length = '문자열의 길이'
str.slice(0, 2) = '0부터 1까지(인덱스 번호) 추출후 반환'
str.replace(교체대상, 교체결과) = '교체 대상을 교체 결과로 변환'
str.match(정규표현식) = '정규표현식에 맞추어 일부 문자열을 추출'
str.trim() = '공백들이 사라짐'


    // 예시
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

    const searchTerm = 'dog';
    const indexOfFirst = paragraph.indexOf(searchTerm);
    // 실행결과: 40
    console.log(indexOfFirst)

// Number

Math.toFixed(2) = '소수점 2자리까지만 남겨두고 나머지는 제거 → 단, 문자 데이터로 반환'
parseInt(변수) = '정수부분만 추출한다'
  // parse 분석하다
  // int 정수
parseFloat(변수) = '소수점 모두 추출'
Math.abs(데이터) = '변수를 절댓값으로 반환'
  // abs = absolute 절댓값
Math.min(데이터) = '최솟값 반환'
Math.max(데이터) = '최댓값 반환'
Math.ceil(데이터) = '정수 단위로 올림 처리'
Math.floor(데이터) = '정수 단위로 내림 처리'
Math.round(데이터) = '정수 단위로 반올림 처리'
Math.random(데이터) = '무작위 수를 반환'

// array
  // 원본이 유지되는 경우
  array.find(판별함수) = 'array에서 판별함수를 만족하는 첫번째 item을 반환'
  array.length = '길이 반환(item 개수)'
  array.concat(array) = '두 개의 배열 데이터를 병합(새로운 배열을 생성)'
  array.forEach(function (item, index){}) = '배열의 아이템 개수 만큼 함수를 각각 실행 [반환 값 X]'
  array.map(function (item, index){}) = '반환하는 데이터를 기반으로 새로운 array 생성 [반환 값 O]'
  array.filter(function (item) {return 조건}) = '일부 아이템들을 조건에 맞게 필터링해서 새로운 array 생성'
  array.find(function (item) {return 조건}) = '조건에 맞는 특정 아이템을 찾아 반환한다'
  array.findIndex(function (item) {return 조건}) = '조건에 맞는 특정 아이템의 인덱스 번호를 반환한다'
  array.includes(data) = '특정 데이터가 배열에 들어있는가? 판단 (불린데이터 출력)'

    // filter 예시(return 조건의 활용)
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
    const result = words.filter(function (word) {return word.length > 6})
      // (word => word.length > 6);
    console.log(result);
      // expected output: Array ["exuberant", "destruction", "present"]

    // 원본이 수정되는 경우
    array.push(data) = '데이터를 아이템으로 추가(가장 뒤에 삽입)'
    array.unshift(data) = '데이터를 아이템으로 추가(가장 앞에 삽입)'
    array.reverse() = '배열 데이터의 순서를 거꾸로 뒤집음'
    array.splice(item_index, 개수(N)) = '인덱스의 아이템부터 N개를 지움'
    array.splice(item_index, 0, data) = '해당 인덱스에 data를 끼워넣음'
    array.splice(item_index, 개수(N), data) = '해당 인덱스 아이템을 N개 제거하고 data를 집어넣음'

// Object
// type 예시
   변수 = {
    key : value,
    a : 1,
    b : 2,
    c : 3
   }

object.assign(target, source) = '출처 객체의 key, value를 타겟 객체로 복사해서 합쳐짐(타겟 객체가 변경됨)' 
object.keys(object) = '객체의 key(속성)만을 추출해서 모은 배열(array)로 반환'

// 구조 분해 할당
const user = {
  name: 'yeongmin',
  age: 20,
  email: 'ejemadl14@gmail.com'
}
const {name, age, email} = user
// user.email로도 뽑을 수 있음

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}입니다.`)
console.log(`${name}의 이메일은 ${email}입니다`)

// 만약 object에 없는 속성이 있다면
// 기본값 지정 가능
const {name1, age1, email1, address = 'korea'} = user
console.log(`사용자의 이름은 ${name1}입니다.`)
console.log(`${name1}의 나이는 ${age1}입니다.`)
console.log(`${name1}의 이메일은 ${email1}입니다`)
console.log(`${name}의 주소는 ${address}입니다.`)

// key이름 변경해서 사용하기
const {name2: Yeongmin, age2, email2, address2 = 'korea'} = user
console.log(`${Yeongmin}, ${age2}, ${email2}, ${address2}`)

  // 배열 데이터는 순서를 기준으로 추출됨
const fruits = ['apple', 'banana', 'cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d)
// 실행결과: apple banana cherry undefined

// 전개 연산자(...)
const fruits1 = ['Apple', 'Banana', 'Cherry']
console.log(fruits1)
// 출력 결과: ["Apple", "Banana", "Cherry"]
console.log(...fruits1)
// 출력 결과: Apple Banana Cherry