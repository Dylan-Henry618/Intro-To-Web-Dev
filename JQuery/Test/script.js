console.log("Script is running");

//window.onload = draw();

//code adapted from http://www.onlywebpro.com/2013/01/10/create-html5-canvas-drawing-board-within-5-minutes/

window.onload = function() {
    console.log("Creating art!");
    //var canvas = $("#drawingZone");
    var canvas = document.getElementById("drawingZone");
    var brushColor = "#FF0000";

    if (canvas) {
        console.log("Canvas has been grabbed");
        var brushPressed = false;
        var ctx = canvas.getContext("2d");
        var canvasX, canvasY;
        ctx.brushWidth = 5;

        $(canvas).mousedown(function(e) {
            brushPressed = true;
            ctx.beginPath();
            canvasX = e.pageX - canvas.offsetLeft;
            canvasY = e.pageY - canvas.offsetTop;
            ctx.moveTo(canvasX, canvasY);
        })

        $(canvas).mousemove(function(e) {
            if (brushPressed != false) {
                canvasX = e.pageX - canvas.offsetLeft;
                canvasY = e.pageY - canvas.offsetTop;
                ctx.lineTo(canvasX, canvasY);
                ctx.strokeStyle = brushColor;
                ctx.stroke();
            }
        })

        $(canvas).mouseup(function(e) {
            brushPressed = false;
            ctx.closePath();
        })
    }
}

  $(document).ready(function(){
    $( "#dialog" ).dialog({ autoOpen: false });
  $( "#Submitbtn" ).click(function() {
    $( "#dialog" ).dialog( "open" );
    $("#dialog").css("background-color", "grey");
    $("#dialog").css("font-size", "20px");
});
});

    $('#Yes').click(function() {
      location.reload();
    })
