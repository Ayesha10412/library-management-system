import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { store } from "./middleware/store";
import { router } from "./routes/router";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <div className="font-roboto">
        <RouterProvider router={router}></RouterProvider>
      </div>
      <Toaster />
    </Provider>
  </StrictMode>
);
