Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    
    name: 'App',
    requires:[
        'App.common.PaperPanel',
        'App.common.PaperForm'
    ],
    views: [
        'Header',
        'login.Login'
    ],

    controllers: [
        'Root',
        'Main'
    ],

    stores: [
    ],
    
    launch: function () {
    }
});
