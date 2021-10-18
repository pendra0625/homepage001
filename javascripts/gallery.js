// function kakudai() {
//   console.log(1);
//   var ga1 = document.getElementById("mini-pic").style.width = "100%";
// }

// // css でサイズを指定している場合,style.widthとする必要がある
// // また数値の横に明確な単位も記入する事。ex "400px"など

// const btn = document.getElementById("mini-pic");
// btn.addEventListener("click", kakudai, false);

// スライダー

const imageTotalNumber = 10, // 画像の最大個数
      mainImageElement = document.getElementById('mainImage'), // 画像を表示する部分
      imageListElement = document.getElementById('imagelist'), // ミニ画像を表示する部分
      prevImageElement = document.getElementById('prevImage'), // 前の画像
      nextImageElement = document.getElementById('nextImage'); // 次の画像

let currentSlideNumber = 1 // 現在のスライドナンバーの数字

mainImageElement.setAttribute('src', 'images/ga/img1.png'); // src を指定のid位置に加え、中身を記述

function changeSlideStatus() {
  if (currentSlideNumber === 1) { // 現在の位置が始めり(1)の時、以下の文を実行する
    prevImageElement.classList.add('inActive') // classに inActive を加える。classは複数の加える事ができる。
  } else {
    prevImageElement.classList.remove('inActive') // それ以外の時、inActiveのclassを外す。
  }

  if (currentSlideNumber === imageTotalNumber) { // 現在位置がトータルの数と一致した時以下の文を実行する
    nextImageElement.classList.add('inActive') // inActive のclassは、選択できない様にするものらしい
  } else {
    nextImageElement.classList.remove('inActive') // それ以外では inActive を解除する
  }

  document.getElementById('currentSlideNumber').textContent = `${currentSlideNumber} / ${imageTotalNumber}` // 選択画像の下に現在の番号を表示
}
changeSlideStatus() // 上に書いた文を実行している

for (let i = 0; i < imageTotalNumber; i++) { // ミニ画像の表示に関わるもの
  const liElement = document.createElement('li');
  liElement.style.backgroundImage = `url(images/ga/img${i + 1}.png)`

  liElement.addEventListener('mouseover', () => {
    mainImageElement.setAttribute('src', `images/ga/img${i + 1}.png`)
    currentSlideNumber = i + 1
    changeSlideStatus()
  })

  imageListElement.appendChild(liElement)
}

prevImageElement.addEventListener('click', () => { // mainの画像の横の < の挙動に関わる記述
  if (currentSlideNumber !== 1) {
    currentSlideNumber--
    mainImageElement.setAttribute('src', `images/ga/img${currentSlideNumber}.png`)
    changeSlideStatus()
  }
})

nextImageElement.addEventListener('click', () => { // mainの画像の横の > の挙動に関わる記述
  if (currentSlideNumber !== imageTotalNumber) {
    currentSlideNumber++
    mainImageElement.setAttribute('src', `images/ga/img${currentSlideNumber}.png`)
    changeSlideStatus()
  }
})