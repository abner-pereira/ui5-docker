sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("WorkUI5.App", {
        onPress: function () {
            MessageToast.show("Hello UI5!");
            this.byId("app").to(this.byId("intro"));
        },
    });
});
