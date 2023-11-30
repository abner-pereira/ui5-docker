sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
    "use strict";

    XMLView.create({ viewName: "WorkUI5.App" }).then(function (oView) {
        oView.placeAt("content");
    });
});
