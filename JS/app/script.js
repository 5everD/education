let f1 = document.querySelector('.f-1');

function one(){
	console.log('work');
}

one();

f1.onclick = one;

console.log(1+one());
console.log(one());

function two() {
	console.log('work 222222');
}

two();

console.log(1 + two()); 

let a = 8;
let b = 9;

function multi() {
	console.log(a*b);
	return a*b;
}

let c1 = multi();
let c2 = 10*multi();
console.log(c1, c2);

function multi2(x=9,y=8) {
	return x*y;
}

console.log(multi(4,5));
console.log(multi(20,5));
console.log(multi(4,a));

console.log(multi2(10))

document.querySelector('.f-2').onclick = function(){
	console.log('++++++');
}

document.querySelector('.f-2').onclick = () => {
	console.log('arrow');
}

