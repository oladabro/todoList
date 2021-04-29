import { atom, selector } from 'recoil';

// tablica z taskami
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

//
export const inputTextState = atom({
  key: 'inputTextState',
  default: 0,
});

//
export const perscentComplatedState = atom({
  key: 'perscentComplated',
  default: 0,
});

// obliczenia na potrzeby statystyk
export const tasksCompletionState = selector({
  key: 'tasksCompletedState',
  get: ({ get }) => {
    const tasks = get(todoListState);
    const tasksCompletedArray = tasks.filter((task) => task.isDone === true);
    const tasksCompleted = tasksCompletedArray.length;
    const percentCompleted =
      tasks.length === 0 ? 0 : (tasksCompleted / tasks.length) * 100;

    let text = 'The hardest thing is to start';

    if (percentCompleted >= 10 && percentCompleted < 20) {
      text = 'Uuuu you are a bit lazy';
    } else if (percentCompleted >= 20 && percentCompleted < 30) {
      text = 'Not in the mood for work today?';
    } else if (percentCompleted >= 30 && percentCompleted < 40) {
      text = 'Go get yourself a cup of coffee, you are on a good track?';
    } else if (percentCompleted >= 40 && percentCompleted < 50) {
      text = 'Nice, you are warming up!';
    } else if (percentCompleted >= 50 && percentCompleted < 60) {
      text = 'Well done! you are half way through!';
    } else if (percentCompleted >= 60 && percentCompleted < 70) {
      text = 'You are getting closer. Do not give up!';
    } else if (percentCompleted >= 70 && percentCompleted < 80) {
      text = 'Not many tasks left';
    } else if (percentCompleted >= 80 && percentCompleted < 90) {
      text = 'You are almost there!';
    } else if (percentCompleted >= 90 && percentCompleted < 100) {
      text = 'Well done! you are a doer!';
    } else if (percentCompleted === 100) {
      text = 'You rock! You can go and relax ;)';
    }

    return {
      completed: tasksCompleted,
      notFinished: tasks.length - tasksCompleted,
      all: tasks.length,
      percent: percentCompleted,
      motivation: text,
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

export const searchTermState = atom({
  key: 'searchTermState',
  default: '',
});
