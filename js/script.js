$(function(){
	$('#mobile-btn').click(function(event){
              $('#mobile-menu').show();
	});

	$('.close').click(function(event){
              $('#mobile-menu').hide();
   });

});


// purchace block toggle

let clickArrow = document.querySelector(".purchase__arrow"); 
let purchaseBlockOpen = false;

clickArrow.onclick = function() {
       if(purchaseBlockOpen === false){
              purchaseBlockOpen = true;   

              let openPurchaseBlock = gsap.timeline();
              openPurchaseBlock.to(".purchase__arrow", {duration: .2, rotation: 180})
                     .to(".purchase__block", {duration: .2, height: 170})
                     .to(".purchase__line", {duration: .01, height: 85})
                     

       } else if (purchaseBlockOpen){
              purchaseBlockOpen = false;
              let height = document.querySelector('.purchase__description').offsetHeight;
              let block = document.querySelector('.purchase__block').offsetHeight;
              let line = 90;
              
              let totalHeight = height + block + line;


              let closePurchaseBlock = gsap.timeline();
              closePurchaseBlock.to(".purchase__arrow", {duration: .2, rotation: 0})
                     .to(".purchase__block", {duration: .2, height: totalHeight})
                     .to(".purchase__line", {duration: .2, height: 70})
                     
       }
}


