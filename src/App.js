import "./App.css";
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import {Route, Routes, useNavigate } from "react-router-dom";
// Components
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import About from "./pages/About"
import Cart from "./components/core/Dashboard/Cart"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error"
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings"
// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail"
// import ViewCourse from "./pages/ViewCourse"
import { ACCOUNT_TYPE } from "./utils/constants"
import MyCourses from "./components/core/Dashboard/MyCourses";
import AddCourse from './components/core/Dashboard/AddCourse'
import EditCourse from "./components/core/Dashboard/EditCourse";

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

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
        >  
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />

           {/* Route only for Students */}
           {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
              <Route path="dashboard/cart" element={<Cart />} />
            </>
          )}

            {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="/dashboard/my-courses" element={<MyCourses />} />
              <Route path="/dashboard/edit-course/:courseId" element={<EditCourse />} />
            </>
          )}
        </Route>

        

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
    </Routes>
   </div>
  );
}

export default App;
