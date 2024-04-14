function keydown(event) {
    // Up, Down, Left, Right
    // 38, 40,   37,   39
    switch (event.which) {
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
            break;
    }
    event.stopPropagation();
    event.preventDefault();
}