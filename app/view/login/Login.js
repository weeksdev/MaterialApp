Ext.define('App.view.login.Login', {
    extend: 'App.common.PaperForm',
    xtype: 'Login',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },//this is a comment
    items: [{
        xtype: 'component',
        html: '<h2 style="color:#9E9E9E;">Sign In With Your Email</h2>'
    }, {
        xtype: 'image',
        src: 'resources/icons/person.svg',
        height: 100,
        width: 100
    }, {
        xtype: 'textfield',
        emptyText: 'Username',
        name: 'username',
        width: 300
    }, {
        xtype: 'textfield',
        emptyText: 'Password',
        inputType: 'password',
        name: 'password',
        width: 300,
        
    }, {
        xtype: 'container',
        width: 300,
        layout: {
            type: 'hbox',
            align: 'right',
            pack: 'right'
        },
        items: [{
            xtype: 'tbfill'
        }, {
            xtype: 'component',
            html: 'or sign in with google'
        }]
    }],
    buttons: [{
        text: 'Sign In',
        itemId: 'signInBtn'
    }]
});
