$(document).ready(function(){

 $("#btnQueJalanda").on("click",function(){
			  var l = Ladda.create(this);
			 	l.start();
			  var nPage=$("#hiddenQueJalada").val();
			  var newValue=Number(nPage)+1;
			  $.get( "rest/getImagenQueJalada/"+nPage, function( data ) {
				  $("#hiddenQueJalada").attr("value",newValue);  
				  $.each(data,function(index,valor){
						$("#contenidoQueJalada").append("<div class=\"row\">"+
							  "	<div class=\"portfolio-item\">"+
					          "      		<img class=\"img-responsive img-thumbnail\" style=\"width:auto; height:auto;\" src=\""+data[index].img+"\" />"+
					          "		    </div>"+
					          "</div>")
				  });
				}).always(function() {
					l.stop(); 
					});
			});
		  


});