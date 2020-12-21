// parameter와 반환값에 타입을 정의
const sum = (a: number, b: number): number => {
  return a + b;
};
sum(10, 20);

// 함수의 반환 값에 타입을 정의
function add(): number {
  return 1;
}

// 미리 정한 인자와 다를 경우, 에러 발생
const sumTs = (a: number, b: number):number => {
return a + b;
}

sumTs(10, 20, 30, 40, 50);
sumTs(10)

// 함수의 옵셔널 파라미터
const hello(a: string, b?: string, c?: string) {
  console.log(a, b, c)
}
hello('hello world');
hello('hello', 'world');