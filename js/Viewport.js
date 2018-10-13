var Viewport = (function () {
    function Viewport() {
        Viewport.pos = new Point(0, 0);
        Viewport.oldPos = Viewport.pos;
    }
    Viewport.isoPos = function () {
        var tempPt = new Point(0, 0);
        tempPt.x = Viewport.pos.x - Viewport.pos.y;
        tempPt.y = (Viewport.pos.x + Viewport.pos.y) / 2;
        return (tempPt);
    };
    Viewport.pos = new Point(0, 0);
    Viewport.oldPos = new Point(0, 0);
    Viewport.width = 640;
    Viewport.height = 300;
    return Viewport;
}());
