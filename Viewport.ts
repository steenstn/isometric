class Viewport {
    static pos = new Point(0,0);
    static oldPos = new Point(0,0);
    static width = 640;
    static height = 300;

  constructor() {
    Viewport.pos = new Point(0,0);
    Viewport.oldPos = Viewport.pos;
  }

  static isoPos() : Point {
    let tempPt= new Point(0,0);
    tempPt.x = Viewport.pos.x - Viewport.pos.y;
    tempPt.y = (Viewport.pos.x + Viewport.pos.y) / 2;
    return(tempPt);
  }
}