import "./App.css";
// React Router
import {Route, Routes } from "react-router-dom";
// Components
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import MyProfile from "./components/core/Dashboard/MyProfile";
// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail"
// import ViewCourse from "./pages/ViewCourse"

function App() {
  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Open Route - for Only Non Logged in User */}
      <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
         <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
         <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
         <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

         {/* Private Route - for Only Logged in User */}
         <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />  

        {/* Route for all users */}
        <Route path="dashboard/my-profile" element={<MyProfile />} />
    </Routes>
   </div>
  );
}

export default App;
