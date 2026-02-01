import { Inter, Source_Serif_4 } from "next/font/google";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-serif",
});

// Tell MUI to use Inter everywhere instead of Roboto
const theme = createTheme({
  typography: {
    fontFamily: "var(--font-inter)",
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${sourceSerif.variable}`}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
