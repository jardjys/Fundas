$(document).ready(function(){
    toggle();
    cambiarBoton();
});

function cambiarBoton(){
	$(".dropdown-menu li a").click(function(){
    	$(".btn:first-child").text($(this).text());
    	$(".btn:first-child").val($(this).text());
  });
}

function toggle(){
	$(".dropdown-toggle").dropdown();
}