$(document).ready(function(){
   
    // Update number of products in cart
    $(".add-to-cart").on("click", function(){
        $("#item-counter").show();
        var currentNumber = $("#item-counter").text();
        currentNumber = Number(currentNumber);
        currentNumber = currentNumber + 1;
        $("#item-counter").html(currentNumber);
         
        // Update total price and discount
        var itemPrice = $(this).parent().data("price"); 
        itemPrice = Number(itemPrice);
        var sale = $(this).parent().data("sale");
        var discount = $(this).parent().data("discount");
        discount = Number(discount);
        var totalPrice = $("#total-price").text();
        totalPrice = Number(totalPrice);
        var totalSaved = $("#total-saved").text();
        totalSaved = Number(totalSaved);
        if (sale) {
            var salePrice = itemPrice - discount;
            totalPrice = totalPrice + salePrice;
            console.log(discount);
            totalSaved = totalSaved + discount;
            $("#total-saved").html(totalSaved);
    
            } else {
                totalPrice = totalPrice +itemPrice;
            }
            $("#total-price").html(totalPrice);
     }) 
    
    // Show total price and discount when cart icon is clicked
    $(".cart-icon").on("click", function() {
        $("#price-box").show();
    })
    
    // Hide total price when clicked
    $("#price-box").on("click", function() {
        $("#price-box").hide();
    }) 
    
    
    // Validate email address
    $("#subscribe").on("click", function() {
        var email = $("input[type=email]").is(':valid');
        
        if (email) {
            alert( "Thanks for subscribing!");
        } else {
            alert("Please enter a valid email address");
        }
    })
 
// Product carousel
$('.main-carousel').flickity({
    contain: true,
    groupCells: true
});
   
})