const diaryMonth = document.getElementById('ymd'),
      diaryMonthj = document.getElementById('ymd2'),
      pdiary = document.getElementById('prevdiary'),
      ndiary = document.getElementById('nextdiary'),
      phref1 = document.getElementById('prevhref1'),
      nhref1 = document.getElementById('nexthref1'),
      phref2 = document.getElementById('prevhref2'),
      nhref2 = document.getElementById('nexthref2')

var getPageTitle = document.title;
var ret = getPageTitle.replace("pendra HP diary", "")
// replace は ("変えたい文字", "挿入する文字") とできる
var result = ret.split('.');
// split で指定した文字で単語を配列に変える
var WeekChars = [ "(日)", "(月)", "(火)", "(水)", "(木)", "(金)", "(土)" ];
var userDate = new Date( result[0], result[1]-1, result[2] );

var pret = pdiary.innerHTML.replace('日', "")
var presult = pret.split('月')

var nret = ndiary.innerHTML.replace('日', "")
var nresult = nret.split('月')

function test() {
  console.log(1)
  // alert(ret)
  // alert(result)
  // alert(result[0])
  // alert(WeekChars[userDate.getDay()]);
  diaryMonth.innerHTML = ret;
  diaryMonthj.innerHTML = result[0] + "年" + result[1] + "月" + result[2] + "日" + WeekChars[userDate.getDay()]

  phref1.href = "../" + presult[0] + "/" + presult[1] + ".html"
  nhref1.href = "../" + nresult[0] + "/" + nresult[1] + ".html"

  phref2.href = "../" + presult[0] + "/" + presult[1] + ".html"
  nhref2.href = "../" + nresult[0] + "/" + nresult[1] + ".html"
}

test()