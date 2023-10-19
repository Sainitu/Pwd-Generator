let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passbox = document.getElementById('passbox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');




//getting value of the slider or range through scrolling it
sliderValue.textContent = inputSlider.value ;
inputSlider.addEventListener('input' , () => {
    sliderValue.textContent = inputSlider.value ;
});

//adding events to the button
genBtn.addEventListener('click', () =>{
    passbox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let Allnumbers = "0123456789";
let Allsymbols = "!@#$%^&*"

//generate Password function that will show the desired output(password)
function generatePassword(){
    let genPassword = '';
    let allChars = '';

    

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? Allnumbers :"";
    allChars += symbols.checked ? Allsymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    while(i <= inputSlider.value){
        
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));  //math.random generate any random value from 0-9 digits
        i++;
    }
    return genPassword;

}
//adding events on the copy icon for the better display 
copyIcon.addEventListener('click', ()=> {
    if(passbox.value != "" || passbox.value.length >=1 ){
        navigator.clipboard.writeText(passbox.value);
        copyIcon.title = 'Password Copied !!';
        copyIcon.innerText = 'check';

        setTimeout(()=>{
            copyIcon.innerHTML ='copy_all';
            copyIcon.title = "";
        }, 3000);
    }
    
});
