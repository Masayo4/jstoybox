var text_index = 0;
var text_arr = ["次","次の次","最後"];
var show_text = "";

function textshow(){
  show_text = document.getElementById('text').innerHTML;
  show_text = show_text + "<p>"+text_arr[text_index]+"</p>";
  //ビスケットの話をうまく使うことができる 一気に出すんじゃなくて,クリックごとに次へ行くようにした
  text_index = text_index+1;
  if (text_index == text_arr.length) {
    show_text = show_text + "<p>終わり！！</p>"
    document.getElementById('text_btn').disabled = "disabled";
    //ボタンの無効化
    document.getElementById('page_next_btn').disabled = "";
    //ボタンの有効化
  }
  document.getElementById('text').innerHTML= show_text;
}
