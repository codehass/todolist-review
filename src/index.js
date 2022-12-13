import './style.css';

import MainFunction from './method.js';
import Interact from './interaction.js';

const userInput = document.querySelector('.add-item');
const addActivity = document.querySelector('.add-activity');

userInput.addEventListener('submit', (e) => {
  e.preventDefault();
  MainFunction.addTodo(addActivity.value);
  addActivity.value = '';
});

document.querySelector('.clearBtn').addEventListener('click', Interact.clearCompleted);

window.addEventListener('load', () => {
  document.addEventListener('listUpdated', () => {
    Interact.checkStatusEvent();
  }, false);
  Interact.checkStatusEvent();
});

MainFunction.genList();
