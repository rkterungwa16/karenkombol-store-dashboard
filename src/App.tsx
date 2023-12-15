import { Component, Suspense, lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ClientRoutes } from "./routes/client";

// import PrivateRoute from "./components/private-route";

const LoginPage = lazy(() => import("./pages/login"));
const SignupPage = lazy(() => import("./pages/signup"));
const DashboardPage = lazy(() => import("./pages/dashboard"));

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
              <Suspense fallback={<>...</>}>
                <DashboardPage />
              </Suspense>
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
