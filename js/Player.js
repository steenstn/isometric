var Player = (function () {
    function Player() {
        this.pos = new Point(100, 200);
        this.goalPos = this.pos;
        this.oldPos = this.pos;
    }
    Player.prototype.setGoalPos = function (goal) {
        this.goalPos = goal;
    };
    Player.prototype.moveTowardsGoal = function () {
        if (Math.abs(this.pos.x - this.goalPos.x) < 5 && Math.abs(this.pos.y - this.goalPos.y) < 5) {
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
        context.fillRect(Viewport.isoPos().x + isoPos.x, Viewport.isoPos().y + isoPos.y, 10, 16);
        context.fillStyle = "#f00";
        var isoGoalPos = Coordinates.toIso(this.goalPos);
        context.fillRect(Viewport.isoPos().x + isoGoalPos.x, Viewport.isoPos().y + isoGoalPos.y, 5, 5);
        var levelPos = Coordinates.getTileCoordinates(this.pos, 32);
        context.fillText(Level.currentLevel[levelPos.x + levelPos.y * Level.levelWidth], 10, 10);
    };
    return Player;
}());
