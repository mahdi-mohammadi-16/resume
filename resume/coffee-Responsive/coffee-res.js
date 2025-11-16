
// box-menu----------------------------------------------
const icon_Menu = document.querySelector(".icon-menu")
const box_Menu = document.querySelector(".box-menu")
const container = document.querySelector(".container")

icon_Menu.addEventListener('click', (e)=>{
    box_Menu.style.display = 'block'
    e.stopPropagation();
    if(icon_Menu.onclick !== false){
        container.addEventListener('click', ()=>{
            box_Menu.style.display = 'none'
        })

    }
})

// products_Basket--------------------------------
const notification = document.querySelector('.shopping');
const products_Basket = document.querySelector('.products_Basket');
const Basket = document.querySelector('.Basket');

const button = document.querySelectorAll('.price-product-button');

for(but of button){
    but.addEventListener('click', (e)=>{
        const add = Number(notification.getAttribute('data-count'));
        notification.setAttribute('data-count', add+1);
        notification.classList.add('zero')

        e.preventDefault();   
        e.stopPropagation();

        let parent = e.target.parentNode.parentNode;
        let clone = parent.cloneNode(true);

        products_Basket.appendChild(clone);

        clone.lastElementChild.lastElementChild.innerHTML = '<i class="fas fa-times"></i>';
        clone.lastElementChild.lastElementChild.classList.add('delete-button')
        let delete_Products = clone.lastElementChild.lastElementChild
        delete_Products.addEventListener('click' , (f)=>{

            
            
            const add = Number(notification.getAttribute('data-count'));
            products_Basket.removeChild(clone);
            
            notification.setAttribute('data-count', add-1);
            if(add == 1){
                notification.classList.remove('zero')
                Basket.classList.remove('display')
                
            }
            f.preventDefault();   
            f.stopPropagation();
        })
        
        if(clone){
            notification.onclick = ()=>{
                Basket.classList.toggle('display')
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
    
}
function autoSlide(){
    slide('next');
}

let timer = setInterval( autoSlide,duration)



// product-----------------
const select_item = document.querySelector('.select-item').children
const productS = document.querySelector('.productS').children
console.log(productS)
for(let i = 0; i < select_item.length ; i++){

    select_item[i].onclick = (e)=>{

        for(let j = 0 ; j < productS.length ; j++){    

            productS[j].classList.remove('display2')
        }
        for(let j = 0 ; j < productS.length ; j++){    

            select_item[j].classList.remove('activ2')
        }

        select_item[i].classList.add('activ2')
        productS[i].classList.add('display2')
    }
}
