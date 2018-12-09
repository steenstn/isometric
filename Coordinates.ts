class Coordinates {
    static to2d(pt : Vector) : Vector {
        var tempPt = new Vector(0, 0);
        tempPt.x = (2 * pt.y + pt.x) / 2;
        tempPt.y = (2 * pt.y - pt.x) / 2;
        return(tempPt);
    }
      
    static toIso(pt : Vector) : Vector {
        var tempPt= new Vector(0,0);
        tempPt.x = pt.x - pt.y;
        tempPt.y = (pt.x + pt.y) / 2;
        return(tempPt);
      }
      
    static getTileCoordinates(pt : Vector, tileHeight : number) : Vector {    
        var tempPt = new Vector(0, 0);
        tempPt.x = Math.floor(pt.x / tileHeight);
        tempPt.y = Math.floor(pt.y / tileHeight);
        return(tempPt);
    }
    static inWorldBounds(pt : Vector) : boolean {
        return pt.x >=0 && pt.x < Level.levelWidth && pt.y >= 0 && pt.y < Level.levelWidth;
    }
}