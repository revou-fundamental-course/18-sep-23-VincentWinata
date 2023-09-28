document.getElementById("button").addEventListener("click", function() {
   let name = document.forms['contact-form']['your-name'].value;
   let email = document.forms['contact-form']['email'].value;
   let interest = document.forms['contact-form']['interest'].value;
   let number = document.forms['contact-form']['phone-number'].value;


   if(!name){
    document.getElementById("name-error").innerText = "Name cannot be blank!";
   }
   else{
    document.getElementById("name-error").innerText = "";
   }

   if(!email){
    document.getElementById("email-error").innerText = "Email cannot be blank!";
   }
   else{
    document.getElementById("email-error").innerText = "";
   }

   if(!interest){
    document.getElementById("interest-error").innerText = "Interest cannot be blank!";
   }
   else{
    document.getElementById("interest-error").innerText = "";
   }
   if(!number){
    document.getElementById("number-error").innerText = "Phone number cannot be blank!";
   }
   else{
    document.getElementById("number-error").innerText = "";
   }
});

const carouselSlides = document.querySelectorAll(".image");
let currentIndex = 0;
let interval = 5000;

function nextSlide(){
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    carouselSlides[currentIndex].classList.add("active");
}

function startSlide(){
    setInterval(nextSlide, interval)
}

(function(){
    startSlide();
})()