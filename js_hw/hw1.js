// задание 1

meaning = prompt ('Пожалуйста, введите число')
numberMeaning = + meaning
console.log(typeof numberMeaning)

if(typeof numberMeaning !== "number"){
    alert('Упс, кажется, вы ошиблись')}
    else if(Number.isNaN(numberMeaning)) {
        alert('Упс, кажется, вы ошиблись')
    }else if(numberMeaning % 2 === 0){
        alert('четное число')
    } else {
        alert('четное число')
}

// Не могу понять как сделать так чтобы значение Nan, было отдельным проверяющимся условием, потому что в моем случае именно оно(NaN) выводится ответом на ошибку