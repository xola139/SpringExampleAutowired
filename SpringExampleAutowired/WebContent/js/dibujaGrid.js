jQuery(document).ready(function(){

	var myControls = new Array('cajero','hora','contador');
	var colNameParams = ['Cajero','Hora','Contador'];
	var colModelParam = [
	         	   	   	{name:myControls[0],width: 85,sortable:false},
	        			{name:myControls[1],width: 80,sortable:false},
	        			{name:myControls[2],width: 45,sortable:false},
	        			
	        			];
	
	
	var myControlsAlerta = new Array('cajero','hora','estatus');
	var colNameParamsAlerta = ['Cajero','Hora','Estatus'];
	var colModelParamAlerta = [
	         	   	   	{name:myControlsAlerta[0],width: 85,sortable:false},
	        			{name:myControlsAlerta[1],width: 80,sortable:false},
	        			{name:myControlsAlerta[2],width: 100,sortable:false},
	        			
	        			
	        			];
	
	var myControlsSalida = new Array('cajero','hora');
	var colNameParamsAlertaSal = ['Cajero','Hora'];
	var colModelParamAlertaSal = [
	         	   	   	{name:myControlsSalida[0],width: 85,sortable:false},
	        			{name:myControlsSalida[1],width: 80,sortable:false},
	        			
	        			
	        			];
	
	var myControlsCount = new Array('total','fecha', 'menor30', 'entre3040', 'entre4050', 'mayor50');
	var colNameParamsCount = ['Total','Fecha', '< 30', '30 - 40', '40 - 50', '> 50'];
	var colModelParamCount = [
	         	   	   	{name:myControlsCount[0],width: 50,sortable:false},
	        			{name:myControlsCount[1],width: 100,sortable:false},
	        			{name:myControlsCount[2],width: 45,sortable:false},
	        			{name:myControlsCount[3],width: 45,sortable:false},
	        			{name:myControlsCount[4],width: 45,sortable:false},
	        			{name:myControlsCount[5],width: 45,sortable:false},
	        			
	        			];
	
	dibujaGrid("tablaEntradaCodigos", myControls, colNameParams, colModelParam, "Entrada de codigo 6481 (60 min)",245,560);
	dibujaGrid("tablaAlertas", myControlsAlerta, colNameParamsAlerta, colModelParamAlerta, "Alertas",285,560);
	dibujaGrid("tablaSalidaCodigos", myControlsSalida, colNameParamsAlertaSal, colModelParamAlertaSal, "Llego Trx",200,340);
	dibujaGrid("tablaCount", myControlsCount, colNameParamsCount, colModelParamCount, "Conteo por Minuto",370,160);




});
  