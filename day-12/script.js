let scrollCounter = document.querySelector('.gallery')
let back = document.querySelector('#backBtn')
let next = document.querySelector('#nextBtn')

scrollCounter.addEventListener('wheel', function (e) {
    e.preventDefault()
    scrollCounter.scrollLeft += e.deltaY
    scrollCounter.style.scrollBehavior = 'auto'

})

back.addEventListener('click', function (e) {
    
    scrollCounter.style.scrollBehavior="smooth" 
    scrollCounter.scrollLeft += 900
})

next.addEventListener('click', function (e) {

    scrollCounter.style.scrollBehavior = 'smooth'

    scrollCounter.scrollLeft -=900 
})