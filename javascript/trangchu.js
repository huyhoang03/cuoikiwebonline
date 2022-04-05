$('.add-to-cart').click(function() {
    var cart = $('.shopping_bg');
    var imgtofly = $(this).parents('li.cart_items').find('a.product-image img').eq(0);
     if (imgtofly) {
         var imgclone = imgtofly.clone()
             .offset({ top:imgtofly.offset().top, left:imgtofly.offset().left })
             .css({'opacity':'0.7', 'position':'absolute', 'height':'150px', 'awidth':'150px', 'z-index':'1000'})
             .appendTo($('body'))
             .animate({
                 'top':cart.offset().top + 10,
                 'left':cart.offset().left + 30,
                 'awidth':55,
                 'height':55
             }, 1000, 'easeInElastic');
         imgclone.animate({'awidth':0, 'height':0}, function(){ $(this).detach() });
     }
     return false;
 });