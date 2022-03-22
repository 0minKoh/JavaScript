// Js 클래스


// 생성자 함수 new
// 오브젝트 생성 기계


// #똑같은 object 복사하기
  // 함수 선언
  function ch() {
    this.q = 'consume'
    this.w = 'snowball'
  }

  // 함수 호출 및 이름 생성
  const character1 = new ch()
  const character2 = new ch()
  // ...
  
  //저장된 오브젝트
  character1 = {
    q : "consume",
    w : "snowball"
  }

  character2 = {
    q : "consume",
    w : "snowball"
  }

// #상황에 따라 다른 object 만들기
  // 함수 선언
  function ch(매개변수){
    this.q = 매개변수;
    this.w = 'snowball';
  }

  // 함수 호출 및 이름 생성
  const character3 = new ch('consume')
  const character4 = new ch('fireball')

  //저장된 오브젝트
  character3 = {
    q : "consume",
    w : "snowball"
  }

  character4 = {
    q : "fireball",
    w : "snowball"
  }

// #class 활용하기
  // 함수 선언
  class Ch {
    constructor(매개변수){
      this.q = 매개변수;
      this.w = 'snowball';
    }
  }

  // 함수 호출 및 이름 생성
  const character5 = new Ch('consume')
  const character6 = new Ch('fireball')

  //저장된 오브젝트
  character3 = {
    q : "consume",
    w : "snowball"
  }

  character4 = {
    q : "fireball",
    w : "snowball"
  }

// prototype
// 부모에만 key와 value 추가하기 (자식이 실제로 가지지는 않음)
Ch.prototype.e = "침묵"
