/* eslint-disable no-useless-escape */
import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { expression } from "../../helpers/regularExpression";
const { email, password } = expression;
const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = "Please enter an email";
        } else if (!email.test(values.email)) {
          errors.email = "Invalid email";
        }
        if (!values.password) {
          errors.password = "Please enter a password";
        } else if (!password.test(values.password)) {
          errors.password = "Password should have at least 8 characters";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        console.log("Formulario enviado");
      }}
    >
      {({
        handleSubmit,
        errors,
        values,
        touched,
        handleChange,
        handleBlur,
      }) => (
        <form className="forms__login" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="forms__label">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.email && errors.email && (
            <div className="error">{errors.email}</div>
          )}
          <div className="forms__label">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.password && errors.password && (
            <div className="error">{errors.password}</div>
          )}
          <button type="submit">
            <i className="fa fa-key" style={{ color: "white" }}></i>
            <span>Send</span>
          </button>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
          <Link to="/auth/register" className="anchor pointer">
            <p>Create new account</p>
          </Link>
        </form>
      )}
    </Formik>
  );
};

export default Login;
