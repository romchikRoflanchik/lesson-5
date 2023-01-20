// Завдання 1

// let season = prompt('Введіть місяць.');

// switch ( season) {
//     case '1':
//     case '2':
//     case '12':    
//         alert("Зима");
//         break;
//     case '3':
//     case '4':
//     case '5':
//         alert('Весна');
//         break;
//     case '6':
//     case '7':
//     case '8':
//         alert('Літо');
//         break;
//     case '9':
//     case '10':
//     case '11':
//         alert('Осінь');
//         break;
//     default:
//         alert("Ви не ввели місяць")
// }

// Завдання 2

let num = +prompt('Введіть число')

function simpl(num) {
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return console.log('Не просте число');
        }
    }
    return console.log(' Просте число');
}
simpl(num);

// Завдання 3 

// function max (...arg){
//     let res = arg[0];
//     for(i=0;i<=arg.length;i++){
//         if(arg[i]>res){
//             res=arg[i]
//         }
//     }
//     return res
// }


// console.log(max(-2 ,5 ,2));