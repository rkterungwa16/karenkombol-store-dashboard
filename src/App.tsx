import { Component, Suspense, lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// import PrivateRoute from "./components/private-route";

const LoginPage = lazy(() => import("./pages/login"));
const SignupPage = lazy(() => import("./pages/signup"));
const AppPage = lazy(() => import("./pages/app"));

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<>...</>}>
                <SignupPage />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<>...</>}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<>...</>}>
                <AppPage />
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
