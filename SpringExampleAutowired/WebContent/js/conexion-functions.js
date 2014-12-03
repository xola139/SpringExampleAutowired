var elem = new Array();
var arregloCajeros = new Array();
var arregloCajeros3Caseteras = new Array();
var arregloCajeros2Caseteras = new Array();
var arregloCajerosHistorico4 = new Array();
var jsontext;
var contact;
var cadena;
var obj;
var verGrafica;





$(window).load(function() {
	
	$("div[id^='jqgh_tablaConteoHistorico']").css( "font-size", "9px" );
	
});

$(function() {

	//Inicializamos Calentadiro
	creaCalendario('#datepicker',"4");
	creaCalendario('#datepicker3',"3");
	creaCalendario('#datepicker2',"2");
    
	
    //Configuracion del popup boton historico
	
	generaDialog($("#dialog"),1450);
	generaDialog($("#dialogGrafica"),570);
	

	

	//Configuracion de tabs
	$('#myTab a').click(function(e) {
		if (e.target.hash == "#elcajero") {
			$("#divtablaConteo4Caseteras").show("fast");
			$("#divtablaConteo3Caseteras").hide();
			$("#divtablaConteo2Caseteras").hide();
		} else if (e.target.hash == "#loscajeros3") {
			$("#divtablaConteo4Caseteras").hide();
			$("#divtablaConteo3Caseteras").show("fast");
			$("#divtablaConteo2Caseteras").hide();
		} else if (e.target.hash == "#loscajeros2") {
			$("#divtablaConteo4Caseteras").hide();
			$("#divtablaConteo3Caseteras").hide();
			$("#divtablaConteo2Caseteras").show("fast");
		}

	});

});



function generaDialog(dialogo,width){
	
	dialogo.dialog({
		width : width,
		autoOpen : false,
		show : {
			effect : "blind",
			duration : 1000
		},
		hide : {
			effect : "fade",
			duration : 100
		}
	});
}

//Crear  '#datepicker'
function creaCalendario(dpicker,cajerosCon){
	var currentDate = new Date();
    $(dpicker).datepicker({
        inline: true,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dateFormat: 'dd/mm/yy',
        showOn: "button",
        buttonImage: "images/calendar.gif",
        buttonImageOnly: true,
        onSelect: function(dateText, inst) {
        	//Cuando el calendario cambie de fecha se carga nuevamente
        	cargarGridHistorico(cajerosCon,$(dpicker));
       }
    });
    
    $(dpicker).datepicker("setDate", currentDate);
    $(dpicker).datepicker('option', 'maxValue', currentDate);
    //$(dpicker).readonlyDatepicker(true);
	
    $.datepicker.regional['es'] = {
   		 closeText: 'Cerrar',
   		 prevText: '<Ant',
   		 nextText: 'Sig>',
   		 currentText: 'Hoy',
   		 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
   		 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
   		 dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi��rcoles', 'Jueves', 'Viernes', 'Sabado'],
   		 dayNamesShort: ['Dom','Lun','Mar','Mi��','Juv','Vie','S��b'],
   		 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
   		 weekHeader: 'Sm',
   		 dateFormat: 'dd/mm/yy',
   		 firstDay: 1,
   		 isRTL: false,
   		 showMonthAfterYear: false,
   		 yearSuffix: ''
   		 };
   		 $.datepicker.setDefaults($.datepicker.regional['es']);
	
}

//Abre el popup cuando se da click en el boton
function abrirDialog(nombrecajero) {
	$.get('getData?cajero=' + nombrecajero,function(data) {
		$('#tablaHistoricoDetalle').jqGrid('clearGridData');
			$.each(eval(data),function(i, obj) {
				$("#tablaHistoricoDetalle> tbody > tr:first").after(
						"<tr id=\""+ obj.cajero+ "\"  role=\"row\" tabindex=\"-1\" class=\"ui-widget-content jqgrow ui-row-ltr \">"
						 	+ "<td>"+ obj.cajero+ "</td>"
							+ "<td>"+ obj.estatus_casetera_uno+ "</td>"
							+ "<td>"+ obj.fecha_casetera_uno+ "</td>"
							+ "<td>"+ obj.estatus_casetera_dos+ "</td>"
							+ "<td>"+ obj.fecha_casetera_dos+ "</td>"
							+ "<td>"+ obj.estatus_casetera_tres+ "</td>"
							+ "<td>"+ obj.fecha_casetera_tres+ "</td>"
							+ "<td>"+ obj.estatus_casetera_cuatro+ "</td>"
							+ "<td>"+ obj.fecha_casetera_cuatro+ "</td>"
							+ "<td>"+ obj.estatus_final+ "</td>"
							+ "<td>"+ obj.fecha_final+ "</td>"
							+ "<td>"+ obj.transacciones+ "</td>"
							+ "<td>"+ obj.monto_trx+ "</td>"
							+ "<td>"+ obj.reversos+ "</td>"
							+ "<td>"+ obj.monto_rev+ "</td>"
							+ "</tr>");
					});

					});
	$("#dialog").dialog("open");

}

