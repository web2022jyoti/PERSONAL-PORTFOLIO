
/*----------typing animation----------*/
var typed = new Typed(".typing",{
    strings:["","Web Developer","Web Designer","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed2 = new Typed(".typing2",{
    strings:["","Web Developer","Web Designer","Graphic Designer","Professional Gamer","Food Lover"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*--------------------Responsive--------------------*/
var sidemenu = document.querySelector(".nav");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxqLUQhOPhVHSJqL1A9j_QPhlWXHQLDdRAcpRkVFtJic8GcSdIIbJKOEgTGEqc7FUP40g/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

/*--------------------Form Submit--------------------*/
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent Successfully"
      setTimeout(()=>{
          msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})