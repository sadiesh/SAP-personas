sap.ui.jsview("personas_new.myTasks", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf personas_new.myTasks
	*/ 
	getControllerName : function() {
		return "personas_new.myTasks";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf personas_new.myTasks
	*/ 
	createContent : function(oController) {
		 var summaryDetailData = {
                 "results" : 
                 [ 
                  {
                        "type" : "func",
                        "objectId" : "123",
                        "description" : "Carpet Installation type",
                        "objectType" : "1",
                        "status" : "open"
                 },  
                 {
                        "type" : "equip",
                        "objectId" : "222",
                        "description" : "Carpet Installation type",
                        "objectType" : "2",
                        "status" : "open"
                 },  
                 {
                        "type" : "func",
                        "objectId" : "333",
                        "description" : "Carpet Installation type",
                        "objectType" : "3",
                        "status" : "open"
                 },  
                 {
                        "type" : "equip",
                        "objectId" : "4242",
                        "description" : "Carpet Installation type",
                        "objectType" : "4",
                        "status" : "open"
                 }  
             ]
           };

           var oTable = new sap.m.Table("myTask", {
                 headerToolbar : new sap.m.Toolbar({
                        content : [ new sap.m.Label({
                               text : "My Task"
                        }) 
//                      new sap.m.ToolbarSpacer({}),
//                                    new sap.m.Button("idPersonalizationButton", {
//                                           icon : "sap-icon://person-placeholder"
//                                    }) 
                        ]
                 }),
                 columns : [ 
                   new sap.m.Column({
                        width : "2em",
                        header : new sap.m.Label({
                               text : "Active Description"
                        })
                 }), 
                 new sap.m.Column({
                        width : "2em",
                        header : new sap.m.Label({
                               text : "Start Date"
                        })
                 }), new sap.m.Column({
                        width : "2em",
                        header : new sap.m.Label({
                               text : "End Date"
                        })
                 }) ,new sap.m.Column({
                          width : "2em",
                          header : new sap.m.Label({
                                 text : "Status"
                          })
                   }) 
                   ,new sap.m.Column({
                          width : "2em",
                          header : new sap.m.Label({
                                 text : "Sales Representative"
                          })
                   }) 
                   ,new sap.m.Column({
                          width : "2em",
                          header : new sap.m.Label({
                                 text : ""
                          })
                   }) 
                   ]
           });

           oTable.bindItems("/results", new sap.m.ColumnListItem({
                 cells : [ 
                 new sap.m.Text({
                        text : "{objectId}"
                 }),
                 new sap.m.Text({
                        text : "{objectId}"
                 }), 
                 new sap.m.Text({
                        text : "{description}"
                 }), 
                 new sap.m.Text({
                        text : "{objectType}",
                 })
                 ,new sap.m.Text({
                        text : "{status}",
                 })                   
                                 
                 ]
           }));

           oTable.setModel(new sap.ui.model.json.JSONModel(summaryDetailData));
			
			return oTable;
	}

});