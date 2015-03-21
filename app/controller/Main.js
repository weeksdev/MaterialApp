Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',
    init:function(){
        this.control({
            'app-main':{
                afterrender: this.appRender
            }
        });
    },
    appRender:function(){
        console.log('app rendered!');
        Ext.get('three-circles-splash').fadeOut({
            opacity: 0,
            easing: 'easeOut',
            duration: 250,
            remove: false,
            useDisplay: false
        });
    }
});
