class Level {
    static currentLevel = [0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1];
    static visibleArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        
    static levelWidth = 20;
    static tileset : any;
    static tileSize = 32;
    static buildings : any;
    constructor() {}

    static loadTileset() {
        Level.tileset = new Image();
        Level.tileset.src = "sd.png";

        Level.buildings = new Image();
        Level.buildings.src = "buildings.png";
    }

    static checkPos(p : Point) {
        let tilePos = Coordinates.getTileCoordinates(p,Level.tileSize);
        return this.currentLevel[Math.floor(tilePos.x)+Math.floor(tilePos.y)*Level.levelWidth]===1
    }
    static doFov(player: Player, x:number, y:number) {
        let ox = player.getPos().x+0.1;
        let oy = player.getPos().y+0.1;
        for(let j = 0; j < 150; j++) {
            let levelPos = new Point(ox, oy);
            let tilePos = Coordinates.getTileCoordinates(levelPos,Level.tileSize);
            
            let delta = 2
            if(this.checkPos(new Point(ox, oy)) ||
               this.checkPos(new Point(ox+delta, oy)) ||
               this.checkPos(new Point(ox-delta, oy)) ||
               this.checkPos(new Point(ox, oy+delta)) ||
               this.checkPos(new Point(ox, oy-delta)) ){
                return;
            }
            Level.visibleArray[Math.floor(tilePos.x)+Math.floor(tilePos.y)*Level.levelWidth] = 1;
            
            ox+=x;
            oy+=y;
        }
    }
    static render(context : any, player: Player, mp: Point) {
        
        this.visibleArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let x, y;
        for(let i = 0; i < 360; i++) {
            x = Math.cos(i*0.0175);
            y = Math.sin(i*0.0175);
            Level.doFov(player,x,y);
        }
        for(var i = 0; i < Level.levelWidth; i++) {
            for(var j = 0; j < Level.levelWidth; j++) {
      
              var p = new Point(i*Level.tileSize, j*Level.tileSize);
              
             
            
            var pIso = Coordinates.toIso(p);
            context.drawImage(Level.tileset,Level.currentLevel[i+j*Level.levelWidth]*64,0, Level.tileSize*2,
                Level.tileSize, Viewport.isoPos().x+pIso.x-Level.tileSize,Viewport.isoPos().y+pIso.y, Level.tileSize*2, Level.tileSize);
            if(mp.x === i && mp.y === j) {
                context.fillStyle = "rgba(255,255,255, 0.5)";
                Level.drawTile(context,new Point(mp.x*Level.tileSize, mp.y*Level.tileSize), Level.tileSize, Level.tileSize);
            }  
            if(Level.currentLevel[i+j*Level.levelWidth] === 1) {
                context.drawImage(Level.buildings,64,0, Level.tileSize*4,
                    Level.tileSize*4, Viewport.isoPos().x+pIso.x-Level.tileSize,Viewport.isoPos().y+pIso.y-Level.tileSize, Level.tileSize*4, Level.tileSize*4);
        
            }
            context.fillStyle = "rgba(200,255,200, 0.5)";
                
            if(Level.visibleArray[i+j*Level.levelWidth]===1) {
               
                Level.drawTile(context,new Point(i*Level.tileSize, j*Level.tileSize), Level.tileSize, Level.tileSize);
            
            }
                if(player.getLevelCoordinates().x === i && player.getLevelCoordinates().y === j) {
                    player.render(context);
                }
            }
            
        }
        
    }

    
    private static drawTile(ctx : any, p : Point,width : number,height : number) {
    ctx.beginPath();
    var newP = Coordinates.toIso(p);
    ctx.moveTo(Math.round(Viewport.isoPos().x + newP.x),Math.round(Viewport.isoPos().y + newP.y));
    var p2 = Coordinates.toIso(new Point(p.x+width, p.y));
    ctx.lineTo(Math.round(Viewport.isoPos().x + p2.x),Math.round(Viewport.isoPos().y + p2.y));
    var p3 = Coordinates.toIso(new Point(p.x+width, p.y+height));
    ctx.lineTo(Math.round(Viewport.isoPos().x + p3.x), Math.round(Viewport.isoPos().y + p3.y));
    var p4 = Coordinates.toIso(new Point(p.x, p.y+height));
    ctx.lineTo(Math.round(Viewport.isoPos().x + p4.x), Math.round(Viewport.isoPos().y + p4.y));
    ctx.closePath();
    ctx.fill();
  }
  
}