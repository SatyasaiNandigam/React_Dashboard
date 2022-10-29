import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer, Navbar, Sidebar } from "./components";
import Protected from "./Protected";

import {
  DashBoard,
  Layouts,
  AccountSettings,
  Authentications,
  Cards,
  UserInterface,
  Misc,
  Login,
  SignUp,
  ForgotPassword,
} from "./pages";

import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  const { isMenu } = useStateContext();

  return (
    <div>
      <AuthContextProvider>
        <Router>
          <div className="flex relative dark:bg-main-dark-bg ">
            {isMenu ? (
              <div className="w-72 sidebar fixed dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                isMenu ? "md:ml-72" : "flex-2"
              }`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>

              <div>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Protected>
                        <DashBoard />
                      </Protected>
                    }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<SignUp />} />
                  <Route path="/forgotpassword" element={<ForgotPassword />} />
                  <Route
                    path="/Dashboard"
                    exact
                    element={
                      <Protected>
                        <DashBoard />
                      </Protected>
                    }
                  />
                  <Route
                    path="/Layouts"
                    element={
                      <Protected>
                        <Layouts />
                      </Protected>
                    }
                  />
                  <Route
                    path="/React_Dashboard/"
                    element={
                      <Protected>
                        <DashBoard />
                      </Protected>
                    }
                  />

                  <Route
                    path="/AccountsandSettings"
                    element={
                      <Protected>
                        <AccountSettings />
                      </Protected>
                    }
                  />
                  <Route
                    path="/Authentications"
                    element={
                      <Protected>
                        <Authentications />
                      </Protected>
                    }
                  />
                  <Route
                    path="/Misc"
                    element={
                      <Protected>
                        <Misc />
                      </Protected>
                    }
                  />
                  <Route
                    path="/Cards"
                    element={
                      <Protected>
                        <Cards />
                      </Protected>
                    }
                  />
                  <Route
                    path="/UserInterface"
                    element={
                      <Protected>
                        <UserInterface />
                      </Protected>
                    }
                  />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </Router>
      </AuthContextProvider>
    </div>
  );
};

export default App;
