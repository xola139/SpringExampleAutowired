<!DOCTYPE html>
<html>
<head>
  <title>CajerosSinDinero</title>
  <meta http-equiv="Content-Type" content="text/html; charset=us-ascii" />
	<link rel="stylesheet" type="text/css" media="screen" href="/SpringExampleAutowired/css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="/SpringExampleAutowired/css/dark-hive/jquery-ui-1.9.2.custom.css"/>
	<link rel="stylesheet" type="text/css" media="screen" href="/SpringExampleAutowired/css/ui.jqgrid.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="/SpringExampleAutowired/css/cajeros-banorte.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="/SpringExampleAutowired/css/jqx.base.css" type="text/css" />
	
	<script src="/SpringExampleAutowired/js/jquery.js" type="text/javascript"></script>
	<script src="/SpringExampleAutowired/js/bootstrap.js" type="text/javascript"></script>
	<script src="/SpringExampleAutowired/js/jquery-ui-custom.min.js" type="text/javascript"></script>
	<script src="/SpringExampleAutowired/js/jquery.jqGrid.js" type="text/javascript"></script>
	<script src="/SpringExampleAutowired/js/jquery-ui.js"></script>
	<script src="/SpringExampleAutowired/js/grafica.js"></script>
	<script src="/SpringExampleAutowired/js/jsHighStocks/highstock.js"></script>
  	
  	
<!--   	<script type='text/javascript' src='/SpringExampleAutowired/dwr/util.js'></script> -->
<!--   	<script type='text/javascript' src='/SpringExampleAutowired/dwr/engine.js'> </script> -->
<!-- 	<script type="text/javascript" src="/SpringExampleAutowired/dwr/interface/hiloLog.js"></script> -->
<!-- 	<script type="text/javascript" src="/SpringExampleAutowired/dwr/interface/cargaSoloCajeros.js"></script> -->
<!-- 	<script type="text/javascript" src="/SpringExampleAutowired/dwr/interface/cargaInicialCajeros.js"></script> -->
<!-- 	<script type="text/javascript" src="/SpringExampleAutowired/dwr/interface/cargaGrafica.js"></script> -->

	<script src="/SpringExampleAutowired/js/dibujaGrid.js"></script>
	<script src="/SpringExampleAutowired/js/conexion-functions.js"></script>
	
	
	
	
</head>

<!-- <body onload="dwr.engine.setActiveReverseAjax(true);cargaIniciales();"> -->
<body onload="cargaIniciales();">




<!-- 	<input type="text" id="texto" > -->
<!-- 	<button id="presiona">Clickea</button> -->





<ul class="nav nav-tabs" role="tablist" id="myTab">
  <li class="active"><a href="#elcajero" role="tab" data-toggle="tab">Usuarios</a></li>
  
  
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="elcajero">
		<table id="gridUsuarios" class="tablaAlertas"></table>
  </div>
 
  
</div>


				
				
				
				
			

	


	
	

<script>
  $(document).ready(function() {
	
	
	$( "#presiona" ).click(function() {
		//console.log("clockeaste");
		evento( $("#texto").attr("value"));
		
		
	
				
  
});
	
  });
  
</script>

<div id="dialog" title="Detalle eventos">
  <table id="tablaHistoricoDetalle" class="tablaAlertas"></table>
</div>

<div id="dialogGrafica" >
  <div id="graficaCajero" ></div>
</div>

</body>
</html>