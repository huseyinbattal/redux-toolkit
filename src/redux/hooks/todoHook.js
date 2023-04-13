import { useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addTodo, deleteToDo  } from "../reducers/todoReducer";

export function useTodo() {
  const dispatch = useDispatch();

  const { todos } = useSelector(({ todo }) => {
    return {
      todos: todo.todos,
    };
  }, shallowEqual);

  const boundAddTodo = useCallback(
    (...args) => dispatch(addTodo(...args)),
    [dispatch]
  );

  const boundDeleteTodo = useCallback(
    (...args) => dispatch(deleteToDo(...args)),
    [dispatch]
  );

  return {
    todos,
    addTodo: boundAddTodo,
    deleteTodo: boundDeleteTodo,
  };
}
