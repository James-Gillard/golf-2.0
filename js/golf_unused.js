
function stableford() {
    let shots = document.getElementById('stable-one').value;
    let strokes = document.getElementById('hole-1').value;
    let holeOneSF = document.getElementById('hole-one-sf').innerHTML;

    
    if (strokes === shots) {
        var x = 2;
    } else if (strokes === (shots - 1)) {
        var x = 3;
    } else if (strokes === (shots - 2)) {
        var x = 4;
    } else if (strokes === (shots - 3)) {
        var x = 5;
    } else if (strokes === (shots - 4)) {
        var x = 6;
    } else if (strokes === (shots - 5)) {
        var x = 7;
    } else if (strokes === (shots + 1)) {
        var x = 1;
    } else {
        var x = 0;
    }

    /*if (strokes === shots) {
        return 2
    } else if (strokes === (shots - 1)) {
        return 3
    } else if (strokes === (shots - 2)) {
        return 4
    } else if (strokes === (shots - 3)) {
        return 5
    } else if (strokes === (shots - 4)) {
        return 6
    } else if (strokes === (shots - 5)) {
        return 7
    } else if (strokes === (shots + 1)) {
        return 1
    } else {
        return 0
    }*/

    holeOneSF.innerHTML = 'x';

}
