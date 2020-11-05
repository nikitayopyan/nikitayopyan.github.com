function getZero(num){             //добавляем 0 в числа меньше 10ти
    if (num >= 0 && num < 10){
        return `0${num}`;
    } else {
        return num;
    }
}

export default getZero;