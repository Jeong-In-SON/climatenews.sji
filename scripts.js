function subscribeAlert() {
  alert("의견을 주셔서 감사합니다!");
}

function openPopup(url, position = 'left') {
  const left = position === 'left' ? 100 : window.innerWidth / 2;
  const top = 200;
  window.open(url, '_blank', `width=600,height=500,top=${top},left=${left}`);
}

document.addEventListener('DOMContentLoaded', function () {
  // 이미지 팝업
  const droughtImg = document.querySelector('img[alt="가뭄 이미지"]');
  const pollutionImg = document.querySelector('img[alt="대기오염 이미지"]');

  if (droughtImg) {
    droughtImg.addEventListener('click', function () {
      openPopup("https://www.bbc.com/korean/articles/ce8dypkxl8do#:~:text=1980", 'left');
    });
  }

  if (pollutionImg) {
    pollutionImg.addEventListener('click', function () {
      openPopup("https://www.hkbs.co.kr/news/articleView.html?idxno=755520#:", 'right');
    });
  }

  // 버튼 토글
  document.getElementById('survey-btn').addEventListener('click', function () {
    document.getElementById('survey-form').style.display = 'block';
    document.getElementById('actions-list').style.display = 'none';
  });

  document.getElementById('actions-btn').addEventListener('click', function () {
    document.getElementById('survey-form').style.display = 'none';
    document.getElementById('actions-list').style.display = 'block';
  });

  // ✅ 녹색/흑백 세상 클릭 시 헤더 배경 변경
  const greenWorld = document.getElementById('green-world');
  const grayWorld = document.getElementById('gray-world');

  if (greenWorld) {
    greenWorld.addEventListener('click', function () {
      document.querySelector('header').style.backgroundColor = 'green';
    });
  }

  if (grayWorld) {
    grayWorld.addEventListener('click', function () {
      document.querySelector('header').style.backgroundColor = 'gray';
    });
  }
});