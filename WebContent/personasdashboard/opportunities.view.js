sap.ui.jsview("personasdashboard.opportunities", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf personasdashboard.opportunities
	*/ 
	getControllerName : function() {
		return "personasdashboard.opportunities";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf personasdashboard.opportunities
	*/ 
	createContent : function(oController) {
		
		
		


           var oTable = new sap.m.Table("Opport-Table", {
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
                               text : "Opp ID"
                        })
                 }), 
                 new sap.m.Column({
                        width : "2em",
                        header : new sap.m.Label({
                               text : "Probablity of Success"
                        })
                 }), new sap.m.Column({
                        width : "2em",
                        header : new sap.m.Label({
                               text : "Opportunity Description"
                        })
                 }) ,new sap.m.Column({
                          width : "2em",
                          header : new sap.m.Label({
                                 text : "Start Date"
                          })
                   }) 
                   ,new sap.m.Column({
                          width : "2em",
                          header : new sap.m.Label({
                                 text : "End Date"
                          })
                   }) 
                   ,new sap.m.Column({
                          width : "2em",
                          header : new sap.m.Label({
                                 text : "Status"
                          })
                   
                   })
                   ,new sap.m.Column({
                       width : "2em",
                       header : new sap.m.Label({
                              text : "Sales Cycle"
                       })
                
                }) 
                   ,new sap.m.Column({
                       width : "2em",
                       header : new sap.m.Label({
                              text : "Sales Scale"
                       })
                
                }),new sap.m.Column({
                    width : "2em",
                    header : new sap.m.Label({
                           text : "Sales Cycle"
                    })
             
             }) 
                   ]
           });

           
           
           var summaryDetailData = {
                   "results" : 
                   [ 
                    {
                          "oppid" : "0000000462",
                          "chance" : "20",
                          "description" : "ICD Opportunity",
                          "startdate" : "2014-03-05",
                          "endDate" : "2014-03-21",
                          "status":"open",
                          "salescyc":"Allgemeine",
                          "salesStage" : "Losungsentwicklung",
                          "salesrep":"vishnu pindi"
                   },  
                   {
                   	"oppid" : "0000000463",
                       "chance" : "80",
                       "description" : "Semiconductor Opportunity",
                       "startdate" : "2014-03-05",
                       "endDate" : "2014-03-05",
                       "status":"In Process",
                       "salescyc":"Allgemeine",
                       "salesStage" : "Losungsentwicklung",
                       "salesrep":"vishnu pindi"
                   }
               ]
             };
   		
   		 oTable.bindItems("/results", new sap.m.ColumnListItem({
                cells : [ 
                new sap.m.Text({
                       text : "{oppid}"
                }),
                new sap.m.Text({
                       text : "{chance}"
                }), 
                new sap.m.Link({
                       text : "{description}"
                }), 
                new sap.m.Text({
                       text : "{startdate}",
                })
                ,new sap.m.Text({
                       text : "{endDate}",
                }),
                new sap.m.Text({
                       text : "{status}",
                }),
                new sap.m.Text({
                       text : "{salescyc}",
                }),
                new sap.m.Text({
                       text : "{salesStage}",
                }),
                new sap.m.Text({
                       text : "{salesrep}",
                })                                
                                
                ]
          }));
          
          oTable.setModel(new sap.ui.model.json.JSONModel(summaryDetailData));
           
		
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
	                    	   layoutData : new sap.m.FlexItemData({
		            				styleClass : "setChartLayout"
		            			}),
	                          width : "100%",
	                          height : "100%",
	                          /*title : {
	                              visible : true,
	                              text : 'Chance of Success '
	                          },*/
	                          dataset : oDataset
	                      });
	                     
	                      oPieChart.setModel(oModel);
	                      
//	                     some business data 
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
	                            layoutData : new sap.m.FlexItemData({
		            				styleClass : "setChartLayout"
		            			}),
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
	              
	              
//	             var myOpp = new sap.m.Carousel({
//	                    height : "30em",
//	                    width : "90%",
//	                    loop : true,
//	                    showPageIndicator : true,
//	                    pageIndicatorPlacement : true,
//	                    showBusyIndicator : true,
//	                    pages : []
//	             });
//	             
//	              return myOpp;
	                     
	             		var chartTitle = new sap.m.HBox({
	            			alignItems : sap.m.FlexAlignItems.Center,
//	            			icon : "sap-icon://functional-location",
	            			layoutData : new sap.m.FlexItemData({
//	            				styleClass : "locationText"
	            			}),
	            			items : [ 
	            			new sap.m.Text({
	            				text : "Opportunities",
	            				layoutData : new sap.m.FlexItemData({
	            					styleClass : "titleElement"
	            				}),
	            			}),
	            		
//	            			new sap.m.Select({
//	            				layoutData : new sap.m.FlexItemData({
//	            					styleClass : "titleElement"
//	            				}),
//	            				items : [ 
//	            				new sap.ui.core.Item({
//	            					  text : "Bridge 101"
//	            				}),
//	            				new sap.ui.core.Item({
//	            					  text : "Bridge 102"
//	            				})
//	            				],
//	            				change : function(evt){
//	            					oController.changeChartData(evt)
//	            				}
//	            			})
	            			
	            			]
	            		}).addStyleClass("panelTitle");

	            		var col1 = new sap.m.VBox({
	            			width : "50%",
	            			height : "auto",
	            			items : [chartTitle,oPieChart]
	            		}).addStyleClass("panel");

	            		var chartTitle1 = new sap.m.HBox({
	            			alignItems : sap.m.FlexAlignItems.Center,
//	            			icon : "sap-icon://functional-location",
	            			layoutData : new sap.m.FlexItemData({
//	            				styleClass : "locationText"
	            			}),
	            			items : [ 
	            			new sap.m.Text({
	            				text : "Opportunities2",
	            				layoutData : new sap.m.FlexItemData({
	            					styleClass : "titleElement"
	            				}),
	            			}),
	            		
//	            			new sap.m.Select({
//	            				layoutData : new sap.m.FlexItemData({
//	            					styleClass : "titleElement"
//	            				}),
//	            				items : [ 
//	            				new sap.ui.core.Item({
//	            					  text : "Bridge 101"
//	            				}),
//	            				new sap.ui.core.Item({
//	            					  text : "Bridge 102"
//	            				})
//	            				],
//	            				change : function(evt){
//	            					oController.changeChartData(evt)
//	            				}
//	            			})
	            			
	            			]
	            		}).addStyleClass("panelTitle");

	            		var col2 = new sap.m.VBox({
	            			width : "50%",
	            			height : "auto",
	            			items : [chartTitle1,oBarChart]
	            		}).addStyleClass("panel");
		
	            		
	            		var row1 = new sap.m.HBox({
	            			layoutData : new sap.m.FlexItemData({
	            				styleClass : "bottomCols"
	            			}),
	            			items : [col1,col2],
	            			width : "100%",
	            			height : "50%"
	            		}).addStyleClass("bottomRow");
		
 		return new sap.m.Page({
 			id:"opportunity-Page",
			title: "Opportunity Dashboard",
			content: [row1,oTable]
		});
 		oTable.setModel(new sap.ui.model.json.JSONModel(summaryDetailData));
 		
 		return oTable;
	}
	
   
	
});