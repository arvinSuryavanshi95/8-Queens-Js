function allDisable() {
        document.getElementById("firstInterface").style.display = "block";
 }

function playNow() {
		document.getElementById("blur").style.display = "none";
		document.getElementById("playNowPopup").style.display = "none";
}
function okButton(){
		document.getElementById("gameLosePopup").style.display = "none";
        document.getElementById("blur").style.display = "none";
		document.getElementById("gameWinPopup").style.display = "none";
}

function blurr(){
        document.getElementById("blur").style.display = "block";
}

function closeFirstInterface() {
	    document.getElementById("firstInterface").style.display = "none";
}

function showPlayNowPop() {
        document.getElementById("playNowPopup").style.display = "block";
        document.getElementById("container").style.display = "none";
}
function pauseGame(){
	  document.getElementById("blur").style.display = "block";
	  document.getElementById("playNowPopup").style.display = "block";
}

function refresh(){
location.reload();
 }

function disableRightDiv(row, col) {
    var colVal = parseInt(col);
    for (var i = colVal + 1; i <= 8; i++) {
        document.getElementById(row + "_" + i).style.pointerEvents = "none";
        //document.getElementById(row + "_" + i).style.backgroundColor="pink";
    }
}

function disableLeftDiv(row, col) {
    var colVal = parseInt(col);
    for (var i = colVal - 1; i >= 1; i--) {
        document.getElementById(row + "_" + i).style.pointerEvents = "none";
      //document.getElementById(row + "_" + i).style.backgroundColor="pink";
    }
}

function disableColDownDiv(row, col) {
    var rowVal = parseInt(row);
    for (var j = rowVal + 1; j <= 8; j++) {
        document.getElementById(j + "_" + col).style.pointerEvents = "none";
      //document.getElementById(j + "_" + col).style.backgroundColor="pink";
    }
}

function disableColUpDiv(row, col) {
    var rowVal = parseInt(row);
    for (var j = rowVal - 1; j >= 1; j--) {
        document.getElementById(j + "_" + col).style.pointerEvents = "none";
      //document.getElementById(j + "_" + col).style.backgroundColor="pink";
    }
}

function disableUpLeft(row, col) { //upLeft Diagonal
    var rowVal = parseInt(row);
    var colVal = parseInt(col);
    for (let i = rowVal - 1, j = colVal - 1; i > 0 && j > 0; i--, j--) {
        document.getElementById(i + "_" + j).style.pointerEvents = "none";
      //document.getElementById(i + "_" + j).style.backgroundColor="pink";
    }
}

function disableUpRight(row, col) { //upRight Diagonal
    var rowVal = parseInt(row);
    var colVal = parseInt(col);
    for (let i = rowVal - 1, j = colVal + 1; i > 0 && j<=8; i--, j++) {
        document.getElementById(i + "_" + j).style.pointerEvents = "none";
      //document.getElementById(i + "_" + j).style.backgroundColor = "pink";
    }
}

function disableLeftDawn(row, col) { //downLeft Diagonal
    var rowVal = parseInt(row);
    var colVal = parseInt(col);
    for (let i = rowVal + 1, j = colVal - 1; i<=8 && j>0; i++, j--) {
         document.getElementById(i + "_" + j).style.pointerEvents = "none";
       //document.getElementById(i + "_" + j).style.backgroundColor = "pink";

    }
}


function disableRightDawn(row, col) { //downRight Diagonal
    var rowVal = parseInt(row);
    var colVal = parseInt(col);
    for (let i = rowVal + 1, j = colVal + 1; i<=8 &&  j<=8; i++, j++) {
         document.getElementById(i + "_" + j).style.pointerEvents = "none";
	   //document.getElementById(i + "_" + j).style.backgroundColor = "pink";

    }
}
//---------Time counter------------------>
var timer=null;
var timeLeft=120;//seconds

function updateTimer() {
	timeLeft=timeLeft-1;
	if(timeLeft>=0){
            document.getElementById("timer").innerHTML=timeLeft;
         }
    else {
	        document.getElementById("gameLosePopup").style.display = "block";
		   	document.getElementById("blur").style.display = "block";

           clearInterval(timer);
         }
   }

function start(){
	timer=setInterval(updateTimer,1000);
	updateTimer();
}
   function pause() {
      clearInterval(this.timer);
      this.status = 'Paused';
    }

//------------------------------------------->

var image;
var img;
var x1;
var id;
function show(id) {
    img = '<img id="image_' + id + '" width="50px" height="50px" src="images/queen1.png" >';
    var x1 = document.getElementById(id);
    var image = document.getElementById("image_" + id);
     if (image)
		{
            x1.innerHTML = " ";
        }
   else {
        x1.innerHTML = img;
        var row =id.split("_")[0];
        var col = id.split("_")[1];
        disableRightDiv(row, col);
        disableLeftDiv(row, col);
        disableColDownDiv(row, col);
        disableColUpDiv(row, col);
        disableUpLeft(row, col);
        disableUpRight(row, col);
        disableRightDawn(row, col);
		disableLeftDawn(row, col);
	    win();
    }
}

function win() {
  var count = 0;
  var row=1; 
  var col=1;
  while(row<=8){
	  var tempId=row+"_"+col;
	  var child=document.getElementById(tempId).childNodes;
	  console.log(child.length);
	
	  if (child.length>0)
	    {
		count++
	    }
	   if(count==8){
		document.getElementById("gameWinPopup").style.display = "block";
		document.getElementById("blur").style.display = "block";
        }
	   col++;
	   if(col==9){
		   row++;
		   col=1;
	   }
    }
}