//Grafica por cajero
function abrirDialogGrafica(nombrecajero){
	
	
	cargaGrafica.regresaArregloInicial(nombrecajero);
	
	$('#dialogGrafica').dialog('option', 'title',nombrecajero);
	$("#dialogGrafica").dialog("open");

}




//Carga los grid de historico
function cargarGrid(grid){

	// Utilizamos servicio para traer datos
	$.get('getDataUsuarios?usuarios=PorsiHayAlgunfiltro', function(data) {
		var arregloResutl = new Array();
		$.each(data, function(i, objectos) {
			arregloResutl.push({
				id : objectos.id,
				firstname : objectos.firstname,
				lastname : objectos.lastname,
				email : objectos.email,
				password : objectos.password
			});
		});

		// Recargamos el grid con informacion
		$("#" + grid).jqGrid('setGridParam', {
			datatype : 'local',
			data : arregloResutl
		}).trigger("reloadGrid");

	});
	
}


function cargaIniciales() {

	// Dibuja grafica caseteras
	//cargaGrafica.regresaArregloInicialServidores();
//	console.log("Inicializando....");
//	cargaSoloCajeros.obtenerCargaInicialCajeros('cajeros4caseteras', {
//		callback : getCargaInicialSoloCajerosCallBack
//	});

//	cargaSoloCajeros.obtenerCargaInicialCajeros('cajeros3caseteras', {
//		callback : getCargaInicialSoloCajeros3CaseterasCallBack
//	});

//	cargaSoloCajeros.obtenerCargaInicialCajeros('cajeros2caseteras', {
//		callback : getCargaInicialSoloCajeros2CaseterasCallBack
//	});


 //cargarGrid("gridUsuarios");

	
	//Mandamos a ejecutar desde DWR el Thread de pintar los puntos dinamicos
//	cargaGrafica.regresaValoresSecuencialesSigPuntosServidores();
}



function getCargaInicialSoloCajerosCallBack(data) {
	// Recorremos el json de la carga inicial que regresa el Socket
	$.each(eval(data), function(i, item) {
		var objectos = jQuery.parseJSON(item);
		
		verGrafica='<a href=# onclick=\"abrirDialogGrafica(\''+ objectos.cajero+ '\')\">'+objectos.cajero+'</a>';
		
		arregloCajeros.push({
			id : objectos.cajero,
			cajero : verGrafica,
			numero : objectos.numero,
			caja1 : objectos.caja1,
			tran1 : objectos.tran1,
			tran1m : objectos.tran1m,
			reve1 : objectos.reve1,
			caja2 : objectos.caja2,
			tran2 : objectos.tran2,
			tran2m : objectos.tran2m,
			reve2 : objectos.reve2,
			caja3 : objectos.caja3,
			tran3 : objectos.tran3,
			tran3m : objectos.tran3m,
			reve3 : objectos.reve3,
			caja4 : objectos.caja4,
			tran4 : objectos.tran4,
			tran4m : objectos.tran4m,
			reve4 : objectos.reve4,
			caja5 : objectos.caja5,
			tran5 : objectos.tran5,
			tran5m : objectos.tran5m,
			reve5 : objectos.reve5,
			transacciones : objectos.transacciones,
			montotrans : objectos.montotrans,
			reversos : objectos.reversos,
			montorev : objectos.montorev
		});
	});

	dibujaGrid("tablaCajeros4Caseteras", myControls, colNameParams,
			colModelParam, "Monitor de efectivo Cajeros", 800, 560,
			arregloCajeros);

}

