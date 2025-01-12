import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '@fontsource/dm-sans';
import "@fontsource/dm-sans/100.css";
import "@fontsource/dm-sans/200.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/dm-sans/800.css";
import "@fontsource/dm-sans/900.css";

import "./index.scss";
import App from "./App.tsx";
import { ThemeProvider } from "./ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
