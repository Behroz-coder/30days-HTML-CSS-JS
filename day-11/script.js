let userInput = document.getElementById('date')
let btn = document.getElementById('btn')
let result = document.getElementById('result')
userInput.max = new Date().toISOString().split('T')[0]

// console.log(userInput.max);

btn.addEventListener('click', () => {
    let birthDay = new Date(userInput.value)
    let d1 = birthDay.getDate()
    let m1 = birthDay.getMonth() + 1
    let y1 = birthDay.getFullYear()

    let today = new Date()

    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()
    let d3, m3, y3
    y3 = y2 - y1
    //   console.log(y3)
    if (m2 >= m1) {
        m3 = m2 - m1
    } else {
        y3--
        m3 = 12 - m1 + m2
    }
    if (d2 >= d1) {
        d3 = d2 - d1
    } else {
        m3--
        d3 = 31 - d1 + d2
    }
    if (m3 < 0) {
        y3--
        m3 = 11
    }

    result.innerHTML = `You are <span> ${y3} </span> years,   <span> ${m3} </span> months and  <span> ${d3} </span> days old`
})
