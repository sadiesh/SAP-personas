sap.ui.jsview("personas_new.dashboard", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf personas_new.dashboard
	*/ 
	getControllerName : function() {
		return "personas_new.dashboard";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf personas_new.dashboard
	*/ 
	createContent : function(oController) {
		
		
	var myTasks = sap.ui.view({id:"myTasks", viewName:"personas_new.myTasks", type:sap.ui.core.mvc.ViewType.JS});
	var myOpps = sap.ui.view({id:"myOpps", viewName:"personas_new.myOpportunities", type:sap.ui.core.mvc.ViewType.JS});
	var myLeads = sap.ui.view({id:"myLeads", viewName:"personas_new.leads", type:sap.ui.core.mvc.ViewType.JS});
		
	 var tabBar = new sap.m.IconTabBar("iconTabBar", {
			expanded : true,
			width : "100%",
			height : "100%",
			items : [ 
			     new sap.m.IconTabFilter("GoalsFilter", {
				icon : "sap-icon://activity-individual",
				key : "goals",
				content : [myTasks]
			}), new sap.m.IconTabFilter({
				icon : "sap-icon://collaborate",
				key : "behaviours",
				content : [myOpps]
			}),
				new sap.m.IconTabFilter({
				icon : "sap-icon://leads",
				key : "development",
				content : [myLeads]
			}), 
				new sap.m.IconTabFilter("PerformanceFilter", {
				icon : "sap-icon://kpi-managing-my-area",
				key : "performance",
				content : [ 
				    new sap.m.ObjectHeader({
					title : "My performance",
				}) 
				]
			}) 
		  ]
		});
		
 		return new sap.m.Page("dashBoardPage",{
			title: "Dashboard",
			content: [tabBar]
		});
 		
	}

});