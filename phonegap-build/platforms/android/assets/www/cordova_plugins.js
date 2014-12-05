cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/hu.dpal.phonegap.plugins.PinDialog/www/pin.js",
        "id": "hu.dpal.phonegap.plugins.PinDialog.PinDialog",
        "merges": [
            "window.plugins.pinDialog"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.battery-status/www/battery.js",
        "id": "org.apache.cordova.battery-status.battery",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "file": "plugins/com.verso.cordova.clipboard/www/clipboard.js",
        "id": "com.verso.cordova.clipboard.Clipboard",
        "clobbers": [
            "cordova.plugins.clipboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.PushPlugin": "2.4.0",
    "hu.dpal.phonegap.plugins.PinDialog": "0.1.3",
    "org.apache.cordova.battery-status": "0.2.11",
    "com.verso.cordova.clipboard": "0.1.0"
}
// BOTTOM OF METADATA
});