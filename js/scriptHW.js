// 'use strict';
// // let counter = 0;
// const options = {
//     name : 'test',
//     weight : 1024,
//     height : 1024,
//     color: {
//         border : 'black',
//         bg : 'white'
//     }
// }
// // delete options.name;
// console.log(options);
//
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} и аргумент ${options[key][i]}`);
//             // counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} и аргумент ${options[key]}`);
//         // counter++;
//     }
//
// }
// // console.log(counter);
//  console.log(Object.keys(options).length);
//
// const {border, bg} = options.color;
// console.log(border);
// const arr  = [17, 22, 5, 16, 68];
// arr.sort(compareNum);// сортировка для массива чисел
// console.log(arr);
//
// function compareNum(a, b) { // функция сортировки массива чисел по возростанию
//     return a - b;
// }
// arr.pop();
// arr.push(10);
//  console.log(arr);

 // for (let i = 0; i < arr.length; i++ ) {
 //  console.log(arr[i]);
 // }

  // for (let value of arr) {
  //  console.log(value);
  // }

// arr[99] = 1;
// console.log(arr.length);
// console.log(arr);
//
// arr.forEach(function (i, item, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const product = str.split(", ");// берет вводимую строку от пользователя и преобраз в массив через запятую
// console.log(product);
// product.sort();// сортирует вводимы текст, в нашем случае, если нет аргумета в скобках -то по алфавиту
// console.log(product.join("; ")); // склеивает в строку через знак пример ;


// создание копий
//
// let a = 1,
//     b = a;
//
// console.log(a + b);
// console.log(a);

// const obj = {
//     a : 1,
//     b : 2
// };
//
// const copy = obj;
//
// copy.a = 12;
//
// console.log(obj);
// console.log(copy);

// function copy(mainObj) {
//
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//
//     return objCopy;
// }
//
// const numbers = {
//     a : 1,
//     b : 2,
//     c : {
//         x : 7,
//         y : 9
//     }
// };
//
// const newNumbers = copy(numbers);
//
// newNumbers.c.y = 99;
//
// console.log(newNumbers);
// console.log(numbers);
//
// const add = {
//     f : 12,
//     o : 11
// };
//
// console.log(Object.assign(numbers, add)); // добавляем объект add в объект numbers
//
// const clone = Object.assign({}, add);
// clone.o = 29;
// console.log(add);
// console.log(clone);



/// копии массивов

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();
//
// newArray[0] = "1";
// console.log(newArray);
// console.log(oldArray);


// const video = ["youtube", "rutube", "vimeo"],
//       blogs = ["blogger", "wordpress", "livejournal"],
//       internet = [...video, ...blogs, "vk", "fb"];
//
// console.log(internet);
//
//
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//
// }
//  const num = [2, 5, 7];
//  log(...num);
//
//  ////////
// const array = ["a", "b"];
// const newAarray = [...array];
//
// console.log(newAarray);
//
// const objekt = {
//     a : "a",
//     b : "b"
// };
//
// const copyOblekt = {...objekt};
//
// console.log(copyOblekt);

////////////////////////////////////////

// const someString = `This is some strange string`;
//
// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     // Самый оптимальный вариант решения
//     return str.split('').reverse().join('');
//
//     // Решение при помощи цикла
//     // let newStr = '';
//     // for (let i = str.length - 1; i >= 0; i--) {
//     //     newStr += str[i];
//     // }
//     // return newStr
// }
//
// reverse(someString);

////////////////////////////////////
///////////////////////////////////
//////////////////////////////////


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {

    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.length * shop.width;
    });

    volume = data.height * square;

    if ((data.budget - (volume * data.moneyPer1m3)) >= 0) {
    return `Бюджета достаточно`;
    } else {
        return `Бюджета недостаточно`;
    };
}

isBudgetEnough(shoppingMallData);

