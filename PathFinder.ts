// Implemented with the help of https://www.redblobgames.com/pathfinding/a-star/introduction.html

class Pathfinder {
    private frontier : any;
    cameFrom : Map<any, any>;
    private costSoFar : Map<any, any>;
    private level : Array<any>;
    private levelWidth : number;

    constructor(level : Array<any>, levelWidth : number) {
        this.level = level;
        this.levelWidth = levelWidth;
        
    }

    findPath(start: Point, goal: Point) : Array<any>{
        this.frontier = new TinyQueue([], function (a: any, b:any) {
          return a.priority < b.priority ? -1 : a.priority > b.priority ? 1 : 0;
        });
        this.cameFrom = new Map();
        this.costSoFar = new Map();

        this.frontier.push({point: start, priority: 0});
        
        this.cameFrom.set(start.x + start.y*this.levelWidth, null);
        this.costSoFar.set(start.x + start.y*this.levelWidth, 0);
        
        while(this.frontier.length > 0) {
            let current = this.frontier.pop().point;
            if(current.x === goal.x && current.y === goal.y) {
                break;
            }

            let neighbours = this.getNeighbours(current);
            for(let i = 0; i < neighbours.length; i++) {
                var newCost = this.costSoFar.get(current.x + current.y*this.levelWidth) ? this.costSoFar.get(current.x + current.y*this.levelWidth) + 1 : 1;
                
                if(!this.hasPoint(neighbours[i]) || newCost < this.costSoFar[neighbours[i].x + neighbours[i].y*this.levelWidth]) {
                    this.costSoFar.set(neighbours[i].x + neighbours[i].y*this.levelWidth, newCost);
                    var prio = newCost + this.heuristic(goal, neighbours[i]);
                    
                    this.frontier.push({point: neighbours[i], priority: prio });
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
        for (var value of this.costSoFar.values()) {
          if(value && value.x === p.x && value.y === p.y) {
            return true;
          }
        }
        return false;
      }

    private inBounds(p: Point) {
        return (p.x >=0 && p.x < this.levelWidth && p.y >= 0 && p.y < this.levelWidth);
    }

    private heuristic(a: Point, b: Point) {
      return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
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