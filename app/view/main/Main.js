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
        region: 'north',
        height:56,
        cls:'header',
        xtype:'toolbar',
        // layout:{
        //     type:'hbox',
        //     align:'center'
        // },
        defaults:{
            padding:5
        },
        items:[{
            xtype:'component',
            margin:'5 15 5',
            html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"/></svg>',
            cls:'header-menu-icon',
            itemId:'headerHamburger',
            height:36,
            width:36,
            listeners:{
                afterrender: function(me){
                    me.getEl().on('click',function(){
                        me.fireEvent('click');
                    });
                }
            }
        },{
            xtype:'displayfield',
            value:'My Application',
            fieldCls:'header-title',
            itemId:'headerTitle',
            listeners:{
                afterrender: function(me){
                    me.getEl().on('click',function(){
                        me.fireEvent('click');
                    });
                }
            }
        },{
            width:40,
            xtype:'component',
            itemId:'headerSpacer'
        },{
            xtype:'panel',
            flex:1,
            maxWidth:600,
            layout:{
                type:'hbox',
                align:'stretch'
            },
            bodyCls:'header-search-panel',
            defaults:{
                margin:'0 5 0'
            },
            items:[{
                xtype:'component',
                html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/></svg>',
                height:30,
                width:30,
                cls:'header-search-icon'
            },{
                xtype:'textfield',
                emptyText:'Search',
                flex:1,
                border:0,
                cls:'header-search',
                bodyCls:'header-search',
                fieldCls:'header-search',
                emptyCls:'header-search'
            }]
        }]
    },{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }]
});