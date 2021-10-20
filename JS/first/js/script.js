console.log('Hello'); //строки берем в кавычки
console.log('World');
console.log('3');
console.log("5");
console.log(666);

console.log('Hello' + 'world'); //конкатенация
console.log('Hello ' + 'world');
console.log('Hello' + ' world');
console.log('Hello' + ' ' + 'world');

console.info('Hello');

// alert('hello');  // ctrl + l (не работает)

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = '2019';
document.getElementById('out').innerHTML = '<b>2020</b>';

document.querySelector('.header').innerHTML = 75;
document.querySelector('#one').innerHTML = 445;

let a;
a = document.querySelector('.header');
a.innerHTML = 999999;