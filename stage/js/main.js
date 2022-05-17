$(function(){
  'user strict'
  $('.toggle-sidebar') .on ('click',function(){
      $('.content-area, .sidebar').toggleClass('no-sidebar');
  })
  // .toggle-submenu
  $(".toggle-submenu") .on('click', function(){
    $(this).find(".fa-angle-right").toggleClass('down')
    $(this)
       .next(".chiled-links")
       .slideToggle();  
  });// end  .toggle-submenu

  //toggle-setting 
  $('.toggle-setting ') .on('click', function(){
    $(this).find("i").toggleClass("fa-spin");
    $(this).parent().toggleClass('hide-setting ');
  })

}); //end function 
