var x=10;
var y=5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

var a=20;
var b=15;
console.log(x==y);
console.log(a<=b);
console.log(a>=b);
console.log(a!=b);

var c=25;
var d=30;
console.log(c&&d);
console.log(c||d);
console.log(c!=d);

var e=10;
var f=20;

console.log(e&f);
console.log(e|f);
console.log(e^f);
console.log(e<<f);
console.log(e>>=f);


var g=60;
console.log(g+=10);
console.log(g-=10);
console.log(g*=10);
console.log(g/=10);

var age=19;
var hasRightToVote=age>=18?'yes':'no';
console.log(hasRightToVote);

var num =42;
var str ="hello";
var isactive ="true";
console.log(typeof num);
console.log(typeof str);
console.log(typeof isactive);
console.log(typeof undefined);
console.log(typeof null);

var fastname="karthik";
var lastname="sriram";
var fullname=fastname+" "+lastname;
console.log(fullname);

var principal=1000;
var time=12;
var rate=5;
var simpleInterest=(principal*rate*time)/100;
console.log(simpleInterest);

var num1=15;
var num2=20;
var num3=25;
var averagre=(num1+num2+num3)/3;
console.log(averagre);

var num1=5;
var num2=20;
var greater=(num1>num2)?num1:num2;
console.log(greater);

let radius = 4;
const PI = 3.14;
let area = PI * radius * radius;
console.log (area);

let number =-5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
