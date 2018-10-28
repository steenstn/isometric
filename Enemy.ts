class Enemy {
    private pos : Point;

    constructor(pos : Point) {
        this.pos = pos;
    }

    render(context : any) {
        context.fillStyle = "#1ff";
        let isoPos = Coordinates.toIso(this.pos);
        context.fillRect(Viewport.isoPos().x + isoPos.x-5, Viewport.isoPos().y + isoPos.y-16, 10, 16);
        
    }
}