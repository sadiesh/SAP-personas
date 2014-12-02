sap.ui.jsview("personasdashboard.Detail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf personasdashboard.Detail
	*/ 
	getControllerName : function() {
		return "personasdashboard.Detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf personasdashboard.Detail
	*/ 
	createContent : function(oController) {
		var funcLabel = new sap.m.Label({
			text : "",
			design : sap.m.LabelDesign.Bold
		});
		var row1 = new sap.m.HBox({
			alignItems : sap.m.FlexAlignItems.Center,
			justifyContent : sap.m.FlexJustifyContent.Center,
			items : [ 
			new sap.m.StandardTile({
				title : "Tasks",
				number : "28",
				info : "10 Overdue",
				numberUnit:"Due Today"
				}).addStyleClass('dashboardTile').addStyleClass('taskDashboardTile'),
			new sap.ui.core.HTML({
			content:"<p class='arrowLeft'></p>"
				}),
			new sap.m.StandardTile({
				number : "10",
				numberUnit:"Hot Leads",
				title : "Leads",
				info : "3 Warm"
			}).addStyleClass('dashboardTile').addStyleClass('leadDashboardTile')
			,new sap.ui.core.HTML({
			content:"<p class='arrowRight'></p>"
				})
			]
		}).addStyleClass('row1');
		var row2 = new sap.m.HBox({
			alignItems : sap.m.FlexAlignItems.Center,
			justifyContent : sap.m.FlexJustifyContent.Center,
			items : [ 
			new sap.m.StandardTile({
				number : "15",
				numberUnit:"Open",
				title : "Opportunities",
				info : "$ 10000 Pipeline"
			}).addStyleClass('dashboardTile').addStyleClass('opporDashboardTile'),
			new sap.ui.core.HTML({
			content:"<p class='arrowLeft'></p>"
				}),
			new sap.m.StandardTile({
				number : "9",
				numberUnit:"Events Today",
				title : "Calendar",
				info : "3 Tomorrow"
			}).addStyleClass('dashboardTile').addStyleClass('calendarDashboardTile'),
			new sap.ui.core.HTML({
			content:"<p class='arrowRight'></p>"
				})
			]
		}).addStyleClass('row2');
		
		var col1 = new sap.m.VBox({
			alignItems : sap.m.FlexAlignItems.Center,
			justifyContent : sap.m.FlexJustifyContent.Center,
			items : [ funcLabel, row1 ,row2],
			width : "100%",
			height : "300px"
		}).addStyleClass("dashboardContainer");

		return new sap.m.Page({
			id:"tile-Page",
			title : "SAP PERSONAS DASHBOARD",
			content : [ col1 ]
		});

	}

});
