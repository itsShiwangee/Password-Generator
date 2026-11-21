let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let specialCharacters = document.getElementById("specialCharacters");
let generatePassword = document.getElementById("generatePassword");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", ()=>{
    sliderValue.textContent = inputSlider.value;
})
generatePassword.addEventListener("click", ()=>{
    passBox.value = generatePasswordFunc();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let nums = "0123456789";
let specialChars  = "!@#$%^&*";

//function to generate password
function generatePasswordFunc(){
    let genPass = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += nums.checked ? nums : "";
    allChars += specialCharacters.checked ? specialChars : "";

    let i = 1;
    while(i <= inputSlider.value){
        genPass += allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }

    return genPass;
} 

copyIcon.addEventListener("click", ()=>{
    if(passBox.value != "" || passBox.value >= 1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});

