var Coordinates = (function () {
    function Coordinates() {
    }
    Coordinates.to2d = function (pt) {
        var tempPt = new Point(0, 0);
        tempPt.x = (2 * pt.y + pt.x) / 2;
        tempPt.y = (2 * pt.y - pt.x) / 2;
        return (tempPt);
    };
    Coordinates.toIso = function (pt) {
        var tempPt = new Point(0, 0);
        tempPt.x = pt.x - pt.y;
        tempPt.y = (pt.x + pt.y) / 2;
        return (tempPt);
    };
    Coordinates.getTileCoordinates = function (pt, tileHeight) {
        var tempPt = new Point(0, 0);
        tempPt.x = Math.floor(pt.x / tileHeight);
        tempPt.y = Math.floor(pt.y / tileHeight);
        return (tempPt);
    };
    Coordinates.inWorldBounds = function (pt) {
        return pt.x >= 0 && pt.x < WorldConstants.levelWidth && pt.y >= 0 && pt.y < WorldConstants.levelWidth;
    };
    return Coordinates;
}());
