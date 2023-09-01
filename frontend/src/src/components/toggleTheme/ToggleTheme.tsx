import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  TEXT_SWITCH_TO_DARK_MODE,
  TEXT_SWITCH_TO_LIGHT_MODE,
} from "../../common/constants";
import React from "react";

const ToggleTheme = (props: { onClick: () => void }) => {
  const [isDark, setState] = React.useState<boolean>(false);
  const onClickHandler = () => {
    setState(!isDark);
    props.onClick();
  };
  return (
    <IconButton
      title={isDark ? TEXT_SWITCH_TO_LIGHT_MODE : TEXT_SWITCH_TO_DARK_MODE}
      onClick={onClickHandler}
      color="inherit"
    >
      {isDark ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default ToggleTheme;
