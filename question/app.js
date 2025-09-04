
// Q1

let nickname = 'あさ だい';
let age = '26';
let itimonme = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です.'

console.log(itimonme);

// Q2

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

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
calc.add(x, y);

// 2

x = 12
y = 2
calc.subtract(x, y);

// 3
x = 7
y = 7
calc.multiply(x, y);


// 4
x = 25
y = 5
calc.divide(x, y);

// Q9

function remainder (x, y) {
  return  x % y;
}

x = 5
y = 3

let mondai =  `${x}を${y}で割った余りは${remainder(x, y)}です。`;
console.log(mondai);

// Q10

// xを関数の中で定義しているためスコープがローカル変数のため
// 関数を呼び出してこないと参照できない


// 発展編
// Q1
let random = Math.floor(Math.random()*10);

console.log(random);

// Q2

function HelloWorld () {
console.log('Hello World!');
}

setTimeout(HelloWorld,3000);

// Q3

// 1
let num = 1;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// 2
num = -1;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// 3
num = 0;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

// Q5

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let item of mixed) {
  if (typeof item === 'number') {
    if (item % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}



