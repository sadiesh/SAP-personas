sap.ui.jsview("personas_new.myOpportunities", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf personas_new.myOpportunities
	*/ 
	getControllerName : function() {
		return "personas_new.myOpportunities";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf personas_new.myOpportunities
	*/ 
	createContent : function(oController) {
		
    	var oModel = new sap.ui.model.json.JSONModel({
    		businessData : [
    			{Status :"Open", Nos : "20"},
    			{Status :"Closed",Nos : "70"},
    			{Status :"Out Standing",Nos : "10"}
    		]
    	});
        
		
		 var oDataset = new sap.viz.ui5.data.FlattenedDataset({

	            // a Bar Chart requires exactly one dimension (x-axis)
	            dimensions : [
	                {
	                    axis : 1, // must be one for the x-axis, 2 for y-axis
	                    name : 'Status',
	                    value : "{Status}"
	                }
	            ],

	            // it can show multiple measures, each results in a new set of bars in a new color
	            measures : [
	                // measure 1
	                {
	                    name : 'Numbers', // 'name' is used as label in the Legend
	                    value : "{Nos}" // 'value' defines the binding for the displayed value
	                }
	            ],

	            // 'data' is used to bind the whole data collection that is to be displayed in the chart
	            data : {
	                path : "/businessData",
	                sorter: new sap.ui.model.Sorter("Status"),
	              //  filters: [new sap.ui.model.Filter("probability")]
	            }

	        });
		        var oPieChart = new sap.viz.ui5.Pie({
		            width : "95%",
		            height : "86%",
		            /*title : {
		                visible : true,
		                text : 'Chance of Success '
		            },*/
		            dataset : oDataset
		        }).addStyleClass("pieChart");
			
		        oPieChart.setModel(oModel);
		        
//		         some business data 
		    	var oModel1 = new sap.ui.model.json.JSONModel({
		    		businessData : [
		    			{Month :"January",cost: 1000},
		    			{Month :"February",cost: 2000},
		    			{Month :"March",cost: 1000},
		    			{Month :"April",cost: 1500},
		    			{Month :"May",cost: 3000},
		    			{Month :"June",cost: 5000},
		    			{Month :"July",cost: 2000},
		    			{Month :"August",cost: 1000},
		    			{Month :"September",cost: 5000},
		    			{Month :"October",cost: 3000},
		    			{Month :"November",cost: 2000},
		    			{Month :"December",cost: 3000}
		    		]
		    	});		

		        // A Dataset defines how the model data is mapped to the chart 
		    	var oDataset1 = new sap.viz.ui5.data.FlattenedDataset({

		    		// a Bar Chart requires exactly one dimension (x-axis) 
		    		dimensions : [ 
		    			{
		    				axis : 1, // must be one for the x-axis, 2 for y-axis
		    				name : 'Month', 
		    				value : "{Month}"
		    			} 
		    		],

		    		// it can show multiple measures, each results in a new set of bars in a new color 
		    		measures : [ 
		    		    // measure 1
		    			{
		    				name : 'Cost of Maintanence', // 'name' is used as label in the Legend 
		    				value : '{cost}' // 'value' defines the binding for the displayed value   
		    			}
		    		],
		    		
		    		// 'data' is used to bind the whole data collection that is to be displayed in the chart 
		    		data : {
		    			path : "/businessData"
		    		}
		    		
		    	});

		        // create a Bar chart
		        // you also might use Combination, Line, StackedColumn100, StackedColumn or Column
		        // for Donut and Pie please remove one of the two measures in the above Dataset.  
		    	var oBarChart = new sap.viz.ui5.Bar({
		    		width : "95%",
		    		height : "86%",
		    		plotArea : {
		    		//'colorPalette' : d3.scale.category20().range()
		    		},
		    		title : {
		    			visible : true,
		    			text : 'Cost of Maintanence'
		    		},
		    		dataset : oDataset1
		    	});

		        // attach the model to the chart and display it
		    	oBarChart.setModel(oModel1);
		
		
 		var myOpp = new sap.m.Carousel({
 			height : "30em",
 			width : "90%",
 			loop : true,
 			showPageIndicator : true,
 			pageIndicatorPlacement : true,
 			showBusyIndicator : true,
 			pages : [oPieChart,oBarChart]
 		});
 		
 		return myOpp;
	}

});