import React, { useState } from "react";
import { omit } from "lodash";

const initialFormValues = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
};

export const useFormControls = (callback) => {
  // We'll update "values" as the form updates
  const [values, setValues] = useState(initialFormValues);
  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState([]);
  const validate = (event, name, value) => {
    //A function to validate each input values
    switch (name) {
      case "username":
        if (value.length <= 4) {
          // we will set the error state

          setErrors({
            ...errors,
            username: "Username must have atleast 5 characters",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "username");
          setErrors(newObj);
        }
        break;
      case "firstName":
        if (value.length < 2) {
          // we will set the error state

          setErrors({
            ...errors,
            firstName: "FirstName must have atleast 2 characters",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "firstName");
          setErrors(newObj);
        }
        break;
      case "lastName":
        if (value.length < 2) {
          // we will set the error state

          setErrors({
            ...errors,
            lastName: "Last name must have atleast 2 characters",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "lastName");
          setErrors(newObj);
        }
        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleInputValue = (e) => {
    // this function will be triggered by the text field's onBlur and onChange events
    const { name, value } = e.target;

    validate(e, name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    // this function will be triggered by the submit event
    e.preventDefault();
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();

      alert("Success");
    } else {
      console.log("There is an Error!", errors);
    }
  };

  return {
    handleInputValue,
    handleFormSubmit,
    values,
    errors,
  };
};
