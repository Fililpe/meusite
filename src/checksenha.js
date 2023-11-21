let passwordLength = 16

const inputEl = document.querySelector("#password")

function generatepassword() {
    const chars = "qweasdzxcQWEASDZXC1234567890!@#$%&.*/"

    let password = ""
    
    for (let i = 0; i < 10; i++) {
        const randomPassword = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomPassword, randomPassword + 1)
        console.log(randomPassword);
    }
    inputEl.value = password
}

    const passwordLengthEl = document.querySelector("#password-length")
    passwordLengthEl.addEventListener("input", ()=>{
            passwordLength = passwordLengthEl.value
            generatepassword()
        } )
    console.log(passwordLength);

generatepassword()