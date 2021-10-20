//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:
//     1_2_3_4_5_6_7_8_9_ ... 49_50_
// от 1 до 50 включительно. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
function t1() {
    let out = '';
    let myNum = 0;
    while (myNum < 50) {
        myNum++;
        out += myNum + '_';
    }
    document.querySelector('.out-1').innerHTML = out;
}
document.querySelector('.b-1').onclick = t1;


//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида:
//     2_4_6_ ... 44_46_
// от 2 до 46 c шагом 2. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.
function t2() {
    let out = '';
    let myNum = 0;
    while (myNum < 46) {
        myNum = myNum + 2;
        out += myNum + '_';
    }
    document.querySelector('.out-2').innerHTML = out;
}
document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
// 25_24_23_22_ . . _7_
// от 25 до 7 c шагом 1. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.
function t3() {
    let out = '';
    let myNum = 26;
    while (myNum > 7) {
        myNum--;
        out += myNum + '_';
    }
    document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.b-3').onclick = t3;


//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
// 77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.
function t4() {
    let out = '';
    let myNum = 80;
    while (myNum > 35) {
        myNum = myNum - 3;
        out += myNum + '_';
    }
    document.querySelector('.out-4').innerHTML = out;
}
document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и одна звездочка если число нечетное, и две звездочки если четное. Задача решается с помощью цикла  while.
function t5() {
    let out = '';
    let myNum = 0;
    while (myNum < 17) {
        myNum++;
        if (myNum % 2 == 0) {
            out += myNum + '_**';
        }
        else {
            out += myNum + '_*';
        }
    }
    document.querySelector('.out-5').innerHTML = out;
}
document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в .i-6.
function t6() {
    let out = '';
    let myNum = 0;
    let myCounter = document.querySelector('.i-6').value;
    while (myNum < myCounter) {
        let k = 0;
        myNum++;
        while (k < 6) {
            k++;
            out += '*';
        }
        out += '<br>';
    }
    document.querySelector('.out-6').innerHTML = out;
}
document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция f7, которая выводит в .out-7 числа от введенного пользователем включительно до нуля включительно.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4_3_2_1_0_
// Задача решается с помощью цикла  while.
function t7() {
    let out = '';
    let myCounter = document.querySelector('.i-7').value;
    while (myCounter >= 0) {
        out += myCounter + '_';
        myCounter--;
    }
    document.querySelector('.out-7').innerHTML = out;
}
document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция f8, которая выводит в .out-8 числа от первого введенного включительно до второго включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// Задача решается с помощью цикла  while.
function t8() {
    let out = '';
    let myCounter1 = document.querySelector('.i-81').value;
    let myCounter2 = document.querySelector('.i-82').value;
    while (myCounter1 <= myCounter2) {
        out += myCounter1 + '_';
        myCounter1++;
    }
    document.querySelector('.out-8').innerHTML = out;
}
document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция f9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку и при необходимости поменять местами значения в переменных местами, а потом запускаем цикл  while.
function t9() {
    let myCounter1 = document.querySelector('.i-91').value;
    let myCounter2 = document.querySelector('.i-92').value;
    let max = '';
    let min = '';
    if (myCounter1 > myCounter2) {
        max = myCounter1;
        min = myCounter2;
    }
    else {
        min = myCounter1;
        max = myCounter2;
    }
    let out = '';
    while (min <= max) {
        out += min + '_';
        min++;
    }
    document.querySelector('.out-9').innerHTML = out;
}
document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1966 включительно.
// Разделитель знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).
function t10() {
    let out = '';
    let myNum = 1950;
    while (myNum <= 1966) {
        out += myNum + '_';
        myNum = myNum + 2;
    }
    document.querySelector('.out-10').innerHTML = out;
}
document.querySelector('.b-10').onclick = t10;


//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так ваша_переменная[i]
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_
function t11() {
    let out = '';
    let i = 0;
    let myDiv = document.querySelectorAll('.div-11');
    while (myDiv.length > i) {
        out += myDiv[i].innerHTML + '_';
        i++;
    }
    document.querySelector('.out-11').innerHTML = out;
}
document.querySelector('.b-11').onclick = t11;


//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = 'orange'
function t12() {
    let i = 0;
    let myDiv = document.querySelectorAll('.div-12');
    while (myDiv.length > i) {
        myDiv[i].style.background = 'orange';
        i++;
    }
}
document.querySelector('.b-12').onclick = t12;


//  Task 13
// Кнопка .b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
function t13() {
    let i = 0;
    let myInput = document.querySelectorAll('.i-13');
    while (myInput.length > i) {
        myInput[i].value = i + 1;
        i++;
    }
}
document.querySelector('.b-13').onclick = t13;


//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
function t14() {
    let out = '';
    let i = 0;
    let myInput = document.querySelectorAll('.i-14');
    while (myInput.length > i) {
        if (myInput[i].checked) {
            out = myInput[i].value;
        }
        i++;
    }
    document.querySelector('.out-14').innerHTML = out;
}
document.querySelector('.b-14').onclick = t14;


//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 77_88_99_77_88_99_77_88_99_
// Для вывода использовать цикл  while. Разделитель подчеркивание.
function t15() {
    let out = '';
    let myNum = 0;
    while (myNum < 3) {
        let myNum2 = 77;
        while (myNum2 <= 99) {
            out += myNum2 + '_';
            myNum2 = myNum2 + 11;
        }
        myNum++;
    }
    document.querySelector('.out-15').innerHTML = out;
}
document.querySelector('.b-15').onclick = t15;
