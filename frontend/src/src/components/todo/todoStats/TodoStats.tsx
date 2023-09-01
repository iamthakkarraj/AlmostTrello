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

const getStats = (todoItems: TodoModel[], workspaceId: number) => {
  const todos = todoItems.filter((x) => x.workspaceId === workspaceId);
  const completedCount = todos.filter((x) => x.completed).length;
  const inProgressCount = todos.filter((x) => !x.completed).length;
  return {
    inProgress: {
      count: inProgressCount,
      percentage: (inProgressCount / todos.length) * 100,
      label: TEXT_TODO_STAT_INPROGRESS,
      color: 'error.main'
    },
    completed: {
      count: completedCount,
      percentage: (completedCount / todos.length) * 100,
      label: TEXT_TODO_STAT_COMPLETED,
      color: 'success.main'
    },
    total: {
      count: todos.length,
      percentage: 100,
      label: TEXT_TODO_STAT_TOTAL,
      color: 'primary'
    },
  };
};

const TodoStats = ({
  todoItems,
  workspaceId,
}: {
  todoItems: TodoModel[];
  workspaceId: number;
}) => {
  const stats = getStats(todoItems, workspaceId);
  return (
    <Box sx={{ mx: 2, mt: 2, display: "flex", justifyContent: "center" }}>
      <TodoProgressWithLabel {...stats.inProgress} />
      <TodoProgressWithLabel {...stats.completed} />
      <TodoProgressWithLabel {...stats.total} />
    </Box>
  );
};

export default connect(mapStateToProps)(TodoStats);
