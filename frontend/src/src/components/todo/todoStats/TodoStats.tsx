import { Box } from "@mui/material";
import {
  TEXT_TODO_STAT_COMPLETED,
  TEXT_TODO_STAT_INPROGRESS,
  TEXT_TODO_STAT_TOTAL,
} from "../../../common/constants";
import { connect } from "react-redux";
import { RootState, TodoModel } from "../../../services/redux/types";
import TodoProgressWithLabel from "../todoProgressWithLabel/TodoProgressWithLabel";

const mapStateToProps = (state: RootState) => {
  return {
    todoItems: state.todo,
  };
};

const getStats = (todoItems: TodoModel[]) => {
  const todos = todoItems;
  const completedCount = todos.filter((x) => x.completed).length;
  const inProgressCount = todos.filter((x) => !x.completed).length;
  return {
    inProgress: {
      count: inProgressCount,
      percentage: todos.length > 0 ? (inProgressCount / todos.length) * 100 : 0,
      label: TEXT_TODO_STAT_INPROGRESS,
      color: 'error.main'
    },
    completed: {
      count: completedCount,
      percentage: todos.length > 0 ? (completedCount / todos.length) * 100 : 0,
      label: TEXT_TODO_STAT_COMPLETED,
      color: 'success.main'
    },
    total: {
      count: todos.length,
      percentage: todos.length > 0 ? 100 : 0,
      label: TEXT_TODO_STAT_TOTAL,
      color: 'primary'
    },
  };
};

const TodoStats = ({
  todoItems,
}: {
  todoItems: TodoModel[];
}) => {
  const stats = getStats(todoItems);
  return (
    <Box sx={{ display: "flex", justifyContent: "start" }}>
      <TodoProgressWithLabel {...stats.inProgress} />
      <TodoProgressWithLabel {...stats.completed} />
      <TodoProgressWithLabel {...stats.total} />
    </Box>
  );
};

export default connect(mapStateToProps)(TodoStats);
