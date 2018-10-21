class Viewport {
    static pos = new Point(200,-30);
    static oldPos = new Point(0,0);
    static width = 640;
    static height = 300;

  constructor() {
    Viewport.pos = new Point(0,0);
    Viewport.oldPos = Viewport.pos;
  }

  static isoPos() : Point {
    return Coordinates.toIso(this.pos);
  }
}