import { atom, errorSelector, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const inputTextState = atom({
  key: 'inputTextState',
  default: 0,
});

export const tasksCompletionState = selector({
  key: 'tasksCompletedState',
  get: ({ get }) => {
    const tasks = get(todoListState);
    const tasksCompletedArray = tasks.filter((task) => task.isDone === true);
    const tasksCompleted = tasksCompletedArray.length;
    const percentCompleted =
      tasks.length === 0 ? 0 : (tasksCompleted / tasks.length) * 100;

    return {
      completed: tasksCompleted,
      notFinished: tasks.length - tasksCompleted,
      all: tasks.length,
      percent: percentCompleted,
    };
  },
});

export const doneTasksBtnState = atom({
  key: 'hideDoneTasks',
  default: false,
});

export const filteredTasksState = selector({
  key: 'filteredTasksState',
  get: ({ get }) => {
    const btnStatus = get(doneTasksBtnState);
    const taskList = get(todoListState);

    if (btnStatus) {
      return taskList.filter((task) => !task.isDone);
    } else if (!btnStatus) {
      return taskList;
    }
  },
});
