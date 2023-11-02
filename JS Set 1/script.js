// minustopic

// -word vs keyword =====================================
// baba, yaya or any text that has no meaning in JavaScript is word, these text are not reserved by JS
// for, var, let or any text that has meaning in JavaScript is keyword, they are reserved by JavaScript


// -var const let =====================================

// variable and constent 
// score = 3, life = 2

// code ma data store garna use hune lai variable vaninxa

var a = 12
var b = 19
// a = 6

const changeNahune = 'assign gareko data change hudaina'
const c = 4
// c = 6

let d = 'variables nai ho but differnt from var , check on double minus the difference'


// -hoisting =====================================
// not hosting  !! don't be confuse

// variable and function are hoisted wihch mean there declaration is moved on top of code

// console.log(e)

var e; //declaration
e =12 //initialization or to set 

//hoisting makes var e at top of all, that's why even if we declare var e below console, it execute var e

//var b = 19 gare pani js le var e lai jastai conversion hunxa, jaha declaration hunxa ani top ma janxa but initialization pani sangai janxa, vane console lai mathi garda, var e matra top ma janxa ani undefine auxa.

// undefine mean existance xa but value xaina(most sharp man xa but who?), not-define mean no-existance (lksdfwe name ko kai existance xaina , only console log (abc))



// -types in JavaScript (primitive and reference) =====================================
// kunai value lai source bata copy garda copy navayera main source ko value reflect matra vayera basne value lai reference vaninxa,,  jako value copy garda duplication nai hunxa teslai primitive vaninxa

var f =12 //f main source ho
var g =f  //g le f ko copy garyo

g = g+2  //g le afno value ma 2 add garyo, console ma herda f ko value 12 nai hunxa but g ko 14

var h = [1,5,9,7]  //h main source
var i = h //i le h ko value copy garyo

i.pop() // i le afno value ma 7 lai hatayo , but i ko afno original navayera h ko reflect value vayekole h ko ni 7 janxa, yaha i le h ko refrence value leko xa, exmp: ur and dad's stuff same (sachi nai copy nai garnu parne -- topic)

// bracket xa reference, bracket xaina premitives


// -conditionals - if else & else-if  =====================================
//  yo garu ki tyo garu case lai conditionals bujne

if(1>2){  //true or false  kura rakhne
    console.log('hello')
}


if(11>12){
    console.log('hello1')
}else if(12>13 ){
    console.log('hello2')
}else{
    // console.log('hello3')
}

//but true or false kura bahek 'apple' ni rakxana, so tesko lagi -- truthy and falsy topic




//-loop    means repeat  =====================================
// 1 1 1 1 1 1 1 
// 1 2 3 4 5 6 7

// for (start;end;change) // for loop
// 0-10 samaa print garnu k k garnu hunxa

for(var i=0;i<11; i++){
    // console.log(i)
}
//prefix,postfix about ++

// while(condition){  //condition true vainjel chalxa
// }

var j = 5

while(j<10){
    j++
    // console.log(j)
}



// -functions  =====================================
//fnc are set of instruction of code and give them a name
//used for, 1) instruction lai tu/turuntai na chalaune, paxi  chalaune 
//          2) instruction lai re-use ko lagi
//          3) instruction lai patak patak use garne tara different data sanga exmp: bikeStart

function bikestart(){
    console.log('chabi halne ani On ma Ghumaune')
    console.log('Clutch Samune')
    console.log('excilater alikati ghumaune')
    console.log('Start Button Press garne')
    console.log('bhruum')
}
// bikestart()


// -params, arguments =====================================

//12,13,16 sent value are arguments, a,b,c are parameters variables that hold argument values
function abcd(a , b, c){   
    console.log(a, b)
}
// abcd(12)
// abcd(12, 13,  16)   


//  -arrays  =====================================
// euta variable ma euta matra value store garnu painxa, tara eautai variable ma multiple value save garnu parema array use garinxa, array = group of values , big bracket le cover garinxa

var arr = [3, 2, 8, 9, 7]
// arr[1]// to target inner values


// -push pop shift unshift splice =====================================

arr.push(6) //.push adds value in array at the last
arr.pop() //.pop remove value from last 
arr.unshift(1) //.unshift adds value at the begging of array
arr.shift() //.pop remove value from front of array
arr.splice(2,1)  //.splice remove value from array from middle, 2nd index to 1/2/3


// -object =====================================

//object is for saving/holding more details of variable, in a key value pair, covered by {curley brasis} 
// left side in obj are keys and rights are values which is in pair

var employ002 ={
    name:'sahil',
    lastName:'moktan',
    age:'30',
    address:'kathmandu'
}

var mobile ={
    brand:'samsung',
    model:'a70',
    price:'32K',
    color:'gray',
    type:'smart',
    saySomthing: function(){}
}


// -properties vs methods =====================================
// on above mobile obj from brand to type is properties but saySomthing is methods, because it is fnc


// updating obj =====================================

mobile.brand ='nokia'
    







