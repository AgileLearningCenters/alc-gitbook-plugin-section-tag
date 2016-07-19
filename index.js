module.exports = {
    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% section %}World{% endSection %}"
        section: {
            process: function(blk) {
                return '<section>'
                + block.body
                + '</section>';
            }
        }
    }
};
