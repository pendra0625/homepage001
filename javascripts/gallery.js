// function kakudai() {
//   console.log(1);
//   var ga1 = document.getElementById("mini-pic").style.width = "100%";
// }

// // css でサイズを指定している場合,style.widthとする必要がある
// // また数値の横に明確な単位も記入する事。ex "400px"など

// const btn = document.getElementById("mini-pic");
// btn.addEventListener("click", kakudai, false);

// スライダー

const imageTotalNumber = 10,
      mainImageElement = document.getElementById('mainImage'),
      imageListElement = document.getElementById('imagelist'),
      prevImageElement = document.getElementById('prevImage'),
      nextImageElement = document.getElementById('nextImage');

let currentSlideNumber = 1

mainImageElement.setAttribute('src', 'images/ga/img1.png');

function changeSlideStatus() {
  if (currentSlideNumber === 1) {
    prevImageElement.classList.add('inActive')
  } else {
    prevImageElement.classList.remove('inActive')
  }

  if (currentSlideNumber === imageTotalNumber) {
    nextImageElement.classList.add('inActive')
  } else {
    nextImageElement.classList.remove('inActive')
  }

  document.getElementById('currentSlideNumber').textContent = `${currentSlideNumber} / ${imageTotalNumber}`
}
changeSlideStatus()

for (let i = 0; i < imageTotalNumber; i++) {
  const liElement = document.createElement('li');
  liElement.style.backgroundImage = `url(images/ga/img${i + 1}.png)`

  liElement.addEventListener('click', () => {
    mainImageElement.setAttribute('src', `images/ga/img${i + 1}.png`)
    currentSlideNumber = i + 1
    changeSlideStatus()
  })

  imageListElement.appendChild(liElement)
}

prevImageElement.addEventListener('click', () => {
  if (currentSlideNumber !== 1) {
    currentSlideNumber--
    mainImageElement.setAttribute('src', `images/ga/img${currentSlideNumber}.png`)
    changeSlideStatus()
  }
})

nextImageElement.addEventListener('click', () => {
  if (currentSlideNumber !== imageTotalNumber) {
    currentSlideNumber++
    mainImageElement.setAttribute('src', `images/ga/img${currentSlideNumber}.png`)
    changeSlideStatus()
  }
})