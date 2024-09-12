// $('.rating p').on('click',function(){
//     $(this).toggleClass('rating2');
//     // $(this).removeClass('rating p:hover')
// });

$('.rating > div').on('click', function() {
    // Remove the 'rating2' class from all buttons
    $('.rating > div').removeClass('rating2');
   
    // Add the 'rating2' class to the clicked button
    $(this).addClass('rating2');
});
