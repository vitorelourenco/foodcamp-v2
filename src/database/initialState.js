import allCategories from "./menuData";
import deepCopy from '../general_functions/deepCopy';

const initialState = deepCopy(allCategories);

initialState.forEach((_, i) => {
  initialState[i] = initialState[i].items;
  initialState[i].forEach((_, j) => {
    initialState[i][j].amount = 0;
  });
});

export default initialState;
