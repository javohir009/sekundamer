const body =document.querySelector("body")
const spinner =document.querySelector(".lds-spinner")
const title =document.querySelector(".h1")
const plus =document.querySelector(".plus")
const stop =document.querySelector(".stop")
const restart =document.querySelector(".restart")




window.addEventListener("DOMContentloaded", () =>{
    setTimeout(() =>{
        spinner.style.display = "none"
    },2000)
})

stop,plus.addEventListener(`click`, () => {
    let a = 0;
    const repeat = restart.addEventListener(`click`,() =>{
        title.textContent = "00"
    }) 
    const interval =setInterval (() =>{
        title.textContent = ++a
    }, 100)
    stop.addEventListener(`click`, () =>{
        setTimeout(() =>{
            clearInterval(interval)
        })  
    })    
})

