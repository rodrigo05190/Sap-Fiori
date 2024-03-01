sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, History) {
    "use strict";

    return Controller.extend(
      "rodrigo606.customer.crud.controller.CreateCustomer",
      {
        getRouter: function () {
          return this.getOwnerComponent().getRouter();
        },

        onInit: function () {
          var oModel = new sap.ui.model.json.JSONModel({
            first_name: "",
            last_name: "",
            phone_number: "",
            email: "",
          });
          this.getView().setModel(oModel);
        },
        onCancelPress: function () {
          this.getOwnerComponent().getRouter().navTo("RouteViewCustomer");
        },
        onSavePress: function () {
          var oModel = this.getView().getModel();
          //var sFirstName = oModel.getProperty("/first_name");
          console.log(oModel.oData);
        },
        onNavBack: function () {
          var oHistory, sPreviousHash;
          oHistory = History.getInstance();
          sPreviousHash = oHistory.getPreviousHash();
          sPreviousHash !== undefined
            ? window.history.go(-1)
            : this.getRouter.navTo(
                "RouteViewCustomer",
                {},
                true /*no history*/
              );
        },
      }
    );
  }
);
