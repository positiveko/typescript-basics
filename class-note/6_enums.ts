enum Shoes {
  Nike,
  Adidas,
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum Fruits {
  apple = '사과',
  kiwi = '키위',
}

console.log(Fruits.apple); // 사과

// 예제
enum Answer {
  Yes = 'y',
  No = 'N',
}

const askQuestion = (answer: Answer) => {
  if (answer === Answer.Yes) {
    console.log('yes');
  }
  if (answer === Answer.No) {
    console.log('no');
  }
};

askQuestion(Answer.Yes);
// askQuestion('yes');
// askQuestion('y');
// askQuestion('예스');
