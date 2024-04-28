
jQuery('document').ready(function(){

 //мобильный режим веб разработчика ( в консоле два квадратика возле стрелочки)   
let a1 = 0;
document.querySelector('.block-1').onclick = function () {
a1++;
document.querySelector('.out-1').innerHTML = 'click ' + a1;
	}
//выводит на страницу количество кликов
//событие onclick (обычный клик)	
//в мобильном режиме веб разработчика -- работает 
//на айфоне -- работает
//на андройде -- работает
	
let a2 = 0;
document.querySelector('.block-2').ondblclick = function () {
a2++;
document.querySelector('.out-2').innerHTML = 'dblclick ' + a2;
	}
//событие ondblclick двойной клик
//в мобильном режиме веб разработчика -- не работает 
//на айфоне -- работает
//на андройде -- работает

let a3 = 0;
document.querySelector('.block-3').onmousemove = function () {
a3++;
document.querySelector('.out-3').innerHTML = 'mousemove  ' + a3;
	}
//onmousemove двигаем мышкой по блоку происходит событие
//в мобильном режиме веб разработчика -- не работает 
//на айфоне -- не работает
//на андройде -- не работает
	
let a4 = 0;
document.querySelector('.block-4').onmouseenter = function () {
a4++;
document.querySelector('.out-4').innerHTML = 'mouseenter  ' + a4;
	}
//onmouseenter наводим мышку на блок происходит событие
//в мобильном режиме веб разработчика -- не работает 
//на айфоне -- не работает
//на андройде -- не работает

let a5 = 0;
document.querySelector('.block-5').onmouseleave = function () {
a5++;
document.querySelector('.out-5').innerHTML = 'mouseleave' + a5;
	}
//onmouseleave ушла мышка сблока произошло событие	
//в мобильном режиме веб разработчика -- не работает 
//на айфоне -- не работает
//на андройде -- не работает
	
	
	
	
	
	
	
	
	
	
	
	
	
    
});  




     
      
      
       
 
     
     
     
 
     
     



  
     










