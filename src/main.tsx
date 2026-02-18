import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

/* ================= React Query Client ================= */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

/* ================= MUI Theme ================= */

const theme = createTheme();

/* ================= Render ================= */

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                fontSize: "14px",
              },
            }}
          />

          <App />

        </BrowserRouter>

      </ThemeProvider>

    </QueryClientProvider>

  </React.StrictMode>
);
