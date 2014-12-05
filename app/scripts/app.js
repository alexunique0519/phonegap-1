'use strict';
var baseURL= "http://firstphp-alexunique0519.rhcloud.com";
/**
 * @ngdoc overview
 * @name phonegapApp
 * @description
 * # phonegapApp
 *
 * Main module of the application.
 */
angular
  .module('phonegapApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mobile-angular-ui',
    'ngCordova'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        }).when('/detail/:newsID', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
        })
      
        .otherwise({
            redirectTo: '/'
        });
    
    
  });


var pushNotification;

document.addEventListener("deviceready", function(){
    pushNotification = window.plugins.pushNotification;
    alert('<li>registering ' + device.platform + '</li>');
if ( device.platform == 'android' || device.platform == 'Android' || device.platform == "amazon-fireos" ){
    pushNotification.register(
    successHandler,
    errorHandler,
    {
        "senderID":"684519532671",
        "ecb":"onNotification"
    });
} else if ( device.platform == 'blackberry10'){
    pushNotification.register(
    successHandler,
    errorHandler,
    {
        invokeTargetId : "replace_with_invoke_target_id",
        appId: "replace_with_app_id",
        ppgUrl:"replace_with_ppg_url", //remove for BES pushes
        ecb: "pushNotificationHandler",
        simChangeCallback: replace_with_simChange_callback,
        pushTransportReadyCallback: replace_with_pushTransportReady_callback,
        launchApplicationOnPush: true
    });
} else {
    pushNotification.register(
    tokenHandler,
    errorHandler,
    {
        "badge":"true",
        "sound":"true",
        "alert":"true",
        "ecb":"onNotificationAPN"
    });
}
    
    // result contains any message sent from the plugin call
function successHandler (result) {
    alert('result = ' + result);
}
    
    // result contains any error description text returned from the plugin call
function errorHandler (error) {
    alert('error = ' + error);
}
    
    function onNotification(e) {
   alert('<li>EVENT -> RECEIVED:' + e.event + '</li>');

    switch( e.event )
    {
    case 'registered':
        if ( e.regid.length > 0 )
        {
            alert('<li>REGISTERED -> REGID:' + e.regid + "</li>");
            // Your GCM push server needs to know the regID before it can push to this device
            // here is where you might want to send it the regID for later use.
           alert("regID = " + e.regid);
        }
    break;

    case 'message':
        // if this flag is set, this notification happened while we were in the foreground.
        // you might want to play a sound to get the user's attention, throw up a dialog, etc.
        if ( e.foreground )
        {
            alert('<li>--INLINE NOTIFICATION--' + '</li>');

            // on Android soundname is outside the payload.
            // On Amazon FireOS all custom attributes are contained within payload
            var soundfile = e.soundname || e.payload.sound;
            // if the notification contains a soundname, play it.
            var my_media = new Media("/android_asset/www/"+ soundfile);
            my_media.play();
        }
        else
        {  // otherwise we were launched because the user touched a notification in the notification tray.
            if ( e.coldstart )
            {
               alert('<li>--COLDSTART NOTIFICATION--' + '</li>');
            }
            else
            {
               alert('<li>--BACKGROUND NOTIFICATION--' + '</li>');
            }
        }

      alert('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
           //Only works for GCM
       alert('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
       //Only works on Amazon Fire OS
      alert('<li>MESSAGE -> TIME: ' + e.payload.timeStamp + '</li>');
    break;

    case 'error':
       alert('<li>ERROR -> MSG:' + e.msg + '</li>');
    break;

    default:
       alert('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
    break;
  }
}
    
});
