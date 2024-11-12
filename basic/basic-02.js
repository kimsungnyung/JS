/** 원시형 데이터 타입 */

/** 문자열, String */
const str1 = "Hello, World!"; // 큰 따옴표, 작은 따옴표 둘 중 아무거나 사용해도 무관
const str2 = "World!";
const str3 = `Hello, ${str2}`; //optin + ~
console.log(str3)



/** 숫자, Numbeer */
/** 주의할 점
 * 숫자 데이터와 다른 타입의 값을 연산할 경우 -> 2-1로 가기
 */

const num1 = 123;
const num2 = -123; // 음수
const num3 = -123.5678;
const pi = 3.14; // 부동소수점

console.log(num3 + undefined); //2-1; 출력 값이 NaN
console.log(typeof (num3 + undefined));
console.log(typeof pi);//number

/** NaN이라는 Not a Number라는 데이터는 타입 자체는 숫자 데이터인데
 * 특정한 숫자 값으로 표현할 수 없기 떄문에 NaN으로 표시하여 출력, 반환한다.
 * 그래서 NaN 값이 나왔다는 것은 숫자 연산에 숫자가 아닌 다른 값이 포함되어있을 가능성이 있다는 것을 의미한다.
 */

const a = 0.1;
const b = 0.2;

console.log(a + b);// 0.30000...4
console.log(typeof (a + b).toFixed(1));//string
console.log(typeof Number((a + b).toFixed(1)));//Number -> 타입 형변환
console.log(Number((a + b).toFixed(1)));//0.3

/** Boolean(불린, 불리언)
 * true와 flase라는 두 가지 값만 사용하는 논리 데이터
 * true: 긍정의 의미를 가지고 있습니다.
 * flase: 부정의 의미를 가지고 있습니다.
 */

const truthy = true;
const flasy = false;

if(truthy){
    console.log("조건식이 참입니다.");
}else{
    console.log("조건식이 거짓말입니다.");
}

/** null과 undefined
 * null: 존재하지 않는다. 값이 비어있다. 값을 알 수 없다. 명시적으로 표현한 것이다.
 * 의도적으로 변수를 비우거나, 특정 상황에서 값이 없음을 나타내기 위해 사용된다.
 * 
 * undefined: 변수가 선언되었지만, 값이 할당되지 않았음을 의미합니다.
 * 함수가 값을 반환하지 않거나, 객체에서 존재하지 않는 속성에 접근했을 때도 undefined를 반환합니다.
 */

let valuel = null; //개발자의 의도가 보인다. 있다. 라는 코드\
console.log(valuel); // null
console.log(typeof valuel);//object

setTimeout(() => {
    valuel = 30;
    console.log(valuel);//30
}, 1000);

let valuel2;
console.log(valuel2);//undefined

/** ---------------------------------------------------- */

const user = {
    name: "hyo", //key-value
    age: 26, 
}
console.log(user.name);//hyo
console.log(user.age);//26
console.log(user.email); // undefined
console.log(user.password);//undefined

