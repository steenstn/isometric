class Viewport {
    constructor() {
        Viewport.pos = new Vector(0, 0);
        Viewport.oldPos = Viewport.pos;
    }
    static moveTo(x, y) {
        Viewport.oldPos = new Vector(Viewport.pos.x, Viewport.pos.y);
        Viewport.pos.x = Math.round(x);
        Viewport.pos.y = Math.round(y);
    }
    static isoPos() {
        return Coordinates.toIso(this.pos);
    }
}
Viewport.pos = new Vector(220, -220);
Viewport.oldPos = new Vector(0, 0);
Viewport.width = 640;
Viewport.height = 300;
