let url = 'http://getpost.itgid.info/index2.php?'

let num = '&num1=4&num2=15'

let qArr = {
    'auth': 'DdC33D7d2C2a7',
    'action': 0
}

function quer(tuskN) {
    let queryString = new URLSearchParams(qArr).toString().substring(0, 26) + tuskN;
    return queryString;
}

function tuskAllGet(out, data2) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunction(this.responseText);
        }
    }
    function callbackFunction(data) {
        document.querySelector(out).innerHTML = data;
    }
    xhttp.open("GET", `${url}${data2}`, true);
    xhttp.send();
}

function tuskAllPost(out, data2) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunction(this.responseText);
        }
    }
    function callbackFunction(data) {
        document.querySelector(out).innerHTML = data;
    }
    xhttp.open('POST', `${url}${data2}`, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(data2);
}


// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
function t1() {
    let req = quer(1);
    tuskAllGet('.out-1', req);
}
// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;


// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */
function t2() {
    let req = quer(2) + '&name=Vsevolod';
    tuskAllGet('.out-2', req);
}
// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */
function t3() {
    let req = quer(3) + num;
    tuskAllGet('.out-3', req);
}
// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */
function t4() {
    let req = quer(4) + num;
    tuskAllGet('.out-4', req);
}
// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */
function t5() {
    let req = quer(5);
    tuskAllGet('.out-5', req);
}
// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */
function t6() {
    let req = quer(6) + num;
    tuskAllGet('.out-6', req);
}
// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */
function t7() {
    let req = quer(7);
    tuskAllGet('.out-7', req);
}
// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;



// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/
function t8() {
    let req = quer(8) + '&year=1985';
    tuskAllGet('.out-8', req);
}
// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */
function t9() {
    // let req = quer(9) + '&m=1';
    // let req = quer(9) + '&d=1';
    let req = quer(9) + '&y=1';
    tuskAllGet('.out-9', req);
}
// ваше событие здесь!!!
document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10. */
function t10() {
    let req = quer(1);
    tuskAllPost('.out-10', req);
}
// ваше событие здесь!!!
document.querySelector('.b-10').onclick = t10;

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */
function t11() {
    let req = quer(2) + '&name=Vsevolod';
    tuskAllPost('.out-11', req);
}
// ваше событие здесь!!!
document.querySelector('.b-11').onclick = t11;


// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/
function t12() {
    let req = quer(3) + num;
    tuskAllPost('.out-12', req);
}
// ваше событие здесь!!!
document.querySelector('.b-12').onclick = t12;


// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/
function t13() {
    let req = quer(4) + num;
    tuskAllPost('.out-13', req);
}
// ваше событие здесь!!!
document.querySelector('.b-13').onclick = t13;


// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/
function t14() {
    let req = quer(5);
    tuskAllPost('.out-14', req);
}
// ваше событие здесь!!!
document.querySelector('.b-14').onclick = t14;


// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */
function t15() {
    let req = quer(6) + num;
    tuskAllPost('.out-15', req);
}
// ваше событие здесь!!!
document.querySelector('.b-15').onclick = t15;


// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */
function t16() {
    let req = quer(7);
    tuskAllPost('.out-16', req);
}
// ваше событие здесь!!!
document.querySelector('.b-16').onclick = t16;


// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */
function t17() {
    let req = quer(8) + '&year=1985';
    tuskAllPost('.out-17', req);
}
// ваше событие здесь!!!
document.querySelector('.b-17').onclick = t17;


// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */
function t18() {
    // let req = quer(9) + '&m=1';
    // let req = quer(9) + '&d=1';
    let req = quer(9) + '&y=1';
    tuskAllPost('.out-18', req);
}
// ваше событие здесь!!!
document.querySelector('.b-18').onclick = t18;

