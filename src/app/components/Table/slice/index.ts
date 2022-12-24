import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Saga } from './saga';
import { TableState } from './types';

export const initialState: TableState = {
  bookData: [],
  bookDataLoading: true,
};

const slice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    handleGetBookData(state, action: PayloadAction<any>) {
      return {
        ...state,
        bookData: action?.payload,
        bookDataLoading: false,
      };
    },
    addGetBookDataLoader(state) {
      return {
        ...state,
        bookDataLoading: true,
      };
    },
  },
});

export const { handleGetBookData, addGetBookDataLoader } = slice.actions;

export const useTableSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: Saga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
