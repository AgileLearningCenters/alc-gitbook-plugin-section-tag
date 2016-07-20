var marked = require('marked');

module.exports = {
    website: {
        assets: "./assets",
        css: [
        "default-style.css"
        ]
    },
    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% section %}World{% endSection %}"
        section: {
            process: function(blk) {
                var arg1 = (blk.args[0]) ? blk.args[0] : 'callout',
                    arg2 = (blk.args[1]) ? blk.args[1] : 'default',
                    argClass = arg1 + ' ' + arg1 + '-' + arg2;

                return '<section class="' + argClass + '">'
                + marked(blk.body)
                + '</section>';
            }
        }
    }
};
