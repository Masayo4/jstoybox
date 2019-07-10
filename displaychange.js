var red_flag = 1;
var yellow_flag = 0;
var blue_flag =0;

/*
flagを切り替えることによって表示/非表示を切り替える
ex)
flagに0が入っている時は表示して,flagに1を代入
flagに1が入っている時は非表示にして,flagに0を代入する
*/

function red_change(){
  if (red_flag == 0) {
    document.getElementById('red').style.display = "block";
    //これで表示
    red_flag = 1;
    //flagの切り替え
  }
  else {
    document.getElementById('red').style.display = "none";
    //これで非表示
    red_flag =0;
    //flagの切り替え
  }
}

function yellow_change(){
  if (yellow_flag == 0) {
    document.getElementById('yellow').style.display = "block";
    yellow_flag = 1;
  }
  else {
    document.getElementById('yellow').style.display = "none";
    yellow_flag =0;
  }
}

function blue_change(){
  if (blue_flag == 0) {
    document.getElementById('blue').style.display = "block";
    blue_flag = 1;
  }
  else {
    document.getElementById('blue').style.display = "none";
    blue_flag =0;
  }
}
