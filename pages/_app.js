import "../styles/globals.css";
import { DarkModeContextProvider } from "../components/useContext/DarkmodeContext";

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeContextProvider>
      <Component {...pageProps} />
    </DarkModeContextProvider>
  );
}

export default MyApp;
