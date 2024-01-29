import React, { useEffect, useRef } from "react";
// Import SvgWhiteLogo from your SVG component
import "../Login/index.scss"; // Import your custom styles
// import SvgWhiteLogo from '../../../assets/icons/SvgWhiteLogo';
import InputField from "../../../components/InputField";
import { Button } from "primereact/button";
import SvgWhiteLogo from "../../../assets/icons/SvgWhiteLogo";
import SvgLogo from "../../../assets/icons/SvgLogo";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { TOKEN } from "../../../utility/constant";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import CustomToast from "../../../components/Toast";

const initialValue = {
  EmailAddress: "",
  Password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const token = Cookies.get(TOKEN);
  const toastRef = useRef(null);

  const validate = (values) => {
    const errors = {};

    if (!values.EmailAddress) {
      errors.EmailAddress = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.EmailAddress)) {
      errors.EmailAddress = "Invalid email address";
    }

    if (!values.Password) {
      errors.Password = "Password is required";
    } else if (values.Password.length < 6) {
      errors.Password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleNavigate = () => {
    navigate("register");
  };

  const handleSubmit = (values) => {
    console.log(values, "values");
    if (
      values.EmailAddress === "broker@zealeye.com" &&
      values.Password === "test@123"
    ) {
      Cookies.set(TOKEN,"token");
      toastRef.current.showToast();
      navigate("/");
      setTimeout(() => {
        // navigate("/");
        window.location.reload();
      }, 500);
    } else {
    }
  };
  useEffect(() => {
    console.log('testing')
    if (location.pathname === "/login" && Cookies.get(TOKEN)) {
      navigate("/");
    }
    if (location.pathname === "/" && Cookies.get(TOKEN) === undefined) {
      navigate("/login");
    }
  });
  

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <div className="grid m-0 container__login">
            <CustomToast
              ref={toastRef}
              message="Login Successfully"
            />
            <div className="col-12 md:col-8 left__side__login">
              <div>
                <div className="p-mt-5 side__logo">
                  <div className="p-mt-1 welcome__text">Welcome to</div>
                  <SvgWhiteLogo color={"#fff"} />
                  {/* <div className="logo__cover___white">Cover</div> */}
                </div>

                <div className="welcome__content mt-2">
                  A productive finance dashboard for all your needs
                </div>
              </div>
            </div>
            <div className="col-12 md:col-4 login__side__screen p-5">
              <div className="col-12 md:col-12 lg:col-12  ">
                <div className="logo__icon">
                  <SvgWhiteLogo color={"#000"} />
                </div>
              </div>
              <div className="col-12 md:col-12 lg:col-12  ">
                <div className="login__header">Log in</div>
              </div>
              <div className="col-12 md:col-12 lg:col-12   ">
                <div
                  className="dont__have__text"
                  onClick={() => handleNavigate()}
                >
                  Don’t have an account?
                  <span className="register">Register</span>
                </div>
              </div>
              <div className="col-12 md:col-12 lg:col-12  ">
                <InputField
                  classNames="input__filed"
                  placeholder="Email Address"
                  value={formik.values.EmailAddress}
                  onChange={formik.handleChange("EmailAddress")}
                />
                {formik.touched.EmailAddress && formik.errors.EmailAddress && (
                  <div style={{ fontSize: 12, color: "red" }} className="mt-1">
                    {formik.errors.EmailAddress}
                  </div>
                )}
              </div>
              <div className="col-12 md:col-12 lg:col-12  ">
                <InputField
                  classNames="input__filed"
                  placeholder="Password"
                  value={formik.values.Password}
                  onChange={formik.handleChange("Password")}
                />
                {formik.touched.Password && formik.errors.Password && (
                  <div style={{ fontSize: 12, color: "red" }} className="mt-1">
                    {formik.errors.Password}
                  </div>
                )}
              </div>
              <div className="col-12 md:col-12 lg:col-12  ">
                <Button
                  className="login__button"
                  label="Login"
                  onClick={() => formik.handleSubmit()}
                />
              </div>
              <div className="col-12 md:col-12 lg:col-12  ">
                <div className="forget__text">Forgot password?</div>
              </div>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default Login;
