import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Grid } from "@mui/material";
import {
  LABEL_COMPLETED_DATE,
  TOOLTIP_DELETE_ICON,
} from "../../../common/constants";
import { TodoModel } from "../../../services/redux/types";
import { Box, Checkbox, IconButton, Typography, useTheme } from "@mui/material";
import TodoItemDate from "../todoItemDate/TodoItemDate";

const TodoItem = (props: {
  todo: TodoModel;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<any>) => {
    if (e.target.checked) {
      props.onToggle(props.todo.id);
    }
    setState(e.target.checked);
  };

  const [state, setState] = React.useState<boolean>(props.todo.completed);

  return (
    <Grid
      item
      sx={{
        pr: 2,
        pb: 1,
        mb: 2,
      }}
    >
      <Box
        sx={{ p: 1, boxShadow: 1, borderRadius: 2 }}
        bgcolor={useTheme().palette.mode === "light" ? "grey.100" : "grey.800"}
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
              {props.todo.title}
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
        <Box sx={{ pb:1, display: "flex", fontsize: "12", justifyContent: "start" }}>
          <Typography
            sx={{
              fontSize: 12,
              alignSelf: "center",
              wordBreak: "break-word",
              textDecoration: state ? "line-through" : "none",
            }}>
            {props.todo.description}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", fontsize: "12", justifyContent: "start" }}>
          <TodoItemDate
            date={props.todo.dueDate}
            icon={<EventAvailableIcon fontSize="inherit" color="action" />}
            label={LABEL_COMPLETED_DATE}
          ></TodoItemDate>
        </Box>
      </Box>
    </Grid>
  );
};

export default TodoItem;
