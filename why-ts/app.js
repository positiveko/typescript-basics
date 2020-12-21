// api url
const url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */
// JS Doc의 포멧

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

const fetchUser = () => axios.get(url);

fetchUser().then((response) => response.address?.city);
// JS는 웹페이지를 띄우고 나서야 type error를 발견할 수 있지만
// TS는 vscode 상에서 이미 type error를 미리 체크할 수 있다

const startApp = () => {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
};

startApp();
