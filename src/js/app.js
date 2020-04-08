import UTILS from './utils';

export default class App {
  constructor() {
    this.state = {
      size: '4x4',
      counter: 0,
      time: {
        min: '00',
        sec: '00'
      }
    };
    this.gameKeys = [
      '012345678',
      '123456780',
      '147258360',
      '741852063',
      '761852043',
      '0123456789101112131415',
      '1234567891011121314150',
      '1234567891011121314151617181920212223240',
      '0123456789101112131415161718192021222324',
      '01234567891011121314151617181920212223242526272829303132333435',
      '12345678910111213141516171819202122232425262728293031323334350',
      '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748',
      '1234567891011121314151617181920212223242526272829303132333435363738394041424344454647480',
      '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263',
      '1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162630',
    ]    
  }
  
  getTemplate() {
    return `<main class="wrapper">
    <div class="main-buttons">
      <button id="restart" class="main-buttons__button button">Размешать и начать</button>
      <button class="main-buttons__button main-buttons__button--stop button">Стоп</button>
      <button class="main-buttons__button button">Сохранить</button>
      <button id="results" class="main-buttons__button button">Результаты</button>
    </div>
    <p class="game-status">
      <span class="game-status__moves-label">Ходов</span>
      <span class="game-status__moves-amount">0</span>
      <span class="game-status__time-label">Время</span>
      <span class="game-status__time-min">${this.state.time.min}</span> :
      <span class="game-status__time-sec">${this.state.time.sec}</span>
    </p>
    <div class="game-wrapper"></div>    
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

  getGameGridTemplate() {
    return `<div class="game game--${this.state.size}"></div>`;
  }

  getCellTemplate(data) {
    return `<div class="game__cell"><span class="game__cell-content" draggable="true">${data}</span></div>`;
  }

  getEmptyCellTemplate() {
    return `<div class="game__cell empty"></div>`;
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
    let active = null;
    
    function dragStart({ target }) {
      active = target;
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
      const { target } = event;
      if (!target.classList.contains('empty')) return;
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

      if (!target.classList.contains('empty')) {
        active.classList.remove('invisible');
        return;
      }

      target.appendChild(dragElement);      
      cell.innerHTML = '';

      target.classList.remove('empty');
      cell.classList.add('empty');

      this.increaseCounter();
      this.checkGame();
    }

    for(const cell of cells) {
      cell.addEventListener('dragover', dragOver);
      cell.addEventListener('dragenter', dragEnter);
      cell.addEventListener('dragleave', dragLeave);
      cell.addEventListener('drop', dragDrop.bind(this));
    }

    gameGrid.addEventListener('dragstart', dragStart);
    gameGrid.addEventListener('dragend', dragEnd);
  }
  
  increaseCounter() {
    const counter = document.querySelector('.game-status__moves-amount');

    this.state.counter += 1;
    counter.innerHTML = this.state.counter;
  }

  switchGridSize() {
    const buttonWrapper = document.querySelector('.size-buttons');    

    function switchSize ({ target }) {
      if (!target.classList.contains('button')) return;

      const gameSize = document.querySelector('.game-size__value');
      const gameWrapper = document.querySelector('.game-wrapper');

      const currentValue = target.innerHTML;

      this.state.size = currentValue;
      gameSize.innerHTML = target.innerHTML;
      gameWrapper.innerHTML = '';

      const gridWrapper = this.createElement(this.getGameGridTemplate());
      const gridCells = this.getGameGridElements();

      gridWrapper.appendChild(gridCells);
      gameWrapper.appendChild(gridWrapper);
      
      this.resetCounter();
      this.resetTime();
      this.moveHandler();
    }

    buttonWrapper.addEventListener('click', switchSize.bind(this));
  }

  resetCounter() {    
    const counter = document.querySelector('.game-status__moves-amount');
    this.state.counter = 0;
    counter.innerHTML = this.state.counter;
  }

  resetTime() {    
    const min = document.querySelector('.game-status__time-min');
    const sec = document.querySelector('.game-status__time-sec');

    this.state.time.min = '00';
    this.state.time.sec = '00';

    min.innerHTML = this.state.time.min;
    sec.innerHTML = this.state.time.sec;
  }
  
  onButtonClick() {
    function onClick({ target }) {
      if (target.id === 'restart') {
        document.body.innerHTML = '';
        this.state.counter = 0;
        this.start();
      }

      if (target.id === 'results') {
        this.showResults();
      }
    } 
    
    document.querySelector('.main-buttons').addEventListener('click', onClick.bind(this));
  }

  checkGame() {
    const elements = document.querySelectorAll('.game__cell-content');
    const empty = document.querySelector('.empty');
    let result = [];
    
    const nextElement = empty.nextSibling;

    if (!nextElement) {
      elements.forEach((element) => {
        result.push(element.innerHTML);                     
      }); 
      result.push(0);
    } else {
      const nextValue = nextElement.querySelector('span').innerHTML;

      elements.forEach((element, index) => {
        result.push(element.innerHTML);
        if (elements[index + 1]) {
          if (elements[index + 1].innerHTML === nextValue) {
            result.push(0);
          }
        }      
      });
    }    

    let str = result.join('');
    
    if (this.gameKeys.includes(str)) {
      this.popupAction();
      this.saveResultValue();
    } else {
      console.log('try again')
    }
  }

  popupAction() {  
    const template = `<div class='popup'>
          <div class='popup__content'>      
            <p class='popup__title'>
              «Ура! Вы решили головоломку за ${this.state.time.min}:${this.state.time.sec}
               и ${this.state.counter} ходов»
            </p>
           
            <button class='button popup__button'>OK</button>
          </div>
        </div>`;
  
    const contentWrapper = document.querySelector('main');
    const popup = this.createElement(template);
  
    contentWrapper.appendChild(popup);
    this.closePopup();
  } 

  restart() {
    document.body.innerHTML = '';
    this.state.counter = 0;
    this.state.time.min = '00';
    this.state.time.sec = '00';
    this.start();
  }
  
  saveResultValue() {
    const result = `Ходов ${this.state.counter} Время ${this.state.time.min} : ${this.state.time.sec}`;
    UTILS.saveResult(result);
  }

  showResults() {
    const storedResults = JSON.parse(localStorage.getItem('results'));
    let resultTemplate;

    let emptyValue = `<p class='popup__result-value'>Пусто</p>`;
    const fragment = document.createDocumentFragment();

    const template = `<div class='popup'>
          <div class='popup__content'>      
            <div class='popup__results'></div>           
            <button class='button popup__button'>OK</button>
          </div>
        </div>`;    
    
    const contentWrapper = document.querySelector('main');
    const popup = this.createElement(template);

    if (!storedResults) {
      const empty = this.createElement(emptyValue);
      popup.querySelector('.popup__results').appendChild(empty);
    } else {
      storedResults.forEach((item) => {
        resultTemplate = `<p class='popup__result-value'>${item}</p>`;
        const element = this.createElement(resultTemplate);
        fragment.appendChild(element);
      });       

      popup.querySelector('.popup__results').appendChild(fragment);     
    }
  
    contentWrapper.appendChild(popup);    
    this.closePopup();    
  }

  closePopup() {
    document.querySelector('.popup__button').addEventListener('click', () => {
      const popup = document.querySelector('.popup');
      document.querySelector('main').removeChild(popup); 
      this.restart();    
    });       
  }

  start() {
    const appTemplate = this.getTemplate();
    const app = this.createElement(appTemplate);  
    const gameWrapper = app.querySelector('.game-wrapper');
    const gridWrapper = this.createElement(this.getGameGridTemplate());
    const gridCells = this.getGameGridElements();

    gridWrapper.appendChild(gridCells);
    gameWrapper.appendChild(gridWrapper);
    document.body.appendChild(app);

    this.moveHandler();
    this.switchGridSize();
    this.onButtonClick();
  } 
}
