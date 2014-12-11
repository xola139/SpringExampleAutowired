

function graphOkGauge (id, trxDia){

	var TRXDIA = trxDia;
	var options ={
		chart: {
			renderTo: id,
			width:110,
			height:100,
			margin: [0,0,0,0],
	    	backgroundColor: false,
		    type: 'gauge',
		    plotBackgroundColor: null,
		    plotBackgroundImage: null,
		    plotBorderWidth: 0,
		    plotShadow: false,

			events: 
				{
					load: function () {
						series = this.series[0];   
			        }
				}
		    },
		    
		    title: false, 
//		    {
		        //text: 'Trx por '
//		    },
		    credits:{
		    	enabled: false
		    },
		    plotOptions: {
				gauge: {
					dataLabels: {
			               enabled: true,
			               x: 0,
			               y: 25
			        },
					pivot: {
						radius: 5,
						borderWidth: 1,
						borderColor: 'gray',
						backgroundColor: {
							linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
							stops: [
								[0, 'white'],
								[1, 'gray']
							]
						}	
					},
					dial: {
						radius: '100%',
						backgroundColor: 'silver'
					}
				}
			},
		    pane: {
		        startAngle: -150,
		        endAngle: 150,
		        background: [{
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#333'],
		                    [1, '#333']
		                ]
		            },
		            borderWidth: 1,
		            outerRadius: '102%',
		            innerRadius: '115%' 
		        }, {
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#111'],
		                    [1, '#000']
		                ]
		            },
		            borderWidth: 0,
		            outerRadius: '102%',
		            innerRadius: '110%'              	
		        }, {
		            // default background
		        }, {
		            backgroundColor: {
		                linearGradient: { x1: 1, y1: 1, x2: 1, y2: 0 },
		                stops: [
		                    [0, '#111'],
		                    [1, '#222']
		                ]
		            },
		            borderWidth: 0,
		            outerRadius: '8%',
		            innerRadius: '106%'
		        }]
		    },
		       
		    // the value axis
		    yAxis: {
		        min: 0,
		        max: 100,
		        
		        minorTickInterval: 'auto',
		        minorTickWidth: 1,
		        minorTickLength: 10,
		        minorTickPosition: 'inside',
		        minorTickColor: '#666',
		
		        tickPixelInterval: 30,
		        tickWidth: 2,
		        tickPosition: 'inside',
		        tickLength: 10,
		        tickColor: '#666',
		        labels: {
		            step: 2,
		            rotation: 'auto'
		        },
		        title: {
		            text: ''
		        },
		        plotBands: [{
		            from: 0,
		            to: 100,
		            color: '#00FF00' // green
		        }]        
		    },
		
		    series: [{
		        name: 'Archivos',
		        data: [trxDia],
		        tooltip: {
		            valueSuffix: ''
		        },
		        style: {
		        	color: '#aabbcc'
		        }
		    }]
		
		};
		eval(id+' = new Highcharts.Chart(options)'); 
}
function graphAlertGauge (id, trxDia){

	var TRXDIA = trxDia;
	var options ={
		chart: {
			renderTo: id,
			width:110,
			height:100,
			margin: [0,0,0,0],
	    	backgroundColor: false,
		    type: 'gauge',
		    plotBackgroundColor: null,
		    plotBackgroundImage: null,
		    plotBorderWidth: 0,
		    plotShadow: false,

			events: 
				{
					load: function () {
						series = this.series[0];   
			        }
				}
		    },
		    
		    title: false, 
//		    {
		        //text: 'Trx por '
//		    },
		    credits:{
		    	enabled: false
		    },
		    plotOptions: {
				gauge: {
					dataLabels: {
			               enabled: true,
			               x: 0,
			               y: 25
			        },
					pivot: {
						radius: 5,
						borderWidth: 1,
						borderColor: 'gray',
						backgroundColor: {
							linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
							stops: [
								[0, 'white'],
								[1, 'gray']
							]
						}	
					},
					dial: {
						radius: '100%',
						backgroundColor: 'silver'
					}
				}
			},
		    pane: {
		        startAngle: -150,
		        endAngle: 150,
		        background: [{
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#333'],
		                    [1, '#333']
		                ]
		            },
		            borderWidth: 1,
		            outerRadius: '102%',
		            innerRadius: '115%' 
		        }, {
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#111'],
		                    [1, '#000']
		                ]
		            },
		            borderWidth: 0,
		            outerRadius: '102%',
		            innerRadius: '110%'              	
		        }, {
		            // default background
		        }, {
		            backgroundColor: {
		                linearGradient: { x1: 1, y1: 1, x2: 1, y2: 0 },
		                stops: [
		                    [0, '#111'],
		                    [1, '#222']
		                ]
		            },
		            borderWidth: 0,
		            outerRadius: '8%',
		            innerRadius: '106%'
		        }]
		    },
		       
		    // the value axis
		    yAxis: {
		        min: 0,
		        max: 100,
		        
		        minorTickInterval: 'auto',
		        minorTickWidth: 1,
		        minorTickLength: 10,
		        minorTickPosition: 'inside',
		        minorTickColor: '#666',
		
		        tickPixelInterval: 30,
		        tickWidth: 2,
		        tickPosition: 'inside',
		        tickLength: 10,
		        tickColor: '#666',
		        labels: {
		            step: 2,
		            rotation: 'auto'
		        },
		        title: {
		            text: ''
		        },
		        plotBands: [{
		            from: 0,
		            to: 10,
		            color: '#DDDF0D' // green
		        },  {
		            from: 11,
		            to: 100,
		            color: '#DF5353' // red
		        }]        
		    },
		
		    series: [{
		        name: 'Archivos',
		        data: [trxDia],
		        tooltip: {
		            valueSuffix: ''
		        },
		        style: {
		        	color: '#aabbcc'
		        }
		    }]
		
		};
		eval(id+' = new Highcharts.Chart(options)'); 
}