var MARGIN = 3;
var BORDER = 1;

var tileWidth;
var tileHeight;
var tiles = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, null],
];

var gapX = 3;
var gapY = 3;


function tilesPos() {
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
            var tile = tiles[col][row];

            if (tile) {
                tile.css({
                    top: tile.data("col") * tileHeight,
                    left: tile.data("row") * tileWidth
                });
            }
        }
    }
}


function scramble(quant) {
    for (var i = 0; i < quant; i++) {
        var ran = Math.random();

        if (ran < 0.25) {
            moveUp();
        }
        else if (ran >= 0.25 && ran < 0.50) {
            moveDown();
        }
        else if (ran >= 0.50 && ran < 0.75) {
            moveLeft();
        }
        else {
            moveRight();
        }
    }
}


function resize() {
    var margin = parseInt($("body").css("margin"))
    var winWidth = $(window).width() - 2 * margin;
    var winHeight = $(window).height() - 2 * margin;

    tileWidth = Math.floor(winWidth / 4);
    tileHeight = Math.floor(winHeight / 4);

    var fontSize = Math.min(tileWidth, tileHeight);
    var extraSpace = 2 * (MARGIN + BORDER);

    // chaining statements
    $(".tile")
    .width(tileWidth - extraSpace)
    .height(tileHeight - extraSpace)
    .css("fontSize", (0.8 * fontSize) + "px")
    .css("borderRadius", 0.05 * tileWidth);

    tilesPos();
}


function createTiles() {
    var board = $('#board');

    for (var col = 0; col < 4; col++) {
        for (var row = 0; row < 4; row++) {
            var dataVal = col * 4 + row + 1;
            if (dataVal < 16) {
                var tile = $('<div class ="tile">' + dataVal + '</div>');

                board.append(tile);
                tile.data("row", row).data("col", col);
                tiles[col][row] = tile;

                if (row % 2) {
                    tile.css("backgroundColor", "Orange");
                }
                else {
                    tile.css("backgroundColor", "lightBlue");
                }
            }
        }
    }
}