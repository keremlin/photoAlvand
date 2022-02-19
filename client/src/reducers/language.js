import { LANGUAGE_FA, LANGUAGE_EN } from "../actions/types";

const initialState = {LANGUAGE_FA};

export default function language(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LANGUAGE_EN:
      return { language: payload };

    case LANGUAGE_FA:
      return { language: payload };

    default:
      return state;
  }
}
