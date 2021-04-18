export const url = 'http://localhost:8000/tasks';

export const updateArrayAtIndex = (array, id, newItem) => {
  const newArray = [...array];
  let index = newArray.findIndex((el) => el.id === id);

  newArray[index] = newItem;
  return newArray;
};

export const removeArrayAtIndex = (array, id) => {
  return array.filter((item) => item.id !== id);
};

export const maxInputLength = 50;

export const minInputLength = 2;
