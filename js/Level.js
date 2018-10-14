var Level = (function () {
    function Level() {
    }
    Level.loadTileset = function () {
        Level.tileset = new Image();
        Level.tileset.src = "sd.png";
    };
    Level.render = function (context) {
        var tileSize = 32;
        for (var i = 0; i < Level.levelWidth; i++) {
            for (var j = 0; j < Level.levelWidth; j++) {
                var p = new Point(i * tileSize, j * tileSize);
                context.fillStyle = Level.currentLevel[i + j * Level.levelWidth] === 0 ? "#5af15a" : "#a0a0a0";
                if (Level.currentLevel[i + j * Level.levelWidth] === 3) {
                    context.fillStyle = "#f00";
                }
                var pIso = Coordinates.toIso(p);
                context.drawImage(Level.tileset, Level.currentLevel[i + j * Level.levelWidth] * 64, 0, tileSize * 2, tileSize, Viewport.isoPos().x + pIso.x - tileSize, Viewport.isoPos().y + pIso.y, tileSize * 2, tileSize);
            }
        }
    };
    Level.currentLevel = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    Level.levelWidth = 10;
    Level.tileSize = 32;
    return Level;
}());
