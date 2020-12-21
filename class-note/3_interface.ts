interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const edie: User = {
  age: 100,
  name: 'Edie',
};

// 함수에 인터페이스 활용
const getUser = (user: User) => {
  console.log(user);
};
getUser({
  age: 100,
  name: 'EJ',
});

// 함수의 스펙에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sumInterface: SumFunction;
sumInterface = (a: number, b: number): number => {
  return a + b;
};

// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
  [index: number]: string;
}

const arr = ['a', 'b', 'c'];
// arr[0] = 10
arr[0]; // 'a'

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  // sth: /abc/,
  // cssFile: 'abc'
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach((value) => {
  // value의 타입을 미리 추론해줌
})

// obj['cssFile'] = 'a'

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  // name: string; extends 해서 필요없음
  // age: number;
  language: string;
}

const ej: Developer = {
  language: 'korean',
  name: 'edie',
  age: 100,
}



