 "use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);



//  const result = confirm("Are you here?");
//  console.log(result);

//  const answer = +prompt("Вам есть 18?", "");
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt("Назовите Ваше имя", "");
// answers[1] = prompt("Назовите Вашу фамилию", "");
// answers[2] = prompt("Назовите Ваш возраст", "");



// const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели", "");
 
// const personalMovieDB = {
//     count: numberOfFilms, 
//     movies: {}, 
//     actors: {}, 
//     genres: [], 
//     privat: false
//     };

                    
// const a = prompt("Один из последних просмотренных фильмов?", "");
// const b = prompt("На сколько оцените его?", "");
// const c = prompt("Один из последних просмотренных фильмов?", "");
// const d = prompt("На сколько оцените его?", "");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



// console.log(personalMovieDB);


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }
///////////////////////////////////////////////////////////////
// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

////////////////////////////////////////////////////////////////

let num = 50;

// for (let i=1; i < 8; i++) {
//     console.log(i);
// }
////////////////////////////////////////////////////////////////
// for (let i = 1; i <10; i++) {
//     console.log(num);
//     num++;
// }
////////////////////////////////////////////////////////////////
// for (let i = 1; i < 10; i++) {
//     if (i === 7) {
//         break;
//     }
//     console.log(i);
// }
////////////////////////////////////////////////////////////////
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }
//////////////////////////////////////////////////////////////

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//     result += "*";
//     }
//     result += '\n'; //строку так добавляем

// }

// console.log(result);

// let number = 10;
//  for (i=5; i <= 10; i++) {
//     console.log(i);
//  }

// let number = 20;
//  for (i = 20; i >= 13; i--) {
//     if (i === 13) {
//         break;
//     } 
//     console.log(i);
//  }


//  for (i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//  }


// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

/////////////////////////////////////////////////////////////
// let i = 5;
//  const arr = [];


// for (i = 5; i <= 10; i++) {
//     arr[i-5] = i;
// }
// console.log(arr);

/////////////////////////////////////////////////////////////
  


// const result = [];
// const arr = [3, 5, 8, 16, 20, 23, 50];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);


/////////////////////////////////////////////////////////////

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data [i]*2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);

////////////////////////////////////////////////////////////


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
// }

// console.log(result);


///////////////////////////////////////////////////////////////////

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)


///////////////////////////////////////////////////////////////////

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);


/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

// 'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB.privat);
//     }
// }
// showMyDB(privat);

// function writeYourGenres() {
//     for (i = 1; i <= 3; i++) {
//         let genres = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i-1] = genre;
//     }
// }
// writeYourGenres();



// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }
//
//     let area = 0;
//     let volume = 0;
//
//     volume = length * length * length;
//     area   = 6 * (length * length);
//
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }
//
// calculateVolumeAndArea(5);
//
//
// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) !== 'number' || seatNumber <= 0 || !Number.isInteger(seatNumber)) {
//         return  "Ошибка. Проверьте правильность введенного номера места";
//     }
//
//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }
//
//     for (let i = 4; i <= 36; i = i + 4) {
//         if (seatNumber <= i) {
//             return Math.ceil(i / 4);
//         }
//     }
//
// }
//
// getCoupeNumber(33);
//
//
//
// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//      return "Ошибка, проверьте данные!";
//     }
//
//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;
//
//     let hoursStr = '';
//
//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }
//
//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }
//
// getTimeFromMinutes(180);
//
//
// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }
//
// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');
//
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }
//
//     let result = '';
//     let first = 0;
//     let second = 1;
//
//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }
//
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//
//     return result;
// }
//
// fib(5);
//


 'use strict';

 const personalMovieDB = {
     count: 0,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
     start: function() {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
         }
     },
     rememberMyFilms: function() {
         for (let i = 0; i < 2; i++) {
             const a = prompt('Один из последних просмотренных фильмов?', ''),
                 b = prompt('На сколько оцените его?', '');

             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                 personalMovieDB.movies[a] = b;
                 console.log('done');
             } else {
                 console.log('error');
                 i--;
             }
         }
     },
     detectPersonalLevel: function() {
         if (personalMovieDB.count < 10) {
             console.log("Просмотрено довольно мало фильмов");
         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
             console.log("Вы классический зритель");
         } else if (personalMovieDB.count >= 30) {
             console.log("Вы киноман");
         } else {
             console.log("Произошла ошибка");
         }
     },
     showMyDB: function(hidden) {
         if (!hidden) {
             console.log(personalMovieDB);
         }
     },
     toggleVisibleMyDB: function() {
         if (personalMovieDB.privat) {
             personalMovieDB.privat = false;
         } else {
             personalMovieDB.privat = true;
         }
     },
     writeYourGenres: function() {
         for (let i = 1; i < 2; i++) {
             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

             if (genre === '' || genre == null) {
                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
                 i--;
             } else {
                 personalMovieDB.genres[i - 1] = genre;
             }

             // Альтернативный вариант из урока

             // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

             // if (genres === '' || genres == null) {
             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
             //     i--;
             // } else {
             //     personalMovieDB.genres = genres.split(', ');
             //     personalMovieDB.genres.sort();
             // }
         }

         personalMovieDB.genres.forEach((item, i) => {
             console.log(`Любимый жанр ${i + 1} - это ${item}`);
         });
     }
 };