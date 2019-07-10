var user_name =["太郎","花子","二郎"];
var score_arr =[0,0,0];
//user_nameとscore_arr に入っている場所を対応させる
//もしわかりにくければ ,配列を使わないでvar taro = 0　などとしてしまってもよいが callname()が使えないので注意


function give_score(who){
  if (who == 'taro'){
    score_arr[0] +=1;
    //配列の0番の値に1をたす
    document.getElementById("taro_score").innerHTML = score_arr[0];
    //htmlにスコアを表示する
  }
  else if (who == 'hanako') {
    score_arr[1] +=1;
    document.getElementById("hanako_score").innerHTML =score_arr[1];
  }
  else if (who == 'jiro') {
    score_arr[2] +=1;
    document.getElementById("jiro_score").innerHTML = score_arr[2];
  }
}

function call_name(){
  var callname = "";
  //名前を保存するための変数
  var tempscore = 0;
  //計算処理の時に前の値をとっておくための関数
  for (var i = 0; i <user_name.length;i++){
    //lengthは配列の個数分処理ができる
    if(callname == ""){
      //一番最初の処理 空っぽだと動かないので
      callname = user_name[i];
      tempscore = score_arr[i];
    }
    else {
      if (tempscore < score_arr[i]) {
        //前者のスコアよりも値が大きかったら...
        callname = user_name[i];
        //名前を置き換えて
        tempscore = score_arr[i];
        //点数を置き換える
      }
      else if (tempscore == score_arr[i]) {
        //点数が同じだったら
        callname = callname +"と"+ user_name[i];
        //〜とで複数人名前を代入
      }
    }
  }
  alert(callname + "で" + tempscore + "点")
  //名前と点数を表示する
}
