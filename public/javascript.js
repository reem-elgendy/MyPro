var flag= false;
var playerTurn=1;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
while(!flag){
  var a=getRndInteger(1, 6);
  var b=getRndInteger(1, 6);
 var p1= [(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)) , (getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6))];
$("player1").update(p1);
var p2= [(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)) , (getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6))];
$("player2").update(p2);
var p3= [(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)) , (getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6))];
$("player3").update(p3);
var p4= [(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)) , (getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6)),(getRndInteger(1,6),getRndInteger(1,6))];
$("player4").update(p4);
}
function change();
{
  var textBox =
  if(playerTurn<4){
    playerturn++;
  }
          else{
            playerturn=1;
          }
          $("PlayersTurn").update(playerturn);

}
function move();
{
  var x = document.getElementById("myNumber").value;

}
