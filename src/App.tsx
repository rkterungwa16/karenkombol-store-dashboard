import { Component, Suspense, lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ClientRoutes } from "./routes/client";

import PrivateRoute from "./components/private-route/PrivateRoute";

const LoginPage = lazy(() => import("./pages/login"));
const SignupPage = lazy(() => import("./pages/signup"));
const DashboardPage = lazy(() => import("./pages/dashboard"));
const ProductsPage = lazy(() => import("./pages/products"));
const RolesPage = lazy(() => import("./pages/roles"));
const UsersPage = lazy(() => import("./pages/users"));

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path={ClientRoutes.SIGNUP}
            element={
              <Suspense fallback={<>...</>}>
                <SignupPage />
              </Suspense>
            }
          />
          <Route
            path={ClientRoutes.LOGIN}
            element={
              <Suspense fallback={<>...</>}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path={ClientRoutes.DASHBOARD}
            element={
              // <PrivateRoute>
              //   <Suspense fallback={<>...</>}>
              //     <DashboardPage />
              //   </Suspense>
              // </PrivateRoute>
              <Suspense fallback={<>...</>}>
                <DashboardPage />
              </Suspense>
            }
          />
          <Route
            path={`${ClientRoutes.PRODUCT}/:category`}
            element={
              <PrivateRoute>
                <Suspense fallback={<>...</>}>
                  <ProductsPage />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path={`${ClientRoutes.ROLES}`}
            element={
              <PrivateRoute>
                <Suspense fallback={<>...</>}>
                  <RolesPage />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path={`${ClientRoutes.USERS}`}
            element={
              <PrivateRoute>
                <Suspense fallback={<>...</>}>
                  <UsersPage />
                </Suspense>
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Suspense fallback={<>...</>}>
                  <Chat />
                </Suspense>
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
