/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('App.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },
    items: [{
        xtype:'Header',
        region: 'north'
    },{
        xtype: 'container',
        region: 'center',
        layout:{
            type:'vbox',
            align:'center'
        },
        autoScroll:true,
        items:[{
            xtype:'Login',
            width: 350,
            height:400
        },{
            xtype:'Login',
            width: 350,
            height:400
        },{
          xtype:'paperpanel',
          width:800,
          title:'Hello World',
          html:'This is an empty panel'
        }]
    }]
});