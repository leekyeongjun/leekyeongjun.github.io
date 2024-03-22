<!DOCTYPE html>
<html lang="kt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tarot Data Viewer</title>
<style>
    /* 여기에 CSS 스타일을 추가하세요 */
    .tarot-data {
        white-space: pre-wrap; /* JSON 데이터를 보기 좋게 출력하기 위해 */
    }
</style>
</head>
<body>
    <input type="number" id="cardIdInput" placeholder="Enter card ID">
    <button onclick="displayCardById(parseInt(document.getElementById('cardIdInput').value))">Display by ID</button>
    </div>

    <div>
    <input type="text" id="cardNameInput" placeholder="Enter card Name">
    <button onclick="displayCardByName(document.getElementById('cardNameInput').value)">Display by Name</button>
    </div>

<!-- 카테고리 선택 콤보박스 -->
    <select id="categorySelect" onchange="displayCardsByCategory(this.value)">
    <option value="">카드 카테고리를 선택하세요</option>
    <option value="Major">Major</option>
    <option value="Cup">Cup</option>
    <option value="Pentacle">Pentacle</option>
    <option value="Sword">Sword</option>
    </select>

    <div id="cardDisplay"></div>

<script src="Js/script.js"></script>
</body>
</html>