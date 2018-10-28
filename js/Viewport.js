class Viewport {
    constructor() {
        Viewport.pos = new Point(0, 0);
        Viewport.oldPos = Viewport.pos;
    }
    static isoPos() {
        return Coordinates.toIso(this.pos);
    }
}
Viewport.pos = new Point(200, -30);
Viewport.oldPos = new Point(0, 0);
Viewport.width = 640;
Viewport.height = 300;
