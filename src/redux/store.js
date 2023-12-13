import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducers from "./mainReducer";
// import logger from 'redux-logger';

const resetStoreActionType = "main/resetStore";

const combinedReducer = combineReducers(reducers);
export const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === resetStoreActionType) {
        // eslint-disable-next-line
        state = undefined;
    }
    return combinedReducer(state, action);
};

const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const resetStore = () => {
    store.dispatch({ type: resetStoreActionType });
};

export default store;
