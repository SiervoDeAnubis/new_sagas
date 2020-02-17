import { take, put } from "redux-saga/effects";

const INCREASE = "INCREASE";

export const reducer = (state = 1, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    default:
      return state;
  }
};

export const onClickIncrease = function*() {
  while (yield take("BUTTON_CLICKED")) yield put({ type: "INCREASE" });
};
