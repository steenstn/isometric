var Enemy = (function () {
    function Enemy(pos) {
        this.pos = pos;
    }
    Enemy.prototype.render = function (context) {
        context.fillStyle = "#1ff";
        var isoPos = Coordinates.toIso(this.pos);
        context.fillRect(Viewport.isoPos().x + isoPos.x - 5, Viewport.isoPos().y + isoPos.y - 16, 10, 16);
    };
    return Enemy;
}());