function getCargaInicialSoloCajeros3CaseterasCallBack(data) {
	$.each(eval(data), function(i, item) {
		var objectos = jQuery.parseJSON(item);
		arregloCajeros3Caseteras.push({
			id : objectos.cajero,
			cajero : objectos.cajero,
			numero : objectos.numero,
			caja1 : objectos.caja1,
			tran1 : objectos.tran1,
			reve1 : objectos.reve1,
			caja2 : objectos.caja2,
			tran2 : objectos.tran2,
			reve2 : objectos.reve2,
			caja3 : objectos.caja3,
			tran3 : objectos.tran3,
			reve3 : objectos.reve3,
			transacciones : objectos.transacciones,
			montotrans : objectos.montotrans,
			reversos : objectos.reversos,
			montorev : objectos.montorev
		});

	});

	dibujaGrid("tablaCajeros3Caseteras", myControls3Caseteras,
			colNameParams3Caseteras, colModelParam3Caseteras,
			"Monitor de efectivo Cajeros 3 caseteras", 800, 560,
			arregloCajeros3Caseteras);
}

function getCargaInicialSoloCajeros2CaseterasCallBack(data) {
	$.each(eval(data), function(i, item) {
		var objectos = jQuery.parseJSON(item);
		arregloCajeros2Caseteras.push({
			id : objectos.cajero,
			cajero : objectos.cajero,
			numero : objectos.numero,
			caja1 : objectos.caja1,
			tran1 : objectos.tran1,
			reve1 : objectos.reve1,
			caja2 : objectos.caja2,
			tran2 : objectos.tran2,
			reve2 : objectos.reve2,
			transacciones : objectos.transacciones,
			montotrans : objectos.montotrans,
			reversos : objectos.reversos,
			montorev : objectos.montorev
		});

	});

	dibujaGrid("tablaCajeros2Caseteras", myControls2Caseteras,
			colNameParams2Caseteras, colModelParam2Caseteras,
			"Monitor de efectivo Cajeros 2 caseteras", 800, 560,
			arregloCajeros2Caseteras);

	cargaInicialCajeros.obtenerCargaInicial(0, {
		callback : getCargaInicialCallBack
	});

}

function getCargaInicialCallBack(data) {

	// Agregamos los id de cada td
	
	
	jsontext = '{"tipo":"Baja Efectivo","casetera1":"","casetera2":"","casetera3":"","casetera4":"","total":""}';
	contact = JSON.parse(jsontext);
	$("#tablaBajaEfectivo").jqGrid('addRowData', 'ConteoCaseterasBajoEfectivoTR', contact, "first");
	jsontext = '{"tipo":"Sin Efectivo","casetera1":"","casetera2":"","casetera3":"","casetera4":"","total":""}';
	contact = JSON.parse(jsontext);
	$("#tablaBajaEfectivo").jqGrid('addRowData', 'ConteoCaseterasSinEfectivoTR', contact, "first");
	
	
	
	//$("#tablaSinEfectivo").jqGrid('addRowData', 'tablaSinEfectivoTR', contact, "first");
	
	jsontext = '{"totalTrans":"","montoTotalTrans":"","totalReversos":"","montoReversos":""}';
	contact = JSON.parse(jsontext);
	$("#tablaTotales").jqGrid('addRowData', 'tablaTotalesTR', contact, "first");
	

	$("#tablaConteoCaseteras> tbody > tr:first")
			.after(
					"<tr id=\"\"  role=\"row\" tabindex=\"-1\" class=\"ui-widget-content jqgrow ui-row-ltr \">"
							+ "<td id=\"numSinEfectivo1Cajero4Caseteras\">0</td>"
							+ "<td id=\"numSinEfectivo2Cajero4Caseteras\">0</td>"
							+ "<td id=\"numSinEfectivo3Cajero4Caseteras\">0</td>"
							+ "<td id=\"numSinEfectivo4Cajero4Caseteras\">0</td></tr>");

	$("#tablaConteo3Caseteras> tbody > tr:first")
			.after("<tr id=\"\"  role=\"row\" tabindex=\"-1\" class=\"ui-widget-content jqgrow ui-row-ltr \">"
							+ "<td id=\"numSinEfectivo1Cajero3Caseteras\">0</td>"
							+ "<td id=\"numSinEfectivo2Cajero3Caseteras\">0</td>"
							+ "<td id=\"numSinEfectivo3Cajero3Caseteras\">0</td>"
							+ "</tr>");

	$("#tablaConteo2Caseteras> tbody > tr:first")
			.after("<tr id=\"\"  role=\"row\" tabindex=\"-1\" class=\"ui-widget-content jqgrow ui-row-ltr \">"
							+ "<td id=\"numSinEfectivo1Cajero2Caseteras\">0</td>"
							+ "<td id=\"numSinEfectivo2Cajero2Caseteras\">0</td>"
							+ "<td id=\"numSinEfectivo3Cajero2Caseteras\">0</td>"
							+ "</tr>");

	// Recorremos el json de la carga inicial que regresa el Socket  NBXI_TRX....

	$.each(eval(data), function(i, item) {
		// console.log(item);
		evento(item);
	});

	dwr.engine.setActiveReverseAjax(true);
	dwr.engine.setNotifyServerOnPageUnload(true);

	hiloLog.arranca();
	// Inicializamos los tool tip despues de hacer la carga inicia
	$('.alert-box').tooltip();

}

