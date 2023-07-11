import React from "react";
import "./TasksPage.scss";
import { createColumn } from "../../store/reducers/tasksPage.slice";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";

export const TasksPage = () => {

   const dispatch = useAppDispatch();   
   const data = useAppSelector((state) => state.tasksPageSliceReducer.column1);
   
   const handleCreateColumn = () => {
      dispatch(createColumn("sdf"))
   };
   console.log(import.meta.env.VITE_REACT_APP);
   
   return (
      <section className="tasks-page">
         <div className="tasks-page__inner">
            <button
               className="tasks-page__create-column-button"
               onClick={handleCreateColumn}
            >
               Add new column
               
            </button>
         </div>
      </section>
   );
};
