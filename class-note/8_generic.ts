// 제네릭
const logText = (text) => {
  console.log(text);
  return text;
};
logText(10); // number
logText(true); // boolean
logText('yes'); // string

const logTextGenerics = <T>(text: T): T => {
  console.log(text);
  return text;
};

// function logTextGenerics<T>(text: T):T {
//   // 위와 동일
// }

logTextGenerics('yes');
// 인자의 타입과 아웃폿의 타입이 동일
logTextGenerics<string>('hi');
// 명시적으로 타입을 넘김

const logTextGen = (text: string) => {
  console.log(text);
  text.split('').reverse().join('');
  return text;
};
// logTextGen(10);
// logTextGen(true);
logTextGen('yes'); // string만 가능

const logNumber = (num: number) => {
  console.log(num);
  return num;
};

logNumber(10);
// 이렇게 타입을 다르게 받기 위해서 함수를 중복적으로 작성하는 것은
// 좋지 않다.

// 기존 문법과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식 문제점
const logTextUnion = (text: string | number) => {
  console.log(text);
  return text;
};

logTextUnion(10); // number or string
logTextUnion('hi'); // number or string

// string과 number의 교집합에 대해서만 자동완성 제공되는 것이 문제
// 리턴값의 타입이 명확해지지 않음
// split 같은 타입을 정확히 해주어야 하는 api 사용 불가능

const logTextGenericsPros = <T>(text: T): T => {
  console.log(text);
  return text;
};

logTextGenericsPros<string>('hi'); // string
logTextGenericsPros<number>(123); // number
logTextGenericsPros<boolean>(true); // boolean
// 타입을 호출하는 시점에 정의하는 것이 제네릭

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

interface DropdownGen<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown = { value: 10, selected: false };
const objGen: DropdownGen<string> = { value: 'abc', selected: false };
const objGen: DropdownGen<number> = { value: 'abc', selected: false };

// 제네릭의 타입 제한 1
const logTextLength = <T>(text: T[]): T[] => {
  console.log(text.length);
  // 오류가 뜸. TS는 모른다
  // 배열로 한정지어줄 수 있음
  text.forEach((text) => console.log(text));
  return text;
};

logTextLength(['hi', 'apple']);

// 제네릭의 타입 제한 2 - 정의된 타입으로 타입을 제한하기
interface LengthType {
  length: number;
}
// extends 활용
const logTextLengthGen = <T extends LengthType>(text: T): T => {
  text.length;
  return text;
};
logTextLengthGen(10); // 포함 안됨 (length가 없기 때문)
logTextLengthGen('string');
logTextLengthGen({ length: 10 }); // 가능

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
// keyof 로 제한
const getShoppingItemOption = <T extends keyof ShoppingItem>(itemOption: T): T => {
  return itemOption;
};

getShoppingItemOption(10); 
getShoppingItemOption('name'); // key값만 들어갈 수 있음 
getShoppingItemOption<string>('a');
