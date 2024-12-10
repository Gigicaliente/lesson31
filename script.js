// //task1
// let number = prompt("Enter number")

// if (number > 10) {
//     console.log("Число больше 10")
// } else if (number <= 10) {
//     console.log("Число меньше или равно 10")
// }

// //task2

// let confirmed = confirm("Delete file?")

// if (confirmed) {
//     console.log("Файл удален")
// } else {
//     console.log("Удаление отменено")
// }

// //task3 

// let age = prompt("How old are you?")

// if (age < 18) {
//     console.log("Вы еще подросток")
// } 
// else if (18 < age && age < 30) {
//     console.log("Вы молодой взрослый")
// } 
// else if (age > 30) {
//     console.log("Вы взрослый")
// }

// //task4

// let number2 = prompt("Enter number")

// if (number2 % 2 == 0) {
//     console.log("Четное число")
// } else {
//     console.log("Нечетное число")
// }

//task5

// let day = 5
// let massage

// switch (day) {
//     case 1:
//         massage = "Monday";
//         break;
//     case 2:
//         massage = "Tuesday";
//         break;
//     case 3:
//         massage = "Wednesday";
//         break;
//     case 4:
//         massage = "Thursday";
//         break;
//     case 5:
//         massage = "Friday";
//         break;
//     case 6:
//         massage = "Saturday";
//         break;
//     case 7:
//         massage = "Sunday";
//         break;
//         default:
//             massage = "Некорректное значение";
            
// }
// console.log(massage)


// //task6

// let num1 = prompt("Enter number")
// let num2 = prompt("Enter second number")

// if (num1 == num2) {
//     console.log("Числа равны")
// } else {
//    let result = (num1>num2) ? "Первое число больше":"Второе число больше";
//    console.log(result)
// }


//Additional task
 
let month = 9;
let season

switch (month) {
    case 1:
    case  2:
    case  12:
        season = "Winter";
        break;
    case 3:
    case 4: 
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7: 
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10: 
    case 11:
        season = "Autumn";
        break;
        default:
            season = "Incorrect";
}
console.log(season)