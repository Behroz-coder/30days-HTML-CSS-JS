let qrText = document.querySelector('#qrText');
let imageBox = document.querySelector('#imageBox');
let qrImage = document.querySelector('#qrImage');

function qrGenerator() {
           

           qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

imageBox.classList.add("show-image");
       }