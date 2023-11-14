import { Component, Suspense, lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// import PrivateRoute from "./components/private-route";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<>...</>}>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<>...</>}>
                <Login />
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
