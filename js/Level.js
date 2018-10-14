var Level = (function () {
    function Level() {
    }
    Level.loadTileset = function () {
        Level.tileset = new Image();
        Level.tileset.src = "sd.png";
    };
    Level.render = function (context) {
        for (var i = 0; i < Level.levelWidth; i++) {
            for (var j = 0; j < Level.levelWidth; j++) {
                var p = new Point(i * Level.tileSize, j * Level.tileSize);
                context.fillStyle = Level.currentLevel[i + j * Level.levelWidth] === 0 ? "#5af15a" : "#a0a0a0";
                if (Level.currentLevel[i + j * Level.levelWidth] === 3) {
                    context.fillStyle = "#f00";
                }
                var pIso = Coordinates.toIso(p);
                context.drawImage(Level.tileset, Level.currentLevel[i + j * Level.levelWidth] * 64, 0, Level.tileSize * 2, Level.tileSize, Viewport.isoPos().x + pIso.x - Level.tileSize, Viewport.isoPos().y + pIso.y, Level.tileSize * 2, Level.tileSize);
            }
        }
    };
    Level.currentLevel = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    Level.levelWidth = 10;
    Level.tileSize = 32;
    return Level;
}());
