function slideTile(tile, duration) {
    tile.animate({
        top: tile.data("col") * tileHeight,
        left: tile.data("row") * tileWidth
    }, duration || 200);
}

// Up, Down, Left, Right
// 38, 40,   37,   39
function moveUp() {
    if (gapY > 0) {
        var tile = tiles[gapY - 1][gapX];
        tiles[gapY][gapX] = tile;
        tile.data("col", gapY);
        slideTile(tile);
        gapY = gapY - 1;
        tiles[gapY][gapX] = null;
    }
}


function moveDown() {
    if (gapY < 3) {
        var tile = tiles[gapY + 1][gapX];
        tiles[gapY][gapX] = tile;
        tile.data("col", gapY);
        slideTile(tile);
        gapY = gapY + 1;
        tiles[gapY][gapX] = null;
    }
}


function moveLeft() {
    if (gapX > 0) {
        var tile = tiles[gapY][gapX - 1];
        tiles[gapY][gapX] = tile;
        tile.data("row", gapX);
        slideTile(tile);
        gapX = gapX - 1;
        tiles[gapY][gapX] = null;
    }
}


function moveRight() {
    if (gapX < 3) {
        var tile = tiles[gapY][gapX + 1];
        tiles[gapY][gapX] = tile;
        tile.data("row", gapX);
        slideTile(tile);
        gapX = gapX + 1;
        tiles[gapY][gapX] = null;
    }
}