function dibujaGrid(idTabla, myControls, colNamesParam, colModelParam,
		captionTitle, Width, Height, datos) {

	jQuery("#" + idTabla).jqGrid({
		url:'getDataUsuarios',
		datatype : "json",
		data : datos,
		scroll : true,
		loadtext : 'Cargando...',
		gridview:true,
		colNames : colNamesParam,
		colModel : colModelParam,
		width : Width,
		height : Height,
		viewrecords : true,
		rowNum : 1000,
		gridComplete: function(){
			var ids = jQuery("#"+idTabla).jqGrid('getDataIDs');
			for(var i=0;i < ids.length;i++){
				var cl = ids[i];
				be = "<input class='btn btn-primary' style='height:22px;width:20px;' type='button' value='E' onclick=\"jQuery('#"+idTabla+"').editRow('"+cl+"');\"  />"; 
				se = "<input class='btn btn-primary' style='height:22px;width:20px;' type='button' value='S' onclick=\"jQuery('#"+idTabla+"').saveRow('"+cl+"');\"  />"; 
				ce = "<input class='btn btn-primary' style='height:22px;width:20px;' type='button' value='C' onclick=\"jQuery('#"+idTabla+"').restoreRow('"+cl+"');\" />"; 
				jQuery("#"+idTabla).jqGrid('setRowData',ids[i],{act:be+se+ce});
			}	
		},
		editurl: "/SpringExampleAutowired/saveDataUsuarios",
		
		caption : captionTitle
	});

}

