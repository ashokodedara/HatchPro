jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"webapp/test/integration/NavigationJourneyPhone",
		"webapp/test/integration/NotFoundJourneyPhone",
		"webapp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});