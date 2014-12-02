sap.ui.jsview("personasdashboard.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf personasdashboard.App
	*/ 
	getControllerName : function() {
		return "personasdashboard.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf personasdashboard.App
	*/ 
	createContent : function(oController) {
		var app = new sap.m.SplitApp({initialPage:"master", mode : sap.m.SplitAppMode.HideMode});
		this.app = app;
		
		var detail = sap.ui.view({id:"detail", viewName:"personasdashboard.Detail", type:sap.ui.core.mvc.ViewType.JS, viewData : this});
		app.addDetailPage(detail);
		
		var master = sap.ui.view({id:"master", viewName:"personasdashboard.Master", type:sap.ui.core.mvc.ViewType.JS, viewData : this});
		app.addMasterPage(master);
		
		return app;
	}

});
