

var name= document.querySelector("#name").value
var email=document.querySelector("#email").value
var phone= document.querySelector("#phone").value
var message = document.querySelector("#message").value
document.querySelector("#submit").addEventListener('click',submit);


function submit(){

    var obj= {
        name: name,
        email:email,
        phone: phone,
        message: message
    }


}



