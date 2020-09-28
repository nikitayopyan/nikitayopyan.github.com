"use strict";

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




