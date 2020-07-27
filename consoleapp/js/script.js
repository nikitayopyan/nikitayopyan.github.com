// "use strict";

// let string = 'holy ';
// let shit = 'shit';

// console.log(string + shit);

// let bool = true; 


// const human = {
//     name: 'Grisha',
//     age: 40,
//     isMarried: false
// };

// console.log(human.isMarried);

// let arr = ['jopa.jpeg', 2, 'pizda.png'];

// console.log(arr[0]);

// const result = confirm("are you here?");
// console.log(typeof(result));

// const answer = +prompt("Tebe est 18?", "Pizda");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('как вас зовут?', "daun");
// answers[1] = prompt('какая у вас фамилия?', "daun");
// answers[2] = prompt('сколько лет', "18");

// document.write(answers);

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;
// console.log(incr);
// console.log(decr);

// const isChecked = true,
//       isClosed = false;

// console.log(isChecked || isClosed);

let numberOfFilms = +prompt("Сколько фильмов Вы уже посморели?", "");



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("один из последний просмотренных фильмов?"),
      b = +prompt("насколько его оцените?"),
      c = prompt("один из последний просмотренных фильмов?"),
      d = +prompt("насколько его оцените?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);




