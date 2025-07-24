// In counter.js, create a count variable and only export 2 helper functions to update those (increment, reset):

let count = 0;

export let increment = () => {
  return ++count;
};
export let reset = () => {
  return (count = 0);
};
