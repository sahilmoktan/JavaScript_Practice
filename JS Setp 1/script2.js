// javascript has version es5 and new version es6,
// es5 has only var, es6 has let, const
// we are using both es5 + es6, (browsers update, mean properties add only)


// --the difference  =====================================

// var old js ma thyo
// var function scoped hunxa -> var afno parnet fnc ma pani use huna sakxa
// var add itself to windows object

function abcd() {
  for (var i = 1; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

// abcd()

//let const new js ko part ho
//let braces scoped hunxa
//let don't add itself to windows object

//js language ma dherai jaso features hunaa , ta pani hami teslai use garna sakinxa , kina ki tyo features hamilai browser le js hudai hamile provide hunxa, js window bata ti feature use garxa, window is box of features given by browser to use with js  eg: alert, prompt, console,  window search in console   (js part, var, for, if, else, fnc, array)




// --stack ===================================== (stack.jpg)
// fnc and task goes on same order as thery are called, explain in diagram



//--heap memory  =====================================
// 1+2+3+4+5+6
// internal clac lai store garne memory



// --execution context ===================================== (exeContext.jpg)
// while we run a fnc, it creates a imaginary container containing 3 things
// 1) variables
// 2) functions inside that parent fnc
// 3) lexical environment of that function

function hi() {
  var h = 3;
  function hello() {
    var i = 5;
    y = i + h;
    console.log(y);
  }
  hello();
}
// hi();

// exeContext is a container where the function's code is executed and it's created whenever a function is called. it contains 3 things: variables, functions and lexical env if it's fnc

// in above function hi(), hi can access var h and can access function hello() but not var i, parent fnc le child fnc ko variable access garnu mildaina. (scope:ani child le cahi parnet ko var lai acces garnu milxa)


// --lexical environment =====================================
// it holds it's scope and scope chain like child fnc can access parent fnc's variable but parent can't access child fnc's variable; can even access grand parant variables




// --how to copy reference values  =====================================

var a = [1,2,3,4,5,6]
var b = [...a] // ... is sperad operator
b.pop()

var obj ={
    name : 'sahil',
    cast : 'moktan'
}

var copyObj ={...obj}
copyObj.name = 'robin'


// --truthy vs falsy  =====================================
// in js, each word is either truthy or falsy ; xyz, 0.6, 
// falsy: 0 false undefined null NaN document.all

if(0){
    // console.log('hey')
} else{
    // console.log('hello')
}



// --forEach forIn do-while
// forEach loop is used only for Array

var a = [1,9,6,7,4,3,5]

a.forEach(function(ValRefName){  //anynominus function ho, 1 ko reflect auuxa fname chalxa and cotinous
    // console.log(ValRefName+2)
})
    
// forEach never changes default value in ur array, it just brings reference value, gives tep result. u got it save it ..

//forIn loop is used for obj loop

for (var key in obj){  //for paxi var banaunai parne key lekhera balla in objName lekhne
    console.log(key, obj[key])
    // console.log(obj[key])
}

//1:09:48
