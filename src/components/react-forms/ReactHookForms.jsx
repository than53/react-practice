import "../react-forms/ReactBasicForms.css";
import { useForm } from "react-hook-form";

function ReactHookForms() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const watchName = watch("name");
  const watchEmail = watch("email");

  const existingUsernames = ["admin", "user123", "john"];
  const checkIfUsernameExist = async (username) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return existingUsernames.includes(username);
  };

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
              validate: {
                notAdmin: (value) =>
                  value !== "admin" || "admin is not allowed",
                isNotNumber: (value) => isNaN(value) || "Name cannot be number",
                checkUsername: async (value) => {
                  const exist = await checkIfUsernameExist(value);
                  return !exist || "Username already taken";
                },
              },
            })}
          />
        </label>
        {errors.name && <p> {errors.name.message} </p>}
        <label>
          Email:
          <input {...register("email", { required: true })} />
        </label>
        {errors.email && <p>Email is required</p>}

        <label>
          Password:
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </label>
         {errors.password && <p>{errors.password.message}</p>}

        <label>
          Confirm Password:
          <input
            type="password"
            {...register("confirmPassword", { required: true,
              validate:(value)=> value ===watch("password") || "Password does not match"
             })}
          />
        </label>
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactHookForms;
