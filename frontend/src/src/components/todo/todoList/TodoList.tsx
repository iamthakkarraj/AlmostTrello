import TodoItem from "../todoItem/TodoItem";
import React from "react";
import {
  RootState,
  TodoModel,
  WorkspaceModel,
} from "../../../services/redux/types";
import {
  toggleTodo,
  removeItem,
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLETE,
} from "../../../services/redux/actions";
import { connect } from "react-redux";
import { Box } from "@mui/material";

const mapStateToProps = (state: RootState) => {
  return {
    todoItems: state.todo,
    workspaces: state.workspace,
  };
};

const mapDispatchToProps = {
  toggleTodo,
  removeItem,
};

const getVisibleTodos = (todos: TodoModel[], filter: string): TodoModel[] => {
  switch (filter) {
    case FILTER_ALL: {
      return todos.sort(
        (a: TodoModel, b: TodoModel) =>
          Number(a.completed) - Number(b.completed)
      );
    }
    case FILTER_ACTIVE: {
      return todos.filter((c: TodoModel) => !c.completed);
    }
    case FILTER_COMPLETE: {
      return todos.filter((c: TodoModel) => c.completed);
    }
    default:
      return todos;
  }
};

const getWorkspaceTodos = (
  todos: TodoModel[],
  workspaceId: number
): TodoModel[] => {
  return todos.filter((x: TodoModel) => x.workspaceId === workspaceId);
};

export const TodoList = ({
  todoItems,
  toggleTodo,
  removeItem,
  workspaces,
  workspaceId,
}: {
  todoItems: TodoModel[];
  toggleTodo: (id: number) => void;
  removeItem: (id: number) => void;
  workspaces: WorkspaceModel[];
  workspaceId: number;
}) => {
  const todos = getVisibleTodos(
    getWorkspaceTodos(todoItems, workspaceId),
    workspaces.find((x) => x.id === workspaceId)?.filter ?? FILTER_ALL
  ).map((x: TodoModel) => (
    <TodoItem key={x.id} onDelete={removeItem} onToggle={toggleTodo} todo={x} />
  ));
  return <Box sx={{ height: 380, m: 1, p: 1, overflowY: "auto" }}>{todos}</Box>;
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
