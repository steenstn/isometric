class Player {
    private pos : Point;
    private goalPos : Point;
    private oldPos : Point;
    constructor() {
        this.pos = new Point(100,200);
        this.goalPos = this.pos;
        this.oldPos = this.pos;
    }

    setGoalPos(goal : Point) {
        this.goalPos = goal;
    }

    moveTowardsGoal() {
        if(Math.abs(this.pos.x - this.goalPos.x) < 5 && Math.abs(this.pos.y - this.goalPos.y) < 5) {
            return;
        }
        this.oldPos = new Point(this.pos.x, this.pos.y);
        
        if(this.goalPos.x > this.pos.x) {
            this.pos.x++;
        } else {
            this.pos.x--;
        }
        if(this.goalPos.y > this.pos.y) {
            this.pos.y++;
        } else {
            this.pos.y--;
        }
        
        let levelPos = Coordinates.getTileCoordinates(this.pos,32);
        if(Level.currentLevel[levelPos.x + levelPos.y*Level.levelWidth]!=0) {
            
            this.pos = this.oldPos;
        }
    }

    render(context : any) {
        context.fillStyle = "#11f";
        let isoPos = Coordinates.toIso(this.pos);
        context.fillRect(Viewport.isoPos().x + isoPos.x, Viewport.isoPos().y + isoPos.y, 10, 16);
        context.fillStyle = "#f00";
        let isoGoalPos = Coordinates.toIso(this.goalPos);
        context.fillRect(Viewport.isoPos().x + isoGoalPos.x, Viewport.isoPos().y + isoGoalPos.y, 5,5);
        let levelPos = Coordinates.getTileCoordinates(this.pos,32);
        
        context.fillText(Level.currentLevel[levelPos.x + levelPos.y*Level.levelWidth], 10, 10);
        
    }
}