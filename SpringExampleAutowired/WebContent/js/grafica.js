//Pinta putos dinamicos de Grafica Servidores
function pintaSeriesServidores(ys, x, numSerie, contador) {
	// console.log("intentantaod pintal..."+ys+" "+x+" "+ numSerie+"
	// "+contador);

	try {
		if (contador <4)
			eval('servidores.series[numSerie].addPoint([x,ys], false, true)');
		else
			eval('servidores.series[numSerie].addPoint([x,ys], true, true)');
	} catch (err) {
		console.log("error en pinta series: " + err);
	}
}




function renderGraphServidores(id, data) {
	
	
	data.replace(/&quot;/ig,'"');

	str = jQuery.parseJSON(data);
	var options ={ 
			chart :{
		backgroundColor: false,
		marginTop: 0,
		renderTo: id,
		borderRadius: 3,
		zoomType: 'x',
		width:500,
		height:150,	
		events: {
          load: function () {
          	series = this.series[1];   
          }
		}
	},	
	rangeSelector: {	
		 buttonTheme: {
		 align: 'right',
      fill: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         fillWidth: 0,
         stops: [
            [0.4, '#373737'],
            [0.6, '#141414']
         ]
      },
      stroke: false,
      style: {
         color: '#FFFFFF',
         fontSize: '12px',
         fontFamily: 'Gill Sans'
      },
      states: {
         hover: {
            fill: {
               linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
               stops: [
                  [0.4, '#888'],
                  [0.6, '#555']
               ]
            },
            stroke: false,
            style: {
               color: '#FFFFFF',
                   fontSize: '12px',
                   fontFamily: 'Gill Sans'
            }
         },
         select: {
            fill: {
               linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
               stops: [
                  [0.1, '#464646'],
                  [0.3, '#1E1E1E']
               ]
            },
            stroke: false,
            style: {
                color: '#FFFFFF',/*color botones 30m 5h  1d 7d*/
                fontSize: '10px',
    			  fontFamily: 'Gill Sans'
            }
         }
      }
   },
		buttons: [{
			count: '30',
			type: 'minute',
			text: '30m'			
		},{
			count: '5',
			type: 'hour',
			text: '5h'			
		}, {
			count: '1',
			type: '1day',
			text: '1d'
		}, {
			type: '7day',
			text: '7d'
		}],
		inputEnabled: false,
		selected: 0,
		labelEnabled: false,
	    labelStyle: {
		       color: 'rgba(255,0,0,0.01)'
		    }
	},
	scrollbar: {
		enabled: false,
		trackBackgroundColor: {
	         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	         stops: [
	            [0, '#000'],
	            [1, '#333']
	         ]
	      },
	      trackBorderColor: '#666'
	},	
	navigator: {
		maskFill: 'rgba(10, 10, 10, 0.7)',
  	series: {
			
      	color: "#6E6E6E",
      	fillColor:{
      	 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
           stops: [
              [0, '#5F5F5F'],
              [1, '#5F5F5F']
           ]
        },
          lineColor: "#6E6E6E"
      },      
		xAxis: {
			lineColor: '#6e6e6e',
	      	type :'datetime',
	      	tickInterval : 240000 * 60 *1,
	      	dateTimeLabelFormats: {
	      		day:'%H:%M'
	      	},
	      	labels: {
	      		style: {
	              	fontSize: '11px',
	               	color: '#FFF',
	               	fontFamily: 'Gill Sans'
	            },	
	            enabled: true,
	            y:10
	      	}, 
	      		showFirstLabel: true
	    },		
  	height: 10,/*para scroll*/
  	margin: 0,
  	marker: {
			enabled: false
		},
		shadow: false,		
  	handles: {
  		backgroundColor: 'RGB(130,130,130)'
  	}
	},	
	credits:{
		enabled:false
  },	
  exporting: {
		enabled: false
  }, 
	xAxis: {
		tickWidth: 0,
		lineWidth: 0,
		startOnTick: false,
		endOnTick: false,
		gridLineWidth: 0,
		tickPixelInterval: 200,
		labels: {/*etiquetas  x parta abajo*/
			style: {
				fontSize: '8px',
				color: '#FFFFFF',
				fontFamily: 'Lucida Sans Unicode, Lucida Grande'
			},	
			y: 10,
			x: -20	
		}
	},		
	yAxis: {
		
        spacingTop: 1,
		labels: {
			style: {
				fontSize: '11px',
				color: '#FFFF00',
				fontFamily: 'Gill Sans'
			},
			enabled: true,
			formatter: function() {
				if(this.value>=1000){
					if(this.value<1000000){
						return this.value / 1000 +'k';
					}else if(this.value>=1000000){
						return this.value / 1000000 +'M';
					}
				}else{
					return this.value;
				}
			}
		},
        title: {
            text: 'Cajeros',
			style: {
			fontSize: '11px',
			color: '#FFFF00',
			fontFamily: 'Gill Sans'
    		}            
        },
		plotLines: [{
			width: 1,
			color: '#FFFF00'
		}],
		min: 0,
		/*max:500,*/
		offset: 28,
		
		showFirstLabel: true,
		gridLineColor: ''
  },
	tooltip: {
		valueDecimals : 0,		
		shared: true,
		backgroundColor: 'rgba(10,10,10, 0.6)',
  	borderWidth: 1,
  	style: {
  		color: 'rgb(255,255,255)',
  		fontSize: '18px',
			fontFamily: 'Gill Sans'    			
  		
  	},
	crosshairs: {
		dashStyle: 'dash'
	}
	},
  legend: {
	        enabled: true,
	    	align: 'right',
	    	layout: 'vertical',
	    	verticalAlign: 'top',
	    	y:20,
	    	
          itemHiddenStyle: {
	    		color: '#333'
	    	},
	    	itemHoverStyle: {
	    		color: '#999'
	    	},
	    	itemStyle: {
	    	   cursor: 'pointer',
	    	   color: '#FFF',
	    	   fontSize: '9px'
	    	}
   },
	plotOptions: {
   	series: {
		stacking: 'normal'
	},
		area: {
//	   		stacking: 'normal',
			marker: {
				enabled: false,
				symbol: 'circle',
				radius: 3,
				states: {
					hover: {
						enabled: true
					}
				}
			}
		} ,  
	},
    series:str 
};
	
	eval(id+' = new Highcharts.StockChart(options)');

	Highcharts.setOptions({
		global : {
			useUTC : false
		},
	});	


}






