let eye = document.querySelector('#eyeIcon')
let pass = document.querySelector('#password')
let str = document.querySelector('#strength')
let msg = document.querySelector('#message')
let box = document.querySelector('.inputBox')

pass.addEventListener('input', () => {
  if (pass.value.length > 0) {
    msg.style.display = 'block'
  } else {
    msg.style.display = 'none'
  }

  if (pass.value.length < 4) {
    msg.style.color = 'red'
    str.innerHTML = 'Weak'
    box.style.borderColor = 'red'
    // Add semicolon at the end of line 19
    str.style.fontWeight = 'bold'
  } else if (pass.value.length >= 4 && pass.value.length <= 8) {
    msg.style.color = 'orange'
    str.innerHTML = 'Medium'
    str.style.fontWeight = 'bold'
    box.style.borderColor = 'orange'
  } else if (pass.value.length > 8) {
    msg.style.color = 'green'
    str.innerHTML = 'Strong'
    str.style.fontWeight = 'bold'
    box.style.borderColor = 'green'
  }
})

eye.onclick = function () {
  if (pass.type === 'password') {
    pass.type = 'text'
    eye.src = 'eye-open.png'
  } else {
    pass.type = 'password'
    eye.src = 'eye-close.png'
  }
}
