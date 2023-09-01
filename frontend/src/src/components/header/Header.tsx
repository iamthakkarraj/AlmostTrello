import { Box, Typography, useTheme } from "@mui/material";
import {
  TEXT_COPYRIGHT,
  TEXT_TODO_WIDGET_HEADER,
} from "../../common/constants";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const Header = (props: { toggleColor: () => void }) => {
  return (
    <Box
      bgcolor={useTheme().palette.mode === "light" ? "grey.100" : "grey.800"}
      sx={{ display: "flex", px: 5, py: 2, boxShadow: 1 }}
    >
      <ToggleTheme onClick={props.toggleColor}></ToggleTheme>
      <Typography sx={{ alignSelf: "center" }} variant="h4" component="h2">
        {TEXT_TODO_WIDGET_HEADER}
      </Typography>
      <Typography sx={{ mx: 1, alignSelf: "center", fontSize: 12 }}>
        {TEXT_COPYRIGHT}
      </Typography>
    </Box>
  );
};

export default Header;