function evento(object) {

	obj = jQuery.parseJSON(object);

	
	switch (obj.evento){
	
	case  "CaseteraSinEfectivo":
	  case  "ErrorEnCasetera":
		var existeId = $.find("#" + obj.cajero);
		var tipoEtiqueta= obj.evento=="ErrorEnCasetera"? "errorCaset" : (obj.casetsSinEfec==4? "error":("warning"+obj.casetsSinEfec));
		var msgError=  obj.evento == "CaseteraSinEfectivo" ? "CaseteraSinEfectivo":"ErrorEnCasetera";
		
			// si existe regresa false;
			if (existeId == false) {
				
				//verGrafica='<a href=# onclick=\\\"abrirDialogGrafica(\\\''+ obj.cajero+ '\\\')\\\">'+obj.cajero+'</a>';
				verGrafica='<a href=# onclick=\\\"abrirDialogGrafica(\''+ obj.cajero+ '\')\\\">'+obj.cajero+'</a>';
				cadena = '<div class=\\\"alert-box '+tipoEtiqueta+'\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"bottom\\\" title=\\\"'+ obj.cajero+ ': '+msgError+' Codigo : '+ obj.codigoNumerico + '\\\">'+ obj.fechaString + '</div>';
				jsontext = '{"id":"' + obj.cajero + '","cajero":"' + verGrafica+ '","caja' + obj.casetera + '":"' + cadena+ '","numero":"' + obj.casetsSinEfec + '"}';
				contact = JSON.parse(jsontext);
				//Agregamos un nuevo elemento al grid
				$("#tablaCajeros" + obj.numCaset + "Caseteras").jqGrid('addRowData', obj.cajero, contact, "first");
			} else {
			    cadena = '<div class=\\\"alert-box '+tipoEtiqueta+'\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"bottom\\\" title=\\\"'+ obj.cajero+ ': '+msgError+' Codigo : '+ obj.codigoNumerico + '\\\">'+ obj.fechaString + '</div>';
				jsontext = '{"caja' + obj.casetera + '":"' + cadena+ '","numero":"' + obj.casetsSinEfec + '"}';
				contact = JSON.parse(jsontext);
				//Actualizamos un  elemento al grid
				$("#tablaCajeros" + obj.numCaset + "Caseteras").jqGrid('setRowData', obj.cajero, contact);
			}
		
		//se vuelve a renderear el tooltip para los nuevos row que se agredaror
		$('.alert-box').tooltip();	
	break;
	case "TranxCajeroCasetera":
		jsontext = '{"tran' + obj.casetera + '":"' + obj.conteo + '"}';
		contact = JSON.parse(jsontext);
		$("#tablaCajeros" + obj.numCaset + "Caseteras").jqGrid('setRowData',obj.cajero, contact);
	break;
	case "TranxCajeroCaseteraMon":
		jsontext = '{"tran' + obj.casetera + 'm":"' + obj.conteo + '"}';
		contact = JSON.parse(jsontext);
		$("#tablaCajeros" + obj.numCaset + "Caseteras").jqGrid('setRowData',obj.cajero, contact);
	break;
	case "ReversosCajeroCasetera":
		jsontext = '{"reve' + obj.casetera + '":"' + obj.conteo + '"}';
		contact = JSON.parse(jsontext);
		$("#tablaCajeros" + obj.numCaset + "Caseteras").jqGrid('setRowData',obj.cajero, contact);
	
	break;
	case  "conteoTransacciones":
		$("#tablaCajeros" + obj.numCaset + "Caseteras").jqGrid('setRowData',
		 obj.cajero, {transacciones : obj.conteo,montotrans : obj.monto});
		
	break;
	case "conteoReversos" :
		$("#tablaCajeros" + obj.numCaset + "Caseteras").jqGrid('setRowData',
				obj.cajero, {reversos : obj.conteo,montorev : obj.monto});
	break;
	case "alerta":	
		cadena = '<div class=\\\"alert-box warning\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"bottom\\\" title=\\\"'
			+ obj.cajero+ ': CaseteraBajaEfectivo Codigo:'+ obj.codigoNumerico + '\\\">'+ obj.fechaString + '</div>';
		jsontext = '{"caja' + obj.casetera + '":"' + cadena + '"}';
		contact = JSON.parse(jsontext);
		$("#tablaCajeros" + obj.numCaset + "Caseteras").jqGrid('setRowData',obj.cajero, contact);
	break;
	case "CaseteraRechazoLlena":
		cadena = '<div class=\\\"alert-box caseteraRechazo\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"bottom\\\" title=\\\"'
			+ obj.cajero+ ': '+obj.fechaString+' Codigo:'+ obj.codigoNumerico + '\\\">'+ obj.evento + '</div>';
		jsontext = '{"caja5":"' + cadena + '"}';
		contact = JSON.parse(jsontext);
		$("#tablaCajeros" + obj.numCaset + "Caseteras").jqGrid('setRowData',obj.cajero, contact);
	break;	
	case "CajeroSinEfectivo":
		cadena = '<div class=\\\"alert-box error\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"bottom\\\" title=\\\"'
			+ obj.cajero+ ': '+obj.fechaString+' Codigo:'+ obj.codigoNumerico + '\\\">'+ obj.evento + '</div>';
		jsontext = '{"caja5":"' + cadena + '"}';
		contact = JSON.parse(jsontext);
		$("#tablaCajeros" + obj.numCaset + "Caseteras").jqGrid('setRowData',obj.cajero, contact);
	break;	
	case  "CierreCaseteraSinEfectivo" :
	case  "CierreErrorEnCasetera" :
	case  "CierreCaseteraRechazoLlena":
	case  "Dotacion":	
		var estilo="";
		switch (obj.evento){
		case "CierreCaseteraSinEfectivo":
			estilo="dotacionPro";
		break;	
		case "CierreErrorEnCasetera":
			estilo="errorCasetEnabled";
		break;	
		case "CierreCaseteraRechazoLlena":
			estilo='casRechazo';
		break;
		case"Dotacion":
			estilo="errorEnabled";
		break;
		}
		copyRow(obj , estilo);
		
		
		
		break;
	
	
	case "ConteoCaseterasSinEfectivo":
		case "ConteoCaseterasBajoEfectivo":	
		
			var idTR=obj.evento+"TR";
			jsontext = '{"casetera'+obj.casetera+'":"'+obj.conteo+'","total":"'+obj.total+'"}';
			contact = JSON.parse(jsontext);
			$("#tablaBajaEfectivo").jqGrid('setRowData', idTR, contact);
	break;
	
	
	
	case "totalTransacciones" :
		jsontext = '{"totalTrans":"'+obj.conteo+'","montoTotalTrans":"'+obj.monto+'"}';
		contact = JSON.parse(jsontext);
		$("#tablaTotales").jqGrid('setRowData', 'tablaTotalesTR', contact);
	break;
	case "totalReversos" :
		jsontext = '{"totalReversos":"'+obj.conteo+'","montoReversos":"'+obj.monto+'"}';
		contact = JSON.parse(jsontext);
		$("#tablaTotales").jqGrid('setRowData', 'tablaTotalesTR', contact);
	break;
	case "NumCajerosXNumCaseterasSinEfectivo":
		$("#numSinEfectivo" + obj.numCaseterasSinEfectivo + "Cajero"+ obj.numTotalCasets + "Caseteras").html(obj.numCajeros);
	break;
	case "ConteoFinMonitoreo":
		
		if(obj.codigo='Error Caset'){
			jsontext = '{"errorCaset": "'+obj.conteo+'"}';
		}else if(obj.codigo='Dotacion Re'){
			jsontext = '{"dotacionRe": "'+obj.conteo+'"}';
		}else if(obj.codigo='Dotacion Pro'){
			jsontext = '{"dotacionPro": "'+obj.conteo+'"}';
		}else if(obj.codigo='Cas Rechazo'){
			jsontext = '{"casRechazo": "'+obj.conteo+'"}';
		}
		
		contact = JSON.parse(jsontext);
		
		
		$("#tablaConteoHistorico4CaseterasActual").jqGrid('setRowData','Dia Seleccionado', contact);
		
		
		break;
	
	}
	
}


