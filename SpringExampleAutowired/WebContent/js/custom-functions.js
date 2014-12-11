$(document).ready(function() {
	 
   $(".contentNav a").on("click",function(e){
	   $('a[id^="xd_"]').removeClass( "active" );
	   var id=$(this).attr('id');
	   $("#"+id).addClass( "active" );
	   var replaceID = id.replace("xd_", "");
	   	//console.log(replaceID);
	   $('#myTab li:eq('+replaceID+') a').tab('show');
	   
	   
   });
   
  
   
   
});