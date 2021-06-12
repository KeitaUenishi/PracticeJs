/**
 * const,let
 */

//  const val = ['dog', 'cat'];
//  console.log(val);

// /**
//  * テンプレート文字列
//  */
// const name = 'uenishi';
// const age = 28;

// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// /**
//  * アロー関数
//  */

// const func2 = (str) => str;

// console.log(func2("func2"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(func3(10, 20));

// /**
//  * 分割代入
//  */

//  const myProfile = {
//    name: "uenishi",
//    ager: 28,
//  };

// const message2 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
//  console.log(message2);

// const {name, age } = myProfile;
// const message3 = `私の名前は${name}です。年齢は${age}です。`;

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "gest") => console.log(`こんにちは${name}さん！`);
// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1,2, 3];
// // console.log(arr1);

// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// /**
//  * mapやfilterを使った配列の処理
//  */
const nameArr = ["田中", "山田", "tanaka"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5]
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "tanaka") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
