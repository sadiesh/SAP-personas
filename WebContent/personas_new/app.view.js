sap.ui.jsview("personas_new.app", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf personas_new.app
	 */
	getControllerName : function() {
		return "personas_new.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf personas_new.app
	 */
	createContent : function(oController) {
		var oNavFlex = new sap.m.FlexBox("navFlex", {
			width : "100%",
			renderType : "List",
			justifyContent : "Center",
			alignItems : "Center",
			items : [ new sap.m.Button("dashBoardTab", {

				text : "Dashboard"

			}).setLayoutData(new sap.m.FlexItemData({
				growFactor : 1
			})).addStyleClass("navButton"),

			new sap.m.Button("accountTab", {
				text : "Accounts",

			}).setLayoutData(new sap.m.FlexItemData({
				growFactor : 1
			})).addStyleClass("navButton"),

			new sap.m.Button("leadTab", {
				text : "Leads",

			}).setLayoutData(new sap.m.FlexItemData({
				growFactor : 1
			})).addStyleClass("navButton"),

			new sap.m.Button("opportTab", {
				text : "Opportunities ",

			}).setLayoutData(new sap.m.FlexItemData({
				growFactor : 1
			})).addStyleClass("navButton"),

			new sap.m.Button("taskTab", {

				text : "Tasks",

			}).setLayoutData(new sap.m.FlexItemData({
				growFactor : 1
			})).addStyleClass("navButton"),

			],
		});

		var navContainer = sap.ui.view({
			id : "navContainerView",
			viewName : "personas_new.pageLayout",
			type : sap.ui.core.mvc.ViewType.JS
		});

		var verticalLayout = sap.m.VBox({
			width : "100%",
			height : "100%",
			items : [ oNavFlex, navContainer ]
		});

		var oHomePage = new sap.m.Page("homepage", {

			customHeader : new sap.m.Bar("headerBar", {
				contentLeft : [ new sap.m.Label("HeaderLabel", {
					text : "SAP Personas Intiative",
					width : "100%"
				}) ],

				contentRight : [ new sap.m.Button("accountButton", {
					icon : "sap-icon://account",
					press : function() {
						oSplitApp.toMaster("EA_PER_MASTER");
					},

				}), new sap.m.Label("accountText", {
					text : "Vishnu Pindi"

				}),

				new sap.m.Button("settingButton", {
					icon : "sap-icon://action-settings",
					press : function() {
						oSplitApp.toMaster("EA_PER_MASTER");
					},

				}) ]

			}),
			content : [ verticalLayout ],

		/* content for personal data end */

		/* footer for personal data start */
		 footer : new sap.m.Bar ("homeFooter",
		 {
		     contentRight :
		     [
		             new sap.m.Button ( "" ,
		             {
		                 text : "Submit",
		                 press : function ( evt )
		                 {
		                     oController.onSubmit ( evt );
		                 }
		             
		             } ), new sap.m.Button ( "EA_PA_PER_CANCEL" ,
		             {
		                 text : "Cancel",
		                 press : function ( oEvt )
		                 {
		                     var oBus = sap.ui.getCore ( ).getEventBus ( );
		                     oBus.publish ( "nav" , "back" );
		                     
		                 }
		             
		             } )
		     ]
		 } )

		/* footer end for personal data */
		});

		return oHomePage;
	}

});