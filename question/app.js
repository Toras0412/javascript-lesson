
// Q1
let nickname = 'あさ だい';
let age = '26';
let itimonme = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です.'

console.log(itimonme);

// Q2

let languages = ['JavaScript','PHP','Ruby','Python','Go'];

let nimonme = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(nimonme);

// Q3

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5

console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6

function sayHello (callback) {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
};

sayWorld();

// Q7

// 1
user.birthday = '2000-09-27';

console.log(user.birthday);

// 2

user.sayHello = function () {
  console.log('Hello！');
}

user.sayHello();

// Q8

let calc = {
    add: function() {
      console.log(x + y);
    },

    subtract: function() {
      console.log(x - y);
    },

    multiply: function() {
      console.log(x * y);
    },

    divide: function() {
      console.log(x / y);
    },
};

// 1
let x = 5
let y = 2
calc.add(x,y);

// 2

x = 12
y = 2
calc.subtract(x,y);

// 3
x = 7
y = 7
calc.multiply(x,y);


// 4
x = 25
y = 5
calc.divide(x,y);

// Q9

function remainder () {
  let amari = x % y;
  return amari;
}

x = 5
y = 3

let mondai =  `${x}を${y}で割った余りは${remainder()}です。`;
console.log(mondai);

// Q10

// xを関数の中で定義しているためスコープがローカル変数のため
// 関数を呼び出してこないと参照できない
