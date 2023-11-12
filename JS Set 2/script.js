// sync and async ?  ===================================
// js is sync language and single threaded : calulating one at a time

// sync means start with one job, until unless previous work finish don't strat next work/code

// async means start all job at a time, respond/work that completed fist is executed at first

//task a- 5
//task b- 2
//task c- 7
//task d- 1

// setTimeout, setInterval, Promise, fetch, axios, XMLHttpRequest  //are async examples

// discover: callback ani promises ani async

// setTimeout(callback, timeinms)
//callbacks fnc async code ma ans ayepaxi ballaa chalne garxa

// var ans = fetch( `http;/`) xxx
// console.log(ans) xxx




// js is not asynchronous  ===================================
// there is mainStack and sideStack, event loop is the messanger


// setTimeout, setInterval, Promise, fetch, axios, XMLHttpRequest 
// ans are run: then catch, callbacks, async await



// promises   ===================================
// is a fnc that is saved in varialbe for future use, pending bata ya resolve ya reject state ma janexa, resole:then, rejcet: catch

var ans = new Promise((res, rej)=>{
    if (true){
        return res()
    } else{
        return rej()
    }
})

ans.then().catch() //vitra function nai auuxa

//task 1: ask user a number or generate a number and check if it's above or below 5 and respond through particular way



// async await ===================================
// kunai easto fnc jas ma async code lihera promis use garna sakinxa ani ans aysi then lagauna parxa taaraa then use nagari code chalauna await use garinxa

async function abcde(){
    let raw = await fetch(`https://randomuser.me/api`)
    let ans = await raw.json()
    console.log(ans)
}
// abcde()

