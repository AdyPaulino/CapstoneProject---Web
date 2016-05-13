var sequence = 0;

$(document).ready(function(){
    animateDevice();
});

function animateDevice() {
    var newq = makeNewPosition(sequence);
    
    $('rect').attr('x', newq[0]);      
    $('#pat1').attr('x', $("#rect1").attr('x'));
    $('rect').attr('y', newq[1]);      
    $('#pat1').attr('y', $("#rect1").attr('y'));
    
    sequence++;
};

function makeNewPosition(sequence){
    
    var coordinates = [];
    coordinates.push([1,216]);
    coordinates.push([240,45]);
    coordinates.push([480,216]);
    coordinates.push([387,495]);
    coordinates.push([96,495]);
    coordinates.push([1,216]);
    
    //get x and y from coordinates
    var x = 0;
    var y = 0;
    var xy;
    if (sequence < coordinates.length){
        xy = coordinates[sequence];
        x = xy[0];
        y = xy[1];
    } else {
        window.sequence = 0;
    }
    return [x,y];    
    
}
