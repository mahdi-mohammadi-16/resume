// انیمیشن اسکرول
AOS.init();



new Typed('#typed', {
  strings: ["Web Designer","Love programming","Love to learn"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});


const sidebar = document.getElementById('Hamburger-Menu');
const toggleButton = document.getElementById('button-Hamburger');

toggleButton.addEventListener('click', function(event) {
  event.stopPropagation(); // نذار کلیک روی دکمه باعث بسته شدن بشه
  sidebar.classList.add('open');
});

document.addEventListener('click', function(event) {
  if (!sidebar.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});

sidebar.addEventListener('click', function(event) {
  event.stopPropagation(); // نذار کلیک داخل سایدبار باعث بسته شدن بشه
});









let SubscribeButton = document.getElementById("Subscribe-button")
let inputSearch = document.getElementById("input-search")
let pSearch = document.getElementById("search-end-p")

SubscribeButton.onclick = function(){

// این قسمت خالی بودن فیلد را مشخص می کند

    if(inputSearch.value.trim() === ""){
        pSearch.innerText = "فیلد خالی است ! مقداری وارد کنید"
// بعد از 4 ثانیه متن هشدار پاک می شود
        setTimeout(function(){
            pSearch.innerText = "";
        },4000);

    }else if(inputSearch.value.includes("@gmail.com")){
        
        alert(inputSearch.value + "ثبت شد");
    }
    else{
        pSearch.innerText = "@gmail.com را وارد کنید"
        // بعد از 4 ثانیه متن هشدار پاک می شود
        setTimeout(function(){
            pSearch.innerText = "";
        },4000);
    }

}
  

