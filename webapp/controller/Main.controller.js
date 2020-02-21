sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("iot.app.IoTApplication.controller.Main", {
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf miningIOT.MiningIOT.view.OverView
		 */
		onInit: function () {
			var oIoTSensorModel = new sap.ui.model.json.JSONModel();
			oIoTSensorModel.setProperty("/Data", []);
			this.getView().setModel(oIoTSensorModel, "IoTSensorModel");
			this.getIoTSensorData();
		},
		/**
		 * Method is called to get IoT Sensor Data from IoT Service Cockpit
		 * @public
		 */
		getIoTSensorData: function() {
			jQuery.ajax({
				type: "GET",
				contentType: "application/json",
				crossDomain: true,
				url:  "/iotapp/iot/processing/api/v1/tenant/1409713732/measures/capabilities/01d344ac-e690-4915-85b6-c4c44fd32c4d?top=100&orderby=timestamp%20desc",
				xhrFields: {
				    withCredentials: true
				},
				username: "root",
				password: "pke6TXlTgXEkal3",
				dataType: "json",
				async: false,
				success: function (data, textStatus, jqXHR) {
					for(var intI = 0; intI < data.length; intI++) {
						data[intI].timestamp = new Date(data[intI].timestamp);
					}
				    this.getView().getModel("IoTSensorModel").setProperty("/Data", jQuery.extend(true, [], data));
				}.bind(this)
			});
		}
	});
});