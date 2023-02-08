const notContainer = document.querySelectorAll('.notification-container')
const markBtn = document.querySelector('.mark-all-as-read')
const unmarkBtn = document.querySelector(".unmark-all-as-read")
const numberNot = document.querySelector("#h1-span")
const star = document.querySelectorAll(".new")
const container = document.querySelectorAll(".container")
let aArray = new Array(container.length)

markRead = () => {
    for (let i = 0; i < notContainer.length; i++){
        notContainer[i].classList.add("bg-white")
        markBtn.classList.remove("hidden")
        unmarkBtn.classList.add("hidden")
        star[i].classList.add("hidden")
        }
    }

unmarkRead = () => {
    for (let i = 0; i < notContainer.length; i++){
        notContainer[i].classList.remove("bg-white")
        markBtn.classList.add("hidden")
        unmarkBtn.classList.remove("hidden")
        star[i].classList.remove("hidden")
        }
    }

unmarkBtn.addEventListener("click", () =>{
    markRead()
    numberNot.innerHTML = 0
    aArray.fill(1)
})

markBtn.addEventListener("click", () =>{
    unmarkRead()
    numberNot.innerHTML = 7
    aArray.fill(0)
})

function white(place) {
    if(aArray[place] == 1){
        notContainer[place].classList.toggle("bg-white")
        star[place].classList.toggle("hidden")
        numberNot.innerHTML = parseInt(numberNot.innerHTML) + 1
        aArray[place] = 0
    }else if(aArray[place] == 0){
        notContainer[place].classList.toggle("bg-white")
        star[place].classList.toggle("hidden")
        aArray[place] = 1
        numberNot.innerHTML = parseInt(numberNot.innerHTML) - 1
    }
}

for (let i = 0; i < container.length; i++){
    aArray[i] = 0
    container[i].addEventListener("click", () =>{
        white(i)
    })
}

















