function inicializaGraficaGeneric(id, data) {

	
	data.replace(/&quot;/ig,'"');

	str = jQuery.parseJSON(data);
var optionsGraficaLinear ={	
			
			chart: {
		  		backgroundColor: false,
		  		renderTo: id,
//		  		animation: true,
		    	width:530,
		    	height:200
		    },
		    xAxis: {
		    	lineColor: '#6e6e6e',
		      	type :'datetime',
		      	tickInterval : 240000 * 60 *1,
		      	dateTimeLabelFormats: {
		      		day:'%H:%M'
		      	},
		      	labels: {
		      		style: {
		              	fontSize: '11px',
		               	color: '#FFFFFF',
		               	fontFamily: 'Gill Sans'
		      		},	
		               enabled: true
		      	}, 
		      		showFirstLabel: true
		    },       
		    yAxis: {
		    	labels: {
		    		style: {
		    			fontSize: '11px',
		    			color: '#FFFF00',
		    			fontFamily: 'Gill Sans'
		    		},
		    		enabled: true,
		    		formatter: function() {
		    			if(this.value>=1000){
		    				if(this.value<1000000){
		    					return this.value / 1000 +'k';
		    				}else if(this.value>=1000000){
		    					return this.value / 1000000 +'M';
		    				}
		    			}else{
		    				return this.value;
		    			}
		    		}
		    	},
		           title: false,
		    	plotLines: [{
		    		width: 1,
		    		color: '#FFFF00'
		    	}],
		    	//height: 128,
		    	top: 20,
		    	//max: 100,
		    	min: 0,
		    	offset: 28,
		    	showFirstLabel: true,
		    	showLastLabel: true,
		    	gridLineColor: ''
		    },  
	       tooltip : {
	    		valueDecimals : 0,		
	    		shared: true,
	    		backgroundColor: 'rgba(10,10,10, 0.6)',
	    		borderWidth: 1,
	    		style: {
	      			color: 'rgb(255,255,255)',
		      		fontSize: '10px',
		    		fontFamily: 'Gill Sans'  		
		      	},
		    	crosshairs: {
		    		dashStyle: 'dash'
		    	}
				},			
				rangeSelector: {			
					 buttonTheme: {
					 align: 'right',
			      fill: {
			         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			         fillWidth: 0,
			         stops: [
			            [0.4, '#373737'],
			            [0.6, '#141414']
			         ]
			      },
			      stroke: false,
			      style: {
			         color: '#FFFFFF',
			         fontSize: '12px',
			         fontFamily: 'Gill Sans'
			      },
			      states: {
			         hover: {
			            fill: {
			               linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			               stops: [
			                  [0.4, '#888'],
			                  [0.6, '#555']
			               ]
			            },
			            stroke: false,
			            style: {
			               color: '#FFFFFF',
			                   fontSize: '12px',
			                   fontFamily: 'Gill Sans'
			            }
			         },
			         select: {
			            fill: {
			               linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			               stops: [
			                  [0.1, '#464646'],
			                  [0.3, '#1E1E1E']
			               ]
			            },
			            stroke: false,
			            style: {
			                color: '#FFFFFF	',
			                fontSize: '12px',
			    			  fontFamily: 'Gill Sans'
			            }
			         }
			      }
			   },
					buttons: [{
						count: '30',
						type: 'minute',
						text: '30m'			
					}, {
						count: '5',
						type: 'hour',
						text: '5h'
					}, {
						count: '1',
						type: 'day',
						text: '1d'
					},{
						count: '7',
						type: 'day',
						text: '7d'
					}],
					inputEnabled: false,
					selected: 1,
					labelEnabled: false,
				    labelStyle: {
					       color: 'rgba(255,0,0,0.01)'
					    }
				},
				inputEnabled: {
				enabled: false
				},  		
				scrollbar: {
					enabled: false,
					trackBackgroundColor: {
				         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				         stops: [
				            [0, '#000'],
				            [1, '#333']
				         ]
				      },
				      trackBorderColor: '#666'
				},			
			navigator: {
					maskFill: 'rgba(10, 10, 10, 0.7)',
			  	series: {
						type: "area",
			      	color: "#6E6E6E",
			      	fillColor:{
			      	 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			           stops: [
			              [0, '#5F5F5F'],
			              [1, '#5F5F5F']
			           ]
			        },
			          lineColor: "#6E6E6E"
			      },      
					xAxis: {
						tickWidth: 0,
						lineWidth: 0,
						startOnTick: false,
						endOnTick: false,
						gridLineWidth: 0,
						tickPixelInterval: 200,
						labels: {
							style: {
			  				fontSize: '12px',
			  				color: '#FFFFFF',
			  				fontFamily: 'Lucida Sans Unicode, Lucida Grande'
							},	
							y: 13,
							x: -20	
						}
					},		
			  	height: 20,
			  	margin: -19,
			  	marker: {
						enabled: false
					},
					shadow: false,		
			  	handles: {
			  		backgroundColor: 'RGB(130,130,130)',
			  	}
				},	
				credits:{
					enabled:false
			  },	
			  exporting: {
					enabled: false
			  }, 		  
			  legend: {
				  
				  	enabled: true,
			    	//align: 'right',
				  	layout: 'horizontal',
				  	//floating:true,
			    	//verticalAlign: 'top',
			    	//itemDistance: 50,
			    	//width: 120,
		            itemHiddenStyle: {
			    		color: '#333'
			    	},
			    	itemHoverStyle: {
			    		color: '#999'
			    	},
			    	itemStyle: {
			    	   cursor: 'pointer',
			    	   color: '#FFFFFF',
			    	   fontSize: '9px'
			    	}
			   },	   
		        plotOptions: {
		            area: {
		                animation: true
		            }
		        },
		    series:str
	};
	
	
	Highcharts.setOptions({
		global : {
			useUTC : false
		},
	});	
	eval(id+' = new Highcharts.StockChart(optionsGraficaLinear)');


	Highcharts.setOptions({
		global : {
			useUTC : false
		},
	});	


}





