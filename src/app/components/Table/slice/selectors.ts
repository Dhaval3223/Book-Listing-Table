import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.table || initialState;

export const tableSelector = createSelector([selectSlice], state => state);
