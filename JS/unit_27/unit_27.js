let url = 'http://getpost.itgid.info/index2.php'

let num = '&num1=3&num2=19'

let qArr = {
    'auth': 'DdC33D7d2C2a7',
    'action': 0
}

function quer(taskNum) {
    let queryString = new URLSearchParams(qArr).toString().substring(0, 26) + taskNum;
    return queryString;
}

function tuskPromise(out, req, req2) {
    let a = new Promise((resolve, reject) => {
        fetch(`${url}?${req}`)
            .then(data => {
                resolve(data.text());
            })

    });

    let b = new Promise((resolve, reject) => {
        fetch(`${url}?${req2}`)
            .then(data => {
                resolve(data.text());
            })

    });

    Promise.all([a, b]).then(value => {
        document.querySelector(out).innerHTML = value;
    });
}

function tuskPromiseP(out, req, req2) {
    let a = new Promise((resolve, reject) => {
        fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: req,
        })
            .then(data => {
                resolve(data.text());
            })

    });

    let b = new Promise((resolve, reject) => {
        fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: req2,
        })
            .then(data => {
                resolve(data.text());
            })

    });

    Promise.all([a, b]).then(value => {
        document.querySelector(out).innerHTML = value;
    });
}


// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p> */
function t1() {
    let req = quer(1);
    let req2 = quer(2) + '&name=Vsevolod';
    tuskPromise('.out-1', req, req2);
}
// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;


// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>
*/
function t2() {
    let req = quer(3) + num;
    let req2 = quer(4) + num;
    tuskPromise('.out-2', req, req2);
}
// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p> */

function t3() {
    let req = quer(5);
    let req2 = quer(6) + num;
    tuskPromise('.out-3', req, req2);
}
// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p> */
function t4() {
    let req = quer(7);
    let req2 = quer(8) + '&year=1985';
    tuskPromise('.out-4', req, req2);
}
// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/
function t5() {
    let req = quer(1);
    let req2 = quer(2) + '&name=Vsevolod';
    tuskPromiseP('.out-5', req, req2);
}
// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p> */
function t6() {
    let req = quer(3) + num;
    let req2 = quer(4) + num;
    tuskPromiseP('.out-6', req, req2);
}
// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p> */
function t7() {
    let req = quer(5);
    let req2 = quer(6) + num;
    tuskPromiseP('.out-7', req, req2);
}
// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;


// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/
function t8() {
    let req = quer(7);
    let req2 = quer(8) + '&year=1985';
    tuskPromiseP('.out-8', req, req2);
}
// ваше событие здесь!!! 
document.querySelector('.b-8').onclick = t8;

