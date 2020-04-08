export default class App {
  constructor() {
    this.state = {
      size: '3x3',
    };    
  }
  
  getTemplate() {
    return `<main class="wrapper">
    <div class="main-buttons">
      <button class="main-buttons__button button">Размешать и начать</button>
      <button class="main-buttons__button main-buttons__button--stop button">Стоп</button>
      <button class="main-buttons__button button">Сохранить</button>
      <button class="main-buttons__button button">Результаты</button>
    </div>
    <p class="game-status">
      <span class="game-status__moves-label">Ходов</span>
      <span class="game-status__moves-amount">0</span>
      <span class="game-status__time-label">Время</span>
      <span class="game-status__time-min"></span> :
      <span class="game-status__time-sec"></span>
    </p>
    <div class="game game--${this.state.size}">
    </div>
    <p class="game-size">
      <span class="game-size__label">Размер поля</span>
      <span class="game-size__value">${this.state.size}</span>
    </p>
    <div class="size-buttons">
      <span class="size-buttons__label">Другие размеры</span>
      <button class="size-buttons__button button">3x3</button>
      <button class="size-buttons__button button">4x4</button>
      <button class="size-buttons__button button">5x5</button>
      <button class="size-buttons__button button">6x6</button>
      <button class="size-buttons__button button">7x7</button>
      <button class="size-buttons__button button">8x8</button>
    </div>`;
  }

  getCellTemplate(data) {
    return `<div class="game__cell"><span class="game__cell-content" draggable="true">${data}</span></div>`;
  }

  getEmptyCellTemplate() {
    return `<div class="game__cell"></div>`;
  }

  // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;

      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }
  
  getGameGridElements() {
    let elementsValue = Math.pow(this.state.size[0], 2);
    const arrayOfCellValue = [];

    for (let i = 1; i < elementsValue; i++) {
      arrayOfCellValue.push(i);       
    }

    const shuffleElements = this.shuffle(arrayOfCellValue);
    const elementsTemplate = document.createDocumentFragment();

    shuffleElements.forEach((element) => {
      const cellTemplate = this.getCellTemplate(element);      
      const cell = this.createElement(cellTemplate);
      elementsTemplate.appendChild(cell);
    });
    
    const emptyCell = this.createElement(this.getEmptyCellTemplate());
    elementsTemplate.appendChild(emptyCell);

    return elementsTemplate;
  }

  createElement(data) {
    const template = data;
    const newElement = document.createElement('template');
    newElement.innerHTML = template;
    return newElement.content.children[0];
  }

  moveHandler() {
    const gameGrid = document.querySelector('.game');
    const cells = document.querySelectorAll('.game__cell');
    let dragElement = null;
    let cell = null;
    
    function dragStart({ target }) {
      dragElement = target.cloneNode(true);
      cell = target.parentNode;

      setTimeout(() => {
        target.classList.add('invisible');
      }, 0);      
    }

    function dragEnd() {
    }

    function dragOver(event) {
      event.preventDefault();
    }

    function dragEnter(event) {
      event.preventDefault();
      const { target } = event;
      target.classList.add('hovered');
    }

    function dragLeave({ target }) {
      target.classList.remove('hovered');
    }
    
    function dragDrop({ target }) {
      target.classList.remove('hovered');
      target.appendChild(dragElement);
      cell.innerHTML = '';
    }

    for(const cell of cells) {
      cell.addEventListener('dragover', dragOver);
      cell.addEventListener('dragenter', dragEnter);
      cell.addEventListener('dragleave', dragLeave);
      cell.addEventListener('drop', dragDrop);
    }

    gameGrid.addEventListener('dragstart', dragStart);
    gameGrid.addEventListener('dragend', dragEnd);
  }

  start() {
    const appTemplate = this.getTemplate();
    const app = this.createElement(appTemplate);  
    const gridWrapper = app.querySelector('.game');  
    const gridCells = this.getGameGridElements();

    gridWrapper.appendChild(gridCells);
    document.body.appendChild(app);

    this.moveHandler();
  }
}
