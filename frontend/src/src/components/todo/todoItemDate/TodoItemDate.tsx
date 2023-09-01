import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

const TodoItemDate = (props: {
  date?: Date;
  label: string;
  icon: ReactNode;
}) => {
  if (props.date) {
    const date = new Date(props.date);
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const formattedDate = `${props.label} : ${month}-${day}-${year}`;
    return (
      <Box sx={{ display: "flex", fontSize: "small" }}>
        {props.icon}
        <Typography sx={{ fontSize: 10, color: "text.secondary", alignSelf: "flex-end", ml: 0.5, mr: 2 }}>{formattedDate}</Typography>
      </Box>
    );
  } else {
    return <></>;
  }
};

export default TodoItemDate;
