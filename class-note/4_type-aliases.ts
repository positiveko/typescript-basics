// 타입별칭
interface PersonInterface {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};

// 커서를 올렸을 때 미리 구조를 보여줌
const kej: PersonType = {
  name: 'edie',
  age: 100,
};

const kdo: PersonInterface = {
  name: 'edie',
  age: 100,
};

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
const getTodo = (todo: Todo) => {};

// 티입 별칭의 특징
// 새로운 타입 값이 아니라 정의한 타입에 대해 쉽게 참고할 수 있도록 이름을 부여하는 것

// type vs. interface
// 인터페이스는 extends로 확장 가능. 가급적 interface 사용 권장
// type은 확장 불가능


