/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"iot/app/IoTApplication/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});