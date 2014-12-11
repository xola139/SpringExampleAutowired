var mapa = new Object();



function abrirDialog(nombrecajero){

	$("table[id^='Detalle']").css({display:"none"});
	$("#Detalle"+nombrecajero).css({display:"block"});
	$( "#dialog").dialog( "open" );
	
}

function obtener(k) {
    return mapa[k];
}

function cargaInicial(idTabla, myControls) {
	filterScripGenerator.getMensaje(idTabla, myControls, {
  		callback: getDataFromServerCallBack
  	});
}

function getDataFromServerCallBack(dataFromServer, idTabla) {
	var data = jQuery.parseJSON(dataFromServer);
	
	mapa[data.idTabla] = data;
}

function dibujaGrid(idTabla, myControls, colNamesParam, colModelParam, captionTitle,Width,Height) {
	cargaInicial(idTabla, myControls);
	//Grid para los eventos
	jQuery("#" + idTabla).jqGrid({
		datatype: "json",
		scroll: true,
		loadtext: 'Cargando...',
		//colNames:['Estatus','Fecha y Hora','Id Proceso','Thread id','Contexto</br>del evento','Nombre Logico','Objeto que <br>grava evento','Objeto que<br> afecto evento','Nivel del<br> evento','Tipo del <br>evento','Codigo</br> del evento','Origen</br> del vento','Tama&ntilde;o de datos'],
		colNames:colNamesParam,
	   	colModel:colModelParam,
	   	width : Width,
	    height: Height,
	    shrinkToFit: false,
	    hiddengrid: false,
	    viewrecords: true,
	    caption:captionTitle
	});

	var tdinsrt="";
	$.each( myControls, function( i, valor ){
		var identificador = idTabla + valor;
	 	tdinsrt = tdinsrt + "<td>" +
	 								"<div><input type=\"text\" style=\"padding:0px;width:53%;\"; name=\""+identificador+"\" id=\"gs_"+identificador+"\" value=\"\">" +
	 									"<input type=\"checkbox\" id=\"check"+identificador+"\" /><label id=\"idforcheck"+identificador+"\" for=\"check"+identificador+"\">=</label>" +
	 								"</div>" +
	 						"</td>";
	});
	
	$("#" + idTabla + " > tbody > tr:first").after("<tr role=\"row\" tabindex=\"-1\" class=\"ui-widget-content jqgrow ui-row-ltr\">"+tdinsrt+"</tr>");

	$.each( myControls, function( i, valor ){
		var identificador = idTabla + valor;
		$( "#check"+identificador ).on('click',
			function (data) {
				if(data.currentTarget.checked) {
					$( "#idforcheck"+identificador ).html('<span class="ui-button-text">!=</span>');
				} else {
					$( "#idforcheck"+identificador ).html('<span class="ui-button-text">=</span>');
				}
			}
		);
	});

	$(function() {
		  $.each( myControls, function( i, valor ){
			 var identificador = idTabla + valor;
			 $( "#check"+identificador ).button();  
		  });
		  

		  
	});
}




function cargaInicial(object) {
	 addRow( object );
}

function evento(object) {
	addRow( object );
}

function addRow( object ){
	var obj = jQuery.parseJSON(object);
	$("#tablaMaM > tbody").prepend("<tr >"+ "<td >"+ obj.mensaje+ "</td>"+"</tr>");
	
	$("#local").html(obj.local);
	$("#marcador").html(obj.marcador);
	$("#visit").html(obj.visitante);
	$("#tiempoJuego").html(obj.tiempoJuego);
	$("#minuto").html(obj.minuto);
	
}



