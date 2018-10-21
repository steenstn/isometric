var Player = (function () {
    function Player() {
        this.pos = new Point(100, 240);
        this.goalPos = new Point(this.pos.x, this.pos.y);
        this.oldPos = new Point(this.pos.x, this.pos.y);
    }
    Player.prototype.setGoalPos = function (goal) {
        this.goalPos = goal;
    };
    Player.prototype.setPath = function (path) {
        this.path = path;
    };
    Player.prototype.getLevelCoordinates = function () {
        return Coordinates.getTileCoordinates(this.pos, Level.tileSize);
    };
    Player.prototype.moveTowardsGoal = function () {
        if (!this.path) {
            return;
        }
        if (this.path.length > 0) {
            this.goalPos.x = (this.path[this.path.length - 1].x) * (Level.tileSize) + 16;
            this.goalPos.y = (this.path[this.path.length - 1].y) * (Level.tileSize) + 16;
        }
        if (Math.abs(this.pos.x - this.goalPos.x) < 5 && Math.abs(this.pos.y - this.goalPos.y) < 5) {
            this.path.pop();
            return;
        }
        this.oldPos = new Point(this.pos.x, this.pos.y);
        if (this.goalPos.x > this.pos.x) {
            this.pos.x++;
        }
        else {
            this.pos.x--;
        }
        if (this.goalPos.y > this.pos.y) {
            this.pos.y++;
        }
        else {
            this.pos.y--;
        }
        var levelPos = Coordinates.getTileCoordinates(this.pos, 32);
        if (Level.currentLevel[levelPos.x + levelPos.y * Level.levelWidth] != 0) {
            this.pos = this.oldPos;
        }
    };
    Player.prototype.render = function (context) {
        context.fillStyle = "#11f";
        var isoPos = Coordinates.toIso(this.pos);
        context.fillRect(Viewport.isoPos().x + isoPos.x - 5, Viewport.isoPos().y + isoPos.y - 16, 10, 16);
        if (WorldConstants.debugOutput) {
            context.fillStyle = "#f00";
            var isoGoalPos = Coordinates.toIso(this.goalPos);
            context.fillRect(Viewport.isoPos().x + isoGoalPos.x, Viewport.isoPos().y + isoGoalPos.y, 5, 5);
        }
        var levelPos = Coordinates.getTileCoordinates(this.pos, 32);
    };
    return Player;
}());
