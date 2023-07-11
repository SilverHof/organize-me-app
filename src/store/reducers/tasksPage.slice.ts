import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const columns = {
   column1: {
      name: "ToDo",
      tasks: [],
   },
};

export const tasksPageSlice = createSlice({
   name: "tasksPageSlice",
   initialState: columns,
   reducers: {
      createColumn: (state, action: PayloadAction<string>) => {
         console.log("Working correct");
      },
      deleteColumn: (state, action: PayloadAction<string>) => {
         console.log();
      },
      editColumn: (state, action: PayloadAction<string>) => {
         console.log();
      },
      createTask: (state, action: PayloadAction<string>) => {
         console.log();
      },
      deleteTask: (state, action: PayloadAction<string>) => {
         console.log();
      },
      editTask: (state, action: PayloadAction<string>) => {
         console.log();
      },
      moveTask: (state, action: PayloadAction<string>) => {
         console.log();
      },
   },
});

export default tasksPageSlice.reducer;
export const {
   createColumn,
   deleteColumn,
   editColumn,
   createTask,
   deleteTask,
   editTask,
   moveTask,
} = tasksPageSlice.actions;