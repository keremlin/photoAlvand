import { LANGUAGE_EN, LANGUAGE_FA } from "./types";
import { store } from './../store';

export const setLanguage = () => {
  if (store.getState().language.language === 'fa' || typeof store.getState().language.language === "undefined") return ({
    type: LANGUAGE_EN,
    payload: 'en',
  })
  else return ({
    type: LANGUAGE_FA,
    payload: 'fa',
  })
};

