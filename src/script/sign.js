 

// $registerForm.addEventListener("submit",hendleUserRegister)

const $signForm = document.querySelector(".auth-form");
const $inputName = document.querySelector("#name");
const $inputEmail = document.querySelector("#email");
const $inputPassword = document.querySelector("#password");



const ToastifyDisplay = (message,type) => {
    return  Toastify({
         className: type === "succes" ? "succes" : "error",
         text: message,  
         duration: 3000  
         })
 }

function User (name,email,password) {
    this.name = name,
    this.email = email,
    this.password = password
}


const registerNewUser = async (e) => {
    e.preventDefault();
    var userName = $inputName.value;
    var userEmail = $inputEmail.value;
    var userPassword = $inputPassword.value;

    let newUser = new User(userName,userEmail,userPassword)
  

    fetch("https://blog-post-production-b61c.up.railway.app/api/v1/user/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
       
     if (data.status === "success") {
        
        ToastifyDisplay("Access is granted", "succes").showToast( )

        setTimeout(() => {
            location.replace( window.location.origin + "/src/pages/login.html")
        },3000)

     }else{
        ToastifyDisplay("Email already in use or ERROR", "error").showToast( )

     }
    })
    
}




$signForm.addEventListener("submit", registerNewUser)