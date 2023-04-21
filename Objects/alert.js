// 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 2
function isEmpty(obj) {
	for (let key in obj) {
		return (false);
	}
	return (true);
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// 3
const user1 = {
  name: "John"
};
// 아래 코드는 에러 없이 실행될까요?
user1.name = "Pete";
//	실행된다. const user 는 user 객체 참조값이 변경되는것을 막는것이지
//	객체의 프로퍼티 변경을 막지는 않는다

// 4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
	sum += salaries[key];
}
alert(sum);

// 5
// 함수 호출 전
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};


function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'number')
			obj[key] *= 2;
	}
}

multiplyNumeric(menu);

alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );