// 연산자를 이용한 타입 정의 - union type

// or 연산자 사용
const logMessage = (value: string | number) => {
  console.log(value);
};
logMessage('hello');
logMessage(100);

// 유니온 타입의 장점
// 위와 달리 미리 작성 단계에서 타입 체크 및 관련 api 사용 가능
const eng: string | number | boolean;

const checkUniontype = (value: string | number) => {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('Value must be string or number');
};

// 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는 (필터링하는) 과정

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const askSomeoneUnion = (someone: Developer | Person) => {
  someone.name;
  // 여러 유니온 타입을 쓸 경우 공통 속성만 접근 가능
  // someone.skill
  // someone.age
  // 만약 접근하려고 한다면 타입 가드 이용
};

// 인터섹션 타입 소개
var seho: string | number | boolean;
var capt: string & number & boolean;

const askSomeoneInter = (someone: Developer & Person) => {
  someone.name;
  someone.skill;
  someone.age;
};
// 모든 속성을 갖는다고 생각함

// 유니온 타입과 인터섹션 타입의 차이점
askSomeoneUnion({ name: 'developer', skill: 'develop' });
askSomeoneInter({ name: 'captain', age: 100, language: 'eng', skill: 'develop' });

