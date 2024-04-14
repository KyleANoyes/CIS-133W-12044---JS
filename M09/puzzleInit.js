$(
    function(evt) {
        $(window).resize(resize);
        $(document).keydown(keydown);
        createTiles();
        resize();
        scramble(250);
    }
)