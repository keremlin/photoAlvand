import { LANGUAGE_EN, LANGUAGE_FA } from "./types";
import {store} from './../store';

export const setLanguage = () => {
  console.log(store.getState().language);
  if (store.getState().language.language === 'fa') return ({
    type: LANGUAGE_EN,
    payload: 'en',
  })
  else return ({
    type: LANGUAGE_FA,
    payload: 'fa',
  })
};

