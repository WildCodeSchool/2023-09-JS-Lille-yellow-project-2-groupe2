import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GameProvider } from "./components/GameContext";

import App from "./App";
import AboutUs from "./components/AboutUs/AboutUs";
import QuizPage from "./components/quiz-page/QuizPage";
import RankingPage from "./components/RankingPage/RankingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/Ranking",
    element: <RankingPage />,
  },
  {
    path: "/casting",
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  </React.StrictMode>
);
