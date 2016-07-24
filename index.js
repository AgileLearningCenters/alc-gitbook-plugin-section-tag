var marked = require('marked');

module.exports = {
    website: {
        assets: "./_assets",
        css: [
        "website/alc-style.css"
        ]
    },
    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% aside %}World{% endaside %}"
        aside: {
            process: function(blk) {
                var arg1 = (blk.args[0]) ? blk.args[0] : 'callout',
                    arg2 = (blk.args[1]) ? blk.args[1] : 'default',
                    argClass = arg1 + ' ' + arg1 + '-' + arg2;

                return '<aside class="' + argClass + '">'
                + marked(blk.body)
                + '</aside>';
            }
        }
    }
};
