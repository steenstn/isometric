class Coordinates {
    static to2d(pt : Point) : Point {
        var tempPt = new Point(0, 0);
        tempPt.x = (2 * pt.y + pt.x) / 2;
        tempPt.y = (2 * pt.y - pt.x) / 2;
        return(tempPt);
    }
      
    static toIso(pt : Point) : Point {
        var tempPt= new Point(0,0);
        tempPt.x = pt.x - pt.y;
        tempPt.y = (pt.x + pt.y) / 2;
        return(tempPt);
      }
      
    static getTileCoordinates(pt : Point, tileHeight : number) : Point {    
        var tempPt = new Point(0, 0);
        tempPt.x = Math.floor(pt.x / tileHeight);
        tempPt.y = Math.floor(pt.y / tileHeight);
        return(tempPt);
    }
}