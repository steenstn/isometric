class Viewport {
    static pos = new Vector(220,-220);
    static oldPos = new Vector(0,0);
    static width = 640;
    static height = 300;

  constructor() {
    Viewport.pos = new Vector(0,0);
    Viewport.oldPos = Viewport.pos;
  }

  static moveTo(x: number, y: number) {
    Viewport.oldPos = new Vector(Viewport.pos.x, Viewport.pos.y);
    Viewport.pos.x = Math.round(x);
    Viewport.pos.y = Math.round(y);
  }
  static isoPos() : Vector {
    return Coordinates.toIso(this.pos);
  }
}