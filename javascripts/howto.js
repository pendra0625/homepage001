const diaryMonth = document.getElementById('ymd'),
      diaryMonthj = document.getElementById('ymd2'),
      pdiary = document.getElementById('prevdiary'),
      ndiary = document.getElementById('nextdiary'),
      phref1 = document.getElementById('prevhref1'),
      nhref1 = document.getElementById('nexthref1'),
      phref2 = document.getElementById('prevhref2'),
      nhref2 = document.getElementById('nexthref2')

var getPageTitle = document.title;
var result = getPageTitle.replace(/[^0-9]/g, "")
// replace は ("変えたい文字", "挿入する文字") とできる
// split で指定した文字で単語を配列に変える

var pret = pdiary.innerHTML.replace(/[^0-9]/g, "")

var nret = ndiary.innerHTML.replace(/[^0-9]/g, "")

function test() {
  console.log(result)
  diaryMonth.innerHTML = result;
  diaryMonthj.innerHTML = result;
  // alert(ret)
  // alert(result)
  // alert(result[0])
  // alert(WeekChars[userDate.getDay()]);

  phref1.href = pret + ".html"
  nhref1.href = nret + ".html"

  phref2.href = pret + ".html"
  nhref2.href = nret + ".html"
}

test()