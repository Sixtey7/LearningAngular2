var keyboardStream = Rx.Observable
    .fromEvent(document, 'keyup')
    .map(function (x) { return x.which; });
var cursorMovesStream = keyboardStream.filter(function (x) {
    return x > 36 && x < 41;
})
    .map(function (x) {
    var direction;
    switch (x) {
        case 37:
            direction = 'left';
            break;
        case 38:
            direction = 'up';
            break;
        case 39:
            direction = 'right';
            break;
        default:
            direction = 'down';
    }
    return direction;
});
cursorMovesStream.subscribe(function (e) { return console.log(e); });
