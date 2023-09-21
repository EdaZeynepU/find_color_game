

$(document).ready(
    function () {
    var redValue = 0;
    var greenValue = 0;
    var blueValue = 0;
    var passColor = 3;
    var totalPoints = 0;
    var targetColor="rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
    $("#target-color").css("background-color",targetColor);
    $("#game-result").hide();

    $.adjustcolor = function () {
        var clr="rgb("+$("#color-red-range").val()+","+$("#color-green-range").val()+","+$("#color-blue-range").val()+")";
        if (clr==targetColor) {
            $.calcPoints()
        }
        $("#input-color").css("background-color",clr);
    },
    $.funcRed = function (value) {
        //adjust inputs next 3 line
        redValue = value;    
        $("#color-red-range").val(value);
        $("#number-input-red").val(value);

        $("#color-red").text(value);
        $.adjustcolor();
    },
    $.funcGreen = function (value) {
        greenValue = value;    
        $("#color-green-range").val(value);
        $("#number-input-green").val(value);

        $("#color-green").text(value)
        $.adjustcolor();
    },
    $.funcBlue = function (value) {
        blueValue = value;    
        $("#color-blue-range").val(value);
        $("#number-input-blue").val(value);

        $("#color-blue").text(value)
        $.adjustcolor();
    },
    $.calcPoints = function () {
        const targetColorLst=targetColor.substring(4,targetColor.length-1).split(",");
        const difference=Math.abs(redValue-targetColorLst[0])+Math.abs(greenValue-targetColorLst[1])+Math.abs(blueValue-targetColorLst[2]);
        const points = difference>20 ? 0 : 20-difference;
        $("#input-color-inputs").fadeOut();
        $("#nav").fadeOut();
        $("#target-color-result").text(targetColor);
        $("#target-color-points").text(points);
        $("#input-color-result").text(`rgb(${redValue},${greenValue},${blueValue})`);
        $("#game-result").fadeIn();
        $("#total-saved-color").text(parseInt($("#total-saved-color").text())+1);
        $("#total-points").text(totalPoints+=points);
    },
    $.newGame = function () {
        $("#game-result").fadeOut();//if it happens in result side  
        targetColor="rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
        $("#target-color").css("background-color",targetColor);
        $("#input-color-inputs").fadeIn();
        $("#nav").fadeIn();
        $.resetInputs();
    },
    $.resetInputs = function () {
        redValue=0;
        blueValue=0;
        greenValue=0;
        $(".number-input").val(0);
        $(".range-input").val(0);
        $.adjustcolor();
    },
    $.passColorFunc = function () {
        if (passColor>0) {
            $.newGame();
            passColor-=1;
            $("#pass-count").text(passColor);
        }
    }
    },
    $.youWin = function () {
        // $("#input-color-inputs").fadeOut();
    } 
);

// "rgb("+$("#color-red")+","+$("#color-green")+","+$("#color-blue")+")"