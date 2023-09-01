import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EventIcon from "@mui/icons-material/Event";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import {
  LABEL_CREATED_DATE,
  LABEL_COMPLETED_DATE,
  TOOLTIP_DELETE_ICON,
} from "../../../common/constants";
import { TodoModel } from "../../../services/redux/types";
import { Box, Checkbox, IconButton, Typography, useTheme } from "@mui/material";
import TodoItemDate from "../todoItemDate/TodoItemDate";

const TodoItem = (props: {
  todo: TodoModel;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<any>) => {
    if (e.target.checked) {
      props.onToggle(props.todo.id);
    }
    setState(e.target.checked);
  };

  const [state, setState] = React.useState<boolean>(props.todo.completed);

  return (
    <Box
      bgcolor={useTheme().palette.mode === "light" ? "grey.100" : "grey.800"}
      sx={{
        boxShadow: 1,
        borderRadius: 2,
        px: 2,
        py: 1,
        mb: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <Checkbox
            sx={{ pl: 0 }}
            checked={state}
            disabled={props.todo.completed}
            onChange={handleChange}
            color="primary"
          />
          <Typography
            sx={{
              alignSelf: "center",
              wordBreak: "break-word",
              textDecoration: state ? "line-through" : "none",
            }}
          >
            {props.todo.text}
          </Typography>
        </Box>
        <IconButton
          color="primary"
          component="label"
          title={TOOLTIP_DELETE_ICON}
          onClick={() => props.onDelete(props.todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", fontsize: "12", justifyContent: "start" }}>
        <TodoItemDate
          date={props.todo.createdDate}
          icon={<EventIcon fontSize="inherit" color="action" />}
          label={LABEL_CREATED_DATE}
        ></TodoItemDate>
        <TodoItemDate
          date={props.todo.completedDate}
          icon={<EventAvailableIcon fontSize="inherit" color="action" />}
          label={LABEL_COMPLETED_DATE}
        ></TodoItemDate>
      </Box>
    </Box>
  );
};

export default TodoItem;
