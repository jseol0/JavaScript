// 1
let obj = {};

function A() { return obj; }
function B() { return obj; }

let a = new A;
let b = new B;

alert( a == b ); // true

// 2
function Calculator() {
	this.read = function() {
		this.a = +prompt("a?", '');
		this.b = +prompt("b?", '');
	};

	this.sum = function() {
		return (this.a + this.b);
	};

	this.mul = function() {
		return (this.a * this.b);
	}
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// 3
function Accumulator(startingValue) {
	this.value = startingValue;
	
	this.read = function() {
		this.value += +prompt("더할 값을 입력해주세요.", '');
	}
}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함