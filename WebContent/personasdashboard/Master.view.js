sap.ui.jsview("personasdashboard.Master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf personasdashboard.Master
	*/ 
	getControllerName : function() {
		return "personasdashboard.Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf personasdashboard.Master
	*/ 
	createContent : function(oController) {
		
		var actions = new sap.m.List("masterlist",{
			items : [
			           new sap.m.StandardListItem({
			        	   icon : "sap-icon://home",
			        	   type : sap.m.ListType.Navigation,
			        	   title  : "Dashboard",
//			        	   press : function(){
////			        		   controller.createNewDefects()
//			        	   }
			           }).data("key","home"),
			           
			               new sap.m.StandardListItem({
			        	   icon : "sap-icon://notification",
			        	   title  : "Accounts",
			        	   type : sap.m.ListType.Navigation,
//			        	   press : function(){
//			        		   controller.openExistingNotifications()
//			        	   }
			           }).data("key", "createNotification"),
			           new sap.m.StandardListItem({
			        	   icon : "sap-icon://functional-location",
			        	   title  : "Leads",
			        	   type : sap.m.ListType.Navigation,
//			        	   press : function(){
//			        			var url = location.href;
//			        			var newUrl = url.slice(0,url.lastIndexOf("/")) + "/location.html";
//			        			location.assign(newUrl);
//			        	   }
			           }),
//			           new sap.m.StandardListItem({
//			        	   icon : "sap-icon://time-account",
//			        	   title  : "My Timesheet",
//			        	   type : sap.m.ListType.Navigation,
////			        	   press : function(){
////			        		   controller.createNewDefects()
////			        	   }
//			           }),
			           new sap.m.StandardListItem({
			        	   icon : "sap-icon://synchronize",
			        	   title  : "Opportunities",
			        	   type : sap.m.ListType.Navigation,
			           }).data("key","opportunities"),
			           new sap.m.StandardListItem({
			        	   icon : "sap-icon://task",
			        	   title  : "Tasks",
			        	   type : sap.m.ListType.Navigation,
			           })
			           ],
			   itemPress : function(evt){
				   oController.handleNavigation(evt);
			   }        
			        
		});
		
		return new sap.m.Page({
			id:"per-master-page",
			customHeader : new sap.m.Bar({
				id:"master-page-header",
				contentLeft : [
					new sap.m.Label({
						text : "SAP Personas Intiative"
					}).addStyleClass("appTitle"),                
				 new sap.m.Image({
					src : "images/logo.png",
					width : "108px",
					height : "42px"
				}),
				],
				contentMiddle : [
				    new sap.m.Label({
				    	text : ""
				    }).addStyleClass("appTitle")             
				 ]
				}),
				content: [actions]
		});
	}

});
