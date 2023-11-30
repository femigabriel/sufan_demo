/* eslint-disable react/prop-types */
import { Navigate, useLocation, Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/User/LandingPage";
import ServicesPage from "./pages/User/Services";
import EachServices from "./pages/User/Services/EachServices";
import LoginPage from "./pages/User/Auth/Login";
import Register from "./pages/User/Auth/register";
import { useGetUser } from "./hooks/getUserHook";
import Dashboard from "./pages/User/Dashboard";
import VerfiyUser from "./pages/User/Auth/VerifyUser";
import PaymentSuccessPage from "./pages/User/Payments/Success";
import AdminLogin from "./pages/Admin/Auth/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import { PageNotFound } from "./pages/PageNotFound";
import {InvestmentsPage} from "./pages/User/Investments";
import {InvestmentLandingPage} from "./pages/User/Investments/InvestmentLandingPage";
import {InvestmentsPurchasePage} from "./pages/User/Investments/Purchase";

const AllRoutes = () => {
  const { isLoggedIn, user } = useGetUser();

  const isAdmin = user?.accountType?.toLowerCase() === 'admin' ? true : false;

  const PrivateRoute = ({ type, redirectUrl, children, extraOption = true }) => {
    let location = useLocation();
    return (
      <>
        {isLoggedIn && extraOption ? (
          children || <Outlet />
        ) : !extraOption && isLoggedIn ? (
          <Navigate
            to={`/${isAdmin
              ? "admin/dashboard"
              : redirectUrl ||
              "user/login"
              }`}
            state={{ from: location }}
          />
        ) : (
          <Navigate
            to={`/${type?.toLowerCase() !== "admin" ? "user" : type
              }/login?redirectTo=${location.pathname}`}
            state={{ from: location }}
          />
        )}
      </>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<Outlet />} >
        <Route path="login" element={isLoggedIn ? <Navigate to="/admin/dashboard" /> : <AdminLogin />} />
        <Route path="dashboard" element={
          <PrivateRoute type={'admin'} extraOption={isAdmin} >
            <AdminDashboard />
          </PrivateRoute>
        }
        />
      </Route>

      {/* USER ROUTES */}
      <Route path="/user" element={<Outlet />} >
        <Route path="login" element={isLoggedIn ? <Navigate to="/user/dashboard" /> : <LoginPage />} />
        <Route path="verify-otp" element={isLoggedIn ? <Navigate to="/user/dashboard" /> : <VerfiyUser />} />
        <Route path="sign-up" element={isLoggedIn ? <Navigate to="/user/dashboard" /> : <Register />} />
        <Route path="payment-success" element={<PaymentSuccessPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="investments" element={<InvestmentsPage />} />
        <Route path="investments/landing-page" element={<InvestmentLandingPage />} />
        <Route path="investments/purchase" element={<InvestmentsPurchasePage />} />
        <Route path="services/:id" element={<EachServices />} />

        <Route path="dashboard" element={
          <PrivateRoute type={'user'} extraOption={!isAdmin} >
            <Dashboard />
          </PrivateRoute>
        }
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
