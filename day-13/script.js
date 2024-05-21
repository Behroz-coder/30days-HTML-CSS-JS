let lists = document.querySelectorAll('.list')
let left = document.getElementById('left')
let right = document.getElementById('right')

for (const list of lists) {
    
 
  list.addEventListener('dragstart', function (e) {
    let select = e.target
    console.log(select)

    right.addEventListener('dragover', function (e) {
      e.preventDefault()
    })

    right.addEventListener('drop', function (e) {
      right.appendChild(select)
      select = null
    })
      
      left.addEventListener('dragover', function (e) {
  e.preventDefault()
})

left.addEventListener('drop', function (e) {
  left.appendChild(select)
  select = null
})

  })
}

