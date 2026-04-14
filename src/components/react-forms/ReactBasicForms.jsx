import React, { useState } from "react";
import "../react-forms/ReactBasicForms.css";
function ReactBasicForms() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newError = {};
    if (!formData.name.trim()) {
      newError.name = "Name is Required";
    }

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();

    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
    } else {
      console.log("Form Data submitted!", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData.name);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (errors[name]) {
      const newErrors = { ...errors };

      delete newErrors[name];

      setErrors(newErrors);
    }
  };
  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          /><br />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}{" "}
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactBasicForms;
