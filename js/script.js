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

// git 

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели", "");
 
const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false
    };

                    
const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("На сколько оцените его?", "");
const c = prompt("Один из последних просмотренных фильмов?", "");
const d = prompt("На сколько оцените его?", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