function copyRow(obj , nameCSS){
	
	
	cadena ='<button type=\\\"button\\\" class=\\\"btn '+nameCSS+' btn-xs\\\" style=\\\"width: 140px;\\\" onclick=\\\"abrirDialog(\''+ obj.cajero+ '\')\\\">'+obj.mensaje+'</button>';
	jsontext = '{"boton":"' + cadena + '","fecha": "'+obj.fechaString+'","diferencia": "'+obj.tiempoAtencion+'"}';
	contact = JSON.parse(jsontext);

	//Identificamos el grid origen
	var elidGrid = $("#" + obj.cajero).closest('table').attr('id');
	//Obtenemos el row   
	var myData = $("#"+elidGrid).getRowData(obj.cajero);//or getRowData(Id)
	//Elmiminamos el row origen
	deleteRowGrid(obj.cajero);
	//Colocamos el row en en grid secundario
	$("#tablaHistorico"+obtenElIdGrid(elidGrid)+"Caseteras").jqGrid('addRowData', obj.cajero, myData);
	//Agregamos el boton y la fecha(Esto por que no viene incluido en el row que se copio)
	$("#tablaHistorico"+obtenElIdGrid(elidGrid)+"Caseteras").jqGrid('setRowData',obj.cajero, contact);	
}


function deleteRowGrid(cajero) {
	var elidGrid = $("#" + cajero).closest('table').attr('id');
	$("#" + elidGrid).jqGrid('delRowData', cajero);

}


function obtenElIdGrid(id){
	
	if(id=="tablaCajeros4Caseteras"){
		return 4;
	}else if(id=="tablaCajeros3Caseteras"){
		return 3;
	}else if(id=="tablaCajeros2Caseteras"){
		return 2;
	}
		
	
}
