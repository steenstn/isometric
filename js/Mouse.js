class Mouse {
    static getMousePos(canvas, evt, window) {
        var obj = canvas;
        var top = 0;
        var left = 0;
        while (obj && obj.tagName != 'body') {
            top += obj.offsetTop;
            left += obj.offsetLeft;
            obj = obj.offsetParent;
        }
        Mouse.x = (evt.clientX - left + window.pageXOffset) / 2 + 160;
        Mouse.y = (evt.clientY - top + window.pageYOffset) / 2;
    }
}
Mouse.isDown = false;
Mouse.click = 0;
