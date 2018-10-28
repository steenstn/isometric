class Pathfinder {
    private frontier : Array<any>;
    cameFrom : Map<any, any>;
    private level : Array<any>;
    private levelWidth : number;

    constructor(level : Array<any>, levelWidth : number) {
        this.level = level;
        this.levelWidth = levelWidth;
    }

    findPath(start: Point, goal: Point) : Array<any>{
        this.frontier = [];
        this.cameFrom = new Map();

        this.frontier.push(start);
        this.cameFrom.set(start.x + start.y*this.levelWidth, null);

        while(this.frontier.length > 0) {
            let current = this.frontier.shift();
            if(current.x === goal.x && current.y === goal.y) {
                break;
            }
            let neighbours = this.getNeighbours(current);
            for(let i = 0; i < neighbours.length; i++) {
                if(!this.hasPoint(neighbours[i])) {
                    this.frontier.push(neighbours[i]);
                    this.cameFrom.set(neighbours[i].x + neighbours[i].y*this.levelWidth, current);
                }
            }
        }
        let path = []
        let c = goal;
        while(c && !(c.x === start.x && c.y === start.y)) {
            path.push(c);
            c = this.cameFrom.get(c.x+c.y*this.levelWidth);
        }
        return path;
    }

    private hasPoint(p : Point) {
        for (var value of this.cameFrom.values()) {
          if(value && value.x === p.x && value.y === p.y) {
            return true;
          }
        }
        return false;
      }

    private inBounds(p: Point) {
        return (p.x >=0 && p.x < this.levelWidth && p.y >= 0 && p.y < this.levelWidth);
    }

    private getNeighbours (p : Point) {
        if(!this.inBounds(p)) {
          return [];
        }
        var result = [];
          var n = new Point(p.x+1,p.y);
          if(this.isValidWalkingTile(n)) {
            result.push(n);
          }
          n = new Point(p.x-1,p.y);
          if(this.isValidWalkingTile(n)) {
            result.push(n);
          }
          n = new Point(p.x,p.y+1);
          if(this.isValidWalkingTile(n)) {
            result.push(n);
          }
          n = new Point(p.x,p.y-1);
          if(this.isValidWalkingTile(n)) {
            result.push(n);
          }
          // Diagonals
          n = new Point(p.x-1,p.y-1);
          if(this.isValidWalkingTile(n) && this.isValidDiagonal(n)) {
            result.push(n);
          }
          n = new Point(p.x+1,p.y-1);
          if(this.isValidWalkingTile(n) && this.isValidDiagonal(n)) {
            result.push(n);
          }
          n = new Point(p.x-1,p.y+1);
          if(this.isValidWalkingTile(n) && this.isValidDiagonal(n)) {
            result.push(n);
          }
          n = new Point(p.x-1,p.y-1);
          if(this.isValidWalkingTile(n) && this.isValidDiagonal(n)) {
            result.push(n);
          }
        return result;
      }
      
      private isValidWalkingTile(p: Point) {
        return !this.cameFrom.get(p.x+p.y*this.levelWidth) && this.inBounds(p) 
        && this.level[p.x+p.y*this.levelWidth]===0;
      }

      private isValidDiagonal(p : Point) {
        return this.level[p.x+1+p.y*this.levelWidth]===0 &&
          this.level[p.x-1+p.y*this.levelWidth]===0 &&
          this.level[p.x+(p.y+1)*this.levelWidth]===0 &&
          this.level[p.x+(p.y-1)*this.levelWidth]===0;
      
      }
}