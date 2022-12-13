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
        checkbox.id > 0 ? id = checkbox.id - 1 : id = 0;
        checkbox.checked === true ? checkstat = true : checkstat = false;
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