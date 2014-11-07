 $(document).ready(function(){

    $(".dropdown-menu").on('click', 'li a', function(){
      $(".btn-primary:first-child").text($(this).text());
      $(".btn-primary:first-child").val($(this).text());
   });

});