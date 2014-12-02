sap.ui.jsview("personas_new.pageLayout", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf personas_new.pageLayout
	 */
	getControllerName : function() {
		return "personas_new.pageLayout";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf personas_new.pageLayout
	 */
	createContent : function(oController) {

		var dashBoard = sap.ui.view({id:"dashBoardView", viewName:"personas_new.dashboard", type:sap.ui.core.mvc.ViewType.JS});

		var navContainer = new sap.m.NavContainer({
			height : "45em",
			width : "100%",
			visible : true,
		//			defaultTransitionName : string
			pages : [dashBoard],
			initialPage : "dashBoardView"
		});
		
		return navContainer;
	}

});