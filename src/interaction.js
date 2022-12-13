import MainFunction from './method.js';

export default class Interact {
    static changeCompletedToDo = (checkstat, id) => {
      const taskList = MainFunction.getListFromStorage();
      taskList[id].completed = checkstat;
      MainFunction.addToStore(taskList);
      MainFunction.genList();
    }

    static checkStatusEvent = () => (
      document.querySelectorAll('.check').forEach((checkbox) => checkbox.addEventListener('change', () => {
        let checkstat;
        let id;
        if (checkbox.id > 0) {
          id = checkbox.id - 1;
        } else {
          id = 0;
        }

        if (checkbox.checked === true) {
          checkstat = true;
        } else if (checkbox.checked !== true) {
          checkstat = false;
        }

        this.changeCompletedToDo(checkstat, id);
      }))
    )

    static clearCompleted = () => {
      let taskList = MainFunction.getListFromStorage();

      taskList = taskList.filter((item) => item.completed !== true);
      MainFunction.indexNew(taskList);
      MainFunction.addToStore(taskList);
      MainFunction.genList();
    }
}