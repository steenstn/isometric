class Player {
    constructor() {
        this.pos = new Vector(100, 240);
        this.goalPos = new Vector(this.pos.x, this.pos.y);
        this.oldPos = new Vector(this.pos.x, this.pos.y);
        this.velocity = new Vector(0, 0);
        this.acceleration = new Vector(0, 0);
    }
    setGoalPos(goal) {
        this.goalPos = goal;
    }
    setPath(path) {
        this.path = path;
    }
    getLevelCoordinates() {
        return Coordinates.getTileCoordinates(this.pos, Level.tileSize);
    }
    getPos() {
        let tempPos = new Vector(this.pos.x, this.pos.y);
        return tempPos;
    }
    clamp(input, min, max) {
        return input > max ? max : input < min ? min : input;
    }
    move() {
        this.oldPos = new Vector(this.pos.x, this.pos.y);
        this.acceleration.x = this.clamp(this.acceleration.x, -1, 1);
        this.acceleration.y = this.clamp(this.acceleration.y, -1, 1);
        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
        this.velocity.x = this.clamp(this.velocity.x, -2, 2);
        this.velocity.y = this.clamp(this.velocity.y, -2, 2);
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
        let levelPos = Coordinates.getTileCoordinates(this.pos, 32);
        if (Level.currentLevel[levelPos.x + levelPos.y * Level.levelWidth] != 0) {
            this.pos = this.oldPos;
        }
    }
    setXVelocity(velocity) {
        this.velocity.x = velocity;
    }
    setYVelocity(velocity) {
        this.velocity.y = velocity;
    }
    moveTowardsGoal() {
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
        this.oldPos = new Vector(this.pos.x, this.pos.y);
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
        let levelPos = Coordinates.getTileCoordinates(this.pos, 32);
        if (Level.currentLevel[levelPos.x + levelPos.y * Level.levelWidth] != 0) {
            this.pos = this.oldPos;
        }
    }
    render(context) {
        context.fillStyle = "#11f";
        let isoPos = Coordinates.toIso(this.pos);
        context.fillRect(Viewport.isoPos().x + isoPos.x - 5, Viewport.isoPos().y + isoPos.y - 16, 10, 16);
        if (WorldConstants.debugOutput) {
            context.fillStyle = "#f00";
            let isoGoalPos = Coordinates.toIso(this.goalPos);
            context.fillRect(Viewport.isoPos().x + isoGoalPos.x, Viewport.isoPos().y + isoGoalPos.y, 5, 5);
        }
        let levelPos = Coordinates.getTileCoordinates(this.pos, 32);
    }
}
