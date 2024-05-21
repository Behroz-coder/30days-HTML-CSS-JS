const button = document.querySelectorAll('.buttons')
const body = document.querySelector('body')

button.forEach(function (btn) {
    console.log(btn);
    btn.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
    //     if (e.target.id == "grey") {
    //         body.style.backgroundColor =e.target.id
    //     }
    //     else if (e.target.id == "red") {
    //         body.style.backgroundColor =e.target.id
    //     }
    //     else if (e.target.id == "blue") {
    //         body.style.backgroundColor =e.target.id
    //     }
    // else if (e.target.id == "black") {
    //         body.style.backgroundColor =e.target.id
    //     }

    //     else {
    //         body.style.backgroundColor ="white"
        //     }
        
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor =e.target.id
                break;
            case "red":
                body.style.backgroundColor =e.target.id
                break;
            case "yellow":
                body.style.backgroundColor =e.target.id
                break;
            case "blue":
                body.style.backgroundColor =e.target.id
                break;
        
            default:
                break;
        }
        
    })
    
})