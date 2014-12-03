<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css">
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>
<script>
$(document).on("pagecreate","#pageone",function(){
  $("p").on("swipe",function(){
    $("span").text("Swipe detected!");
  });                       
});


  $(document).ready(function() {
	 
	$("#btnClick").on("click",function (){
		ejecuta();
	
	});
	
	
	
	$( "#micomando" ).on( "keydown", function(event) {
	      if(event.which == 13) 
	    	  ejecuta();
	    });
	
	function ejecuta(){
		
		$.ajax({ 
		       type: "GET",
		       dataType: "json",
		       url: "getComando?cmd="+$("#micomando").val(),
		       success: function(data) {
		       	//console.log(data);
		       	
		       	
		       	$('#area').val($('#area').val()+data+'\n'); 
		   		},
		     
			});
	}
	
});
  


</script>
</head>
<body>



<div data-role="page" id="pageone"  style="overflow: scroll;">
  <div data-role="header">
    <h1>The swipe Event</h1>
    <input type="text" id="micomando">
    <textarea rows="4" cols="50" id="area" style="overflow:auto" rows="14" >
	
	</textarea>
<button type="button" id="btnClick">Clickea</button>

    
  </div>

  <div data-role="main" class="ui-content">
    <p>Swipe this text or in the box below.</p>
    <p style="border:1px solid black;height:200px;width:200px;"></p>
    <p><span style="color:red"></span></p>
  </div>

  <div data-role="footer">
    <h1>Footer Text</h1>
  </div>
</div> 

</body>
</html>
