import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { handleGetBookData } from '.';
import * as types from './action_types';
import axios from 'axios';

const getBookData = () => {
  return axios.get('https://mocki.io/v1/f7055a28-703d-47d9-9a39-0522d4e133e8');
};

function* callGEtBookDataGenerator(data) {
  try {
    const response = yield call(getBookData);
    yield put(handleGetBookData(response?.data));
  } catch (e) {
    yield put(handleGetBookData(e));
  }
}

export function* Saga() {
  yield takeLatest(types.GET_BOOK_DATA, callGEtBookDataGenerator);
}
