module.exports = {
    version: '1.2.0',
    // Default for the style loading
    styleLoader: 'style-loader!css-loader!sass-loader',

    noNormalize: false,

    scripts: {
        // this is not supportet you will have to
        // care about script loading yourself
    },

    styles: {
        /*js*/'iconic': true,
        /*js*/'action-sheet': true,
        'block-list': true,
        'button': true,
        'button-group': true,
        'card': true,
        'extras': true,
        'forms': true,
        'grid': true,
        'title-bar': true,
        'label': true,
        'list': true,
        'menu-bar': true,
        /*js*/'modal': true,
        'motion': true,
        /*js*/'notification': true,
        /*js*/'off-canvas': true,
        /*js*/'popup': true,
        'switch': true,
        /*js*/'tabs': true,
        /*js*/'accordion': true,
        'typography': true,
        'utilities': true
    }
};
