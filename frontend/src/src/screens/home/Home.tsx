import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ActionBar from "../../components/actionBar/ActionBar";
import Header from "../../components/header/Header";
import TodoContainer from "../../components/todoContainer/todoContainer";

const Home = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleColor={colorMode.toggleColorMode} />
      <ActionBar />
      <TodoContainer></TodoContainer>
    </ThemeProvider>
  );
};

export default Home;
