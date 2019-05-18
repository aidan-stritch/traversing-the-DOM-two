$(document).ready(function(){
  
 
$(".theButton").click(function(){
  $("#panel .container").siblings().hide();
  /*hides all panels when a panel is clicked*/
   })
   
  $(".theButton").click(function(){
  $(this).hide();
  /*hides only the panel that was clicked*/
   })
   
$(".theButton").click(function(){
	$  ("#panel .container").siblings().fadeTo(1000, .5);
	/*adds  a fadeTo to all panels when a panel is clicked*/
   });

$(".superButton").click(function(){
	$("#panel .container").siblings().fadeTo(1000,1);
	/*restores all panels to full opacity when reset button clicked */
   });


$(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
	/*turns panel background black on mouseenter*/
   });

$(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");
	/*returns to original colour on mouseout */
   });

      
$("th").click(function(){
     	$("tr").children().removeClass("selection")
    	$(this).siblings().addClass("selection");
        /*when table header is clicked , removes selection class from all other table rows and
        adds the selection class to this table headers row only*/
    });
    
$(".theButton").click(function(){
    var col = $(this).css('background-color');
    $('.superButton').text( col);
    /*will display rgb value of selected panel in the reset panel*/
    });
});
