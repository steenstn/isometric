class Mouse {
    static x : number;
    static y : number;
    static isDown = false;
    static click = 0;

    static getMousePos(canvas: any, evt: any, window: any){
        var obj = canvas;
        var top = 0;
        var left = 0;
        while (obj && obj.tagName != 'body') {
            top += obj.offsetTop;
            left += obj.offsetLeft;
            obj = obj.offsetParent;
        }
    
        Mouse.x = (evt.clientX - left + window.pageXOffset)/2 + 160;
        Mouse.y = (evt.clientY - top + window.pageYOffset)/2;
    }
}