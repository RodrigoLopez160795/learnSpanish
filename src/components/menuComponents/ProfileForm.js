import { Formik } from "formik";
import React from "react";
import { expression } from "../../helpers/regularExpression";
const ProfileForm = () => {
  const { name, email, userName } = expression;
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        userName: "",
        nativeLanguage: "",
        interests: "",
      }}
      validate={(values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "Please enter your name";
        }
        if (!values.email) {
          errors.email = "Please enter your email";
        }
        if (!values.userName) {
          errors.userName = "Please enter your username";
        }
        if (!values.nativeLanguage) {
          errors.nativeLanguage = "Please enter your native language";
        }
        if (!values.interests) {
          errors.interests = "You have to give us at least one hobbie";
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
        <form onSubmit={handleSubmit}> 
          <div className="profileforms__row">
            <div className="profileforms__input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>
            <div className="profileforms__input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
          </div>
          <div className="profileforms__row">
            <div className="profileforms__input">
              <label htmlFor="userName">UserName</label>
              <input
                type="text"
                name="userName"
                placeholder="Enter your userName"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.userName && errors.userName && (
                <div className="error">{errors.userName}</div>
              )}
            </div>
            <div className="profileforms__input">
              <label htmlFor="nativeLanguage">Native language</label>
              <input
                type="text"
                name="nativeLanguage"
                placeholder="Enter your native "
                value={values.nativeLanguage}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nativeLanguage && errors.nativeLanguage && (
                <div className="error">{errors.nativeLanguage}</div>
              )}
            </div>
          </div>
          <div className="profileforms__biography">
            <label htmlFor="biography">Interests</label>
            <textarea
              className="profileforms__textArea"
              placeholder="Tell us something about you"
              name="interests"
              value={values.interests}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {touched.interests && errors.interests && (
              <div className="error">{errors.interests}</div>
            )}
          </div>
          <button className="navbar__button profileforms__button" type="submit">
            Save
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ProfileForm;
