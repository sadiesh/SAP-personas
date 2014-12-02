sap.ui.controller("personasdashboard.Master", {

	
  handleNavigation : function(evt){
		
		var action = evt.getParameters().listItem.data("key");
		var app = this.getView().getViewData().app;
		var appView = this.getView().getViewData();
		
		if(action == "opportunities"){
			
			if (!app.getPage("opportunities")) {
				var createNotification = sap.ui.view({
					id : "opportunities",
					viewName : "personasdashboard.opportunities",
					type : sap.ui.core.mvc.ViewType.JS,
					viewData : appView
				});
				app.addDetailPage(createNotification);
				this.createNotification = createNotification;
			}
			app.to("opportunities");
		}
		else if(action == "home"){
			app.to("detail");
		}
	},
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf personasdashboard.Master
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf personasdashboard.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf personasdashboard.Master
*/
	onAfterRendering: function() {
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf personasdashboard.Master
*/
//	onExit: function() {
//
//	}

});