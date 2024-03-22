// script.js 파일
let tarotData = { "tarotdata": [] }; // 초기화

window.onload = function() {
  fetchTarotData();
};

function fetchTarotData() {
    fetch('https://leekyeongjun.github.io/Tataro/Json/TarotInfo.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            tarotData = data;
            console.log('Tarot data loaded successfully');
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
};

function displayCardNameAndImage(id) {
    const card = tarotData.Deck.find(card => card.Id === id);
    const imagePath = `Deck/${card.Id}.jpg`; // 이미지 경로 동적 생성
    if (card) {
      document.getElementById('cardDisplay').innerHTML += `<div>${card.Name}</div><img src="${imagePath}" alt="${card.Name}" style="width:100px;"><br>`;
    }
     else {
        console.log('Card not found');
    }
  }

function displayCardByName(name) {
    const card = tarotData.Deck.find(card => card.Name === name);
    const display = document.getElementById('cardDisplay');
    if (card) {
        const imagePath = `Deck/${card.Id}.jpg`; // 이미지 경로 동적 생성
        display.innerHTML = `<div>${JSON.stringify(card, null, 2)}</div><img src="${imagePath}" alt="${card.Name}">`;
        
    } else {
        console.log('Card not found');
    }
}

function displayCardById(id) {
    const card = tarotData.Deck.find(card => card.Id === id);
    const display = document.getElementById('cardDisplay');
    if (card) {
        const imagePath = `Deck/${card.Id}.jpg`; // 이미지 경로 동적 생성
        display.innerHTML = `<div>${JSON.stringify(card, null, 2)}</div><img src="${imagePath}" alt="${card.Name}">`;
        
    } else {
        console.log('Card not found');
    }
}


  // 카테고리별 카드 출력 함수
function displayCardsByCategory(category) {
    document.getElementById('cardDisplay').innerHTML = ''; // 카드 표시 영역 초기화
    let startId, endId;

    switch(category) {
        case 'Major':
        startId = 0;
        endId = 21;
        break;
        case 'Cup':
        startId = 22;
        endId = 35;
        break;
        case 'Pentacle':
        startId = 36;
        endId = 49;
        break;
        case 'Sword':
        startId = 50;
        endId = 77;
        break;
        default:
        return; // 알 수 없는 카테고리의 경우 함수를 종료
    }

    for (let id = startId; id <= endId; id++) {
        displayCardNameAndImage(id);
    }
}
  