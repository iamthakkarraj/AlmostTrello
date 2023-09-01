import TodoItem from "../todoItem/TodoItem";
import {
  RootState,
  TodoModel,
} from "../../../services/redux/types";
import { Grid } from "@mui/material";
import {
  toggleTodo,
  removeItem,
} from "../../../services/redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => {
  return {
    todoItems: state.todo,
  };
};

const mapDispatchToProps = {
  toggleTodo,
  removeItem,
};

export const TodoList = ({
  todoItems,
  toggleTodo,
  removeItem,
}: {
  todoItems: TodoModel[];
  toggleTodo: (id: string) => void;
  removeItem: (id: string) => void;
}) => {
  const todos = todoItems.map((x: TodoModel) => (
    <TodoItem key={x.id} onDelete={removeItem} onToggle={toggleTodo} todo={x} />
  ));
  return <Grid
    container
    xs={8}
    lg={8}
    md={8}
    sm={8}
    sx={{
      mr: 2,
      mb: 2,
    }}
  >{todos}</Grid>;
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
