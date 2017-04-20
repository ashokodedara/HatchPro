jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 MYPROJECTSSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"webapp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"webapp/test/integration/pages/App",
	"webapp/test/integration/pages/Browser",
	"webapp/test/integration/pages/Master",
	"webapp/test/integration/pages/Detail",
	"webapp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "webapp.view."
	});

	sap.ui.require([
		"webapp/test/integration/MasterJourney",
		"webapp/test/integration/NavigationJourney",
		"webapp/test/integration/NotFoundJourney",
		"webapp/test/integration/BusyJourney",
		"webapp/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});