//higher order fncs
//constructor fncs
//new keyword
//iife
//prototype
//prototypal inheritance
//this call apply bind
//pure & inpure fncs
//clousers



//higher order fncs =============================

function abcd (a){   // a is reciving function as parameters

}
abcd( function(){} )  //sending fnc as a argument 
//or

function def (){
    return function(){}
}

//func jasle accept gardxa aru fnc as a parameters, func jasle return garxa arko function , for each is a higher order function, arr.forEach(function (){}), setTimeout(...)

// note: higher order fnc who acceps functions as values
// note: first class fnc who is going as values in other higher order fncs


//constructor fncs =============================
// normal func jas ma  this use hunxa ani call garda new keyword ko use hunxa

function mainbutton (a){    //mainbutton, student {name, class, gender,}
    this.radius =12         //this point towards window
    this.color = a
    this.pressAble = true
}

var button1 = new mainbutton() 
var button2 = new mainbutton('red')

//new keyword infornt of fnc call makes a new blank obj and returns to button1 var

// eutai kisim ko properties vako fnc multiple time banauna parda hami construction funcs create garera aru clone garxau


//new keyword =============================
// new keyword asways creates a blank obj for the constructor fnc which is about to be called and filled constructor fnc's properties


//iife =============================
// immediately invoked function expression
// is used this method to make private varialbe, can't be changed, can't be accessed easily,
// if developer don't wan't to show var and make it privacy , is more safer


// (function(){
//     var a = 12
// })()

var ans = (function(){
    var privateVal =12
    return {
        getter: function(){
            console.log(privateVal)
        },
        setter: function (val){
            privateVal = val
        }
    }
})()

//prototype ============================= pototype.pdf
// it is collection of built in helper functions and helper methods for developer to find obj/arry properties

//prototypal inheritance =============================
//qualities that u borrow form ur parent is inheritance
//extra property always given by js to every obj/arry is called prototypal inheritance

var normalHuman ={
    canFly: false,
    canTalk: true,
    canWalk: true,
    haveEmotions: true,
    hasHandsLegs: true
}

var graduatedStudent= {
    canCalculate: true,
    canReadWrite: true,
    canCommunicateBetter: true
}

graduatedStudent.__proto__=normalHuman;



//this call apply bind =============================

// this: is an special keyword which has different values in different different places of context, global scope, fnc scope, method scope

var xObj ={
    xyz: function(){
    console.log(this)
    }
}
// xObj.xyz()

var buttonX = document.querySelector('button')

buttonX.addEventListener('click', function(){
    console.log(this)
    // this.style.color ='red'
})

// call => u have a function and a variable, function ma vako this ko defult value lai window bata variable tira point garuna 

function eee(){
    console.log (this.age)
}

var obj2 = { age:26}
    
// eee.call(obj2)




//pure & impure fncs =============================

function ddd(val){
    return Math.random()*val;
}

//ddd (2)

