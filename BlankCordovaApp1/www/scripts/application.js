define(["require", "exports"], function (require, exports) {
    // For an introduction to the Blank template, see the following documentation:
    // http://go.microsoft.com/fwlink/?LinkID=397705
    // To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
    // and then run "window.location.reload()" in the JavaScript Console.
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function initialize() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
    exports.initialize = initialize;
    function onDeviceReady() {
        document.addEventListener('pause', onPause, false);
        document.addEventListener('resume', onResume, false);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        var startNfcBtn = document.getElementById('nfcStart');
        startNfcBtn.addEventListener("click", function (view) {
            console.log("Clicked start");
            nfc.addTagDiscoveredListener(onNfc, function (suc) {
                console.log("success: addTagDiscoveredListener");
            }, function (err) {
                console.log("failed: " + err);
            });
            //nfc.addNdefListener(onNfc, () => {
            //    console.log("Listening for NFC Messages");
            //}, (err) => {
            //    console.log("failed: " + err);
            //});
        });
        var startNfcBtn = document.getElementById('nfcStop');
        startNfcBtn.addEventListener("click", function (view) {
            console.log("Clicked stop");
            nfc.removeTagDiscoveredListener(onNfc, function () {
                console.log("success: removeTagDiscoveredListener");
            }, function (err) {
                console.log("failed: " + err);
            });
        });
    }
    function onNfc(nfcEvent) {
        console.log(nfcEvent);
    }
    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    }
    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    }
});
//# sourceMappingURL=application.js.map