import { createSelector } from "reselect";
import { initialState } from "./reducers";

const selectUser = (state) => state.user || initialState;
const makeSelectUser = createSelector(selectUser, (state) => state.user);

export default [makeSelectUser];
