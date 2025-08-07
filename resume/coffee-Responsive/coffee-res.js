
// products_Basket--------------------------------
const notification = document.querySelector('.shopping');
const products_Basket = document.querySelector('.products_Basket');
const button = document.querySelectorAll('.kart1 button');

for(but of button){
    but.addEventListener('click', (e)=>{
        const add = Number(notification.getAttribute('data-count'));
        notification.setAttribute('data-count', add+1);
        notification.classList.add('zero')

        let parent = e.target.parentNode.parentNode;
        let clone = parent.cloneNode(true);
        products_Basket.appendChild(clone);

        clone.lastElementChild.lastElementChild.innerText = 'delete';
        let delete_Products = clone.lastElementChild.lastElementChild
        delete_Products.addEventListener('click' , (f)=>{

            const add = Number(notification.getAttribute('data-count'));
            products_Basket.removeChild(clone);

            notification.setAttribute('data-count', add-1);
            if(add == 1){
                notification.classList.remove('zero')
                products_Basket.classList.remove('display')

            }
        })
        
        if(clone){
            notification.onclick = ()=>{
                products_Basket.classList.toggle('display')
            }
        }
        
    })

}


// slider-----------------
const slider = document.querySelectorAll('.item_heder')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const totalSlide = slider.length;
let index = 0
let duration = 6000;

next.onclick = ()=>{
    slide('next');
}
prev.onclick = ()=>{
    slide('prev');
}

function slide(direction){
    if(direction == 'next'){
        if(index == totalSlide-1){
            index = 0
        }else{
            index++
        }
    }
    if(direction == 'prev'){
        if(index == 0){
            index = 2
        }else{
            index--
        }

    }

    clearInterval(timer);
    timer = setInterval(autoSlide, duration)


    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('activ')
        
    }
    slider[index].classList.add('activ')
    // console.log(index)

}
function autoSlide(){
    slide('next');
}

let timer = setInterval( autoSlide,duration)
