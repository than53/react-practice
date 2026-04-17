import React, { useEffect } from "react";
import "../react-forms/ReactBasicForms.css";
import { useForm } from "react-hook-form";

function ReactHookForms() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const watchName = watch("name");
  const watchEmail = watch("email");

  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name should be alteast 2 characters",
              },
            })}
          />
        </label>
        {errors.name && <p> {errors.name.message} </p>}
        <label>
          Email:
          <input {...register("email", { required: true })} />
        </label>
        {errors.emaik && <p>Email is required</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactHookForms;
