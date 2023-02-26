import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import AuthBaseLayout from "./AuthBaseLayout/AuthBaseLayout";

const PrivateRouter: React.FC = () => {
  const privateRoutes = [
    {
      path: ROUTES.ADMIN_DASHBOARD,
      element: lazy(() => import("../pages/Home/Home")),
    },
    {
        path: ROUTES.ADMIN_ABOUT,
        element: lazy(() => import("../pages/About/About")),
      },
    {
      path: "*",
      element: lazy(() => import("../pages/NotFound/NotFound")),
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthBaseLayout />}>
          {privateRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={
                <React.Suspense fallback={<>...</>}>
                  {<route.element />}
                </React.Suspense>
              }
              key={index}
            ></Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRouter;
