
let toastBox = document.getElementById('toastBox')


let success = "<i class='fa-solid fa-circle-check'></i> Successfully submitted! "
let error = "<i class='fa-solid fa-circle-xmark'></i>  An error occurred while submitting"
let invalid = "<i class='fa-solid fa-circle-exclamation'></i> Invalid input, please check again "

function message(msg) {
    let toast = document.createElement('div')
    toast.classList.add('msg')
    toast.innerHTML = msg;
    toastBox.appendChild(toast)
    if (msg.includes('error')) {
        toast.classList.add('error')
        
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid')
        
    }

    setTimeout(() => {
        toast.remove();
    }, 4000);

  
}