import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { expression } from "../../helpers/regularExpression";

const { name, email, password, userName } = expression;
const CreateAccount = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        userName: "",
        password: "",
      }}
      validate={(values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "Please enter your name";
        } else if (!name.test(values.name)) {
          errors.name =
            "Invalid name. Should have at least one name and lastname (both)";
        }
        if (!values.email) {
          errors.email = "Please enter your email";
        } else if (!email.test(values.email)) {
          errors.email = "Invalid email";
        }
        if (!values.userName) {
          errors.userName = "Please enter a userName";
        } else if (!userName.test(values.userName)) {
          errors.userName =
            "Invalid userName. Should have a four letter word following by a number of at least 2 digits";
        }
        if (!values.password) {
          errors.password = "Please enter your password";
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
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        handleSubmit,
      }) => (
        <form className="forms__login" onSubmit={handleSubmit}>
          <h2>Create account</h2>
          <div className="forms__label">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {console.log(errors)}
          {touched.name && errors.name && (
            <div className="error">{errors.name}</div>
          )}
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
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.userName && errors.userName && (
            <div className="error">{errors.userName}</div>
          )}
          <div className="forms__label">
            <label htmlFor="name">Password</label>
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
          <Link
            to="/auth/login"
            className="anchor pointer forms__anchor"
            id="forms__anchorCreate"
          >
            <p>Login</p>
          </Link>
        </form>
      )}
    </Formik>
  );
};

export default CreateAccount;
