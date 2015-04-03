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
          xtype:'paperform',
          width:800,
          title: 'Paper Form',
          defaults:{
              margin: 10
          },
          items: [{
              xtype: 'datefield',
              emptyText:'datefield'
          }, {
              xtype: 'textfield',
              emptyText:'textfield'
          }, {
              xtype: 'textarea',
              emptyText:'textarea'
          }, {
              xtype: 'timefield',
              emptyText:'timefield'
          }, {
              xtype: 'combobox',
              displayField: 'val',
              valueField: 'val',
              emptyText:'combobox',
              store: Ext.create('Ext.data.Store', {
                  fields: ['val'],
                  data: [{
                      val: 'Option 1'
                  }, {
                      val: 'Option 2'
                  }, {
                      val: 'Option 3'
                  }]
              })
          }]
        }]
    }]
});