// 1
/*
function makeUser() {
  return {
    name: "John",
    ref: this						// ref 는 메소드가 아니라 key -> this 는 함수 자체를 의미
  };
};

let user = makeUser();

alert( user.ref.name ); // 결과가 어떻게 될까요?	 error 생각해보기........
*/

function makeUser() {
	return {
		name: "John",
		ref() {
			return (this);			//	ref 는 메소드 -> this 는 객체를 가르김
		}
	};
};

let user = makeUser();
alert( user.ref().name );	//	John

// 2
let calculator = {
	read() {
		this.a = +prompt("첫번째 값", '');
		this.b = +prompt("두번째 값", '');
	},

	sum() {
		return (this.a + this.b);
	},

	mul() {
		return (this.a * this.b);
	}
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// 3		체이닝 : 객체에 연달아서 메서드를 호출할 수 있게 하는 방법
let ladder = {
  step: 0,
  up() {
    this.step++;
		return (this);		// 메소드를 호출할떄마다 객체 자신을 반환
  },
  down() {
    this.step--;
		return (this);
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    alert( this.step );
		return (this);
  }
};

/*
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
*/

ladder.up().up().down().up().down().showStep(); // 1