var marked = require('marked');

module.exports = {
    website: {
        assets: "./book",
        css: [
        "test.css"
        ]
    },
    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% section %}World{% endSection %}"
        section: {
            process: function(blk) {
                return '<section class="call-out">'
                + marked(blk.body)
                + '</section>';
            }
        }
    }
};
