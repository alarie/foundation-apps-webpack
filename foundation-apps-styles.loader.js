var styles = [
    /*
    Set config.noNormalize to disable this
    'vendor/normalize',
    */
    /*
    These need to be loaded always:
    'helpers/functions',
    'helpers/mixins',
    'helpers/breakpoints',
    'helpers/images',
    'global',
    */
    'iconic',
    'action-sheet',
    'block-list',
    'button',
    'button-group',
    'card',
    'extras',
    'forms',
    'grid',
    'title-bar',
    'label',
    'list',
    'menu-bar',
    'modal',
    'motion',
    'notification',
    'off-canvas',
    'popup',
    'switch',
    'tabs',
    'accordion',
    'typography',
    'utilities'
];

module.exports = function(content) {
    this.cacheable(true);
    var config = this.exec(content, this.resourcePath);

    var normalize = ''

    if (!config.noNormalize) {
        normalize = "@import \"~foundation-apps/scss/vendor/normalize\";\n"

    }

    var start =
    "$foundation-version: '" + config.version + "';\n" +
    normalize +
    "@import \"~foundation-apps/scss/helpers/functions\";\n" +
    "@import \"~foundation-apps/scss/helpers/mixins\";\n" +
    "@import \"~foundation-apps/scss/helpers/breakpoints\";\n" +
    "@import \"~foundation-apps/scss/helpers/images\";\n" +
    "@import \"./foundation-apps.config.scss\";\n" +
    "@import \"~foundation-apps/scss/global\";\n";

    source = start + styles.filter(function(style) {
        return config.styles[style];
    }).map(function(style) {
        return "@import \"~foundation-apps/scss/components/" + style + "\";";
    }).join("\n");
    return source;
};
