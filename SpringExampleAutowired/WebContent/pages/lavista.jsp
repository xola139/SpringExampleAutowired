<%@ page import="com.elkardumen.bean.Imagen" %>
<%@ page import="java.util.*" %>
<%@ page contentType="text/html; charset=iso-8859-1" language="java"  %>
<%
  String getURL=request.getRequestURL().toString();
  String path = request.getContextPath();
  String getDomain=request.getServerName();
%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PorDiversion</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/2-col-portfolio.css" rel="stylesheet">
	<link href="css/ladda-themeless.min.css" rel="stylesheet">
	<link href="css/custom.css" rel="stylesheet">
	
	

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  
  
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/custom-functions.js"></script>

	
	<script>


	
	$(document).ready(function(){
		  $("#btnAsiPasa").on("click",function(){
			  var l = Ladda.create(this);
			 	l.start();
			  var nPage=$("#hiddenAsiPasa").val();
			  var newValue=Number(nPage)+11;
			  $.get( "rest/getImagenAsiPasa/"+nPage, function( data ) {
				  $("#hiddenAsiPasa").attr("value",newValue); 
				  	
				  $.each(data,function(index,valor){
						$("#contenidoAsiPasa").append("<div class=\"row\">"+
							  "	<div class=\"portfolio-item\">"+
					          "      		<img class=\"img-responsive img-thumbnail\" style=\"width:auto; height:auto;\" src=\""+data[index].img+"\" />"+
					          "		    </div>"+
					          "</div>")
				  });
				}).always(function() {
					l.stop(); 
					});
			});
		  

		  
		  $(window).scroll(function(){
	            if ($(this).scrollTop() > 100) {
	                $('.scrollup').fadeIn();
	            } else {
	                $('.scrollup').fadeOut();
	            }
	        });
	  
	        $('.scrollup').click(function(){
	            $("html, body").animate({ scrollTop: 0 }, 600);
	            return false;
	        });
		  
		  
  
    });
	
	
    		
                    
	        

	
	</script>
	
	
	
  </head>
  <body >
  
  <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '291537724382227',
      xfbml      : true,
      version    : 'v2.1'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/es_LA/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
  
  


<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&appId=291537724382227&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
  
    <a href="#" class="scrollup">Scroll</a>

    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    
    
     <nav class="navbar navbar-fixed-top navbar-inverse" role="navigation">
        <div class="container MyHeader">
            <div class="navbar-header">
                
                <div class="contentNav" >
                	<div>
                	   <a   href="#"><img src="images/logo.png"  class="img-circle" style="width: 30px;height: 30px;"/><span class="MyTitle">Solo por Diversión</span> </a>
                	</div>
                	
					<div class='buttons'>
						<a id="xd_0" class='active' href='#' title='Title 1'>&#x2606;</a>
			      		<a id="xd_1" href='#' title='Title 2'>&#x262F;</a>
			      		<a id="xd_2" href='#' title='Title 3'>&#x2666;</a>
			      		<a id="xd_3" href='#' title='Title 4'>&#x267A;</a>
			    	</div>

                </div>
                
                
                
                
            </div>


        </div>
        <!-- /.container -->
    </nav>
    <br><br>
    <br>
 <div class="container-fluid">   
    
    
    <div class="panel panel-default"  style="width: 80%;margin: 0 auto;">
	  <div class="panel-body">
	
	
	<div class="bs-example bs-example-tabs">
    <ul id="myTab" class="nav nav-tabs">
      <li class="active"><a href="#home" data-toggle="tab">Que Jalada</a></li>
      <li ><a href="#profile" data-toggle="tab">Esgag</a></li>
      <li ><a href="#asipasa" data-toggle="tab">Asi pasa</a></li>
      <li ><a href="#ND" data-toggle="tab">Nuevo y D</a></li>
      
    </ul>
    
    <div class="fb-like" data-href="http://www.xdiversion.com" data-layout="box_count" data-action="like" data-show-faces="true" data-share="true"></div>
    
    
    
    
    
    <div id="myTabContent" class="tab-content">
      <div class="tab-pane fade in active" id="home">
      	<div id="contenidoQueJalada">
      		<input type="hidden" value="2" id="hiddenQueJalada">
      		
      		<%
      		 Map<String,Imagen> m = ( Map<String,Imagen>)request.getAttribute("mapImagenes");
				
	      		Set set = m.entrySet();
				Iterator i = set.iterator();
				while(i.hasNext()) {
				Map.Entry me = (Map.Entry)i.next();
				Imagen obj=(Imagen)me.getValue();
				String k=me.getKey().toString();
				String titulo=obj.getTitle();
				
			    		%>
              			<div class="row">
					
					
						
						
						
							<div class="portfolio-item">
		                		<div><h3><%=titulo %></h3></div>
		                		<img class="img-responsive img-thumbnail" style="width:auto; height:auto;" src="<%=k %>" />
		                	</div>
		        		    <div style="text-align: center;">
		        		    	
		        		   		<div class="fb-like" data-href="http://xdiversion.com/laImagen?laURL=<%=k %>" data-layout="box_count" data-action="like" data-show-faces="true" data-share="true"></div>
		        		    </div>
						
						</div>
						
					<% }
					%>
      		
      		
      		
        	</div>
                
                <div class="centrardiv">
<!--                 	<button  id="btnQueJalanda" class="btn btn-primary ladda-button" data-style="expand-left"><span class="ladda-label" >Quiero ver mas.. Ahora!!!</span><span class="ladda-spinner"></span><div class="ladda-progress" style="width: 0px;"></div></button> -->
                </div>
                
                
	  </div>
      <div class="tab-pane fade" id="profile">
      
        
					
			
                
        
      </div>
      
       <div class="tab-pane fade" id="asipasa">
         <div id="contenidoAsiPasa">
      		<input type="hidden" value="11" id="hiddenAsiPasa">
       
       
       
       </div>
				<div class="centrardiv">
                	<button  id="btnAsiPasa" class="btn btn-primary ladda-button" data-style="expand-left"><span class="ladda-label" >Quiero ver mas.. Ahora!!!</span><span class="ladda-spinner"></span><div class="ladda-progress" style="width: 0px;"></div></button>
                </div>
 
        
      </div>
      
      
          <div class="tab-pane fade" id="ND">
          
          
          
       
          
     
      </div>
      
      
    </div>
  </div>
	
	
	
	
	
	
	
	
	  </div>
	  </div>
    
    
    
</div>	


  <div class="myFooter">
            <div class="row">
                <div class="">
                    <p>Copyright &copy; Por Diversion 2014</p>
                </div>
            </div>
        </div> 
    
    <script src="js/funciones-QueJalada.js"></script>
    <script src="js/spin.min.js"></script>
    <script src="js/ladda.min.js"></script>
 		


  </body>
</html>

