// Костыльный метод получения main
let mainClass = document.querySelector('.main');

// Получение коренного дива
let root = document.querySelector('.root');

// Создание списка элементов
let list = document.createElement('div');
list.className = 'list-wrapper';
mainClass.appendChild(list);

// Создание пунктов элементов
for (let i = 1; i < 4; i++) {
    let newElement = document.createElement('div'); 
    newElement.className = 'list-item';
    newElement.innerHTML = 'item' + i;
    list.appendChild(newElement);
}

// Добавление видимотси при нажатии
root.onclick = function() {
    list.classList.toggle('vision');
}



