const btnEl = document.querySelector(".btn")
const closeIconeEl = document.querySelector(".fa-solid")
const trailerContainerEl = document.querySelector(".trailer-container")
const videoEl = document.querySelector("video")

btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("active")
})

closeIconeEl.addEventListener("click",()=>{
    trailerContainerEl.classList.add("active")
    videoEl.pause()
    videoEl.currentTime = 0
})