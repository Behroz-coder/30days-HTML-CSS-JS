// Selecting elements using querySelector
const fileInput = document.querySelector('.file-input')
const droparea = document.querySelector('.file-drop-area')
const deleteButton = document.querySelector('.item-delete')

// Adding event listeners for dragenter, focus, and click
fileInput.addEventListener('dragenter', function () {
  droparea.classList.add('is-active')
})

fileInput.addEventListener('focus', function () {
  droparea.classList.add('is-active')
})

fileInput.addEventListener('click', function () {
  droparea.classList.add('is-active')
})

// Adding event listeners for dragleave, blur, and drop
fileInput.addEventListener('dragleave', function () {
  droparea.classList.remove('is-active')
})

fileInput.addEventListener('blur', function () {
  droparea.classList.remove('is-active')
})

fileInput.addEventListener('drop', function () {
  droparea.classList.remove('is-active')
})

// Adding event listener for change
fileInput.addEventListener('change', function () {
  let filesCount = this.files.length
  let textContainer = this.previousElementSibling

  if (filesCount === 1) {
    let fileName = this.value.split('\\').pop()
    textContainer.textContent = fileName
    document.querySelector('.item-delete').style.display = 'inline-block'
  } else if (filesCount === 0) {
    textContainer.textContent = 'or drop files here'
    document.querySelector('.item-delete').style.display = 'none'
  } else {
    textContainer.textContent = filesCount + ' files selected'
    document.querySelector('.item-delete').style.display = 'inline-block'
  }
})

// Adding event listener for delete button
deleteButton.addEventListener('click', function () {
  document.querySelector('.file-input').value = null
  document.querySelector('.file-msg').textContent = 'or drop files here'
  document.querySelector('.item-delete').style.display = 'none'
})
