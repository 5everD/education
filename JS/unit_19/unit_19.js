
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
function t1() {
    let out = '';
    out = document.querySelector('.div-1').textContent;
    document.querySelector('.out-1').textContent = out;
    return out;
}
document.querySelector('.div-1').onclick = t1;
// ваше событие здесь!!!


// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
function t2(event) {
    document.querySelector('.out-2').textContent = event.altKey;
    return event.altKey;
}
document.querySelector('.div-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */
let w3 = 75;
function t3() {
    document.querySelector('.div-3').style.width = w3 + 'px';
    document.querySelector('.out-3').textContent = w3;
    w3 = w3 + 5;
}
document.querySelector('.div-3').onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
function t4() {
    let out = '';
    out = document.querySelector('.div-4').textContent;
    document.querySelector('.out-4').textContent = out;
    return out;
}
document.querySelector('.div-4').ondblclick = t4;
// ваше событие здесь!!!


// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
function t5() {
    let classL = document.querySelector('.div-5').classList;
    if (classL.contains('active')) {
        classL.remove('active');
    }
    else {
        classL.add('active');
    }
}
document.querySelector('.div-5').ondblclick = t5;
// ваше событие здесь!!!


// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */
function t6() {
    let classL = document.querySelector('.ul-6').classList;
    if (classL.contains('hide')) {
        classL.remove('hide');
    }
    else {
        classL.add('hide');
    }
}
document.querySelector('.div-6').ondblclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
function t7() {
    let classL = document.querySelector('.div-7').classList;
    if (classL.contains('active')) {
        classL.remove('active');
    }
    else {
        classL.add('active');
    }
}
document.querySelector('.div-7').oncontextmenu = t7;
// ваше событие здесь!!!


// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
function t8() {
    let checkbox = document.querySelector('.ch-8');
    if (checkbox.checked) {
        document.oncontextmenu = () => {
            return false;
        }
    } else {
        document.oncontextmenu = null;
    }
}
document.querySelector('.ch-8').onchange = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
function t9() {
    document.querySelector('.div-9 img').src = 'img/2.png';
}
document.querySelector('.div-9').oncontextmenu = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
function t10() {
    document.querySelector('.div-10 img').src = 'img/2.png';
}
document.querySelector('.div-10').onmouseenter = t10;
// ваше событие здесь!!!


// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
function t11() {
    document.querySelector('.div-11 img').src = 'img/2.png';
}
function t11a() {
    document.querySelector('.div-11 img').src = 'img/1.png';
}
document.querySelector('.div-11').onmouseenter = t11;
document.querySelector('.div-11').onmouseleave = t11a;
// ваше событие здесь!!!


// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
document.querySelector('.div-12').onmousedown = () => {
    document.querySelector('.div-12').classList.add('active');
}
// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
document.querySelector('.div-13').onmousedown = () => {
    document.querySelector('.div-13').classList.add('active');
}

document.querySelector('.div-13').onmouseup = () => {
    document.querySelector('.div-13').classList.remove('active');
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */
function t14() {
    document.querySelector('.div-14').classList.add('active');
}
function t14a() {
    document.querySelector('.div-14').onclick = t14;
}
document.querySelector('.b-14').onclick = t14a;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
function t15() {
    +document.querySelector('.div-15').innerHTML++;
}
document.querySelector('.div-15').onmousemove = t15;
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let w16 = 75;
function t16() {
    document.querySelector('.div-16').style.width = w16 + 'px';
    w16++;
}
document.querySelector('.div-16').onmousemove = t16;
// ваше событие здесь!!!


// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
function t17On() {
    document.querySelector('.div-16').onmousemove = t16;
}

function t17Off() {
    document.querySelector('.div-16').onmousemove = null;
}
document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;
// ваше событие здесь!!!
// ваше событие здесь!!!


// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
function t18() {
    let doc = document.querySelector('.div-18');
    doc.innerHTML = doc.offsetWidth;
}
document.querySelector('.div-18').onmouseenter = t18;
// ваше событие здесь!!!


// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
function t19() {
    let doc = document.querySelector('.div-19');
    doc.innerHTML = doc.classList;
}
document.querySelector('.div-19').onmouseout = t19;
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
function t20() {
    +document.querySelector('progress').value++;
}
document.querySelector('progress').onmousemove = t20;
// ваше событие здесь!!!