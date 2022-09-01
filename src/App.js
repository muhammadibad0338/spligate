import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Layout from './Layout/Layout';

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito-Regular", "sans-serif"].join(","),
    fontSize: 12,
  },
  overrides: {
    MuiButton: {
      root: {
        height: 40,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Layout />
    </ThemeProvider>
  );
}

export default App;
