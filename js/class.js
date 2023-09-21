window.addEventListener("load", function() {
  $j = jQuery;

/*
  --- Copy from here
*/

if ($j('.custom_page_123').length>0){
  $j('<div class="qna"></div>').appendTo("#col2");
  $j('.box.text:not(:first-of-type)').each(function(){
    $j(this).appendTo('.qna');
    $j(this).children('.box_content').slideUp();
  });
  
  $j('.qna .box.text').click(function(){
    if ($j(this).hasClass('qna_show')){
      $j('.qna_show').children('.box_content').slideUp();
      $j('.qna_show').removeClass('qna_show');
    } else {
      $j('.qna_show').children('.box_content').slideUp();
      $j('.qna_show').removeClass('qna_show');
      $j(this).addClass('qna_show');
      $j(this).children('.box_content').slideDown();
    }
  });
}
})
$(function() {
  $('.btn-fold').on('click', function(){
    if(!$(this).closest('.qna-item').hasClass('on')){
      $('.qna-item').removeClass('on').find('.answer-article').hide();
       var oft = $(this).offset().top;
      $('html,body').stop().animate({scrollTop:oft - 250 }, 300)
      $(this).closest('.qna-item').addClass('on').find('.answer-article').slideDown(300)

    } else {
      $(this).closest('.qna-item').removeClass('on').find('.answer-article').slideUp(300)
    }
  })
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
});
