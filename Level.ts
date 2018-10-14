class Level {
    static currentLevel = [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1];
    static levelWidth = 10;
    static tileset : any;
    static tileSize = 32;
    constructor() {}

    static loadTileset() {
        Level.tileset = new Image();
        Level.tileset.src = "sd.png";
    }

    static render(context : any) {
        for(var i = 0; i < Level.levelWidth; i++) {
            for(var j = 0; j < Level.levelWidth; j++) {
      
              var p = new Point(i*Level.tileSize, j*Level.tileSize);
              
              context.fillStyle = Level.currentLevel[i+j*Level.levelWidth] === 0 ? "#5af15a" : "#a0a0a0";
              if(Level.currentLevel[i+j*Level.levelWidth] === 3) {
                context.fillStyle = "#f00";
              }
            
            var pIso = Coordinates.toIso(p);
            context.drawImage(Level.tileset,Level.currentLevel[i+j*Level.levelWidth]*64,0, Level.tileSize*2,
                Level.tileSize, Viewport.isoPos().x+pIso.x-Level.tileSize,Viewport.isoPos().y+pIso.y, Level.tileSize*2, Level.tileSize);
            
            }
        }
    }
}