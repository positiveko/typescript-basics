// interface Email {
//   value: string;
//   selected: boolean;
// }

// const emails: Email[] = [
//   { value: 'naver.com', selected: true },
//   { value: 'gmail.com', selected: false },
//   { value: 'hanmail.net', selected: false },
// ];

// interface ProductNum {
//   value: number;
//   selected: boolean;
// }

// interface trueFalse {
//   value: boolean;
//   selected: boolean;
// }

// const numberOfProducts: ProductNum[] = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// // Generics 사용
// function createDropdownItem(item: Email | ProductNum) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// // NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem(email);
//   const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
// });

// numberOfProducts.forEach(function (product) {
//   const item = createDropdownItem(product);
// });
