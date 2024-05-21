let popUp = document.getElementById('popUp');

let btn = document.getElementById('btn');

let btnOk = document.getElementById('btnOk');

btn.addEventListener('click', function () { 

    popUp.classList.add('popup-open');
})

btnOk.addEventListener('click', function () { 

    popUp.classList.remove('popup-open');
})