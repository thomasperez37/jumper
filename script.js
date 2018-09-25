/* global $*/
var fallCheck = true;
var position1 = 0;
var position2 = 0;

$(document).ready(function() {
    setInterval(falling, 80);
    $("body").keydown(function(event) {
        //moves left
        if (event.which === 37) {
            $("#player").css("left", $("#player").offset().left - 18);
            console.log($("#player").offset().left);
            if ($("#player").offset().left < 0) {
                $("#player").css("left", $("#player").offset().left + 2);
            }
            fallCheck = true;
        }
        //moves right
        else if (event.which === 39) {
            $("#player").css("left", $("#player").offset().left + 2);
            fallCheck = true;
        }
        else if (event.which === 38) {
            $("#player").css("top", $("#player").offset().top - 144);
            fallCheck = true;
        }
        else {
            return;
        }
    });
    
});

function falling() {
    winnerCheck(position2, position1);
    checkCollision1();
    checkCollision2();
    checkCollision3();
    checkCollision4();
    checkCollision5();
    checkCollision6();    
    if (fallCheck) {
        position1 = $("#player").offset().top;
        position2 = $("#player").offset().left;
        $("#player").css("top", $("#player").offset().top + 2);
    } 
}

function checkCollision1() {
    var sideLeft1 = $("#player").offset().left;
    var left1 = $("#one").offset().left;
    var sideTop1 = $("#player").offset().top;
    var top1 = $("#one").offset().top;
    var sideRight1 = sideLeft1 + $("#player").width();
    var right1 = left1 + $("#one").width();
    var sideBottom1 = sideTop1 + $("#player").height();
    var bottom1 = top1 + $("#one").height();
    if(sideRight1 > left1 && sideLeft1 < right1 && sideBottom1 > top1 && sideTop1 < bottom1) {
        fallCheck = false;
        $("#player").css("top", position1);
        $("#player").css("left", position2);
    }
}

function checkCollision2() {
    var sideLeft2 = $("#player").offset().left;
    var left2 = $("#two").offset().left;
    var sideTop2 = $("#player").offset().top;
    var top2 = $("#two").offset().top;
    var sideRight2 = sideLeft2 + $("#player").width();
    var right2 = left2 + $("#two").width();
    var sideBottom2 = sideTop2 + $("#player").height();
    var bottom2 = top2 + $("#two").height();
    if(sideRight2 > left2 && sideLeft2 < right2 && sideBottom2 > top2 && sideTop2 < bottom2) {
        fallCheck = false;
        $("#player").css("top", position1);
        $("#player").css("left", position2);
    }
}

function checkCollision3() {
    var sideLeft3 = $("#player").offset().left;
    var left3 = $("#three").offset().left;
    var sideTop3 = $("#player").offset().top;
    var top3 = $("#three").offset().top;
    var sideRight3 = sideLeft3 + $("#player").width()
    var right3 = left3 + $("#three").width();
    var sideBottom3 = sideTop3 + $("#player").height();
    var bottom3 = top3 + $("#three").height();
    if(sideRight3 > left3 && sideLeft3 < right3 && sideBottom3 > top3 && sideTop3 < bottom3) {
        fallCheck = false;
        $("#player").css("top", position1);
        $("#player").css("left", position2);
    }
}

function checkCollision4() {
    var sideLeft4 = $("#player").offset().left;
    var left4 = $("#four").offset().left;
    var sideTop4 = $("#player").offset().top;
    var top4 = $("#four").offset().top;
    var sideRight4 = sideLeft4 + $("#player").width();
    var right4 = left4 + $("#four").width();
    var sideBottom4 = sideTop4 + $("#player").height();
    var bottom4 = top4 + $("#four").height();
    if(sideRight4 > left4 && sideLeft4 < right4 && sideBottom4 > top4 && sideTop4 < bottom4) {
        fallCheck = false;
        $("#player").css("top", position1);
        $("#player").css("left", position2);
    }
}

function checkCollision5() {
    var sideLeft5 = $("#player").offset().left;
    var left5 = $("#five").offset().left;
    var sideTop5 = $("#player").offset().top;
    var top5 = $("#five").offset().top;
    var sideRight5 = sideLeft5 + $("#player").width();
    var right5 = left5 + $("#five").width();
    var sideBottom5 = sideTop5 + $("#player").height();
    var bottom5 = top5 + $("#five").height();
    if(sideRight5 > left5 && sideLeft5 < right5 && sideBottom5 > top5 && sideTop5 < bottom5) {
        fallCheck = false;
        $("#player").css("top", position1);
        $("#player").css("left", position2);
    }
}

function checkCollision6() {
    var sideLeft6 = $("#player").offset().left;
    var left6 = $("#six").offset().left;
    var sideTop6 = $("#player").offset().top;
    var top6 = $("#six").offset().top;
    var sideRight6 = sideLeft6 + $("#player").width();
    var right6 = left6 + $("#six").width();
    var sideBottom6 = sideTop6 + $("#player").height();
    var bottom6 = top6 + $("#six").height();
    if(sideRight6 > left6 && sideLeft6 < right6 && sideBottom6 > top6 && sideTop6 < bottom6) {
        fallCheck = false;
        $("#player").css("top", position1);
        $("#player").css("left", position2);
    }
}

function winnerCheck(xPosition, yPosition) {
    if (xPosition >= 600 && yPosition >= 500) {
        $("body").css("background-color", "green");
        $("body").html("<h1>End Game</h1>");
        $("body").css("text-align", "center");
    }
}