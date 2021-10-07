function kakudai() {
  console.log(1);
  var ga1 = document.getElementById("mini-pic").style.width = "100%";
}

// css でサイズを指定している場合,style.widthとする必要がある
// また数値の横に明確な単位も記入する事。ex "400px"など

const btn = document.getElementById("mini-pic");
btn.addEventListener("click", kakudai, false);