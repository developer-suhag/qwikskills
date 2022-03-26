import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "../components/Layout";
import "../styles/global.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#42d37b",
    },
    secondary: {
      main: "#2c88ff",
    },
    info: {
      main: "#fff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default MyApp;
