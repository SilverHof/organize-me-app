import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksPageSliceReducer from "./reducers/tasksPage.slice"

const rootReducer = combineReducers({
   tasksPageSliceReducer
})

const store = configureStore({
   reducer: rootReducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;