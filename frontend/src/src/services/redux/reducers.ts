import { combineReducers } from "redux";
import {
  ADD_ITEM,
  ADD_WORKSPACE,
  FILTER_ALL,
  REMOVE_ITEM,
  REMOVE_WORKSPACE,
  SET_WORKSPACE_FILTER,

  TOGGLE_TODO,
} from "./actions";
import {

  TodoActionTypes,
  TodoModel,
  WorkspaceActionType,
  WorkspaceModel,
} from "./types";

const todoReducer = (
  state: TodoModel[] = [],
  action: TodoActionTypes
): TodoModel[] => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
          createdDate: new Date(),
          workspaceId: action.workspaceId,
        },
      ];
    case REMOVE_ITEM:
      return [...state.filter((item) => item.id !== action.id)];
    case TOGGLE_TODO:
      return state.map((todo: TodoModel) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed, completedDate: new Date() }
          : todo
      );
    default: {
      return state;
    }
  }
};

const workspaceReducer = (
  state: WorkspaceModel[] = [],
  action: WorkspaceActionType
): WorkspaceModel[] => {
  switch (action.type) {
    case ADD_WORKSPACE:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          filter: FILTER_ALL,
        },
      ];
    case REMOVE_WORKSPACE:
      return [...state.filter((item) => item.id !== action.id)];
    case SET_WORKSPACE_FILTER:
      const workspace =
        state.find((item) => item.id === action.workspaceId) ??
        ({} as WorkspaceModel);
      workspace.filter = action.value;
      return [...state];
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  todo: todoReducer,
  workspace: workspaceReducer,
});

export { rootReducer, todoReducer, workspaceReducer };
